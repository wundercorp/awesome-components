# Build Card Studio in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Card Studio screenshot](screenshot.png)

## Component

- Author group: `shadcnstudio`
- Component: `card-studio`
- Variant: `meeting-notes-card`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ShadcnStudio
- Component slug: card-studio
- Demo slug: meeting-notes-card
- Title: card-studio
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Meeting Notes</h3><p class="text-sm text-muted-foreground">Transcript from the meeting with the client.</p></div><div class="p-6 pt-0 text-sm"><p>Client requested dashboard redesign with focus on mobile responsiveness.</p><ol class="mt-4 flex list-decimal flex-col gap-2 pl-6"><li>New analytics widgets for daily/weekly metrics</li><li>Simplified navigation menu</li><li>Dark mode support</li><li>Timeline: 6 weeks</li><li>Follow-up meeting scheduled for next Tuesday</li></ol></div><div class="flex items-center p-6 pt-0"><div class="flex -space-x-2 hover:space-x-1"><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ring-background ring-2 transition-all duration-300 ease-in-out"><img class="aspect-square h-full w-full" alt="Olivia Sparks" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png"></span><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ring-background ring-2 transition-all duration-300 ease-in-out"><img class="aspect-square h-full w-full" alt="Howard Lloyd" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png"></span><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ring-background ring-2 transition-all duration-300 ease-in-out"><img class="aspect-square h-full w-full" alt="Hallie Richards" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png"></span><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ring-background ring-2 transition-all duration-300 ease-in-out"><img class="aspect-square h-full w-full" alt="Jenny Wilson" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png"></span></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
