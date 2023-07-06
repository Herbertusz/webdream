import '../scss/styles.scss'

window.onload = function() {

  document.querySelector('header .hamburger').addEventListener('click', () => {
    alert('Not implemented!');
  });

  const coord = [47.50269870247024, 19.061724415228607];

  const map = L.map('map').setView(coord, 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  L.marker(coord).addTo(map);

};
