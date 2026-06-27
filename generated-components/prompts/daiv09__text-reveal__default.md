# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/daiv09/text-reveal/default
- Registry URL: https://21st.dev/r/daiv09/text-reveal
- Author: daiv09
- Component slug: text-reveal
- Demo slug: default
- Title: text-reveal
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/daiv09/text-reveal with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/daiv09__text-reveal__default.html
- Local screenshot file: generated-21st-prompts/screenshots/daiv09__text-reveal__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen w-full flex items-center justify-center bg-zinc-50 dark:bg-black p-4 transition-colors"><div class="w-full max-w-3xl"><div class="text-reveal-container "><div class="text-wrapper"><h1 class="title" aria-label="Theme Aware"><span class="char" style="--index: 0;">T</span><span class="char" style="--index: 1;">h</span><span class="char" style="--index: 2;">e</span><span class="char" style="--index: 3;">m</span><span class="char" style="--index: 4;">e</span><span class="char" style="--index: 5;">&nbsp;</span><span class="char" style="--index: 6;">A</span><span class="char" style="--index: 7;">w</span><span class="char" style="--index: 8;">a</span><span class="char" style="--index: 9;">r</span><span class="char" style="--index: 10;">e</span></h1></div><button class="replay-button"><span class="btn-text">Replay Animation</span><div class="btn-shine"></div></button><style>
        /* --- THEME VARIABLES --- */
        .text-reveal-container {
          /* Light Mode Defaults (Zinc Theme) */
          --bg-color: #ffffff;
          --text-color: #18181b;      /* Zinc-900 */
          --btn-bg: #f4f4f5;          /* Zinc-100 */
          --btn-text: #18181b;
          --btn-border: #e4e4e7;      /* Zinc-200 */
          --btn-hover: #e4e4e7;
          --shine-color: rgba(0, 0, 0, 0.1);
          --container-border: #e4e4e7;
        }

        /* Dark Mode Overrides (System Preference OR .dark class) */
        @media (prefers-color-scheme: dark) {
          .text-reveal-container {
            --bg-color: #09090b;      /* Zinc-950 */
            --text-color: #fafafa;    /* Zinc-50 */
            --btn-bg: #27272a;        /* Zinc-800 */
            --btn-text: #ffffff;
            --btn-border: #3f3f46;    /* Zinc-700 */
            --btn-hover: #3f3f46;
            --shine-color: rgba(255, 255, 255, 0.15);
            --container-border: #27272a;
          }
        }

        /* Support for manual class-based dark mode (e.g., Tailwind's 'dark' class) */
        :global(.dark) .text-reveal-container {
          --bg-color: #09090b;
          --text-color: #fafafa;
          --btn-bg: #27272a;
          --btn-text: #ffffff;
          --btn-border: #3f3f46;
          --btn-hover: #3f3f46;
          --shine-color: rgba(255, 255, 255, 0.15);
          --container-border: #27272a;
        }

        /* --- Layout & Container --- */
        .text-reveal-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          
          /* Use Variables */
          background-color: var(--bg-color); 
          color: var(--text-color);
          border: 1px solid var(--container-border);
          
          border-radius: 12px;
          overflow: hidden;
          min-height: 300px;
          width: 100%;
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .text-wrapper {
          position: relative;
          z-index: 10;
        }

        /* --- Typography --- */
        .title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          color: var(--text-color);
          transition: color 0.3s ease;
        }

        /* --- Character Animation --- */
        .char {
          display: inline-block;
          opacity: 0;
          filter: blur(12px);
          transform: translateY(40%) scale(1.1) translateZ(0);
          animation: cinematic-reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: calc(0.04s * var(--index));
          will-change: transform, opacity, filter;
        }

        /* --- Button Styles --- */
        .replay-button {
          margin-top: 2.5rem;
          position: relative;
          padding: 0.75rem 1.5rem;
          
          /* Use Variables */
          background-color: var(--btn-bg);
          color: var(--btn-text);
          border: 1px solid var(--btn-border);
          
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          overflow: hidden;
          z-index: 20;
        }

        .replay-button:hover {
          background-color: var(--btn-hover);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .replay-button:active {
          transform: translateY(0);
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            var(--shine-color),
            transparent
          );
          transform: skewX(-20deg);
          animation: shine 4s infinite;
          pointer-events: none;
        }

        /* --- Keyframes --- */
        @keyframes cinematic-reveal {
          0% {
            opacity: 0;
            filter: blur(12px);
            transform: translateY(40%) scale(1.1);
          }
          50% {
             opacity: 0.7;
             filter: blur(4px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0) scale(1);
          }
        }

        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .char {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            animation: none !important;
          }
        }
      </style></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.