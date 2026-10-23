## 2026-03-30 - Synchronizing Focus and Hover Events in Legacy Accordion Galleries
**Learning:** In legacy jQuery galleries, binding `.on("mouseenter focusin")` and `.on("mouseleave focusout")` enables keyboard users to trigger accordion expansions and preview changes identically to mouse hover.
**Action:** When making custom interactive components accessible, always pair mouse hover listeners with keyboard focus events (`focusin`/`focusout`) and ensure proper `tabindex`, `role="link"`, and descriptive `aria-label` attributes are set.
