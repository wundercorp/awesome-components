# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/erikx/animated-profile-card/default
- Registry URL: https://21st.dev/r/erikx/animated-profile-card
- Author: erikx
- Component slug: animated-profile-card
- Demo slug: default
- Title: animated-profile-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/erikx/animated-profile-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/erikx__animated-profile-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/erikx__animated-profile-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[500px] w-full items-center justify-center bg-background p-6"><div class="relative w-[350px] overflow-hidden rounded-3xl border-2" style="--accent-color: #e0f2fe; --on-accent-foreground: #0f172a; --on-accent-muted-foreground: #475569; border-color: var(--accent-color);"><div><div class="shadow-sm flex flex-col rounded-3xl border-0 p-8 bg-card text-card-foreground"><div class="flex flex-col space-y-1.5 p-0"><div class="invisible"><span class="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 ring-2 ring-offset-4 ring-offset-card" style="--tw-ring-color: var(--accent-color);"><img class="aspect-square h-full w-full" src="https://avatars.githubusercontent.com/u/199367026?s=280&amp;v=4"></span></div><p class="text-sm pt-6 text-left text-muted-foreground">San Francisco, USA</p><h3 class="font-semibold tracking-tight text-3xl text-left">John Doe</h3></div><div class="mt-6 flex-grow p-0"><p class="text-base leading-relaxed text-left text-foreground/80">Software Engineer at 21st, building clean UI systems and experimenting with new dev tools.</p></div><div class="flex items-center mt-6 p-0"><div class="flex items-center gap-4 text-muted-foreground"><a href="https://github.com/21st-dev" aria-label="GitHub" target="_blank" rel="noopener noreferrer" class="transition-opacity hover:text-foreground"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5"><path d="M15 22v-4a4.7 4.7 0 0 0-1-3.4c3 0 6-2 6-5.6a6 6 0 0 0-1-3.6c.3-1.2.3-2.4 0-3.6 0 0-1 0-3 1.4-2.7-.5-5.4-.5-8.1 0C6 2 5 2 5 2c-.3 1.2-.3 2.4 0 3.6A5.5 5.5 0 0 0 4 9c0 3.6 3 5.6 6 5.6-.4.5-.7 1.1-.9 1.7v3.7M9 18c-4.5 2-5-2-7-2"></path></svg></a><a href="https://x.com/21st_dev" aria-label="Twitter" target="_blank" rel="noopener noreferrer" class="transition-opacity hover:text-foreground"><svg viewBox="0 0 512 512" fill="currentColor" class="h-4 w-4"><path d="M389 48h71L306 224l181 240H345L234 319 107 464H36L201 276 27 48h146l100 133L389 48zM364 422h39L151 88h-42l255 334z"></path></svg></a></div></div></div></div><div class="absolute inset-0 h-full w-full dark" style="clip-path: circle(50px at 64px 64px);"><div class="bg-card shadow-sm flex flex-col rounded-3xl border-0 p-8 text-[var(--on-accent-foreground)]" style="background-color: var(--accent-color);"><div class="flex flex-col space-y-1.5 p-0"><div class=""><span class="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 ring-2 ring-offset-4 ring-offset-card" style="--tw-ring-color: var(--accent-color);"><img class="aspect-square h-full w-full" src="https://avatars.githubusercontent.com/u/199367026?s=280&amp;v=4"></span></div><p class="text-sm text-muted-foreground pt-6 text-left" style="color: var(--on-accent-muted-foreground);">San Francisco, USA</p><h3 class="font-semibold tracking-tight text-3xl text-left" style="color: var(--on-accent-foreground);">John Doe</h3></div><div class="mt-6 flex-grow p-0"><p class="text-base leading-relaxed text-left" style="opacity: 0.9;">Software Engineer at 21st, building clean UI systems and experimenting with new dev tools.</p></div><div class="flex items-center mt-6 p-0"><div class="flex items-center gap-4" style="color: var(--on-accent-muted-foreground);"><a href="https://github.com/21st-dev" aria-label="GitHub" target="_blank" rel="noopener noreferrer" class="transition-opacity hover:opacity-75"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5"><path d="M15 22v-4a4.7 4.7 0 0 0-1-3.4c3 0 6-2 6-5.6a6 6 0 0 0-1-3.6c.3-1.2.3-2.4 0-3.6 0 0-1 0-3 1.4-2.7-.5-5.4-.5-8.1 0C6 2 5 2 5 2c-.3 1.2-.3 2.4 0 3.6A5.5 5.5 0 0 0 4 9c0 3.6 3 5.6 6 5.6-.4.5-.7 1.1-.9 1.7v3.7M9 18c-4.5 2-5-2-7-2"></path></svg></a><a href="https://x.com/21st_dev" aria-label="Twitter" target="_blank" rel="noopener noreferrer" class="transition-opacity hover:opacity-75"><svg viewBox="0 0 512 512" fill="currentColor" class="h-4 w-4"><path d="M389 48h71L306 224l181 240H345L234 319 107 464H36L201 276 27 48h146l100 133L389 48zM364 422h39L151 88h-42l255 334z"></path></svg></a></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.