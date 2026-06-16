## 2026-06-16 - [Keyboard Accessibility & Preview Coordination]
**Learning:** In shared-preview galleries (like junoaccodium), using a micro-timeout and cross-checking sibling states (hovered/focused) is essential to prevent visual flickering when moving focus between items. Direct state clearing on an element's blur/mouseleave often results in race conditions that prematurely close the shared expansion area.
**Action:** When implementing focus/hover states for shared UI components, always check if any other related element is active before triggering deactivation animations.
