declare namespace Controls {

	interface BattleMode {
		reload(): void
		match(keyId: number): boolean
		process(keyId: number): boolean
		getKeyName(keyId: number): string
		shortcutToKeyString(component: string, cmd: string): string
	}

	// todo improve: this extends Renderer.Entity interface
	interface EntityControl {
		onMouseOver(): void
		onMouseOut(): void
		onMouseDown(): void
		onMouseUp(): void
		onFocus(): void
		onFocusEnd(): void
		onRoomEnter(): void
		onContextMenu(): void
		canAttackEntity(): boolean
	}

	var KeyEventHandler: {
		[key: string]: any;
		toReadableKey(keyId: number): string;
		getKeyIdString(keyId: number): string;
	};

	interface MapControl {
		onRequestWalk(): void;
		onRequestStopWalk(): void;
		onRequestDropItem(): void;
		init(): void;
	}

	interface MouseEventHandler {
		screen: { x: number; y: number; width: number; height: number; };
		world: { x: number; y: number; width: number; height: number; };
		intersect: boolean;
		state: number;
		MOUSE_STATE: {
			NORMAL: number;
			DRAGSKILL: number;
			USESKILL: number;
		};
	}

	interface ProcessCommand {
		processCommand(text: any): void
		add(name: any, description?: string, callback?: () => void, aliases?: any[], custom?: boolean): void
		remove(name: any): void
		isEnabled(name: any): boolean
		reloadAliases(): void
	}

	interface ScreenShot {
		take(): void;
		process(canvas: canvasElement): void;
		display(canvas: canvasElement, date: string): void;
	}

}
