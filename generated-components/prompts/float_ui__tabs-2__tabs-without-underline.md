# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/float_ui/tabs-2/tabs-without-underline
- Registry URL: https://21st.dev/r/float_ui/tabs-2
- Author: float_ui
- Component slug: tabs-2
- Demo slug: tabs-without-underline
- Title: tabs-2
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/float_ui/tabs-2 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/float_ui__tabs-2__tabs-without-underline.html
- Local screenshot file: generated-21st-prompts/screenshots/float_ui__tabs-2__tabs-without-underline.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div dir="ltr" data-orientation="horizontal" class="max-w-screen-xl mt-2 mx-auto px-4 md:px-8"><div role="tablist" aria-orientation="horizontal" class="hidden gap-x-3 py-1 overflow-x-auto px-px text-sm sm:flex" aria-label="Manage your account" tabindex="0" data-orientation="horizontal" style="outline: none;"><button type="button" role="tab" aria-selected="true" aria-controls="radix-«r0»-content-Overview" data-state="active" id="radix-«r0»-trigger-Overview" class="data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700 data-[state=active]:shadow-sm outline-gray-800 py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-100 font-medium" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Overview</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-Integration" data-state="inactive" id="radix-«r0»-trigger-Integration" class="data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700 data-[state=active]:shadow-sm outline-gray-800 py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-100 font-medium" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Integration</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-Billing" data-state="inactive" id="radix-«r0»-trigger-Billing" class="data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700 data-[state=active]:shadow-sm outline-gray-800 py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-100 font-medium" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Billing</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-Transactions" data-state="inactive" id="radix-«r0»-trigger-Transactions" class="data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700 data-[state=active]:shadow-sm outline-gray-800 py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-100 font-medium" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Transactions</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-plans" data-state="inactive" id="radix-«r0»-trigger-plans" class="data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700 data-[state=active]:shadow-sm outline-gray-800 py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-100 font-medium" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">plans</button></div><div class="relative text-gray-500 sm:hidden"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg><select class="py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-gray-800 text-sm"><option idx="0">Overview</option><option idx="1">Integration</option><option idx="2">Billing</option><option idx="3">Transactions</option><option idx="4">plans</option></select></div><div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-Overview" id="radix-«r0»-content-Overview" tabindex="0" class="py-6" style="animation-duration: 0s;"><p class="text-xs leading-normal">This is <b>Overview</b> Tab</p></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-Integration" hidden="" id="radix-«r0»-content-Integration" tabindex="0" class="py-6"></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-Billing" hidden="" id="radix-«r0»-content-Billing" tabindex="0" class="py-6"></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-Transactions" hidden="" id="radix-«r0»-content-Transactions" tabindex="0" class="py-6"></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-plans" hidden="" id="radix-«r0»-content-plans" tabindex="0" class="py-6"></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.