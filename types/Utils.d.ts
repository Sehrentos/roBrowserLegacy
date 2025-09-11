declare namespace Utils {

	interface BinaryWriter {
		new(length: number): BinaryWriter;
		buffer: ArrayBuffer;
		view: DataView;
		offset: number;

		setInt8(value: number): BinaryWriter;
		writeChar(value: number): BinaryWriter;
		writeByte(value: number): BinaryWriter;

		setUint8(value: number): BinaryWriter;
		writeUChar(value: number): BinaryWriter;
		writeUByte(value: number): BinaryWriter;

		setInt16(value: number): BinaryWriter;
		writeShort(value: number): BinaryWriter;

		setUint16(value: number): BinaryWriter;
		writeUShort(value: number): BinaryWriter;

		setInt32(value: number): BinaryWriter;
		writeInt(value: number): BinaryWriter;
		writeLong(value: number): BinaryWriter;

		setUint32(value: number): BinaryWriter;
		writeUInt(value: number): BinaryWriter;
		writeULong(value: number): BinaryWriter;

		setFloat32(value: number): BinaryWriter;
		writeFloat(value: number): BinaryWriter;

		setFloat64(value: number): BinaryWriter;
		writeDouble(value: number): BinaryWriter;

		setString(str: string, length?: number): BinaryWriter;
		writeString(str: string, length?: number): BinaryWriter;

		setBinaryString(str: string, length?: number): BinaryWriter;
		writeBinaryString(str: string, length?: number): BinaryWriter;

		setBuffer(buffer: ArrayBuffer): BinaryWriter;
		writeBuffer(buffer: ArrayBuffer): BinaryWriter;

		skip(offset: number): BinaryWriter;

		setPos(xy: number[]): BinaryWriter;
		writePos(xy: number[]): BinaryWriter;
	}

	interface BinaryReader {
		new(mixed: ArrayBuffer | string, start?: number, end?: number): BinaryReader;
		buffer: ArrayBuffer;
		view: DataView;
		offset: number;
		length: number;

		getInt8(): number;
		readChar(): number;
		readByte(): number;

		getUint8(): number;
		readUChar(): number;
		readUByte(): number;

		getInt16(): number;
		readShort(): number;

		getUint16(): number;
		readUShort(): number;

		getInt32(): number;
		readInt(): number;
		readLong(): number;

		getUint32(): number;
		readUInt(): number;
		readULong(): number;

		getFloat32(): number;
		readFloat(): number;

		getFloat64(): number;
		readDouble(): number;

		getUInt64(): number;
		readUInt64(): number;

		tell(): number;

		getString(length: number): string;
		readString(length: number): string;

		getBinaryString(length: number): string;
		readBinaryString(length: number): string;

		getStruct(struct: any): any;
		readStruct(struct: any): any;

		seek(index: number, type?: number): number;

		getPos(): number[];
		readPos(): number[];

		getPos2(): number[];
		readPos2(): number[];
	}

	interface Struct {
		new(...args: string[]): Struct;
		_list: any[];
		size: number;
	}

	// Utils.JQuery use the Static interface
	//interface JQuery extends JQueryStatic {}

	// Utils.Texture
	interface Texture {
		load(data: any, oncomplete: Function): void;
		removeMagenta(canvas: HTMLCanvasElement): void;
	}

	interface Executable {
		getDate(file: File, callback: (date: number) => void): void;
		isROExec(file: File): boolean;
	}

	/** Extend Vendors/gl-matrix */
	interface glMatrix extends Vendors.glMatrix {
		mat3: Mat3;
		mat4: Mat4;
		vec3: Vec3;
		vec4: Vec4;
	}
	interface Vec3 extends Vendors.Vec3 {
		calcNormal(a: vec3, b: vec3, c: vec3, out: vec3): vec3;
	}
	interface Vec4 extends Vendors.Vec4 {
		calcNormal(a: vec3, b: vec3, c: vec3, d: vec3, out: vec3): vec3;
	}
	interface Mat3 extends Vendors.Mat3 {
		toMat4(mat: mat3, dest?: mat4): mat4;
	}
	interface Mat4 extends Vendors.Mat4 {
		translateZ(mat: mat4, z: float, dest?: mat4): mat4;
		rotateQuat(out: any, mat: mat4, w: any[]): mat4;
		extractRotation(out: any, mat: mat4): mat4;
		toInverseMat3(mat: mat4, dest?: mat3): mat3;
		perspective(fovy: number, aspect: number, near: number, far: number, dest?: mat4): mat4;
		multiplyVec3(vec: vec3, mat: mat4): vec3;
	}

	interface Queue {
		(): Queue;
		new(): Queue;
		list: any[];
		add(callback: Function): void;
		next(): void;
		_next(): void;
		run(): void;
	}

	interface WebGL {
		createShaderProgram(gl: WebGL2RenderingContext, vertexShader: string, fragmentShader: string): WebGLProgram;
		getContext(canvas: HTMLCanvasElement, parameters: any): RenderingContext;
		toPowerOfTwo(num: number): number;
		texture(gl: WebGL2RenderingContext, url: string, callback: Function, ...args: any[]): void;
		isWebGL2(gl: WebGL2RenderingContext): boolean;
	}

}

// #region global
interface Window {
	/** BinaryReader */
	SEEK_CUR: number;
	/** BinaryReader */
	SEEK_END: number;
	/** BinaryReader */
	SEEK_SET: number;
}
/** BinaryReader */
declare var SEEK_CUR: number;
/** BinaryReader */
declare var SEEK_END: number;
/** BinaryReader */
declare var SEEK_SET: number;
// #endregion
