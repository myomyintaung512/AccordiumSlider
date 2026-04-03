# Palette's Journal - mmDeveloperSlider

## 2024-05-14 - Accessible Retrofitting for Legacy jQuery Components
**Learning:** Legacy UI components built with non-semantic elements (like `div` with background images) lack basic accessibility. Assigning `role="link"` and `tabindex="0"` is essential, but must be paired with dynamic `aria-label` generation based on child text or target URLs to be truly meaningful for screen readers. Furthermore, legacy `.hover()` listeners must be synchronized with `focusin`/`focusout` events, and manual focus checks are required to prevent UI collapse during keyboard interaction.
**Action:** Always synchronize `hover` and `focus` logic; use `e.preventDefault()` for Space key when implementing custom keyboard triggers to prevent layout scrolling. Inject dynamic CSS via JavaScript when specific design tokens (like `border_color`) are only available as runtime variables.
