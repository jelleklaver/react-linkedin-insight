import LinkedInTag from '../../src/index.js';

beforeAll(() => {
    jest.mock('browser-or-node', () => ({ isBrowser: true }));
});

describe('Check for proper defaults', () => {
    const partnerId = '1234';
    beforeAll(() => {
        LinkedInTag.init(partnerId);
    });

    document.body.innerHTML = '<script src="" />'

    it('init() should not be initialized', () => {
        expect(LinkedInTag.initialized).toEqual(true);
        expect(LinkedInTag.disabled).toEqual(false);
    });

    it('track() should create an image with proper src', () => {
        const elm = LinkedInTag.track();

        expect(elm.src).toEqual(expect.stringContaining(partnerId));
        expect(elm.src).toEqual(expect.stringContaining('dc'));
    });
});
