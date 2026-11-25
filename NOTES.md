# Voyager Software Corp site — operating notes

Live at https://voyagersoftwarecorp.com. Nuxt 3 + Tailwind 4, built from the
Netlify Nuxt Starter template.

## How it deploys

- Netlify project: `voyagersite` (team "Voyager Software",
  https://app.netlify.com/projects/voyagersite).
- Repo: `dreamatmai/nuxt-starter` on GitHub. Netlify builds on every push.
- **Production branch: `main`.** Auto-publishing is on (no deploy lock), so
  every push or merged PR to `main` goes live on voyagersoftwarecorp.com within
  a minute or two. Other branches and PRs get deploy previews only.
- Build: `npm run generate` (see `netlify.toml`), static output.
- History: the Voyager page was first made on 2025-11-24 by a Netlify Agent
  run on branch `agent-6924c3fb3b0fca8db60e9574` (commit 718310b). Its deploy
  preview was published by hand to production while `main` still held the
  starter template; `main` was later fast-forwarded to that commit so the two
  match.

## Where the content lives

- `data/index.json` — all page copy: hero title/description/image, the
  "Our Technology" feature cards, and the "Get in Touch" section.
- `pages/index.vue` — which sections appear and in what order (Hero, Features,
  Cta). The template's `Logos` and `Testimonials` components are still in
  `components/` but not used.
- `components/Navbar.vue` (site name, menu links), `components/Footer.vue`
  (copyright line), `components/Cta.vue` (contact email link).
- `content/voy-privacy-policy.md` — the Voy app's privacy policy, served at
  https://voyagersoftwarecorp.com/voy/privacy by `pages/voy/privacy.vue` (not
  linked from the home page). Copied from podskip's
  `podskip/docs/voy-privacy-policy.md`; copy it over again when that changes.
- `content/voy-terms-of-service.md` — the Voy app's Terms of Service, served at
  https://voyagersoftwarecorp.com/voy/terms by `pages/voy/terms.vue`. Written
  here (2026-10-31); this site's copy is the source. Both legal pages render
  through `components/LegalDoc.vue`.
- `content/voy-support.md` — the Voy support page, served at
  https://voyagersoftwarecorp.com/voy/support by `pages/voy/support.vue` (2026-11-02).
  New pages not linked from the home page must also be added to
  `nitro.prerender.routes` in `nuxt.config.ts`, or they 404 on Netlify.
- `public/images/hero.jpg` — hero image (still the template's Nuxt artwork).
- Browser tab title and meta description still come from the template
  ("Nuxt Starter"), set in `app.vue`.

## Working locally

```bash
npm ci
npm run dev        # http://localhost:3000
npm run generate   # same build Netlify runs
```

Netlify CLI: `npx netlify-cli status` (this folder is linked to `voyagersite`;
the `.netlify/` folder is git-ignored).

Test changes on a branch or PR first — its deploy preview URL shows the result
before anything touches production.
- `public/voy/podcast-sources.csv` — the list of shows Voy plays, with each
  show's public RSS feed and Apple Podcasts page, for App Review. Served as is at
  https://voyagersoftwarecorp.com/voy/podcast-sources.csv (2026-11-19).
- `content/voi-privacy-policy.md`, `content/voi-terms-of-service.md` — the legal pages of Voi, the
  free Mac app published by Apollo Apps Inc (another developer account; it only shares this host),
  served at https://voyagersoftwarecorp.com/voi/privacy and /voi/terms by `pages/voi/*.vue`
  (2026-11-25). They use `layouts/voi.vue`, which has its own header and footer, so the pages do
  not name Voyager. This site's copies are the source; podskip's `podskip/docs/voi-privacy-policy.md`
  mirrors the policy.
- `content/voi-support.md` — Voi's support page for App Review, served at
  https://voyagersoftwarecorp.com/voi/support by `pages/voi/support.vue` on the `voi` layout; its
  five screenshots are `public/voi/0*.jpg`, made from the store set of podskip's
  `podskip/docs/assets/voi-mac-store-v1/` (2026-11-25, TeamApolloGitHub/podskip#785).
