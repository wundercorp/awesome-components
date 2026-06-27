# Build Header 02 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Header 02 screenshot](screenshot.png)

## Component

- Author group: `aliimam`
- Component: `header-02`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: aliimam
- Component slug: header-02
- Demo slug: default
- Title: header-02
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col min-h-screen w-full"><header class="bg-background border-b sticky top-0 z-50"><div class="mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-16 lg:h-20"><a href="#" aria-label="home" class="flex gap-2 whitespace-nowrap items-center"><img alt="Design Logo" height="50" width="50" class="h-10 z-10 w-full hidden dark:block object-contain" src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/brand/ai-logo-white.png"><img alt="Design Logo" height="50" width="50" class="h-10 z-10 w-full dark:hidden block object-contain" src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/brand/ai-logo-black.png"><span class="font-semibold text-xl">Ali Imam</span></a><button class="border-input max-w-lg hidden bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 lg:inline-flex h-9 w-full rounded-md border px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"><span class="flex grow items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search text-muted-foreground/80 -ms-1 me-3" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg><span class="text-muted-foreground/70 font-normal">Search design tools...</span></span><kbd class="bg-background text-muted-foreground/70 ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">⌘K</kbd></button><div class="flex items-center gap-2"><div class="flex flex-col justify-center"><div><button type="button" aria-pressed="false" data-state="off" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:text-accent-foreground px-3 group bg-secondary dark:bg-secondary data-[state=on]:hover:bg-muted cursor-pointer size-9 data-[state=on]:bg-transparent" aria-label="Switch to dark mode"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100" aria-hidden="true"><path d="M20.985 12.4859C20.8913 14.2221 20.2967 15.8939 19.2731 17.2993C18.2495 18.7047 16.8407 19.7836 15.217 20.4054C13.5934 21.0273 11.8243 21.1655 10.1238 20.8034C8.42322 20.4414 6.86396 19.5944 5.63446 18.3651C4.40497 17.1357 3.55789 15.5765 3.19562 13.876C2.83335 12.1755 2.9714 10.4065 3.59308 8.78273C4.21476 7.159 5.29346 5.7501 6.69878 4.72635C8.10409 3.70259 9.77587 3.10782 11.512 3.01391C11.917 2.99191 12.129 3.47391 11.914 3.81691C11.1949 4.96746 10.887 6.32778 11.0405 7.67586C11.194 9.02394 11.7999 10.2802 12.7593 11.2396C13.7187 12.199 14.975 12.8049 16.3231 12.9584C17.6711 13.1119 19.0314 12.804 20.182 12.0849C20.526 11.8699 21.007 12.0809 20.985 12.4859Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0" aria-hidden="true"><path d="M12 16C14.209 16 16 14.209 16 12 16 9.791 14.209 8 12 8 9.791 8 8 9.791 8 12 8 14.209 9.791 16 12 16ZM12 2V4M12 20V22M4.93 4.93 6.34 6.34M17.66 17.66 19.07 19.07M2 12H4M20 12H22M6.34 17.66 4.93 19.07M19.07 4.93 17.66 6.34" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></div><button class="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 md:flex items-center hidden gap-2"><span>Start Designing</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M5 12H19M12 5 19 12 12 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 lg:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«r3»" data-state="closed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"><path d="M5 9H19M5 15H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></div><nav class="hidden lg:block border-t"><ul class="flex justify-center items-center -mx-2"><li><a href="#" class="block px-4 py-3 text-sm transition-colors border-b-2 border-primary font-semibold">Overview</a></li><li><a href="#" class="block px-4 py-3 text-sm transition-colors hover:bg-primary/20">Design Systems</a></li><li><a href="#" class="block px-4 py-3 text-sm transition-colors hover:bg-primary/20">UI Kits</a></li><li><a href="#" class="block px-4 py-3 text-sm transition-colors hover:bg-primary/20">Brand Assets</a></li><li><a href="#" class="block px-4 py-3 text-sm transition-colors hover:bg-primary/20">Templates</a></li><li><a href="#" class="block px-4 py-3 text-sm transition-colors hover:bg-primary/20">Workshops</a></li><li><a href="#" class="block px-4 py-3 text-sm transition-colors hover:bg-primary/20">Design Labs</a></li><li><a href="#" class="block px-4 py-3 text-sm transition-colors hover:bg-primary/20">Case Studies</a></li><li><a href="#" class="block px-4 py-3 text-sm transition-colors hover:bg-primary/20">Resources</a></li></ul></nav></div></header><main class="flex-1"><section class="h-screen flex items-center justify-center"><h1 class="text-4xl font-bold">Hero</h1></section><section class="h-screen flex items-center justify-center"><h1 class="text-4xl font-bold">Section</h1></section></main></div></div></div></div>
```

## Reference source files

No reference source files were available.
