/**
 * DB/Jobs/WeaponAction.js
 *
 * Define attack action for each weapon
 * WeaponAction[<job>][<weapon type>]
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
define(['./JobConst', 'DB/Items/WeaponType'], function (
	/** @type {DB.Jobs.JobConst} */JobId,
	/** @type {DB.Items.WeaponType} */WeaponType
) {
	"use strict";

	/** @type {DB.Jobs.WeaponAction} */
	const WeaponAction = {};

	WeaponAction[JobId.NOVICE] = [{
		// female
		[WeaponType.NONE]: 0,
		[WeaponType.ROD]: 1,
		[WeaponType.TWOHANDROD]: 1,
		[WeaponType.SWORD]: 1,
		[WeaponType.TWOHANDSWORD]: 1,
		[WeaponType.AXE]: 1,
		[WeaponType.TWOHANDAXE]: 1,
		[WeaponType.MACE]: 1,
		[WeaponType.TWOHANDMACE]: 1,
		[WeaponType.SHORTSWORD]: 2
	}, {
		// male
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.ROD]: 2,
		[WeaponType.TWOHANDROD]: 2,
		[WeaponType.SWORD]: 2,
		[WeaponType.TWOHANDSWORD]: 2,
		[WeaponType.AXE]: 2,
		[WeaponType.TWOHANDAXE]: 2,
		[WeaponType.MACE]: 2,
		[WeaponType.TWOHANDMACE]: 2,
	}];

	WeaponAction[JobId.SWORDMAN] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.SWORD]: 1,
		[WeaponType.TWOHANDSWORD]: 1,
		[WeaponType.AXE]: 1,
		[WeaponType.TWOHANDAXE]: 1,
		[WeaponType.MACE]: 1,
		[WeaponType.TWOHANDMACE]: 1,
		[WeaponType.SPEAR]: 2,
		[WeaponType.TWOHANDSPEAR]: 2,
	};

	WeaponAction[JobId.MAGICIA] = {
		[WeaponType.NONE]: 0,
		[WeaponType.ROD]: 1,
		[WeaponType.TWOHANDROD]: 1,
		[WeaponType.SHORTSWORD]: 2,
	};

	WeaponAction[JobId.ARCHER] = {
		[WeaponType.NONE]: 0,
		[WeaponType.BOW]: 1,
		[WeaponType.SHORTSWORD]: 2,
	};

	WeaponAction[JobId.ACOLYTE] = {
		[WeaponType.NONE]: 0,
		[WeaponType.ROD]: 1,
		[WeaponType.TWOHANDROD]: 1,
		[WeaponType.MACE]: 1,
		[WeaponType.TWOHANDMACE]: 1,
	};

	WeaponAction[JobId.MERCHANT] = {
		[WeaponType.NONE]: 0,
		[WeaponType.MACE]: 1,
		[WeaponType.TWOHANDMACE]: 1,
		[WeaponType.AXE]: 1,
		[WeaponType.TWOHANDAXE]: 1,
		[WeaponType.SWORD]: 1,
		[WeaponType.TWOHANDSWORD]: 1,
		[WeaponType.SHORTSWORD]: 2,
	};

	WeaponAction[JobId.THIEF] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SWORD]: 1,
		[WeaponType.TWOHANDSWORD]: 1,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.BOW]: 2,
	};

	WeaponAction[JobId.KNIGHT] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.SWORD]: 1,
		[WeaponType.TWOHANDSWORD]: 1,
		[WeaponType.TWOHANDMACE]: 1,
		[WeaponType.AXE]: 1,
		[WeaponType.TWOHANDAXE]: 1,
		[WeaponType.SWORD]: 1,
		[WeaponType.MACE]: 1,
		[WeaponType.TWOHANDMACE]: 1,
		[WeaponType.SPEAR]: 2,
		[WeaponType.TWOHANDSPEAR]: 2,
	};

	WeaponAction[JobId.PRIEST] = {
		[WeaponType.NONE]: 0,
		[WeaponType.ROD]: 1,
		[WeaponType.TWOHANDROD]: 1,
		[WeaponType.MACE]: 1,
		[WeaponType.TWOHANDMACE]: 1,
		[WeaponType.BOOK]: 2,
	};

	WeaponAction[JobId.WIZARD] = [{
		// female
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.ROD]: 2,
		[WeaponType.TWOHANDROD]: 2,
	}, {
		// male
		[WeaponType.NONE]: 0,
		[WeaponType.ROD]: 1,
		[WeaponType.TWOHANDROD]: 1,
		[WeaponType.SHORTSWORD]: 2,
	}];

	WeaponAction[JobId.BLACKSMITH] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.SWORD]: 2,
		[WeaponType.TWOHANDSWORD]: 2,
		[WeaponType.AXE]: 2,
		[WeaponType.TWOHANDAXE]: 2,
		[WeaponType.MACE]: 2,
		[WeaponType.TWOHANDMACE]: 2,
	};

	WeaponAction[JobId.HUNTER] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.BOW]: 2,
	};

	WeaponAction[JobId.ASSASSIN] = {
		[WeaponType.NONE]: 0,
		[WeaponType.AXE]: 1,
		[WeaponType.SWORD]: 1,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.SHORTSWORD_SHORTSWORD]: 2,
		[WeaponType.SWORD_SWORD]: 2,
		[WeaponType.AXE_AXE]: 2,
		[WeaponType.SHORTSWORD_SWORD]: 2,
		[WeaponType.SHORTSWORD_AXE]: 2,
		[WeaponType.SWORD_AXE]: 2,
		[WeaponType.KATAR]: 2,
	};

	WeaponAction[JobId.KNIGHT2] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.SWORD]: 1,
		[WeaponType.TWOHANDSWORD]: 1,
		[WeaponType.AXE]: 1,
		[WeaponType.TWOHANDAXE]: 1,
		[WeaponType.MACE]: 1,
		[WeaponType.TWOHANDMACE]: 1,
		[WeaponType.SPEAR]: 2,
		[WeaponType.TWOHANDSPEAR]: 2,
	};

	WeaponAction[JobId.CRUSADER] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.SWORD]: 1,
		[WeaponType.TWOHANDSWORD]: 1,
		[WeaponType.AXE]: 1,
		[WeaponType.TWOHANDAXE]: 1,
		[WeaponType.MACE]: 1,
		[WeaponType.TWOHANDMACE]: 1,
		[WeaponType.SPEAR]: 2,
		[WeaponType.TWOHANDSPEAR]: 2,
	};

	WeaponAction[JobId.MONK] = {
		[WeaponType.NONE]: 0,
		[WeaponType.ROD]: 1,
		[WeaponType.TWOHANDROD]: 1,
		[WeaponType.MACE]: 1,
		[WeaponType.TWOHANDMACE]: 1,
		[WeaponType.KNUKLE]: 2,
	};

	WeaponAction[JobId.SAGE] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.ROD]: 2,
		[WeaponType.TWOHANDROD]: 2,
		[WeaponType.BOOK]: 2,
	};

	WeaponAction[JobId.ROGUE] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SWORD]: 1,
		[WeaponType.TWOHANDSWORD]: 1,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.BOW]: 2,
	};

	WeaponAction[JobId.ALCHEMIST] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.TWOHANDSWORD]: 2,
		[WeaponType.SWORD]: 2,
		[WeaponType.AXE]: 2,
		[WeaponType.TWOHANDAXE]: 2,
		[WeaponType.MACE]: 2,
		[WeaponType.TWOHANDMACE]: 2,
	};

	WeaponAction[JobId.BARD] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.INSTRUMENT]: 1,
		[WeaponType.BOW]: 2,
	};

	WeaponAction[JobId.DANCER] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 0,
		[WeaponType.WHIP]: 1,
		[WeaponType.BOW]: 2,
	};

	WeaponAction[JobId.CRUSADER2] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.SWORD]: 1,
		[WeaponType.TWOHANDSWORD]: 1,
		[WeaponType.AXE]: 1,
		[WeaponType.TWOHANDAXE]: 1,
		[WeaponType.MACE]: 1,
		[WeaponType.SPEAR]: 2,
		[WeaponType.TWOHANDSPEAR]: 2,
	};

	WeaponAction[JobId.SUPERNOVICE] = [{
		//female
		[WeaponType.NONE]: 0,
		[WeaponType.ROD]: 1,
		[WeaponType.TWOHANDROD]: 1,
		[WeaponType.AXE]: 1,
		[WeaponType.TWOHANDAXE]: 1,
		[WeaponType.MACE]: 1,
		[WeaponType.TWOHANDMACE]: 1,
		[WeaponType.SWORD]: 1,
		[WeaponType.SHORTSWORD]: 2,
	}, {
		//male
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.ROD]: 2,
		[WeaponType.TWOHANDROD]: 2,
		[WeaponType.AXE]: 2,
		[WeaponType.TWOHANDAXE]: 2,
		[WeaponType.MACE]: 2,
		[WeaponType.TWOHANDMACE]: 2,
		[WeaponType.SWORD]: 2,
	}];

	WeaponAction[JobId.NINJA] = {
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.SYURIKEN]: 2,
	};

	WeaponAction[JobId.GUNSLINGER] = {
		// I don't get when 0 is used ? seems like a grenade launcher.
		[WeaponType.NONE]: 1,
		[WeaponType.GUN_HANDGUN]: 1,
		[WeaponType.GUN_SHOTGUN]: 1,
		[WeaponType.GUN_GATLING]: 2,
		[WeaponType.GUN_RIFLE]: 2,
		[WeaponType.GUN_GRANADE]: 2,
	};

	// I don't get where the weapon sprites are located.
	WeaponAction[JobId.LINKER] = [{
		// female
		[WeaponType.NONE]: 0,
		[WeaponType.SHORTSWORD]: 1,
		[WeaponType.ROD]: 2,
		[WeaponType.TWOHANDROD]: 2,
	}, {
		// male
		[WeaponType.NONE]: 0,
		[WeaponType.ROD]: 1,
		[WeaponType.TWOHANDROD]: 1,
		[WeaponType.SHORTSWORD]: 2,
	}];


	function duplicateEntry(origin) {
		var value = WeaponAction[origin];
		var i, count = arguments.length;

		for (i = 1; i < count; ++i) {
			WeaponAction[arguments[i]] = value;
		}
	}


	// Inherit
	duplicateEntry(JobId.NOVICE, JobId.NOVICE_H, JobId.NOVICE_B);
	duplicateEntry(JobId.SWORDMAN, JobId.SWORDMAN_H, JobId.SWORDMAN_B);
	duplicateEntry(JobId.MAGICIAN, JobId.MAGICIAN_H, JobId.MAGICIAN_B);
	duplicateEntry(JobId.ARCHER, JobId.ARCHER_H, JobId.ARCHER_B);
	duplicateEntry(JobId.ACOLYTE, JobId.ACOLYTE_H, JobId.ACOLYTE_B);
	duplicateEntry(JobId.MERCHANT, JobId.MERCHANT_H, JobId.MERCHANT_B);
	duplicateEntry(JobId.THIEF, JobId.THIEF_H, JobId.THIEF_B);
	duplicateEntry(JobId.KNIGHT, JobId.KNIGHT_B, JobId.KNIGHT_H, JobId.RUNE_KNIGHT, JobId.RUNE_KNIGHT_H, JobId.RUNE_KNIGHT_B, JobId.DRAGON_KNIGHT);
	duplicateEntry(JobId.KNIGHT2, JobId.KNIGHT2_B, JobId.KNIGHT2_H, JobId.RUNE_KNIGHT2, JobId.RUNE_KNIGHT2_H, JobId.RUNE_KNIGHT2_B, JobId.DRAGON_KNIGHT2);
	duplicateEntry(JobId.PRIEST, JobId.PRIEST_B, JobId.PRIEST_H, JobId.ARCHBISHOP, JobId.ARCHBISHOP_H, JobId.ARCHBISHOP_B, JobId.CARDINAL);
	duplicateEntry(JobId.WIZARD, JobId.WIZARD_B, JobId.WIZARD_H, JobId.WARLOCK, JobId.WARLOCK_H, JobId.WARLOCK_B, JobId.ARCH_MAGE);
	duplicateEntry(JobId.BLACKSMITH, JobId.BLACKSMITH_B, JobId.BLACKSMITH_H, JobId.MECHANIC, JobId.MECHANIC_H, JobId.MECHANIC_B, JobId.MEISTER, JobId.MEISTER2);
	duplicateEntry(JobId.HUNTER, JobId.HUNTER_B, JobId.HUNTER_H, JobId.RANGER, JobId.RANGER_H, JobId.RANGER_B, JobId.WINDHAWK, JobId.WINDHAWK2);
	duplicateEntry(JobId.ASSASSIN, JobId.ASSASSIN_B, JobId.ASSASSIN_H, JobId.GUILLOTINE_CROSS, JobId.GUILLOTINE_CROSS_H, JobId.GUILLOTINE_CROSS_B, JobId.SHADOW_CROSS);
	duplicateEntry(JobId.CRUSADER, JobId.CRUSADER_B, JobId.CRUSADER_H, JobId.ROYAL_GUARD, JobId.ROYAL_GUARD_H, JobId.ROYAL_GUARD_B, JobId.IMPERIAL_GUARD);
	duplicateEntry(JobId.CRUSADER2, JobId.CRUSADER2_B, JobId.CRUSADER2_H, JobId.ROYAL_GUARD2, JobId.ROYAL_GUARD2_H, JobId.ROYAL_GUARD2_B, JobId.IMPERIAL_GUARD2);
	duplicateEntry(JobId.MONK, JobId.MONK_B, JobId.MONK_H, JobId.SURA, JobId.SURA_H, JobId.SURA_B, JobId.INQUISITOR);
	duplicateEntry(JobId.SAGE, JobId.SAGE_B, JobId.SAGE_H, JobId.SORCERER, JobId.SORCERER_H, JobId.SORCERER_B, JobId.ELEMENTAL_MASTER);
	duplicateEntry(JobId.ROGUE, JobId.ROGUE_B, JobId.ROGUE_H, JobId.SHADOW_CHASER, JobId.SHADOW_CHASER_H, JobId.SHADOW_CHASER_B, JobId.ABYSS_CHASER);
	duplicateEntry(JobId.ALCHEMIST, JobId.ALCHEMIST_B, JobId.ALCHEMIST_H, JobId.GENETIC, JobId.GENETIC_H, JobId.GENETIC_B, JobId.BIOLO);
	duplicateEntry(JobId.BARD, JobId.BARD_B, JobId.BARD_H, JobId.MINSTREL, JobId.MINSTREL_H, JobId.MINSTREL_B, JobId.TROUBADOUR);
	duplicateEntry(JobId.DANCER, JobId.DANCER_B, JobId.DANCER_H, JobId.WANDERER, JobId.WANDERER_H, JobId.WANDERER_B, JobId.TROUVERE);
	duplicateEntry(JobId.SUPERNOVICE, JobId.SUPERNOVICE_B, JobId.SUPERNOVICE2, JobId.SUPERNOVICE2_B, JobId.HYPER_NOVICE);
	duplicateEntry(JobId.NINJA, JobId.NINJA_B, JobId.KAGEROU, JobId.KAGEROU_B, JobId.OBORO, JobId.OBORO_B, JobId.SHINKIRO, JobId.SHIRANUI);
	duplicateEntry(JobId.GUNSLINGER, JobId.GUNSLINGER_B, JobId.REBELLION, JobId.REBELLION_B, JobId.NIGHT_WATCH);
	duplicateEntry(JobId.LINKER, JobId.LINKER_B, JobId.REAPER, JobId.REAPER_B, JobId.SOUL_ASCETIC);

	// missing star/evolutions?

	/**
	 * Exports
	 */
	return WeaponAction;
});
