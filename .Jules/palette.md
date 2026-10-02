## 2026-10-02 - Synchronizing Focus and Hover Events for jQuery Image Galleries
**Learning:** Legacy jQuery galleries often bind preview interactions solely to `.hover()`, locking out keyboard users. Chaining `.on('mouseenter focusin', ...)` and `.on('mouseleave focusout', ...)` along with `tabindex="0"` and `role="link"` seamlessly unifies mouse and keyboard interactions.
**Action:** When updating legacy mouse-driven custom elements, replace `.hover()` with dual event handlers (`mouseenter focusin` / `mouseleave focusout`) and add proper ARIA semantics.
