/**
 * Renderer/Renderer.js
 *
 * Rendering sprite in 2D or 3D context
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
define(function (/** @type {Require} */require) {
	'use strict';

	/** @type {Utils.WebGL} */var WebGL = require('Utils/WebGL');
	/** @type {JQueryStatic} */var jQuery = require('Utils/jquery');
	/** @type {Utils.glMatrix} */var glMatrix = require('Utils/gl-matrix');
	/** @type {Core.Configs} */var Configs = require('Core/Configs');
	/** @type {Preferences.Graphics} */var GraphicsSettings = require('Preferences/Graphics');
	/** @type {Core.Events} */var Events = require('Core/Events');
	/** @type {UI.Background} */var Background = require('UI/Background');
	/** @type {UI.CursorManager} */var Cursor = require('UI/CursorManager');
	/** @type {Controls.MouseEventHandler} */var Mouse = require('Controls/MouseEventHandler');
	/** @type {Renderer.Camera} */var Camera = require('Renderer/Camera');
	/** @type {Engine.SessionStorage} */var Session = require('Engine/SessionStorage');
	var mat4 = glMatrix.mat4;
	var getModule = require;


	/**
	 * Renderer Namespace
	 * type {Renderer.Renderer}
	 */
	var Renderer = {};


	/**
	 * @var {HTML5 canvas}
	 */
	Renderer.canvas = document.createElement('canvas');


	/**
	 * @var {WebGLContext}
	 */
	Renderer.gl = null;


	/**
	 * @var {integer} screen width
	 */
	Renderer.width = 0;


	/**
	 * @var {integer} screen height
	 */
	Renderer.height = 0;


	/**
	 * @var {integer} store the last time the windows was resize (to avoid to resize the context on each 16ms)
	 */
	Renderer.resizeTimeOut = 0;


	/**
	 * @var {long} unique identifier of the current render callback (can be used for cancelAnimationFrame/clearInterval)
	 */
	Renderer.updateId = 0;


	/**
	 * @var {integer} frame rate limit
	 */
	Renderer.frameLimit = GraphicsSettings.fpslimit;


	/**
	 * @var {integer} game tick
	 */
	Renderer.tick = 0;

	/**
	 * @var {float} vertical field of view in degrees
	 */
	Renderer.vFov = 15.0;

	/**
	 * @var {function[]} callbacks to execute
	 */
	Renderer.renderCallbacks = [];


	/**
	 * Shime for requestAnimationFrame
	 */
	//@ts-ignore
	var _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function (callback) {
			return window.setTimeout(callback, 1000 / 60);
		};


	/**
	 * Shime for cancelAnimationFrame
	 */
	//@ts-ignore
	var _cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame ||
		function (updateId) {
			window.clearTimeout(updateId);
		};


	/**
	 * Initialize renderer
	 */
	Renderer.init = function init(param) {
		if (!Renderer.gl) {
			Renderer.canvas.style.position = 'absolute';
			Renderer.canvas.style.top = '0px';
			Renderer.canvas.style.left = '0px';
			Renderer.canvas.style.zIndex = '0';

			Renderer.gl = WebGL.getContext(Renderer.canvas, param);

			jQuery(window)
				.resize(Renderer.onResize.bind(this))
				.on('contextmenu', function () {
					return false;
				});

			Renderer.render(null);
			Renderer.resize();
		}

		var gl = Renderer.gl;

		gl.clearDepth(1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);

		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	};


	/**
	 * Show renderer
	 */
	Renderer.show = function show() {
		if (!Renderer.canvas.parentNode) {
			document.body.appendChild(Renderer.canvas);
		}
	};


	/**
	 * Remove renderer
	 */
	Renderer.remove = function remove() {
		if (Renderer.canvas.parentNode) {
			document.body.removeChild(Renderer.canvas);
		}
	};


	/**
	 * Get back WebGL Context
	 */
	Renderer.getContext = function getContext() {
		return Renderer.gl;
	};


	/**
	 * Ask for resizing the window, avoid flooding the function (can flood the context), wait for 500ms each time
	 */
	Renderer.onResize = function onResize() {
		Events.clearTimeout(Renderer.resizeTimeOut);
		Renderer.resizeTimeOut = Events.setTimeout(Renderer.resize.bind(this), 500);
	};


	/**
	 * Resizing window
	 */
	Renderer.resize = function resize() {
		var width, height, quality, dpr = window.devicePixelRatio || 1;

		width = window.innerWidth || document.body.offsetWidth;
		height = window.innerHeight || document.body.offsetHeight;

		Mouse.screen.width = Renderer.width = width;
		Mouse.screen.height = Renderer.height = height;

		quality = Configs.get('quality', 100) / 100;
		width *= quality;
		height *= quality;

		Renderer.canvas.width = width * dpr;
		Renderer.canvas.height = height * dpr;
		Renderer.canvas.style.width = Renderer.width + 'px';
		Renderer.canvas.style.height = Renderer.height + 'px';

		Renderer.gl.viewport(0, 0, width * dpr, height * dpr);

		mat4.perspective(Renderer.vFov, width / height, 1, 1000, Camera.projection);

		Background.resize(Renderer.width, Renderer.height);

		/*
		* Note about this hack:
		 * require.js parse function and search for "require()" string.
		 * Once done, it get the files to use as dependencies for this function and
		 * load them before executing the function.
		 *
		 * As UI/UIManager was loaded as dependencies before Renderer/Renderer
		 * and in the file UI/UIManager, there were a dependencies for Renderer/Renderer,
		 * we just cause a big circular dependencies resulting as having Renderer variable as null in
		 * UI/UIManager.
		 */
		getModule('UI/UIManager').fixResizeOverflow(Renderer.width, Renderer.height);
	};


	/**
	 * @var {boolean} Rendering ?
	 */
	Renderer.rendering = false;


	/**
	 * Rendering scene
	 */
	Renderer._render = function render(timeDelta) {
		var newTick = Date.now();

		if (Renderer.frameLimit > 0) {
			if (typeof (timeDelta) !== 'undefined') {
				_cancelAnimationFrame(Renderer.updateId);
			}

			if ((100 / (newTick - Renderer.tick)) > (1000 / Renderer.frameLimit)) return;
		}
		else {
			if (typeof (timeDelta) === 'undefined') {
				clearInterval(Renderer.updateId);
			}

			Renderer.updateId = _requestAnimationFrame(Renderer._render.bind(this), Renderer.canvas);
		}

		// Increment serverTick with delta
		Session.serverTick += (newTick - Renderer.tick);

		// TODO: clamp this so we don't accumulate a huge delta if we're set inactive for a while
		Renderer.tick = newTick;

		// Execute events
		Events.process(Renderer.tick);

		var i, count;

		for (i = 0, count = Renderer.renderCallbacks.length; i < count; ++i) {
			Renderer.renderCallbacks[i](Renderer.tick, Renderer.gl);
		}

		Cursor.render(Renderer.tick);
	};


	/**
	 * Start rendering
	 */
	Renderer.render = function renderCallback(fn) {
		if (fn) {
			Renderer.renderCallbacks.push(fn);
		}

		if (!Renderer.rendering) {
			Renderer.rendering = true;
			if (Renderer.frameLimit > 0) {
				Renderer.updateId = window.setInterval(Renderer._render.bind(this), 1000 / Renderer.frameLimit);
			}
			else {
				Renderer._render();
			}
		}
	};


	/**
	 * Stop rendering
	 */
	Renderer.stop = function stop(fn) {
		// No callback specified, remove all
		if (!arguments.length) {
			Renderer.renderCallbacks.length = 0;
			return;
		}

		var pos = Renderer.renderCallbacks.indexOf(fn);
		if (pos > -1) {
			Renderer.renderCallbacks.splice(pos, 1);
		}
	};


	/**
	 * Export
	 * @type {Renderer.Renderer}
	 */
	return Renderer;
});
