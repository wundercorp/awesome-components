# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/image-showcase/default
- Registry URL: https://21st.dev/r/ravikatiyar/image-showcase
- Author: ravikatiyar
- Component slug: image-showcase
- Demo slug: default
- Title: image-showcase
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/image-showcase with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__image-showcase__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__image-showcase__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex h-screen w-full items-center justify-center bg-background p-4"><div class="relative flex h-72 w-full max-w-3xl items-center justify-center"><div class="absolute" style="transform: translateX(-200px);"><div class="group relative flex h-72 w-72 cursor-pointer flex-col justify-start rounded-xl bg-card p-6 shadow-xl transition-colors duration-300 ease-in-out hover:bg-card/90" style="z-index: 0; transform: none;"><div class="z-10"><p class="text-xs font-semibold uppercase text-muted-foreground">TRAVEL</p><h2 class="mt-1 text-3xl font-bold text-card-foreground">Black Sea</h2><p class="mt-1 text-sm text-muted-foreground">June 2023</p></div><div class="absolute bottom-0 right-0 h-48 w-full"><img alt="Black Sea memory image 1" class="absolute bottom-[-20px] right-6 h-40 w-auto origin-bottom-center rounded-lg border-4 border-background object-cover shadow-lg" src="https://images.unsplash.com/photo-1644264249078-f15241a75fc7?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDgwfGVufDB8fDB8fHww?q=80&amp;w=1964&amp;auto=format&amp;fit=crop" style="transform: none;"><img alt="Black Sea memory image 2" class="absolute bottom-[-20px] right-6 h-40 w-auto origin-bottom-center rounded-lg border-4 border-background object-cover shadow-lg" src="https://plus.unsplash.com/premium_photo-1672116453000-c31b150f48ef?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ODB8ZW58MHx8MHx8fDA%3D?q=80&amp;w=1887&amp;auto=format&amp;fit=crop" style="transform: none;"><img alt="Black Sea memory image 3" class="absolute bottom-[-20px] right-6 h-40 w-auto origin-bottom-center rounded-lg border-4 border-background object-cover shadow-lg" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style="transform: none;"></div></div></div><div class="absolute" style="transform: translateX(0px);"><div class="group relative flex h-72 w-72 cursor-pointer flex-col justify-start rounded-xl bg-card p-6 shadow-xl transition-colors duration-300 ease-in-out hover:bg-card/90" style="z-index: 10; transform: translateY(-15px) scale(1.05);"><div class="z-10"><p class="text-xs font-semibold uppercase text-muted-foreground">ADVENTURE</p><h2 class="mt-1 text-3xl font-bold text-card-foreground">Alps</h2><p class="mt-1 text-sm text-muted-foreground">January 2024</p></div><div class="absolute bottom-0 right-0 h-48 w-full"><img alt="Alps memory image 1" class="absolute bottom-[-20px] right-6 h-40 w-auto origin-bottom-center rounded-lg border-4 border-background object-cover shadow-lg" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style="transform: none;"><img alt="Alps memory image 2" class="absolute bottom-[-20px] right-6 h-40 w-auto origin-bottom-center rounded-lg border-4 border-background object-cover shadow-lg" src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style="transform: none;"><img alt="Alps memory image 3" class="absolute bottom-[-20px] right-6 h-40 w-auto origin-bottom-center rounded-lg border-4 border-background object-cover shadow-lg" src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style="transform: none;"></div></div></div><div class="absolute" style="transform: translateX(200px);"><div class="group relative flex h-72 w-72 cursor-pointer flex-col justify-start rounded-xl bg-card p-6 shadow-xl transition-colors duration-300 ease-in-out hover:bg-card/90" style="z-index: 0; transform: none;"><div class="z-10"><p class="text-xs font-semibold uppercase text-muted-foreground">RELAXATION</p><h2 class="mt-1 text-3xl font-bold text-card-foreground">Maldives</h2><p class="mt-1 text-sm text-muted-foreground">August 2022</p></div><div class="absolute bottom-0 right-0 h-48 w-full"><img alt="Maldives memory image 1" class="absolute bottom-[-20px] right-6 h-40 w-auto origin-bottom-center rounded-lg border-4 border-background object-cover shadow-lg" src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&amp;w=1925&amp;auto=format&amp;fit=crop" style="transform: none;"><img alt="Maldives memory image 2" class="absolute bottom-[-20px] right-6 h-40 w-auto origin-bottom-center rounded-lg border-4 border-background object-cover shadow-lg" src="https://images.unsplash.com/photo-1643506454451-8924ad6722f5?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fDgwfGVufDB8fDB8fHww?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style="transform: none;"><img alt="Maldives memory image 3" class="absolute bottom-[-20px] right-6 h-40 w-auto origin-bottom-center rounded-lg border-4 border-background object-cover shadow-lg" src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style="transform: none;"></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.