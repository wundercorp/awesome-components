# Build Dashboard in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Dashboard screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `dashboard`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: dashboard
- Demo slug: default
- Title: dashboard
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex h-full w-full items-center justify-center bg-muted/20 p-4"><div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md"><div class="flex flex-col space-y-1.5 p-6"><div class="flex items-center justify-between"><h3 class="text-2xl font-semibold leading-none tracking-tight">Storage</h3><a href="#" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">See All</a></div></div><div class="p-6 pt-0 grid gap-6"><div><div class="relative flex h-3 w-full overflow-hidden rounded-full bg-secondary" role="progressbar" aria-valuenow="120" aria-valuemin="0" aria-valuemax="128" aria-label="Storage usage breakdown"><div class="h-full bg-[#8B5CF6] border-r-2 border-card" style="flex-shrink: 0; width: 46.875%;"></div><div class="h-full bg-[#C4B5FD] border-r-2 border-card" style="flex-shrink: 0; width: 23.4375%;"></div><div class="h-full bg-[#67E8F9] border-r-2 border-card" style="flex-shrink: 0; width: 15.625%;"></div><div class="h-full bg-muted" style="flex-shrink: 0; width: 7.8125%;"></div></div><div class="mt-4 flex flex-wrap items-center justify-between"><div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><div class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]"></span><span>Applications</span></div><div class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-[#C4B5FD]"></span><span>Photos</span></div><div class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-[#67E8F9]"></span><span>Mail</span></div><div class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-muted"></span><span>Cloud</span></div></div><p class="mt-2 text-sm text-muted-foreground sm:mt-0">120 GB of 128 GB Used</p></div></div><div class="rounded-lg border border-yellow-200/60 bg-yellow-50/50 p-4 text-sm text-yellow-900 dark:border-yellow-900/50 dark:bg-yellow-950/50 dark:text-yellow-200">“Your cloud storage almost full. To continue saving your photos, videos, and important files without interruptions, consider upgrading to the <strong class="font-semibold text-current">Pro Plan.</strong>”</div><div><h3 class="text-base font-semibold text-card-foreground">Application</h3><div class="mt-2 overflow-hidden rounded-lg border"><a href="#" class="flex items-center justify-between p-4 transition-colors hover:bg-muted/50 border-b"><div class="flex items-center gap-4"><div class="flex h-10 w-10 items-center justify-center rounded-lg bg-black p-1.5"><svg width="30" height="30" viewBox="0 0 54 80" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#figma__clip0_912_3)"><path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83"></path><path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF"></path><path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E"></path><path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262"></path><path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE"></path></g><defs><clipPath id="figma__clip0_912_3"><rect width="53.3333" height="80" fill="white"></rect></clipPath></defs></svg></div><span class="font-medium">Figma Apps</span></div><div class="flex items-center gap-2 text-muted-foreground"><span class="text-sm">54 GB</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></div></a><a href="#" class="flex items-center justify-between p-4 transition-colors hover:bg-muted/50 border-b"><div class="flex items-center gap-4"><div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2AABEE]"><svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid"><defs><linearGradient id="telegram__a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2AABEE"></stop><stop offset="100%" stop-color="#229ED9"></stop></linearGradient></defs><path fill="url(#telegram__a)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"></path><path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z"></path></svg></div><span class="font-medium">Telegram</span></div><div class="flex items-center gap-2 text-muted-foreground"><span class="text-sm">28 GB</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></div></a><a href="#" class="flex items-center justify-between p-4 transition-colors hover:bg-muted/50"><div class="flex items-center gap-4"><div class="flex h-10 w-10 items-center justify-center rounded-lg p-1.5 bg-[#541554]"><svg enable-background="new 0 0 2447.6 2452.5" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path><path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path><path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path><path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path></g></svg></div><span class="font-medium">Slack</span></div><div class="flex items-center gap-2 text-muted-foreground"><span class="text-sm">3 GB</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></div></a></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
