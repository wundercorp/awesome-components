# Build Modern Feature Grid in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Modern Feature Grid screenshot](screenshot.png)

## Component

- Author group: `dhiluxui`
- Component: `modern-feature-grid`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: dhiluxui
- Component slug: modern-feature-grid
- Demo slug: default
- Title: modern-feature-grid
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 md:p-8 font-sans antialiased overflow-hidden"><div class="pointer-events-none absolute -inset-px transition duration-500" style="background: radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%);"></div><section class="w-full py-12" aria-labelledby="«r0»"><div class="container mx-auto px-4 md:px-6"><div class="mx-auto max-w-3xl text-center"><h2 id="«r0»" class="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">Everything You Need to Build Great UIs</h2><p class="mt-4 text-muted-foreground md:text-xl">Our components are designed to be composable, accessible, and beautiful right out of the box.</p></div><div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"><div class="flex flex-col items-start gap-4 p-6 rounded-2xl border bg-black/5 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-accent-foreground/20 hover:bg-black/10 dark:bg-black/30 dark:hover:bg-black/50" aria-labelledby="«r1»"><div class="flex h-12 w-12 items-center justify-center rounded-lg border bg-secondary text-secondary-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div><div class="flex flex-col"><h3 id="«r1»" class="text-lg font-bold leading-none tracking-tight text-card-foreground">Blazing Fast Performance</h3><p class="mt-2 text-sm text-muted-foreground">Optimized for speed, our components deliver a seamless user experience without compromising on features.</p></div></div><div class="flex flex-col items-start gap-4 p-6 rounded-2xl border bg-black/5 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-accent-foreground/20 hover:bg-black/10 dark:bg-black/30 dark:hover:bg-black/50" aria-labelledby="«r2»"><div class="flex h-12 w-12 items-center justify-center rounded-lg border bg-secondary text-secondary-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div><div class="flex flex-col"><h3 id="«r2»" class="text-lg font-bold leading-none tracking-tight text-card-foreground">Developer-Friendly</h3><p class="mt-2 text-sm text-muted-foreground">Clean, reusable code that follows best practices, making integration and customization a breeze.</p></div></div><div class="flex flex-col items-start gap-4 p-6 rounded-2xl border bg-black/5 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-accent-foreground/20 hover:bg-black/10 dark:bg-black/30 dark:hover:bg-black/50" aria-labelledby="«r3»"><div class="flex h-12 w-12 items-center justify-center rounded-lg border bg-secondary text-secondary-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg></div><div class="flex flex-col"><h3 id="«r3»" class="text-lg font-bold leading-none tracking-tight text-card-foreground">Easily Themeable</h3><p class="mt-2 text-sm text-muted-foreground">Built with CSS variables, allowing you to easily adapt the look and feel to match your brand's design system.</p></div></div></div></div></section></div></div></div></div>
```

## Reference source files

No reference source files were available.
