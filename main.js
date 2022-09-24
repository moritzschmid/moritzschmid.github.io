
let pwaSupport = false;

if ("serviceWorker" in navigator) {
	pwaSupport = true; // iOS 11 oder neuer
	navigator.serviceWorker.register ("/service-worker.js").then (function (result) {
		console.log ("Service Worker registriert");
	}, function (error) {
		console.log ("Service Worker Registrierung fehlgeschlagen " + error);
	});
} else {
	console.log ("Service Worker nicht unterstützt");
}

window.onload = function () {
	if (pwaSupport) {
		let platform = navigator.platform;
		if (platform === 'iPhone' || platform === 'iPad') {
			// Die App ist noch nicht installiert
			if (!navigator.standalone) {
				let lastShown = parseInt (localStorage.getItem ('lastShown'));
				let now = new Date().getTime ();
				// lastShown NaN – App wurde noch nie geladen und Anweisung seit 7 Tagen nicht gezeigt
				if (isNaN (lastShown) || (lastShown + 1000 * 60 * 60 * 24 * 0.1) <= now) {
					document.getElementById("instructions").style.display = "block";
					localStorage.setItem ("lastShown", now);
				}
			}
		}
	}
}

function hideInstructions () {
	document.getElementById("instructions").style.display = "none";
}