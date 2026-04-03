## 2025-05-14 - Accessible Gallery with Keyboard Support
**Learning:** For interactive image galleries that use 'hover' to show previews, it's crucial to synchronize 'focus' events and ensure that the preview area doesn't prematurely collapse when moving between mouse and keyboard interaction. Checking the state of all items in the row before hiding the shared preview provides a much smoother micro-UX.
**Action:** Use a helper function that checks if any relevant element in the same container is still ':hover' or ':focus' before triggering collapse animations.
