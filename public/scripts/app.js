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