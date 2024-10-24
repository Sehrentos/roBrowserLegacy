/// <reference path="../UI.d.ts" />
interface UIBank extends UI.UIComponent {
    new(name: string, htmlText?: string, cssText?: string): UIBank;
    init(): void;
    /** Press shortcut */
    onShortCut(key: any): void;
    /** Request to toggle open/close bank */
    toggle(): void;
}