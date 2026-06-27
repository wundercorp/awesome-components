# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/hero-1/default
- Registry URL: https://21st.dev/r/ravikatiyar/hero-1
- Author: ravikatiyar
- Component slug: hero-1
- Demo slug: default
- Title: hero-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/hero-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__hero-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__hero-1__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen w-full grid place-items-center p-8 font-sans transition-colors"><style>
        .glow-text::before {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #00cfff, #a600ff, #ff006e, #ff8800);
          filter: blur(20px) brightness(0.8);
          opacity: 0.7;
          border-radius: 100px;
          z-index: -1;
          pointer-events: none;
          background-size: 200% 200%;
          animation: gradientShift 12s ease-in-out infinite;
        }
        
        .glow-text::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          font-size: inherit;
          font-weight: inherit;
          font-family: inherit;
          letter-spacing: inherit;
          background: linear-gradient(90deg, #00cfff, #a600ff, #ff006e, #ff8800);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          mix-blend-mode: color-burn;
          filter: blur(3px) brightness(1.3);
          z-index: 0;
          pointer-events: none;
          background-size: 200% 200%;
          animation: gradientShift 12s ease-in-out infinite;
        }
        
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      </style><div class="flex flex-col items-center justify-center "><div class="text-2xl md:text-3xl font-medium text-foreground mb-4 text-center transition-opacity duration-300 ease-out">MacBook Pro</div><div class="relative"><div class="glow-text relative text-6xl md:text-7xl font-medium text-center text-white tracking-tight brightness-110 z-10" data-text="Built for Apple Intelligence.">Built for Apple Intelligence.</div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.