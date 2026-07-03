## 2025-05-14 - Keyboard Accessibility in Shared Preview Galleries
**Learning:** In legacy jQuery galleries where multiple items share a single expansion/preview area, using 'focusin' and 'focusout' (which bubble) combined with data-flags (e.g., 'hovered', 'focused') allows for robust state management. This prevents premature closure of the preview area when moving focus between elements or between mouse and keyboard.
**Action:** Use synchronized 'mouseenter/focusin' and 'mouseleave/focusout' handlers with debounced state checks to maintain UI stability in multi-trigger expansion components.
