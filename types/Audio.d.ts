declare namespace Audio {
	interface BGM {
		filename: any;
		volume: any;
		extension: string;
		isInit: boolean;
		audio: HTMLAudioElement;
		init(): void;
		setAvailableExtensions(extensions: any[]): void;
		play(filename: string): void;
		load(url: string): void;
		stop(): void;
		setVolume(volume: number): void;
	}

	interface SoundManager {
		volume: any;
		play(filename: string, vol: any): void;
		playPosition(filename: string, srcPosition: any): void;
		stop(filename: any): void;
		setVolume(volume: number): void;
	}
}
