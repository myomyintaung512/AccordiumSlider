## 2026-08-27 - Keyboard Navigation for Custom Accordion Gallery Boxes
**Learning:** Custom jQuery accordion galleries built from standard `<div>` elements lack focusability and ARIA link roles, preventing keyboard users from activating expanding image previews or triggering navigation.
**Action:** Add `tabindex="0"`, `role="link"`, dynamic `aria-label` attributes, and synchronize `focusin`/`focusout` handlers alongside hover events on interactive gallery containers.
