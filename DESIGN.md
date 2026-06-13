# Design

## System

Postpartum Care Tracker is a compact product dashboard. The interface uses a two-column desktop shell with persistent navigation and a single-column mobile layout. It favors scan-friendly panels, clear status chips, inline guidance, and real tabular comparison over modal-heavy flows.

Current visual source: Aura's "Organic Material System - Spatial Interface" design system. Adapt the source as product UI, not a landing-page mockup: preserve dense dashboard hierarchy, dark material depth, compact nested panels, mono-like technical labels, 8px radius, and restrained 150-220 ms interactions while keeping clinical readability and mobile usability first.

## Colors

- Background: `#1c1917`
- Depth background: `#450a0a`
- Sidebar/chrome: `#231211`
- Surface: `#251716`
- Surface raised: `#38211e`
- Aura material/blush: `#fecdd3`
- Alabaster text: `#fafaf9`
- Primary terracotta: `#c2410c`
- Forest support: `#064e3b`
- Ochre warning: `#fbbf24`
- Danger: `#fb7185`
- Success: `#86efac`

## Typography

Use Inter/system UI. Keep product headings restrained and fixed-size. Use tabular numbers for lab values and dates. Labels should feel technical and compact, but text must remain readable on dark material surfaces.

## Components

- Sidebar navigation: stable labels, active state, count badges where useful.
- Top header: patient profile summary, postpartum day, and main status.
- Metric cards: only for high-level clinical state, not decorative grouping.
- Timeline rows: date-window, test name, rationale, status.
- Result table: most recent first with generated interpretation.
- Advisor panel: urgent warnings first, then due tests, then food/supplement discussion prompts.
- Form controls: consistent 8px radius, clear labels, helpful examples.

## Motion

Keep transitions short and functional: 160-220 ms for hover, focus, and panel reveal. Respect reduced-motion preferences.

## Responsive Behavior

Desktop uses sidebar plus main workspace. Tablet collapses dense grids. Mobile moves navigation into a horizontal rail and stacks panels; forms keep labels visible above fields.
