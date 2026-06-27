# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-description/with-form-fields
- Registry URL: https://21st.dev/r/hero_ui/heroui-description
- Author: hero_ui
- Component slug: heroui-description
- Demo slug: with-form-fields
- Title: heroui-description
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-description with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-description__with-form-fields.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-description__with-form-fields.png

## Goal

Recreate this component in a React + TypeScript + Tailwind CSS project. Preserve the visual layout, spacing, colors, border radius, shadows, interaction behavior, animation behavior, responsive behavior, and dark mode behavior shown in the rendered demo.

## Implementation requirements

- Use React and TypeScript.
- Use Tailwind CSS classes whenever possible.
- Keep the component self-contained unless the source files require helper components.
- If the source uses CSS variables, custom CSS, animations, or keyframes, include them.
- If the source uses external packages, list and use the required packages.
- Preserve accessibility attributes, button semantics, links, keyboard behavior, and ARIA attributes when visible in the source.
- Do not replace the component with a simplified placeholder.
- Return complete production-ready code.

## Dependencies

No registry metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="heroui-description-scope flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8 text-foreground"><style>
  .heroui-description-scope,
  .heroui-description-scope * {
    box-sizing: border-box;
  }

  .heroui-description-field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: fit-content;
  }

  .heroui-description-label {
    margin: 0;
    color: lab(98.9676 -0.0000298023 -0.0000119209);
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
  }

  .light .heroui-description-label,
  [data-theme="light"] .heroui-description-label {
    color: lab(20.4636 0.430741 -1.47586);
  }

  .heroui-description-input {
    width: 13rem;
    height: 2.25rem;
    border: 0 solid transparent;
    border-radius: 0.75rem;
    background: lab(8.34178 0.607349 -2.12998);
    color: lab(98.9676 -0.0000298023 -0.0000119209);
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    outline: none;
    transition: box-shadow 150ms ease, background-color 150ms ease, color 150ms ease;
  }

  .heroui-description-input.heroui-description-input-wide {
    width: 16rem;
  }

  .light .heroui-description-input,
  [data-theme="light"] .heroui-description-input {
    background: lab(96.7868 -0.0000209808 -0.00000783577);
    color: lab(20.4636 0.430741 -1.47586);
  }

  .heroui-description-input::placeholder {
    color: lab(65.6464 1.53497 -5.42429);
    opacity: 1;
  }

  .light .heroui-description-input::placeholder,
  [data-theme="light"] .heroui-description-input::placeholder {
    color: lab(49.4507 1.03619 -3.64233);
  }

  .heroui-description-input:focus-visible {
    box-shadow: 0 0 0 2px oklab(0.62039 -0.0543154 -0.187265 / 0.58);
  }

  .heroui-description-input[aria-invalid="true"] {
    box-shadow: 0 0 0 1px lab(57.1026 68.7444 45.3406);
  }

  .heroui-description-input:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  .heroui-description-description {
    display: block;
    color: lab(65.6464 1.53497 -5.42429);
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 400;
    text-wrap: wrap;
    overflow-wrap: break-word;
  }

  .light .heroui-description-description,
  [data-theme="light"] .heroui-description-description {
    color: lab(49.4507 1.03619 -3.64233);
  }

  .heroui-description-field[data-disabled="true"] .heroui-description-description,
  .heroui-description-field[data-disabled="true"] .heroui-description-label {
    opacity: 0.55;
  }
</style><div class="heroui-description-field"><label class="label heroui-description-label" for="password">Password</label><input class="input input--primary heroui-description-input heroui-description-input-wide" aria-describedby="password-description" id="password" type="password"><span class="description heroui-description-description" data-slot="description" slot="description" id="password-description">Must be at least 8 characters with one uppercase letter</span></div></div></div>
```

## Public registry source files

No public registry source files were available.