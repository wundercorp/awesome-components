# Build Sentiment Radio Group in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Sentiment Radio Group screenshot](screenshot.png)

## Component

- Author group: `ruixenui`
- Component: `sentiment-radio-group`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ruixenui
- Component slug: sentiment-radio-group
- Demo slug: default
- Title: sentiment-radio-group
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="max-w-md space-y-6"><h2 class="text-lg font-semibold">How did it go?</h2><p class="text-sm text-muted-foreground">Select the option that best reflects your experience.</p><div role="radiogroup" aria-required="false" dir="ltr" class="flex flex-col gap-3" tabindex="0" style="outline: none;"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="angry" class="relative flex w-full items-center gap-3 rounded-lg border p-3 text-left shadow-sm transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring/70 data-[state=checked]:border-gray-400 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50" tabindex="-1" data-radix-collection-item=""><span class="text-2xl">😠</span><div class="flex flex-col"><span class="font-medium">Angry</span><span class="text-xs text-muted-foreground">Frustrated or upset with the experience.</span></div></button><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="sad" class="relative flex w-full items-center gap-3 rounded-lg border p-3 text-left shadow-sm transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring/70 data-[state=checked]:border-gray-400 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50" tabindex="-1" data-radix-collection-item=""><span class="text-2xl">🙁</span><div class="flex flex-col"><span class="font-medium">Sad</span><span class="text-xs text-muted-foreground">Something didn’t meet expectations.</span></div></button><button type="button" role="radio" aria-checked="true" data-state="checked" value="neutral" class="relative flex w-full items-center gap-3 rounded-lg border p-3 text-left shadow-sm transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring/70 data-[state=checked]:border-gray-400 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50" tabindex="-1" data-radix-collection-item=""><span class="text-2xl">😐</span><div class="flex flex-col"><span class="font-medium">Neutral</span><span class="text-xs text-muted-foreground">Neither good nor bad, just okay.</span></div></button><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="happy" class="relative flex w-full items-center gap-3 rounded-lg border p-3 text-left shadow-sm transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring/70 data-[state=checked]:border-gray-400 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50" tabindex="-1" data-radix-collection-item=""><span class="text-2xl">🙂</span><div class="flex flex-col"><span class="font-medium">Happy</span><span class="text-xs text-muted-foreground">Satisfied and had a good experience.</span></div></button><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="laughing" class="relative flex w-full items-center gap-3 rounded-lg border p-3 text-left shadow-sm transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring/70 data-[state=checked]:border-gray-400 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50" tabindex="-1" data-radix-collection-item=""><span class="text-2xl">😀</span><div class="flex flex-col"><span class="font-medium">Delighted</span><span class="text-xs text-muted-foreground">Loved it, exceeded expectations!</span></div></button></div><div class="mt-4 text-xs text-center text-muted-foreground">Minimal design • Made by <a href="https://www.ruixen.com" target="_blank" class="underline">ruixen.com</a></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
