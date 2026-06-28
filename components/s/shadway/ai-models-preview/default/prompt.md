# Build Ai Models Preview in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Ai Models Preview screenshot](screenshot.png)

## Component

- Author group: `shadway`
- Component: `ai-models-preview`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shadway
- Component slug: ai-models-preview
- Demo slug: default
- Title: ai-models-preview
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="h-"><div class="w-full max-w-4xl mx-auto "><h2 class="text-2xl font-semibold text-foreground mb-4">AI Models</h2><ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><li class="cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-md transition" tabindex="0"><div class="flex items-center justify-between"><span class="font-medium">Claude 3 Opus</span></div><p class="mt-2 text-sm text-muted-foreground line-clamp-3">High reasoning performance for complex tasks.</p><div class="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground"><span class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">Streaming</span></div></li><li class="cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-md transition" tabindex="0"><div class="flex items-center justify-between"><span class="font-medium">Gemini 1.5 Pro</span></div><p class="mt-2 text-sm text-muted-foreground line-clamp-3">State-of-the-art multimodal reasoning and search.</p><div class="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground"><span class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">Vision</span></div></li><li class="cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-md transition" tabindex="0"><div class="flex items-center justify-between"><span class="font-medium">LLaMA 3.1 70B</span></div><p class="mt-2 text-sm text-muted-foreground line-clamp-3">Open-weight with high accuracy across benchmarks.</p><div class="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground"></div></li><li class="cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-md transition" tabindex="0"><div class="flex items-center justify-between"><span class="font-medium">Mistral Large</span></div><p class="mt-2 text-sm text-muted-foreground line-clamp-3">Efficient and cost-effective model with open weights.</p><div class="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground"><span class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">#open-weight</span><span class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">#fast</span></div></li><li class="cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-md transition" tabindex="0"><div class="flex items-center justify-between"><span class="font-medium">Mixtral 8x7B</span></div><p class="mt-2 text-sm text-muted-foreground line-clamp-3">Sparse mixture of experts, balanced speed and quality.</p><div class="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground"><span class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">#smol</span><span class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">#sparse</span></div></li><li class="cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-md transition" tabindex="0"><div class="flex items-center justify-between"><span class="font-medium">GPT-4o</span><span class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">v2024-08-06</span></div><p class="mt-2 text-sm text-muted-foreground line-clamp-3">Multimodal flagship model with strong reasoning.</p><div class="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground"><span class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">Streaming</span><span class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">Vision</span><span class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">Functions</span><span class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">#general</span><span class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">#multimodal</span></div></li></ul></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
