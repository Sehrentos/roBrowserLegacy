/**
 * Core/Preferences.js
 *
 * Store informations in device storage (window position, noctrl, etc.)
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
define(['./Context', 'Preferences/PreferencesStorage'], function (Context, storagePromise) {
	'use strict';

	const Storage = Context.Is.APP ?
		window.chrome.storage.local :
		{
			get: async function Get(key, fn) {
				const out = {};
				const storage = await storagePromise;
				const value = await storage.getItem(key);
				out[key] = value;
				fn(out);
			},
			set: async function Set(obj, fn) {
				const keys = Object.keys(obj);
				let i, count;

				const storage = await storagePromise;

				for (i = 0, count = keys.length; i < count; ++i) {
					await storage.setItem(keys[i], obj[keys[i]]);
				}

				if (fn) {
					fn();
				}
			}
		};


	/**
	 * Get back values
	 *
	 * @param {string} key
	 * @param {mixed} default value
	 * @param {number} optional version
	 */
	function get(key, def, version) {
		Storage.get(key, function (value) {
			var data, keys;
			var i, count;

			version = version || 0.0;

			// Not existing, storing it
			if (!value[key] || value[key]._version !== version) {
				save(def);
				return;
			}

			data = value[key];
			data._key = key;
			data._version = version;
			data.save = selfSave;

			keys = Object.keys(data);
			count = keys.length;

			for (i = 0; i < count; ++i) {
				def[keys[i]] = data[keys[i]];
			}
		});

		def._key = key;
		def._version = version;
		def.save = selfSave;

		return def;
	}


	/**
	 * Save value in storage
	 *
	 * @param {string} key
	 * @param {object} value to store
	 */
	function save(data) {
		var key = data._key;
		delete data._key;
		delete data.save;

		var store = {};
		store[key] = JSON.parse(JSON.stringify(data));

		Storage.set(store);

		data._key = key;
		data.save = selfSave;
	}


	/**
	 * Save from object
	 */
	function selfSave() {
		save(this);
	}


	/**
	 *
	 */
	return {
		get: get,
		save: save
	};
});
