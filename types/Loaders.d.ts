declare namespace Loaders {

	/** ACT */
	interface Action {
		(data: ArrayBuffer): void;
		new(data: ArrayBuffer): Action;
		fp: Utils.BinaryReader;
		versions: number;
		actions: any[];
		sounds: any[];
		load(data: ArrayBuffer): void;
		readActions(): void;
		readAnimations(): any[];
		readLayers(): {
			layers: any[];
			sound: number;
			pos: {
				x: number;
				y: number;
			}[];
		}
		compile(): {
			actions: any[];
			sounds: any[];
		}
	}

	/** GAT */
	interface Altitude {
		(data: ArrayBuffer): void;
		new(data: ArrayBuffer): Altitude;
		cells: Float32Array<ArrayBuffer>;
		width: number;
		height: number;
		version: number;
		load(data: ArrayBuffer): void;
		compile(): {
			cells: number[];
			width: number;
			height: number;
		}
		TYPE: {
			NONE: number;
			WALKABLE: number;
			WATER: number;
			SNIPABLE: number;
		}
		TYPE_TABLE: { [key: number]: number };
	}

	/** GRF */
	interface GameFile {
		(data: ArrayBuffer): void;
		new(data: ArrayBuffer): GameFile;
		FILELIST_TYPE_FILE: number;
		FILELIST_TYPE_ENCRYPT_HEADER: number;
		FILELIST_TYPE_ENCRYPT_MIXED: number;
		struct_header: Utils.Struct;
		struct_table: Utils.Struct;
		struct_entry: Utils.Struct;
		entries: any[];
		file: File;
		reader: FileReaderSync;
		header: string;
		tables: any[];
		load(file: File): void;
		compile(): any;
	}
	interface GameFileDecrypt {
		decodeFull: (buf: Uint8Array<ArrayBufferLike>, len: number, entry_len: number) => void;
		decodeHeader: (buf: Uint8Array, len: number) => void;
	}

	/** GR2 */
	interface GrannyModel {
		(data: ArrayBuffer): void;
		new(data: ArrayBuffer): GrannyModel;
		TRANSFORM_FLAGS: {
			HasPosition: number,
			HasOrientation: number,
			HasScaleShear: number
		};
		MARSHALLING_TYPE: {
			AnyMarshalling: number,
			Int8Marshalling: number,
			Int16Marshalling: number,
			Int32Marshalling: number,
			MarshallingMask: number
		};
		MEMBER_TYPE: { [key: string]: number }
		MATERIAL_TEXTURE_TYPE: { [key: string]: number }
		BOUND_TRANSFORM_TRACK_FLAGS: { [key: string]: number }
		TRANSFORM_FILE_FLAGS: { [key: string]: number }
		BINK_TEXTURE_FLAGS: { [key: string]: number }
		BSPLINE_SOLVER_FLAGS: { [key: string]: number }
		CAMERA_OUTPUT_Z_RANGE: { [key: string]: number }
		ACCUMULATION_MODE: { [key: string]: number }
		//... TODO implement missing props ...
		File(): {
			CRCIsVaild: (FileName: string) => boolean
		}
		FileCRCIsValid: (FileName: string) => boolean;
		Box: () => any;
		load(file: File): void;
		compile(): any;
	}

	/** GND */
	interface Ground {
		(data: ArrayBuffer): void;
		new(data: ArrayBuffer): Ground;
		parseTextures(): void;
		parseLightmaps(): void;
		parseTiles(): any[];
		parseSurfaces(): any[];
		createLightmapImage(): Uint8Array;
		createTilesColorImage(): Uint8Array;
		createShadowmapData(): Uint8Array;
		getSmoothNormal(): any[];
		load(file: ArrayBuffer): void;
		compile(WATER_LEVEL: number, WATER_HEIGHT: number): {
			width: number;
			height: number;
			textures: string[];
			lightmap: Uint8Array<ArrayBufferLike>;
			lightmapSize: number;
			tileColor: Uint8Array<ArrayBufferLike>;
			shadowMap: Uint8Array<ArrayBuffer>;
			mesh: Float32Array<ArrayBuffer>;
			meshVertCount: number;
			waterMesh: Float32Array<ArrayBuffer>;
			waterVertCount: number;
		}
	}

	interface MapLoader {
		(mapname: string): void;
		new(mapname: string): MapLoader;
		fileCount: number;
		progress: number;
		offset: number;
		setProgress(percent: number): void;
		onprogress(percent: number): void;
		load(mapname: string): void;
		loadGroundTextures(world: any, ground: any, callback: Function): void;
		loadModels(models: any, ground: any): any;
		compileModels(objects: any[]): void;
		mergeMeshes(objects: any[], bufferSize: any): void;
	}

	/** RSM */
	interface Model {
		(data: ArrayBuffer): void;
		new(data: ArrayBuffer): Model;
		load(data: ArrayBuffer): void;
		compile(): any;
		SHADING: { [key: string]: number };
		Box: () => any;
		Node: RSMNode;
	}
	interface RSMNode {
		(rsm: any, fp: any, only: boolean): void;
		new(rsm: any, fp: any, only: boolean): RSMNode;
		main: any;
		is_only: any;
		name: string;
		parentname: string;
		mat3: any;
		offset: any;
		pos: any;
		rotangle: any;
		rotaxis: any;
		scale: any;
		flip: any;
		box: any;
		matrix: number[];
		textures: any;
		vertices: any;
		tvertices: any;
		faces: any;
		rotKeyframes: any;
		posKeyframes: any;
		scaleKeyFrames: any;
		textureKeyFrameGroup: any;
		nodeCalcBoundingBox(_matrix: Utils.Mat4): void
		compile(instance_matrix: Utils.Mat4): any
		calcNormal_NONE(out: Float32Array<ArrayBufferLike>[]): void
		calcNormal_FLAT(out: Float32Array<ArrayBufferLike>[], normalMat: Utils.Mat4, groupUsed: any[]): void
		calcNormal_SMOOTH(out: Float32Array<ArrayBufferLike>[], groupUsed: any[], group: any[]): void
		generate_mesh_FLAT(vert: Float32Array<ArrayBufferLike>[], norm: Float32Array<ArrayBufferLike>[], mesh: any[]): void
		generate_mesh_SMOOTH(vert: Float32Array<ArrayBufferLike>[], norm: Float32Array<ArrayBufferLike>[], mesh: any[]): void
	}

	/** SPR */
	interface Sprite {
		(data: ArrayBuffer): void;
		new(data: ArrayBuffer): Sprite;
		load(data: ArrayBuffer): void;
		compile(): any;
		TYPE_PAL: number;
		TYPE_RGBA: number;
		fp: any;
		header: string;
		version: number;
		indexed_count: number;
		_indexed_count: number;
		rgba_count: number;
		rgba_index: number;
		palette: any;
		frames: any;
	}

	/** STR */
	interface Str {
		(data?: ArrayBuffer, texturePath?: string): void;
		new(data?: ArrayBuffer, texturePath?: string): Str;
		load(data: ArrayBuffer): void;
		compile(): any;
		version: number;
		texturePath: string;
	}

	interface Targa {
		(data: ArrayBuffer): void;
		new(data: ArrayBuffer): Targa;
		Type: { [key: string]: number };
		Origin: { [key: string]: number };
		load(data: Uint8Array): void;
		compile(): any;
		open(path: string, callback: Function): void;
		getImageData(imageData: ImageData): ImageData | { width: number; height: number; data: Uint8ClampedArray };
		getCanvas(): HTMLCanvasElement;
		getDataURL(type?: string): string;
	}

	/** RSW */
	interface World {
		(data: ArrayBuffer): void;
		new(data: ArrayBuffer): World;
		load(data: ArrayBuffer): void;
		compile(): {
			water: any;
			light: {
				longitude: number;
				latitude: number;
				diffuse: number[];
				ambient: number[];
				opacity: number;
				direction: number[];
			};
			sound: any[];
			effect: any[];
		};
		sounds: any[];
		lights: any[];
		effects: any[];
		models: any[];
		files: {
			buildnumber?: number;
			ini?: string;
			gnd?: string;
			gat?: string;
			src?: string
		};
		ground: {
			level: number
			type: number
			waveHeight: number
			waveSpeed: number
			wavePitch: number
			animSpeed: number
			splitWidth: number
			splitHeight: number
			images: number[]
		};
		light: {
			longitude: number
			latitude: number
			diffuse: number[]
			ambient: number[]
			opacity: number
			direction: number[]
		}
	}
}
