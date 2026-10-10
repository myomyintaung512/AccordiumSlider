## 2026-10-10 - Keyboard accessibility and ARIA roles on dynamic jQuery accordion boxes
**Learning:** Legacy jQuery accordion galleries with mouse-only hover and click listeners prevent keyboard-only users from interacting with or navigating gallery items.
**Action:** When updating dynamic interactive elements created via jQuery, set `tabindex="0"`, `role="button"`, and clean `aria-label` attributes, bind both `mouseenter focusin` and `mouseleave focusout`, and handle `keydown` for Enter and Space (preventing default page scroll on Space).
