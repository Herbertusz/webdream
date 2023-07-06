# Webdream

Indítás: `npm install` majd `npm start`
Böngészőben `http://localhost:9000`

Production build: `npm run build` (./build könyvtárba kerül)

Plusz feladatokat mind megcsináltam, pár megjegyzés:
- Safari-n nem tudtam tesztelni
- A header csak mobilon (992px alatt) fixed
- Az ikonokat (2-t kivéve) SVG sprite-tal oldottam meg, amik az edge IE módjában nem jelennek meg
- A térkép helyére leaflet-et (https://leafletjs.com) raktam be
