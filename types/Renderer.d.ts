declare namespace Renderer {
	interface Renderer {
		canvas: HTMLCanvasElement;
		gl: RenderingContext;
		width: number;
		height: number;
		resizeTimeOut: number;
		updateId: number;
		frameLimit: number;
		tick: number;
		vFov: number;
		renderCallbacks: any[];
		init(param?: any): void;
		show(): void;
		remove(): void;
		getContext(): any;
		onResize(): void;
		resize(): void;
		rendering: boolean;
		_render(timeDelta: any): void;
		render(fn: any): void;
		stop(fn: any, ...args: any[]): void;
	}
	interface Camera {
		projection: number[];
		modelView: number[];
		normalMat: number[];
		zoom: number;
		zoomFinal: number;
		angle: number[];
		angleFinal: number[];
		position: number[];
		target: any;
		lastTick: number;
		MIN_ZOOM: number;
		MAX_ZOOM: number;
		MIN_V_ANGLE: number;
		MAX_V_ANGLE: number;
		direction: number;
		altitudeFrom: number;
		altitudeTo: number;
		altitudeRange: number;
		rotationFrom: number;
		rotationTo: number;
		range: number;
		zoomStep: number;
		zoomStepMult: number;
		currentMap: string;
		indoorRotationFrom: number;
		indoorRotationTo: number;
		indoorRange: number;
		MAX_ZOOM_INDOOR: number;
		MIN_ALTITUDE_INDOOR: number;
		MAX_ALTITUDE_INDOOR: number;
		// ... 16 more ...;
		enable3RDPerson: boolean;
		enable1STPerson: boolean;
		state: number;
		states: {
			isometric: number;
			third_person: number;
			first_person: number;
		};
		action: {
			active: boolean;
			tick: number;
			x: number;
			y: number;
		};
		quakes: any[];
		setTarget(target: any): void;
		getLatitude(): number;
		setQuake(start: number, duration: number, xAmt: number, yAmt: number, zAmt: number): void;
		processQuake(tick: number): void;
		update(tick: number): void;
		init(): void;
	}

	interface EffectManager {

	}

	namespace Entity {
		interface Entity extends Controls.EntityControl, Action, Animation, Attachments, Aura, Cast,
			Dialog, Display, DropEffect, Emblem, Life, EntityRender, Room, Signboard, Sound, State, View,
			Walk {
			(data?: any): void;
			new(data?: any): Entity;
			static TYPE_WUG: number;
			static TYPE_FALCON: number;
			static TYPE_EFFECT: number;
			static TYPE_UNKNOWN: number;
			static TYPE_UNIT: number;
			static TYPE_TRAP: number;
			static TYPE_WARP: number;
			static TYPE_PC: number;
			static TYPE_DISGUISED: number;
			static ITEM_TYPE: number;
			static SKILL_TYPE: number;
			static UNKNOWN_TYPE: number;
			static TYPE_MOB: number;
			static TYPE_NPC: number;
			static TYPE_PET: number;
			static TYPE_HOM: number;
			static TYPE_MERC: number;
			static TYPE_ELEM: number;
			static UNKNOWN_TYPE2: number;
			static TYPE_NPC2: number;
			static TYPE_NPC_ABR: number;
			static TYPE_NPC_BIONIC: number;
			static PickingPriority: {
				Normal: { [key: numer]: number };
				Support: { [key: numer]: number };
			};
			static VT: {
				OUTOFSIGHT: number;
				DEAD: number;
				EXIT: number;
				TELEPORT: number;
				TRICKDEAD: number;
			};
			objecttype: number;
			GID: number;
			_bodyState: number;
			_healthState: number;
			_effectState: number;
			_sex: number;
			_job: number;
			_bodypalette: number;
			_head: number;
			_headpalette: number;
			_weapon: number;
			_shield: number;
			_accessory: number;
			_accessory2: number;
			_accessory3: number;
			robe: number;
			GUID: number;
			GEmblemVer: number;
			honor: number;
			virtue: number;
			isPKModeON: number;
			xSize: number;
			ySize: number;
			state: number;
			clevel: number;
			action: number;
			costume: number;
			matrix: any;
			depth: number;
			headDir: number;
			direction: number;
			position: any;
			attack_range: number;
			attack_speed: number;
			effectColor: any;
			isAdmin: boolean;
			hasCart: boolean;
			CartNum: number;
			lastSKID: number;
			lastSkLvl: number;
			amotionTick: number;
			targetGID: number;
			isOverWeight: boolean;
			falcon: any;
			wug: any;
			hideShadow: boolean;
			call_flag: number;
			set(data?: any): void;
			clean(): void;
			remove(): void;
			lookTo(x: number, y: number): void;
		}

		interface Action {
			ACTION: TAction;
			animation: TAnimation;
		}
		type TAction = {
			IDLE: number;
			ATTACK: number;
			WALK: number;
			SIT: number;
			PICKUP: number;
			READYFIGHT: number;
			FREEZE: number;
			HURT: number;
			DIE: number;
			FREEZE2: number;
			ATTACK1: number;
			ATTACK2: number;
			ATTACK3: number;
			SKILL: number;
			ACTION: number;
			SPECIAL: number;
			PERF1: number;
			PERF2: number;
			PERF3: number;
		}
		type TAnimation = {
			tick: number;
			frame: number;
			repeat: boolean;
			play: boolean;
			next: boolean;
			delay: number;
			save: boolean;
		}

		interface Animation {
			animations: TAnimations;
		}
		type TAnimations = {
			entity: Entity;
			list: any[];
			add(callback: () => void): void;
			free(): void;
		}

		interface Attachments {
			attachments: AttachmentManager;
		}
		interface AttachmentManager {
			(entity: Entity): void;
			new(entity: Entity): AttachmentManager;
			entity: Entity;
			list: any[];
			add(attachment: any): void;
			get(uid: number): any;
			remove(uid: number): void;
			removeIndex(index: number): void;
			render(tick: any): void;
			renderAttachment(attachment: any, tick: any): boolean;
		}

		interface Aura {
			isLoaded: boolean;
			lastAuraState: number;
			entity: Entity;
			load(effectManager: any): void;
			free(): void;
			remove(effectManager: any): void;
		}

		interface Cast {
			cast: CastManager;
		}
		interface CastManager {
			(): void;
			new(): CastManager;
			tick: number;
			display: boolean;
			percent: number;
			display: boolean;
			delay: number;
			canvas: HTMLCanvasElement;
			ctx: CanvasRenderingContext2D;
			color: string;
			onComplete: Function;
			set(delay: number, color?: string): void;
			remove(): void;
			clean(): void;
			update(perc: number): void;
			render(matrix: Utils.Mat4): void;
		}

		interface Dialog {
			dialog: DialogManager;
		}
		interface DialogManager {
			(): void;
			new(): DialogManager;
			text: string;
			tick: number;
			timeout: number;
			display: boolean;
			canvas: HTMLCanvasElement;
			ctx: CanvasRenderingContext2D;
			set(text: string, fontColor?: string): void;
			remove(): void;
			clean(): void;
			update(): void;
			render(matrix: Utils.Mat4): void;
		}

		interface Display {
			display: DisplayManager;
		}
		interface DisplayManager {
			(): void;
			new(): DisplayManager;
			TYPE: {
				NONE: number;
				LOADING: number;
				COMPLETE: number;
			};
			STYLE: {
				DEFAULT: number;
				MOB: number;
				NPC: number;
				ITEM: number;
				ADMIN: number;
			};
			load: number;
			name: string;
			fakename: string;
			party_name: string;
			guild_name: string;
			guild_rank: string;
			title_name: string;
			emblem: CanvasImageSource | null;
			display: boolean;
			canvas: HTMLCanvasElement;
			ctx: CanvasRenderingContext2D;
			update(style: number): void;
			render(matrix: Utils.Mat4): void;
		}

		interface DropEffect {
			dropEffect: DropEffectManager;
		}
		interface DropEffectManager {
			(entity: Entity): void;
			new(entity: Entity): DropEffectManager;
			isLoaded: boolean;
			entity: Entity;
			remove(): void;
			free(): void;
		}

		interface Emblem {
			emblem: EmblemManager;
		}
		interface EmblemManager {
			(): void;
			new(): EmblemManager;
			emblem: CanvasImageSource | null;
			display: boolean;
			canvas: HTMLCanvasElement;
			ctx: CanvasRenderingContext2D;
			entity: Entity;
			remove(): void;
			free(): void;
		}

		interface Life { }
		interface EntityRender { }
		interface Room { }
		interface Signboard { }
		interface Sound { }
		interface State {
			isVisible(): boolean;
		}
		interface View { }
		interface Walk { }
	}

	interface EntityManager { }

	interface ItemObject { }

	interface MapRenderer { }

	interface SpriteRenderer {
		depth: number;
	}

}
