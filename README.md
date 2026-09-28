# Discover Life Through the Bible — website

A static, no-build website for the "Bible Reading & Conversation" online
programme. Built from the approved GDPR-compliant plan (`최종 승인 기획안`).

## Files

```
index.html        Home page (English/Dutch/French/German toggle) — About,
                   How it works, Who can join, Privacy summary, Registration
privacy.html       Full Privacy Policy + Community Guidelines
                   (English/Dutch/French/German toggle)
assets/style.css   All styling
assets/script.js   Language toggle + mobile menu (no external dependencies)
assets/hero.jpg    Hero image
```

No build step, no frameworks, no server required — this is plain HTML/CSS/JS.

## Deploy to GitHub Pages

1. Create a new GitHub repository (public, or private on a paid plan).
2. Upload the **contents** of this zip to the repository root (not the zip
   file itself — `index.html` should sit at the repo's top level).
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Pick the branch (usually `main`) and folder `/ (root)`, then **Save**.
6. GitHub gives you a URL such as `https://<username>.github.io/<repo>/`
   within a minute or two.

If you'd rather use a custom domain, add it under **Settings → Pages →
Custom domain** and follow GitHub's DNS instructions.

## Before you launch — checklist

These correspond to the "brackets"/assumptions in the underlying legal
review; please confirm each one before promoting the site with ads:

- [ ] **Registration link.** The "Register" buttons currently open an email
      to `whiteonenature@gmail.com` (`mailto:` link) as a safe default. If
      you set up an actual registration form (Google Forms, Typeform, your
      own form, etc.) that collects **only** preferred name + email
      (+ optional city/WhatsApp), replace the two `mailto:` links in
      `index.html` (search for `HOW TO ACTIVATE REGISTRATION`) with your
      form's URL.
- [ ] **Legal identity.** `privacy.html` names "Discover Life Through the
      Bible" as the data controller. If a specific legal name/address should
      be used instead (an individual or an organisation), update Section 1
      of `privacy.html` accordingly.
- [ ] **Zoom plan & privacy link.** Confirm which Zoom plan you use and that
      the linked Zoom privacy statement in Section 6 is still current.
- [ ] **Zoom Data Privacy Framework status.** Section 7 assumes Zoom's
      EU-U.S. DPF certification is current. Re-check at
      <https://www.dataprivacyframework.gov/s/participant-search> before
      launch and periodically afterward.
- [ ] **Tracking technologies.** Section 13 states that no analytics or
      advertising pixels are installed. If you ever add Meta Pixel, Google
      Analytics, etc., you must add a cookie-consent banner *before*
      activating them and update Section 13 to match reality.
- [ ] **Retention periods.** Section 9 currently states 90 days (event data)
      and 1 year (marketing consent). Adjust if your actual internal policy
      differs.
- [ ] Have the final `privacy.html` reviewed by Belgium/EU-qualified counsel
      before running paid Meta ads targeting Belgium, consistent with the
      accompanying legal memorandum.

## Languages

Both pages support **English, Dutch, French and German**, switchable via the
EN/NL/FR/DE buttons in the navigation bar. The chosen language is remembered
in the visitor's browser (`localStorage`) for their next visit.

`privacy.html` carries a visible notice stating that **the English version
prevails** in case of any discrepancy between language versions — a standard
approach for legal text, since translations are provided for convenience and
have not been separately reviewed by counsel in each language.

## Editing content

Everything is plain HTML — open `index.html` or `privacy.html` in any text
editor. Each translated string is marked with a `data-lang="en"` /
`"nl"` / `"fr"` / `"de"` attribute, with one element per language sitting
next to its siblings; edit all four together to keep them in sync when you
change wording. `assets/script.js` shows/hides the block matching the
selected language — no build step or framework is involved.
