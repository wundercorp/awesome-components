# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/arihantcodes_1f7b8c4d/status-badge/default
- Registry URL: https://21st.dev/r/arihantcodes_1f7b8c4d/status-badge
- Author: arihantcodes_1f7b8c4d
- Component slug: status-badge
- Demo slug: default
- Title: status-badge
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/arihantcodes_1f7b8c4d/status-badge with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/arihantcodes_1f7b8c4d__status-badge__default.html
- Local screenshot file: generated-21st-prompts/screenshots/arihantcodes_1f7b8c4d__status-badge__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center gap-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-4 "><div class="w-40 h-[35px] flex items-center justify-center bg-orange-50 rounded-xl "><h1 class="flex items-center  text-[#EAA65D] font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert w-4 h-4 mr-2" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>Pending</h1></div><div class="w-40 h-[35px] flex items-center justify-center bg-rose-50 rounded-xl "><h1 class="flex items-center  text-[#D57463] font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x w-4 h-4 mr-2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>Failed</h1></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 "><div class="w-40 h-[35px] flex items-center justify-center bg-emerald-50 rounded-xl "><h1 class="flex items-center  text-[#57BC6C] font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-4 h-4 mr-2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Success</h1></div><div class="w-40 h-[35px] flex items-center justify-center bg-sky-100 rounded-xl "><h1 class="flex items-center  text-[#008AF5] font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dashed w-4 h-4 mr-2" aria-hidden="true"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path><path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path><path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path><path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path></svg>In progress</h1></div> <div class="w-40 h-[35px] flex items-center justify-center bg-yellow-50 rounded-xl "><h1 class="flex items-center  text-[#F0B13D] font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-search w-4 h-4 mr-2" aria-hidden="true"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16-1.9-1.9"></path></svg>In review</h1></div> </div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="w-40 h-[35px] flex items-center justify-center bg-zinc-100 rounded-xl "><h1 class="flex items-center  text-[#777777] font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock5 lucide-clock-5 w-4 h-4 mr-2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14.5 16"></polyline></svg>Expired</h1></div><div class="w-40 h-[35px] flex items-center justify-center bg-violet-50 rounded-xl "><h1 class="flex items-center  text-[#6C3CF0] font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock5 lucide-clock-5 w-4 h-4 mr-2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14.5 16"></polyline></svg>Submited</h1></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.