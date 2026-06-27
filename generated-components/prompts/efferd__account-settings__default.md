# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/efferd/account-settings/default
- Registry URL: https://21st.dev/r/efferd/account-settings
- Author: efferd
- Component slug: account-settings
- Demo slug: default
- Title: account-settings
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/efferd/account-settings with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/efferd__account-settings__default.html
- Local screenshot file: generated-21st-prompts/screenshots/efferd__account-settings__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="relative min-h-screen w-full px-4 py-10"><div aria-hidden="true" class="absolute inset-0 isolate -z-10 opacity-80 contain-strict"><div class="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full"></div><div class="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full"></div><div class="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full"></div></div><div class="mx-auto w-full max-w-4xl space-y-8"><div class="flex flex-col"><h2 class="text-2xl font-bold">Account Settings</h2><p class="text-muted-foreground text-base">Manage account and your personal information.</p></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div><div class="py-2"><div class="animate-in fade-in grid grid-cols-1 gap-x-10 gap-y-4 py-8 duration-500 md:grid-cols-10"><div class="w-full space-y-1.5 md:col-span-4"><h2 class="font-heading text-lg leading-none font-semibold">Your Avatar</h2><p class="text-muted-foreground text-sm text-balance">An avatar is optional but strongly recommended.</p></div><div class="md:col-span-6"><span class="flex shrink-0 overflow-hidden rounded-full relative mx-auto h-20 w-20 cursor-pointer hover:opacity-50" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«r0»" data-state="closed" data-slot="dialog-trigger"><img class="aspect-square h-full w-full" src="https://avatar.vercel.sh/john"></span></div></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div><div class="animate-in fade-in grid grid-cols-1 gap-x-10 gap-y-4 py-8 duration-500 md:grid-cols-10"><div class="w-full space-y-1.5 md:col-span-4"><h2 class="font-heading text-lg leading-none font-semibold">Your Name</h2><p class="text-muted-foreground text-sm text-balance">Please enter a display name you are comfortable with.</p></div><div class="md:col-span-6"><div class="w-full space-y-1"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only">Name</label><div class="flex w-full items-center justify-center gap-2"><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Enter Your Name"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 text-xs md:text-sm" type="submit">Save Changes</button></div><p class="text-muted-foreground text-xs">Max 32 characters</p></div></div></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div><div class="animate-in fade-in grid grid-cols-1 gap-x-10 gap-y-4 py-8 duration-500 md:grid-cols-10"><div class="w-full space-y-1.5 md:col-span-4"><h2 class="font-heading text-lg leading-none font-semibold">Your Email</h2><p class="text-muted-foreground text-sm text-balance">Please enter a Primary Email Address.</p></div><div class="md:col-span-6"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only">Email</label><div class="flex w-full items-center justify-center gap-2"><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Enter Your Email" type="email"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 text-xs md:text-sm" type="submit">Save Changes</button></div></div></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.