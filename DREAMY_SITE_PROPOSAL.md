# Dreamy, Interactive Walkthrough — Site-Wide Proposal

Scope grew: not just the hero, the whole site. Goal is a **guided, atmospheric journey through the four sides of you** — engineer, business partner, person of faith, and someone people actually want to hang around. Not a demo reel; a self‑portrait.

## Personas woven into the dream

Four public facets + one grounding undercurrent. Faith isn't a "side" — it's the still point under everything. Storytelling is treated as its own chapter because you named it as your **inner person**, not just a voice.

| # | Facet | Feels like | Palette | Motion | Signal element |
|---|---|---|---|---|---|
| 1 | **Programmer** *(outward role)* | night sky over a running system | cool blue + white pulses | icosahedron mesh, edge pulses | distributed‑systems mesh (already built) |
| 2 | **Businessman** *(heart)* | skyline at dusk | deep blue → warm amber | crisp geometry, restrained lines | numbered "value stops" that light up on scroll |
| 3 | **Storyteller** *(inner person)* | firelight on a page | warm cream + ink | text reveals line‑by‑line, like pages turning | a short piece of your own writing — vignettes or a single story |
| 4 | **Human / fun** | warm evening, people around | warm bokeh, gold | slower drift, looser | abstract warm visuals + one honest line |
| — | **Faith** *(the ground)* | first light, stillness | soft gold + rose | motion damps to near‑zero | one held moment: Phil 4:13 anchor, Jer 29:11 as quiet secondary |

All five moods **share the same atmospheric layer** so the site feels like moving through one day, not five sites.

## Where we are right now (state check)
- Static multi-page site: `index.html`, `work.html`, `services.html`, `contact.html`, `intro.html`, `checklist.html`, `privacy.html`
- Already atmospheric on the hero only: `.hero-aurora` (animated radial gradients), `.hero-noise` (SVG turbulence), `.hero-grid-bg`, and `.reveal` scroll‑in classes
- I already built a hero WebGL scene (`vendor/hero-scene.js` — rotating icosahedron with pulses + particle halo) and wired it in. **Not yet tested in browser.** See "Decision needed" below.

## The vision — "walk through a dream"

Think of the site as a landscape the visitor moves through. Every page shares one continuous atmospheric backdrop that reacts to scroll and cursor, so navigating never feels like reloading — it feels like walking further into the same world.

## The walkthrough on `index.html` (chapter map)

The home page becomes the guided journey. One long scroll, six chapters, aurora morphs between them.

1. **Threshold** — current hero. Icosahedron mesh, cool blue. *(Programmer)*
2. **Craft** — one‑line proof of the engineering: what you actually build (queues, APIs, distributed flows). Aurora deepens, extra code‑glyph particles drift behind the mesh. *(Programmer)*
3. **Value delivered** — reframes the engineering as business outcome. Numbered "value stops" light up as they enter view. Palette warms with amber. *(Businessman)*
4. **Grounded** — the room quiets. Motion damps to near‑zero. Phil 4:13 sits alone on the page. Soft gold light. Jer 29:11 appears smaller, further down, as a quiet close. *(Faith — the still point)*
5. **A short story** — the storyteller chapter. Text reveals line by line, like pages turning. A short piece of your own writing — either a single vignette or 2–3 tiny ones. Warm cream palette. This is where the site earns emotional trust. *(Storyteller)*
6. **The person behind it** — loosens up. Warm bokeh, gold light, one honest line that reads like something you'd say at a table. *(Human)*
7. **Invite** — CTA. Aurora settles back to brand blue. Positioned as *"want to keep talking?"*, not a hard sell.

Faith (Chapter 4) sits between Business and Story on purpose — it's the pivot from *what you do* to *who you are*. Everything after it reads differently because of it.

Existing pages remain and sit inside the same atmosphere:
- `work.html` — deepens Chapter 3 (business outcomes → case studies)
- `services.html` — deepens Chapter 3 (offerings as concrete stops)
- `contact.html` — deepens Chapter 6 (invite)
- `intro.html`, `checklist.html`, `privacy.html` — quiet reading pages, aurora muted

Five layers, back to front:

### 1. Aurora field (global background canvas)
A single WebGL canvas fixed behind everything, on every page. Flow‑field / FBM noise producing slow drifting bands of color in the brand palette. It's the "sky" — always there, never the star.

- Cost: single fullscreen quad, one fragment shader, ~1 ms GPU per frame
- Bundle: ~4 KB
- Uniforms driven by: `time`, `scrollProgress`, `cursor`, `sectionAccent`

### 2. Scroll‑driven palette shifts
Each section on each page declares an "accent" via a data attribute (`data-mood="cool" | "warm" | "deep" | "signal"`). As sections cross the viewport midline, the background shader lerps toward that mood. Scrolling literally feels like walking from one clearing into another.

### 3. Cursor light
A soft radial highlight follows the cursor at ~14 fps, painting a small warm spot into the aurora. Buttons/links get a slight lift and shadow when the light passes near — no hard hover states, just proximity. Desktop only; touch devices skip.

### 4. Foreground moments
Specific set pieces on specific pages, purely ambient (no interaction):

| Page | Moment |
|---|---|
| **index** hero | Icosahedron mesh with edge pulses (already built) |
| **index** trust strip | Silent — let it breathe |
| **work** case cards | Each card wakes on reveal — subtle sheen sweep across it |
| **services** offerings | Numbered stops light up as they enter view, like waypoints |
| **contact** portrait | Portrait fades in from a wash of aurora; input focus emits a small ripple into the background canvas |
| **intro / checklist / privacy** | Aurora only — these are reading pages, keep them calm |

