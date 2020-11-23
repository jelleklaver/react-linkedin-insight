import { isBrowser } from 'browser-or-node';

/**
 * LinkedIn Insight Tag module
 *
 * @package linkedin-insight
 * @author Jelle Klaver
 */

class LinkedInTag {
  constructor() {
    this.initialized = false;
    this.disabled = false;
    this.partnerId = '';
    this.subDomain = 'dc';
  }

  /**
   * Warn
   * @param  {...any} args
   */
  warn(...args) {
    // eslint-disable-next-line no-console
    console.info(...['[linkedin-insight-tag]'].concat(args));
  }

  /**
   * Verifies if the Insight Tag is initiated
   *
   * @return {boolean} initialized
   */
  verifyInit() {
    if (!this.initialized) {
      this.warn(
        'LinkedIn Insight Tag not initialized. Before using, call LinkedInTag.init with required params',
      );
    }

    return this.initialized;
  }

  /**
   * Initializes the Insight Tag with a LinkedIn Partner ID.
   * This ID can be extracted from the javascript which LinkedIn provides.
   * It is stated like '_linkedin_partner_id = "123456";' on the second row
   * of the code they provide. The "123456" is your partnerId.
   *
   * @param {string} partnerId - The partner id received from LinkedIn.
   * @param {string} subDomain - The the subDomain to use. Default 'dc'
   *
   * @return void
   */
  init(partnerId, subDomain, disabled = !isBrowser) {
    this.disabled = disabled;
    this.partnerId = String(partnerId);

    if (disabled) return;
    if (!this.partnerId) this.warn('Partner id is empty.');
    if (subDomain) this.subDomain = subDomain;

    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(partnerId);

    const script = document.getElementsByTagName('script')[0];
    const tagScript = document.createElement('script');
    tagScript.type = 'text/javascript';
    tagScript.async = true;
    tagScript.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    script.parentNode.insertBefore(tagScript, script);

    this.initialized = true;
  }

  /**
   * Track a conversion action based on conversion ID.
   * Once a conversion is created in the LinkedIn Campaign Manager
   * we can get the Conversion ID. The conversion ID can be extracted from
   * an event-specific pixel. The src url they provide holds a query variable
   * 'conversionId=123456'. This 123456 is your conversion id.
   *
   * @param {string?} conversionId - The conversion ID received from LinkedIn
   * @param {string?} partnerId - Override the partnerId for this specific tracking operation
   * @param {string?} subDomain - Override the subDomain for this specific tracking operation
   *
   * @return void
   */
  track(conversionId, partnerId, subDomain) {
    if (!this.verifyInit() || this.disabled) return this.warn('Called `track` before calling `init`.');

    partnerId = partnerId || this.partnerId || window._linkedin_data_partner_ids[0];
    if (!partnerId) return this.warn('Partner id is empty.');

    subDomain = subDomain || this.subDomain;

    let url = `https://${subDomain}.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif`;
    if(conversionId) {
      url = `${url}&conversionId=${conversionId}`;
    }

    // It creates an element without actually posting it to the page. The call is already made to the linkedin servers and will be registered
    const element = document.createElement('img');
    element.alt = '';
    element.height = 1;
    element.width = 1;
    element.src = url;
  }
}

export default new LinkedInTag();
