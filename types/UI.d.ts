declare namespace UI {

    interface Background {
        /**
         * Initialize Background component
         * @param {string[]} loading - Array of loading filenames stored in clientinfo.xml
         */
        init(loading: string[]): void;
        /** Resize the background */
        resize(width: number, height: number): void;
        /** Set an image as background */
        setImage(filename: string, callback: () => void): void;
        /** Add loading background */
        setLoading(callback: Function): void;
        /** Remove background */
        remove(callback: Function): void;
        /** Adding progress bar to background */
        setPercent(percent: number): void;
    }

    interface CursorManager {
        ACTION: ACTION;
        freeze: boolean;
        x: number;
        y: number;
        magnetism: boolean;
        blockMagnetism: boolean;
        init(): void;
        setType(type: number, norRepeat: boolean, animation: number): void;
        getActualType(): ACTION;
        render(tick: number): void;
    }

    interface ACTION {
        DEFAULT: 0,
        TALK: 1,
        CLICK: 2,
        LOCK: 3,
        ROTATE: 4,
        ATTACK: 5,
        WARP: 7,
        PICK: 9,
        TARGET: 10,
        NOWALK: 13,
    }

    interface ScrollBar {
        complete: boolean;
        init: () => void;
    }

    interface UIComponent {
        new(name: string, htmlText?: string, cssText?: string): UIComponent;
        /** component name */
        name: string;
        /** component html text */
        _htmlText?: string | null;
        /** component css text */
        _cssText?: string | null;
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
        /** optional. UIManager reference, if set */
        manager?: UIManager | null;

        /** optional. override this function to initialize the UI */
        init?: () => void | null;
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
        onAppend?: (event) => void | null;
        /** optional. called when the keydown even is triggered on the component */
        onKeyDown?: (event) => void | null;
        /** optional. called when the component is removed */
        onRemove?: (event) => void | null;
        /** optional. called in UIManager, if set */
        onResize?: (event) => void | null;

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

    interface UIManager {
        /** Object with key/value as UIComponents */
        components: {
            [name: string]: UIComponent
        };
        addComponent: (component: UIComponent) => UIComponent;
        getComponent: (name: string) => UIComponent;
        removeComponents: () => void;
        fixResizeOverflow: (w: number, h: number) => void;
        showErrorBox: (text: string) => UIComponent;
        showMessageBox: (text: string, btn_name: string, callback?: () => void, keydown: any) => UIComponent;
        showPromptBox: (text: string, btn_yes: string, btn_no: string, onYes?: () => void, onNo?: () => void) => UIComponent;
    }

    interface UIVersionManager {
        getUIAlias(name: string): string | false;
        selectUIVersion(publicName: string, versionInfo: VersionInfo): UIComponent;
        getUIController(publicName: string, versionInfo: VersionInfo): UIController;
        /** @deprecated will be removed after refactoring */
        getEquipmentVersion(): 0 | 1;
        /** @deprecated will be removed after refactoring */
        getWinStatsVersion(): 0 | 1;
        /** @deprecated will be removed after refactoring */
        getInventoryVersion(): 0 | 1;
    }

    interface UIController {
        selectUIVersion(): void;
        selectUIVersionWithJob(): void;
        selectSpecificUIVersion(): void;
        getUI(): UIComponent;
    }

    interface VersionInfo {
        default: UIComponent;
        common: { [packetVer: number]: UIComponent };
        re: any;
        prere: any;
        job: {
            default: UIComponent;
            Fourth_Class: UIComponent;
        };
    }

}