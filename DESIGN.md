---
name: Dra. Letícia Contato
description: An atelier lookbook for facial harmonization — forest, gold, and cream, staged as an editorial treatment menu.
colors:
  forest-900: "#04241A"
  forest-800: "#06301F"
  forest-700: "#03422F"
  forest-600: "#054D37"
  forest-line: "rgba(211,171,132,0.22)"
  green-300: "#8FDCC0"
  green-400: "#4FC79A"
  green-500: "#02A56D"
  green-600: "#028C5C"
  gold-200: "#F2E3D2"
  gold-300: "#E7CBAE"
  gold-500: "#D3AB84"
  gold-600: "#BE9066"
  gold-700: "#A97A50"
  cream-50: "#FBF8F3"
  cream-100: "#F4EDE2"
  cream-200: "#E9DFCF"
  ink-900: "#191D1A"
  ink-700: "#3A423C"
  ink-500: "#6B756E"
  wa-green: "#25D366"
  wa-green-deep: "#1EBE5A"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2rem, 5.4vw, 3.1rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.25rem–1.5rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.2em"
rounded:
  brand: "22px"
  brand-sm: "14px"
  full: "9999px"
  none: "0px"
spacing:
  container-max: "1180px"
  section-py: "clamp(56px, 8.5vw, 108px)"
  container-px: "clamp(20px, 5vw, 48px)"
components:
  button-primary:
    backgroundColor: "{colors.gold-700}"
    textColor: "{colors.forest-900}"
    rounded: "{rounded.full}"
    padding: "16px 36px"
  button-primary-hover:
    backgroundColor: "{colors.gold-500}"
    textColor: "{colors.forest-900}"
    rounded: "{rounded.full}"
    padding: "16px 36px"
  button-secondary:
    backgroundColor: "{colors.forest-700}"
    textColor: "{colors.cream-50}"
    rounded: "{rounded.full}"
    padding: "16px 36px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.forest-700}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  card-photo:
    backgroundColor: "{colors.cream-50}"
    rounded: "{rounded.brand}"
  card-testimonial:
    backgroundColor: "{colors.cream-50}"
    rounded: "{rounded.none}"
---

# Design System: Dra. Letícia Contato

## Overview

**Creative North Star: "The Atelier Lookbook"**

The practice reads as a boutique atelier flipping through its own lookbook, not a clinic filling in a template. Every section is a large image-led moment or an editorial listing — a treatment menu, a magazine-style before/after spread, a portrait with a glass caption — never a centered headline stacked over an icon grid. The forest/gold/cream palette and the line-art logo are pre-existing brand commitments and stay fixed; what changed is the composition around them: asymmetric splits, bleed photography, and Playfair Display in place of Cormorant Garamond for every serif headline.

Density is generous but not empty: text blocks sit against full-bleed or large-format photography rather than floating alone on cream. The one confirmed rejection is the decorative section eyebrow (a small uppercase kicker label sitting above every heading) — it was built, reviewed, and removed as a craft-floor violation; headings now carry their own weight without it.

**Key Characteristics:**

- Asymmetric, image-led grids in place of the centered-hero-plus-icon-grid template.
- Every headline pairs a serif display line with an italic gold "emphasis" phrase.
- Numerals are used only where content is genuinely sequential (treatment rows, process steps) — never as decorative section labeling.
- Glass captions (translucent forest scrim + backdrop blur) label photography instead of separate text captions.
- Pill-shaped buttons and full-bleed photography carry the only shadows; everything else is flat.

## Colors

Forest and gold are the load-bearing pair — deep forest for grounding surfaces and body ink, gold reserved for emphasis, dividers, and numerals. Green and cream are secondary: green signals the WhatsApp/action channel and one featured-procedure gradient, cream is the paper the whole site rests on.

### Primary

- **Deep Forest** (`#03422F` forest-700 / `#04241A` forest-900): dark section backgrounds (hero, CTA final, footer), primary body text on cream (`ink-900`/`ink-700` are used for copy, forest is reserved for headings and dark surfaces).
- **Atelier Gold** (`#BE9066` gold-600 / `#D3AB84` gold-500): the italic emphasis word in every section title, treatment-menu numerals, thin dividers, focus outline, and the `gold-grad` gradient on primary CTAs.

### Secondary

- **Signature Green** (`#02A56D` green-500 / `#028C5C` green-600): the `green-grad` gradient on the one featured-procedure card and the "forest" button variant; a second brand accent, used sparingly.

### Tertiary

- **WhatsApp Green** (`#25D366` wa-green): reserved exclusively for WhatsApp CTAs and the floating action button — never used as a general accent, so it stays legible as "the contact channel."

