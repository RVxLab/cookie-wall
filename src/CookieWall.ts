import {DOMSelector} from './types';
import {InvalidArgumentError} from './errors/InvalidArgumentError';

export class CookieWall {
    public get mountedElement(): Element {
        return this.element as Element;
    };

    constructor(private element: DOMSelector) {
        if (typeof element === 'string') {
            this.resolveElement();
        }
    }

    private resolveElement(): void {
        const element = document.querySelector(this.element as string);

        if (!element) {
            throw new InvalidArgumentError(`No element with selector ${this.element} was found`);
        }

        this.element = element;
    }
}