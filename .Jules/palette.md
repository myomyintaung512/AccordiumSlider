## 2026-03-30 - Keyboard Accessibility & ARIA Labels in Custom Accordion Galleries

**Learning:** Interactive accordion gallery items created with custom `<div>` containers often lack accessibility metadata and keyboard navigation support, making them unusable for keyboard and screen reader users. Deriving accessible ARIA labels from item text (or fallbacks) and supporting keyboard events (`Enter`/`Space`) while respecting nested links prevents double navigation triggers.

**Action:** When making custom interactive containers focusable (`tabindex="0"`), add explicit `role="link"` or `role="button"`, synthesize ARIA labels, bind keyboard activation handlers, and check `$(e.target).is('a')` so nested interactive elements retain their default behavior.
