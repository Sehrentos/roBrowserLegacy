/**
 * UI/Components/CardIllustration/CardIllustration.js
 *
 * Card image
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
define(function(require)
{
	'use strict';


	/** @type {DB.DBManager} */var DB = require('DB/DBManager');
	/** @type {Core.Client} */var Client = require('Core/Client');
	/** @type {UI.UIManager} */var UIManager = require('UI/UIManager');
	/** @type {UI.UIComponent<UI.Component.CardIllustration>} */var UIComponent = require('UI/UIComponent');
	/** @type {string} */var htmlText = require('text!./CardIllustration.html');
	/** @type {string} */var cssText = require('text!./CardIllustration.css');


	/**
	 * Create Component
	 */
	var CardIllustration = new UIComponent( 'CardIllustration', htmlText, cssText );


	/**
	 * Initialize events
	 */
	CardIllustration.init = function init()
	{
		this.ui.find('.close').click(this.remove.bind(this));
		this.draggable();
	};


	/**
	 * Show image
	 *
	 * @param {object} item
	 */
	CardIllustration.setCard = function setCard( item )
	{
		this.ui.find('.titlebar .text').text( item.identifiedDisplayName );
		this.ui.find('.content').css('backgroundImage', 'none' );

		Client.loadFile( DB.INTERFACE_PATH + 'cardbmp/' + item.illustResourcesName + '.bmp', function(data){
			this.ui.find('.content').css('backgroundImage', 'url('+data+')' );
		}.bind(this));
	};


	/**
	 * Create component and export it
	 */
	return UIManager.addComponent(CardIllustration);
});
