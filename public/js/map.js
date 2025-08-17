mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: [77.209, 28.6139],
  // starting position [lng, lat] -->
  zoom: 9, // starting zoom
});

console.log(coordinates);

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates) // Listing.geometry.coordinates
  .addTo(map);
