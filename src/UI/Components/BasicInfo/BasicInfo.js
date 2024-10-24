/**
 * UI/Components/BasicInfo/BasicInfo.js
 *
 * Chararacter Basic information windows
 *
 * Note: For different versions, please use different Object names and main div IDs to avoid conflicts in settings and styles
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 *
 */
define(function (require)
{
	'use strict';
	
	var publicName = 'BasicInfo';
	/** @type {UIComponent} */
	var BasicInfo = require('./BasicInfo/BasicInfo');
	/** @type {UIComponent} */
	var BasicInfoV0 = require('./BasicInfoV0/BasicInfoV0');
	/** @type {UIComponent} */
	var BasicInfoV3 = require('./BasicInfoV3/BasicInfoV3');
	/** @type {UIComponent} */
	var BasicInfoV4 = require('./BasicInfoV4/BasicInfoV4');
	/** @type {UIComponent} */
	var BasicInfoV5 = require('./BasicInfoV5/BasicInfoV5');
	/** @type {UIVersionManager} */
	var UIVersionManager = require('UI/UIVersionManager');
	
	var versionInfo = {
		default: BasicInfoV0,
		common: {
			20200520:	BasicInfoV5, // not sure the exact client date that started supporting 4th Jobs
			20180124:	BasicInfoV4,
			20160101:	BasicInfoV3,
			20090601:	BasicInfo,
		},
		re: {
			
		},
		prere:{
			
		},
		job: {
			Fourth_Class: BasicInfoV5,
			default: BasicInfoV4
		}
	};
	
	var BasicInfoController = UIVersionManager.getUIController(publicName, versionInfo);
	
	return BasicInfoController;
});
