# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/tailark/features-11/default
- Registry URL: https://21st.dev/r/tailark/features-11
- Author: tailark
- Component slug: features-11
- Demo slug: default
- Title: features-11
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/tailark/features-11 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/tailark__features-11__default.html
- Local screenshot file: generated-21st-prompts/screenshots/tailark__features-11__default.png

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
<div id="root"><div class="bg-background text-foreground"><div class="w-full"><section class="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32"><div class="mx-auto max-w-5xl px-6"><div class="mx-auto grid gap-2 sm:grid-cols-5"><div class="rounded-lg border bg-card text-card-foreground shadow-sm group overflow-hidden shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl"><div class="flex flex-col space-y-1.5 p-6"><div class="md:p-6"><p class="font-medium">Advanced tracking system</p><p class="text-muted-foreground mt-3 max-w-sm text-sm">Quick AI lives a single hotkey away - ready to quickly appear as a floating window above your other apps..</p></div></div><div class="relative h-fit pl-6 md:pl-12"><div class="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]"></div><div class="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950"><img class="hidden dark:block" alt="payments illustration dark" width="1207" height="929" src="https://tailark.com/_next/image?url=%2Fmail2.png&amp;w=3840&amp;q=75"><img class="shadow dark:hidden" alt="payments illustration light" width="1207" height="929" src="https://tailark.com/_next/image?url=%2Fmail2-light.png&amp;w=3840&amp;q=75"></div></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl"><p class="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">Advanced UX, Instantly locate all your assets.</p><div class="p-6 pt-0 mt-auto h-fit"><div class="relative mb-6 sm:mb-0"><div class="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div><div class="aspect-76/59 overflow-hidden rounded-r-lg border"><img class="hidden dark:block" alt="payments illustration dark" width="1207" height="929" src="https://tailark.com/_next/image?url=%2Forigin-cal-dark.png&amp;w=3840&amp;q=75"><img class="shadow dark:hidden" alt="payments illustration light" width="1207" height="929" src="https://tailark.com/_next/image?url=%2Forigin-cal.png&amp;w=3840&amp;q=75"></div></div></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm group p-6 shadow-black/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12"><p class="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">Advanced UX, Instantly locate all your assets.</p><div class="flex justify-center gap-6"><div class="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black"><span class="absolute right-2 top-1 block text-sm">fn</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe mt-auto size-4" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></div><div class="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black"><span>K</span></div></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm group relative shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl"><div class="flex flex-col space-y-1.5 p-6 md:p-12"><p class="font-medium">Advanced tracking system</p><p class="text-muted-foreground mt-2 max-w-sm text-sm">Quick AI lives a single hotkey away apps..</p></div><div class="p-6 pt-0 relative h-fit px-6 pb-6 md:px-12 md:pb-12"><div class="grid grid-cols-4 gap-2 md:grid-cols-6"><div class="rounded-(--radius) aspect-square border border-dashed"></div><div class="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4"><img class="m-auto size-8 invert dark:invert-0" alt="Linear logo" width="32" height="32" src="https://oxymor-ns.tailus.io/logos/linear.svg"></div><div class="rounded-(--radius) aspect-square border border-dashed"></div><div class="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4"><img class="m-auto size-8 invert dark:invert-0" alt="Netlify logo" width="32" height="32" src="https://oxymor-ns.tailus.io/logos/netlify.svg"></div><div class="rounded-(--radius) aspect-square border border-dashed"></div><div class="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4"><img class="m-auto size-8 invert dark:invert-0" alt="github logo" width="32" height="32" src="https://oxymor-ns.tailus.io/logos/github.svg"></div></div></div></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.