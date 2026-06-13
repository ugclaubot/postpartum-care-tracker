# Design

## System

Postpartum Care Tracker is a compact product dashboard. The interface uses a two-column desktop shell with persistent navigation and a single-column mobile layout. It favors scan-friendly panels, clear status chips, inline guidance, and real tabular comparison over modal-heavy flows.

Current visual source: Aura's "Organic Material System - Spatial Interface" combined with the Google Stitch clinical dashboard direction. Adapt the Aura system as product UI, not a landing-page mockup: preserve dense dashboard hierarchy, compact nested panels, mono-like technical labels, 8px radius, and restrained 150-220 ms interactions. Use Stitch's light clinical shell for readability, because this tracker is a daily care surface rather than a dramatic showcase.

## Colors

- Background: `#edf3ef`
- Chrome: `#f7faf7`
- Surface: `#ffffff`
- Surface raised: `#f9fcfa`
- Primary clinical green: `#0f766e`
- Forest support: `#064e3b`
- Aura terracotta accent: `#c2410c`
- Dusty rose danger tint: `#fff1f4`
- Ochre warning tint: `#fff8df`
- Success tint: `#ecfdf3`
- Text: `#14231f`
- Muted text: `#5f7069`
- Border: `#d9e5df`

## Typography

Use Inter/system UI. Keep product headings restrained and fixed-size. Use tabular numbers for lab values and dates. Labels should feel technical and compact with mono-style tracking, but text must remain readable on light clinical surfaces.

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
