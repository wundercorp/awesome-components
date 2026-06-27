# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/aliimam/button-rotate/default
- Registry URL: https://21st.dev/r/aliimam/button-rotate
- Author: aliimam
- Component slug: button-rotate
- Demo slug: default
- Title: button-rotate
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/aliimam/button-rotate with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/aliimam__button-rotate__default.html
- Local screenshot file: generated-21st-prompts/screenshots/aliimam__button-rotate__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="border p-1 rounded-full border-dotted border-primary"><button class="items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 relative w-[100px] h-[100px] rounded-full overflow-hidden p-0 grid place-content-center bg-primary"><p class="absolute inset-0" style="animation: 8s linear 0s infinite normal none running text-rotation; position: absolute; inset: 0px;"><span style="position: absolute; inset: 6px; transform: rotate(0deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">S</span><span style="position: absolute; inset: 6px; transform: rotate(19deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">E</span><span style="position: absolute; inset: 6px; transform: rotate(38deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">X</span><span style="position: absolute; inset: 6px; transform: rotate(57deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">Y</span><span style="position: absolute; inset: 6px; transform: rotate(76deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">&nbsp;</span><span style="position: absolute; inset: 6px; transform: rotate(95deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">S</span><span style="position: absolute; inset: 6px; transform: rotate(114deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">H</span><span style="position: absolute; inset: 6px; transform: rotate(133deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">A</span><span style="position: absolute; inset: 6px; transform: rotate(152deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">D</span><span style="position: absolute; inset: 6px; transform: rotate(171deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">C</span><span style="position: absolute; inset: 6px; transform: rotate(190deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">N</span><span style="position: absolute; inset: 6px; transform: rotate(209deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">&nbsp;</span><span style="position: absolute; inset: 6px; transform: rotate(228deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">B</span><span style="position: absolute; inset: 6px; transform: rotate(247deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">U</span><span style="position: absolute; inset: 6px; transform: rotate(266deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">T</span><span style="position: absolute; inset: 6px; transform: rotate(285deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">T</span><span style="position: absolute; inset: 6px; transform: rotate(304deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">O</span><span style="position: absolute; inset: 6px; transform: rotate(323deg); transform-origin: 50% 50%; user-select: none; display: inline-block;">N</span></p><div class="relative w-[40px] h-[40px] rounded-full text-primary bg-white flex items-center justify-center overflow-hidden"><svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute w-4 h-4  transition-transform duration-300 ease-in-out" style="transform: translate(0px, 0px);"><path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path></svg><svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute w-4 h-4  transition-transform duration-300 ease-in-out" style="transform: translate(-150%, 150%);"><path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path></svg></div><style>
        @keyframes text-rotation {
          to {
            rotate: 360deg;
          }
        }
        p {
          animation: text-rotation 8s linear infinite;
        }
        span {
          user-select: none;
        }
        button:hover svg:first-child {
          transform: translate(150%, -150%);
          color: black;
        }
        button:hover svg:last-child {
          transform: translate(0);
          color: black;
          transition-delay: 0.1s;
        }
      </style></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.