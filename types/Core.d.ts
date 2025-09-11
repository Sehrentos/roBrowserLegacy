declare namespace Core {

	interface AIDriver {
		homunculus: TAIDriver
		mercenary: TAIDriver
	}

	interface TAIDriver {
		new(type: "homunculus" | "mercenary"): TAIDriver
		type: string
		msg: any
		status: any
		init(): void
		getConfig(): { id: number, aggressiveKey: string, aiPath: string, logPrefix: string }
		getState(): any
		setmsg(id: number, str: string): void
		exec(code: string): void
		reset(): void
	}

	interface Client {
		init(files: string[]): void
		getFile(filename: string, onload: Function, onerror?: Function, args?: any): any
		getFiles(filenames: string[], callback: Function): void
		loadFile(filename: string, onload?: Function, onerror?: Function, args?: any): any
		loadFiles(filenames: string[], callback: Function): void
		search(regex: RegExp, callback: Function): void
		onFilesLoaded: Function
	}

	interface Configs {
		get: (key: string, defaultValue?: any) => any
		set: (key: string, value?: any) => any
		setServer: (server: any) => any
		getServer: () => any
	}

	interface Context {
		Is: {
			POPUP: boolean
			FRAME: boolean
		}
		requestFullScreen: () => void
		isFullScreen: () => boolean
		cancelFullScreen: () => void
		checkSupport: () => void
	}

	interface Events {
		(): void // for empty func constructor
		process: (tick: number) => void
		clearTimeout: (uid: number) => void
		setTimeout: (callback: Function, delay: number) => number
		free: () => void
	}

	interface FileManager {
		remoteClient: string
		gameFiles: any[]
		filesAlias: any
		clean: () => void
		init: (grfList: any) => void
		addGameFile: (file: any) => void
		search: (regex: RegExp) => void
		get: (filename: string, callback: Function) => void
		getHTTP: (filename: string, callback: Function) => void
		load(filename: string, callback: Function, args?: any): void
	}

	interface FileSystem {
		bind(eventname: string, callback: Function): void
		init(files: any, save: boolean, quota: any): void
		getFile(filename: string, callback: Function, onerror?: Function): void
		getFileSync(filename: string): File
		getFiles(filenames: string[], callback: Function): void
		saveFile(filename: string, content: ArrayBuffer): void
		cleanup(): void
		search(regex: RegExp | string): any
	}

	interface MemoryItem {
		new(onload?: Function, onerror?: Function): MemoryItem
		_data: any
		_error: string
		complete: boolean
		lastTimeUsed: number
		data: any
		get: () => any
		addEventListener: (event: string, callback: Function) => void
		onload: (data: any) => void
		onerror: (error: string) => void
	}

	interface MemoryManager {
		exist(filename: RegExp | string): boolean
		get(filename: string, onload?: Function, onerror?: Function): any
		set(filename: string, data: any, error?: string): void
		remove(filename: string): void
		clean(): void
		search(regex: RegExp | string): any
	}

	interface Mobile {
		init(): void
		onTouchStart: (event: TouchEvent) => void // MapControl
		onTouchEnd: (event: TouchEvent) => void // MapControl
	}

	// example: Core.Preferences<Preferences.Audio>
	interface Preferences<T> {
		get(key: string, def?: T, version?: number): T;
		save(data: any): void;
	}

	interface Thread {
		init(): void
		hook(type: any, callback: any): void
		send(type: any, data: any, callback: any): void
		delegate(source: any, origin: any): void
	}
}

// AIDriver extends window
interface Window {
	GetMsg(type, id): string
	IsMonster(id): number
	TraceAI(string): any
	GetTick(): number
	GetActors(type): any
	GetV(V_, id): any
	Move(id, x, y): void
	MoveToOwner(gid): void
	Attack(gid, targetGID): void
}
