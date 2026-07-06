# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Keyboard Inaccessibility in Custom Gallery
**Learning:** Legacy jQuery plugins often rely on `.hover()` and `.click()` on non-semantic elements (like `div`), which completely excludes keyboard and screen reader users. Simply adding `tabindex` isn't enough; event handlers must be synchronized to handle both mouse and focus states to provide a consistent experience.
**Action:** Always refactor `.hover(in, out)` to `.on('mouseenter focusin', in).on('mouseleave focusout', out)` and add `keydown` listeners for elements with `role="link"` or `role="button"`.
