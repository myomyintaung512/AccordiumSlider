# Palette's UX & Accessibility Journal

## 2026-03-01 - Synchronized Gallery Hover and Focus States
**Learning:** In shared-preview galleries like mmDeveloperSlider, relying on simple hover or focus handlers causes flickering and race conditions during fast mouse movements or keyboard navigation. Using jQuery `.data()` flags (`hovered` and `focused`) combined with a micro-timeout debouncer (e.g., 10ms) ensures a smooth transition and prevents premature container closure.
**Action:** Use decoupled interaction flags and debounced row-wide checks to coordinate state transitions on shared preview containers.

## 2026-03-01 - Clean Screen Reader Announcement for Gallery Items
**Learning:** Trim and collapse whitespace within container text when deriving dynamic ARIA labels. Nested elements like `<br/>` can introduce stray newlines or extra spaces, resulting in awkward and broken screen reader announcements.
**Action:** Retrieve the inner text of a container, trim it, and collapse multiple whitespace characters using `.replace(/\s+/g, ' ')` before assigning it to the `aria-label` attribute.
