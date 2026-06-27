# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jolbol1/link/default
- Registry URL: https://21st.dev/r/jolbol1/link
- Author: jolbol1
- Component slug: link
- Demo slug: default
- Title: link
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jolbol1/link with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jolbol1__link__default.html
- Local screenshot file: generated-21st-prompts/screenshots/jolbol1__link__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex flex-col gap-4"><div class="flex flex-wrap justify-center gap-4"><a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none bg-primary text-primary-foreground data-[hovered]:bg-primary/90 h-10 px-4 py-2" data-rac="" href="/docs/components/link" tabindex="0" data-react-aria-pressable="true">Link</a><a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none bg-destructive text-destructive-foreground data-[hovered]:bg-destructive/90 h-10 px-4 py-2" data-rac="" href="/docs/components/link" tabindex="0" data-react-aria-pressable="true">Destructive</a><a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none data-[hovered]:bg-accent data-[hovered]:text-accent-foreground h-10 px-4 py-2" data-rac="" href="/docs/components/link" tabindex="0" data-react-aria-pressable="true">Ghost</a><a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none text-primary underline-offset-4 data-[hovered]:underline h-10 px-4 py-2" data-rac="" href="/docs/components/link" tabindex="0" data-react-aria-pressable="true">Link</a><a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none border border-input bg-background data-[hovered]:bg-accent data-[hovered]:text-accent-foreground h-10 px-4 py-2" data-rac="" href="/docs/components/link" tabindex="0" data-react-aria-pressable="true">Outline</a><a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80 h-10 px-4 py-2" data-rac="" href="/docs/components/link" tabindex="0" data-react-aria-pressable="true">Secondary</a></div>Disabled<div class="flex flex-wrap justify-center gap-4"><span class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none bg-primary text-primary-foreground data-[hovered]:bg-primary/90 h-10 px-4 py-2" data-rac="" href="/docs/components/link" data-react-aria-pressable="true" role="link" aria-disabled="true" data-disabled="true">Link</span><span class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none bg-destructive text-destructive-foreground data-[hovered]:bg-destructive/90 h-10 px-4 py-2" data-rac="" href="/docs/components/link" data-react-aria-pressable="true" role="link" aria-disabled="true" data-disabled="true">Destructive</span><span class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none data-[hovered]:bg-accent data-[hovered]:text-accent-foreground h-10 px-4 py-2" data-rac="" href="/docs/components/link" data-react-aria-pressable="true" role="link" aria-disabled="true" data-disabled="true">Ghost</span><span class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none text-primary underline-offset-4 data-[hovered]:underline h-10 px-4 py-2" data-rac="" href="/docs/components/link" data-react-aria-pressable="true" role="link" aria-disabled="true" data-disabled="true">Link</span><span class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none border border-input bg-background data-[hovered]:bg-accent data-[hovered]:text-accent-foreground h-10 px-4 py-2" data-rac="" href="/docs/components/link" data-react-aria-pressable="true" role="link" aria-disabled="true" data-disabled="true">Outline</span><span class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80 h-10 px-4 py-2" data-rac="" href="/docs/components/link" data-react-aria-pressable="true" role="link" aria-disabled="true" data-disabled="true">Secondary</span></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.