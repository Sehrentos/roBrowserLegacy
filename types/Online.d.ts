declare namespace App {
	//namespace EffectViewer
	//namespace GrannyModelViewer
	//namespace GrfViewer
	//namespace ModelViewer
	namespace Online {
		interface RoInitSpinner {
			add?: () => void;
			remove?: () => void;
			styleElem?: HTMLStyleElement | null;
			divElem?: HTMLDivElement | null;
		}
	}
	//namespace StrViewer
}

// globals
interface Window {
	roInitSpinner: App.Online.RoInitSpinner;
}
declare var roInitSpinner: App.Online.RoInitSpinner;
declare module 'roInitSpinner' {
	export = RoInitSpinner
}
