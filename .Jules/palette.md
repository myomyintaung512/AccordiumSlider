## 2025-05-14 - Keyboard-First Gallery Accessibility

**Learning:** In legacy jQuery galleries that rely on hover events, simply adding `tabindex` is not enough. Visual state changes (animations, borders) must be synchronized between `mouseenter` and `focusin` events. Additionally, when generating `aria-label` from container text, it is crucial to collapse whitespace and trim, as `.text()` includes all nested child text which can result in messy screen reader announcements.

**Action:** Always use chained `.on('mouseenter focusin', ...)` and `.on('mouseleave focusout', ...)` for synchronized state, and use `.text().trim().replace(/\s+/g, ' ')` when deriving labels from dynamic content.
