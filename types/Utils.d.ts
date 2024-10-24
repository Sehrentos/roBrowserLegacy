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