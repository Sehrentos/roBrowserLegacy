/**
 * Engine/MapEngine/Achievement.js
 *
 * Manage Achievement packets and UI
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
define(/** @type {(require: Require)=>Engine.MapEngine.Achievement} */function (require) {
	'use strict';

	/** @type {Network.NetworkManager} */var Network = require('Network/NetworkManager');
	/** @type {Network.PacketStructure} */var PACKET = require('Network/PacketStructure');

	function onAllAchievementList(pkt) {

	}

	function onAchievementUpdate(pkt) {

	}

	function onRequestAchievementRewardACK(pkt) {

	}
	/**
	 * Initialize
	 * @type {Engine.MapEngine.Achievement}
	 */
	return function MainEngine() {
		Network.hookPacket(PACKET.ZC.ALL_ACH_LIST, onAllAchievementList);
		Network.hookPacket(PACKET.ZC.ACH_UPDATE, onAchievementUpdate);
		Network.hookPacket(PACKET.ZC.REQ_ACH_REWARD_ACK, onRequestAchievementRewardACK);
	}
});
