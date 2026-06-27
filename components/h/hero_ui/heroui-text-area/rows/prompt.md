# Build Heroui Text Area in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Text Area screenshot](screenshot.png)

## Component

- Author group: `hero_ui`
- Component: `heroui-text-area`
- Variant: `rows`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hero_ui
- Component slug: heroui-text-area
- Demo slug: rows
- Title: heroui-text-area
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full items-center justify-center"><div class="flex w-96 flex-col gap-4"><div class="flex flex-col gap-2"><label class="label" data-slot="label" for="textarea-rows-3">Short feedback</label><textarea data-slot="textarea" class="textarea textarea--primary" aria-label="Short feedback" id="textarea-rows-3" placeholder="This week's highlights..." rows="3" data-rac=""></textarea></div><div class="flex flex-col gap-2"><label class="label" data-slot="label" for="textarea-rows-6">Detailed notes</label><textarea data-slot="textarea" class="textarea textarea--primary" aria-label="Detailed notes" id="textarea-rows-6" placeholder="Write out the full meeting notes..." rows="6" data-rac="" style="resize: vertical;"></textarea></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
