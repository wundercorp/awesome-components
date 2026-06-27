# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/rahil1202/scroll-hero-section/default
- Registry URL: https://21st.dev/r/rahil1202/scroll-hero-section
- Author: rahil1202
- Component slug: scroll-hero-section
- Demo slug: default
- Title: scroll-hero-section
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/rahil1202/scroll-hero-section with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/rahil1202__scroll-hero-section__default.html
- Local screenshot file: generated-21st-prompts/screenshots/rahil1202__scroll-hero-section__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen w-screen" style="--count: 7;"><header class="content fluid"><section class="content"><h1 class="sr-only sm:not-sr-only"><span aria-hidden="true">you can&nbsp;</span><span class="sr-only">you can ship things.</span></h1><ul aria-hidden="true"><li style="--i: 0;">design.</li><li style="--i: 1;">prototype.</li><li style="--i: 2;">solve.</li><li style="--i: 3;">build.</li><li style="--i: 4;">develop.</li><li style="--i: 5;">cook.</li><li style="--i: 6;">ship.</li></ul></section></header><main><section><p class="fluid">and i'll show you how.<br><a href="https://rahil.pro">rahil.pro</a>.</p><a class="bear-link" href="https://twitter.com/" target="_blank" rel="noreferrer noopener" aria-label="Follow on X"><svg class="w-9" viewBox="0 0 969 955" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="161.191" cy="320.191" r="133.191" stroke="currentColor" stroke-width="20"></circle><circle cx="806.809" cy="320.191" r="133.191" stroke="currentColor" stroke-width="20"></circle><circle cx="695.019" cy="587.733" r="31.4016" fill="currentColor"></circle><circle cx="272.981" cy="587.733" r="31.4016" fill="currentColor"></circle><path d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z" fill="currentColor"></path><rect x="310.42" y="448.31" width="343.468" height="51.4986" fill="#FF1E1E"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z" fill="currentColor"></path></svg></a><a class="bear-link" href="https://twitter.com/" target="_blank" rel="noreferrer noopener" aria-label="Follow on X (secondary)" style="left: 4.5rem;"><svg class="w-9" viewBox="0 0 969 955" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="161.191" cy="320.191" r="133.191" stroke="currentColor" stroke-width="20"></circle><circle cx="806.809" cy="320.191" r="133.191" stroke="currentColor" stroke-width="20"></circle><circle cx="695.019" cy="587.733" r="31.4016" fill="currentColor"></circle><circle cx="272.981" cy="587.733" r="31.4016" fill="currentColor"></circle><path d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z" fill="currentColor"></path><rect x="310.42" y="448.31" width="343.468" height="51.4986" fill="#FF1E1E"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z" fill="currentColor"></path></svg></a></section></main><footer>ʕ⊙ᴥ⊙ʔ Rahil Vahora © 2025</footer><style>
        @layer base, stick, demo, debug;

        :root {
          --start: 50vh;
          --space: 50vh;
          --hue: 280;
          --accent: light-dark(hsl(var(--hue) 100% 50%), hsl(var(--hue) 90% 75%));
          --switch: canvas;
          --font-size-min: 14;
          --font-size-max: 20;
          --font-ratio-min: 1.1;
          --font-ratio-max: 1.33;
          --font-width-min: 375;
          --font-width-max: 1500;
        }
        [data-theme='dark'] { --switch: #000; color-scheme: dark only; }
        [data-theme='light'] { --switch: #fff; color-scheme: light only; }
        html { color-scheme: light dark; scrollbar-color: var(--accent) #0000; }
        *, *::before, *::after { box-sizing: border-box; }

        body {
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            Helvetica Neue, Arial, Noto Sans, Apple Color Emoji, Segoe UI Emoji;
          background: light-dark(white, black);
        }

        /* Screen grid background */
        body::before {
          --size: 45px; --line: color-mix(in hsl, canvasText, transparent 80%);
          content: '';
          position: fixed; inset: 0; z-index: -1;
          background:
            linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size))
              calc(var(--size) * 0.36) 50% / var(--size) var(--size),
            linear-gradient(var(--line) 1px, transparent 1px var(--size)) 0%
              calc(var(--size) * 0.32) / var(--size) var(--size);
          mask: linear-gradient(-20deg, transparent 50%, white);
          pointer-events: none;
        }

        /* Utilities */
        .sr-only {
          position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
        }
        .fluid {
          --fluid-min: calc(var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0)));
          --fluid-max: calc(var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0)));
          --fluid-preferred: calc((var(--fluid-max) - var(--fluid-min)) / (var(--font-width-max) - var(--font-width-min)));
          --fluid-type: clamp(
            (var(--fluid-min) / 16) * 1rem,
            ((var(--fluid-min) / 16) * 1rem)
              - (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem)
              + (var(--fluid-preferred) * var(--variable-unit, 100vi)),
            (var(--fluid-max) / 16) * 1rem
          );
          font-size: var(--fluid-type);
        }

        /* Sticky header logic */
        header {
          --font-level: 4;
          --font-size-min: 24;
          position: sticky;
          top: calc((var(--count) - 1) * -1lh);
          line-height: 1.2;
          display: flex;
          align-items: start;
          width: 100%;
          margin-bottom: var(--space);
        }
        header section:first-of-type {
          display: flex; width: 100%;
          align-items: start; justify-content: center;
          padding-top: calc(var(--start) - 0.5lh);
        }
        header section:first-of-type h1 {
          position: sticky; top: calc(var(--start) - 0.5lh);
          margin: 0; font-weight: 600;
        }

        ul {
          font-weight: 600; list-style: none; padding: 0; margin: 0;
        }

        li {
          --dimmed: color-mix(in oklch, canvasText, #0000 80%);
          background:
            linear-gradient(
              180deg,
              var(--dimmed) 0 calc(var(--start) - 0.5lh),
              var(--accent) calc(var(--start) - 0.55lh) calc(var(--start) + 0.55lh),
              var(--dimmed) calc(var(--start) + 0.5lh)
            );
          background-attachment: fixed;
          color: #0000;
          background-clip: text;
        }

        main {
          width: 100%; height: 100vh; position: relative; z-index: 2; color: canvas;
        }
        main::before {
          content: ''; position: absolute; inset: 0; z-index: -1;
          background: light-dark(#000, #fff); border-radius: 1rem 1rem 0 0;
        }
        main section {
          --font-level: 4; --font-size-min: 20;
          height: 100%; width: 100%; display: flex; place-items: center;
        }
        main section p {
          margin: 0; font-weight: 600; white-space: nowrap;
        }
        main section a:not(.bear-link) {
          color: var(--accent); text-decoration: none; text-underline-offset: 0.1lh;
        }
        main section a:not(.bear-link):is(:hover, :focus-visible) { text-decoration: underline; }

        .bear-link {
          color: canvasText;
          position: fixed; top: 1rem; left: 1rem;
          width: 48px; aspect-ratio: 1;
          display: grid; place-items: center; opacity: 0.8;
        }
        .bear-link:is(:hover, :focus-visible) { opacity: 1; }
        .bear-link svg { width: 75%; }

        footer {
          padding-block: 2rem; font-size: 0.875rem; font-weight: 300;
          color: color-mix(in hsl, canvas, #0000 35%); text-align: center; width: 100%;
          background: light-dark(#000, #fff);
        }

        /* View-timeline progressive enhancement */
        @supports (animation-timeline: view()) {
          [data-animate='true'] main { view-timeline: --section; }
          [data-animate='true'] main::before {
            transform-origin: 50% 100%;
            scale: 0.9;
            animation: grow both ease-in-out;
            animation-timeline: --section;
            animation-range: entry 50%;
          }
          [data-animate='true'] main section p {
            position: fixed; top: 50%; left: 50%; translate: -50% -50%;
            animation: reveal both ease-in-out;
            animation-timeline: --section;
            animation-range: entry 50%;
          }
          [data-animate='true'] main .bear-link {
            animation: switch both ease-in-out;
            animation-timeline: --section;
            animation-range: entry 50%;
          }
          @keyframes switch { to { color: var(--switch); } }
          @keyframes reveal { from { opacity: 0; } to { opacity: 1; } }
          @keyframes grow { to { scale: 1; border-radius: 0; } }
        }

        /* Debug */
        [data-debug='true'] li { outline: 0.05em dashed currentColor; }
        [data-debug='true'] :is(h2, li:last-of-type) { outline: 0.05em dashed canvasText; }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.