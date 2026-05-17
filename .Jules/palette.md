## 2025-05-14 - Synchronizing Keyboard and Mouse Interaction States
**Learning:** In legacy jQuery galleries with manual animation queues, keyboard focus must be explicitly tracked using state flags (e.g., `.data('focused')`) to prevent mouse-out events from prematurely collapsing expanded items that still retain keyboard focus.
**Action:** Use chained `.on('mouseenter focusin', ...)` handlers and conditional state checks in 'mouseleave focusout' to ensure UI stability and prevent flickering during mixed-mode navigation.
