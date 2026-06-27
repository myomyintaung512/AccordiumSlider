## 2026-06-27 - [Gallery Keyboard Accessibility]
**Learning:** Legacy jQuery plugins often use non-semantic `div` elements for interactive items, breaking keyboard navigation. Converting these to focusable elements with `tabindex="0"` and `role="link"` and mirroring mouse events with `focusin`/`focusout` provides a seamless a11y win.
**Action:** Always check for `div`-based navigation and implement dual mouse/keyboard event listeners (`.on('mouseenter focusin', ...)`).

## 2026-06-27 - [Aria-label Generation from Mixed Content]
**Learning:** Using `.text()` on elements with mixed content (text, `<br/>`, `<a>`) can result in messy strings with excessive whitespace.
**Action:** Clean the label using `.trim().replace(/\s+/g, ' ')` and provide a numbered fallback to ensure every interactive element has a clear, unique name for screen readers.
