## 2026-06-10 - Synchronized Hover and Focus States in Shared Previews
**Learning:** In galleries with a shared preview area (like this accordion), simply adding focus listeners is insufficient. Users often transition between mouse and keyboard. Tracking both 'hovered' and 'focused' states via jQuery '.data()' ensures that the preview doesn't prematurely close (flicker) when one interaction ends but the other is still active.
**Action:** Use dual-flag state management (hover/focus) for any interactive element that triggers a shared or global UI state change.
