/**
 * UIComponent interface
 * @see UI/Components/Announce/Announce.js
 */
interface UIComponent {
    new(name: string, htmlText?: string, cssText?: string): UIComponent;

    /** component name */
    name: string;
    /** component html text */
    _htmlText: string | null;
    /** component css text */
    _cssText: string | null;
    /** mouse mode */
    mouseMode: 0 | 1 | 2;
    /** magnet */
    magnet: Magnet;
    /** internal. is component ready */
    __loaded: boolean;
    /** internal. is component active */
    __active: boolean;
    /** internal. is component visible */
    __visible: boolean;
    /** internal. mouse stop block (MouseMode.STOP) */
    __mouseStopBlock: JQuery<HTMLElement>;
    /** internal. does component need focus */
    needFocus: boolean;
    /** ui created after prepare(). 
     * component DOM is equivalent to `this.ui = jQuery(_htmlText);`
     */
    ui: JQuery<HTMLElement>;
    /** optional. override this function to initialize the UI */
    init?: () => void;
    /** prepare the component to be used */
    prepare: () => void;
    /** append the UI to the document.body */
    append: () => void;
    /** remove the UI */
    remove: () => void;
    /** focus the component UI */
    focus: () => void;
    /** clone a component */
    clone: (name, full) => UIComponent;
    /** Enable a type (keydown is the only one supported yet) */
    on: (type) => void;
    /** Disable a type (keydown is the only one supported yet) */
    off: (type) => void;
    /** drag an element */
    draggable: () => UIComponent;
    /** optional. called when the component is appended */
    onAppend: (event) => void;
    /** optional. called when the keydown even is triggered on the component */
    onKeyDown: (event) => void;
    /** optional. called when the component is removed */
    onRemove: (event) => void;

    /** mouse behavior */
    public static MouseMode: MouseMode;
}

interface Magnet {
    TOP: boolean
    BOTTOM: boolean
    LEFT: boolean
    RIGHT: boolean
}

interface MouseMode {
    CROSS: 0,
    STOP: 1,
    FREEZE: 2
}