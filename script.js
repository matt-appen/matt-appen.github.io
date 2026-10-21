// Inställningar – fyll i när de finns.
const MATT = {
  // Adressen dit väntelistan skickas, t.ex. ett formulär hos Formspree: "https://formspree.io/f/xxxxxx".
  // Tom = sidan sparar inga adresser och säger det till besökaren.
  vantelistaUrl: "https://formspree.io/f/xjygnpnl",
  // E-post för kontaktlänkar.
  kontaktEpost: "hej@exempel.se",
};

document.querySelectorAll("[data-kontakt]").forEach((lank) => {
  lank.href = lank.href.replace("hej@exempel.se", MATT.kontaktEpost);
});

const giltigEpost = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

document.querySelectorAll("[data-vantelista]").forEach((form) => {
  const falt = form.querySelector("input[type=email]");
  const knapp = form.querySelector("button");
  const svar = form.querySelector(".form-svar");

  const visa = (text, arFel = false) => {
    svar.textContent = text;
    svar.classList.toggle("fel", arFel);
  };

  falt.addEventListener("input", () => {
    falt.removeAttribute("aria-invalid");
    if (svar.classList.contains("fel")) visa("");
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const epost = falt.value.trim();

    if (!giltigEpost(epost)) {
      falt.setAttribute("aria-invalid", "true");
      visa("Skriv en e-postadress, till exempel namn@epost.se.", true);
      falt.focus();
      return;
    }

    if (!MATT.vantelistaUrl) {
      visa("Väntelistan öppnar inom kort. Din adress har inte sparats än.", true);
      return;
    }

    knapp.disabled = true;
    visa("Skickar …");
    try {
      const res = await fetch(MATT.vantelistaUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: epost, kalla: "hemsida" }),
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      visa("Klart! Du står på väntelistan. Vi hör av oss när Mätt öppnar.");
    } catch {
      visa("Det gick inte att skicka just nu. Försök igen om en stund.", true);
    } finally {
      knapp.disabled = false;
    }
  });
});

// Flikar i biverkningsbiblioteket (piltangenter flyttar mellan flikar).
document.querySelectorAll("[data-flikar]").forEach((flikar) => {
  const knappar = [...flikar.querySelectorAll('[role="tab"]')];
  const valj = (knapp, fokus = false) => {
    knappar.forEach((k) => {
      const vald = k === knapp;
      k.setAttribute("aria-selected", String(vald));
      k.tabIndex = vald ? 0 : -1;
      document.getElementById(k.getAttribute("aria-controls")).hidden = !vald;
    });
    if (fokus) knapp.focus();
  };
  knappar.forEach((k, i) => {
    k.addEventListener("click", () => valj(k));
    k.addEventListener("keydown", (e) => {
      const steg = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (steg) { e.preventDefault(); valj(knappar[(i + steg + knappar.length) % knappar.length], true); }
      if (e.key === "Home") { e.preventDefault(); valj(knappar[0], true); }
      if (e.key === "End") { e.preventDefault(); valj(knappar[knappar.length - 1], true); }
    });
  });
});
