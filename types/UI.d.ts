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
		setType(type: number, norRepeat?: boolean, animation?: number): void;
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
		} & TUIComponent;

		type Bank = {
			onShortCut(key: any): void;
			toggle(): void;
		} & TUIComponent;

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
		} & TUIComponent;

		type CardIllustration = {
			setCard(card: any): void;
		} & TUIComponent;

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
		} & TUIComponent;

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
		} & TUIComponent;

		// TODO below:
		type ChangeCart = {} & TUIComponent;
		type CharCreate = {} & TUIComponent;
		type CharSelect = {} & TUIComponent;
		type ChatBox = {} & TUIComponent;
		type ChatBoxSettings = {} & TUIComponent;
		type ChatRoom = {} & TUIComponent;
		type ChatRoomCreate = {} & TUIComponent;
		type CheckAttendance = {} & TUIComponent;
		type ContextMenu = {
			addElement(name: string, func: Function): void;
			nextGroup(): void;
		} & TUIComponent;
		type EffectViewer = {} & TUIComponent;
		type Emoticons = {} & TUIComponent;
		type EntityRoom = {} & TUIComponent;
		type EntitySignboard = {} & TUIComponent;
		type Equipment = {} & TUIComponent;
		type Error = {} & TUIComponent;
		type Escape = {} & TUIComponent;
		type FPS = {} & TUIComponent;
		type GrannyModelViewer = {} & TUIComponent;
		type GraphicsOption = {} & TUIComponent;
		type GrfViewer = {} & TUIComponent;
		type Guild = {} & TUIComponent;
		type HomunInformations = {} & TUIComponent;
		type InputBox = {} & TUIComponent;
		type Intro = {} & TUIComponent;
		type Inventory = {} & TUIComponent;
		type ItemCompare = {} & TUIComponent;
		type ItemInfo = {} & TUIComponent;
		type ItemObtain = {} & TUIComponent;
		type ItemReform = {} & TUIComponent;
		type ItemSelection = {} & TUIComponent;
		type LaphineSys = {} & TUIComponent;
		type LaphineUpg = {} & TUIComponent;
		type Mail = {} & TUIComponent;
		type MakeArrowSelection = {} & TUIComponent;
		type MakeReadBook = {} & TUIComponent;
		type MapName = {} & TUIComponent;
		type MercenaryInformations = {} & TUIComponent;
		type MiniMap = {} & TUIComponent;
		type MobileUI = {} & TUIComponent;
		type ModelViewer = {} & TUIComponent;
		type Navigation = {} & TUIComponent;
		type NpcBox = {} & TUIComponent;
		type NpcMenu = {} & TUIComponent;
		type NpcStore = {} & TUIComponent;
		type PartyFriends = {} & TUIComponent;
		type PetInformations = {} & TUIComponent;
		type PincodeWindow = {} & TUIComponent;
		type PlayerViewEquip = {} & TUIComponent;
		type Quest = {} & TUIComponent;
		type Refine = {} & TUIComponent;
		type RefineWeaponSelection = {} & TUIComponent;
		type Rodex = {} & TUIComponent;
		type RodexIcon = {} & TUIComponent;
		type Sense = {} & TUIComponent;
		type ShortCut = {} & TUIComponent;
		type ShortCutOption = {} & TUIComponent;
		type ShortCuts = {} & TUIComponent;
		type SkillDescription = {} & TUIComponent;
		type SkillList = {} & TUIComponent;
		type SkillListMH = {} & TUIComponent;
		type SkillTargetSelection = {} & TUIComponent;
		type SlotMachine = {} & TUIComponent;
		type SoundOption = {} & TUIComponent;
		type StatusIcons = {} & TUIComponent;
		type Storage = {} & TUIComponent;
		type StrViewer = {} & TUIComponent;
		type SwitchEquip = {} & TUIComponent;
		type Trade = {} & TUIComponent;
		type Vending = {} & TUIComponent;
		type VendingShop = {} & TUIComponent;
		type WinList = {} & TUIComponent;
		type WinLogin = {} & TUIComponent;
		type WinPrompt = {} & TUIComponent;
		type WinStats = {} & TUIComponent;
		type WorldMap = {} & TUIComponent;
	}
}
