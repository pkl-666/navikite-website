const SUPABASE_URL = "https://mqyvnapgxytypdywcnyr.supabase.co";
const SUPABASE_KEY = "sb_publishable_H0Ks40760ur08qWxvG-DOw_oMgXDuVa";
const token = new URLSearchParams(location.search).get("token");
let map;
let marker;
let latestTrip;

const el = (id) => document.getElementById(id);
const dateTime = (value) => value ? new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium", timeStyle: "short"
}).format(new Date(value)) : "—";
const relativeTime = (value) => {
  if (!value) return "No position";
  const seconds = Math.max(0, Math.round((Date.now() - new Date(value).getTime()) / 1000));
  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.round(seconds / 60)}m ago`;
  return `${Math.round(seconds / 3600)}h ago`;
};

async function fetchTrip() {
  if (!token || !/^[0-9a-f-]{36}$/i.test(token)) throw new Error("Invalid token");
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_community_trip_share`, {
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

function showTrip(trip) {
  latestTrip = trip;
  el("loading").hidden = true;
  el("error").hidden = true;
  el("trip-content").hidden = false;
  el("trip-area").textContent = trip.area_name;
  el("trip-route").textContent = trip.route_summary;
  el("trip-person").textContent = `Shared by ${trip.author_name}`;
  el("trip-status").textContent = trip.status;
  el("trip-status").className = `trip-status ${trip.status}`;
  el("trip-start").textContent = dateTime(trip.starts_at);
  el("trip-finish").textContent = dateTime(trip.expected_at);
  el("trip-party").textContent = trip.party_size;
  updatePositionAge();
  el("trip-note").textContent = trip.note || "";
  el("trip-note").hidden = !trip.note;
  updateMap(trip);
}

function updateMap(trip) {
  const hasPosition = Number.isFinite(trip.latitude) && Number.isFinite(trip.longitude);
  el("no-position").hidden = hasPosition;
  if (!hasPosition) return;
  const point = [trip.latitude, trip.longitude];
  if (!map) {
    map = L.map("trip-map", { zoomControl: true }).setView(point, 12);
    L.tileLayer("https://cache.kartverket.no/v1/wmts/1.0.0/toporaster/default/webmercator/{z}/{y}/{x}.png", {
      maxZoom: 18, attribution: "© Kartverket"
    }).addTo(map);
    marker = L.marker(point, {
      icon: L.divIcon({ className: "", html: '<div class="trip-marker"></div>', iconSize: [24,24], iconAnchor: [12,12] })
    }).addTo(map);
  } else {
    marker.setLatLng(point);
  }
}

function updatePositionAge() {
  const value = latestTrip?.location_updated_at;
  const age = value ? Math.max(0, (Date.now() - new Date(value).getTime()) / 1000) : Infinity;
  const state = age >= 600 ? "stale" : age >= 120 ? "delayed" : "fresh";
  const text = relativeTime(value);
  el("trip-updated").textContent = text;
  const badge = el("trip-map-age");
  badge.hidden = !value;
  badge.textContent = `Position updated ${text}`;
  badge.className = `trip-map-age ${state}`;
  const markerElement = marker?.getElement()?.querySelector(".trip-marker");
  if (markerElement) markerElement.className = `trip-marker ${state}`;
}

async function refresh() {
  try { showTrip(await fetchTrip()); }
  catch (_) {
    el("loading").hidden = true;
    el("trip-content").hidden = true;
    el("error").hidden = false;
  }
}

refresh();
setInterval(refresh, 20000);
setInterval(updatePositionAge, 1000);
