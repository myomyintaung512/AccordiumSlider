## 2025-05-14 - Stabilizing Focus-Triggered Animations in Legacy Components
**Learning:** In legacy jQuery components where interactive "boxes" contain nested links, using `focusout` to trigger deactivation animations can cause flickering as focus moves between the container and its children. A small debounce (50ms) on the deactivation logic allows subsequent `focusin` events to cancel the collapse, ensuring a smooth transition.
**Action:** Always use a container-specific timer to debounce deactivation animations in shared interactive containers to handle focus transitions between nested elements gracefully.

## 2025-05-14 - Making Div-based Interactive Elements Accessible
**Learning:** Interactive elements built with `div` tags require `role="link"` (or appropriate role), `tabindex="0"`, and an `aria-label` to be discoverable and usable by screen readers and keyboard users. Additionally, `keydown` listeners for Enter and Space are necessary to match the behavior of standard links.
**Action:** When refactoring non-semantic interactive elements, ensure both ARIA attributes and keyboard event listeners are implemented to provide a "link-like" experience.
