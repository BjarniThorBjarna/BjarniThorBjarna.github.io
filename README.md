# BjarniThorBjarna.github.io
Personal website hosted with GitHub Pages

Visit https://bjarnithorbjarna.github.io/ for the app launcher. The **My
weather** tile opens `me/my-weather.html`; other top-level HTML apps are
listed automatically. Apps under `/me/` are available from the private app
launcher at https://bjarnithorbjarna.github.io/me/.
Weather updates require an internet connection.

To add another app to the main launcher, upload its HTML file to the `main`
branch. Changes publish automatically through GitHub Pages.

**Handheld** (`handheld/`) is the Flutter web build of the Handheld app for
Business Central, built with `flutter build web --release --base-href /handheld/`.
`handheld.html` gives it a tile in the launcher. Signing in to BC needs
`https://bjarnithorbjarna.github.io/handheld/` as a single-page application
redirect URI in the app's Entra registration; the demo works without it.
