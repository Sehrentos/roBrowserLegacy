declare namespace DB {
	namespace Effects {
		/**
		 * DB/Effects/EffectConst
		 */
		interface Const {
			[key: string]: number;
		}

		/**
		 * DB/Effects/EffectTable
		 */
		interface Table {
			[key: number]: TEffect[];
		}

		interface TEffect {
			type?: string
			textureName?: string
			textureFile?: string
			color?: number[]
			circleSides?: number
			duplicate?: number
			timeBetweenDupli?: number
			totalCircleSides?: number
			file?: string
			wav?: string
			duration?: number
			alphaMax?: number
			alphaMin?: number
			alphaMaxDelta?: number
			animation?: number
			animationSpeed?: number
			animationOut?: boolean
			angle?: number
			angleY?: number
			angleX?: number
			angleZ?: number
			angleRand?: number[]
			angleZRandom?: number
			durationRand?: number[]
			frame?: number
			delayWav?: number
			delayFrame?: number
			delayLate?: number
			delayOffset?: number
			delayOffsetDelta?: number
			fade?: boolean
			fadeIn?: boolean
			fadeOut?: boolean
			fixedPerspective?: boolean
			// @FIXME posX, posY, posZ OR  posx, posy, posz - typo?
			posX?: number // offsets the cylinder's position on it's X, Y, Z axis
			posY?: number
			posZ?: number
			posx?: number // sets the relative position of the texture
			posy?: number
			posz?: number
			poszStart?: number
			posxStart?: number
			posxRand?: number
			posyRand?: number
			posyStart?: number
			posxEndRand?: number
			posyEndRand?: number
			poszEnd?: number
			poszEndRand?: number
			posyStartRand?: number
			posxStartRand?: number
			poszStartRand?: number
			posxStartRandMiddle?: number
			posyStartRandMiddle?: number
			poszStartRandMiddle?: number
			posxEndRandMiddle?: number
			posyEndRandMiddle?: number
			poszEndRandMiddle?: number
			poszSmooth?: boolean
			blendMode?: number
			size?: number
			sizeX?: number
			sizeY?: number
			sizeEnd?: number
			sizeEndY?: number
			sizeEndX?: number | number[]
			sizeStart?: number
			sizeStartY?: number
			sizeStartX?: number
			sizeDelta?: number
			sizeRand?: number
			sizeRandY?: number
			sizeRandYMiddle?: number
			sizeRandX?: number
			sizeRandEndY?: number[]
			sizeSmooth?: boolean
			sizeRandStartX?: number[]
			sizeRandStartY?: number[]
			spriteName?: string
			playSprite?: boolean
			circlePattern?: boolean
			circleOuterSizeRand?: number[]
			circleInnerSize?: number
			head?: boolean
			min?: string
			red?: number
			green?: number
			blue?: number
			attachedEntity?: boolean
			sparkling?: boolean
			sparkNumber?: number
			shadowTexture?: boolean
			rand?: number[]
			repeat?: boolean
			rotate?: boolean
			rotateX?: number
			rotateY?: number | number[]
			rotateZ?: number | number[]
			rotateLate?: number
			rotateLateDelta?: number
			rotateToTarget?: boolean
			rotateWithCamera?: boolean
			rotationClockwise?: boolean
			rotatePosX?: number
			rotatePosY?: number
			topSize?: number
			bottomSize?: number | number[]
			height?: number | number[]
			width?: number
			toSrc?: boolean
			fromSrc?: boolean
			toAngle?: number
			nbOfRotation?: number
			zIndex?: number
			offsetX?: number | number[]
			offsetY?: number | number[]
			offsetZ?: number | number[]
			zOffset?: number
			yOffset?: number
			func?: (e: any, v: number) => void // EF_LOCKON
			param0_Func?: (e: any, v: number) => void // EF_SMOKE
			param1_Func?: (e: any, v: number) => void // EF_SMOKE
		}

		/**
		 * DB/Effects/WeatherEffect
		 */
		interface Weather {
			sky: {
				[key: string]: {
					skyColor: number[];
					cloudColor: number[];
				}
			}
		}
	}

	namespace Items {
		interface EquipmentLocation { [key: string]: number }
		interface Hats { [key: string]: string }
		interface ItemEffect { [key: number]: { effectId: number } }
		interface ItemRandomOption { [key: number]: string }
		interface ItemTable { [key: number]: { ClassNum: number } }
		interface ItemType { [key: string]: number }
		interface RobeTable { [key: number]: string }
		interface ShieldTable { [key: number]: string }
		interface WeaponHitSoundTable { [key: number]: string[] }
		interface WeaponSoundTable { [key: number]: string[] }
		interface WeaponTable { [key: number]: string }
		interface WeaponTrailTable { [key: number]: string }
		interface WeaponType { [key: string]: number }
	}

	namespace Jobs {
		interface AllMountTable { [key: number]: number }
		interface JobConst { [key: string]: number }
		type BabyTable = number[]
		type HairIndexTable = number[][]
		interface JobHitSoundTable { [key: number]: string[] }
		interface JobNameTable { [key: number]: string }
		interface JobPropertyTable {
			[key: number]: {
				isHuman: boolean;
				isDoram: boolean;
				isNoviceClass: boolean;
				isFirstClass: boolean;
				isSecondClass: boolean;
				isThirdClass: boolean;
				isFourthClass: boolean;
				isRebirth: boolean;
				isBaby: boolean;
				isExpanded: boolean;
				base1stClass?: number;
				base2ndClass?: number;
				base3rdClass?: number;
				base4thClass?: number;
			}
		}
		interface MountTable { [key: number]: number }
		interface PalNameTable { [key: number]: string }
		interface WeaponAction {
			[key: number]: {
				[key: string]: number
			} | {
				[key: string]: number
			}[]
		}
		interface WeaponJobTable { [key: string]: string }
	}

	namespace Map {
		interface MapState { [key: string]: { [key: string]: number } }
		interface MapInfo {
			[key: string]: {
				backgroundBmp?: string;
				signName?: {
					mainTitle?: string;
					subTitle?: string;
				};
				subTitle?: boolean;
				displayName?: string;
			}
		}
		type WorldMap = {
			id: string;
			ep_from: number;
			ep_to: number;
			name: string;
			maps: {
				id: string;
				ep_from: number;
				ep_to: number;
				name: string;
				top: number;
				left: number;
				width: number;
				height: number;
			}[]
		}[]
	}

	// DB/Monsters
	namespace Mobs {
		interface MonsterNameTable { [key: number]: string }
		interface MonsterTable { [key: number]: string }
		interface ShadowTable { [key: string]: number }
	}

	namespace Pets {
		interface PetAction { [key: number]: string }
		type PetEmotionTable = number[][][]
		interface PetFriendlyState {
			PET_ASHAMED: 0
			PET_AWKWARD: 1
			PET_NORMAL: 2
			PET_FRIENDLY: 3
			PET_FAMILIAR: 4
		}
		interface PetHungryState {
			PET_HUNGER: 0
			PET_HUNGRY: 1
			PET_SATISFIED: 2
			PET_ENOUGH: 3
			PET_FULL: 4
		}
		interface PetIllustration { [key: number]: string }
		interface PetMessageConst {
			PM_FEEDING: 0
			PM_HUNTING: 1
			PM_DANGER: 2
			PM_DEAD: 3
			PM_NORMAL: 4
			PM_PERFORMANCE_S: 5
			PM_LEVELUP: 6
			PM_PERFORMANCE1: 7
			PM_PERFORMANCE2: 8
			PM_PERFORMANCE3: 9
			PM_CONNENCT: 10
		}
	}

	namespace Skills {
		interface SkillAction {
			[key: number]: ((entity: any, tick: any) => TSkillAction) | false
		}
		type TSkillAction = {
			action: any;
			frame: number;
			repeat: boolean;
			play: boolean;
			next: boolean | TSkillAction;
		}
		interface SkillConst { [key: string]: number }
		interface SkillDescription { [key: number]: string }
		interface SkillEffect {
			[key: number]: {
				effectId?: number | string | { [key: number]: number | string }
				effectIdOnCaster?: number | { [key: number]: number | string }
				groundEffectId?: number | string
				hitEffectId?: number | string | { [key: number]: number | string }
				beforeHitEffectId?: number | string
				beginCastEffectId?: number | string
				successEffectId?: number | string | { [key: number]: number | string }
				successEffectIdOnCaster?: number
				hideCastBar?: boolean
				hideCastAura?: boolean
			}
		}
		interface SkillInfo {
			[key: number]: {
				Name: string
				SkillName: string
				MaxLv: number
				SpAmount: number[]
				bSeperateLv: boolean
				AttackRange: number[]
				NeedSkillList?: { [key: number]: number[] }
				_NeedSkillList?: number[][]
			}
		}
		interface SkillTreeView { [key: number]: { [key: number | string]: number } }
		interface SkillUnit { [key: number]: number | string }
		interface SkillUnitConst { [key: string]: number }
	}

	namespace Status {
		interface StatusConst { [key: string]: number }
		interface StatusInfo {
			[key: string]: {
				icon?: string;
				haveTimeLimit?: number;
				posTimeLimitStr?: number;
				descript?: string[][]
			}
		}
		interface StatusProperty { [key: string]: number }
		interface StatusState {
			[key: string]: {
				[key: string]: number
			}
		}
	}

	interface DBManager {
		mapalias: {};
		CNameTable: {};
		INTERFACE_PATH: string;
		LUA_PATH: string;
		init(): void;
		getBodyPath(id: number, sex: boolean, alternative: boolean): string;
		getAdminPath(sex: boolean): string;
		getBodyPalPath(id: number, pal: number, sex: boolean): string;
		getHeadPath(id: number, job: number, sex: boolean, orcish: boolean): string;
		getHeadPalPath(id: number, pal: number, job: number, sex: boolean): string;
		getHatPath(id: number, sex: boolean): string;
		getRobePath(id: number, job: number, sex: boolean): string;
		getPetEquipPath(id: number): string;
		getPetIllustPath(id: number): string
		isShield(id: integer): boolean
		getPCAttackMotion(job: any, sex: any, weapon: any, isDualWeapon: any): number
		isDualWeapon(job: any, sex: any, weapon: any): boolean
		getWeaponType(itemID: any): number
		makeWeaponType(left: any, right: any): number
		getShieldPath(id: number, job: number, sex: boolean): string
		getWeaponPath(id: number, job: number, sex: boolean, leftid?: boolean): string
		getWeaponTrail(id: number, job: number, sex: boolean): string
		getCartPath(num: any): string
		getWeaponSound(id: any): string
		getWeaponHitSound(id: any): string
		getJobHitSound(job_id: any): string
		getWeaponViewID(id: number): number
		getWeaponAction(id: number, job: number, sex: number): number
		getItemInfo(itemid: any): Items.ItemTable
		getItemPath(itemid: any, identify: any): string
		getItemName(item: any, options?: {
			showItemRefine?: boolean;
			showItemGrade?: boolean;
			showItemSlots?: boolean;
			showItemPrefix?: boolean;
			showItemPostfix?: boolean;
			showItemOptions?: boolean;
		}): string
		getOptionName(id: integer): string
		getMessage(id: any, defaultText: any): string
		getSkillDescription(id: any): string
		getMap(mapname: any): any
		getMapName(mapname: string, defaultName: any): string
		getMonsterName(id: number): string;
		getTownInfo(mapname: string): any;
		getMapInfo(mapname: string): any
		getLaphineSysList(): any[]
		getLaphineSysInfoById(itemId: number): any
		getLaphineUpgList(): any
		getLaphineUpgInfoById(itemId: number): any
		getItemIdfromBase(baseItem: string): number
		getBasefromItemID(itemId: number): string
		findReformListByItemID(itemId: number): any
		getReformInfo(reformId: string): any
		getAllReformInfos(reformIds: any[]): any[]
		findSignboard(mapname: string, x: number, y: number, tolerance?: number): any
		getTranslatedSignBoard(description: string): string
		isBaby(id: number): boolean
		getRandomJoke(): any
		getRandomScream(): any
		getNameByGID(GID: any): void
		getPetTalk(data: any): string
		getPetHungryState(hunger: number): number
		getPetFriendlyState(friendly: number): number
		getPetActText(action: number): string
		getPetHungryText(state: any): string
		getPetEmotion(hunger: any, friendly: number, act: any): number
		getPetTalkNumber(job: number, act: any, hungry: number): number
		isIndoor(mapname: any): boolean
		UpdateOwnerName: object;
		getQuestInfo(questID: number): any;
		getCheckAttendanceInfo(): {
			Config: {};
			Rewards: any[];
		};
		getBuyingStoreItemList(): any;
		isBuyable(id: any): boolean;
		isPetEgg(id: number): boolean;
		getJobClass(job: number): string;
		searchNavigation(query: string, type: string): any[];
		getNaviLinkTable(): any[];
		getNaviLinkDistanceTable(): any[];
		getNaviNpcDistanceTable(): any[];
	}

	interface Emotions {
		commands: object;
		names: object;
		indexes: object;
		order: object;
	}

	interface EmotionsConst { [key: string]: number }

	interface TownInfo {
		[mapname: string]: {
			Name: string;
			X: number;
			Y: number;
			Type: number;
		}[];
	}
}
