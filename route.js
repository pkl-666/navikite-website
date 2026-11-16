const SUPABASE_URL = "https://mqyvnapgxytypdywcnyr.supabase.co";
const SUPABASE_KEY = "sb_publishable_H0Ks40760ur08qWxvG-DOw_oMgXDuVa";
const token = new URLSearchParams(location.search).get("token");
const el = (id) => document.getElementById(id);

const distance = (a, b) => {
  const radius = 6371000;
  const rad = (value) => value * Math.PI / 180;
  const dLat = rad(b.latitude - a.latitude);
  const dLon = rad(b.longitude - a.longitude);
  const value = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.latitude)) * Math.cos(rad(b.latitude)) * Math.sin(dLon / 2) ** 2;
  return 2 * radius * Math.asin(Math.sqrt(value));
};

async function loadRoute() {
  if (!token || !/^[0-9a-f-]{36}$/i.test(token)) throw new Error("Invalid token");
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_navikite_route_share`, {
    method: "POST",
    headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ p_token: token }),
    cache: "no-store"
  });
  if (!response.ok) throw new Error("Request failed");
  const rows = await response.json();
  if (!rows.length) throw new Error("Unavailable");
  return JSON.parse(rows[0].route_json);
}

function render(route) {
  const points = route.waypoints || [];
  const meters = points.slice(1).reduce((sum, point, index) => sum + distance(points[index], point), 0);
  el("loading").hidden = true;
  el("route-content").hidden = false;
  el("route-name").textContent = route.name;
  el("route-stats").textContent = `${points.length} waypoints · ${meters >= 1000 ? `${(meters / 1000).toFixed(1)} km` : `${Math.round(meters)} m`}`;
  points.forEach((point, index) => {
    const item = document.createElement("li");
    item.innerHTML = `<b>${index + 1}</b><span><strong></strong><small></small></span>`;
    item.querySelector("strong").textContent = point.name;
    item.querySelector("small").textContent = `${point.latitude.toFixed(5)}, ${point.longitude.toFixed(5)}`;
    el("route-points").appendChild(item);
  });
  const coordinates = points.map((point) => [point.latitude, point.longitude]);
  const map = L.map("route-map", { zoomControl: true });
  L.tileLayer("https://cache.kartverket.no/v1/wmts/1.0.0/toporaster/default/webmercator/{z}/{y}/{x}.png", { maxZoom: 18, attribution: "© Kartverket" }).addTo(map);
  const line = L.polyline(coordinates, { color: "#08bee1", weight: 5 }).addTo(map);
  coordinates.forEach((point, index) => L.circleMarker(point, { radius: 7, color: "white", weight: 3, fillColor: index === 0 ? "#20ca68" : "#ff8a24", fillOpacity: 1 }).addTo(map));
  map.fitBounds(line.getBounds(), { padding: [28, 28], maxZoom: 14 });
}

loadRoute().then(render).catch(() => {
  el("loading").hidden = true;
  el("error").hidden = false;
});
