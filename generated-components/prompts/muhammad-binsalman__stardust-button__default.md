# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/muhammad-binsalman/stardust-button/default
- Registry URL: https://21st.dev/r/muhammad-binsalman/stardust-button
- Author: muhammad-binsalman
- Component slug: stardust-button
- Demo slug: default
- Title: stardust-button
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/muhammad-binsalman/stardust-button with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/muhammad-binsalman__stardust-button__default.html
- Local screenshot file: generated-21st-prompts/screenshots/muhammad-binsalman__stardust-button__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen bg-slate-200 dark:bg-stone-900 w-full flex items-center justify-center font-sans"><style>
    .pearl-button .wrap::before,
    .pearl-button .wrap::after {
      content: "";
      position: absolute;
      transition: all 0.3s ease;
    }
    
    .pearl-button .wrap::before {
      left: -15%;
      right: -15%;
      bottom: 25%;
      top: -100%;
      border-radius: 50%;
      background-color: rgba(64, 180, 255, 0.15);
    }
    
    .pearl-button .wrap::after {
      left: 6%;
      right: 6%;
      top: 12%;
      bottom: 40%;
      border-radius: 22px 22px 0 0;
      box-shadow: inset 0 10px 8px -10px rgba(129, 216, 255, 0.6);
      background: linear-gradient(
        180deg,
        rgba(64, 180, 255, 0.25) 0%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    
    .pearl-button .wrap p span:nth-child(2) {
      display: none;
    }
    
    .pearl-button:hover .wrap p span:nth-child(1) {
      display: none;
    }
    
    .pearl-button:hover .wrap p span:nth-child(2) {
      display: inline-block;
    }
    
    .pearl-button:hover {
      box-shadow:
        inset 0 0.3rem 0.5rem rgba(129, 216, 255, 0.4),
        inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
        inset 0 -0.4rem 0.9rem rgba(64, 180, 255, 0.6),
        0 3rem 3rem rgba(0, 0, 0, 0.3),
        0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
    }
    
    .pearl-button:hover .wrap::before {
      transform: translateY(-5%);
    }
    
    .pearl-button:hover .wrap::after {
      opacity: 0.4;
      transform: translateY(5%);
    }
    
    .pearl-button:hover .wrap p {
      transform: translateY(-4%);
    }
    
    .pearl-button:active {
      transform: translateY(4px);
      box-shadow:
        inset 0 0.3rem 0.5rem rgba(129, 216, 255, 0.5),
        inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.8),
        inset 0 -0.4rem 0.9rem rgba(64, 180, 255, 0.4),
        0 3rem 3rem rgba(0, 0, 0, 0.3),
        0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
    }
  </style><button class="pearl-button " style="--white: #e6f3ff; --bg: #0a1929; --radius: 100px; outline: none; cursor: pointer; border: 0px; position: relative; border-radius: var(--radius); background-color: var(--bg); transition: 0.2s; box-shadow: rgba(255, 255, 255, 0.3) 0px 0.3rem 0.9rem inset, rgba(0, 0, 0, 0.7) 0px -0.1rem 0.3rem inset, rgba(255, 255, 255, 0.5) 0px -0.4rem 0.9rem inset, rgba(0, 0, 0, 0.3) 0px 3rem 3rem, rgba(0, 0, 0, 0.8) 0px 1rem 1rem -0.6rem;"><div class="wrap" style="font-size: 25px; font-weight: 500; color: rgba(129, 216, 255, 0.9); padding: 32px 45px; border-radius: inherit; position: relative; overflow: hidden;"><p style="display: flex; align-items: center; gap: 12px; margin: 0px; transition: 0.2s; transform: translateY(2%); mask-image: linear-gradient(rgb(129, 216, 255) 40%, transparent);"><span>✧</span><span>✦</span>Launching Soon</p></div></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.