# TrickyBogard Apps — official website
Public website for TrickyBogard apps. The source code for the Android app belongs in a SEPARATE, PRIVATE repository.

## Deployment
GitHub Pages serves this repository on https://trickybogard.github.io/. The home page offers Turkish (TR) and English (EN), and the Terms of Use page supports both languages.

## Add a new app
Edit only apps.js: append another object to the apps array, with:
- id, status ("live"), platform, icon (optional)
- playUrl (real, verified link)
- privacyUrl and termsUrl (legal pages for THAT app)
- tr and en: name, summary, detail, features

Do not copy Quick Message's privacy or terms links for a different product. Do not list unreleased apps as available, and do not upload secret keys or personal information.

## Important protected files
- privacy.html: published Quick Message Privacy Policy (TR/EN); intentionally unchanged by this website redesign.
- app-ads.txt: advertising verification; intentionally unchanged.
- assets/quick-message-icon.png: small display asset taken from the approved store design package; not the source icon for the app.

## Privacy and safety
No analytics, third-party trackers, cookies, account login or API secrets are introduced by this static site. Contact details should be handled through the app's Google Play support listing until a dedicated public address has been verified.
