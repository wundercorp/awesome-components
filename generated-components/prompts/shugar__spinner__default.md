# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shugar/spinner/default
- Registry URL: https://21st.dev/r/shugar/spinner
- Author: shugar
- Component slug: spinner
- Demo slug: default
- Title: spinner
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shugar/spinner with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shugar__spinner__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shugar__spinner__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="absolute z-10 top-4 right-14 flex flex-col items-end gap-1"><button type="button" role="combobox" aria-controls="radix-:r0:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 gap-2 h-8"><span style="pointer-events: none;">Default</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="flex w-full justify-center relative"><div class="min-h-[100vh] flex flex-col gap-10 items-center justify-center pb-4"><div class="flex flex-col gap-5 w-[60%]"><div style="width: 20px; height: 20px;"><style>
          @keyframes spin {
              0% {
                  opacity: 0.15;
              }
              100% {
                  opacity: 1;
              }
          }
        </style><div class="relative top-1/2 left-1/2" style="width: 20px; height: 20px;"><div class="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px]" style="background-color: rgb(143, 143, 143); animation: 1.2s linear -1.2s infinite normal none running spin; transform: rotate(0.0001deg) translate(146%);"></div><div class="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px]" style="background-color: rgb(143, 143, 143); animation: 1.2s linear -1.1s infinite normal none running spin; transform: rotate(30deg) translate(146%);"></div><div class="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px]" style="background-color: rgb(143, 143, 143); animation: 1.2s linear -1s infinite normal none running spin; transform: rotate(60deg) translate(146%);"></div><div class="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px]" style="background-color: rgb(143, 143, 143); animation: 1.2s linear -0.9s infinite normal none running spin; transform: rotate(90deg) translate(146%);"></div><div class="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px]" style="background-color: rgb(143, 143, 143); animation: 1.2s linear -0.8s infinite normal none running spin; transform: rotate(120deg) translate(146%);"></div><div class="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px]" style="background-color: rgb(143, 143, 143); animation: 1.2s linear -0.7s infinite normal none running spin; transform: rotate(150deg) translate(146%);"></div><div class="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px]" style="background-color: rgb(143, 143, 143); animation: 1.2s linear -0.6s infinite normal none running spin; transform: rotate(180deg) translate(146%);"></div><div class="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px]" style="background-color: rgb(143, 143, 143); animation: 1.2s linear -0.5s infinite normal none running spin; transform: rotate(210deg) translate(146%);"></div><div class="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px]" style="background-color: rgb(143, 143, 143); animation: 1.2s linear -0.4s infinite normal none running spin; transform: rotate(240deg) translate(146%);"></div><div class="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px]" style="background-color: rgb(143, 143, 143); animation: 1.2s linear -0.3s infinite normal none running spin; transform: rotate(270deg) translate(146%);"></div><div class="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px]" style="background-color: rgb(143, 143, 143); animation: 1.2s linear -0.2s infinite normal none running spin; transform: rotate(300deg) translate(146%);"></div><div class="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px]" style="background-color: rgb(143, 143, 143); animation: 1.2s linear -0.1s infinite normal none running spin; transform: rotate(330deg) translate(146%);"></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.