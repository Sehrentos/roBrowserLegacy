///<reference path="../node_modules/@types/jquery/index.d.ts" />

/**
 * extend JQuery with custom methods
 */
interface JQueryStatic {
    // <TElement extends Element = HTMLElement>(selector: JQuery.Selector): JQuery<TElement>;
    /**
     * Escape special chars from a string
     *
     * @param {string} text
     * @returns {string} encoded string
     */
    escape: (string) => string;
}