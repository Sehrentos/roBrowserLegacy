///<reference path="./Utils.d.ts" />

declare namespace Network {

    interface NetworkManager {
        sendPacket(packet): void;
        send(buffer: ArrayBuffer): void;
        setPing(callback): void;
        connect(host: string, port: number, callback: () => any, isZone: boolean);
        hookPacket(packet: Object, callback: () => any): void;
        close(): void;
        read(callback: any): void;
        receive(buffer: Uint8Array): void;
        utils: {
            longToIP: (long: number) => void;
        }
    }

    interface PacketCrypt {
        /** Initialize to get keys for packet encryption */
        init(): void;
        process(view: DataView): void;
    }


    interface PacketLength {
        init(packetver: number): void;
        getPacketLength(id: number): number[] | false;
    }

    /** PacketRegister[0x69] = PACKET.AC.ACCEPT_LOGIN */
    type PacketRegister = {
        [number]: () => any
    }

    interface PacketStructure {
        /** Login */
        CA: PACKET;
        /** Login */
        AC: PACKET;
        /** Char */
        CH: PACKET;
        /** Char */
        HC: PACKET;
        /** Map */
        CZ: PACKET;
        /** Map */
        ZC: PACKET;
        /** All servers */
        CS: PACKET;
        /** All servers */
        SC: PACKET;
        /** unknown */
        ZH: PACKET;
        /** Security */
        AHC: PACKET;
        /** Security */
        CAH: PACKET;
    }

    type PACKET = Record<string, PacketBuilder>;
    interface PacketBuilder {
        new(): any;
        build?: () => Utils.BinaryWriter;
    }

    interface PacketVerManager {
        /** return the current value or from ROConfig */
        get value(): number;
        set value(v: number): any;
        addSupport(date: number, list: any[]): void;
        parseCharInfo(fb: BinaryReader, end: number): void;
    }

    type PacketVersions = Record<number, [PacketBuilder, ...number[]]>;

}