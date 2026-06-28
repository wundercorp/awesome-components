# Build Sticky Scroll in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Sticky Scroll screenshot](screenshot.png)

## Component

- Author group: `ui-layouts`
- Component: `sticky-scroll`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ui-layouts
- Component slug: sticky-scroll
- Demo slug: default
- Title: sticky-scroll
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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_ComponentDemo">ComponentDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><main class="bg-black"><div class="wrapper"><section class="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div><h1 class="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">Create Gallery In a Better Way<br>Using CSS sticky properties <br>Scroll down! 👇</h1></section></div><section class="text-white   w-full bg-slate-950  "><div class="grid grid-cols-12 gap-2"><div class="grid gap-2 col-span-4"><figure class=" w-full"><img alt="" class="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&amp;auto=format&amp;fit=crop"></figure><figure class=" w-full"><img alt="" class="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&amp;auto=format&amp;fit=crop"></figure><figure class=" w-full"><img alt="" class="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&amp;auto=format&amp;fit=crop"></figure><figure class="w-full"><img alt="" class="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&amp;auto=format&amp;fit=crop"></figure><figure class="w-full"><img alt="" class="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1719411182379-ffd97c1f7ebf?w=500&amp;auto=format&amp;fit=crop"></figure></div><div class="sticky top-0 h-screen w-full col-span-4 gap-2  grid grid-rows-3"><figure class="w-full h-full "><img alt="" class="transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=500&amp;auto=format&amp;fit=crop"></figure><figure class="w-full h-full "><img alt="" class="transition-all duration-300 h-full w-full align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1476180814856-a36609db0493?w=500&amp;auto=format&amp;fit=crop"></figure><figure class="w-full h-full "><img alt="" class="transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=500&amp;auto=format&amp;fit=crop"></figure></div><div class="grid gap-2 col-span-4"><figure class="w-full"><img alt="" class="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=500&amp;auto=format&amp;fit=crop"></figure><figure class="w-full"><img alt="" class="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=500&amp;auto=format&amp;fit=crop"></figure><figure class="w-full"><img alt="" class="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=500&amp;auto=format&amp;fit=crop"></figure><figure class="w-full"><img alt="" class="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=500&amp;auto=format&amp;fit=crop"></figure><figure class="w-full"><img alt="" class="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md " src="https://images.unsplash.com/photo-1719554873571-0fd6bf322bb1?w=500&amp;auto=format&amp;fit=crop"></figure></div></div></section><footer class="group bg-slate-950 "><h1 class="text-[16vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">ui-layout</h1><div class="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div></footer></main></div></div>
```

## Reference source files

No reference source files were available.
