# Build To Do Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![To Do Card screenshot](screenshot.png)

## Component

- Author group: `rafa-porto`
- Component: `to-do-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: rafa-porto
- Component slug: to-do-card
- Demo slug: default
- Title: to-do-card
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-[380px] rounded-2xl shadow-lg border overflow-hidden bg-white transition-all duration-500 border-slate-100"><div class="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-yellow-300 to-yellow-200"><div class="flex items-center space-x-3"><span class="text-sm font-semibold text-gray-900">Sat, Jun 27, 2026</span><span class="bg-black/10 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">22:03</span></div><button class="text-gray-900 font-semibold text-sm hover:text-gray-700">Done</button></div><div class="relative p-5 bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:10px_10px]"><h3 class="text-lg font-bold text-gray-900 mb-4">Things to do today</h3><ul class="space-y-2"><li class="flex items-center gap-3 px-2 py-1 rounded-lg transition "><label class="relative inline-flex items-center justify-center w-6 h-6"><input class="peer appearance-none absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="checkbox"><span class="flex items-center justify-center w-5 h-5 rounded-md border transition-all duration-200 ease-out transform border-gray-300 bg-white scale-100"><svg class="w-3 h-3 text-white transition-opacity duration-200 opacity-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 9"><path d="M1 4.2L4 7L11 1" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label><span class="text-sm transition-all duration-200 text-gray-900">Review Calendar PR (React/TS)</span></li><li class="flex items-center gap-3 px-2 py-1 rounded-lg transition bg-slate-100"><label class="relative inline-flex items-center justify-center w-6 h-6"><input class="peer appearance-none absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="checkbox" checked=""><span class="flex items-center justify-center w-5 h-5 rounded-md border transition-all duration-200 ease-out transform bg-gray-900 border-gray-900 scale-95"><svg class="w-3 h-3 text-white transition-opacity duration-200 opacity-100" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 9"><path d="M1 4.2L4 7L11 1" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label><span class="text-sm transition-all duration-200 font-semibold text-gray-900 translate-x-[2px]">Implement authentication in the email provider</span></li><li class="flex items-center gap-3 px-2 py-1 rounded-lg transition "><label class="relative inline-flex items-center justify-center w-6 h-6"><input class="peer appearance-none absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="checkbox"><span class="flex items-center justify-center w-5 h-5 rounded-md border transition-all duration-200 ease-out transform border-gray-300 bg-white scale-100"><svg class="w-3 h-3 text-white transition-opacity duration-200 opacity-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 9"><path d="M1 4.2L4 7L11 1" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label><span class="text-sm transition-all duration-200 text-gray-900">Refactor components in the Tauri/React 19 app</span></li><li class="flex items-center gap-3 px-2 py-1 rounded-lg transition "><label class="relative inline-flex items-center justify-center w-6 h-6"><input class="peer appearance-none absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="checkbox"><span class="flex items-center justify-center w-5 h-5 rounded-md border transition-all duration-200 ease-out transform border-gray-300 bg-white scale-100"><svg class="w-3 h-3 text-white transition-opacity duration-200 opacity-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 9"><path d="M1 4.2L4 7L11 1" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label><span class="text-sm transition-all duration-200 text-gray-900">Test image downloads in Novon</span></li><li class="flex items-center gap-3 px-2 py-1 rounded-lg transition bg-slate-100"><label class="relative inline-flex items-center justify-center w-6 h-6"><input class="peer appearance-none absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="checkbox" checked=""><span class="flex items-center justify-center w-5 h-5 rounded-md border transition-all duration-200 ease-out transform bg-gray-900 border-gray-900 scale-95"><svg class="w-3 h-3 text-white transition-opacity duration-200 opacity-100" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 9"><path d="M1 4.2L4 7L11 1" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label><span class="text-sm transition-all duration-200 font-semibold text-gray-900 translate-x-[2px]">Organize CSS and layouts</span></li><li class="flex items-center gap-3 px-2 py-1 rounded-lg transition "><label class="relative inline-flex items-center justify-center w-6 h-6"><input class="peer appearance-none absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="checkbox"><span class="flex items-center justify-center w-5 h-5 rounded-md border transition-all duration-200 ease-out transform border-gray-300 bg-white scale-100"><svg class="w-3 h-3 text-white transition-opacity duration-200 opacity-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 9"><path d="M1 4.2L4 7L11 1" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label><span class="text-sm transition-all duration-200 text-gray-900">Draft the apps roadmap</span></li></ul><p class="mt-4 text-sm text-gray-700 font-medium">Keep up the great work today!</p></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
