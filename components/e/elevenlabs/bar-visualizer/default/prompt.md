# Build Bar Visualizer in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Bar Visualizer screenshot](screenshot.png)

## Component

- Author group: `elevenlabs`
- Component: `bar-visualizer`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ElevenLabs
- Component slug: bar-visualizer
- Demo slug: default
- Title: bar-visualizer
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Audio Frequency Visualizer</h3><p class="text-sm text-muted-foreground">Real-time frequency band visualization with animated state transitions</p></div><div class="p-6 pt-0"><div class="space-y-4"><div data-state="listening" class="relative flex justify-center gap-1.5 items-end bg-muted w-full overflow-hidden rounded-lg p-4 h-40 max-w-full"><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 66.94%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 37.9944%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 29.1471%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 30.118%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 34.4765%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 39.8208%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 59.0222%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 68.5306%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 83.2878%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 90%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 90%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 79.4357%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 67.3354%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 52.749%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 51.461%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 26.2986%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 35.717%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 48.9643%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 57.5667%;"></div><div data-highlighted="false" class="max-w-[12px] min-w-[8px] flex-1 transition-all duration-150 rounded-full bg-border data-[highlighted=true]:bg-primary" style="height: 79.5682%;"></div></div><div class="flex flex-wrap gap-2"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Connecting</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Initializing</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">Listening</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Speaking</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Thinking</button></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
