const translations = {
  no: {
    navWhy: "Hvorfor",
    navBeta: "Beta",
    betaButton: "Beta",
    heroEyebrow: "Kommer i 2026",
    heroTitle: "Navigasjon laget av og for snøkitere.",
    heroLead:
      "NaviKite er under aktiv beta-testing: retning, avstand og enkle oppdateringer når telefonen ligger pakket bort og fjellet krever fokus.",
    tryBeta: "Prøv beta",
    readMore: "Les mer",
    heroReadout: "25 HØYRE · 12.7 KILOMETER",
    stripVoiceTitle: "Stemme",
    stripVoiceText: "Oppdateringer uten å grave frem telefonen",
    stripDirectionTitle: "Retning",
    stripDirectionText: "Mot base, hytte, rute eller valgt mål",
    stripPlanText: "Vind, varsel og TurTips under testing",
    stripWatchTitle: "Klokke",
    stripWatchText: "Rask visuell guiding på håndleddet",
    whyEyebrow: "Hvorfor",
    whyTitle: "Laget for de øyeblikkene vanlige kartapper ikke passer helt.",
    whyP1:
      "På snøkite-tur er telefonen ofte i lomme eller armbånd, hendene er kalde, og det er ikke alltid man vil stoppe for å sjekke skjermen. NaviKite er laget for å gi korte, nyttige oppdateringer mens du holder flyten.",
    whyP2:
      "Appen fokuserer på situasjonsforståelse: retning, avstand, base, ruter, Apple Watch og en enkel planleggingsflate for vind og turforslag.",
    whyP3:
      "NaviKite er et navigasjonshjelpemiddel, ikke en erstatning for kart, kompass, værvurdering og vanlig fjellvett.",
    statusEyebrow: "Status",
    statusTitle: "Under utvikling. Testes i felt.",
    statusText:
      "NaviKite er ikke offentlig tilgjengelig ennå. Første mål er en liten beta med folk som faktisk bruker appen ute i vind, kulde og dårlig dekning.",
    panelIphone: "iPhone",
    panelWatch: "Watch",
    betaEyebrow: "Beta",
    betaTitle: "Interessert i å prøve beta-versjonen?",
    betaText:
      "Send en kort e-post med hvem du er, hvor du kiter, og hvilken iPhone / Apple Watch du bruker.",
    emailBeta: "Send e-post",
    footerText: "Beta-konsept av PK Lunderød · 2026",
  },
  en: {
    navWhy: "Why",
    navBeta: "Beta",
    betaButton: "Beta",
    heroEyebrow: "Coming in 2026",
    heroTitle: "Navigation made by and for snowkiters.",
    heroLead:
      "NaviKite is in active beta testing: direction, distance and simple readouts when the phone is packed away and the mountain needs your focus.",
    tryBeta: "Try beta",
    readMore: "Read more",
    heroReadout: "25 RIGHT · 12.7 KILOMETERS",
    stripVoiceTitle: "Voice",
    stripVoiceText: "Readouts without digging out the phone",
    stripDirectionTitle: "Direction",
    stripDirectionText: "To base, hut, route or chosen destination",
    stripPlanText: "Wind, forecast and Trip Tips in testing",
    stripWatchTitle: "Watch",
    stripWatchText: "Fast visual guidance on your wrist",
    whyEyebrow: "Why",
    whyTitle: "Built for the moments when normal map apps do not quite fit.",
    whyP1:
      "On a snowkite trip, the phone is often in a pocket or armband, hands are cold, and stopping to check the screen is not always what you want. NaviKite is built to give short, useful readouts while you keep moving.",
    whyP2:
      "The app focuses on situational awareness: direction, distance, base, routes, Apple Watch and a simple planning surface for wind and trip ideas.",
    whyP3:
      "NaviKite is a navigation aid, not a replacement for maps, compass, weather judgement and sound mountain sense.",
    statusEyebrow: "Status",
    statusTitle: "In development. Tested in the field.",
    statusText:
      "NaviKite is not publicly available yet. The first goal is a small beta with people who actually use the app outside in wind, cold and poor coverage.",
    panelIphone: "iPhone",
    panelWatch: "Watch",
    betaEyebrow: "Beta",
    betaTitle: "Interested in trying the beta version?",
    betaText:
      "Send a short email with who you are, where you kite, and which iPhone / Apple Watch you use.",
    emailBeta: "Send email",
    footerText: "Beta concept by PK Lunderød · 2026",
  },
};

let currentLanguage = "no";

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[language][key];
    if (value) node.textContent = value;
  });

  const flag = document.querySelector("[data-language-flag]");
  const label = document.querySelector("[data-language-label]");
  const toggle = document.querySelector("[data-language-toggle]");
  if (!flag || !label || !toggle) return;

  if (language === "no") {
    flag.textContent = "🇬🇧";
    label.textContent = "English";
    toggle.setAttribute("aria-label", "Switch to English");
  } else {
    flag.textContent = "🇳🇴";
    label.textContent = "Norsk";
    toggle.setAttribute("aria-label", "Bytt til norsk");
  }
}

document.querySelector("[data-language-toggle]")?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "no" ? "en" : "no");
});

applyLanguage("no");
