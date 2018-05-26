window.addEventListener('load', () => {
	if('serviceWorker' in navigator) {
		try {
			navigator.serviceWorker.register('service-worker.js');
			console.log('[ServiceWorker] registered');
		} catch (err) {
			console.log(err);
		}
	}
});

(function() {
	'use strict';

	var app = {
		isLoading: true,
		spinner: document.querySelector('.loader'),
		container: document.querySelector('.main'),
	};

	if (app.isLoading) {
		app.spinner.setAttribute('hidden', true);
		app.container.removeAttribute('hidden');
		app.isLoading = false;
	}
})();