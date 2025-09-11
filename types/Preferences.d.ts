declare namespace Preferences {

	type Audio = {
		BGM: {
			play: boolean;
			volume: number;
		}
		Sound: {
			play: boolean;
			volume: number;
		};
	}

	type Camera = {
		smooth: boolean;
		zoom: number;
	}

	type Controls = {
		noctrl: boolean;
		noshift: boolean;
		snap: boolean;
		itemsnap: boolean;
	}

	type Graphics = {
		screensize: string;
		quality: number;
		cursor: boolean;
		fpslimit: number;
	}

	type Map = {
		fog: boolean;
		lightmap: boolean;
		smoothlight: boolean;
		effect: boolean;
		mineffect: boolean;
		miss: boolean;
		aura: number;
		showname: boolean;
	}

	type ShortCutControls = {
		ShortCuts: ShortCuts;
	}
	type ShortCuts = {
		[key: string]: {
			init: {
				key: any;
				alt: boolean;
				ctrl: boolean;
				shift: boolean;
			};
			cust: boolean;
			component: string;
			cmd: string;
		}
	}

}
