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
		ACTION: {
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
		};
		freeze: boolean;
		x: number;
		y: number;
		magnetism: boolean;
		blockMagnetism: boolean;
		init(): void;
		setType(type: number, norRepeat: boolean, animation: number): void;
		getActualType(): number;
		render(tick: number): void;
	}

	interface ScrollBar {
		complete: boolean;
		init: () => void;
	}

	interface UIManager {
		/** Object with key/value as UIComponents */
		components: {
			[name: string]: TUIComponent
		};
		addComponent: (component: TUIComponent) => TUIComponent;
		getComponent: (name: string) => TUIComponent;
		removeComponents: () => void;
		fixResizeOverflow: (w: number, h: number) => void;
		showErrorBox: (text: string) => TUIComponent;
		showMessageBox: (text: string, btn_name: string, callback?: () => void, keydown: any) => TUIComponent;
		showPromptBox: (text: string, btn_yes: string, btn_no: string, onYes?: () => void, onNo?: () => void) => TUIComponent;
	}

	interface UIVersionManager {
		getUIAlias(name: string): string | false;
		selectUIVersion(publicName: string, versionInfo: any): TUIComponent;
		getUIController(publicName: string, versionInfo: any): UIController;
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
		getUI(): TUIComponent;
	}

	// UIVersionManager.selectUIVersion
	// interface VersionInfo {
	// 	default: TUIComponent;
	// 	common: { [packetVer: number]: TUIComponent };
	// 	re: any;
	// 	prere: any;
	// 	job: {
	// 		default: TUIComponent;
	// 		Fourth_Class: TUIComponent;
	// 	};
	// }

	/**
	 * UIComponent constructor
	 */
	interface UIComponent<T> {
		new(name: string, htmlText?: string, cssText?: string): T & TUIComponent;
		/** mouse behavior */
		public static MouseMode: MouseMode;
	}

	/**
	 * UIComponent types / properties
	 */
	type TUIComponent = {
		// new(name: string, htmlText?: string, cssText?: string): UIComponent;
		// constructor(name: string, htmlText?: string, cssText?: string);
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
		clone: (name, full) => TUIComponent;
		/** Enable a type (keydown is the only one supported yet) */
		on: (type) => void;
		/** Disable a type (keydown is the only one supported yet) */
		off: (type) => void;
		/** drag an element */
		draggable: () => TUIComponent;
		/** optional. called when the component is appended */
		onAppend?: (event) => void | null;
		/** optional. called when the keydown even is triggered on the component */
		onKeyDown?: (event) => void | null;
		/** optional. called when the component is removed */
		onRemove?: (event) => void | null;
		/** optional. called in UIManager, if set */
		onResize?: (event) => void | null;
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

	// UI Components types that extend the UIComponent
	// eg. UI.UIComponent<UI.Component.Announce>
	declare namespace Component {

		type Announce = {
			set(text: string, color: string): void;
			timeEnd(): void;
		};

		type Bank = {
			onShortCut(key: any): void;
			toggle(): void;
		};

		type BasicInfo = {
			base_exp: number;
			base_exp_next: number;
			job_exp: number;
			job_exp_next: number;
			weight: number;
			weight_max: number;
			// level: number;
			// job: number;
			onShortCut(key: any): void;
			toggleMode(): void;
			toggleButtons(): void;
			update(type: string, val1: number, val2?: number): void;
			getWinStatsVersion(): 0 | 1;
			getInventoryVersion(): 0 | 1;
		};

		type CardIllustration = {
			setCard(card: any): void;
		}

		type CartItems = {
			list: any[];
			onShortCut(key: any): void;
			toggle(): void;
			resize(width: number, height: number): void;
			getItemById(id: number): any;
			getItemByIndex(index: number): any;
			setItems(items: any[]): void;
			setCartInfo(info: any): void;
			addItem(item: any): void;
			addItemSub(item: any): boolean;
			removeItem(index: number, count: number): any;
			updateItem(index: number, count: number): void;
			reqRemoveItem(...args): void;
		}

		type CashShop = {
			list: any[];
			cashShopListItem: any[];
			csListItemSearchResult: any[];
			cashShopBanner: string;
			cmenus: string[];
			activeCashMenu: number | string;
			cashPoint: number;
			kafraPoints: number;
			cartItem: any[];
			cartItemTotalPrice: number;
			totalActiveCategory: number;
			loadedCategory: number;
			pageOffset: number;
			pageLimit: number;
			currentPage: number;
			totalPage: number;
			isFirstPage: boolean;
			isLastPage: boolean;
			isNotRefresh: boolean;
			cartItemLen: number;
			checkCartItemLen: number;
			pageEnd: number;
			isSearch: boolean;
			getItemByIndex(index: number): any;
			show(): void;
			hide(): void;
			onKeyDown(event): void;
			resize(width: number, height: number): void;
			readPoints(cashPoint, kafraPoints, tab): void;
			setSuccessCashShopUpdate(res: any): void;
			readCashShopItems(items: any): boolean;
			loadComponentCashShop(): void;
			renderCashShopItems(items: any): void;
			initPagination(items): void;
			paginate(items, offset, end): any[];
			paginationOffsetLimit(): void;
		}

		// TODO below:
		type ChangeCart = {}
		type CharCreate = {}
		type CharSelect = {}
		type ChatBox = {}
		type ChatBoxSettings = {}
		type ChatRoom = {}
		type ChatRoomCreate = {}
		type CheckAttendance = {}
		type ContextMenu = {}
		type EffectViewer = {}
		type Emoticons = {}
		type EntityRoom = {}
		type EntitySignboard = {}
		type Equipment = {}
		type Error = {}
		type Escape = {}
		type FPS = {}
		type GrannyModelViewer = {}
		type GraphicsOption = {}
		type GrfViewer = {}
		type Guild = {}
		type HomunInformations = {}
		type InputBox = {}
		type Intro = {}
		type Inventory = {}
		type ItemCompare = {}
		type ItemInfo = {}
		type ItemObtain = {}
		type ItemReform = {}
		type ItemSelection = {}
		type LaphineSys = {}
		type LaphineUpg = {}
		type Mail = {}
		type MakeArrowSelection = {}
		type MakeReadBook = {}
		type MapName = {}
		type MercenaryInformations = {}
		type MiniMap = {}
		type MobileUI = {}
		type ModelViewer = {}
		type Navigation = {}
		type NpcBox = {}
		type NpcMenu = {}
		type NpcStore = {}
		type PartyFriends = {}
		type PetInformations = {}
		type PincodeWindow = {}
		type PlayerViewEquip = {}
		type Quest = {}
		type Refine = {}
		type RefineWeaponSelection = {}
		type Rodex = {}
		type Sense = {}
		type ShortCut = {}
		type ShortCutOption = {}
		type ShortCuts = {}
		type SkillDescription = {}
		type SkillList = {}
		type SkillListMH = {}
		type SkillTargetSelection = {}
		type SlotMachine = {}
		type SoundOption = {}
		type StatusIcons = {}
		type Storage = {}
		type StrViewer = {}
		type SwitchEquip = {}
		type Trade = {}
		type Vending = {}
		type VendingShop = {}
		type WinList = {}
		type WinLogin = {}
		type WinPrompt = {}
		type WinStats = {}
		type WorldMap = {}
	}
}
