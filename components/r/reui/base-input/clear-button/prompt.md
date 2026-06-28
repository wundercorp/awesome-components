# Build Base Input in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Base Input screenshot](screenshot.png)

## Component

- Author group: `reui`
- Component: `base-input`
- Variant: `clear-button`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reui
- Component slug: base-input
- Demo slug: clear-button
- Title: base-input
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-80"><div data-slot="input-wrapper" class="w-full bg-background border border-input shadow-xs shadow-black/5 transition-[color,box-shadow] text-foreground placeholder:text-muted-foreground/80 focus-visible:ring-ring/30 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-60 [&amp;[readonly]]:bg-muted/80 [&amp;[readonly]]:cursor-not-allowed file:h-full [&amp;[type=file]]:py-0 file:border-solid file:border-input file:bg-transparent file:font-medium file:not-italic file:text-foreground file:p-0 file:border-0 file:border-e aria-invalid:border-destructive/60 aria-invalid:ring-destructive/10 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/20 h-8.5 px-3 text-[0.8125rem] leading-(--text-sm--line-height) rounded-md file:pe-3 file:me-3 flex items-center has-[:focus-visible]:ring-ring/30 has-[:focus-visible]:border-ring has-[:focus-visible]:outline-none has-[:focus-visible]:ring-[3px] [&amp;_[data-slot=datefield]]:grow [&amp;_[data-slot=input]]:data-focus-within:ring-transparent [&amp;_[data-slot=input]]:data-focus-within:ring-0 [&amp;_[data-slot=input]]:data-focus-within:border-0 [&amp;_[data-slot=input]]:flex [&amp;_[data-slot=input]]:w-full [&amp;_[data-slot=input]]:outline-none [&amp;_[data-slot=input]]:transition-colors [&amp;_[data-slot=input]]:text-foreground [&amp;_[data-slot=input]]:placeholder:text-muted-foreground [&amp;_[data-slot=input]]:border-0 [&amp;_[data-slot=input]]:bg-transparent [&amp;_[data-slot=input]]:p-0 [&amp;_[data-slot=input]]:shadow-none [&amp;_[data-slot=input]]:focus-visible:ring-0 [&amp;_[data-slot=input]]:h-auto [&amp;_[data-slot=input]]:disabled:cursor-not-allowed [&amp;_[data-slot=input]]:disabled:opacity-50 [&amp;_svg]:text-muted-foreground has-[[aria-invalid=true]]:border-destructive/60 has-[[aria-invalid=true]]:ring-destructive/10 dark:has-[[aria-invalid=true]]:border-destructive dark:has-[[aria-invalid=true]]:ring-destructive/20 gap-1.5 [&amp;_svg:not([class*=size-])]:size-4"><input data-slot="input" class="flex w-full bg-background border border-input shadow-xs shadow-black/5 transition-[color,box-shadow] text-foreground placeholder:text-muted-foreground/80 focus-visible:ring-ring/30 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-60 [&amp;[readonly]]:bg-muted/80 [&amp;[readonly]]:cursor-not-allowed file:h-full [&amp;[type=file]]:py-0 file:border-solid file:border-input file:bg-transparent file:font-medium file:not-italic file:text-foreground file:p-0 file:border-0 file:border-e aria-invalid:border-destructive/60 aria-invalid:ring-destructive/10 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/20 h-8.5 px-3 text-[0.8125rem] leading-(--text-sm--line-height) rounded-md file:pe-3 file:me-3" placeholder="Type some input" value="Click to clear"><button data-slot="button" class="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center has-data-[arrow=true]:justify-between whitespace-nowrap font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&amp;_svg]:shrink-0 text-muted-foreground hover:text-foreground data-[state=open]:text-foreground h-8.5 rounded-md px-3 gap-1.5 text-[0.8125rem] leading-(--text-sm--line-height) [&amp;_svg:not([class*=size-])]:size-4 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 -me-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
