# Build Text Rotate in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Text Rotate screenshot](screenshot.png)

## Component

- Author group: `danielpetho`
- Component: `text-rotate`
- Variant: `image-scroll`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: danielpetho
- Component slug: text-rotate
- Demo slug: image-scroll
- Title: text-rotate
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="w-full h-screen flex"><div class="w-full h-full relative"><div class="sticky top-0 h-screen w-full flex items-center justify-end bg-white dark:text-muted text-foreground"><div class="w-2/3"><span class="flex-wrap whitespace-pre-wrap text-sm sm:text-3xl md:text-4xl w-full justify-center flex pt-2"><span class="sr-only">ANDRII SOLOK</span><div class="flex flex-wrap" aria-hidden="true"><span class="inline-flex overflow-hidden pb-2"><span class="inline-block" style="opacity: 1; transform: none;">A</span><span class="inline-block" style="opacity: 1; transform: none;">N</span><span class="inline-block" style="opacity: 1; transform: none;">D</span><span class="inline-block" style="opacity: 1; transform: none;">R</span><span class="inline-block" style="opacity: 1; transform: none;">I</span><span class="inline-block" style="opacity: 1; transform: none;">I</span><span class="whitespace-pre"> </span></span><span class="inline-flex overflow-hidden pb-2"><span class="inline-block" style="opacity: 1; transform: none;">S</span><span class="inline-block" style="opacity: 1; transform: none;">O</span><span class="inline-block" style="opacity: 1; transform: none;">L</span><span class="inline-block" style="opacity: 1; transform: none;">O</span><span class="inline-block" style="opacity: 1; transform: none;">K</span></span></div></span></div></div><div class="absolute inset-0 overflow-auto snap-y snap-mandatory"><section class="h-full w-1/2 flex justify-center items-center snap-center"><div class="w-16 h-16 sm:w-36 sm:h-36 md:w-40 md:h-40"><a href="https://unsplash.com/photos/a-painting-of-a-palm-leaf-on-a-multicolored-background-AaNPwrSNOFE" target="_blank" rel="noreferrer"><img alt="Example 1" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&amp;w=3087&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></a></div></section><section class="h-full w-1/2 flex justify-center items-center snap-center"><div class="w-16 h-16 sm:w-36 sm:h-36 md:w-40 md:h-40"><a href="https://unsplash.com/photos/a-blurry-photo-of-a-crowd-of-people-UgbxzloNGsc" target="_blank" rel="noreferrer"><img alt="Example 2" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&amp;w=3024&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></a></div></section><section class="h-full w-1/2 flex justify-center items-center snap-center"><div class="w-16 h-16 sm:w-36 sm:h-36 md:w-40 md:h-40"><a href="https://unsplash.com/photos/rippling-crystal-blue-water-9-OCsKoyQlk" target="_blank" rel="noreferrer"><img alt="Example 3" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&amp;w=2838&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></a></div></section><section class="h-full w-1/2 flex justify-center items-center snap-center"><div class="w-16 h-16 sm:w-36 sm:h-36 md:w-40 md:h-40"><a href="https://unsplash.com/de/fotos/mann-im-schwarzen-hemd-unter-blauem-himmel-m8RDNiuEXro" target="_blank" rel="noreferrer"><img alt="Example 4" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&amp;w=2960&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></a></div></section><section class="h-full w-1/2 flex justify-center items-center snap-center"><div class="w-16 h-16 sm:w-36 sm:h-36 md:w-40 md:h-40"><a href="https://unsplash.com/photos/a-woman-with-a-flower-crown-on-her-head-0S3muIttbsY" target="_blank" rel="noreferrer"><img alt="Example 5" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1689553079282-45df1b35741b?q=80&amp;w=3087&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></a></div></section><section class="h-full w-1/2 flex justify-center items-center snap-center"><div class="w-16 h-16 sm:w-36 sm:h-36 md:w-40 md:h-40"><a href="https://unsplash.com/photos/a-blurry-photo-of-white-flowers-in-a-field-6qbx0lzGPyc" target="_blank" rel="noreferrer"><img alt="Example 6" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&amp;w=2728&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></a></div></section><section class="h-full w-1/2 flex justify-center items-center snap-center"><div class="w-16 h-16 sm:w-36 sm:h-36 md:w-40 md:h-40"><a href="https://unsplash.com/photos/a-table-topped-with-two-wine-glasses-and-plates-Ig0gRAHspV0" target="_blank" rel="noreferrer"><img alt="Example 7" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1677338354108-223e807fb1bd?q=80&amp;w=3087&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></a></div></section></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
