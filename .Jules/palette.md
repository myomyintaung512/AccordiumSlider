## 2026-03-30 - Accessible Interactive Accordion Gallery Boxes

**Learning:** Interactive non-semantic elements (such as `<div>` cards used as gallery links or accordions) are invisible to screen readers and keyboard users unless explicitly decorated with `tabindex="0"`, appropriate ARIA roles (`role="link"`), descriptive `aria-label` names derived from inner text or fallbacks, and `keydown` event listeners for Enter (13) and Space (32).

**Action:** Whenever converting div-based cards into interactive link/button elements, always pair mouse hover/click handlers with `focusin`/`focusout` and `keydown` handlers while maintaining `e.preventDefault()` on Space to avoid unexpected page scrolling.
