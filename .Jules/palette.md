## 2026-05-22 - [Keyboard Accessibility for Shared Preview Galleries]
**Learning:** In shared-preview galleries where multiple items target a single expansion area, using chained event handlers like `.on('mouseenter focusin', ...)` ensures synchronized state management for both mouse and keyboard users without duplicating logic.

**Action:** Use unified event handlers and ARIA attributes (role="link", aria-label) to mirror mouse interactions for keyboard users, and ensure 'Enter' key navigation is explicitly handled for clickable non-anchor elements.
