## 2026-06-19 - Synchronizing Keyboard and Mouse Interaction in Shared-Preview Galleries
**Learning:** In galleries where multiple items target a shared preview area, relying solely on hover/focus events can cause flickering when switching between mouse and keyboard. Tracking both 'hovered' and 'focused' states using jQuery `.data()` and using a micro-timeout for deactivation ensures smooth transitions.
**Action:** Use a 10ms timeout on focusout/mouseleave to check if the element is truly inactive (neither hovered nor focused) before triggering collapse animations.
