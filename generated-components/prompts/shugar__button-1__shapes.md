# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shugar/button-1/shapes
- Registry URL: https://21st.dev/r/shugar/button-1
- Author: shugar
- Component slug: button-1
- Demo slug: shapes
- Title: button-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shugar/button-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shugar__button-1__shapes.html
- Local screenshot file: generated-21st-prompts/screenshots/shugar__button-1__shapes.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex justify-between items-center gap-2"><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 w-6 h-6 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded focus:shadow-focus-ring focus:outline-0" aria-label="Upload"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"></path></svg></span></button><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 w-8 h-8 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-md focus:shadow-focus-ring focus:outline-0" aria-label="Upload"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"></path></svg></span></button><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 w-10 h-10 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-md focus:shadow-focus-ring focus:outline-0" aria-label="Upload"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"></path></svg></span></button><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 w-12 h-12 text-base bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-lg focus:shadow-focus-ring focus:outline-0" aria-label="Upload"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"></path></svg></span></button><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 w-6 h-6 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-[100%] focus:shadow-focus-ring focus:outline-0" aria-label="Upload"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"></path></svg></span></button><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 w-8 h-8 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-[100%] focus:shadow-focus-ring focus:outline-0" aria-label="Upload"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"></path></svg></span></button><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 w-10 h-10 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-[100%] focus:shadow-focus-ring focus:outline-0" aria-label="Upload"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"></path></svg></span></button><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 w-12 h-12 text-base bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-[100%] focus:shadow-focus-ring focus:outline-0" aria-label="Upload"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"></path></svg></span></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.