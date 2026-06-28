# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shugar/calendar/compact
- Registry URL: https://21st.dev/r/shugar/calendar
- Author: shugar
- Component slug: calendar
- Demo slug: compact
- Title: calendar
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shugar/calendar with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shugar__calendar__compact.html
- Local screenshot file: generated-21st-prompts/screenshots/shugar__calendar__compact.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="self-start pt-30"><div class="relative"><div class="flex w-[220px]"><div><div class="inline-block text-sm font-sans w-[180px] absolute left-[38px] pl-[140px]"><div class="flex flex-col gap-2"><div class="flex items-center duration-150 font-sans border border-gray-alpha-400 hover:border-gray-alpha-500 focus-within:border-transparent focus-within:shadow-focus-input h-10 text-sm rounded-md bg-background-100 hover:z-10 rounded-l-none"><input class="w-full inline-flex appearance-none placeholder:text-gray-900 placeholder:opacity-70 outline-none px-3 bg-background-100 text-geist-foreground pl-2 placeholder:!text-gray-1000 placeholder:!opacity-100 !w-0 !px-0" placeholder="Select Period" value=""><div class="text-gray-700 fill-gray-700 h-full flex items-center justify-center pr-3  cursor-pointer w-10 !px-0 rounded-r-md"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" class="fill-gray-1000 duration-200"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z"></path></svg></div></div></div><div class="bg-background-100 rounded-xl shadow-menu absolute z-50 top-12 left-0 w-full opacity-0 pointer-events-none duration-200"><ul class="p-2 border-r border-r-gray-200"><li class="flex items-center cursor-pointer px-2 w-full h-9 rounded-md hover:bg-gray-alpha-300 active:bg-gray-alpha-300 font-sans text-sm text-gray-1000">Last 3 Days</li><li class="flex items-center cursor-pointer px-2 w-full h-9 rounded-md hover:bg-gray-alpha-300 active:bg-gray-alpha-300 font-sans text-sm text-gray-1000">Last 7 Days</li><li class="flex items-center cursor-pointer px-2 w-full h-9 rounded-md hover:bg-gray-alpha-300 active:bg-gray-alpha-300 font-sans text-sm text-gray-1000">Last 14 Days</li><li class="flex items-center cursor-pointer px-2 w-full h-9 rounded-md hover:bg-gray-alpha-300 active:bg-gray-alpha-300 font-sans text-sm text-gray-1000">Last Month</li></ul></div></div></div><div class="flex justify-between items-center"><div class="relative"><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-2.5 h-10 text-sm bg-background-100 hover:bg-gray-alpha-200 text-gray-1000 fill-gray-1000 border border-gray-alpha-400 rounded-md focus:shadow-focus-ring focus:outline-0 !justify-start focus:!border-transparent focus:!shadow-focus-input rounded-r-none -mr-[1px] w-[180px] gap-1.5"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5V1.25V2H10.5V1.25V0.5H12V1.25V2H14H15.5V3.5V13.5C15.5 14.8807 14.3807 16 13 16H3C1.61929 16 0.5 14.8807 0.5 13.5V3.5V2H2H4V1.25V0.5H5.5ZM2 3.5H14V6H2V3.5ZM2 7.5V13.5C2 14.0523 2.44772 14.5 3 14.5H13C13.5523 14.5 14 14.0523 14 13.5V7.5H2Z"></path></svg><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5"><div class="truncate pr-4">Select Date Range</div></span></button></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.