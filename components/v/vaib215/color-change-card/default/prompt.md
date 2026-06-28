# Build Color Change Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Color Change Card screenshot](screenshot.png)

## Component

- Author group: `vaib215`
- Component: `color-change-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: vaib215
- Component slug: color-change-card
- Demo slug: default
- Title: color-change-card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="p-4 py-12 md:p-8"><div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-8"><div class="group relative h-64 w-full cursor-pointer overflow-hidden bg-slate-300"><div class="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100" style="background-image: url(&quot;https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2&quot;); background-size: cover; background-position: center center;"></div><div class="relative z-20 flex h-full flex-col justify-between p-4 text-slate-300 transition-colors duration-500 group-hover:text-white"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto text-3xl transition-transform duration-500 group-hover:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg><div><h4><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>P</span><span>P</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>l</span><span>l</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>a</span><span>a</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>n</span><span>n</span></span></div></h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.</p></div></div></div><div class="group relative h-64 w-full cursor-pointer overflow-hidden bg-slate-300"><div class="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100" style="background-image: url(&quot;https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2&quot;); background-size: cover; background-position: center center;"></div><div class="relative z-20 flex h-full flex-col justify-between p-4 text-slate-300 transition-colors duration-500 group-hover:text-white"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto text-3xl transition-transform duration-500 group-hover:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg><div><h4><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>P</span><span>P</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>l</span><span>l</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>a</span><span>a</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>y</span><span>y</span></span></div></h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.</p></div></div></div><div class="group relative h-64 w-full cursor-pointer overflow-hidden bg-slate-300"><div class="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100" style="background-image: url(&quot;https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2&quot;); background-size: cover; background-position: center center;"></div><div class="relative z-20 flex h-full flex-col justify-between p-4 text-slate-300 transition-colors duration-500 group-hover:text-white"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto text-3xl transition-transform duration-500 group-hover:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg><div><h4><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>C</span><span>C</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>o</span><span>o</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>n</span><span>n</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>n</span><span>n</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>e</span><span>e</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>c</span><span>c</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>t</span><span>t</span></span></div></h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.</p></div></div></div><div class="group relative h-64 w-full cursor-pointer overflow-hidden bg-slate-300"><div class="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100" style="background-image: url(&quot;https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2&quot;); background-size: cover; background-position: center center;"></div><div class="relative z-20 flex h-full flex-col justify-between p-4 text-slate-300 transition-colors duration-500 group-hover:text-white"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto text-3xl transition-transform duration-500 group-hover:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg><div><h4><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>S</span><span>S</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>u</span><span>u</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>p</span><span>p</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>p</span><span>p</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>o</span><span>o</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>r</span><span>r</span></span></div><div class="inline-block h-[36px] overflow-hidden font-semibold text-3xl"><span class="flex min-w-[4px] flex-col" style="transform: none;"><span>t</span><span>t</span></span></div></h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.</p></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
