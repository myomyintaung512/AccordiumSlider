## 2026-05-31 - [Keyboard Accessibility for Legacy jQuery Galleries]
**Learning:** Legacy jQuery plugins that rely on `.hover()` or mouse events exclusively for UI transitions can be made accessible by refactoring to chained `.on('mouseenter focusin', ...)` and `.on('mouseleave focusout', ...)` listeners. Additionally, elements serving as interactive items (like links) must be explicitly given `role="link"` and `tabindex="0"`, and a `keydown` handler for the Enter key (using `e.which == 13`) must be added to simulate click behavior for keyboard users.
**Action:** When encountering mouse-only interaction patterns in jQuery, always implement the trifecta: focusability (`tabindex`), operability (`keydown`), and synchronized state transitions (`focusin`/`focusout`).

## 2026-05-31 - [Clean Verification Hygiene]
**Learning:** Automated verification scripts (Playwright/Python) and their artifacts (screenshots/videos) are essential for validating UX changes but must be purged before submission to maintain repository hygiene and adhere to line-count constraints.
**Action:** Always include a cleanup step in the plan to remove all `verify_*.py` files and `verification/` directories before final submission.
