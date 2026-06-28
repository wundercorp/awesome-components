# Build Shuffle Grid in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Shuffle Grid screenshot](screenshot.png)

## Component

- Author group: `vaib215`
- Component: `shuffle-grid`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: vaib215
- Component slug: shuffle-grid
- Demo slug: default
- Title: shuffle-grid
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
<div id="root"><div class="flex w-full h-screen justify-center items-center"><section class="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto"><div><span class="block mb-4 text-xs md:text-sm text-primary font-medium">Better every day</span><h3 class="text-4xl md:text-6xl font-semibold text-foreground">Let's change it up a bit</h3><p class="text-base md:text-lg text-muted-foreground my-4 md:my-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in error repellat voluptatibus ad.</p><button class="bg-primary text-primary-foreground font-medium py-2 px-4 rounded-md transition-all hover:bg-primary/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Find a class</button></div><div class="grid grid-cols-4 grid-rows-4 h-[450px] gap-1"><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(-1.42544px, -1.43175px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(0.475148px, -0.47725px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=882&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(0.475148px, -1.43175px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(0.950296px, 0px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(-0.475148px, -0.47725px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(0.475148px, -0.954501px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=686&amp;q=80&quot;); background-size: cover; background-position: center center; transform: none; transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(0.475148px, -0.47725px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1325&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(-0.950296px, 0.954501px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=681&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(0.475148px, 0.954501px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(-0.475148px, 0px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1820&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(0px, 0.47725px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(-0.950296px, 0px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=684&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(-0.950296px, 1.43175px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=870&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(0.475148px, 0.954501px, 0px); transform-origin: 50% 50% 0px;"></div><div class="w-full h-full rounded-md overflow-hidden bg-muted" style="background-image: url(&quot;https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80&quot;); background-size: cover; background-position: center center; transform: translate3d(1.42544px, 0.47725px, 0px); transform-origin: 50% 50% 0px;"></div></div></section></div></div>
```

## Reference source files

No reference source files were available.
