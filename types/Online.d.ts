//<reference path="./requirejs.d.ts" />
//<reference path="./ROConfig.d.ts" />
// add this where you want types
//<reference path="../../types/Online.d.ts" />

interface RoInitSpinner {
    add?: () => void;
    remove?: () => void;
    styleElem?: HTMLStyleElement | null;
    divElem?: HTMLDivElement | null;
}
interface Window {
    roInitSpinner: RoInitSpinner;
}
declare var roInitSpinner: RoInitSpinner;
declare module 'roInitSpinner' {
    export = RoInitSpinner
}