# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/tailark/integrations-component/integrations-grid
- Registry URL: https://21st.dev/r/tailark/integrations-component
- Author: tailark
- Component slug: integrations-component
- Demo slug: integrations-grid
- Title: integrations-component
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/tailark/integrations-component with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/tailark__integrations-component__integrations-grid.html
- Local screenshot file: generated-21st-prompts/screenshots/tailark__integrations-component__integrations-grid.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section><div class="bg-muted dark:bg-background py-24 md:py-32"><div class="mx-auto max-w-5xl px-6"><div class="dark:bg-muted/50 relative mx-auto w-fit"><div role="presentation" class="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"></div><div class="mx-auto mb-2 flex w-fit justify-center gap-2"><div class="bg-background relative flex size-20 rounded-xl dark:bg-transparent"><div role="presentation" class="absolute inset-0 rounded-xl border border-black/20 dark:border-white/25"></div><div class="relative z-20 m-auto size-fit *:size-8"><svg viewBox="0 0 24 24" fill="currentColor" class="text-black"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 
        0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 
        1.204.085 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.304 3.492.997.108-.775.42-1.304.763-1.604-2.665-.3-5.466-1.333-5.466-5.93 
        0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.52.117-3.167 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.004 2.045.137 
        3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.647.243 2.864.12 3.167.77.84 1.235 1.91 1.235 3.22 
        0 4.61-2.803 5.625-5.475 5.92.431.372.816 1.102.816 2.222 0 1.606-.015 2.9-.015 3.293 
        0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg></div></div><div class="bg-background relative flex size-20 rounded-xl dark:bg-transparent"><div role="presentation" class="absolute inset-0 rounded-xl border border-black/20 dark:border-white/25"></div><div class="relative z-20 m-auto size-fit *:size-8"><svg viewBox="0 0 24 24" fill="currentColor" class="text-purple-600"><path d="M5.2 15.7a2.6 2.6 0 1 1 0 5.2H2.6a2.6 2.6 0 1 1 0-5.2H5.2zm1.3-1.3a2.6 2.6 0 1 1 0-5.2h2.6v5.2H6.5zm6.5-6.5a2.6 2.6 0 1 1 5.2 0v2.6h-5.2V7.9zm-1.3 1.3a2.6 2.6 0 1 1 0 5.2H9.1V9.2h2.6zm8.4 0a2.6 2.6 0 1 1 0 5.2h-2.6V9.2h2.6zM15.7 5.2a2.6 2.6 0 1 1 0 5.2h-2.6V5.2h2.6zM9.2 2.6a2.6 2.6 0 1 1 0 5.2H6.6V2.6h2.6z"></path></svg></div></div></div><div class="mx-auto my-2 flex w-fit justify-center gap-2"><div class="bg-background relative flex size-20 rounded-xl dark:bg-transparent"><div role="presentation" class="absolute inset-0 rounded-xl border border-black/20 dark:border-white/25"></div><div class="relative z-20 m-auto size-fit *:size-8"><svg viewBox="0 0 24 24" fill="currentColor" class="text-gray-900"><path d="M4 3.5l16-1.5 0 19-16 1.5V3.5zm2 3.7v9.6l8 .6v-9.6l-8-.6z"></path></svg></div></div><div class="bg-background relative flex size-20 rounded-xl dark:bg-white/10"><div role="presentation" class="absolute inset-0 rounded-xl border shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"></div><div class="relative z-20 m-auto size-fit *:size-8"><svg viewBox="0 0 24 24" fill="currentColor" class="text-gray-900"><path d="M4 3.5l16-1.5 0 19-16 1.5V3.5zm2 3.7v9.6l8 .6v-9.6l-8-.6z"></path></svg></div></div><div class="bg-background relative flex size-20 rounded-xl dark:bg-transparent"><div role="presentation" class="absolute inset-0 rounded-xl border border-black/20 dark:border-white/25"></div><div class="relative z-20 m-auto size-fit *:size-8"><svg viewBox="0 0 24 24" fill="currentColor" class="text-pink-500"><path d="M12 4a4 4 0 100 8 4 4 0 000-8zM12 12a4 4 0 100 8 4 4 0 000-8zM4 4a4 4 0 100 8 4 4 0 000-8zM20 4a4 4 0 100 8 4 4 0 000-8zM12 20a4 4 0 100 8 4 4 0 000-8z"></path></svg></div></div></div><div class="mx-auto flex w-fit justify-center gap-2"><div class="bg-background relative flex size-20 rounded-xl dark:bg-transparent"><div role="presentation" class="absolute inset-0 rounded-xl border border-black/20 dark:border-white/25"></div><div class="relative z-20 m-auto size-fit *:size-8"><svg viewBox="0 0 24 24" fill="currentColor" class="text-indigo-500"><path d="M20 0H4C1.79 0 0 1.79 0 4v16c0 2.21 1.79 4 4 4h12l-1-3h5l1 3c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4z"></path></svg></div></div><div class="bg-background relative flex size-20 rounded-xl dark:bg-transparent"><div role="presentation" class="absolute inset-0 rounded-xl border border-black/20 dark:border-white/25"></div><div class="relative z-20 m-auto size-fit *:size-8"><svg viewBox="0 0 24 24" fill="currentColor" class="text-blue-600"><path d="M4 3l16 9-16 9V3zm4 5v8l6-4-6-4z"></path></svg></div></div></div></div><div class="mx-auto mt-6 max-w-lg space-y-6 text-center"><h2 class="text-balance text-3xl font-semibold md:text-4xl">Integrate with your favorite tools</h2><p class="text-muted-foreground">Connect seamlessly with popular platforms and services to enhance your workflow.</p><a href="#" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Get Started</a></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.