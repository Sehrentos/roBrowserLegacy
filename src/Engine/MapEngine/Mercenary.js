/**
 * Engine/MapEngine/Mercenary.js
 *
 * Manage mercenary
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 */
define(/** @type {(require: Require)=>Engine.MapEngine.Mercenary} */function (require) {
	'use strict';

	/** @type {DB.DBManager} */var DB = require('DB/DBManager');
	/** @type {Network.NetworkManager} */var Network = require('Network/NetworkManager');
	/** @type {Network.PacketStructure} */var PACKET = require('Network/PacketStructure');
	/** @type {Engine.SessionStorage} */var Session = require('Engine/SessionStorage');
	/** @type {Renderer.EntityManager} */var EntityManager = require('Renderer/EntityManager');
	/** @type {UI.UIManager} */var UIManager = require('UI/UIManager');
	/** @type {UI.Component.MercenaryInformations} */var MercenaryInformations = require('UI/Components/MercenaryInformations/MercenaryInformations');
	/** @type {UI.Component.SkillListMH} */var SkillListMH = require('UI/Components/SkillListMH/SkillListMH');
	/** @type {Controls.MouseEventHandler} */var Mouse = require('Controls/MouseEventHandler');

	/**
	 * Initialize Mercenary information
	 *
	 * @param {object} pkt - PACKET.ZC.MER_INIT
	 */
	function onMercenaryInit(pkt) {
		Session.mercId = pkt.AID;
		var entity = EntityManager.get(pkt.AID);

		if (entity) {
			entity.attack_range = pkt.ATKRange;
			entity.life.hp = pkt.hp;
			entity.life.hp_max = pkt.maxHP;
			entity.life.sp = pkt.sp;
			entity.life.sp_max = pkt.maxSP;
			entity.life.update();
		}

		if (entity && entity.life.display) {
			pkt.life = entity.life;
		}

		// Add skill points to the packet
		pkt.SKPoint = pkt.SKPoint || 0;

		MercenaryInformations.append();
		MercenaryInformations.setInformations(pkt);
		MercenaryInformations.startAI();
	}

	/**
	 * Update Mercenary information
	 *
	 * @param {object} pkt - PACKET.ZC.MER_PROPERTY
	 */
	function onMercenaryProperty(pkt) {
		var entity = EntityManager.get(Session.mercId);

		if (entity) {
			entity.life.hp = pkt.hp;
			entity.life.hp_max = pkt.maxHP;
			entity.life.sp = pkt.sp;
			entity.life.sp_max = pkt.maxSP;
			entity.life.update();
		}

		if (entity && entity.life.display) {
			pkt.life = entity.life;
		}

		MercenaryInformations.setInformations(pkt);
	}

	/**
	 * Update parameter
	 *
	 * @param {object} pkt - PACKET.ZC.MER_PAR_CHANGE
	 */
	function onParameterChange(pkt) {
		var entity = EntityManager.get(Session.mercId);
		if (!entity) {
			return;
		}

		switch (pkt.param) {
			case 0x0:  // HP
				entity.life.hp = pkt.value;
				entity.life.update();
				break;

			case 0x1:  // SP
				entity.life.sp = pkt.value;
				entity.life.update();
				break;

			case 0x2:  // MaxHP
				entity.life.hp_max = pkt.value;
				entity.life.update();
				break;

			case 0x3:  // MaxSP
				entity.life.sp_max = pkt.value;
				entity.life.update();
				break;
		}
	}

	/**
	 * Get mercenary skills
	 *
	 * @param {object} pkt - PACKET.ZC.MER_SKILLINFO_LIST
	 */
	function onSkillList(pkt) {
		SkillListMH.mercenary.setSkills(pkt.skillList);
	}

	/**
	 * Update skill
	 *
	 * @param {object} pkt - PACKET.ZC.MER_SKILLINFO_UPDATE
	 */
	function onSkillUpdate(pkt) {
		SkillListMH.mercenary.updateSkill(pkt);
	}

	/**
	 * Request to delete mercenary
	 */
	MercenaryInformations.reqDeleteMercenary = function reqDeleteMercenary() {
		UIManager.showPromptBox(DB.getMessage(356), 'ok', 'cancel', function () {
			var pkt = new PACKET.CZ.MER_COMMAND();
			pkt.command = 2;
			Network.sendPacket(pkt);
		});
	};

	/**
	 * Request to move mercenary to owner
	 */
	MercenaryInformations.reqMoveToOwner = function reqMoveToOwner(gid) {
		var pkt = new PACKET.CZ.REQUEST_MOVETOOWNER();
		pkt.GID = gid;
		Network.sendPacket(pkt);
	};

	/**
	 * Request mercenary to attack target
	 */
	MercenaryInformations.reqAttack = function reqAttack(GID, targetGID) {
		var pkt = new PACKET.CZ.REQUEST_ACTNPC();
		pkt.GID = GID;
		pkt.targetGID = targetGID;
		pkt.action = 0;
		Network.sendPacket(pkt);
	};

	/**
	 * Request mercenary to move to location
	 */
	MercenaryInformations.reqMoveTo = function reqMoveTo(GID) {
		var pkt = new PACKET.CZ.REQUEST_MOVENPC();
		pkt.GID = GID;
		pkt.dest[0] = Mouse.world.x;
		pkt.dest[1] = Mouse.world.y;
		Network.sendPacket(pkt);
	};

	/**
	 * Initialize
	 * @type {Engine.MapEngine.Mercenary}
	 */
	return function MercenaryEngine() {
		Network.hookPacket(PACKET.ZC.MER_INIT, onMercenaryInit);
		Network.hookPacket(PACKET.ZC.MER_PROPERTY, onMercenaryProperty);
		Network.hookPacket(PACKET.ZC.MER_PAR_CHANGE, onParameterChange);
		Network.hookPacket(PACKET.ZC.MER_SKILLINFO_LIST, onSkillList);
		Network.hookPacket(PACKET.ZC.MER_SKILLINFO_UPDATE, onSkillUpdate);
	};
});
