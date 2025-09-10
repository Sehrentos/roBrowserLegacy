/**
 * DB/Map/MapTable.js
 *
 * Look up table mapname
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 *
 */
define([], function () {
	"use strict";

	/** @type {DB.Map.MapInfo} */
	var MapInfo = {
		"1@gol1.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Biological Experiment Center",
				subTitle: "Expedition"
			},
			subTitle: true,
			displayName: "Biological Experiment Center"
		},
		"1@tnm1.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Demon's Tower - Upper floor"
			},
			subTitle: true,
			displayName: "Demon's Tower - Upper floor"
		},
		"gld_dun01_2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Guild Dungeon Underground F2",
				subTitle: "Greenwood Lake"
			},
			subTitle: true,
			displayName: "Greenwood Lake Dungeon 2F"
		},
		"ra_temin.rsw": {
			displayName: "Inside Rachel Sanctuary"
		},
		"1@lhz.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Wolfchev's Lab"
			},
			subTitle: true,
			displayName: "Wolfchev's Lab"
		},
		"pvp_n_4-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Copass"
			},
			subTitle: true,
			displayName: "PvP : Room Copass"
		},
		"verus01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Laboratory-OPTATIO",
				subTitle: "Verus City"
			},
			subTitle: true,
			displayName: "Laboratory-OPTATIO"
		},
		"payon_in03.rsw": {
			displayName: "Inside Payon"
		},
		"job3_rune02.rsw": {
			displayName: "Test room for Rune Knight Job Change"
		},
		"hero_lb.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Garden of Beginnings",
				subTitle: "Herosria"
			},
			subTitle: true,
			displayName: "Herosria Garden of Beginnings"
		},
		"rag_fes_a.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "RAG-FES Exhibition Hall",
				subTitle: "Ragnarok Festival"
			},
			subTitle: true,
			displayName: "RAG-FES Exhibition Hall"
		},
		"1@gl_he2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Incomplete Dimensions",
				subTitle: "Event Mode"
			},
			subTitle: true,
			displayName: "Event Mode Incomplete Dimensions"
		},
		"lhz_fild02.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Grim Reaper's Valley",
				subTitle: "Lighthalzen Field"
			},
			subTitle: true,
			displayName: "Lighthalzen Field(Grim Reaper's Valley)"
		},
		"ve_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Veins Field"
			},
			subTitle: true,
			displayName: "Veins Field"
		},
		"ra_san02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Sanctuary West Area 1F",
				subTitle: "Rachel Temple"
			},
			subTitle: true,
			displayName: "Rachel Temple Sanctuary West Area 1F"
		},
		"hero_tra.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Training Grounds",
				subTitle: "Sanctuary Herosria"
			},
			subTitle: true,
			displayName: "Sanctuary Herosria Training Grounds"
		},
		"1@xm_d2.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Horror Toy Factory"
			},
			subTitle: true,
			displayName: "Horror Toy Factory"
		},
		"te_prtcas03.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Wigner Castle",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Wigner Castle"
		},
		"lou_dun03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Suei Long Gon"
			},
			subTitle: true,
			displayName: "Suei Long Gon"
		},
		"pvp_n_2-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Copass"
			},
			subTitle: true,
			displayName: "PvP : Room Copass"
		},
		"dew_in01.rsw": {
			displayName: "Inside Dewata"
		},
		"ayo_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Inside Ancient Shrine"
			},
			subTitle: true,
			displayName: "Inside Ancient Shrine"
		},
		"star_frst.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Yu Seong Lim"
			},
			subTitle: true,
			displayName: "Yu Seong Lim"
		},
		"1@bamq.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Unfair Dock"
			},
			subTitle: true,
			displayName: "Unfair Dock"
		},
		"1@def03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Lava",
				subTitle: "Wave Dungeon"
			},
			subTitle: true,
			displayName: "Wave Dungeon - Lava"
		},
		"wolfvill.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Gray Wolf Village",
				subTitle: "Native Hidout"
			},
			subTitle: true,
			displayName: "Gray Wolf Village"
		},
		"tur_d03_i.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Desolate Village",
				subTitle: "Illusion"
			},
			subTitle: true,
			displayName: "Desolate Village"
		},
		"mosk_ship.rsw": {
			displayName: "Charabel"
		},
		"1@vrev.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Amykitia's Secret Lab",
				subTitle: "Fantasy Series-003"
			},
			subTitle: true,
			displayName: "Fantasy Series-Amykitia's Secret Lab"
		},
		"te_prtcas05.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Nerius Castle",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Nerius Castle"
		},
		"mjolnir_04.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Mt.Mjolnir North Area"
			},
			subTitle: true,
			displayName: "Mt.Mjolnir North Area"
		},
		"gon_test.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Kunlun Fighting Ground"
			},
			subTitle: true,
			displayName: "Kunlun Fighting Ground"
		},
		"bra_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Beyond the Waterfall",
				subTitle: "Brasilis"
			},
			subTitle: true,
			displayName: "Beyond the Waterfall"
		},
		"xmas.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Lutie",
				subTitle: "Snow Village"
			},
			subTitle: true,
			displayName: "Lutie, the Snow Village"
		},
		"iz_ac02_a.rsw": {
			backgroundBmp: "noname_s1",
			signName: {
				subTitle: "Criatura Academy F2"
			},
			subTitle: true,
			displayName: "Criatura Academy F2"
		},
		"jor_back4.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Frozen Scale Beach"
			},
			subTitle: true,
			displayName: "Frozen Scale Beach"
		},
		"vis_h02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Investigation Corridor F2"
			},
			subTitle: true,
			displayName: "Investigation Corridor F2"
		},
		"ma_zif09.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Jeepney"
			},
			subTitle: true,
			displayName: "Inside of Jeepney"
		},
		"rockmi1.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Rockridge Mine F1"
			},
			subTitle: true,
			displayName: "Rockridge Mine"
		},
		"jor_back6.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Ancient Ice Canyon West"
			},
			subTitle: true,
			displayName: "Ancient Ice Canyon West"
		},
		"aru_gld.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Valfreyja",
				subTitle: "Rachel"
			},
			subTitle: true,
			displayName: "Valfreyja"
		},
		"ordeal_2-2.rsw": {
			displayName: "Battle Ordeal Mode"
		},
		"arug_cas01.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Mardol Castle",
				subTitle: "Valfreyja"
			},
			subTitle: true,
			displayName: "Mardol Castle"
		},
		"tha_t11.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Room of Despair",
				subTitle: "Thanatos Tower Upper Level"
			},
			subTitle: true,
			displayName: "Thanatos Tower Upper Level - Room of Despair"
		},
		"1@4sac.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Shadow Mension"
			},
			subTitle: true,
			displayName: "Shadow Mension"
		},
		"lou_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Inside the Royal Tomb"
			},
			subTitle: true,
			displayName: "Inside the Royal Tomb"
		},
		"priest_1-1.rsw": {
			displayName: "The Sanctum"
		},
		"1@md_pay.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Weekend Memorial"
			},
			subTitle: true,
			displayName: "Weekend Memorial"
		},
		"ra_fild07.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Od Canyon"
			},
			subTitle: true,
			displayName: "Od Canyon"
		},
		"iz_d05_i.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Deep Sea Cave"
			},
			subTitle: true,
			displayName: "Deep Sea Cave"
		},
		"1@4inq.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Monastery Basement"
			},
			subTitle: true,
			displayName: "Monastery Basement"
		},
		"pvp_y_4-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Izlude"
			},
			subTitle: true,
			displayName: "PvP : Room Izlude"
		},
		"1@vrhha.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Heart Hunter Training Center",
				subTitle: "Fantasy Series-008"
			},
			subTitle: true,
			displayName: "Fantasy Series - Heart Hunter Training Center"
		},
		"1@tnm3.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Morocc Castle - Basement"
			},
			subTitle: true,
			displayName: "Morocc Castle - Basement"
		},
		"aldebaran.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Aldebaran",
				subTitle: "Border City in the Rune-Midgarts Kingdom"
			},
			subTitle: true,
			displayName: "Border City Aldebaran"
		},
		"3@ch_t.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Constellation Tower"
			},
			subTitle: true,
			displayName: "Constellation Tower"
		},
		"2@ch_t.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Constellation Tower"
			},
			subTitle: true,
			displayName: "Constellation Tower"
		},
		"1@ch_t.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Constellation Tower"
			},
			subTitle: true,
			displayName: "Constellation Tower"
		},
		"pvp_y_2-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Payon"
			},
			subTitle: true,
			displayName: "PvP : Room Payon"
		},
		"yuno_in05.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Power Plant of Ymir's Heart"
			},
			subTitle: true,
			displayName: "Power Plant of Ymir's Heart"
		},
		"1@bamn.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Twilight Garden"
			},
			subTitle: true,
			displayName: "Twilight Garden"
		},
		"pvp_n_8-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Copass"
			},
			subTitle: true,
			displayName: "PvP : Room Copass"
		},
		"pvp_n_1-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Rock On"
			},
			subTitle: true,
			displayName: "PvP : Room Rock On"
		},
		"jor_root3.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Deep Root Cave"
			},
			subTitle: true,
			displayName: "Deep Root Cave"
		},
		"mag_dun03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Nogg Road F3"
			},
			subTitle: true,
			displayName: "Nogg Road F3"
		},
		"ayo_in02.rsw": {
			displayName: "Inside Ayothaya"
		},
		"pvp_n_6-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Sandwich"
			},
			subTitle: true,
			displayName: "PvP : Room Sandwich"
		},
		"yuno_fild09.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Schwartzwald Guards Camp"
			},
			subTitle: true,
			displayName: "Schwartzwald Guards Camp"
		},
		"prt_fild08a.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "South Field of Prontera"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"bat_room.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Battlegrounds Waiting Room"
			},
			subTitle: true,
			displayName: "Battlegrounds Waiting Room"
		},
		"jor_twig.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Twig's Nest",
				subTitle: "Isgard Sanctuary"
			},
			subTitle: true,
			displayName: "Isgard Sanctuary Twig's Nest"
		},
		"job_soul.rsw": {
			displayName: "Your Heart"
		},
		"pvp_y_6-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Izlude"
			},
			subTitle: true,
			displayName: "PvP : Room Izlude"
		},
		"1@swat.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Heart Hunter Military Base"
			},
			subTitle: true,
			displayName: "Heart Hunter Military Base"
		},
		"lasa_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Dragon Nest F1"
			},
			subTitle: true,
			displayName: "Dragon Nest"
		},
		"dic_dun03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Scaraba Hole",
				subTitle: "Kamidal Tunnel"
			},
			subTitle: true,
			displayName: "Scaraba Hole - Nightmare Mode"
		},
		"pvp_y_5-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Izlude"
			},
			subTitle: true,
			displayName: "PvP : Room Izlude"
		},
		"pvp_c_room.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Waiting Room"
			},
			subTitle: true,
			displayName: "PvP : Waiting Room"
		},
		"hero_in3.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Fall Garden",
				subTitle: "Herosria"
			},
			subTitle: true,
			displayName: "Herosria Fall Garden"
		},
		"1@def01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Forest",
				subTitle: "Wave Dungeon"
			},
			subTitle: true,
			displayName: "Wave Dungeon - Forest"
		},
		"1@mjo1.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Airplane Crash Site",
				subTitle: "Mjolnir Mountains"
			},
			subTitle: true,
			displayName: "Mjolnir Mountains - Airplane Crash Site"
		},
		"1@cata.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Catacombs"
			},
			subTitle: true,
			displayName: "Catacombs"
		},
		"2@cata.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Sealed Shrine"
			},
			subTitle: true,
			displayName: "Sealed Shrine"
		},
		"ba_2whs02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Lower Floor of Tartaros Storage"
			},
			subTitle: true,
			displayName: "Lower Floor of Tartaros Storage"
		},
		"pvp_n_6-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Rock On"
			},
			subTitle: true,
			displayName: "PvP : Room Rock On"
		},
		"bra_in01.rsw": {
			displayName: "Inside Brasilis"
		},
		"gef_fild00.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Geffen Field"
		},
		"prtg_cas04.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Skoegul Castle",
				subTitle: "Valkyrie Realm"
			},
			subTitle: true,
			displayName: "Skoegul Castle"
		},
		"1@ghg.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Orthos Aqua",
				subTitle: "Floating Garden"
			},
			subTitle: true,
			displayName: "Orthos Aqua"
		},
		"gld_dun04_2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Guild Dungeon Underground F2",
				subTitle: "Brittoria"
			},
			subTitle: true,
			displayName: "Brittoria Dungeon 2F"
		},
		"payg_cas01.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Bright Arbor Castle",
				subTitle: "Greenwood Lake"
			},
			subTitle: true,
			displayName: "Bright Arbor Castle"
		},
		"prtg_cas05.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Gondul Castle",
				subTitle: "Valkyrie Realm"
			},
			subTitle: true,
			displayName: "Gondul Castle"
		},
		"sec_in01.rsw": {
			displayName: "Inside Valhalla"
		},
		"mosk_in.rsw": {
			displayName: "Inside Moscovia"
		},
		"bl_venom.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Specimen Environment - Venom",
				subTitle: "Varmundt's Biosphere"
			},
			subTitle: true,
			displayName: "Biosphere Specimen Environment - Venom"
		},
		"cmd_fild02.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Kokomo Beach",
				subTitle: "Comodo"
			},
			subTitle: true,
			displayName: "Kokomo Beach"
		},
		"1@cor.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Cor"
			},
			subTitle: true,
			displayName: "Cor Memorial"
		},
		"pay_fild04.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert"
		},
		"1@exnw.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Clana Nemieri"
			},
			subTitle: true,
			displayName: "Clana Nemieri"
		},
		"moc_fild18.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert"
		},
		"job_sage.rsw": {
			displayName: "Sage Realm"
		},
		"job_gun.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Shelter of Rebellion"
			},
			subTitle: true,
			displayName: "Shelter of Rebellion"
		},
		"1@ffp.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Remnant Hideout"
			},
			subTitle: true,
			displayName: "Remnant Hideout"
		},
		"te_prtcas02.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Richard Castle",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Richard Castle"
		},
		"gef_d01_i.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "250 Pages",
				subTitle: "Illusion"
			},
			subTitle: true,
			displayName: "250 Pages"
		},
		"ve_fild07.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Veins Field"
			},
			subTitle: true,
			displayName: "Veins Field"
		},
		"c_tower4.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Clock Tower F4",
				subTitle: "Aldebaran"
			},
			subTitle: true,
			displayName: "Clock Tower F4"
		},
		"ra_fild05.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Audumla Grassland"
			},
			subTitle: true,
			displayName: "Audumla Grassland"
		},
		"ra_san05.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Sanctuary Central Area 2F",
				subTitle: "Rachel Temple"
			},
			subTitle: true,
			displayName: "Rachel Temple Sanctuary Central Area 2F"
		},
		"hero_ent3.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "3rd Hero's Gateway",
				subTitle: "Herosria"
			},
			subTitle: true,
			displayName: "Herosria 3rd Hero's Gateway"
		},
		"harboro2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Underground Waterway",
				subTitle: "Rockridge"
			},
			subTitle: true,
			displayName: "Underground Waterway"
		},
		"prt_elib.rsw": {
			backgroundBmp: "village_s1",
			signName: {
				subTitle: "Prontera East Library"
			},
			subTitle: true,
			displayName: "Prontera East Library"
		},
		"iz_ac01.rsw": {
			backgroundBmp: "noname_s1",
			signName: {
				subTitle: "Criatura Academy F1"
			},
			subTitle: true,
			displayName: "Criatura Academy F1"
		},
		"gef_fild09.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Geffen Field"
		},
		"1@eom.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Shrine of Demon God"
			},
			subTitle: true,
			displayName: "Shrine of Demon God"
		},
		"1@exsh.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Deep Forest"
			},
			subTitle: true,
			displayName: "Deep Forest"
		},
		"z_agit.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Z Gang's Hideout"
			},
			subTitle: true,
			displayName: "Z Gang's Hideout"
		},
		"kh_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Robot Factory F2"
			},
			subTitle: true,
			displayName: "Robot Factory F2"
		},
		"ma_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bangungot Hospital F1"
			},
			subTitle: true,
			displayName: "Bangungot Hospital F1"
		},
		"thor_camp.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Thor Volcano Camp"
			},
			subTitle: true,
			displayName: "Thor Volcano Camp"
		},
		"1@exds.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Foot of Mt. Mumyeong"
			},
			subTitle: true,
			displayName: "Foot of Mt. Mumyeong"
		},
		"2@exds.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Foot of Mt. Mumyeong"
			},
			subTitle: true,
			displayName: "Foot of Mt. Mumyeong"
		},
		"lhz_in03.rsw": {
			displayName: "Inside Lighthalzen"
		},
		"turbo_e_16.rsw": {
			displayName: "Turbo Track Stadium"
		},
		"job3_arch01.rsw": {
			displayName: "Waiting room for Archbishop Job Change"
		},
		"prt_monk.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "St. Capitolina Abbey"
			},
			subTitle: true,
			displayName: "St. Capitolina Abbey"
		},
		"odin_tem02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Odin's Temple South Area"
			},
			subTitle: true,
			displayName: "Odin's Temple South Area"
		},
		"new_1-1.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"mjolnir_06.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Mt.Mjolnir South Area"
			},
			subTitle: true,
			displayName: "Mt.Mjolnir South Area"
		},
		"schg_cas04.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Hljod Castle",
				subTitle: "Nidhoggur"
			},
			subTitle: true,
			displayName: "Hljod Castle"
		},
		"prt_sewb4.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Culvert F4",
				subTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Culvert F4"
		},
		"jor_back5.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Ancient Ice Canyon East"
			},
			subTitle: true,
			displayName: "Ancient Ice Canyon East"
		},
		"ra_fild12.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Ida Plains"
			},
			subTitle: true,
			displayName: "Ida Plains"
		},
		"tha_t08.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Room of Angel",
				subTitle: "Thanatos Tower Upper Level"
			},
			subTitle: true,
			displayName: "Thanatos Tower Upper Level - Room of Angel"
		},
		"gefg_cas04.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Bergel Castle",
				subTitle: "Britoniah"
			},
			subTitle: true,
			displayName: "Bergel Castle"
		},
		"ra_fild10.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Od Canyon"
			},
			subTitle: true,
			displayName: "Od Canyon"
		},
		"que_temsky.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Sky Garden",
				subTitle: "Pope's Room"
			},
			subTitle: true,
			displayName: "Pope's Room (Sky Garden"
		},
		"pvp_y_2-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Alberta"
			},
			subTitle: true,
			displayName: "PvP : Room Alberta"
		},
		"1@dth1.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Bios Island"
			},
			subTitle: true,
			displayName: "Bios Island"
		},
		"gefg_cas01.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Repherion Castle",
				subTitle: "Britoniah"
			},
			subTitle: true,
			displayName: "Repherion Castle"
		},
		"1@halo.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Halloween Festival"
			},
			subTitle: true,
			displayName: "Halloween Festival"
		},
		"com_d02_i.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Luanda, the North Cave",
				subTitle: "Illusion"
			},
			subTitle: true,
			displayName: "Luanda, the North Cave"
		},
		"job_monk.rsw": {
			displayName: "Saint Capitolina Abbey"
		},
		"lasagna.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Lasagna",
				subTitle: "Far-Star Continental Port Town"
			},
			subTitle: true,
			displayName: "Port Town Lasagna"
		},
		"iz_dun04.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Undersea Tunnel B5",
				subTitle: "Baylan Island"
			},
			subTitle: true,
			displayName: "Undersea Tunnel B5"
		},
		"2@gl_k2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Chivalry F1",
				subTitle: "Old Glastheim"
			},
			subTitle: true,
			displayName: "Old Glastheim Chivalry F1"
		},
		"prtg_cas02.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Swanhild Castle",
				subTitle: "Valkyrie Realm"
			},
			subTitle: true,
			displayName: "Swanhild Castle"
		},
		"1@soul.rsw": {
			displayName: "Soul Passage"
		},
		"1@sthd.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Air Fortress - Top Floor"
			},
			subTitle: true,
			displayName: "Air Fortress - Top Floor"
		},
		"pvp_n_5-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Rock On"
			},
			subTitle: true,
			displayName: "PvP : Room Rock On"
		},
		"bl_death.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Specimen Environment - Death",
				subTitle: "Varmundt's Biosphere"
			},
			subTitle: true,
			displayName: "Biosphere Specimen Environment - Death"
		},
		"nameless_i.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Nameless Island Entrance"
			},
			subTitle: true,
			displayName: "Nameless Island Entrance"
		},
		"pay_gld.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Greenwood Lake",
				subTitle: "Payon"
			},
			subTitle: true,
			displayName: "Greenwood Lake"
		},
		"kh_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Robot Factory F1"
			},
			subTitle: true,
			displayName: "Robot Factory F1"
		},
		"xmas_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Toy Factory Warehouse",
				subTitle: "Lutie"
			},
			subTitle: true,
			displayName: "Toy Factory Warehouse"
		},
		"alberta_in.rsw": {
			displayName: "Inside Alberta"
		},
		"prt_fild03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"pvp_n_1-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Undercross"
			},
			subTitle: true,
			displayName: "PvP : Room Undercross"
		},
		"dic_fild01.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Bottom of Kamidal Mountain",
				subTitle: "Jotunheim"
			},
			subTitle: true,
			displayName: "Bottom of Kamidal Mountain"
		},
		"ra_fild11.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Ida Plains"
			},
			subTitle: true,
			displayName: "Ida Plains"
		},
		"1@mist.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "The Hazy Maze Forest"
			},
			subTitle: true,
			displayName: "The Hazy Maze Forest"
		},
		"moc_pryd04.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Inside Pyramid F4",
				subTitle: "Morroc"
			},
			subTitle: true,
			displayName: "Inside Pyramid F4"
		},
		"gld_dun04.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Guild Dungeon",
				subTitle: "Britoniah"
			},
			subTitle: true,
			displayName: "Britoniah Guild Dungeon"
		},
		"verus03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Central Plaza",
				subTitle: "Verus City"
			},
			subTitle: true,
			displayName: "Verus - Central Plaza"
		},
		"niflheim.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Niflheim",
				subTitle: "Realm of the Dead"
			},
			subTitle: true,
			displayName: "Niflheim, Realm of the Dead"
		},
		"guild_vs3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Guild Arena"
			},
			subTitle: true,
			displayName: "Guild Arena"
		},
		"pvp_y_8-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Alberta"
			},
			subTitle: true,
			displayName: "PvP : Room Alberta"
		},
		"6@thts.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Memory of Despair",
				subTitle: "Thanatos Memory"
			},
			subTitle: true,
			displayName: "Memory of Despair"
		},
		"5@thts.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Memory of Sadness",
				subTitle: "Thanatos Memory"
			},
			subTitle: true,
			displayName: "Memory of Sadness"
		},
		"8@thts.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Magician Thanatos' Memory",
				subTitle: "Thanatos Memory"
			},
			subTitle: true,
			displayName: "Thanatos Tower"
		},
		"7@thts.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Memories of Anger",
				subTitle: "Thanatos Memory"
			},
			subTitle: true,
			displayName: "Memories of Anger"
		},
		"2@thts.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Angel's Warning",
				subTitle: "Thanatos Memory"
			},
			subTitle: true,
			displayName: "Angel's Warning"
		},
		"1@thts.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Thanatos Tower",
				subTitle: "Thanatos Memory"
			},
			subTitle: true,
			displayName: "Thanatos Tower"
		},
		"4@thts.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Memory of Agony",
				subTitle: "Thanatos Memory"
			},
			subTitle: true,
			displayName: "Memory of Agony"
		},
		"3@thts.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Hateful Memories",
				subTitle: "Thanatos Memory"
			},
			subTitle: true,
			displayName: "Hateful Memories"
		},
		"jor_maze.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Snake Labyrinth"
			},
			subTitle: true,
			displayName: "Snake Labyrinth"
		},
		"schg_que01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Morestone Prairie"
			},
			subTitle: true,
			displayName: "Morestone Prairie"
		},
		"job_thief1.rsw": {
			displayName: "Mushroom Farm"
		},
		"rockrdg1.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Kiwawa Desert",
				subTitle: "Rockridge"
			},
			subTitle: true,
			displayName: "Kiwawa Desert"
		},
		"gl_cas01_.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Castle F1",
				subTitle: "Abyss Glastheim"
			},
			subTitle: true,
			displayName: "Abyss Glastheim Castle F1"
		},
		"moc_fild19.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert"
		},
		"lasa_fild01.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Ravioli Plain, Border Post",
				subTitle: "Lasagna"
			},
			subTitle: true,
			displayName: "Ravioli Plain, Border Post"
		},
		"air_if.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Inside the Aircraft Ifho"
			},
			subTitle: true,
			displayName: "Inside the Aircraft Ifho"
		},
		"1@tre.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Suspicious Shipwreck"
			},
			subTitle: true,
			displayName: "Suspicious Shipwreck"
		},
		"abyss_02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Underground Cave 2F",
				subTitle: "Abyss Lake"
			},
			subTitle: true,
			displayName: "Abyss Lake Underground Cave 2F"
		},
		"ma_zif02.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Jeepney"
			},
			subTitle: true,
			displayName: "Inside of Jeepney"
		},
		"jor_twice.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Drift Ice Zone"
			},
			subTitle: true,
			displayName: "Drift Ice Zone"
		},
		"1@vrcas.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Lilium Palace",
				subTitle: "Fantasy Series-001"
			},
			subTitle: true,
			displayName: "Fantasy Series-Lilium Palace"
		},
		"auction_02.rsw": {
			displayName: "Auction Hall"
		},
		"hero_in2.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Summer Garden",
				subTitle: "Herosria"
			},
			subTitle: true,
			displayName: "Herosria Summer Garden"
		},
		"pvp_n_3-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Sandwich"
			},
			subTitle: true,
			displayName: "PvP : Room Sandwich"
		},
		"1@lvcb.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Damp Sewer",
				subTitle: "Fantasy Series-xxx"
			},
			subTitle: true,
			displayName: "Damp Sewer"
		},
		"ordeal_1-2.rsw": {
			displayName: "Battle Ordeal Mode"
		},
		"poring_w02.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Poring War Market"
			},
			subTitle: true,
			displayName: "Poring War Market"
		},
		"ma_zif06.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Jeepney"
			},
			subTitle: true,
			displayName: "Inside of Jeepney"
		},
		"ein_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Einbroch Mine F2"
			},
			subTitle: true,
			displayName: "Einbroch Mine F2"
		},
		"ama_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Battle Field in the Underground Forest"
			},
			subTitle: true,
			displayName: "Battle Field in the Underground Forest"
		},
		"job_knt.rsw": {
			displayName: "Knight Realm"
		},
		"pvp_n_4-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Four Room"
			},
			subTitle: true,
			displayName: "PvP : Four Room"
		},
		"mjolnir_01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Mt.Mjolnir North Area"
			},
			subTitle: true,
			displayName: "Mt.Mjolnir North Area"
		},
		"gonryun.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Gonryun(Kunlun)",
				subTitle: "Hermit Land"
			},
			subTitle: true,
			displayName: "Gonryun, the Hermit Land (Kunlun)"
		},
		"bat_c02.rsw": {
			subTitle: true,
			displayName: "Krieger von Midgard"
		},
		"1@twsd.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Drift Ice Zone"
			},
			subTitle: true,
			displayName: "Drift Ice Zone"
		},
		"icas_in2.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Inside the Ice Castle"
			},
			subTitle: true,
			displayName: "Inside the Ice Castle"
		},
		"dic_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Scaraba Hall",
				subTitle: "Kamidal Tunnel"
			},
			subTitle: true,
			displayName: "Scaraba Hall"
		},
		"pay_fild08.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Payon Forest"
			},
			subTitle: true,
			displayName: "Payon Forest"
		},
		"cmd_fild03.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Zenhai Marsh",
				subTitle: "Comodo"
			},
			subTitle: true,
			displayName: "Zenhai Marsh"
		},
		"mjolnir_10.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Mt.Mjolnir South Area"
			},
			subTitle: true,
			displayName: "Mt.Mjolnir South Area"
		},
		"job4_mag.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Magic Fountain"
			},
			subTitle: true,
			displayName: "Magic Fountain"
		},
		"moc_fild20.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Dimensional Rift",
				subTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert - Dimensional Rift"
		},
		"teg_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Guild Underground Dungeon",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Guild Underground Dungeon"
		},
		"dali02.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Dimensional Rift"
			},
			subTitle: true,
			displayName: "Dimensional Rift"
		},
		"hu_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Hugel Field"
			},
			subTitle: true,
			displayName: "Hugel Field"
		},
		"ma_in01.rsw": {
			displayName: "Inside of Malaya"
		},
		"gef_fild10.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Orc Village",
				subTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Orc Village"
		},
		"prt_maze03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Labyrinth Forest F3",
				subTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Labyrinth Forest F3"
		},
		"dew_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Istana Cave",
				subTitle: "Dewata"
			},
			subTitle: true,
			displayName: "Istana Cave"
		},
		"ba_in01.rsw": {
			displayName: "Inside the Varmundt's Mansion"
		},
		"pvp_y_2-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Izlude"
			},
			subTitle: true,
			displayName: "PvP : Room Izlude"
		},
		"wizard_2-1.rsw": {
			displayName: "Wizard Academy"
		},
		"amicitia2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "2nd Floor - Intensive Culture Room",
				subTitle: "Abandoned Lab Amicitia"
			},
			subTitle: true,
			displayName: "Abandoned Lab Amicitia"
		},
		"1@vrgen.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Genetic Labs",
				subTitle: "Fantasy Series-004"
			},
			subTitle: true,
			displayName: "Fantasy Series-Genetic Labs"
		},
		"guild_room.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Guild Arena Waiting Room"
			},
			subTitle: true,
			displayName: "Guild Arena Waiting Room"
		},
		"bl_lava.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Specimen Environment - Flame",
				subTitle: "Varmundt's Biosphere"
			},
			subTitle: true,
			displayName: "Biosphere Specimen Environment - Flame"
		},
		"kh_school.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Kiel Hyre's Academy"
			},
			subTitle: true,
			displayName: "Kiel Hyre's Academy"
		},
		"malaya.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Port Malaya"
			},
			subTitle: true,
			displayName: "Port Malaya"
		},
		"alberta.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Alberta",
				subTitle: "Port City of Rune-Midgarts Kingdom"
			},
			subTitle: true,
			displayName: "Port City Alberta"
		},
		"ra_fild06.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Portus Luna"
			},
			subTitle: true,
			displayName: "Portus Luna"
		},
		"tur_dun04.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Turtle Palace"
			},
			subTitle: true,
			displayName: "Turtle Palace"
		},
		"jupe_gate.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Juperos, Restricted Zone"
			},
			subTitle: true,
			displayName: "Juperos, Restricted Zone"
		},
		"mal_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Starry Coral Area"
			},
			subTitle: true,
			displayName: "Starry Coral Area"
		},
		"pvp_y_7-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Alberta"
			},
			subTitle: true,
			displayName: "PvP : Room Alberta"
		},
		"gl_knt01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Inside Chivalry F1",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Inside Glastheim Chivalry F1"
		},
		"gl_sew02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Underground Waterway B2",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Glastheim Underground Waterway B2"
		},
		"prt_maze02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Labyrinth Forest F2",
				subTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Labyrinth Forest F2"
		},
		"moc_fild13.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert"
		},
		"thana_boss.rsw": {
			displayName: "Thanatos Tower - Unknown Place"
		},
		"ra_temsky.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Sky Garden",
				subTitle: "Pope's Room"
			},
			subTitle: true,
			displayName: "Pope's Room (Sky Garden)"
		},
		"knight_3-1.rsw": {
			displayName: "The Chivalry"
		},
		"job_cru.rsw": {
			displayName: "Crusader Realm"
		},
		"gw_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Gray Wolf Forest"
			},
			subTitle: true,
			displayName: "Gray Wolf Forest"
		},
		"eclage.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Eclage",
				subTitle: "Alfheim - Lapine Capital"
			},
			subTitle: true,
			displayName: "Eclage, the capital of Lapine"
		},
		"einbech.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Einbech",
				subTitle: "Mining Village in the Schwartzwald Republic"
			},
			subTitle: true,
			displayName: "Einbech, the Mining Village"
		},
		"verus02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Research Building-WISH",
				subTitle: "Verus City"
			},
			subTitle: true,
			displayName: "Research Building-WISH"
		},
		"tur_dun05.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Underground Swamp Zone"
			},
			subTitle: true,
			displayName: "Underground Swamp Zone"
		},
		"1@ma_b.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bakonawa Hideout"
			},
			subTitle: true,
			displayName: "Bakonawa Hideout"
		},
		"c_tower3_.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Clock Tower F3",
				subTitle: "The Twisted Time"
			},
			subTitle: true,
			displayName: "Twisted Clock Tower F3"
		},
		"1@infi.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Infinite Space"
			},
			subTitle: true,
			displayName: "Infinite Space"
		},
		"1@dime.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Beyond the Dimension Wall"
			},
			subTitle: true,
			displayName: "Beyond the Dimension Wall"
		},
		"tha_t09.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Room of Agony",
				subTitle: "Thanatos Tower Upper Level"
			},
			subTitle: true,
			displayName: "Thanatos Tower Upper Level - Room of Agony"
		},
		"1@exhn.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Novice's Memory"
			},
			subTitle: true,
			displayName: "Novice's Memory"
		},
		"moc_fild21.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Dimensional Rift",
				subTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert - Dimensional Rift"
		},
		"amicitia1.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "1st Floor - Comprehensive Lab",
				subTitle: "Abandoned Lab Amicitia"
			},
			subTitle: true,
			displayName: "Abandoned Lab Amicitia"
		},
		"man_fild03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Manuk Field"
			},
			subTitle: true,
			displayName: "Manuk Field"
		},
		"clock_01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Unknown Basement",
				subTitle: "Clock Tower"
			},
			subTitle: true,
			displayName: "Clock Tower Unknown Basement"
		},
		"jor_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Snake God's Warmth 1st Floor"
			},
			subTitle: true,
			displayName: "Snake God's Warmth 1st Floor"
		},
		"bossnia_04.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bossnia"
			},
			subTitle: true,
			displayName: "Bossnia"
		},
		"icecastle.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Ice Castle",
				subTitle: "Isgard"
			},
			subTitle: true,
			displayName: "Isgard Ice Castle"
		},
		"1@os_a.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Occupied Battle"
			},
			subTitle: true,
			displayName: "Occupied Battle"
		},
		"guild_vs2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Guild Arena"
			},
			subTitle: true,
			displayName: "Guild Arena"
		},
		"izlude_in.rsw": {
			displayName: "Inside Izlude"
		},
		"new_5-1.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"nif_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Dead Man's Banquet Hall",
				subTitle: "Niflheim Dungeon - 1st Floor"
			},
			subTitle: true,
			displayName: "Niflheim Dungeon - Dead Man's Banquet Hall"
		},
		"moc_pryd03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Inside Pyramid F3",
				subTitle: "Morroc"
			},
			subTitle: true,
			displayName: "Inside Pyramid F3"
		},
		"jor_tail.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Frozen Tail"
			},
			subTitle: true,
			displayName: "Frozen Tail"
		},
		"yuno_in03.rsw": {
			displayName: "Inside Yuno"
		},
		"pvp_y_1-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Prontera"
			},
			subTitle: true,
			displayName: "PvP : Room Prontera"
		},
		"geffen.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Geffen",
				subTitle: "Magic City in the Rune-Midgarts Kingdom"
			},
			subTitle: true,
			displayName: "Geffen, the Magic City"
		},
		"bat_a01.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Tierra Valley",
				subTitle: "Battleground"
			},
			subTitle: true,
			displayName: "Tierra Valley"
		},
		"ve_fild06.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Veins Field"
			},
			subTitle: true,
			displayName: "Veins Field"
		},
		"ve_fild05.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Veins Field"
			},
			subTitle: true,
			displayName: "Veins Field"
		},
		"aldeg_cas05.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Rothenburg Castle",
				subTitle: "Luina"
			},
			subTitle: true,
			displayName: "Rothenburg Castle"
		},
		"cmd_fild09.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Fortress Saint Darmain (South"
			},
			subTitle: true,
			displayName: "Fortress Saint Darmain (South"
		},
		"ra_fild08.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Ida Plains"
			},
			subTitle: true,
			displayName: "Ida Plains"
		},
		"man_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Manuk Field"
			},
			subTitle: true,
			displayName: "Manuk Field"
		},
		"dew_fild01.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Tribal Village",
				subTitle: "Dewata"
			},
			subTitle: true,
			displayName: "Dewata Field (Tribal Village)"
		},
		"1@os_b.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Sealed OS"
			},
			subTitle: true,
			displayName: "Sealed OS"
		},
		"priest_2-1.rsw": {
			displayName: "The Sanctum"
		},
		"ant_d02_i.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Garden of Awareness",
				subTitle: "Illusion"
			},
			subTitle: true,
			displayName: "Garden of Awareness"
		},
		"alde_dun04.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Clock Tower B4",
				subTitle: "Aldebaran"
			},
			subTitle: true,
			displayName: "Clock Tower B4"
		},
		"job3_arch02.rsw": {
			displayName: "Odin Temple"
		},
		"man_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Manuk Mining Camp"
			},
			subTitle: true,
			displayName: "Manuk Mining Camp"
		},
		"new_4-2.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"ecl_fild01.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Blooming Flower Land"
			},
			subTitle: true,
			displayName: "Blooming Flower Land"
		},
		"job3_rune03.rsw": {
			displayName: "Test room for Rune Knight Job Change"
		},
		"treasure_n1.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Izlude Shipwreck B1"
			},
			subTitle: true,
			displayName: "Izlude Shipwreck B1"
		},
		"1@lost.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Farm of Forgotten Time",
				subTitle: "Lost Valley"
			},
			subTitle: true,
			displayName: "Farm of Forgotten Time"
		},
		"pvp_n_3-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Undercross"
			},
			subTitle: true,
			displayName: "PvP : Room Undercross"
		},
		"1@exsr.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Inner World"
			},
			subTitle: true,
			displayName: "Inner World"
		},
		"iz_ac02_d.rsw": {
			backgroundBmp: "noname_s1",
			signName: {
				subTitle: "Criatura Academy F2"
			},
			subTitle: true,
			displayName: "Criatura Academy F2"
		},
		"1@vrac1.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Critura Academy 1st Floor",
				subTitle: "Fantasy Series"
			},
			subTitle: true,
			displayName: "Fantasy Series - Academy 1st Floor"
		},
		"treasure01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Sunken Ship B1",
				subTitle: "Alberta"
			},
			subTitle: true,
			displayName: "Sunken Ship B1"
		},
		"que_qaru04.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Fallacious Okolnir"
			},
			subTitle: true,
			displayName: "Fallacious Okolnir"
		},
		"gl_prison.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Underground Prison B1",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Glastheim Underground Prison B1"
		},
		"1@rev.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Morse Cave"
			},
			subTitle: true,
			displayName: "Morse Cave"
		},
		"anthell01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Ant Hell Dungeon F1",
				subTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Ant Hell Dungeon F1"
		},
		"ayo_in01.rsw": {
			displayName: "Inside Ayothaya"
		},
		"gl_sew01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Underground Waterway B1",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Glastheim Underground Waterway B1"
		},
		"1@sthc.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Air Fortress - Secret Chamber"
			},
			subTitle: true,
			displayName: "Air Fortress - Secret Chamber"
		},
		"ecl_tdun03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bifrost Tower 3F"
			},
			subTitle: true,
			displayName: "Bifrost Tower 3F"
		},
		"gef_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Geffen Dungeon B2"
			},
			subTitle: true,
			displayName: "Geffen Dungeon B2"
		},
		"1@gol2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Body Storage",
				subTitle: "Expedition"
			},
			subTitle: true,
			displayName: "Body Storage"
		},
		"que_thr.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Inside Thor Volcano"
			},
			subTitle: true,
			displayName: "Inside Thor Volcano"
		},
		"prt_fild08.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"pay_dun00.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Payon Cave F1",
				subTitle: "Payon Archer Village"
			},
			subTitle: true,
			displayName: "Payon Cave F1"
		},
		"que_qaru02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Fallacious Okolnir"
			},
			subTitle: true,
			displayName: "Fallacious Okolnir"
		},
		"lhz_in02.rsw": {
			displayName: "Inside Lighthalzen"
		},
		"hero_in1.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Spring Garden",
				subTitle: "Herosria"
			},
			subTitle: true,
			displayName: "Herosria Spring Garden"
		},
		"slabw01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Werner Research Institute"
			},
			subTitle: true,
			displayName: "Werner Research Institute"
		},
		"harboro1.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Rockridge"
			},
			subTitle: true,
			displayName: "Rockridge"
		},
		"orcsdun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Orc Dungeon F2",
				subTitle: "Orc Village"
			},
			subTitle: true,
			displayName: "Orc Dungeon F2"
		},
		"himinn.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Valkyrie Hall"
			},
			subTitle: true,
			displayName: "Valkyrie Hall (Himinn)"
		},
		"pvp_2vs2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Event Coliseum"
			},
			subTitle: true,
			displayName: "PvP : Event Coliseum"
		},
		"new_1-3.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"prt_prison.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Dungeon",
				subTitle: "Prontera Castle"
			},
			subTitle: true,
			displayName: "Prontera Prison Cell"
		},
		"1@rgsr.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Regenshir",
				subTitle: "Research Institute"
			},
			subTitle: true,
			displayName: "Regenshir"
		},
		"moscovia.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Moscovia"
			},
			subTitle: true,
			displayName: "Moscovia"
		},
		"nyd_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Yggdrasil Root F2"
			},
			subTitle: true,
			displayName: "Yggdrasil Root F2"
		},
		"1@orcs.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Orc Underground Cave"
			},
			subTitle: true,
			displayName: "Orc Underground Cave"
		},
		"2@orcs.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Orc Underground Cave"
			},
			subTitle: true,
			displayName: "Orc Underground Cave"
		},
		"que_rachel.rsw": {
			displayName: "Inside Freya's Temple"
		},
		"new_5-3.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"iz_ac01_b.rsw": {
			backgroundBmp: "noname_s1",
			signName: {
				subTitle: "Criatura Academy F1"
			},
			subTitle: true,
			displayName: "Criatura Academy F1"
		},
		"iz_int03.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Stranded Passenger Ship"
			},
			subTitle: true,
			displayName: "Stranded Passenger Ship"
		},
		"1@jorchs.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Confused Snake's Nest"
			},
			subTitle: true,
			displayName: "Confused Snake's Nest"
		},
		"ama_in01.rsw": {
			displayName: "Inside Amatsu"
		},
		"lasa_dun03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Dragon Nest F3"
			},
			subTitle: true,
			displayName: "Dragon Nest"
		},
		"prontera.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Prontera",
				subTitle: "Capital of the Rune-Midgarts Kingdom"
			},
			subTitle: true,
			displayName: "Prontera, Capital of Rune Midgard"
		},
		"ra_pol01.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Power Twisted Plains"
			},
			subTitle: true,
			displayName: "Power Twisted Plains"
		},
		"bl_ice.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Specimen Environment - Severe Cold",
				subTitle: "Varmundt's Biosphere"
			},
			subTitle: true,
			displayName: "Biosphere Specimen Environment - Severe Cold"
		},
		"hero_dun1.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "PvP Dungeon",
				subTitle: "Sanctuary Herosria"
			},
			subTitle: true,
			displayName: "Sanctuary Herosria PvP Dungeon"
		},
		"jor_nest.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Snake's Nest",
				subTitle: "Rgan Hideout"
			},
			subTitle: true,
			displayName: "Snake's Nest"
		},
		"in_moc_16.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Sograt Desert",
				subTitle: "Assassin Guild"
			},
			subTitle: true,
			displayName: "Assassin Guild"
		},
		"ve_in02.rsw": {
			displayName: "Inside Veins"
		},
		"gef_dun03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Geffenia",
				subTitle: "Geffen"
			},
			subTitle: true,
			displayName: "Geffenia Dungeon"
		},
		"job3_rang02.rsw": {
			displayName: "Test room for Ranger Job Change"
		},
		"1@jorlab.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Bagot Lab"
			},
			subTitle: true,
			displayName: "Bagot Lab"
		},
		"bossnia_02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bossnia"
			},
			subTitle: true,
			displayName: "Bossnia"
		},
		"verus04.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Residential Building-HOPE",
				subTitle: "Verus - Excavation Site"
			},
			subTitle: true,
			displayName: "Verus - Excavation Site"
		},
		"job3_arch03.rsw": {
			displayName: "Waiting room for Archbishop Job Change"
		},
		"ra_fild13.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Shore of Tears"
			},
			subTitle: true,
			displayName: "Shore of Tears"
		},
		"gefg_cas02.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Eeyorbriggar Castle",
				subTitle: "Britoniah"
			},
			subTitle: true,
			displayName: "Eeyorbriggar Castle"
		},
		"job3_gen01.rsw": {
			displayName: "Geneticist Lab"
		},
		"izlude_b.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Izlude",
				subTitle: "Rune-Midgarts Kingdom"
			},
			subTitle: true,
			displayName: "Izlude, the Satellite City"
		},
		"herosria.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Jewel Room",
				subTitle: "Sanctuary Herosria"
			},
			subTitle: true,
			displayName: "Sanctuary Herosria Jewel Room"
		},
		"man_in01.rsw": {
			displayName: "Inside Manuk"
		},
		"mosk_dun02.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Temny Forest",
				subTitle: "Moscovia"
			},
			subTitle: true,
			displayName: "Temny Forest"
		},
		"xmas_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Toy Monitoring Room",
				subTitle: "Lutie"
			},
			subTitle: true,
			displayName: "Toy Monitoring Room"
		},
		"vis_h01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Investigation Corridor F1"
			},
			subTitle: true,
			displayName: "Investigation Corridor F1"
		},
		"prt_fild08c.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "South Field of Prontera"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"te_prtcas01.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Geoborg Castle",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Geoborg Castle"
		},
		"1@cash.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Octopus Cave"
			},
			subTitle: true,
			displayName: "Octopus Cave"
		},
		"cave.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Cave Village"
			},
			subTitle: true,
			displayName: "Cave Village"
		},
		"1@vrac2.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Critura Academy 2nd Floor",
				subTitle: "Fantasy Series"
			},
			subTitle: true,
			displayName: "Fantasy Series - Academy 2nd Floor"
		},
		"gef_fild03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Geffen Field"
		},
		"silk_lair.rsw": {
			subTitle: true,
			displayName: "Python's Lair"
		},
		"xmas_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Lutie Field"
			},
			subTitle: true,
			displayName: "Lutie Field"
		},
		"1@ma_h.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bangungot Hospital F2"
			},
			subTitle: true,
			displayName: "Bangungot Hospital F2"
		},
		"c_tower2_.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Clock Tower F2",
				subTitle: "The Twisted Time"
			},
			subTitle: true,
			displayName: "Twisted Clock Tower F2"
		},
		"que_qaru01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Fallacious Okolnir"
			},
			subTitle: true,
			displayName: "Fallacious Okolnir"
		},
		"1@drdo.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Legend of Dorado"
			},
			subTitle: true,
			displayName: "Legend of Dorado"
		},
		"alde_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Clock Tower B1",
				subTitle: "Aldebaran"
			},
			subTitle: true,
			displayName: "Clock Tower B1"
		},
		"new_2-4.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"1@slw.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Central Room",
				subTitle: "Werner Research Institute"
			},
			subTitle: true,
			displayName: "Werner Research Institute"
		},
		"hero_out3.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Bastitarium",
				subTitle: "Herosria"
			},
			subTitle: true,
			displayName: "Herosria Bastitarium"
		},
		"dic_in01.rsw": {
			displayName: "Inside of El Dicastes"
		},
		"gl_knt02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Inside Chivalry F1",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Inside Glastheim Chivalry F2"
		},
		"alb_ship.rsw": {
			displayName: "Alberta Ship"
		},
		"gefg_cas05.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Mersetzdeitz Castle",
				subTitle: "Britoniah"
			},
			subTitle: true,
			displayName: "Mersetzdeitz Castle"
		},
		"mag_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Nogg Road F2"
			},
			subTitle: true,
			displayName: "Nogg Road F2"
		},
		"arug_que01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Morestone Prairie"
			},
			subTitle: true,
			displayName: "Morestone Prairie"
		},
		"turbo_n_1.rsw": {
			displayName: "Turbo Track Stadium"
		},
		"schg_cas02.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Andlangr Castle",
				subTitle: "Nidhoggur "
			},
			subTitle: true,
			displayName: "Andlangr Castle"
		},
		"pvp_y_5-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Morocc"
			},
			subTitle: true,
			displayName: "PvP : Room Morocc"
		},
		"schg_cas05.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Skidbladnir Castle",
				subTitle: "Nidhoggur"
			},
			subTitle: true,
			displayName: "Skidbladnir Castle"
		},
		"treasure02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Sunken Ship B2",
				subTitle: "Alberta"
			},
			subTitle: true,
			displayName: "Sunken Ship B2"
		},
		"bl_depth1.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Depth 1st Floor",
				subTitle: "Varmundt's Biosphere"
			},
			subTitle: true,
			displayName: "Biosphere Depth 1st Floor"
		},
		"1@gef.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Geffen Magic Tournament"
			},
			subTitle: true,
			displayName: "Geffen Magic Tournament"
		},
		"airport.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Airport"
			},
			subTitle: true,
			displayName: "Airport"
		},
		"lasa_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Dragon Nest F2"
			},
			subTitle: true,
			displayName: "Dragon Nest"
		},
		"gld_dun03_2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Guild Dungeon Underground F2",
				subTitle: "Valkyrie Realm"
			},
			subTitle: true,
			displayName: "Valkyrie Realm Dungeon 2F"
		},
		"schg_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Guild Dungeon",
				subTitle: "Schwartzwald"
			},
			subTitle: true,
			displayName: "Schwartzwald Guild Dungeon"
		},
		"ordeal_1-3.rsw": {
			displayName: "Battle Ordeal Mode"
		},
		"hu_fild04.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Hugel Field"
			},
			subTitle: true,
			displayName: "Hugel Field"
		},
		"thor_v03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Thor Volcano Dungeon 3F"
			},
			subTitle: true,
			displayName: "Thor Volcano Dungeon 3F"
		},
		"1@4win.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Luluca Deep Forest"
			},
			subTitle: true,
			displayName: "Luluca Deep Forest"
		},
		"mjo_dun03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Dead Pit F3",
				subTitle: "North of Mt. Mjolnir"
			},
			subTitle: true,
			displayName: "Mjolnir Dead Pit F3"
		},
		"pvp_n_2-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Four Room"
			},
			subTitle: true,
			displayName: "PvP : Four Room"
		},
		"pvp_y_2-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Prontera"
			},
			subTitle: true,
			displayName: "PvP : Room Prontera"
		},
		"1@ge_st.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Geffen Magic Tournament"
			},
			subTitle: true,
			displayName: "Geffen Magic Tournament"
		},
		"1@nyd.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Nidhoggr's Nest"
			},
			subTitle: true,
			displayName: "Nidhoggr's Nest"
		},
		"2@nyd.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Nidhoggr's Nest"
			},
			subTitle: true,
			displayName: "Nidhoggr's Nest"
		},
		"pay_arche.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Archer Village",
				subTitle: "Payon"
			},
			subTitle: true,
			displayName: "Payon Archer Village"
		},
		"ra_fild09.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Audumla Grassland"
			},
			subTitle: true,
			displayName: "Audumla Grassland"
		},
		"new_3-3.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"tha_t03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Abandoned Place",
				subTitle: "Thanatos Tower"
			},
			subTitle: true,
			displayName: "Thanatos Tower Abandoned Place"
		},
		"1@mcd.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Charleston Factory"
			},
			subTitle: true,
			displayName: "Charleston Factory"
		},
		"star_in.rsw": {
			displayName: "Inside Yu Seong Lim"
		},
		"pvp_y_4-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Alberta"
			},
			subTitle: true,
			displayName: "PvP : Room Alberta"
		},
		"arug_cas03.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Horn Castle",
				subTitle: "Valfreyja"
			},
			subTitle: true,
			displayName: "Horn Castle"
		},
		"manuk.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Manuk",
				subTitle: "Yotunheim Sapha's Mining Village"
			},
			subTitle: true,
			displayName: "Manuk Mining Camp"
		},
		"que_hugel.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Odin Shrine's Underground"
			},
			subTitle: true,
			displayName: "Odin Shrine's Underground"
		},
		"treasure_n2.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Izlude Shipwreck B2"
			},
			subTitle: true,
			displayName: "Izlude Shipwreck B2"
		},
		"ma_zif05.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Jeepney"
			},
			subTitle: true,
			displayName: "Inside of Jeepney"
		},
		"jor_root2.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Snake God's Root 2F"
			},
			subTitle: true,
			displayName: "Snake God's Root 2F"
		},
		"ice_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Rachel Ice Cave 2F"
			},
			subTitle: true,
			displayName: "Rachel Ice Cave 2F"
		},
		"mosk_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Moscovia Field"
			},
			subTitle: true,
			displayName: "Moscovia Field"
		},
		"itemmall.rsw": {
			displayName: "Kafra Shop"
		},
		"new_2-3.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"pay_dun03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Payon Cave F4",
				subTitle: "Payon Archer Village"
			},
			subTitle: true,
			displayName: "Payon Cave F4"
		},
		"lhz_cube.rsw": {
			displayName: "Cube Room"
		},
		"prt_q.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Invaded Prontera"
			},
			subTitle: true,
			displayName: "Invaded Prontera"
		},
		"ve_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Veins Field"
			},
			subTitle: true,
			displayName: "Veins Field"
		},
		"un_bk_q.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Underground Bunker"
			},
			subTitle: true,
			displayName: "Underground Bunker"
		},
		"1@jtb.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Dream and Shadow"
			},
			subTitle: true,
			displayName: "Dream and Shadow"
		},
		"prt_arena01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Arena"
			},
			subTitle: true,
			displayName: "Arena"
		},
		"gefg_cas03.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Yesnelph Castle",
				subTitle: "Britoniah"
			},
			subTitle: true,
			displayName: "Yesnelph Castle"
		},
		"gef_fild13.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Britoniah",
				subTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Britoniah"
		},
		"iz_ac01_d.rsw": {
			backgroundBmp: "noname_s1",
			signName: {
				subTitle: "Criatura Academy F1"
			},
			subTitle: true,
			displayName: "Criatura Academy F1"
		},
		"oz_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Oz's Labyrinth 2F"
			},
			subTitle: true,
			displayName: "Oz's Labyrinth 2F"
		},
		"iz_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Undersea Tunnel B3",
				subTitle: "Baylan Island"
			},
			subTitle: true,
			displayName: "Undersea Tunnel B3"
		},
		"ecl_in01.rsw": {
			displayName: "Eclage Indoor"
		},
		"que_qaru05.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Fallacious Okolnir"
			},
			subTitle: true,
			displayName: "Fallacious Okolnir"
		},
		"sp_rudus2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Rudus F2",
				subTitle: "Experiment Waste Disposal"
			},
			subTitle: true,
			displayName: "Rudus, Experiment Waste Disposal F2"
		},
		"new_1-2.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"vis_h04.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Investigation Corridor F4"
			},
			subTitle: true,
			displayName: "Investigation Corridor F4"
		},
		"pay_fild07.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Payon Forest"
			},
			subTitle: true,
			displayName: "Payon Forest"
		},
		"hu_fild03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Royal Hunting Grounds"
			},
			subTitle: true,
			displayName: "Royal Hunting Grounds"
		},
		"pvp_n_7-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Rock On"
			},
			subTitle: true,
			displayName: "PvP : Room Rock On"
		},
		"nameless_n.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Nameless Island Entrance"
			},
			subTitle: true,
			displayName: "Nameless Island Entrance"
		},
		"1@4mst.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Euperos Central VT"
			},
			subTitle: true,
			displayName: "Euperos Central VT"
		},
		"prt_fild07.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"mid_camp.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Midgard Expedition Camp",
				subTitle: "Yotunheim"
			},
			subTitle: true,
			displayName: "Midgard Expedition Camp"
		},
		"te_alde_gld.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Kafra's Den",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Kafra's Den"
		},
		"conch_in.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Inside Conch",
				subTitle: "Port Town Lasagne"
			},
			subTitle: true,
			displayName: "Inside Conch"
		},
		"new_5-2.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"turbo_e_4.rsw": {
			displayName: "Turbo Track Stadium"
		},
		"job3_guil01.rsw": {
			displayName: "Secret Tavern"
		},
		"paramk.rsw": {
			displayName: "Para Market"
		},
		"gef_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Geffen Field"
		},
		"moc_pryd05.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Inside Pyramid B1",
				subTitle: "Morroc"
			},
			subTitle: true,
			displayName: "Inside Pyramid B1"
		},
		"un_bunker.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Underground Bunker"
			},
			subTitle: true,
			displayName: "Underground Bunker"
		},
		"1@air1.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Airship"
			},
			subTitle: true,
			displayName: "Airship"
		},
		"sp_rudus3.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Rudus F3",
				subTitle: "Experiment Waste Disposal"
			},
			subTitle: true,
			displayName: "Rudus, Experiment Waste Disposal F3"
		},
		"mal_in01.rsw": {
			displayName: "Inside Malangdo"
		},
		"2@mir.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Ritual Room"
			},
			subTitle: true,
			displayName: "Ritual Room"
		},
		"1@mir.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Ritual Room"
			},
			subTitle: true,
			displayName: "Ritual Room"
		},
		"ma_zif03.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Jeepney"
			},
			subTitle: true,
			displayName: "Inside of Jeepney"
		},
		"dicastes02.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Broomeveld Forest",
				subTitle: "El Dicastes"
			},
			subTitle: true,
			displayName: "Broomeveld Forest"
		},
		"rag_fes.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "RAG-FES Exhibition Hall",
				subTitle: "Ragnarok Festival"
			},
			subTitle: true,
			displayName: "RAG-FES Exhibition Hall"
		},
		"prtg_cas03.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Fadhgridh Castle",
				subTitle: "Valkyrie Realm"
			},
			subTitle: true,
			displayName: "Fadhgridh Castle"
		},
		"izlude_d.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Izlude",
				subTitle: "Rune-Midgarts Kingdom"
			},
			subTitle: true,
			displayName: "Izlude, the Satellite City"
		},
		"in_sphinx1.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Morocc Sphinx B1",
				subTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Morocc Sphinx B1"
		},
		"lhz_in01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Rekenber Corporation Headquarters"
			},
			subTitle: true,
			displayName: "Rekenber Corporation Headquarters"
		},
		"lasa_fild02.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Ravioli Forest"
			},
			subTitle: true,
			displayName: "Ravioli Forest"
		},
		"1@spa.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Ghost Palace"
			},
			subTitle: true,
			displayName: "Ghost Palace"
		},
		"yuno_fild04.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "El Mes Plateau"
			},
			subTitle: true,
			displayName: "El Mes Plateau"
		},
		"ordeal_2-3.rsw": {
			displayName: "Battle Ordeal Mode"
		},
		"jawaii.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Jawaii",
				subTitle: "Honeymoon Island"
			},
			subTitle: true,
			displayName: "Jawaii, the Honeymoon Island"
		},
		"iz_ac01_a.rsw": {
			backgroundBmp: "noname_s1",
			signName: {
				subTitle: "Criatura Academy F1"
			},
			subTitle: true,
			displayName: "Criatura Academy F1"
		},
		"new_4-3.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"pvp_y_5-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Prontera"
			},
			subTitle: true,
			displayName: "PvP : Room Prontera"
		},
		"gl_cas02_.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Castle F2",
				subTitle: "Glastheim Castle"
			},
			subTitle: true,
			displayName: "Glastheim Castle F2"
		},
		"dewata.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Dewata"
			},
			subTitle: true,
			displayName: "Dewata"
		},
		"1@4igd.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "The Battlefield of Justice"
			},
			subTitle: true,
			displayName: "The Battlefield of Justice"
		},
		"iz_int01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Stranded Passenger Ship"
			},
			subTitle: true,
			displayName: "Stranded Passenger Ship"
		},
		"force_2-3.rsw": {
			displayName: "Time Limit Fight"
		},
		"ein_dun03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Einbech Mine 3F"
			},
			subTitle: true,
			displayName: "Einbech Mine 3F"
		},
		"prt_evt_in.rsw": {
			displayName: "Hunting Lodge"
		},
		"tha_t06.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Thanatos Tower Upper Level"
			},
			subTitle: true,
			displayName: "Thanatos Tower Upper Level"
		},
		"1@dth3.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bios Island"
			},
			subTitle: true,
			displayName: "Bios Island"
		},
		"monk_in.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Inside St. Abbey"
			},
			subTitle: true,
			displayName: "Inside St. Abbey"
		},
		"turbo_e_8.rsw": {
			displayName: "Turbo Track Stadium"
		},
		"cmd_in01.rsw": {
			displayName: "Inside Comodo"
		},
		"ein_fild06.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Einbroch Field"
			},
			subTitle: true,
			displayName: "Einbroch Field"
		},
		"arug_cas05.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Banadis Castle",
				subTitle: "Valfreyja"
			},
			subTitle: true,
			displayName: "Banadis Castle"
		},
		"gl_chyard.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Underground Churchyard",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Glastheim Underground Churchyard"
		},
		"pvp_y_7-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Izlude"
			},
			subTitle: true,
			displayName: "PvP : Room Izlude"
		},
		"pvp_n_7-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Copass"
			},
			subTitle: true,
			displayName: "PvP : Room Copass"
		},
		"ba_pw01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "1st Power Plant"
			},
			subTitle: true,
			displayName: "1st Power Plant"
		},
		"lhz_airport.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Lighthalzen Airport"
			},
			subTitle: true,
			displayName: "Lighthalzen Airport"
		},
		"ein_d02_i.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Nasarin Empire",
				subTitle: "Illusion"
			},
			subTitle: true,
			displayName: "Nasarin Empire"
		},
		"arena_room.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Waiting room"
			},
			subTitle: true,
			displayName: "Waiting room"
		},
		"job4_bio.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Secret Garden"
			},
			subTitle: true,
			displayName: "Secret Garden"
		},
		"pvp_y_3-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Payon"
			},
			subTitle: true,
			displayName: "PvP : Room Payon"
		},
		"yggdrasil01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Hvergelmir's Fountain"
			},
			subTitle: true,
			displayName: "Hvergelmir's Fountain (Trunk of Yggdrasil)"
		},
		"ama_in02.rsw": {
			displayName: "Inside Himezi Castle"
		},
		"jor_ab01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Abandoned Pit 1st Floor"
			},
			subTitle: true,
			displayName: "Abandoned Pit 1st Floor"
		},
		"mjolnir_05.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Mt.Mjolnir North Area"
			},
			subTitle: true,
			displayName: "Mt.Mjolnir North Area"
		},
		"que_bingo.rsw": {
			displayName: "Bingo Game Room"
		},
		"1@4drk.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Dragon's Trail"
			},
			subTitle: true,
			displayName: "Dragon's Trail"
		},
		"gld_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Guild Dungeon",
				subTitle: "Luina"
			},
			subTitle: true,
			displayName: "Luina Guild Dungeon"
		},
		"vr_bob.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Today's Table",
				subTitle: "Fantasy Series-006"
			},
			subTitle: true,
			displayName: "Fantasy Series - Today's Table"
		},
		"jor_back3.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Frozen Scale Glacier"
			},
			subTitle: true,
			displayName: "Frozen Scale Glacier"
		},
		"louyang.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Louyang",
				subTitle: "Highland"
			},
			subTitle: true,
			displayName: "Louyang, the Highland"
		},
		"iz_ac02_c.rsw": {
			backgroundBmp: "noname_s1",
			signName: {
				subTitle: "Criatura Academy F2"
			},
			subTitle: true,
			displayName: "Criatura Academy F2"
		},
		"ra_san04.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Sanctuary South Area 1F",
				subTitle: "Rachel Temple"
			},
			subTitle: true,
			displayName: "Rachel Temple Sanctuary South Area 1F"
		},
		"beach_dun3.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Mao, the East Cave",
				subTitle: "Comodo"
			},
			subTitle: true,
			displayName: "Mao, the East Cave"
		},
		"pub_cat.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Cat on a Bullet",
				subTitle: "Einbroch Rebellion Pub"
			},
			subTitle: true,
			displayName: "Cat on a Bullet"
		},
		"1@herbs.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Hidden Flower Garden"
			},
			subTitle: true,
			displayName: "Hidden Flower Garden"
		},
		"prt_lib_q.rsw": {
			displayName: "Memorial of Past Royal Family"
		},
		"ma_fild02.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Forest",
				subTitle: "Port Malaya"
			},
			subTitle: true,
			displayName: "Forest"
		},
		"pvp_y_3-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Prontera"
			},
			subTitle: true,
			displayName: "PvP : Room Prontera"
		},
		"1@exse.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Galactic Celestial Branch"
			},
			subTitle: true,
			displayName: "Galactic Celestial Branch"
		},
		"bat_b01.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Flavian",
				subTitle: "Battleground"
			},
			subTitle: true,
			displayName: "Flavian"
		},
		"ein_fild04.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Einbroch Field"
			},
			subTitle: true,
			displayName: "Einbroch Field"
		},
		"sp_os.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "OS",
				subTitle: "Special Border Area"
			},
			subTitle: true,
			displayName: "Special Border Area OS"
		},
		"prt_in.rsw": {
			displayName: "Inside Prontera"
		},
		"moc_ruins.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Morocc Ruins"
			},
			subTitle: true,
			displayName: "Morocc Ruins"
		},
		"arug_cas04.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Gefn Castle",
				subTitle: "Valfreyja"
			},
			subTitle: true,
			displayName: "Gefn Castle"
		},
		"ama_dun03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Amatsu Underground Shrine"
			},
			subTitle: true,
			displayName: "Amatsu Underground Shrine"
		},
		"yuno_fild06.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "El Mes Plateau"
			},
			subTitle: true,
			displayName: "El Mes Plateau"
		},
		"moc_fild22b.rsw": {
			backgroundBmp: "field2",
			signName: {
				mainTitle: "Dimension Crack",
				subTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Dimension Crack in Sograt Desert"
		},
		"hu_fild05.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Hugel Abyss Lake"
			},
			subTitle: true,
			displayName: "Hugel Abyss Lake"
		},
		"gl_sew03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Underground Waterway B3",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Glastheim Underground Waterway B3"
		},
		"hero_ent1.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "1st Hero's Gateway",
				subTitle: "Herosria"
			},
			subTitle: true,
			displayName: "Herosria 1st Hero's Gateway"
		},
		"payg_cas05.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Bamboo Grove Hill",
				subTitle: "Greenwood Lake"
			},
			subTitle: true,
			displayName: "Bamboo Grove Hill Castle"
		},
		"prt_fild11.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"1@adv.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "High Priest Villa"
			},
			subTitle: true,
			displayName: "High Priest Villa"
		},
		"ein_fild09.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Einbroch Field"
			},
			subTitle: true,
			displayName: "Einbroch Field"
		},
		"jor_safty1.rsw": {
			backgroundBmp: "field2_s1",
			signName: {
				subTitle: "Safe Place"
			},
			subTitle: true,
			displayName: "Safe Place"
		},
		"prt_sewb3.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Culvert F3",
				subTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Culvert F3"
		},
		"tha_t07.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Room of Angel",
				subTitle: "Thanatos Tower Upper Level"
			},
			subTitle: true,
			displayName: "Thanatos Tower Upper Level - Room of Angel"
		},
		"tha_t05.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Thanatos Tower Upper Level"
			},
			subTitle: true,
			displayName: "Thanatos Tower Upper Level"
		},
		"turbo_n_16.rsw": {
			displayName: "Turbo Track Stadium"
		},
		"alde_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Clock Tower B2",
				subTitle: "Aldebaran"
			},
			subTitle: true,
			displayName: "Clock Tower B2"
		},
		"1@pop3.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Sky Garden",
				subTitle: "Half Moon in the Daylight"
			},
			subTitle: true,
			displayName: "Sky Garden"
		},
		"har_in01.rsw": {
			displayName: "Rockridge"
		},
		"new_2-1.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"prt_castle.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Prontera Castle"
			},
			subTitle: true,
			displayName: "Prontera Castle"
		},
		"gl_cas02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Glastheim Castle F2",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Glastheim Castle F2"
		},
		"que_swat.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Heart Hunter Military Base"
			},
			subTitle: true,
			displayName: "Heart Hunter Military Base"
		},
		"1@4cdn.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Cave of the Last Ordeal Vision"
			},
			subTitle: true,
			displayName: "Cave of the Last Ordeal Vision"
		},
		"tra_fild.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Outer Training Grounds"
			},
			subTitle: true,
			displayName: "Prontera Outer Training Grounds"
		},
		"tha_t04.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Abandoned Place",
				subTitle: "Thanatos Tower"
			},
			subTitle: true,
			displayName: "Thanatos Tower Abandoned Place"
		},
		"iz_ac02_b.rsw": {
			backgroundBmp: "noname_s1",
			signName: {
				subTitle: "Criatura Academy F2"
			},
			subTitle: true,
			displayName: "Criatura Academy F2"
		},
		"abbey02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Cursed Abbey Dungeon B2",
				subTitle: "Nameless Island"
			},
			subTitle: true,
			displayName: "Cursed Abbey Dungeon B2"
		},
		"turbo_n_8.rsw": {
			displayName: "Turbo Track Stadium"
		},
		"vis_h03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Investigation Corridor F3"
			},
			subTitle: true,
			displayName: "Investigation Corridor F3"
		},
		"1@md_gef.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Friday Memorial"
			},
			subTitle: true,
			displayName: "Friday Memorial"
		},
		"lasa_sea.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Lasagna Cave"
			},
			subTitle: true,
			displayName: "Lasagna Cave"
		},
		"odin_tem03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Odin's Temple North Area"
			},
			subTitle: true,
			displayName: "Odin's Temple North Area"
		},
		"quiz_test.rsw": {
			displayName: "Quiz Hall"
		},
		"c_tower2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Clock Tower F2",
				subTitle: "Aldebaran"
			},
			subTitle: true,
			displayName: "Clock Tower F2"
		},
		"2@gl_k.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Chivalry F2",
				subTitle: "Old Glastheim"
			},
			subTitle: true,
			displayName: "Old Glastheim Chivalry F2"
		},
		"ecl_hub01.rsw": {
			displayName: "Eclage Perimeter"
		},
		"1@gl_k.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Chivalry F1",
				subTitle: "Old Glastheim"
			},
			subTitle: true,
			displayName: "Old Glastheim Chivalry F1"
		},
		"1@gef_in.rsw": {
			displayName: "Geffen Magic Tournament"
		},
		"lasa_dun_q.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Dragon Nest"
			},
			subTitle: true,
			displayName: "Dragon Nest"
		},
		"schg_cas03.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Vidblainn Castle",
				subTitle: "Nidhoggur"
			},
			subTitle: true,
			displayName: "Vidblainn Castle"
		},
		"hero_out4.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Labinarium",
				subTitle: "Herosria"
			},
			subTitle: true,
			displayName: "Herosria Labinarium"
		},
		"alde_gld.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Luina",
				subTitle: "Satellite of Aldebaran"
			},
			subTitle: true,
			displayName: "Luina, the satellite of Aldebaran"
		},
		"prt_fild08b.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "South Field of Prontera"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"yuno_fild12.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Border Checkpoint"
			},
			subTitle: true,
			displayName: "Border Checkpoint"
		},
		"lhz_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Lighthalzen Field"
			},
			subTitle: true,
			displayName: "Lighthalzen Field"
		},
		"pvp_n_7-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Sandwich"
			},
			subTitle: true,
			displayName: "PvP : Room Sandwich"
		},
		"yuno_fild03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "El Mes Plateau"
			},
			subTitle: true,
			displayName: "El Mes Plateau"
		},
		"pvp_n_5-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Undercross"
			},
			subTitle: true,
			displayName: "PvP : Room Undercross"
		},
		"job_wiz.rsw": {
			displayName: "Wizard Realm"
		},
		"gon_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Hermit's Checkerboard",
				subTitle: "Gonryun"
			},
			subTitle: true,
			displayName: "Hermit's Checkerboard"
		},
		"int_land.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Remote Island"
			},
			subTitle: true,
			displayName: "Remote Island"
		},
		"aldeba_in.rsw": {
			displayName: "Inside Aldebaran"
		},
		"ve_in.rsw": {
			displayName: "Inside Veins"
		},
		"que_qsch05.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Fallacious Okolnir"
			},
			subTitle: true,
			displayName: "Fallacious Okolnir"
		},
		"ma_zif07.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Jeepney"
			},
			subTitle: true,
			displayName: "Inside of Jeepney"
		},
		"1@tcamp.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Thor Volcano Military Base"
			},
			subTitle: true,
			displayName: "Thor Volcano Military Base"
		},
		"prt_fild08d.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "South Field of Prontera"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"job_prist.rsw": {
			displayName: "Priest Realm"
		},
		"nyd_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Yggdrasil Root F1"
			},
			subTitle: true,
			displayName: "Yggdrasil Root F1"
		},
		"kh_kiehl02.rsw": {
			displayName: "Kiel's Room"
		},
		"in_sphinx2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Morocc Sphinx B2",
				subTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Morocc Sphinx B2"
		},
		"icas_in.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Inside the Ice Castle"
			},
			subTitle: true,
			displayName: "Inside the Ice Castle"
		},
		"iz_ac02.rsw": {
			backgroundBmp: "noname_s1",
			signName: {
				subTitle: "Criatura Academy F2"
			},
			subTitle: true,
			displayName: "Criatura Academy F2"
		},
		"bl_soul.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Specimen Environment - Soul",
				subTitle: "Varmundt's Biosphere"
			},
			subTitle: true,
			displayName: "Biosphere Specimen Environment - Soul"
		},
		"mjolnir_12.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Mt.Mjolnir North Foothills"
			},
			subTitle: true,
			displayName: "Mt.Mjolnir North Foothills"
		},
		"alde_alche.rsw": {
			displayName: "Alchemist Realm"
		},
		"payg_cas02.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Scarlet Palace Castle",
				subTitle: "Greenwood Lake"
			},
			subTitle: true,
			displayName: "Scarlet Palace Castle"
		},
		"gefenia02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Geffenia"
			},
			subTitle: true,
			displayName: "Geffenia"
		},
		"force_3-2.rsw": {
			displayName: "Time Limit Fight"
		},
		"izlude_c.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Izlude",
				subTitle: "Rune-Midgarts Kingdom"
			},
			subTitle: true,
			displayName: "Izlude, the Satellite City"
		},
		"s_atelier.rsw": {
			displayName: "Shadow Workshop"
		},
		"1@20cn2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Canyon Exploration"
			},
			subTitle: true,
			displayName: "Canyon Exploration"
		},
		"pvp_y_1-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Izlude"
			},
			subTitle: true,
			displayName: "PvP : Room Izlude"
		},
		"spl_in02.rsw": {
			displayName: "Inside Splendide"
		},
		"1@4mag.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Magic Fountain"
			},
			subTitle: true,
			displayName: "Magic Fountain"
		},
		"quiz_00.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Quiz Revolution"
			},
			subTitle: true,
			displayName: "Quiz Revolution"
		},
		"1@vrclo.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Mirror Monastery",
				subTitle: "Fantasy Series-005"
			},
			subTitle: true,
			displayName: "Fantasy Series - Mirror Monastery"
		},
		"rockrdg2.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Kiwawa Desert",
				subTitle: "Rockridge"
			},
			subTitle: true,
			displayName: "Kiwawa Desert"
		},
		"2@vrclo.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "All those moments",
				subTitle: "Fantasy Series-005"
			},
			subTitle: true,
			displayName: "Fantasy Series - All those moments"
		},
		"iz_int02.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Stranded Passenger Ship"
			},
			subTitle: true,
			displayName: "Stranded Passenger Ship"
		},
		"yuno_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Border Posts"
			},
			subTitle: true,
			displayName: "Border Posts"
		},
		"1@spa2.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Tomb of Regret"
			},
			subTitle: true,
			displayName: "Tomb of Regret"
		},
		"ma_fild01.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Baryo Mahiwaga",
				subTitle: "Port Malaya"
			},
			subTitle: true,
			displayName: "Baryo Mahiwaga"
		},
		"poring_w01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Poring War Waiting Room"
			},
			subTitle: true,
			displayName: "Poring War Waiting Room"
		},
		"ecl_tdun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bifrost Tower 1F"
			},
			subTitle: true,
			displayName: "Bifrost Tower 1F"
		},
		"jupe_area2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Juperos, Restricted Zone"
			},
			subTitle: true,
			displayName: "Juperos, Restricted Zone"
		},
		"gef_fild05.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Gypsy Village",
				subTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Gypsy Village"
		},
		"ra_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Audumla Grassland"
			},
			subTitle: true,
			displayName: "Audumla Grassland"
		},
		"izlude_a.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Izlude",
				subTitle: "Rune-Midgarts Kingdom"
			},
			subTitle: true,
			displayName: "Izlude, the Satellite City"
		},
		"jupe_core2.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Center of Juperos"
			},
			subTitle: true,
			displayName: "Center of Juperos"
		},
		"force_1-2.rsw": {
			displayName: "Time Limit Fight"
		},
		"lasa_in01.rsw": {
			displayName: "Inside Lasagna"
		},
		"jor_que.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Abandoned Snake God's Warmth"
			},
			subTitle: true,
			displayName: "Abandoned Snake God's Warmth"
		},
		"ordeal_3-4.rsw": {
			displayName: "Battle Ordeal Mode"
		},
		"sch_gld.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Nidhoggur",
				subTitle: "Yuno"
			},
			subTitle: true,
			displayName: "Nidhoggur"
		},
		"oz_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Oz's Labyrinth 1F"
			},
			subTitle: true,
			displayName: "Oz's Labyrinth 1F"
		},
		"iz_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Undersea Tunnel B2",
				subTitle: "Baylan Island"
			},
			subTitle: true,
			displayName: "Undersea Tunnel B2"
		},
		"prt_cas.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Central Palace",
				subTitle: "Prontera Castle"
			},
			subTitle: true,
			displayName: "Prontera Central Palace"
		},
		"jupe_core.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Center of Juperos"
			},
			subTitle: true,
			displayName: "Center of Juperos"
		},
		"rockmi2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Rockridge Mine F2"
			},
			subTitle: true,
			displayName: "Rockridge Mine"
		},
		"prt_gld.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Valkyrie Realm",
				subTitle: "Prontera"
			},
			subTitle: true,
			displayName: "Valkyrie Realm"
		},
		"iz_d04_i.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Deep Sea Cave"
			},
			subTitle: true,
			displayName: "Deep Sea Cave"
		},
		"amatsu.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Amatsu",
				subTitle: "Land of Destiny"
			},
			subTitle: true,
			displayName: "Amatsu, the Land of Destiny"
		},
		"pay_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Payon Cave F2",
				subTitle: "Payon Archer Village"
			},
			subTitle: true,
			displayName: "Payon Cave F2"
		},
		"gl_cas01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Glastheim Castle F1",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Glastheim Castle F1"
		},
		"te_prtcas04.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Heine Castle",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Heine Castle"
		},
		"1@vrpo.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Poring Terra",
				subTitle: "Fantasy Series-007"
			},
			subTitle: true,
			displayName: "Fantasy Series - Poring Terra"
		},
		"ra_fild03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Ida Plains"
			},
			subTitle: true,
			displayName: "Ida Plains"
		},
		"2@tower.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Endless Tower"
			},
			subTitle: true,
			displayName: "Endless Tower"
		},
		"3@tower.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Endless Tower"
			},
			subTitle: true,
			displayName: "Endless Tower"
		},
		"4@tower.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Endless Tower"
			},
			subTitle: true,
			displayName: "Endless Tower"
		},
		"prt_cas_q.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Star Palace",
				subTitle: "Prontera Castle"
			},
			subTitle: true,
			displayName: "Prontera Star Palace"
		},
		"6@tower.rsw": {
			displayName: "Endless Tower (Unknown Area)"
		},
		"yuno_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Kiel Hyre's Cottage"
			},
			subTitle: true,
			displayName: "Kiel Hyre's Cottage"
		},
		"juperos_02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Inside the Juperos Ruins"
			},
			subTitle: true,
			displayName: "Inside the Juperos Ruins"
		},
		"prt_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"1@tower.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Endless Tower"
			},
			subTitle: true,
			displayName: "Endless Tower"
		},
		"lhz_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Somatology Laboratory F1"
			},
			subTitle: true,
			displayName: "Somatology Laboratory F1"
		},
		"ma_zif01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Jeepney"
			},
			subTitle: true,
			displayName: "Inside of Jeepney"
		},
		"bif_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Northern Bifrost"
			},
			subTitle: true,
			displayName: "Northern Bifrost"
		},
		"jor_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Snake God's Warmth 2nd Floor"
			},
			subTitle: true,
			displayName: "Snake God's Warmth 2nd Floor"
		},
		"gl_chyard_.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Monastery Churchyard",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Monastery Churchyard"
		},
		"ecl_in04.rsw": {
			displayName: "Eclage Indoor"
		},
		"ve_fild04.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Veins Field"
			},
			subTitle: true,
			displayName: "Veins Field"
		},
		"sec_in02.rsw": {
			displayName: "Inside Valhalla"
		},
		"hunter_1-1.rsw": {
			displayName: "Hunter Guild"
		},
		"nif_fild01.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Skellington, a Solitary Village",
				subTitle: "Niflheim"
			},
			subTitle: true,
			displayName: "Skellington, a Solitary Village in Niflheim"
		},
		"que_god02.rsw": {
			displayName: "Quest Map"
		},
		"ecl_tdun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bifrost Tower 2F"
			},
			subTitle: true,
			displayName: "Bifrost Tower 2F"
		},
		"thor_v02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Thor Volcano Dungeon 2F"
			},
			subTitle: true,
			displayName: "Thor Volcano Dungeon 2F"
		},
		"bif_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Southern Bifrost"
			},
			subTitle: true,
			displayName: "Southern Bifrost"
		},
		"1@advs.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Deception Villa"
			},
			subTitle: true,
			displayName: "Deception Villa"
		},
		"dicastes01.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "El Dicastes",
				subTitle: "Jotunheim Sapha Capital"
			},
			subTitle: true,
			displayName: "El Dicastes, the Sapha Capital"
		},
		"brasilis.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Brasilis"
			},
			subTitle: true,
			displayName: "Brasilis"
		},
		"1@oz.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Oz's Labyrinth"
			},
			subTitle: true,
			displayName: "Oz's Labyrinth"
		},
		"abyss_04.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Underground Cave 4F",
				subTitle: "Abyss Lake"
			},
			subTitle: true,
			displayName: "Abyss Lake Underground Cave 4F"
		},
		"c_tower3.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Clock Tower F3",
				subTitle: "Aldebaran"
			},
			subTitle: true,
			displayName: "Clock Tower F3"
		},
		"bl_temple.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Specimen Environment - Temple",
				subTitle: "Varmundt's Biosphere"
			},
			subTitle: true,
			displayName: "Biosphere Specimen Environment - Temple"
		},
		"pay_fild06.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Payon Forest"
			},
			subTitle: true,
			displayName: "Payon Forest"
		},
		"hu_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "In front of Thanatos Tower"
			},
			subTitle: true,
			displayName: "In front of Thanatos Tower"
		},
		"int_land03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Remote Island"
			},
			subTitle: true,
			displayName: "Remote Island"
		},
		"1@uns.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "The Last room"
			},
			subTitle: true,
			displayName: "The Last room"
		},
		"1@20cn1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Canyon Exploration"
			},
			subTitle: true,
			displayName: "Canyon Exploration"
		},
		"quiz_02.rsw": {
			displayName: "Quiz Arena"
		},
		"int_land04.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Remote Island"
			},
			subTitle: true,
			displayName: "Remote Island"
		},
		"ice_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Rachel Ice Cave 1F"
			},
			subTitle: true,
			displayName: "Rachel Ice Cave 1F"
		},
		"2@nyr.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Heart Storage",
				subTitle: "Sanctuary Sesrumnir"
			},
			subTitle: true,
			displayName: "Sanctuary Sesrumnir Heart Storage"
		},
		"1@nyr.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Sanctuary Sesrumnir Garden"
			},
			subTitle: true,
			displayName: "Sanctuary Sesrumnir Garden"
		},
		"moc_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert"
		},
		"pvp_n_1-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Four Room"
			},
			subTitle: true,
			displayName: "PvP : Four Room"
		},
		"prt_fild06.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"bl_grass.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Specimen Environment - Grassland",
				subTitle: "Varmundt's Biosphere"
			},
			subTitle: true,
			displayName: "Biosphere Specimen Environment - Grassland"
		},
		"ba_pw03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "2nd Power Plant"
			},
			subTitle: true,
			displayName: "2nd Power Plant"
		},
		"p_track01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Monster Race Arena"
			},
			subTitle: true,
			displayName: "Monster Race Arena"
		},
		"ice_d03_i.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Frozen Memory",
				subTitle: "Illusion"
			},
			subTitle: true,
			displayName: "Frozen Memory"
		},
		"ice_dun04.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Rachel Ice Cave - Sealed Space"
			},
			subTitle: true,
			displayName: "Rachel Ice Cave - Sealed Space"
		},
		"x_lhz.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Lighthalzen",
				subTitle: "Beyond Dimension"
			},
			subTitle: true,
			displayName: "Lighthalzen - Beyond Dimension"
		},
		"jor_back1.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Frozen Scale Hill"
			},
			subTitle: true,
			displayName: "Frozen Scale Hill"
		},
		"mjo_wst01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Mjolnir Underground Cave"
			},
			subTitle: true,
			displayName: "Mjolnir Underground Cave"
		},
		"ve_fild03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Veins Field"
			},
			subTitle: true,
			displayName: "Veins Field"
		},
		"evt_bomb.rsw": {
			displayName: "Labyrinth Event"
		},
		"mjo_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Dead Pit F1",
				subTitle: "North of Mt. Mjolnir"
			},
			subTitle: true,
			displayName: "Mjolnir Dead Pit F1"
		},
		"te_aldecas02.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Defolty Castle",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Defolty Castle"
		},
		"rgsr_in.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Reckenberg Research Institute"
			},
			subTitle: true,
			displayName: "Reckenberg Research Institute"
		},
		"1@twig.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Twig's Nest"
			},
			subTitle: true,
			displayName: "Twig's Nest"
		},
		"1@ch_u.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Sunken Tower",
				subTitle: "Old Endless Tower Erosion"
			},
			subTitle: true,
			displayName: "Sunken Tower"
		},
		"jor_root1.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Snake God's Root 1F"
			},
			subTitle: true,
			displayName: "Snake God's Root 1F"
		},
		"gld2_pay.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Ancient Wind",
				subTitle: "Greenwood Lake Abyss Corridor"
			},
			subTitle: true,
			displayName: "Corridor of the Abyss: Ancient Wind"
		},
		"tha_t10.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Room of Sorrow",
				subTitle: "Thanatos Tower Upper Level"
			},
			subTitle: true,
			displayName: "Thanatos Tower Upper Level - Room of Sorrow"
		},
		"veins.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Veins",
				subTitle: "Arunafeltz Canyon Village"
			},
			subTitle: true,
			displayName: "Veins, the Canyon Village"
		},
		"alde_dun03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Clock Tower B3",
				subTitle: "Aldebaran"
			},
			subTitle: true,
			displayName: "Clock Tower B3"
		},
		"arug_cas02.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Cyr Castle",
				subTitle: "Valfreyja"
			},
			subTitle: true,
			displayName: "Cyr Castle"
		},
		"xmas_in.rsw": {
			displayName: "Inside Lutie"
		},
		"1@face.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Faceworm's Nest"
			},
			subTitle: true,
			displayName: "Faceworm's Nest"
		},
		"jor_sanct.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Sacred Root",
				subTitle: "Rgan Hideout"
			},
			subTitle: true,
			displayName: "Sacred Root"
		},
		"odin_past.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Ancient Odin Temple"
			},
			subTitle: true,
			displayName: "Ancient Odin Temple"
		},
		"malangdo.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Malangdo"
			},
			subTitle: true,
			displayName: "Malangdo"
		},
		"ma_zif08.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Jeepney"
			},
			subTitle: true,
			displayName: "Inside of Jeepney"
		},
		"in_sphinx4.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Morocc Sphinx B4",
				subTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Morocc Sphinx B4"
		},
		"que_thor.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Thor Volcano Dungeon"
			},
			subTitle: true,
			displayName: "Thor Volcano Dungeon"
		},
		"pvp_y_4-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Prontera"
			},
			subTitle: true,
			displayName: "PvP : Room Prontera"
		},
		"te_aldecas05.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "W Castle",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "W Castle"
		},
		"bra_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Beyond the Waterfall",
				subTitle: "Brasilis"
			},
			subTitle: true,
			displayName: "Beyond the Waterfall"
		},
		"gld2_prt.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Warrior's Way",
				subTitle: "Valkyrie Realm Abyss Corridor"
			},
			subTitle: true,
			displayName: "Corridor of the Abyss: Warrior's Way"
		},
		"1@begi.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Poring Village"
			},
			subTitle: true,
			displayName: "Poring Village"
		},
		"prt_church.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "The Sanctuary"
			},
			subTitle: true,
			displayName: "The Sanctuary"
		},
		"1@whl.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Inside Unprocessed Wile (1)",
				subTitle: "Varmundt's Aircraft Collection No.3"
			},
			subTitle: true,
			displayName: "Inside Unprocessed Wile (1)"
		},
		"iz_ac01_c.rsw": {
			backgroundBmp: "noname_s1",
			signName: {
				subTitle: "Criatura Academy F1"
			},
			subTitle: true,
			displayName: "Criatura Academy F1"
		},
		"ama_test.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Momotaro Experience Place"
			},
			subTitle: true,
			displayName: "Momotaro Experience Place"
		},
		"gefenia03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Geffenia"
			},
			subTitle: true,
			displayName: "Geffenia"
		},
		"1@twas.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Separated Sanctuary"
			},
			subTitle: true,
			displayName: "Separated Sanctuary"
		},
		"airplane_01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Airship"
			},
			subTitle: true,
			displayName: "Airship"
		},
		"orcsdun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Orc Dungeon F1",
				subTitle: "Orc Village"
			},
			subTitle: true,
			displayName: "Orc Dungeon F1"
		},
		"1@4tro.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Kvashir's Ship"
			},
			subTitle: true,
			displayName: "Kvashir's Ship"
		},
		"e_tower.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Misty Island"
			},
			subTitle: true,
			displayName: "Misty Island"
		},
		"gef_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Geffen Dungeon B3"
			},
			subTitle: true,
			displayName: "Geffen Dungeon B3"
		},
		"spl_in01.rsw": {
			displayName: "Inside Splendide Field Command"
		},
		"ayothaya.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Ayothaya"
			},
			subTitle: true,
			displayName: "Ayothaya"
		},
		"hero_out1.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Silvarium",
				subTitle: "Herosria"
			},
			subTitle: true,
			displayName: "Herosria Silvarium"
		},
		"pvp_y_8-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Morocc"
			},
			subTitle: true,
			displayName: "PvP : Room Morocc"
		},
		"pvp_y_7-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Morocc"
			},
			subTitle: true,
			displayName: "PvP : Room Morocc"
		},
		"pvp_y_6-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Morocc"
			},
			subTitle: true,
			displayName: "PvP : Room Morocc"
		},
		"un_myst.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Underground Tunnel"
			},
			subTitle: true,
			displayName: "Underground Tunnel"
		},
		"que_job01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Private Pub"
			},
			subTitle: true,
			displayName: "Private Pub"
		},
		"pvp_y_4-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Morocc"
			},
			subTitle: true,
			displayName: "PvP : Room Morocc"
		},
		"yuno_fild07.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "El Mes Gorge",
				subTitle: "Valley of Abyss"
			},
			subTitle: true,
			displayName: "El Mes Gorge (Valley of Abyss)"
		},
		"new_2-2.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"pvp_y_3-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Morocc"
			},
			subTitle: true,
			displayName: "PvP : Room Morocc"
		},
		"moc_prydn1.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Pyramid B1"
			},
			subTitle: true,
			displayName: "Morocc Pyramid B1 - Nightmare"
		},
		"moc_pryd06.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Inside Pyramid B2",
				subTitle: "Morroc"
			},
			subTitle: true,
			displayName: "Inside Pyramid B2"
		},
		"lou_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "The Royal Tomb"
			},
			subTitle: true,
			displayName: "The Royal Tomb"
		},
		"pvp_y_2-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Morocc"
			},
			subTitle: true,
			displayName: "PvP : Room Morocc"
		},
		"mag_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Nogg Road F1"
			},
			subTitle: true,
			displayName: "Nogg Road F1"
		},
		"pvp_y_6-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Alberta"
			},
			subTitle: true,
			displayName: "PvP : Room Alberta"
		},
		"pvp_y_5-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Alberta"
			},
			subTitle: true,
			displayName: "PvP : Room Alberta"
		},
		"iz_int.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Stranded Passenger Ship"
			},
			subTitle: true,
			displayName: "Stranded Passenger Ship"
		},
		"aldeg_cas04.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Wuerzburg Castle",
				subTitle: "Luina"
			},
			subTitle: true,
			displayName: "Wuerzburg Castle"
		},
		"teg_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Guild Underground Dungeon",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Guild Underground Dungeon"
		},
		"pvp_y_8-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Payon"
			},
			subTitle: true,
			displayName: "PvP : Room Payon"
		},
		"pvp_y_7-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Payon"
			},
			subTitle: true,
			displayName: "PvP : Room Payon"
		},
		"hero_in4.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Winter Garden",
				subTitle: "Herosria"
			},
			subTitle: true,
			displayName: "Herosria Winter Garden"
		},
		"ma_scene01.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Bakonawa Lake",
				subTitle: "Port Malaya"
			},
			subTitle: true,
			displayName: "Bakonawa Lake"
		},
		"pvp_y_6-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Payon"
			},
			subTitle: true,
			displayName: "PvP : Room Payon"
		},
		"nif_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Collapsed Opera House",
				subTitle: "Niflheim Dungeon - 2nd Floor"
			},
			subTitle: true,
			displayName: "Niflheim Dungeon - Collapsed Opera House"
		},
		"pvp_y_5-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Payon"
			},
			subTitle: true,
			displayName: "PvP : Room Payon"
		},
		"iz_int04.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Stranded Passenger Ship"
			},
			subTitle: true,
			displayName: "Stranded Passenger Ship"
		},
		"yuno_in04.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Republic Library"
			},
			subTitle: true,
			displayName: "Republic Library"
		},
		"ra_san01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Sanctuary North Area 1F",
				subTitle: "Rachel Temple"
			},
			subTitle: true,
			displayName: "Rachel Temple Sanctuary North Area 1F"
		},
		"pvp_n_3-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Four Room"
			},
			subTitle: true,
			displayName: "PvP : Four Room"
		},
		"dali.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Dimensional Rift"
			},
			subTitle: true,
			displayName: "Dimensional Rift"
		},
		"pvp_y_1-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Payon"
			},
			subTitle: true,
			displayName: "PvP : Room Payon"
		},
		"new_1-4.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"pvp_y_3-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Izlude"
			},
			subTitle: true,
			displayName: "PvP : Room Izlude"
		},
		"pvp_y_8-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Prontera"
			},
			subTitle: true,
			displayName: "PvP : Room Prontera"
		},
		"pvp_y_7-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Prontera"
			},
			subTitle: true,
			displayName: "PvP : Room Prontera"
		},
		"ice_dun03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Rachel Ice Cave 3F"
			},
			subTitle: true,
			displayName: "Rachel Ice Cave 3F"
		},
		"moc_pryd01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Inside Pyramid F1",
				subTitle: "Morroc"
			},
			subTitle: true,
			displayName: "Inside Pyramid F1"
		},
		"beach_dun.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Karu, the West Cave",
				subTitle: "Comodo"
			},
			subTitle: true,
			displayName: "Karu, the West Cave"
		},
		"pvp_n_6-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Copass"
			},
			subTitle: true,
			displayName: "PvP : Room Copass"
		},
		"pvp_n_5-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Copass"
			},
			subTitle: true,
			displayName: "PvP : Room Copass"
		},
		"ba_go.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Water Map (Palmist battlefield)"
			},
			subTitle: true,
			displayName: "Water Map (Palmist battlefield)"
		},
		"ba_lib.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Memory Corridor",
				subTitle: "Library"
			},
			subTitle: true,
			displayName: "Library Memory Corridor"
		},
		"pvp_n_4-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Rock On"
			},
			subTitle: true,
			displayName: "PvP : Room Rock On"
		},
		"pvp_n_3-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Copass"
			},
			subTitle: true,
			displayName: "PvP : Room Copass"
		},
		"alb2trea.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Alberta Island",
				subTitle: "Alberta"
			},
			subTitle: true,
			displayName: "Alberta Island"
		},
		"pvp_n_8-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Undercross"
			},
			subTitle: true,
			displayName: "PvP : Room Undercross"
		},
		"pvp_n_7-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Undercross"
			},
			subTitle: true,
			displayName: "PvP : Room Undercross"
		},
		"pvp_n_6-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Undercross"
			},
			subTitle: true,
			displayName: "PvP : Room Undercross"
		},
		"pvp_n_4-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Undercross"
			},
			subTitle: true,
			displayName: "PvP : Room Undercross"
		},
		"pvp_n_2-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Undercross"
			},
			subTitle: true,
			displayName: "PvP : Room Undercross"
		},
		"cmd_fild07.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Beacon Island, Pharos"
			},
			subTitle: true,
			displayName: "Beacon Island, Pharos"
		},
		"pvp_n_7-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Four Room"
			},
			subTitle: true,
			displayName: "PvP : Four Room"
		},
		"um_fild04.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Hoomga Jungle",
				subTitle: "Umbala"
			},
			subTitle: true,
			displayName: "Hoomga Jungle"
		},
		"pvp_n_6-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Four Room"
			},
			subTitle: true,
			displayName: "PvP : Four Room"
		},
		"pvp_n_5-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Four Room"
			},
			subTitle: true,
			displayName: "PvP : Four Room"
		},
		"pvp_n_8-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Rock On"
			},
			subTitle: true,
			displayName: "PvP : Room Rock On"
		},
		"payon.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Payon",
				subTitle: "Mountain City in the Rune-Midgarts Kingdom"
			},
			subTitle: true,
			displayName: "Payon Town"
		},
		"prt_fild09.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"job3_rune01.rsw": {
			displayName: "Inside of Rune Knight Templar"
		},
		"pvp_n_8-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Sandwich"
			},
			subTitle: true,
			displayName: "PvP : Room Sandwich"
		},
		"moc_fild16.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert"
		},
		"pvp_n_4-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Sandwich"
			},
			subTitle: true,
			displayName: "PvP : Room Sandwich"
		},
		"pvp_n_2-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Sandwich"
			},
			subTitle: true,
			displayName: "PvP : Room Sandwich"
		},
		"jor_back2.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Frozen Scale Plains"
			},
			subTitle: true,
			displayName: "Frozen Scale Plains"
		},
		"memohall.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Dimensional Guardian Memorial"
			},
			subTitle: true,
			displayName: "Dimensional Guardian Memorial"
		},
		"comodo.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Comodo",
				subTitle: "Beach Town in the Rune-Midgarts Kingdom"
			},
			subTitle: true,
			displayName: "Comodo, the Beach Town"
		},
		"knight_2-1.rsw": {
			displayName: "The Chivalry"
		},
		"que_qsch02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Fallacious Okolnir"
			},
			subTitle: true,
			displayName: "Fallacious Okolnir"
		},
		"pvp_y_4-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Payon"
			},
			subTitle: true,
			displayName: "PvP : Room Payon"
		},
		"lhz_que01.rsw": {
			displayName: "Inside Lighthalzen"
		},
		"mjolnir_07.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Mt.Mjolnir South Area"
			},
			subTitle: true,
			displayName: "Mt.Mjolnir South Area"
		},
		"new_3-1.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"ein_fild03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Einbroch Field"
			},
			subTitle: true,
			displayName: "Einbroch Field"
		},
		"gl_step.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Staircase Dungeon",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Glastheim Staircase Dungeon"
		},
		"jor_safty2.rsw": {
			backgroundBmp: "dungeon_s1",
			signName: {
				subTitle: "Safe Place"
			},
			subTitle: true,
			displayName: "Safe Place"
		},
		"gl_sew04.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Underground Waterway B4",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Glastheim Underground Waterway B4"
		},
		"ordeal_2-4.rsw": {
			displayName: "Battle Ordeal Mode"
		},
		"um_in.rsw": {
			displayName: "Inside Umbala"
		},
		"kh_rossi.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "The Rosimier's Mansion"
			},
			subTitle: true,
			displayName: "The Rosimier's Mansion"
		},
		"ein_fild08.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Einbroch Field"
			},
			subTitle: true,
			displayName: "Einbroch Field"
		},
		"moc_fild22.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Dimensional Rift",
				subTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert - Dimensional Rift"
		},
		"ordeal_3-1.rsw": {
			displayName: "Battle Ordeal Mode"
		},
		"force_2-2.rsw": {
			displayName: "Time Limit Fight"
		},
		"gl_church.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Monastery",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Glastheim Monastery"
		},
		"gef_fild11.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Geffen Field"
		},
		"1@pump.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Culvert"
			},
			subTitle: true,
			displayName: "Culvert"
		},
		"2@pump.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Culvert"
			},
			subTitle: true,
			displayName: "Culvert"
		},
		"job3_guil02.rsw": {
			displayName: "Inside the Old Warehouse"
		},
		"umbala.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Umbala",
				subTitle: "Wootan Tribe's Village"
			},
			subTitle: true,
			displayName: "Wootan Tribe's Village, Umbala"
		},
		"prt_are_in.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Waiting room"
			},
			subTitle: true,
			displayName: "Waiting room"
		},
		"thana_step.rsw": {
			signName: {
				mainTitle: "Thanatos Tower Upper Level - Stairs"
			},
			subTitle: true,
			displayName: "Thanatos Tower Upper Level - Stairs"
		},
		"izlu2dun.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Baylan Island",
				subTitle: "Izlude"
			},
			subTitle: true,
			displayName: "Baylan Island"
		},
		"izlude.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Izlude",
				subTitle: "Rune-Midgarts Kingdom"
			},
			subTitle: true,
			displayName: "Izlude, the Satellite City"
		},
		"payon_in02.rsw": {
			displayName: "Inside Payon"
		},
		"payon_in01.rsw": {
			displayName: "Inside Payon"
		},
		"pvp_n_3-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Rock On"
			},
			subTitle: true,
			displayName: "PvP : Room Rock On"
		},
		"1@twbs.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Separated Sanctuary"
			},
			subTitle: true,
			displayName: "Separated Sanctuary"
		},
		"yuno.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Yuno",
				subTitle: "Capital of Schwartzwald Republic"
			},
			subTitle: true,
			displayName: "Yuno, Capital of Schwartzwald Republic"
		},
		"morocc.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Morroc",
				subTitle: "Desert City in the Rune-Midgarts Kingdom"
			},
			subTitle: true,
			displayName: "Morroc Town"
		},
		"geffen_in.rsw": {
			displayName: "Inside Geffen"
		},
		"gef_tower.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Geffen Tower",
				subTitle: "Geffen"
			},
			subTitle: true,
			displayName: "Geffen Tower"
		},
		"pvp_n_1-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Copass"
			},
			subTitle: true,
			displayName: "PvP : Room Copass"
		},
		"gl_prison1.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Underground Prison B2",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Glastheim Underground Prison B2"
		},
		"1@sara.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Sara's Memory"
			},
			subTitle: true,
			displayName: "Sara's Memory"
		},
		"yuno_in02.rsw": {
			displayName: "Inside the Sage Castle"
		},
		"ordeal_1-4.rsw": {
			displayName: "Battle Ordeal Mode"
		},
		"hu_in01.rsw": {
			displayName: "Inside Hugel"
		},
		"ordeal_3-3.rsw": {
			displayName: "Battle Ordeal Mode"
		},
		"gef_fild06.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Geffen Field"
		},
		"abbey03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Cursed Abbey Dungeon B3",
				subTitle: "Nameless Island"
			},
			subTitle: true,
			displayName: "Cursed Abbey Dungeon B3"
		},
		"abbey01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Cursed Abbey Dungeon B1",
				subTitle: "Nameless Island"
			},
			subTitle: true,
			displayName: "Cursed Abbey Dungeon B1"
		},
		"ordeal_3-2.rsw": {
			displayName: "Battle Ordeal Mode"
		},
		"gl_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "The Lowest Cave in Glastheim B2",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "The Lowest Cave in Glastheim B2"
		},
		"ordeal_2-1.rsw": {
			displayName: "Battle Ordeal Mode"
		},
		"ordeal_1-1.rsw": {
			displayName: "Battle Ordeal Mode"
		},
		"pvp_y_8-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Izlude"
			},
			subTitle: true,
			displayName: "PvP : Room Izlude"
		},
		"lhz_dun04.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Somatology Laboratory 4th Basement"
			},
			subTitle: true,
			displayName: "Somatology Laboratory 4th Basement"
		},
		"force_1-3.rsw": {
			displayName: "Time Limit Fight"
		},
		"um_fild01.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Luluka Forest",
				subTitle: "Umbala"
			},
			subTitle: true,
			displayName: "Luluka Forest"
		},
		"gl_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "The Lowest Cave in Glastheim B1",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "The Lowest Cave in Glastheim B1"
		},
		"force_3-1.rsw": {
			displayName: "Time Limit Fight"
		},
		"force_2-1.rsw": {
			displayName: "Time Limit Fight"
		},
		"force_1-1.rsw": {
			displayName: "Time Limit Fight"
		},
		"wizard_3-1.rsw": {
			displayName: "Wizard Academy"
		},
		"prt_mz03_i.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Twisted Labyrinth Forest",
				subTitle: "Illusion"
			},
			subTitle: true,
			displayName: "Twisted Labyrinth Forest"
		},
		"ba_pw02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Sewage Treatment Plant"
			},
			subTitle: true,
			displayName: "Sewage Treatment Plant"
		},
		"wizard_1-1.rsw": {
			displayName: "Wizard Academy"
		},
		"kh_mansion.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Kiel Hyre's Mansion"
			},
			subTitle: true,
			displayName: "Kiel Hyre's Mansion"
		},
		"sword_3-1.rsw": {
			displayName: "Swordman Test Hall"
		},
		"in_orcs01.rsw": {
			displayName: "Inside Orc Village"
		},
		"int_land02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Remote Island"
			},
			subTitle: true,
			displayName: "Remote Island"
		},
		"knight_1-1.rsw": {
			displayName: "The Chivalry"
		},
		"in_hunter.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Hunter Guild"
			},
			subTitle: true,
			displayName: "Hunter Guild"
		},
		"hunter_3-1.rsw": {
			displayName: "Hunter Guild"
		},
		"1@slug.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Sticky Sea"
			},
			subTitle: true,
			displayName: "Sticky Sea"
		},
		"hunter_2-1.rsw": {
			displayName: "Hunter Guild"
		},
		"um_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Passage to a Foreign World",
				subTitle: "Umbala"
			},
			subTitle: true,
			displayName: "Passage to a Foreign World"
		},
		"nameless_in.rsw": {
			displayName: "Inside Nameless Island"
		},
		"prt_sewb1.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Culvert F1",
				subTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Culvert F1"
		},
		"prt_maze01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Labyrinth Forest F1",
				subTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Labyrinth Forest F1"
		},
		"lhz_d_n2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Void of Vicious Mind"
			},
			subTitle: true,
			displayName: "Void of Vicious Mind"
		},
		"pay_dun04.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Payon Cave F5",
				subTitle: "Payon Archer Village"
			},
			subTitle: true,
			displayName: "Payon Cave F5"
		},
		"pay_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Payon Cave F3",
				subTitle: "Payon Archer Village"
			},
			subTitle: true,
			displayName: "Payon Cave F3"
		},
		"mjo_dun02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Dead Pit F2",
				subTitle: "North of Mt. Mjolnir"
			},
			subTitle: true,
			displayName: "Mjolnir Dead Pit F2"
		},
		"moc_prydb1.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Thief Guild",
				subTitle: "Morroc"
			},
			subTitle: true,
			displayName: "Thief Guild"
		},
		"moc_pryd02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Inside Pyramid F2",
				subTitle: "Morroc"
			},
			subTitle: true,
			displayName: "Inside Pyramid F2"
		},
		"job_duncer.rsw": {
			displayName: "Comodo Theatre"
		},
		"sp_cor.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Cor",
				subTitle: "Special Border Area"
			},
			subTitle: true,
			displayName: "Special Border Area Cor"
		},
		"bat_c03.rsw": {
			subTitle: true,
			displayName: "Krieger von Midgard"
		},
		"in_sphinx3.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Morocc Sphinx B3",
				subTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Morocc Sphinx B3"
		},
		"iz_dun03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Undersea Tunnel B4",
				subTitle: "Baylan Island"
			},
			subTitle: true,
			displayName: "Undersea Tunnel B4"
		},
		"moc_fild03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert"
		},
		"p_track02.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Monster Race Arena"
			},
			subTitle: true,
			displayName: "Monster Race Arena"
		},
		"1@air2.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Airship"
			},
			subTitle: true,
			displayName: "Airship"
		},
		"yuno_in01.rsw": {
			displayName: "Inside Yuno"
		},
		"gef_dun00.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Geffen Dungeon B1"
			},
			subTitle: true,
			displayName: "Geffen Dungeon B1"
		},
		"anthell02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Ant Hell Dungeon F2",
				subTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Ant Hell Dungeon F2"
		},
		"new_4-4.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"1@pop2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Way Back Home",
				subTitle: "Half Moon in the Daylight"
			},
			subTitle: true,
			displayName: "Way Back Home"
		},
		"dic_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Kamidal Tunnel",
				subTitle: "Jotunheim"
			},
			subTitle: true,
			displayName: "Kamidal Tunnel"
		},
		"new_3-4.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"force_3-3.rsw": {
			displayName: "Time Limit Fight"
		},
		"um_fild02.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Hoomga Forest",
				subTitle: "Umbala"
			},
			subTitle: true,
			displayName: "Hoomga Forest"
		},
		"new_3-2.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"lou_in02.rsw": {
			displayName: "Inside Louyang"
		},
		"pvp_n_room.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Waiting Room"
			},
			subTitle: true,
			displayName: "PvP : Waiting Room"
		},
		"pay_fild10.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Payon Forest"
			},
			subTitle: true,
			displayName: "Payon Forest"
		},
		"cmd_fild04.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Kokomo Beach",
				subTitle: "Comodo"
			},
			subTitle: true,
			displayName: "Kokomo Beach"
		},
		"ayo_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Ayothaya Field"
			},
			subTitle: true,
			displayName: "Ayothaya Field"
		},
		"yuno_fild11.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Yuno Field"
			},
			subTitle: true,
			displayName: "Yuno Field"
		},
		"tur_d04_i.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Bleak Turtle Palace",
				subTitle: "Illusion"
			},
			subTitle: true,
			displayName: "Bleak Turtle Palace"
		},
		"pay_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Payon Forest"
			},
			subTitle: true,
			displayName: "Payon Forest"
		},
		"bat_b02.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Flavian",
				subTitle: "Battleground"
			},
			subTitle: true,
			displayName: "Flavian"
		},
		"pvp_n_5-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Sandwich"
			},
			subTitle: true,
			displayName: "PvP : Room Sandwich"
		},
		"aldeg_cas01.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Neuschwanstein Castle",
				subTitle: "Luina"
			},
			subTitle: true,
			displayName: "Neuschwanstein Castle"
		},
		"ba_maison.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Varmundt's Mansion Garden"
			},
			subTitle: true,
			displayName: "Varmundt's Mansion Garden"
		},
		"moc_fild12.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert"
		},
		"cmd_fild08.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Fortress Saint Darmain (East)"
			},
			subTitle: true,
			displayName: "Fortress Saint Darmain (East)"
		},
		"moc_fild11.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert"
		},
		"moc_fild07.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert"
		},
		"jupe_ele_r.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Juperos Elevator Room"
			},
			subTitle: true,
			displayName: "Juperos Elevator Room"
		},
		"moc_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert"
		},
		"x_prt.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Prontera",
				subTitle: "Beyond Dimension"
			},
			subTitle: true,
			displayName: "Prontera - Beyond Dimension"
		},
		"c_tower1.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Clock Tower F1",
				subTitle: "Aldebaran"
			},
			subTitle: true,
			displayName: "Clock Tower F1"
		},
		"priest_3-1.rsw": {
			displayName: "The Sanctum"
		},
		"gef_fild08.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Geffen Field"
		},
		"gef_fild07.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Geffen Field"
		},
		"gef_fild04.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Geffen Field"
		},
		"gef_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Geffen Field"
			},
			subTitle: true,
			displayName: "Geffen Field"
		},
		"prt_fild10.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"pvp_n_2-2.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Rock On"
			},
			subTitle: true,
			displayName: "PvP : Room Rock On"
		},
		"prt_fild05.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"prt_fild04.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"e_hugel.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Invaded Hugel"
			},
			subTitle: true,
			displayName: "Invaded Hugel"
		},
		"ein_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Einbroch Mine F1"
			},
			subTitle: true,
			displayName: "Einbroch Mine F1"
		},
		"prt_fild00.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"ba_bath.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Large Bath Meditathio"
			},
			subTitle: true,
			displayName: "Large Bath Meditathio"
		},
		"mjolnir_02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Mt.Mjolnir North Area"
			},
			subTitle: true,
			displayName: "Mt.Mjolnir North Area"
		},
		"x_ra.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Rachel",
				subTitle: "Beyond Dimension"
			},
			subTitle: true,
			displayName: "Rachel - Beyond Dimension"
		},
		"mjolnir_11.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Mt.Mjolnir South Area"
			},
			subTitle: true,
			displayName: "Mt.Mjolnir South Area"
		},
		"mjolnir_09.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Mt.Mjolnir South Foothills"
			},
			subTitle: true,
			displayName: "Mt.Mjolnir South Foothills"
		},
		"mjolnir_08.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Mt.Mjolnir South Area"
			},
			subTitle: true,
			displayName: "Mt.Mjolnir South Area"
		},
		"mjolnir_03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Mt.Mjolnir North Area"
			},
			subTitle: true,
			displayName: "Mt.Mjolnir North Area"
		},
		"pvp_n_8-3.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Four Room"
			},
			subTitle: true,
			displayName: "PvP : Four Room"
		},
		"cmd_fild06.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Fortress Saint Darmain (West)"
			},
			subTitle: true,
			displayName: "Fortress Saint Darmain (West)"
		},
		"pay_fild09.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Payon Forest"
			},
			subTitle: true,
			displayName: "Payon Forest"
		},
		"cmd_fild01.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Papuchicha Forest",
				subTitle: "Comodo"
			},
			subTitle: true,
			displayName: "Papuchicha Forest"
		},
		"beach_dun2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Luanda, the North Cave",
				subTitle: "Comodo"
			},
			subTitle: true,
			displayName: "Luanda, the North Cave"
		},
		"1@gl_he.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Contaminated Dimension",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Contaminated Dimension"
		},
		"pvp_y_6-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Prontera"
			},
			subTitle: true,
			displayName: "PvP : Room Prontera"
		},
		"cmd_in02.rsw": {
			displayName: "Inside Comodo"
		},
		"quiz_01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Quiz Revolution"
			},
			subTitle: true,
			displayName: "Quiz Revolution"
		},
		"guild_vs1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Guild Arena"
			},
			subTitle: true,
			displayName: "Guild Arena"
		},
		"guild_vs4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Guild Arena"
			},
			subTitle: true,
			displayName: "Guild Arena"
		},
		"guild_vs5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Guild Arena"
			},
			subTitle: true,
			displayName: "Guild Arena"
		},
		"rebel_in.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Clana Nemieri"
			},
			subTitle: true,
			displayName: "Clana Nemieri"
		},
		"tur_dun03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Turtle Village"
			},
			subTitle: true,
			displayName: "Turtle Village"
		},
		"tur_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Turtle Island Dungeon"
			},
			subTitle: true,
			displayName: "Turtle Island Dungeon"
		},
		"thor_v01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Thor Volcano Dungeon 1F"
			},
			subTitle: true,
			displayName: "Thor Volcano Dungeon 1F"
		},
		"tur_dun01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Turtle Island"
			},
			subTitle: true,
			displayName: "Turtle Island"
		},
		"lighthalzen.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Lighthalzen",
				subTitle: "City-State of Prosperity of the Schwartzwald Republic"
			},
			subTitle: true,
			displayName: "Lighthalzen, the City-State of Prosperity"
		},
		"bat_a02.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Tierra Valley",
				subTitle: "Battleground"
			},
			subTitle: true,
			displayName: "Tierra Valley"
		},
		"prtg_cas01.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Kriemhild Castle",
				subTitle: "Valkyrie Realm"
			},
			subTitle: true,
			displayName: "Kriemhild Castle"
		},
		"lhz_dun_n.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Tomb of the Fallen"
			},
			subTitle: true,
			displayName: "Tomb of the Fallen"
		},
		"1@mjo2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Forgotten Cavity",
				subTitle: "Mjolnir Mountains"
			},
			subTitle: true,
			displayName: "Mjolnir Mountains - Forgotten Cavity"
		},
		"aldeg_cas02.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Hohenschwangau Castle",
				subTitle: "Luina"
			},
			subTitle: true,
			displayName: "Hohenschwangau Castle"
		},
		"aldeg_cas03.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Nuernberg Castle",
				subTitle: "Luina"
			},
			subTitle: true,
			displayName: "Nuernberg Castle"
		},
		"pvp_y_1-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Alberta"
			},
			subTitle: true,
			displayName: "PvP : Room Alberta"
		},
		"dew_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Volcanic Island of Krakatoa",
				subTitle: "Dewata"
			},
			subTitle: true,
			displayName: "Volcanic Island of Krakatoa"
		},
		"payg_cas04.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Sacred Altar Castle",
				subTitle: "Greenwood Lake"
			},
			subTitle: true,
			displayName: "Sacred Altar Castle"
		},
		"job_hunte.rsw": {
			displayName: "Hunter Job Change Place"
		},
		"gld_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Guild Dungeon",
				subTitle: "Baldur"
			},
			subTitle: true,
			displayName: "Baldur Guild Dungeon"
		},
		"ba_chess.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Checkmate"
			},
			subTitle: true,
			displayName: "Checkmate"
		},
		"gld_dun03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Guild Dungeon",
				subTitle: "Valkyrie"
			},
			subTitle: true,
			displayName: "Valkyrie Guild Dungeon"
		},
		"morocc_in.rsw": {
			displayName: "Inside Morocc"
		},
		"sp_rudus.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Rudus F1",
				subTitle: "Experiment Waste Disposal"
			},
			subTitle: true,
			displayName: "Rudus, Experiment Waste Disposal F1"
		},
		"pvp_y_1-5.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Morocc"
			},
			subTitle: true,
			displayName: "PvP : Room Morocc"
		},
		"in_rogue.rsw": {
			displayName: "Inside the Rogue Guild"
		},
		"monk_test.rsw": {
			displayName: "Saint Capitolina Abbey"
		},
		"moro_cav.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Flame Cave"
			},
			subTitle: true,
			displayName: "Flame Cave"
		},
		"in_sphinx5.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Morocc Sphinx B5",
				subTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Morocc Sphinx B5"
		},
		"pvp_n_1-1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Sandwich"
			},
			subTitle: true,
			displayName: "PvP : Room Sandwich"
		},
		"gl_in01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Inside Glastheim",
				subTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Inside Glastheim"
		},
		"sec_pri.rsw": {
			displayName: "Room of Meditation (Valhalla Prison)"
		},
		"tha_t02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Museum",
				subTitle: "Thanatos Tower"
			},
			subTitle: true,
			displayName: "Thanatos Tower Museum"
		},
		"ecl_in02.rsw": {
			displayName: "Eclage Indoor"
		},
		"ama_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Tatami Maze"
			},
			subTitle: true,
			displayName: "Tatami Maze"
		},
		"gon_in.rsw": {
			displayName: "Inside Gonryun"
		},
		"gon_fild01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Gonryun Field"
			},
			subTitle: true,
			displayName: "Gonryun Field"
		},
		"gon_dun03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "The Peach Blossom Land",
				subTitle: "Gonryun"
			},
			subTitle: true,
			displayName: "The Peach Blossom Land"
		},
		"gon_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Temple of the Western Queen",
				subTitle: "Gonryun"
			},
			subTitle: true,
			displayName: "Temple of the Western Queen"
		},
		"prt_are01.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Arena"
			},
			subTitle: true,
			displayName: "Arena"
		},
		"um_fild03.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Kalala Swamp",
				subTitle: "Umbala"
			},
			subTitle: true,
			displayName: "Kalala Swamp"
		},
		"thana_scene01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Thanatos Tower Entrance"
			},
			subTitle: true,
			displayName: "Thanatos Tower Entrance"
		},
		"ama_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Amatsu Field"
			},
			subTitle: true,
			displayName: "Amatsu Field"
		},
		"prt_sewb2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Culvert F2",
				subTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Culvert F2"
		},
		"nif_fild02.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Valley",
				subTitle: "Niflheim"
			},
			subTitle: true,
			displayName: "Valley of Niflheim"
		},
		"nif_in.rsw": {
			displayName: "Inside Niflheim"
		},
		"valkyrie.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Valkyrie Hall",
				subTitle: "Hall of Honor"
			},
			subTitle: true,
			displayName: "Valkyrie Hall, the Hall of Honor"
		},
		"y_airport.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Yuno Airport"
			},
			subTitle: true,
			displayName: "Yuno Airport"
		},
		"lou_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Louyang Field"
			},
			subTitle: true,
			displayName: "Louyang Field"
		},
		"hu_fild06.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Hugel Field"
			},
			subTitle: true,
			displayName: "Hugel Field"
		},
		"lou_in01.rsw": {
			displayName: "Inside Louyang"
		},
		"new_4-1.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Training Ground"
			},
			subTitle: true,
			displayName: "Training Ground"
		},
		"jawaii_in.rsw": {
			displayName: "Inside Jawaii"
		},
		"gefenia01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Geffenia"
			},
			subTitle: true,
			displayName: "Geffenia"
		},
		"gefenia04.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Geffenia"
			},
			subTitle: true,
			displayName: "Geffenia"
		},
		"que_god01.rsw": {
			displayName: "Quest Map"
		},
		"ayo_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Ayothaya Field"
			},
			subTitle: true,
			displayName: "Ayothaya Field"
		},
		"ayo_dun01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Ancient Shrine Maze"
			},
			subTitle: true,
			displayName: "Ancient Shrine Maze"
		},
		"pay_d03_i.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Nightmare of Moonlight",
				subTitle: "Illusion"
			},
			subTitle: true,
			displayName: "Nightmare of Moonlight"
		},
		"yuno_fild08.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Kiel Hyre's Academy"
			},
			subTitle: true,
			displayName: "Kiel Hyre's Academy"
		},
		"pay_fild03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Payon Forest"
			},
			subTitle: true,
			displayName: "Payon Forest"
		},
		"um_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Carpenter's Shop",
				subTitle: "Umbala"
			},
			subTitle: true,
			displayName: "Carpenter's Shop in the Tree"
		},
		"turbo_n_4.rsw": {
			displayName: "Turbo Track Stadium"
		},
		"einbroch.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Einbroch",
				subTitle: "City of Steel in the Schwartzwald Republic"
			},
			subTitle: true,
			displayName: "Einbroch, the City of Steel"
		},
		"ein_in01.rsw": {
			displayName: "Inside Einbroch"
		},
		"airplane.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Airship"
			},
			subTitle: true,
			displayName: "Airship"
		},
		"job_star.rsw": {
			displayName: "The Sun, the Moon and the Stars"
		},
		"ein_fild07.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Einbroch Field"
			},
			subTitle: true,
			displayName: "Einbroch Field"
		},
		"prt_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Prontera Field"
			},
			subTitle: true,
			displayName: "Prontera Field"
		},
		"ba_lost.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Lost Farm Valley"
			},
			subTitle: true,
			displayName: "Lost Farm Valley"
		},
		"pvp_y_room.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Waiting Room"
			},
			subTitle: true,
			displayName: "PvP : Waiting Room"
		},
		"bat_c01.rsw": {
			subTitle: true,
			displayName: "Krieger von Midgard"
		},
		"lhz_fild03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Lighthalzen Field"
			},
			subTitle: true,
			displayName: "Lighthalzen Field"
		},
		"hero_ent2.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "2nd Hero's Gateway",
				subTitle: "Herosria"
			},
			subTitle: true,
			displayName: "Herosria 2nd Hero's Gateway"
		},
		"job3_guil03.rsw": {
			displayName: "Isolated mansion"
		},
		"yuno_pre.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Schwartzwald Government Buildings"
			},
			subTitle: true,
			displayName: "Schwartzwald Government Buildings"
		},
		"lhz_dun03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Somatology Laboratory F3"
			},
			subTitle: true,
			displayName: "Somatology Laboratory F3"
		},
		"lhz_dun02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Somatology Laboratory F2"
			},
			subTitle: true,
			displayName: "Somatology Laboratory F2"
		},
		"jupe_ele.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Juperos Elevator"
			},
			subTitle: true,
			displayName: "Juperos Elevator"
		},
		"ver_tunn.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Tunnel Outskirts",
				subTitle: "Verus"
			},
			subTitle: true,
			displayName: "Verus - Tunnel Outskirts"
		},
		"jupe_area1.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Juperos, Restricted Zone"
			},
			subTitle: true,
			displayName: "Juperos, Restricted Zone"
		},
		"juperos_01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Outside of the Juperos Ruins"
			},
			subTitle: true,
			displayName: "Outside of the Juperos Ruins"
		},
		"odin_tem01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Odin's Temple West Area"
			},
			subTitle: true,
			displayName: "Odin's Temple West Area"
		},
		"tha_t12.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Room of Hatred",
				subTitle: "Thanatos Tower Upper Level"
			},
			subTitle: true,
			displayName: "Thanatos Tower Upper Level - Room of Hatred"
		},
		"gld2_ald.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Tears of Hero",
				subTitle: "Louis Abyss Corridor"
			},
			subTitle: true,
			displayName: "Corridor of the Abyss: Tears of Hero"
		},
		"1@pop1.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Pope's Office",
				subTitle: "Half Moon in the Daylight"
			},
			subTitle: true,
			displayName: "Pope's Office"
		},
		"tha_t01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Museum Entrance",
				subTitle: "Thanatos Tower"
			},
			subTitle: true,
			displayName: "Thanatos Tower Museum Entrance"
		},
		"abyss_03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Underground Cave 3F",
				subTitle: "Abyss Lake"
			},
			subTitle: true,
			displayName: "Abyss Lake Underground Cave 3F"
		},
		"abyss_01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Underground Cave 1F",
				subTitle: "Abyss Lake"
			},
			subTitle: true,
			displayName: "Abyss Lake Underground Cave 1F"
		},
		"ba_2whs01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Upper Floor of Tartaros Storage"
			},
			subTitle: true,
			displayName: "Upper Floor of Tartaros Storage"
		},
		"mal_in02.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Inside the Ship",
				subTitle: "Malangdo"
			},
			subTitle: true,
			displayName: "Inside the Ship"
		},
		"auction_01.rsw": {
			displayName: "Auction Hall"
		},
		"hero_out2.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Lacusarium",
				subTitle: "Herosria"
			},
			subTitle: true,
			displayName: "Herosria Lacusarium"
		},
		"1@crd.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Volcano Island Corodo"
			},
			subTitle: true,
			displayName: "Volcano Island Corodo"
		},
		"kh_vila.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Kiel Hyre's Cottage"
			},
			subTitle: true,
			displayName: "Kiel Hyre's Cottage"
		},
		"kh_kiehl01.rsw": {
			displayName: "Kiel's Room"
		},
		"ein_fild05.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Einbroch Field"
			},
			subTitle: true,
			displayName: "Einbroch Field"
		},
		"ein_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Einbroch Field"
			},
			subTitle: true,
			displayName: "Einbroch Field"
		},
		"jupe_cave.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Juperos Dungeon Entrance"
			},
			subTitle: true,
			displayName: "Juperos Dungeon Entrance"
		},
		"arug_dun01.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Guild Dungeon",
				subTitle: "Arunafeltz"
			},
			subTitle: true,
			displayName: "Arunafeltz Guild Dungeon"
		},
		"iz_dun00.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Undersea Tunnel B1",
				subTitle: "Baylan Island"
			},
			subTitle: true,
			displayName: "Undersea Tunnel B1"
		},
		"prt_lib.rsw": {
			backgroundBmp: "noname",
			signName: {
				mainTitle: "Memorial of Royal Family",
				subTitle: "Prontera Royal Palace"
			},
			subTitle: true,
			displayName: "Memorial of Royal Family"
		},
		"hugel.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Hugel",
				subTitle: "Quaint Garden Village"
			},
			subTitle: true,
			displayName: "Hugel, the Quaint Garden Village"
		},
		"ra_san03.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Sanctuary East Area 1F",
				subTitle: "Rachel Temple"
			},
			subTitle: true,
			displayName: "Rachel Temple Sanctuary East Area 1F"
		},
		"1@glast.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Past Glastheim"
			},
			subTitle: true,
			displayName: "Past Glastheim"
		},
		"ra_fild04.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Audumla Grassland"
			},
			subTitle: true,
			displayName: "Audumla Grassland"
		},
		"ra_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Od Canyon"
			},
			subTitle: true,
			displayName: "Od Canyon"
		},
		"bossnia_01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bossnia"
			},
			subTitle: true,
			displayName: "Bossnia"
		},
		"1@iwp.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Frozen Scale Hill"
			},
			subTitle: true,
			displayName: "Frozen Scale Hill"
		},
		"ra_temple.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Sesilmir",
				subTitle: "Freya's Grand Temple"
			},
			subTitle: true,
			displayName: "Freya's Grand Temple (Sesilmir)"
		},
		"int_land01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Remote Island"
			},
			subTitle: true,
			displayName: "Remote Island"
		},
		"ra_in01.rsw": {
			displayName: "Inside Rachel"
		},
		"grademk.rsw": {
			backgroundBmp: "village_s1",
			signName: {
				subTitle: "Grade Enhancer"
			},
			subTitle: true,
			displayName: "Grade Enhancer"
		},
		"1@tnm2.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Demon's Tower - Top floor"
			},
			subTitle: true,
			displayName: "Demon's Tower - Top floor"
		},
		"turbo_room.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Waiting Room"
			},
			subTitle: true,
			displayName: "Waiting Room"
		},
		"bossnia_03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bossnia"
			},
			subTitle: true,
			displayName: "Bossnia"
		},
		"1@ma_c.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Buwaya Cave"
			},
			subTitle: true,
			displayName: "Buwaya Cave"
		},
		"schg_cas01.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Himinn Castle",
				subTitle: "Nidhoggur"
			},
			subTitle: true,
			displayName: "Himinn Castle"
		},
		"mosk_dun03.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Dremuci Forest",
				subTitle: "Moscovia"
			},
			subTitle: true,
			displayName: "Dremuci Forest"
		},
		"mosk_dun01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Les Forest"
			},
			subTitle: true,
			displayName: "Les Forest"
		},
		"te_prt_gld.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Gloria",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Gloria"
		},
		"que_qaru03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Fallacious Okolnir"
			},
			subTitle: true,
			displayName: "Fallacious Okolnir"
		},
		"que_qsch04.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Fallacious Okolnir"
			},
			subTitle: true,
			displayName: "Fallacious Okolnir"
		},
		"dic_fild02.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Bottom of Kamidal Mountain",
				subTitle: "Jotunheim"
			},
			subTitle: true,
			displayName: "Bottom of Kamidal Mountain"
		},
		"te_aldecas03.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Sorin Castle",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Sorin Castle"
		},
		"que_qsch03.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Fallacious Okolnir"
			},
			subTitle: true,
			displayName: "Fallacious Okolnir"
		},
		"te_aldecas04.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Bennit Castle",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Bennit Castle"
		},
		"moc_fild17.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Sograt Desert"
			},
			subTitle: true,
			displayName: "Sograt Desert"
		},
		"5@tower.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Endless Tower"
			},
			subTitle: true,
			displayName: "Endless Tower"
		},
		"que_dan02.rsw": {
			displayName: "Inside of the Abandoned House in Yuno"
		},
		"jor_dun03.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Inside the Snake's Nest"
			},
			subTitle: true,
			displayName: "Inside the Snake's Nest"
		},
		"spl_fild03.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Splendide Field"
			},
			subTitle: true,
			displayName: "Splendide Field"
		},
		"spl_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Splendide Field"
			},
			subTitle: true,
			displayName: "Splendide Field"
		},
		"mid_campin.rsw": {
			displayName: "Inside Midgard Expedition Camp"
		},
		"spl_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Splendide Field"
			},
			subTitle: true,
			displayName: "Splendide Field"
		},
		"splendide.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Splendide",
				subTitle: "Yotunheim Lapine Base"
			},
			subTitle: true,
			displayName: "Splendide, Lapine Base"
		},
		"job3_war02.rsw": {
			displayName: "Test room for Warlock Job Change"
		},
		"job3_war01.rsw": {
			displayName: "Test room for Warlock Job Change"
		},
		"1@def02.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Sky",
				subTitle: "Wave Dungeon"
			},
			subTitle: true,
			displayName: "Wave Dungeon - Sky"
		},
		"glast_01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Glastheim"
			},
			subTitle: true,
			displayName: "Glastheim"
		},
		"jor_ab02.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Abandoned Pit 2nd Floor"
			},
			subTitle: true,
			displayName: "Abandoned Pit 2nd Floor"
		},
		"gld_dun02_2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Guild Dungeon Underground F2",
				subTitle: "Louisa"
			},
			subTitle: true,
			displayName: "Louisa Dungeon 2F"
		},
		"mora.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Mora",
				subTitle: "Bifrost Raffle Village"
			},
			subTitle: true,
			displayName: "Raffle Village Mora"
		},
		"payg_cas03.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Holy Shadow Castle",
				subTitle: "Greenwood Lake"
			},
			subTitle: true,
			displayName: "Holy Shadow Castle"
		},
		"que_house_s.rsw": {
			displayName: "Strange House"
		},
		"iz_dun05.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Undersea Tunnel B6",
				subTitle: "Izlude"
			},
			subTitle: true,
			displayName: "Undersea Tunnel B6"
		},
		"que_ng.rsw": {
			displayName: "Unknown Place"
		},
		"que_lhz.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Somatology Laboratory 4th Basement"
			},
			subTitle: true,
			displayName: "Somatology Laboratory 4th Basement"
		},
		"gld2_gef.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Dead Man Hill",
				subTitle: "Brittoria Abyss Corridor"
			},
			subTitle: true,
			displayName: "Corridor of the Abyss: Dead Man Hill"
		},
		"bra_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Brasilis Field"
			},
			subTitle: true,
			displayName: "Brasilis Field"
		},
		"job_ko.rsw": {
			displayName: "Hidden Place"
		},
		"ma_zif04.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "Jeepney"
			},
			subTitle: true,
			displayName: "Inside of Jeepney"
		},
		"que_avan01.rsw": {
			displayName: "Avant's Laboratory"
		},
		"ecl_tdun04.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bifrost Tower 4F"
			},
			subTitle: true,
			displayName: "Bifrost Tower 4F"
		},
		"rachel.rsw": {
			backgroundBmp: "village",
			signName: {
				mainTitle: "Rachel",
				subTitle: "Capital of Arunafelz, the Study Nation"
			},
			subTitle: true,
			displayName: "Rachel, Capital of Arunafelz, the Study Nation"
		},
		"job3_rang01.rsw": {
			displayName: "Waiting room for Ranger Job Change"
		},
		"moc_prydn2.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Pyramid B2"
			},
			subTitle: true,
			displayName: "Morocc Pyramid B2 - Nightmare"
		},
		"iz_ng01.rsw": {
			displayName: "Ninja Tutorial Map"
		},
		"que_qsch01.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Fallacious Okolnir"
			},
			subTitle: true,
			displayName: "Fallacious Okolnir"
		},
		"te_aldecas01.rsw": {
			backgroundBmp: "siege",
			signName: {
				mainTitle: "Glaris Castle",
				subTitle: "Rune-Midgarts"
			},
			subTitle: true,
			displayName: "Rune-Midgarts"
		},
		"mosk_fild01.rsw": {
			backgroundBmp: "field",
			signName: {
				mainTitle: "Whale Island",
				subTitle: "Moscovia"
			},
			subTitle: true,
			displayName: "Whale Island"
		},
		"ecl_in03.rsw": {
			displayName: "Eclage Indoor"
		},
		"1@ecl.rsw": {
			displayName: "Eclage Interior"
		},
		"1@xm_d.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Horror Toy Factory"
			},
			subTitle: true,
			displayName: "Horror Toy Factory"
		},
		"1@dth2.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Bios Island"
			},
			subTitle: true,
			displayName: "Bios Island"
		},
		"moro_vol.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Flame Basin"
			},
			subTitle: true,
			displayName: "Flame Basin"
		},
		"ver_eju.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "East Ruins",
				subTitle: "Juperos"
			},
			subTitle: true,
			displayName: "Eastern Ruins of Juperos"
		},
		"1@lab.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Central Laboratory"
			},
			subTitle: true,
			displayName: "Central Laboratory"
		},
		"prt_pri00.rsw": {
			displayName: "Prontera Prison"
		},
		"job4_tro.rsw": {
			backgroundBmp: "field2_s2",
			signName: {
				mainTitle: "Empty Kvashir's Ship"
			},
			subTitle: true,
			displayName: "Empty Kvashir's Ship"
		},
		"pvp_y_3-4.rsw": {
			backgroundBmp: "noname_s2",
			signName: {
				mainTitle: "PvP Room Alberta"
			},
			subTitle: true,
			displayName: "PvP : Room Alberta"
		},
		"tur_dun06.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Underground Swamp Zone"
			},
			subTitle: true,
			displayName: "Underground Swamp Zone"
		},
		"1@gl_k2.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Chivalry F1",
				subTitle: "Old Glastheim"
			},
			subTitle: true,
			displayName: "Old Glastheim Chivalry F1"
		},
		"1@gl_prq.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "The Fall of Glastheim"
			},
			subTitle: true,
			displayName: "The Fall of Glastheim"
		},
		"pay_fild02.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Payon Forest"
			},
			subTitle: true,
			displayName: "Payon Forest"
		},
		"1@gl_kh.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Chivalry F1",
				subTitle: "Old Glastheim"
			},
			subTitle: true,
			displayName: "Old Glastheim Chivalry F2"
		},
		"2@gl_kh.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Chivalry F2",
				subTitle: "Old Glastheim"
			},
			subTitle: true,
			displayName: "Old Glastheim Chivalry F2"
		},
		"1@sthb.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Air Fortress - Inside"
			},
			subTitle: true,
			displayName: "Air Fortress - Inside"
		},
		"sp_rudus4.rsw": {
			backgroundBmp: "dungeon",
			signName: {
				mainTitle: "Rudus F4",
				subTitle: "Experiment Waste Disposal"
			},
			subTitle: true,
			displayName: "Rudus, Experiment Waste Disposal F4"
		},
		"1@ge_sn.rsw": {
			backgroundBmp: "dungeon_s2",
			signName: {
				mainTitle: "Geffen Night Arena"
			},
			subTitle: true,
			displayName: "Geffen Night Arena"
		},
		"gw_fild01.rsw": {
			backgroundBmp: "field_s2",
			signName: {
				mainTitle: "Gray Wolf Forest"
			},
			subTitle: true,
			displayName: "Gray Wolf Forest"
		},
		"moc_para01.rsw": {
			backgroundBmp: "village_s2",
			signName: {
				mainTitle: "Paradise"
			},
			subTitle: true,
			displayName: "Inside of Morocc Eden Group"
		},
		"que_dan01.rsw": {
			displayName: "Hugel Field"
		}
	};

	return MapInfo;
});
