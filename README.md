# react-linkedin-insight
[![](https://badgen.net/github/license/jelleklaver/react-linkedin-insight)](https://github.com/jelleklaver/react-linkedin-insight/blob/master/LICENSE.md)
[![](https://badgen.net/github/open-issues/jelleklaver/react-linkedin-insight)](https://github.com/jelleklaver/react-linkedin-insight/issues)
[![](https://badgen.net/bundlephobia/minzip/react-linkedin-insight)](https://bundlephobia.com/result?p=react-linkedin-insight)
[![](https://badgen.net/npm/v/react-linkedin-insight?icon=npm)](https://npmjs.com/package/react-linkedin-insight)
[![](https://badgen.net/david/dep/jelleklaver/react-linkedin-insight)](https://npmjs.com/package/react-linkedin-insight)
[![](https://badgen.net/npm/dt/react-linkedin-insight?icon=npm)](https://npmjs.com/package/react-linkedin-insight)

Easily add LinkedIn Insight Tag to your application.
It is heavily inspired by [react-facebook-pixel](https://github.com/zsajjad/react-facebook-pixel) from [@zsajjad](https://github.com/zsajjad).

## Install
This repo is available via npm ([react-linkedin-insight](https://www.npmjs.com/package/react-linkedin-insight))
```bash
# npm
npm i react-linkedin-insight

# yarn
yarn add react-linkedin-insight

# or any other npm package manager
```
## Usage
Import, initialize and play. The LinkedIn Insight Tag does not have the capabilities which the Facebook Pixel or Google Analytics have, but we can measure page loads and conversions.
Users should opt-in for being tracked!

```javascript
import LinkedInTag from 'react-linkedin-insight';

const disabled = !user.allowsThirdPartyCookies();
LinkedInTag.init(partnerId, 'dc', disabled);
LinkedInTag.track(conversionId);
```

Each individual tracker **can** overwrite the initialized partnerId and subDomain. You probably shouldn't need to do this, but it's available if you want to.
### Partner ID
You can get the partner ID from the script LinkedIn provides when you create an Insight Tag. The partner ID can be found on the second row of the code they provide: `_linkedin_partner_id = "123456";` where the `123456` is your partner ID.

### Subdomain
Sometimes a different subdomain is required for proper tracking. Therefore, a subdomain can be profided both at initialization and for specific tracking calls. It defaults to `dc`.

### Disabled
Users have to opt-in for the use of third party cookies. When the disabled flag is set to `true`, there will be no tracking. By default this is disabled when it is not run in a browser, but you should disable it for users which haven't allowed for third party cookies!

### Conversion ID
Conversions can only be tracked if they are created within the LinkedIn Campaign Manager. Once an event-specific pixel is created, they will provide an image tag like `<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=123456&conversionId=789012&fmt=gif" />`. The `789012` behind the `conversionId=` is your conversion ID.

### Tracking navigation with a client-side router
Currently there is no option in automatically tracking navigation with client-side routing. Input would be very helpful and appreciated. It could be opted to create a conversion in LinkedIn which is called 'virtualPageView' or so, but I don't think this is good practice. We should create a way in which LinkedIn registers a navigation change as a page load.

## License
[ISC](https://github.com/jelleklaver/react-linkedin-insight/blob/master/LICENSE.md)
