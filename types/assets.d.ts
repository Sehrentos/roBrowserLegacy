declare module "*.css";
declare module "*.html";

// declate module for require("Network/PacketStructure")
// interface RequireDefine {
// declare module "Network/PacketStructure" {
// 	import PacketStructure = Network.PacketStructure;
// 	export = PacketStructure;
// 	// export = () => typeof Network.PacketStructure;
// 	declare function define(moduleName: string, dependencies: string[], factory: () => Network.PacketStructure): void;
// }
// declare module "Utils/BinaryReader" {
// 	import BinaryReader = Utils.BinaryReader;
// 	export = BinaryReader;
// 	declare function define(moduleName: string[], dependencies: string[], factory: () => Utils.BinaryReader): void;
// 	declare function define(moduleName: string, dependencies: string[], factory: () => Utils.BinaryReader): void;
// }

// Tests, not working as expected
// interface RequireDefineCustom extends RequireDefine {
// 	(factory: (require: RequireCustom) => void): void;
// }

// interface RequireCustom {
// 	(module: "Network/PacketStructure"): Network.PacketStructure;
// 	(module: "Utils/BinaryReader"): Utils.BinaryReader;
// }

// declare var requirejs: Require2;
// declare var require: Require2;
// declare var define: RequireDefineCustom;
