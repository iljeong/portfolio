# Portfolio Design System

## 1. Direction

Editorial minimal portfolio for a service/content planner. The surface should feel quiet, precise, and evidence-led: white canvas, black typography, blue accent, thin ledger lines, restrained cards, and clear project proof.

## 2. Tokens

- Background: `--bg`, `--canvas` = white.
- Surfaces: `--surface` = soft neutral panel, `--accent-bg` = blue tint for emphasis.
- Text: `--ink`, `--ink-2`, `--ink-3`, `--ink-4` from primary to muted.
- Accent: `--accent` for links, active states, key figures, and one emphasis per region.
- Lines: `--line`, `--line-strong` for section and card separation.
- Radius: `--r-sm`, `--r-md`, `--r-lg`, `--r-2xl`, `--r-full`.
- Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-hover`, `--shadow-lg`.
- Motion: `--dur-fast`, `--dur`, `--dur-slow`, `--ease`, `--ease-out`, `--ease-spring`.
- Typography: Pretendard Variable with the scale in `src/styles/global.css`.

## 3. Layout

- Use `.container` and `--max-w` for page width.
- Sections should be full-width bands or unframed layouts; cards are for repeated items and media.
- Prefer thin ledger dividers over nested cards.
- Korean body text uses `word-break: keep-all` and `overflow-wrap: anywhere` only where URLs or long tokens may appear.

## 4. Components

- `label`: small uppercase section marker.
- `chip`: compact keyword or certificate token.
- `hero-stat`: linked evidence number with short label.
- `feat-card`: selected work card with media, badge, stat, and metadata.
- `work-item`: compact project list row.
- `cs-gallery`: horizontally scrollable proof gallery.
- `cs-result`, `cs-step`, `cs-insight`: case-study evidence blocks.
- `flow` and `architecture`: process and system diagrams.

## 5. Interaction States

- Links and cards use color, border, shadow, or small `translateY` changes.
- Motion must signal affordance or reveal content; no decorative animation.
- `prefers-reduced-motion` keeps content visible and reduces transitions.
- Keyboard focus uses the global `:focus-visible` ring.

## 6. Copy Rules

- Keep claims concrete: action, artifact, metric, and limitation.
- Remove duplicated proof when the same fact appears in the same viewport without adding context.
- Avoid slogan-heavy subtitles; use work scenes or observed problems.
- Preserve verified numbers, dates, project names, and tool names.

## 7. Accepted Debt

- Project content is currently centralized in `src/data/projects.ts`; this is acceptable because the site is static and the data shape is small.
- Inline SVG icons remain local to components to avoid adding an icon dependency.
