import LinkedInTag from '../..';

describe('Disabled', () => {
    beforeAll(() => {
        LinkedInTag.init('1234', null, true);
    });

    document.body.innerHTML = '<script src="" />';

    it('init() should be properly initialized', () => {
        expect(LinkedInTag.initialized).toEqual(false);
        expect(LinkedInTag.disabled).toEqual(true);
    });

    it('init() should not insert the LinkedIn insight.min.js script', () => {
        // Extract all script src strings from the DOM
        let scripts = [];
        const scriptElms = document.getElementsByTagName('script');
        Array.prototype.slice.call(scriptElms).forEach((elm) => { scripts.push(elm.src); });

        // Assert if it correctly skipped the insertion
        expect(scripts).not.toEqual(
            expect.arrayContaining(['https://snap.licdn.com/li.lms-analytics/insight.min.js'])
        );
    });

    it('track() should not do anything', () => {
        const elm = LinkedInTag.track();
        expect(elm).toBeUndefined();
    });
});
