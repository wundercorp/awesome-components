# Build Promt Input With Actions in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Promt Input With Actions screenshot](screenshot.png)

## Component

- Author group: `motion-primitives`
- Component: `promt-input-with-actions`
- Variant: `prompt-input-with-autocomplete`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: motion-primitives
- Component slug: promt-input-with-actions
- Demo slug: prompt-input-with-autocomplete
- Title: promt-input-with-actions
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="absolute inset-x-0 mx-auto flex max-w-3xl flex-col items-start justify-center gap-4 p-3 md:p-5"><div class="border-input bg-popover relative z-10 w-full rounded-3xl border p-0 pt-1 shadow-xs"><textarea class="flex rounded-md border border-input px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-primary w-full resize-none border-none bg-transparent shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[44px] pt-3 pl-4 text-base leading-[1.3] sm:text-base md:text-base" rows="1" placeholder="Ask anything..." style="height: 44px;">how to</textarea><div class="mt-5 flex w-full items-end justify-end gap-2 px-3 pb-3"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-3 h-9 w-9 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up h-4 w-4" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></button></div></div><div class="w-full space-y-1"><button class="items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground px-3 w-full cursor-pointer justify-start gap-0 rounded-xl py-2 hover:bg-accent flex h-auto flex-wrap text-left"><span class="text-primary font-medium whitespace-pre-wrap">How to</span><span class="text-muted-foreground whitespace-pre-wrap"> create a React component</span></button><button class="items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground px-3 w-full cursor-pointer justify-start gap-0 rounded-xl py-2 hover:bg-accent flex h-auto flex-wrap text-left"><span class="text-primary font-medium whitespace-pre-wrap">How to</span><span class="text-muted-foreground whitespace-pre-wrap"> optimize website performance</span></button><button class="items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground px-3 w-full cursor-pointer justify-start gap-0 rounded-xl py-2 hover:bg-accent flex h-auto flex-wrap text-left"><span class="text-primary font-medium whitespace-pre-wrap">How to</span><span class="text-muted-foreground whitespace-pre-wrap"> implement dark mode in a web app</span></button><button class="items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground px-3 w-full cursor-pointer justify-start gap-0 rounded-xl py-2 hover:bg-accent flex h-auto flex-wrap text-left"><span class="text-primary font-medium whitespace-pre-wrap">How to</span><span class="text-muted-foreground whitespace-pre-wrap"> use CSS Grid effectively</span></button><button class="items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground px-3 w-full cursor-pointer justify-start gap-0 rounded-xl py-2 hover:bg-accent flex h-auto flex-wrap text-left"><span class="text-primary font-medium whitespace-pre-wrap">How to</span><span class="text-muted-foreground whitespace-pre-wrap"> fetch data from an API in JavaScript</span></button><button class="items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground px-3 w-full cursor-pointer justify-start gap-0 rounded-xl py-2 hover:bg-accent flex h-auto flex-wrap text-left"><span class="text-primary font-medium whitespace-pre-wrap">How to</span><span class="text-muted-foreground whitespace-pre-wrap"> build a REST API with Node.js</span></button><button class="items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground px-3 w-full cursor-pointer justify-start gap-0 rounded-xl py-2 hover:bg-accent flex h-auto flex-wrap text-left"><span class="text-primary font-medium whitespace-pre-wrap">How to</span><span class="text-muted-foreground whitespace-pre-wrap"> deploy a Next.js application</span></button><button class="items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground px-3 w-full cursor-pointer justify-start gap-0 rounded-xl py-2 hover:bg-accent flex h-auto flex-wrap text-left"><span class="text-primary font-medium whitespace-pre-wrap">How to</span><span class="text-muted-foreground whitespace-pre-wrap"> implement authentication in a web app</span></button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
