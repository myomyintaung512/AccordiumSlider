## 2025-05-15 - [Legacy jQuery Gallery Accessibility]
**Learning:** Legacy galleries often use non-semantic `div` elements with CSS background images, making them completely invisible to screen readers and keyboard users. Chaining jQuery events like `.on('mouseenter focusin', ...)` is an efficient way to synchronize hover and focus states without duplicating logic.
**Action:** Always assign `role`, `tabindex`, and `aria-label` to interactive gallery items, and ensure event handlers cover both pointer and keyboard interactions.
