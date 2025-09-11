declare namespace Engine {

	interface CharEngine {
		init(): void
		reload(): void
	}

	interface GameEngine {
		init(): void
		reload(): void
	}

	interface LoginEngine {
		init: (server: any) => void;
		reload: () => void;
		setLoadedServer: (server: any) => void;
	}

	namespace MapEngine {
		declare var needsUIVerUpdate: boolean;
		declare function init(ip: any, port: number, mapName: string): void;

		interface Achievement {
			(): void;
		}
		interface Bank {
			init(): void;
		}
		interface CashShop {
			(): void;
		}
		interface ChatRoom {
			(): void;
		}
		interface Entity {
			(): void;
		}
		interface Friends {
			init(): void;
			free(): void;
			addFriend(name: string): void;
			removeFriend(index: number): void;
			answerFriendRequest(AID: any, GID: any, result: any): void;
			isFriend(name: any): boolean;
			sayHi(): void;
		}
		interface Group {
			init(): void;
			onRequestCreationEasy(name: any): void;
			onRequestCreation(name: any, pickupRule: any, divisionRule: any): void;
			onRequestInvitation(AID: any, pseudo: string): void;
			onRequestLeave(): void;
			onRequestExpel(AID: any, pseudo: string): void;
			onRequestInfoUpdate(expOption: any, pickupRule: any, divisionRule: any): void;
			onRequestChangeLeader(AID: number): void;
		}
		interface Guild {
			init(): void;
			requestInfo(type: number): void;
			requestGuildEmblem(guild_id: any, version: number, callback: Function): void;
			requestAccess(): void;
			createGuild(name: any): void;
			breakGuild(name: any): void;
			requestPositionUpdate(positions: any[]): void;
			requestChangeMemberPos(memberInfo: any): void;
			requestNoticeUpdate(subject: string, content: string): void;
			requestPlayerInvitation(AID: any): void;
			requestAlliance(AID: any): void;
			requestHostility(AID: any): void;
			requestLeave(AID: any, GID: any, reason: string): void;
			//... 4 more ...;
			requestMemberExpel(AID: number, GID: number, reason: string): void
			requestMemberInfo(AID: any): void;
			requestDeleteRelatedGuild(guild_id: number, relation: number): void;
			sendEmblem(data: any): void;
			guild_id: number;
		}
		interface Homun {
			(): void;
		}
		interface Item {
			(): void;
		}
		interface Mail {
			(): void;
		}
		interface Main {
			(): void;
		}
		interface MapState {
			(): void;
		}
		interface Mercenary {
			(): void;
		}
		interface NPC {
			(): void;
		}
		interface Pet {
			(): void;
		}
		interface PrivateMessage {
			(): void;
		}
		interface Quest {
			(): void;
		}
		interface Rodex {
			(): void;
		}
		interface Shop {
			(): void;
		}
		interface Skill {
			(): void;
		}
		interface Storage {
			(): void;
		}
		interface Store {
			(): void;
		}
		interface Trade {
			(): void;
		}
		interface UIOpen {
			(): void;

		}
	}

	interface SessionStorage {
		isTouchDevice: boolean;
		isRenewal: boolean;
		TouchTargeting: boolean;
		AutoTargeting: boolean;
		FreezeUI: boolean;
		AuthCode: number;
		AID: number;
		GID: number;
		UserLevel: number;
		Sex: number;
		LangType: number;
		ServerName: null;
		ratesInfo: null;
		Character: null;
		Entity: null;
		AdminList: any[];
		underAutoCounter: boolean;
		moveAction: null;
		zeny: number;
		weight: number;
		max_weight: number;
		petId: number;
		pet: object;
		hasParty: boolean;
		isPartyLeader: boolean;
		hasGuild: boolean;
		guildRight: number;
		isGuildMaster: boolean;
		Playing: boolean;
		hasCart: boolean;
		CartNum: number;
		homCustomAI: boolean;
		merCustomAI: boolean;
		autoFollow: boolean;
		autoFollowTarget: null;
		ping: {
			pingTime: number;
			pongTime: number;
			returned: boolean;
			value: number;
		}
		serverTick: number;
		mapState: {
			property: number;
			type: number;
			flag: number;
			isPVPZone: boolean;
			isAgitZone: boolean;
			isPVP: boolean;
			isGVG: boolean;
			isSiege: boolean;
			isNoLockOn: boolean;
			showPVPCounter: boolean;
			showBFCounter: boolean;
			isBattleField: boolean;
		}
	}
}
