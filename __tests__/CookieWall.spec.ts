import {CookieWall} from '../src/CookieWall';

describe('CookieWall', () => {
    let div: Element;

    beforeEach(() => {
        div = document.createElement('div');
        div.id = 'cookie-wall';

        document.body.appendChild(div);
    });

    afterEach(() => {
        document.body.removeChild(div);
    })

    it('should be able to mount with an HTML Element', () => {
        const cookieWall = new CookieWall(div);
        expect(cookieWall.mountedElement).toBe(div);
    });

    it('should be able to mount with a selector', () => {
        const cookieWall = new CookieWall('#cookie-wall');
        expect(cookieWall.mountedElement).toBe(div);
    });

    it('should throw an error when a selector could not be found', () => {
        try {
            new CookieWall('#does-not-exist');
        } catch (e) {
            expect(e.message).toBe('No element with selector #does-not-exist was found')
        }
    });
})