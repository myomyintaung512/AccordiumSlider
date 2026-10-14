## 2026-10-14 - Accessible Focus States for Custom Image Accordion Gallery
**Learning:** Custom div-based image boxes in accordion galleries lack keyboard access by default. Adding `tabindex="0"`, `role="button"`, `aria-label`, and handling both `focusin`/`focusout` and `keydown` (Enter/Space) allows full screen reader and keyboard accessibility while keeping mouse hover transitions smooth.
**Action:** When working with interactive non-semantic elements (`div`, `span`), always attach ARIA roles, tabindex, focus listeners, and keyboard activation handlers to match mouse interactions.
