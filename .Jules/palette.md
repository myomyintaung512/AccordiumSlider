## 2025-05-14 - Synchronizing Hover and Focus in Legacy Components

**Learning:** Legacy jQuery components often lack focus states because they were built for mouse-only interactions. Refactoring hover-specific logic into shared `act` and `deact` functions allows for easy integration of `focusin` and `focusout` events, ensuring consistent visual behavior and accessibility without duplicating animation code.

**Action:** When encountering mouse-only interaction patterns (like `.hover()`), refactor the logic into internal helper functions that can be shared with focus and keyboard event handlers.
