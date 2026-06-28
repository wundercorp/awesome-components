# Build Linear Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Linear Card screenshot](screenshot.png)

## Component

- Author group: `ui-layouts`
- Component: `linear-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ui-layouts
- Component slug: linear-card
- Demo slug: default
- Title: linear-card
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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_ComponentDemo">ComponentDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex gap-4"><div class="flex gap-4"><div class="relative cursor-pointer flex w-full flex-col overflow-hidden border dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950" role="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="dialog-content-«r0»" style="border-radius: 12px; opacity: 1;"><img alt="" class="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=1744&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="opacity: 1;"><div class="flex flex-grow flex-row items-end justify-between p-3"><div><div class="text-zinc-950 text-xl dark:text-zinc-50" style="opacity: 1;">Accordion</div></div><button class="absolute bottom-2 right-2 p-2 dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-6 h-6" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></div></div><div class="relative cursor-pointer flex w-full flex-col overflow-hidden border dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950" role="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="dialog-content-«r1»" style="border-radius: 12px; opacity: 1;"><img alt="" class="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1632395627760-72e6eca7f9c7?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHx0ZWNobm9sb2d5JTIwcGxhbmV0fGVufDB8fDB8fHww" style="opacity: 1;"><div class="flex flex-grow flex-row items-end justify-between p-3"><div><div class="text-zinc-950 text-xl dark:text-zinc-50" style="opacity: 1;">Globe Section</div></div><button class="absolute bottom-2 right-2 p-2 dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-6 h-6" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></div></div><div class="relative cursor-pointer flex w-full flex-col overflow-hidden border dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950" role="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="dialog-content-«r2»" style="border-radius: 12px; opacity: 1;"><img alt="" class="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1749680776469-77aae06bc299?q=80&amp;w=1887&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="opacity: 1;"><div class="flex flex-grow flex-row items-end justify-between p-3"><div><div class="text-zinc-950 text-xl dark:text-zinc-50" style="opacity: 1;">Image Mouse Trail</div></div><button class="absolute bottom-2 right-2 p-2 dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-6 h-6" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