### 5. Transitions between pages
Use the **View Transitions API** (`document.startViewTransition`) for cross‑document navigation. Hero art and headings get shared‑element transitions; the aurora canvas is `contain: layout` and simply stays in place. Graceful fallback: instant nav (current behavior) on browsers without support.

## Motion vocabulary (used everywhere)
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (already in use for reveals) for anything user‑triggered; `cubic-bezier(0.4, 0, 0.2, 1)` for ambient
- **Idle float**: primary CTAs and the hero mesh gain a 3‑4s breathing scale (0.995 ↔ 1.005)
- **Reveal**: existing `.reveal` extended with variants — `reveal-sweep` (sheen), `reveal-blur` (starts blurred, resolves)
- **Reduced motion**: everything above collapses to a plain fade

## Interactivity model
- **Ambient** (no click/hover required): aurora drift, hero mesh, cursor light, section palette shifts, breathing CTAs
- **Reactive** (proximity/hover): cursor light warming buttons, card sheens on reveal, input‑focus ripples
- **No** page‑hijacking scroll‑jack. No cursor lag ("magnetic" cursors). Restraint is what keeps it dreamy vs. gimmicky.

## Accessibility & perf budget
- `prefers-reduced-motion: reduce` → aurora becomes a static gradient, mesh becomes the SVG fallback, cursor light disabled, reveals become plain opacity fades
- Low‑power heuristic (`hardwareConcurrency ≤ 2` or `deviceMemory ≤ 1`) → same as reduced motion
- No WebGL → CSS gradient fallback (works today)
- All decorative canvases `aria-hidden="true"`, `pointer-events: none`
- **Perf ceiling per frame**: aurora ≤ 1.5 ms GPU, hero mesh ≤ 2 ms GPU, JS ≤ 1 ms. Well under 16 ms
- **Bundle add over today**: ~15 KB total JS (aurora ~4 KB, mesh already built ~9 KB, orchestrator ~2 KB). No CSS framework, no library

## Implementation plan (phased so we can stop and check at each phase)

**Phase 1 — Foundations (no visual change yet)**
- Add global background canvas (`aurora.js`) but keep it black/transparent
- Add small orchestrator (`ambient.js`) reading `data-mood` and `data-theme`, tracking cursor + scroll
- Feature‑detect + fallbacks in place

**Phase 2 — Aurora field**
- Ship the actual flow‑field shader
- Tune palette against light + dark themes
- Wire scroll‑driven mood transitions on `index.html` first

**Phase 3 — Hero mesh integration**
- Keep the icosahedron scene I already built
- Have it read from the same color source as aurora so they harmonize on theme swap
- Verify combined perf on a mid‑range phone

**Phase 4 — Foreground moments**
- Card sheen on `work.html`
- Waypoint highlight on `services.html`
- Contact portrait fade + focus ripple

**Phase 5 — Page transitions**
- View Transitions API for all internal links
- Shared‑element transitions for hero headline + portrait

**Phase 6 — Polish**
- Idle CTA breathing
- Reveal variants
- QA pass: iOS Safari, low‑end Android, keyboard nav, screen reader

## Decisions — locked

**Structural** *(confirmed 2026-07-09)*
1. ✅ Keep hero mesh (icosahedron + pulses) as Chapter 1's anchor
2. ✅ Palette: brand blue **+ warm amber** as secondary. Amber drives the business/faith/human chapters
3. ✅ View Transitions API for internal navigation; Firefox falls back to instant nav
4. ✅ Full support for **both light and dark themes** — aurora, mesh, and cursor light all re‑read theme tokens on `data-theme` change (already wired for the mesh)
5. ✅ Reading pages (privacy, intro, checklist): aurora **muted (~30% opacity)**

**Still open** *(need your call before Phase 4)*
- Cursor light on desktop? Yes/no. My recommendation is a very subtle one, but happy to skip if you'd rather keep the site fully ambient.

**Persona content — locked / partial**
6. ✅ **Faith anchors**: Phil 4:13 (visible anchor) + Jer 29:11 (quiet secondary). *Confirm you're OK with this framing.*
7. ✅ **No photos anywhere on the walkthrough** — lean fully into abstract dreamy visuals (aurora, warm bokeh, particles). Cleaner and stays coherent with the atmospheric direction. (I will not hotlink random internet images — copyright + reliability. If you later want stock, I'll curate 2–3 Unsplash/Pexels candidates for you to approve.)
8. ✅ Human chapter stays subtext — no hobbies list
9. **Business "value stops"** — still open. I'll draft three from your existing copy and you approve.
10. **Chapter 1 headline** — still open. Keep current, or dreamier?

**Storyteller chapter — the big new content ask**
This chapter is the emotional center. It only works with **your actual writing**. Three ways to get there — pick one:
- (a) **You send me something you've already written** — a paragraph, a scene, a lesson, a note you wrote once. Anything 100–400 words that sounds like you thinking out loud. I'll shape the reveal around it.
- (b) **I draft 3 short vignette options from what I already know about you** (engineer + businessman + faith + fun) — you pick one and edit until it sounds like you.
- (c) **We start with a placeholder line** ("*a chapter of my own writing lives here*") and you fill it in later — Phase 1 doesn't need it.

**Voice**
Storytelling is your inner person, not just style — but it also *is* the style of the whole site now. Copy across every chapter leans narrative: second person sparingly, no bullet lists in body copy, sentences that would sound OK read aloud.

**Still open**
- Cursor light on desktop? Yes/skip?

Phase 1 (background canvas, orchestrator, theme wiring, chapter scaffolding) needs none of the above and I can start it now.