### Neutral

- **Paper Cream** (`#FBF8F3` cream-50 / `#F4EDE2` cream-100 / `#E9DFCF` cream-200): page background, alternating section backgrounds, card fields, borders/dividers on light sections.
- **Ink** (`#191D1A` ink-900 / `#3A423C` ink-700 / `#6B756E` ink-500): body copy on cream (`ink-500` for leads/descriptions, `ink-700` for higher-emphasis copy).

### Named Rules

**The Gold-Is-Rare Rule.** Gold never fills a large surface on its own — it appears as the italic emphasis word, a hairline divider, a numeral, or the gradient sliver on one CTA per section. It is legible precisely because it is scarce.

## Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body Font:** Manrope (with system-ui fallback)

**Character:** A confident, editorial serif for anything that announces (hero title, section headings, component titles, numerals) paired with an unobtrusive humanist sans for anything that explains (leads, descriptions, body copy). The pairing is deliberately magazine-like: display type sets the mood, body type stays quiet and readable.

### Hierarchy

- **Display** (600, `clamp(2.5rem,6vw,4rem)`, line-height 1.08): the hero `<h1>` only.
- **Headline** (600, `clamp(2rem,5.4vw,3.1rem)`, line-height 1.1): every `SectionTitle` — always paired with an italic gold `emphasis` span.
- **Title** (600, `text-xl`–`text-3xl`): component-level headings — treatment-menu row titles, process-step titles, testimonial names, the featured-procedure card title.
- **Body** (400, `text-lg`/`text-base`, `ink-500`/`ink-700`): section leads, descriptions, paragraph copy; Manrope throughout.
- **Label** (600, `text-xs`, `0.2em` tracking, uppercase, `gold-300`): footer column headers ("Navegação", "Unidades") only — a footer-local convention, not a section-heading pattern.

### Named Rules

**The Italic Gold Emphasis Rule.** Every `SectionTitle` closes on an italic word or phrase in gold (`gold-600` on light sections, `gold-300` on dark). This is the one recurring signature that ties every section heading together — headings never appear as a single flat color/weight.

**The Meaningful Numeral Rule.** Serif italic gold numerals (`01`, `02`…) label the treatment-menu rows (`MenuItem`) and the four `ComoFunciona` steps (`ProcessStep`) because that content is genuinely counted and ordered. Numerals are never applied as decorative section labeling — that usage (a numbered eyebrow above headings) was built, reviewed, and removed; see Do's and Don'ts.

## Layout

A single centered container (max-width 1180px, fluid horizontal padding `clamp(20px,5vw,48px)`) holds every section; vertical rhythm is fluid too (`clamp(56px,8.5vw,108px)` section padding, tighter on `md+`). Within that container, the grid is asymmetric rather than centered:

- **Hero**: a two-column split (`1.05fr` copy / `1fr` photo) on `md+`, collapsing to a stacked column with the photo below the copy on mobile.
- **Resultados**: a `sm:2` / `md:3`-column gallery grid where the lead item spans the full row width and the before/after pair spans two columns — an intentionally uneven lookbook layout, not a uniform card grid.
- **Sobre**: a two-column split (copy / portrait) that reverses order on mobile (photo first).
- **Procedimentos**: a full-width featured gradient card followed by a single-column list (the treatment menu), not a grid of cards.

