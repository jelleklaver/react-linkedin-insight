import { isBrowser } from 'browser-or-node';

/**
 * LinkedIn Insight Tag module
 *
 * @package linkedin-insight
 * @author Jelle Klaver
 */

export class LinkedInTag {
  constructor() {
    this.initialized = false;
    this.disabled = !isBrowser;
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
   * @param {string} partnerId - Partner id received from LinkedIn.
   * @param {string} [subDomain='dc'] - Sub domain to use. Default 'dc'
   * @param {boolean} [disabled=!isBrowser] - Disable all tracking, e.g. for SSR or when the user disallows tracking
   *
   * @return void
   */
  init(partnerId, subDomain, disabled) {
    this.partnerId = partnerId;
    this.subDomain = subDomain || this.subDomain;
    if(disabled != null) this.disabled = disabled;

    if (this.disabled) return;
    if (!this.partnerId) this.warn('Partner id is required.');

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
   * @param {string} [conversionId] - The conversion ID received from LinkedIn
   * @param {string} [partnerId] - Override the partnerId for this specific tracking operation
   * @param {string} [subDomain] - Override the subDomain for this specific tracking operation
   *
   * @return [element]
   */
  track(conversionId, partnerId, subDomain) {
    if (this.disabled) return;
    if (!this.verifyInit()) return this.warn('You must call `init` before calling `track`.');

    partnerId = partnerId || this.partnerId || window._linkedin_data_partner_ids[0];
    subDomain = subDomain || this.subDomain;

    let url = `https://${subDomain}.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif`;
    if(conversionId) {
      url = `${url}&conversionId=${conversionId}`;
    }

    // It creates an element without actually adding it to the page DOM.
    // The call is already made to the LinkedIn servers and will be registered.
    const element = document.createElement('img');
    element.alt = '';
    element.height = 1;
    element.width = 1;
    element.src = url;

    return element;
  }
}

export default new LinkedInTag();
