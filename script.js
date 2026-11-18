const APP_STORE_URL = "https://apps.apple.com/no/app/navikite/id6775079826?l=nb";

const translations = {
  no: {
    navWhy: "Hvorfor",
    navBeta: "App Store",
    appStoreButton: "App Store",
    guideNav: "Guide",
    heroEyebrow: "NaviKite",
    heroTitle: "Navigasjon laget av og for snøkitere.",
    heroLead:
      "NaviKite gir retning, avstand og enkle oppdateringer når telefonen ligger pakket bort og fjellet krever fokus. På sikt ønsker vi også å vise oppdaterte hensynssoner, slik at kitere lettere kan planlegge rundt sårbare villreinområder og gjeldende lokale råd.",
    downloadApp: "Last ned i App Store",
    videoEyebrow: "Videoguide",
    videoTitle: "Se NaviKite i bruk.",
    videoText: "En praktisk gjennomgang av hovedfunksjonene i appen.",
    videoComingSoon: "Oppdatert video kommer snart",
    videoUnavailableLabel: "Videoguide midlertidig utilgjengelig",
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
      "Appen fokuserer på situasjonsforståelse: retning, avstand, base, ruter, Apple Watch, Garmin og en enkel planleggingsflate for vind og turforslag.",
    whyP3:
      "NaviKite er et navigasjonshjelpemiddel, ikke en erstatning for kart, kompass, værvurdering og vanlig fjellvett.",
    statusEyebrow: "Status",
    statusTitle: "Laget for feltbruk.",
    statusText:
      "NaviKite er utviklet og testet ute i vind, kulde og dårlig dekning, med fokus på korte navigasjonsbeskjeder og god situasjonsforståelse.",
    panelIphone: "iPhone",
    panelWatch: "Watch",
    appStoreEyebrow: "App Store",
    appStoreTitle: "NaviKite er tilgjengelig i App Store.",
    betaText:
      "Last ned appen på iPhone og bruk den sammen med Apple Watch eller en kompatibel Garmin-klokke når du vil ha navigasjonsstøtte på håndleddet.",
    footerText: "NaviKite av PK Lunderød · 2026",
    privacyLink: "Personvern",
    privacyEyebrow: "Personvern",
    privacyTitle: "Privacy Policy",
    privacyUpdated: "Sist oppdatert: 17. november 2026",
    privacyIntroTitle: "Oversikt",
    privacyIntroText:
      "NaviKite er laget for å gi navigasjonsstøtte for snøkiting og ferdsel i fjellet. Appen bruker posisjon, bevegelse og ruteinformasjon for å vise retning, avstand, kart, turlogger og stemmeveiledning. NaviKite selger ikke persondata.",
    privacyDataTitle: "Informasjon appen kan bruke",
    privacyDataText:
      "NaviKite kan bruke enhetens posisjon, kompassretning, fart, høyde, lagrede destinasjoner, ruter, waypoints, baseposisjon, turlogger og appinnstillinger. Informasjonen brukes for at navigasjonsfunksjonene skal virke.",
    privacyStorageTitle: "Lokal lagring",
    privacyStorageText:
      "Lagrede posisjoner, ruter, nedlastede kartfliser, innstillinger og turlogger lagres lokalt på enheten med mindre du selv velger å eksportere eller dele dem. Turlogger kan eksporteres som GPX-filer.",
    privacyCommunityTitle: "Community og kontodata",
    privacyCommunityText:
      "Community bruker Logg på med Apple. NaviKite lagrer kontoidentifikatoren som brukes ved innlogging, valgt visningsnavn, innlegg, kommentarer, turmeldinger, følginger, rapporter, blokkeringer og eventuell administratorrolle. Dataene lagres i Supabase og knyttes til Community-kontoen din. Visningsnavnet og innholdet du publiserer, er synlig for andre innloggede Community-brukere.",
    privacyLocationTitle: "Posisjon og live-deling",
    privacyLocationText:
      "Nøyaktig posisjon brukes på enheten til navigasjon. Den sendes til Supabase bare når du selv starter posisjonsdeling i Live Map eller en turmelding. Live-deling er av som standard, har et valgt sluttidspunkt og kan fortsette i bakgrunnen mens den er aktiv. Innloggede Community-brukere, og alle som mottar en aktiv privat sporingslenke, kan se delt posisjon, visningsnavn og hvor gammel siste oppdatering er. NaviKite er ikke en nødtjeneste, og oppdateringer kan forsinkes av dårlig dekning eller systemforhold.",
    privacyNotificationsTitle: "Varsler",
    privacyNotificationsText:
      "Hvis du tillater varsler, lagrer NaviKite et enhetstoken fra Apple Push Notification service i Supabase for å kunne sende Community-aktivitet og sikkerhetspåminnelser. Tokenet knyttes til Community-kontoen og deaktiveres når du logger ut eller sletter kontoen.",
    privacyLinksTitle: "Delte lenker og filer",
    privacyLinksText:
      "Når du oppretter en NaviKite-lenke til en rute, lagret posisjon, turmelding eller live-posisjon, lagres den delte informasjonen i Supabase bak et vanskelig gjettbart lenketoken. Alle som har lenken, kan åpne informasjonen til lenken utløper eller tilbakekalles. Send den derfor bare til personer du stoler på. Ruter og posisjoner kan også eksporteres som filer gjennom tjenester du selv velger, for eksempel Meldinger eller AirDrop.",
    privacyServicesTitle: "Eksterne tjenester",
    privacyServicesText:
      "Når online-funksjoner brukes, kan NaviKite hente kartfliser fra Kartverket, vær- og varseldata fra relevante offentlige værkilder, og høydedata for valgte koordinater. Online og offline topografiske kart er foreløpig begrenset til Norge.",
    privacyKartverketTermsText:
      "Kartdata fra Kartverket brukes i tråd med Kartverkets vilkår for åpne data, med synlig kreditering på kartflater. Les vilkårene her:",
    privacyKartverketTermsLink: "Kartverkets vilkår for bruk",
    privacyRetentionTitle: "Lagringstid og sletting",
    privacyRetentionText:
      "Community-data beholdes mens kontoen er aktiv, eller til du sletter enkeltinnhold. Utløpte live-posisjoner og delingslenker slutter å være tilgjengelige i appen eller via den offentlige lenken, og kan beholdes i en begrenset periode for drift og opprydding. Du kan slette Community-kontoen permanent fra Profil i appen. Da fjernes profilen og tilknyttet Community-innhold, push-token, live-posisjon og kontoeide delingslenker. Lokalt lagrede ruter, posisjoner, innstillinger og turlogger blir liggende på enheten til du sletter dem eller appen.",
    privacyWatchTitle: "Apple Watch og Siri",
    privacyWatchText:
      "Hvis du bruker NaviKite med Apple Watch eller Siri-snarveier, kan navigasjonskommandoer og statusinformasjon utveksles mellom iPhone og Apple Watch for å utføre handlingen du ber om.",
    privacySharingTitle: "Deling",
    privacySharingText:
      "NaviKite selger eller bytter ikke personinformasjon. Data deles bare når det trengs for appfunksjoner, når du selv velger å eksportere eller dele data, eller når det kreves av operativsystemtjenester du velger å bruke.",
    privacySafetyTitle: "Sikkerhet",
    privacySafetyText:
      "NaviKite er et navigasjonshjelpemiddel. Appen erstatter ikke fjellvett, papirkart, kompass, værvurdering, lokalkunnskap eller nødutstyr.",
    privacyContactTitle: "Kontakt",
    privacyContactText: "For spørsmål om personvern, kontakt",
  },
  en: {
    navWhy: "Why",
    navBeta: "App Store",
    appStoreButton: "App Store",
    guideNav: "Guide",
    heroEyebrow: "NaviKite",
    heroTitle: "Navigation made by and for snowkiters.",
    heroLead:
      "NaviKite provides direction, distance and simple readouts when the phone is packed away and the mountain needs your focus. Over time, we also want to show updated advisory zones so kiters can plan around sensitive wild reindeer areas and current local guidance.",
    downloadApp: "Download on the App Store",
    videoEyebrow: "Video guide",
    videoTitle: "See NaviKite in action.",
    videoText: "A practical walkthrough of the main features in the app.",
    videoComingSoon: "Updated video coming soon",
    videoUnavailableLabel: "Video guide temporarily unavailable",
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
      "The app focuses on situational awareness: direction, distance, base, routes, Apple Watch, Garmin and a simple planning surface for wind and trip ideas.",
    whyP3:
      "NaviKite is a navigation aid, not a replacement for maps, compass, weather judgement and sound mountain sense.",
    statusEyebrow: "Status",
    statusTitle: "Built for field use.",
    statusText:
      "NaviKite is developed and tested outside in wind, cold and poor coverage, with a focus on short navigation readouts and situational awareness.",
    panelIphone: "iPhone",
    panelWatch: "Watch",
    appStoreEyebrow: "App Store",
    appStoreTitle: "NaviKite is available on the App Store.",
    betaText:
      "Download the app on iPhone and use it with Apple Watch or a compatible Garmin watch when you want navigation support on your wrist.",
    footerText: "NaviKite by PK Lunderød · 2026",
    privacyLink: "Privacy",
    privacyEyebrow: "Privacy",
    privacyTitle: "Privacy Policy",
    privacyUpdated: "Last updated: 17 November 2026",
    privacyIntroTitle: "Overview",
    privacyIntroText:
      "NaviKite is built to provide navigation support for snowkiting and mountain travel. The app uses location, motion and route information to show direction, distance, maps, trip logs and voice guidance. NaviKite does not sell personal data.",
    privacyDataTitle: "Information the app may use",
    privacyDataText:
      "NaviKite may use your device location, compass heading, speed, altitude, saved destinations, routes, waypoints, base position, trip logs and app settings. This information is used to make the navigation features work.",
    privacyStorageTitle: "Local storage",
    privacyStorageText:
      "Saved positions, routes, downloaded map tiles, settings and trip logs are stored locally on your device unless you choose to export or share them. Trip logs can be exported as GPX files.",
    privacyCommunityTitle: "Community and account data",
    privacyCommunityText:
      "Community uses Sign in with Apple. NaviKite stores the account identifier supplied for sign-in, your chosen display name, posts, comments, Trip Notices, follows, reports, blocks and administrator role where applicable. This data is stored in Supabase and is linked to your Community account. Your display name and published content are visible to other signed-in Community users.",
    privacyLocationTitle: "Location and live sharing",
    privacyLocationText:
      "Precise location is used on the device for navigation. It is sent to Supabase only when you deliberately start Live Map or Trip Notice location sharing. Live sharing is off by default, has a selected end time and may continue in the background while active. Signed-in Community users, and anyone who receives an active private tracking link, can see the shared position, display name and age of the latest update. NaviKite is not an emergency service, and updates may be delayed by poor coverage or system conditions.",
    privacyNotificationsTitle: "Notifications",
    privacyNotificationsText:
      "If you allow notifications, NaviKite stores an Apple Push Notification service device token in Supabase so it can deliver Community activity and safety reminders. The token is linked to your Community account and is deactivated when you sign out or delete the account.",
    privacyLinksTitle: "Shared links and files",
    privacyLinksText:
      "When you create a NaviKite link for a route, saved position, Trip Notice or live position, the shared information is stored in Supabase behind a hard-to-guess link token. Anyone with the link can access that information until the link expires or is revoked, so only send it to people you trust. Routes and positions may also be exported as files through services you choose, such as Messages or AirDrop.",
    privacyServicesTitle: "External services",
    privacyServicesText:
      "When online features are used, NaviKite may request map tiles from the Norwegian Mapping Authority (Kartverket), weather and forecast data from relevant public weather sources, and elevation data for selected coordinates. Online and offline topographic maps are currently limited to Norway.",
    privacyKartverketTermsText:
      "Kartverket map data is used under Kartverket's terms for open data, with visible credit on map views. Read the terms here:",
    privacyKartverketTermsLink: "Kartverket terms of use",
    privacyRetentionTitle: "Retention and deletion",
    privacyRetentionText:
      "Community account data is retained while your account is active, or until you delete individual content. Expired live positions and share links stop being available through the app or public link and may be retained for a limited period for operation and cleanup. You can permanently delete your Community account from Profile in the app. This removes the profile and associated Community content, push token, live position and account-owned share links. Locally stored routes, positions, settings and trip logs remain on your device until you remove them or the app.",
    privacyWatchTitle: "Apple Watch and Siri",
    privacyWatchText:
      "If you use NaviKite with Apple Watch or Siri shortcuts, navigation commands and status information may be exchanged between your iPhone and Apple Watch to perform the requested action.",
    privacySharingTitle: "Sharing",
    privacySharingText:
      "NaviKite does not sell or trade your personal information. Data is only shared when needed to provide app functions, when you choose to export or share data, or when required by the operating system services you choose to use.",
    privacySafetyTitle: "Safety",
    privacySafetyText:
      "NaviKite is a navigation aid. It is not a replacement for proper mountain judgement, paper maps, compass, weather assessment, local knowledge or emergency equipment.",
    privacyContactTitle: "Contact",
    privacyContactText: "For privacy questions, contact",
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

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const key = node.dataset.i18nAriaLabel;
    const value = translations[language][key];
    if (value) node.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-language-content]").forEach((node) => {
    node.hidden = node.dataset.languageContent !== language;
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

document.querySelectorAll("[data-app-store-link]").forEach((node) => {
  node.setAttribute("href", APP_STORE_URL);
});
