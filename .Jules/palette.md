## 2026-09-03 - Accessible Keyboard Navigation for Custom jQuery Gallery
**Learning:** Custom jQuery image galleries built from non-semantic `div` elements lack keyboard focus and screen reader semantics.
**Action:** Dynamically add `tabindex="0"`, `role="link"`, and cleaned inner text or fallback `aria-label`s, along with `focusin`/`focusout` and `keydown` (Enter/Space) handlers.