Custom breakpoints: `sm: 600px`, `md: 900px`, `lg: 1024px`, `xl: 1280px` (not Tailwind's defaults).

## Elevation & Depth

The system is mostly flat — text blocks, the treatment-menu list, and dark section backgrounds carry no shadow. Depth is reserved for two things: photographic containers (soft ambient shadow, grounding the image against the page) and buttons (a matching soft or gold-tinted shadow that reinforces the CTA as the one liftable object on the page).

### Shadow Vocabulary

- **Soft** (`box-shadow: 0 20px 55px -22px rgba(4,36,26,0.5)`): the default lift under photo cards (`GalleryCard`, `AboutPhoto`) and forest-variant buttons.
- **Gold** (`box-shadow: 0 14px 40px -14px rgba(190,144,102,0.55)`): under the gold-variant button, tying the shadow's hue to the gradient it sits under.

### Named Rules

**The Photography-Lifts, Text-Doesn't Rule.** Shadows only ever sit under an image container or a button. A text-only card (testimonial) stays flat and gets a border treatment instead — see Shapes.

## Shapes

Two corner languages coexist by content type, not by accident. Photographic containers (gallery cards, the about portrait) use the brand radius (`22px`, `rounded-brand`) with `shadow-soft` — a soft, gallery-print rounding. Interactive controls (buttons, badges, the reviews pill) are full pills (`rounded-full`). Text-only editorial cards break from both: the `TestimonialCard` is square-cornered (`rounded-none`) with a `2px` gold top rule instead of a shadow or radius — a magazine pull-quote silhouette, not a "card."

Glass labels (`AboutBadge`, `GalleryCard`'s caption) use the smaller `brand-sm` radius (`14px`) or a full pill, `bg-forest-900/55` with `backdrop-blur-md`, always inset over the bottom of a photo rather than placed below it.

### Named Rules

**The Two Silhouettes Rule.** Anything that _is_ a photograph gets `rounded-brand` + `shadow-soft`. Anything that _is_ a quote or text block gets square corners + a single gold rule. Don't cross the two.

## Components

### Buttons

- **Shape:** full pill (`rounded-full`).
- **Primary (`gold`):** `gold-grad` gradient background, `forest-900` text, `shadow-gold`. Used for the highest-priority CTA per section (hero, featured procedure, "Sobre").
- **Secondary (`forest`):** `green-grad` gradient, `cream-50` text, `shadow-soft`. Used for secondary/orientation CTAs.
- **Tertiary (`green`):** solid `wa-green` background, used specifically for WhatsApp contact CTAs (CTA final, footer).
- **Ghost:** transparent with a `forest-700/25` border, `forest-700` text — used for the hero's secondary "Ver procedimentos" link.
- **Hover / Focus:** all variants lift (`-translate-y-0.5`) and compress on press (`active:scale-[0.97]`) on the shared `ease-brand` cubic-bezier(0.22,1,0.36,1); `motion-reduce` disables the transform.

### Cards / Containers

- **Photo cards** (`GalleryCard`, `AboutPhoto`): `rounded-brand` (22px), `shadow-soft`, glass caption/badge inset at the bottom edge.
- **Testimonial card:** square corners, `2px` gold top rule (`border-t-gold-500/60`), oversized italic gold quotation mark, flat (no shadow) — the deliberate exception to the photo-card language.
- **Featured procedure card:** full-width `green-grad` fill, `rounded-brand`, `shadow-soft`; the one card that combines the gradient with the photo-card radius.

### Signature Component: MenuItem (treatment menu row)

The `Procedimentos` and effectively `ComoFunciona` sections are staged as an editorial listing rather than a card grid: each `MenuItem` is a table-like row (italic gold numeral · serif title · description · "Saiba mais" link) separated by a hairline `cream-200` border, not a bordered box. The numeral is meaningful — it is the treatment's position in a real, countable list of five procedures — which is what distinguishes it from the removed decorative eyebrow numbering (see Do's and Don'ts). `ProcessStep` reuses the same numeral convention for the four genuinely sequential onboarding steps.

### Signature Component: GalleryCard (lookbook grid)

`GalleryCard` accepts an `aspectClassName` prop so individual grid cells can break from the default square aspect (e.g. the profile harmonization item renders `aspect-[16/10]`), which is what makes the `Resultados` grid read as an asymmetric lookbook spread instead of a uniform photo grid. A `pair` prop renders two images side by side (the before/after split) inside the same rounded frame.

### Navigation

Footer navigation uses small gold tracked-caps column labels (`text-xs`, `gold-300`, `0.2em` tracking, uppercase) above each link list — a footer-only labeling convention, distinct from (and not to be confused with) the removed section-heading eyebrow pattern.

## Do's and Don'ts

### Do:

- **Do** pair every `SectionTitle` with an italic gold emphasis phrase (the Italic Gold Emphasis Rule).
- **Do** use asymmetric, image-led grids (hero split, lookbook gallery, reversed about split) instead of a centered hero over an icon grid.
- **Do** reserve serif italic gold numerals for content that is genuinely sequential or counted (treatment-menu rows, process steps).
- **Do** keep photographic containers at `rounded-brand` (22px) + `shadow-soft`, and give text-only cards square corners + a gold rule instead.
- **Do** keep `wa-green` exclusive to WhatsApp contact CTAs so it reads as "the contact channel," not a general accent.

### Don't:

- **Don't** add an eyebrow/kicker label above a section heading. The shared `Eyebrow` component and all its usages were built, then removed after finish review flagged it as a systemic craft-floor violation — it is a defect this build carries the memory of, not a pattern to reintroduce.
- **Don't** use numerals decoratively. A numeral is only earned by content that is actually ordered or counted (five procedures, four steps) — never used to dress up a section label.
- **Don't** apply a drop shadow to a text-only card; shadows are reserved for photographic containers and buttons.
