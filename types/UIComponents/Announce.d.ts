/// <reference path="../UI.d.ts" />
interface UIAnnounce extends UI.UIComponent {
    new(name: string, htmlText?: string, cssText?: string): UIAnnounce;
    init(): void;
    set(text: string, color: string): void;
    timeEnd(): void;
}