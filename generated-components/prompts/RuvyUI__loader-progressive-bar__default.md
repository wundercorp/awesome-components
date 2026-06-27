# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/RuvyUI/loader-progressive-bar/default
- Registry URL: https://21st.dev/r/RuvyUI/loader-progressive-bar
- Author: RuvyUI
- Component slug: loader-progressive-bar
- Demo slug: default
- Title: loader-progressive-bar
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/RuvyUI/loader-progressive-bar with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/RuvyUI__loader-progressive-bar__default.html
- Local screenshot file: generated-21st-prompts/screenshots/RuvyUI__loader-progressive-bar__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center gap-1.5"><div class="dark:text-white text-black text-[14pt] font-semibold ml-[10px]">Loading<span class="ml-[3px] animate-[blink_1.5s_infinite]">.</span><span class="ml-[3px] animate-[blink_1.5s_infinite] [animation-delay:0.3s]">.</span><span class="ml-[3px] animate-[blink_1.5s_infinite] [animation-delay:0.6s]">.</span></div><div class="flex items-center box-border p-[5px] w-[200px] h-[30px] bg-[#212121] shadow-[inset_-2px_2px_4px_#0c0c0c] rounded-[15px]"><div class="relative flex justify-center flex-col w-0 h-[20px] overflow-hidden rounded-[10px]
          bg-gradient-to-t from-[rgba(222,74,15,1)] to-[rgba(249,199,79,1)]
          animate-[loading_4s_ease-out_infinite]"><div class="absolute flex items-center gap-[18px]"><div class="w-[10px] h-[45px] opacity-30 rotate-45
                  bg-gradient-to-tr from-white to-transparent"></div><div class="w-[10px] h-[45px] opacity-30 rotate-45
                  bg-gradient-to-tr from-white to-transparent"></div><div class="w-[10px] h-[45px] opacity-30 rotate-45
                  bg-gradient-to-tr from-white to-transparent"></div><div class="w-[10px] h-[45px] opacity-30 rotate-45
                  bg-gradient-to-tr from-white to-transparent"></div><div class="w-[10px] h-[45px] opacity-30 rotate-45
                  bg-gradient-to-tr from-white to-transparent"></div><div class="w-[10px] h-[45px] opacity-30 rotate-45
                  bg-gradient-to-tr from-white to-transparent"></div><div class="w-[10px] h-[45px] opacity-30 rotate-45
                  bg-gradient-to-tr from-white to-transparent"></div><div class="w-[10px] h-[45px] opacity-30 rotate-45
                  bg-gradient-to-tr from-white to-transparent"></div><div class="w-[10px] h-[45px] opacity-30 rotate-45
                  bg-gradient-to-tr from-white to-transparent"></div><div class="w-[10px] h-[45px] opacity-30 rotate-45
                  bg-gradient-to-tr from-white to-transparent"></div></div></div></div><style>
        @keyframes loading {
          0% {
            width: 0;
          }
          80% {
            width: 100%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.