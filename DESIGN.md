# Design

## System

Postpartum Care Tracker is a compact product dashboard. The interface uses a two-column desktop shell with persistent navigation and a single-column mobile layout. It favors scan-friendly panels, clear status chips, and inline guidance over modal-heavy flows.

## Colors

- Background: `#f7faf8`
- Sidebar: `#eaf0ee`
- Surface: `#ffffff`
- Surface raised: `#f2f6f4`
- Ink: `#14201d`
- Muted ink: `#55645f`
- Border: `#d7e0dc`
- Primary: `#0f766e`
- Primary strong: `#0b4f4a`
- Info: `#2563eb`
- Warning: `#b45309`
- Danger: `#be123c`
- Success: `#15803d`

## Typography

Use the system UI stack. Keep product headings restrained and fixed-size. Use tabular numbers for lab values and dates.

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
