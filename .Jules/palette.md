# Palette's Journal - Critical UX/accessibility learnings

## 2026-08-08 - Keyboard Navigation and Accessibility in Legacy jQuery Gallery
**Learning:** Legacy jQuery galleries often lack keyboard accessibility. To make them robust, we must dynamically inject `tabindex="0"`, construct clean/unique `aria-label` attributes (collapsing whitespace and using fallback indices), and coordinate interaction states (using synchronized `hovered` and `focused` `.data()` flags with a 10ms debouncer) to prevent flickering or premature deactivation of expanded row previews.
**Action:** Always inject appropriate ARIA and focus management properties programmatically on gallery boxes. Coordinate state transitions smoothly with micro-timeout checks, ensuring nested interactive children (e.g. `<a>` tags) don't trigger unwanted parent navigations.
