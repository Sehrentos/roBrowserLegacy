/**
 * Preferences/PreferencesStorage.js
 *
 * Indexed DB Key Value Storage
 */
define(function () {
	'use strict';

	return new Promise(function (resolve, reject) {
		let db;
		const dbName = 'Preferences';
		const storeName = 'keyValueStore';
		const request = indexedDB.open(dbName, 1);

		request.onerror = function (event) {
			reject('Error opening database');
		};

		request.onupgradeneeded = function (event) {
			db = event.target.result;
			const objectStore = db.createObjectStore(storeName);
		};

		request.onsuccess = function (event) {
			db = event.target.result;
			resolve({
				setItem: function (key, value) {
					return new Promise(function (resolve, reject) {
						const transaction = db.transaction([storeName], 'readwrite');
						const objectStore = transaction.objectStore(storeName);
						const request = objectStore.put(value, key);

						request.onsuccess = function () {
							resolve();
						};

						request.onerror = function () {
							reject('Error setting item');
						};
					});
				},
				getItem: function (key) {
					return new Promise(function (resolve, reject) {
						const transaction = db.transaction([storeName], 'readonly');
						const objectStore = transaction.objectStore(storeName);
						const request = objectStore.get(key);

						request.onsuccess = function (event) {
							resolve(event.target.result);
						};

						request.onerror = function () {
							reject('Error getting item');
						};
					});
				},
				removeItem: function (key) {
					return new Promise(function (resolve, reject) {
						const transaction = db.transaction([storeName], 'readwrite');
						const objectStore = transaction.objectStore(storeName);
						const request = objectStore.delete(key);

						request.onsuccess = function () {
							resolve();
						};

						request.onerror = function () {
							reject('Error removing item');
						};
					});
				},
				clear: function () {
					return new Promise(function (resolve, reject) {
						const transaction = db.transaction([storeName], 'readwrite');
						const objectStore = transaction.objectStore(storeName);
						const request = objectStore.clear();

						request.onsuccess = function () {
							resolve();
						};

						request.onerror = function () {
							reject('Error clearing store');
						};
					});
				}
			});
		};
	});
});
