# Build Api Playground in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Api Playground screenshot](screenshot.png)

## Component

- Author group: `nparashar150`
- Component: `api-playground`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: nparashar150
- Component slug: api-playground
- Demo slug: default
- Title: api-playground
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen w-full bg-gray-50 dark:bg-neutral-950"><div class="container mx-auto py-20 px-4"><div class="max-w-7xl mx-auto"><div class="flex flex-nowrap flex-row items-center justify-between w-full mb-8"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">API Playground</h1><p class="text-gray-600 dark:text-gray-100">Test and configure APIs with a clean, powerful interface</p></div><button class="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-4 w-4" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>View Code</button></div><div class="bg-white dark:bg-neutral-950 rounded-lg shadow-sm border p-4 h-[600px]"><div class="flex w-full data-[panel-group-direction=vertical]:flex-col h-full gap-4 bg-white dark:bg-neutral-950" data-panel-group="" data-panel-group-direction="horizontal" data-panel-group-id="«r0»" style="display: flex; flex-direction: row; height: 100%; overflow: hidden; width: 100%;"><div class="" id="«r1»" data-panel-group-id="«r0»" data-panel="" data-panel-id="«r1»" data-panel-size="66.0" style="flex: 66 1 0px; overflow: hidden;"><div class="flex flex-col gap-4 h-full p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700/40"><div class="flex flex-col sm:flex-row gap-3"><button class="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full sm:w-[90px] justify-between" type="button" id="radix-«r2»" aria-haspopup="menu" aria-expanded="false" data-state="closed">GET<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 ml-2" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button><input class="flex w-full py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 h-10 bg-white/95 dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-400/25" placeholder="Enter API URL or paste cURL command" value=""></div><div class="flex gap-1 border-b border-gray-200 dark:border-gray-700"><button class="px-4 py-3 text-sm font-medium border-b-2 -mb-[2px] transition-colors rounded-t-md border-blue-500 bg-white/60 dark:bg-neutral-800/60 text-blue-600 dark:text-blue-300">Headers</button><button class="px-4 py-3 text-sm font-medium border-b-2 -mb-[2px] transition-colors rounded-t-md border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Path</button><button class="px-4 py-3 text-sm font-medium border-b-2 -mb-[2px] transition-colors rounded-t-md border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Query</button></div><div class="flex-1 overflow-y-auto py-4"><div class="space-y-3"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 mt-4 h-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4 mr-2" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Add Headers</button></div></div><div class="flex gap-3 pt-6 border-t border-gray-200 dark:border-gray-700"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-10" type="button" id="radix-«r4»" aria-haspopup="menu" aria-expanded="false" data-state="closed">Examples</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-10 px-6" disabled="">Test API</button></div></div></div><div class="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&amp;[data-panel-group-direction=vertical]&gt;div]:rotate-90" role="separator" tabindex="0" data-panel-group-direction="horizontal" data-panel-group-id="«r0»" data-resize-handle="" data-panel-resize-handle-enabled="true" data-panel-resize-handle-id="«r6»" data-resize-handle-state="inactive" aria-controls="«r1»" aria-valuemax="75" aria-valuemin="50" aria-valuenow="66" style="touch-action: none; user-select: none;"><div class="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical h-2.5 w-2.5" aria-hidden="true"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg></div></div><div class="" id="«r7»" data-panel-group-id="«r0»" data-panel="" data-panel-id="«r7»" data-panel-size="34.0" style="flex: 34 1 0px; overflow: hidden;"><div class="h-full"><div class="flex h-full w-full data-[panel-group-direction=vertical]:flex-col gap-4" data-panel-group="" data-panel-group-direction="vertical" data-panel-group-id="«r8»" style="display: flex; flex-direction: column; height: 100%; overflow: hidden; width: 100%;"><div class="" id="«r9»" data-panel-group-id="«r8»" data-panel="" data-panel-id="«r9»" data-panel-size="1.0" style="flex: 1 1 0px; overflow: hidden;"><div class="h-full bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700/40"><div class="p-4 h-full flex flex-col"><h3 class="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">Configuration JSON</h3><pre class="text-xs overflow-auto flex-1 bg-gray-50 dark:bg-neutral-950/50 rounded-lg p-4 text-gray-800 dark:text-gray-100 font-mono">{
  "url": "",
  "method": "GET"
}</pre></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
