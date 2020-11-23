import LinkedInTag from '../../src/index.js';

describe('Happy path', () => {
    const partnerId = '0987654321';
    const conversionId = '123456789';
    const subDomain = 'dc';

    beforeAll(() => {
        LinkedInTag.init(partnerId, subDomain, false);
    });

    document.body.innerHTML = '<script src="index.js" />';

    it('init() should be properly initialized', () => {
        expect(LinkedInTag.disabled).toEqual(false);
        expect(LinkedInTag.initialized).toEqual(true);
        expect(LinkedInTag.partnerId).toEqual(partnerId);
    });

    it('init() should insert the LinkedIn insight.min.js script', () => {
        // Extract all script src strings from the DOM
        let scripts = [];
        const scriptElms = document.getElementsByTagName('script');
        Array.prototype.slice.call(scriptElms).forEach((elm) => { scripts.push(elm.src); });

        // Assert if it correctly inserted the LinkedIn script
        expect(scripts).toEqual(
            expect.arrayContaining(['https://snap.licdn.com/li.lms-analytics/insight.min.js'])
        );
    });

    it('track() should create an image with proper src', () => {
        const elm = LinkedInTag.track(conversionId);

        expect(elm.src).toEqual(expect.stringContaining(partnerId));
        expect(elm.src).toEqual(expect.stringContaining(subDomain));
        expect(elm.src).toEqual(expect.stringContaining(conversionId));
    });
});
