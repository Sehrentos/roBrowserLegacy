declare namespace Vendors {
	interface TextEncoding {
		setCharset: (charset: string) => void;
	}
	interface MD5 {
		hash: (value: string) => string;
	}

	interface glMatrix {
		GLMAT_ARRAY_TYPE: Float32Array;
		GLMAT_EPSILON: number;
		GLMAT_RANDOM: number;
		mat3: Mat3;
		mat4: Mat4;
		quat: Quat;
		vec2: Vec2;
		vec3: Vec3;
		vec4: Vec4;
	}
	interface Mat3 {
		adjoint: (m: number[], dest?: number[]) => number[];
		clone: (m: number[]) => number[];
		copy: (m: number[], dest?: number[]) => number[];
		create: () => number[]; // no args?
		determinant: (m: number[]) => number;
		fromMat2d: (m: number[], dest?: number[]) => number[];
		fromMat4: (m: number[], dest?: number[]) => number[];
		fromQuat: (q: number[], dest?: number[]) => number[];
		identity: (m: number[]) => number[];
		invert: (m: number[], dest?: number[]) => number[];
		mul: (m1: number[], m2: number[], dest?: number[]) => number[];
		multiply: (m1: number[], m2: number[], dest?: number[]) => number[];
		normalFromMat4: (m: number[], dest?: number[]) => number[];
		/**
		 * Rotates a mat3 by the given angle
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat3} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat3} out
		 */
		rotate: (out: number[], a: number[], rad: number) => number[];
		scale: (m: number[], v: number[], dest?: number[]) => number[];
		str: (m: number[]) => string;
		translate: (m: number[], v: number[], dest?: number[]) => number[];
		transpose: (m: number[], dest?: number[]) => number[];
	}
	interface Mat4 {
		adjoint: (m: number[], dest?: number[]) => number[];
		clone: (m: number[]) => number[];
		copy: (m: number[], dest?: number[]) => number[];
		create: () => number[]; // no args?
		determinant: (m: number[]) => number;
		fromQuat: (q: number[], dest?: number[]) => number[];
		fromRotationTranslation: (q: number[], v: number[], dest?: number[]) => number[];
		/**
		 * Generates a frustum matrix with the given bounds
		 *
		 * @param {mat4} out mat4 frustum matrix will be written into
		 * @param {Number} left Left bound of the frustum
		 * @param {Number} right Right bound of the frustum
		 * @param {Number} bottom Bottom bound of the frustum
		 * @param {Number} top Top bound of the frustum
		 * @param {Number} near Near bound of the frustum
		 * @param {Number} far Far bound of the frustum
		 * @returns {Mat4} out
		 */
		frustum: (out: number[], left: number, right: number, bottom: number, top: number, near: number, far: number) => number[];
		identity: (m: number[]) => number[];
		invert: (m: number[], dest?: number[]) => number[];
		mul: (m1: number[], m2: number[], dest?: number[]) => number[];
		multiply: (m1: number[], m2: number[], dest?: number[]) => number[];
		ortho: (left: number, right: number, bottom: number, top: number, near: number, far: number, dest?: number[]) => number[];
		/**
		 * Generates a perspective projection matrix with the given bounds
		 *
		 * @param {mat4} out mat4 frustum matrix will be written into
		 * @param {number} fovy Vertical field of view in radians
		 * @param {number} aspect Aspect ratio. typically viewport width/height
		 * @param {number} near Near bound of the frustum
		 * @param {number} far Far bound of the frustum
		 * @returns {Mat4} out
		 */
		perspective: (out: number[], fovy: number, aspect: number, near: number, far: number) => number[];
		/**
		 * Rotates a mat4 by the given angle
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @param {vec3} axis the axis to rotate around
		 * @returns {Mat4} out
		 */
		rotate: (out: number[], a: number[], rad: number, axis: number[]) => number[];
		rotateX: (out: number[], a: number[], rad: number) => number[];
		rotateY: (out: number[], a: number[], rad: number) => number[];
		/**
		 * Rotates a matrix by the given angle around the Z axis
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {Mat4} out
		 */
		rotateZ: (out: number[], a: number[], rad: number) => number[];
		scale: (m: number[], v: number[], dest?: number[]) => number[];
		str: (m: number[]) => string;
		translate: (m: number[], v: number[], dest?: number[]) => number[];
		transpose: (m: number[], dest?: number[]) => number[];
	}
	interface Quat {
		add: (q1: number[], q2: number[], dest?: number[]) => number[];
		calculateW: (q: number[], dest?: number[]) => number[];
		clone: (q: number[]) => number[];
		conjugate: (q: number[], dest?: number[]) => number[];
		copy: (q: number[], dest?: number[]) => number[];
		create: () => number[]; // no args?
		dot: (q1: number[], q2: number[]) => number;
		fromMat3: (m: number[], dest?: number[]) => number[];
		fromValues: (x: number, y: number, z: number, w: number, dest?: number[]) => number[];
		identity: (q: number[]) => number[];
		inverse: (q: number[], dest?: number[]) => number[];
		len: (q: number[]) => number;
		length: (q: number[]) => number;
		lerp: (out: number[], q1: number[], q2: number[], amount: number) => number[];
		mul: (q1: number[], q2: number[], dest?: number[]) => number[];
		multiply: (q1: number[], q2: number[], dest?: number[]) => number[];
		normalize: (q: number[], dest?: number[]) => number[];
		rotate: (out: number[], a: number[], rad: number, axis: number[]) => number[];
		rotateX: (out: number[], a: number[], rad: number) => number[];
		rotateY: (out: number[], a: number[], rad: number) => number[];
		rotateZ: (out: number[], a: number[], rad: number) => number[];
		rotationTo: (q1: number[], q2: number[], dest?: number[]) => number[];
		scale: (q: number[], v: number[], dest?: number[]) => number[];
		set: (q: number[], x: number, y: number, z: number, w: number, dest?: number[]) => number[];
		setAxes: (out: number[], view: number[], right: number[], up: number[]) => number[];
		setAxesAngle: (out: number[], view: number[], right: number[], up: number[], angle: number) => number[];
		slerp: (out: number[], q1: number[], q2: number[], amount: number) => number[];
		sqrLen: (q: number[]) => number;
		squaredLength: (q: number[]) => number;
		str: (q: number[]) => string;
	}
	interface Vec2 {
		add: (v1: number[], v2: number[], dest?: number[]) => number[];
		clone: (v: number[]) => number[];
		copy: (v: number[], dest?: number[]) => number[];
		create: () => number[]; // no args?
		cross: (v1: number[], v2: number[], dest?: number[]) => number[];
		dist: (v1: number[], v2: number[]) => number;
		distance: (v1: number[], v2: number[]) => number;
		div: (v1: number[], v2: number[], dest?: number[]) => number[];
		divide: (v1: number[], v2: number[], dest?: number[]) => number[];
		dot: (v1: number[], v2: number[]) => number;
		forEach: (a: number[], stride: number, offset: number, count: number, fn: Function, arg: any) => number[];
		fromValues: (x: number, y: number, dest?: number[]) => number[];
		len: (v: number[]) => number;
		length: (v: number[]) => number;
		lerp: (out: number[], v1: number[], v2: number[], amount: number) => number[];
		max: (v1: number[], v2: number[], dest?: number[]) => number[];
		min: (v1: number[], v2: number[], dest?: number[]) => number[];
		mul: (v1: number[], v2: number[], dest?: number[]) => number[];
		multiply: (v1: number[], v2: number[], dest?: number[]) => number[];
		negate: (v: number[], dest?: number[]) => number[];
		normalize: (v: number[], dest?: number[]) => number[];
		random: (dest?: number[]) => number[];
		scale: (v: number[], num: number, dest?: number[]) => number[];
		scaleAndAdd: (v1: number[], v2: number[], scale: number, dest?: number[]) => number[];
		set: (v: number[], x: number, y: number, dest?: number[]) => number[];
		sqrDist: (v1: number[], v2: number[]) => number;
		sqrLen: (v: number[]) => number;
		squaredDistance: (v1: number[], v2: number[]) => number;
		squaredLength: (v: number[]) => number;
		str: (v: number[]) => string;
		sub: (v1: number[], v2: number[], dest?: number[]) => number[];
		substract: (v1: number[], v2: number[], dest?: number[]) => number[];
		tranformMat2: (v: number[], mat: number[], dest?: number[]) => number[];
		transformMat2d: (v: number[], mat: number[], dest?: number[]) => number[];
		transformMat3: (v: number[], mat: number[], dest?: number[]) => number[];
		transformMat4: (v: number[], mat: number[], dest?: number[]) => number[];
	}
	interface Vec3 {
		add: (v1: number[], v2: number[], dest?: number[]) => number[];
		clone: (v: number[]) => number[];
		copy: (v: number[], dest?: number[]) => number[];
		create: () => number[]; // no args?
		cross: (v1: number[], v2: number[], dest?: number[]) => number[];
		dist: (v1: number[], v2: number[]) => number;
		distance: (v1: number[], v2: number[]) => number;
		div: (v1: number[], v2: number[], dest?: number[]) => number[];
		divide: (v1: number[], v2: number[], dest?: number[]) => number[];
		dot: (v1: number[], v2: number[]) => number;
		forEach: (a: number[], stride: number, offset: number, count: number, fn: Function, arg: any) => number[];
		fromValues: (x: number, y: number, z: number, dest?: number[]) => number[];
		len: (v: number[]) => number;
		length: (v: number[]) => number;
		lerp: (out: number[], v1: number[], v2: number[], amount: number) => number[];
		max: (v1: number[], v2: number[], dest?: number[]) => number[];
		min: (v1: number[], v2: number[], dest?: number[]) => number[];
		mul: (v1: number[], v2: number[], dest?: number[]) => number[];
		multiply: (v1: number[], v2: number[], dest?: number[]) => number[];
		negate: (v: number[], dest?: number[]) => number[];
		normalize: (v: number[], dest?: number[]) => number[];
		random: (dest?: number[]) => number[];
		scale: (v: number[], num: number, dest?: number[]) => number[];
		scaleAndAdd: (v1: number[], v2: number[], scale: number, dest?: number[]) => number[];
		set: (v: number[], x: number, y: number, z: number, dest?: number[]) => number[];
		sqrDist: (v1: number[], v2: number[]) => number;
		sqrLen: (v: number[]) => number;
		squaredDistance: (v1: number[], v2: number[]) => number;
		squaredLength: (v: number[]) => number;
		str: (v: number[]) => string;
		sub: (v1: number[], v2: number[], dest?: number[]) => number[];
		substract: (v1: number[], v2: number[], dest?: number[]) => number[];
		transformMat3: (v: number[], mat: number[], dest?: number[]) => number[];
		transformMat4: (v: number[], mat: number[], dest?: number[]) => number[];
		transformQuat: (v: number[], q: number[], dest?: number[]) => number[];
	}
	interface Vec4 {
		add: (v1: number[], v2: number[], dest?: number[]) => number[];
		clone: (v: number[]) => number[];
		copy: (v: number[], dest?: number[]) => number[];
		create: () => number[]; // no args?
		dist: (v1: number[], v2: number[]) => number;
		distance: (v1: number[], v2: number[]) => number;
		div: (v1: number[], v2: number[], dest?: number[]) => number[];
		divide: (v1: number[], v2: number[], dest?: number[]) => number[];
		dot: (v1: number[], v2: number[]) => number;
		forEach: (a: number[], stride: number, offset: number, count: number, fn: Function, arg: any) => number[];
		fromValues: (x: number, y: number, z: number, dest?: number[]) => number[];
		len: (v: number[]) => number;
		length: (v: number[]) => number;
		lerp: (out: number[], v1: number[], v2: number[], amount: number) => number[];
		max: (v1: number[], v2: number[], dest?: number[]) => number[];
		min: (v1: number[], v2: number[], dest?: number[]) => number[];
		mul: (v1: number[], v2: number[], dest?: number[]) => number[];
		multiply: (v1: number[], v2: number[], dest?: number[]) => number[];
		negate: (v: number[], dest?: number[]) => number[];
		normalize: (v: number[], dest?: number[]) => number[];
		random: (dest?: number[]) => number[];
		scale: (v: number[], num: number, dest?: number[]) => number[];
		scaleAndAdd: (v1: number[], v2: number[], scale: number, dest?: number[]) => number[];
		set: (v: number[], x: number, y: number, z: number, dest?: number[]) => number[];
		sqrDist: (v1: number[], v2: number[]) => number;
		sqrLen: (v: number[]) => number;
		squaredDistance: (v1: number[], v2: number[]) => number;
		squaredLength: (v: number[]) => number;
		str: (v: number[]) => string;
		sub: (v1: number[], v2: number[], dest?: number[]) => number[];
		substract: (v1: number[], v2: number[], dest?: number[]) => number[];
		transformMat4: (v: number[] | Float32Array, mat: number[] | Float32Array, dest?: number[]) => number[]; // validate Float32Array use
		transformQuat: (v: number[], q: number[], dest?: number[]) => number[];
	}
}
