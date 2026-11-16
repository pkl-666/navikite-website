const SUPABASE_URL = "https://mqyvnapgxytypdywcnyr.supabase.co";
const SUPABASE_KEY = "sb_publishable_H0Ks40760ur08qWxvG-DOw_oMgXDuVa";
const token = new URLSearchParams(location.search).get("token");
const el = (id) => document.getElementById(id);

async function loadSpot() {
  if (!token || !/^[0-9a-f-]{36}$/i.test(token)) throw new Error("Invalid token");
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_navikite_spot_share`, {
    method: "POST",
    headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ p_token: token }),
    cache: "no-store"
  });
  if (!response.ok) throw new Error("Request failed");
  const rows = await response.json();
  if (!rows.length) throw new Error("Unavailable");
  return JSON.parse(rows[0].spot_json);
}

function render(spot) {
  const coordinate = [spot.latitude, spot.longitude];
  el("loading").hidden = true;
  el("spot-content").hidden = false;
  el("spot-name").textContent = spot.name;
  el("spot-coordinates").textContent = `${spot.latitude.toFixed(5)}, ${spot.longitude.toFixed(5)} · ${spot.elevation} m`;

  const map = L.map("route-map", { zoomControl: true }).setView(coordinate, 13);
  L.tileLayer("https://cache.kartverket.no/v1/wmts/1.0.0/toporaster/default/webmercator/{z}/{y}/{x}.png", {
    maxZoom: 18,
    attribution: "© Kartverket"
  }).addTo(map);
  L.circleMarker(coordinate, {
    radius: 9,
    color: "white",
    weight: 3,
    fillColor: "#08bee1",
    fillOpacity: 1
  }).addTo(map);
}

loadSpot().then(render).catch(() => {
  el("loading").hidden = true;
  el("error").hidden = false;
});
