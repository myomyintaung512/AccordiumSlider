## 2024-05-16 - [Keyboard Accessibility for Gallery Items]
**Learning:** Legacy gallery plugins often use non-semantic elements (like divs) for interactive items, making them invisible to keyboard users and screen readers.
**Action:** Always assign `role="link"` and `tabindex="0"` to these elements, and provide dynamic `aria-label` attributes. Synchronize 'hover' and 'focus' events to ensure consistent visual feedback.
