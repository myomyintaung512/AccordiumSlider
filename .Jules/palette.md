## 2026-06-13 - Improving Keyboard Accessibility in Shared-Preview Galleries
**Learning:** Shared-preview galleries that rely exclusively on hover events are inaccessible to keyboard and screen reader users. Transitioning to focus-synchronized events (`focusin`, `focusout`) and adding semantic roles/labels significantly improves the experience.
**Action:** Always add `tabindex="0"`, `role="link"`, and synchronized focus event listeners when making clickable gallery items. Ensure the "Enter" key is explicitly handled for navigation.
