# Build Stars Scrolling Wheel in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Stars Scrolling Wheel screenshot](screenshot.png)

## Component

- Author group: `animate-ui`
- Component: `stars-scrolling-wheel`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: animate-ui
- Component slug: stars-scrolling-wheel
- Demo slug: default
- Title: stars-scrolling-wheel
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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_DemoOne">DemoOne</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="size-full flex items-center justify-center"><div class="relative overflow-hidden w-[200px] bg-background" style="height: 240px;"><div class="absolute z-2 top-0 inset-x-0 bg-gradient-to-t from-transparent to-background" style="height: 48px;"></div><div class="absolute z-1 top-0 inset-x-0 bg-background/60" style="height: 96px;"></div><div class="absolute z-1 bottom-0 inset-x-0 bg-gradient-to-b from-transparent to-background" style="height: 48px;"></div><div class="absolute z-1 bottom-0 inset-x-0 bg-background/60" style="height: 96px;"></div><div class="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center"><div class="w-full bg-muted rounded-xl flex items-center justify-start px-6" style="height: 48px;"><div class="relative inline-flex size-[28px] shrink-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-yellow-500"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006Z" clip-rule="evenodd"></path></svg><div class="absolute inset-0 rounded-full" style="background: radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, rgba(255, 215, 0, 0) 70%); opacity: 0; transform: scale(1.2);"></div><div class="absolute inset-0 rounded-full" style="box-shadow: rgba(255, 215, 0, 0.6) 0px 0px 10px 2px; opacity: 0; transform: scale(1.5);"></div><div class="absolute w-1 h-1 rounded-full bg-yellow-500" style="opacity: 0; transform: translateX(calc(50% + 30px)) translateY(calc(50% + 0px)) scale(0);"></div><div class="absolute w-1 h-1 rounded-full bg-yellow-500" style="opacity: 0; transform: translateX(calc(50% + 15px)) translateY(calc(50% + 25.9808px)) scale(0);"></div><div class="absolute w-1 h-1 rounded-full bg-yellow-500" style="opacity: 0; transform: translateX(calc(50% - 15px)) translateY(calc(50% + 25.9808px)) scale(0);"></div><div class="absolute w-1 h-1 rounded-full bg-yellow-500" style="opacity: 0; transform: translateX(calc(50% - 30px)) translateY(calc(50% + 3.67394e-15px)) scale(0);"></div><div class="absolute w-1 h-1 rounded-full bg-yellow-500" style="opacity: 0; transform: translateX(calc(50% - 15px)) translateY(calc(50% - 25.9808px)) scale(0);"></div><div class="absolute w-1 h-1 rounded-full bg-yellow-500" style="opacity: 0; transform: translateX(calc(50% + 15px)) translateY(calc(50% - 25.9808px)) scale(0);"></div></div></div></div><div class="absolute left-17 bottom-0 text-start flex items-center justify-center flex-col text-foreground" style="transform: translateY(383.999px);"><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">1,200</div><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">1,100</div><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">1,000</div><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">900</div><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">800</div><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">700</div><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">600</div><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">500</div><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">400</div><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">300</div><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">200</div><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">100</div><div class="text-2xl font-bold flex items-center justify-start w-full" style="height: 48px;">0</div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
