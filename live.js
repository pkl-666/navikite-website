const SUPABASE_URL = "https://mqyvnapgxytypdywcnyr.supabase.co";
const SUPABASE_KEY = "sb_publishable_H0Ks40760ur08qWxvG-DOw_oMgXDuVa";
const token = new URLSearchParams(location.search).get("token");
let map;
let marker;
let latestPosition;

const el = (id) => document.getElementById(id);
const relativeTime = (value) => {
  if (!value) return "No position";
  const seconds = Math.max(0, Math.round((Date.now() - new Date(value).getTime()) / 1000));
  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.round(seconds / 60)}m ago`;
  return `${Math.round(seconds / 3600)}h ago`;
};

async function fetchPosition() {
  if (!token || !/^[0-9a-f-]{36}$/i.test(token)) throw new Error("Invalid token");
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_community_live_share`, {
    method: "POST",
    headers: { "apikey": SUPABASE_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ p_token: token }),
    cache: "no-store"
  });
  if (!response.ok) throw new Error("Request failed");
  const rows = await response.json();
  if (!rows.length) throw new Error("Unavailable");
  return rows[0];
}

function showPosition(position) {
  latestPosition = position;
  el("loading").hidden = true;
  el("error").hidden = true;
  el("live-content").hidden = false;
  el("live-person").textContent = position.author_name;
  const point = [position.latitude, position.longitude];
  if (!map) {
    map = L.map("live-map", { zoomControl: true }).setView(point, 12);
    L.tileLayer("https://cache.kartverket.no/v1/wmts/1.0.0/toporaster/default/webmercator/{z}/{y}/{x}.png", {
      maxZoom: 18, attribution: "© Kartverket"
    }).addTo(map);
    marker = L.marker(point, {
      icon: L.divIcon({ className: "", html: '<div class="live-marker"></div>', iconSize: [24,24], iconAnchor: [12,12] })
    }).addTo(map);
  } else {
    marker.setLatLng(point);
  }
  updateAge();
}

function updateAge() {
  const value = latestPosition?.location_updated_at;
  if (!value) return;
  const age = Math.max(0, (Date.now() - new Date(value).getTime()) / 1000);
  const state = age >= 600 ? "stale" : age >= 120 ? "delayed" : "fresh";
  const text = relativeTime(value);
  el("live-age").textContent = `Updated ${text}`;
  el("live-age").className = `live-age ${state}`;
  el("live-map-age").textContent = `Position updated ${text}`;
  el("live-map-age").className = `live-map-age ${state}`;
  const markerElement = marker?.getElement()?.querySelector(".live-marker");
  if (markerElement) markerElement.className = `live-marker ${state}`;
}

async function refresh() {
  try { showPosition(await fetchPosition()); }
  catch (_) {
    el("loading").hidden = true;
    el("live-content").hidden = true;
    el("error").hidden = false;
  }
}

refresh();
setInterval(refresh, 20000);
setInterval(updateAge, 1000);
