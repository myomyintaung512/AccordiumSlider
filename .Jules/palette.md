## 2025-05-15 - Improving Legacy jQuery Gallery Accessibility
**Learning:** Legacy jQuery plugins that rely on 'hover' and 'click' on non-semantic 'div' elements exclude keyboard and screen reader users. Mapping 'mouseenter focusin' and 'mouseleave focusout' to the same handlers, and adding 'tabindex="0"' with 'role="link"', provides a consistent experience across all input methods.
**Action:** When working with legacy UI components, always verify keyboard focusability and ensure visual indicators (like 'outline') are present for the focused state.
