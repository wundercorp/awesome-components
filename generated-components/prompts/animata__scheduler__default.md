# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/animata/scheduler/default
- Registry URL: https://21st.dev/r/animata/scheduler
- Author: animata
- Component slug: scheduler
- Demo slug: default
- Title: scheduler
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/animata/scheduler with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/animata__scheduler__default.html
- Local screenshot file: generated-21st-prompts/screenshots/animata__scheduler__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full h-screen justify-center items-center"><div class="mx-auto max-w-sm rounded-3xl border border-gray-200 bg-white p-6 shadow-md"><div class="mb-4 flex items-center justify-between"><span class="text-xl text-black">Is repeating</span><label class="inline-flex cursor-pointer items-center"><input class="peer sr-only" type="checkbox"><div class="rtl:peer-checked:after:-translate-x-[unset] peer relative h-8 w-[53px] rounded-full bg-gray-200 transition-colors duration-500 after:absolute after:start-[5px] after:top-[4px] after:h-6 after:w-6 after:rounded-full after:border after:border-white after:bg-white after:transition-all after:duration-300 after:content-[''] peer-checked:bg-[#95ef90] peer-checked:after:translate-x-[19px] peer-checked:after:border-white"></div></label></div><div class="mb-4 flex justify-between transition-opacity duration-500 ease-in-out opacity-40"><label class="mt-5 text-slate-800">Repeat</label><select disabled="" class="focus:ring-border-gray-100 mt-2 block w-[70%] rounded-xl border border-gray-100 bg-white px-3 py-3 font-bold text-black shadow-sm focus:border-gray-100 focus:outline-none"><option value="Daily">Daily</option><option value="Weekly">Weekly</option><option value="Monthly">Monthly</option></select></div><div class="flex items-center rounded-2xl bg-gray-100 p-4"><div class="grid grid-cols-7 justify-around gap-2"><div class="relative overflow-hidden text-foreground"><div class="group cursor-pointer select-none text-3xl font-bold"><span class="transition-all duration-1000 ease-slow w-[37px] h-[37px] item-center text-center opacity-50 text-sm text-black rounded-lg p-2 flex flex-col -translate-y-full">Mo</span><span class="block transition-all duration-1000 ease-slow absolute top-full w-[37px] h-[37px] item-center text-center text-sm text-black bg-white rounded-lg p-2 -translate-y-full">Mo</span></div></div><div class="relative overflow-hidden text-foreground"><div class="group cursor-pointer select-none text-3xl font-bold"><span class="transition-all duration-1000 ease-slow w-[37px] h-[37px] item-center text-center opacity-50 text-sm text-black rounded-lg p-2 flex flex-col">Tu</span><span class="block transition-all duration-1000 ease-slow absolute top-full w-[37px] h-[37px] item-center text-center text-sm text-black bg-white rounded-lg p-2">Tu</span></div></div><div class="relative overflow-hidden text-foreground"><div class="group cursor-pointer select-none text-3xl font-bold"><span class="transition-all duration-1000 ease-slow w-[37px] h-[37px] item-center text-center opacity-50 text-sm text-black rounded-lg p-2 flex flex-col -translate-y-full">We</span><span class="block transition-all duration-1000 ease-slow absolute top-full w-[37px] h-[37px] item-center text-center text-sm text-black bg-white rounded-lg p-2 -translate-y-full">We</span></div></div><div class="relative overflow-hidden text-foreground"><div class="group cursor-pointer select-none text-3xl font-bold"><span class="transition-all duration-1000 ease-slow w-[37px] h-[37px] item-center text-center opacity-50 text-sm text-black rounded-lg p-2 flex flex-col">Th</span><span class="block transition-all duration-1000 ease-slow absolute top-full w-[37px] h-[37px] item-center text-center text-sm text-black bg-white rounded-lg p-2">Th</span></div></div><div class="relative overflow-hidden text-foreground"><div class="group cursor-pointer select-none text-3xl font-bold"><span class="transition-all duration-1000 ease-slow w-[37px] h-[37px] item-center text-center opacity-50 text-sm text-black rounded-lg p-2 flex flex-col">Fr</span><span class="block transition-all duration-1000 ease-slow absolute top-full w-[37px] h-[37px] item-center text-center text-sm text-black bg-white rounded-lg p-2">Fr</span></div></div><div class="relative overflow-hidden text-foreground"><div class="group cursor-pointer select-none text-3xl font-bold"><span class="transition-all duration-1000 ease-slow w-[37px] h-[37px] item-center text-center opacity-50 text-sm text-black rounded-lg p-2 flex flex-col -translate-y-full">Sa</span><span class="block transition-all duration-1000 ease-slow absolute top-full w-[37px] h-[37px] item-center text-center text-sm text-black bg-white rounded-lg p-2 -translate-y-full">Sa</span></div></div><div class="relative overflow-hidden text-foreground"><div class="group cursor-pointer select-none text-3xl font-bold"><span class="transition-all duration-1000 ease-slow w-[37px] h-[37px] item-center text-center opacity-50 text-sm text-black rounded-lg p-2 flex flex-col">Su</span><span class="block transition-all duration-1000 ease-slow absolute top-full w-[37px] h-[37px] item-center text-center text-sm text-black bg-white rounded-lg p-2">Su</span></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.