# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/tailark/features/default
- Registry URL: https://21st.dev/r/tailark/features
- Author: tailark
- Component slug: features
- Demo slug: default
- Title: features
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/tailark/features with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/tailark__features__default.html
- Local screenshot file: generated-21st-prompts/screenshots/tailark__features__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section><div class="bg-muted/50 py-24"><div class="mx-auto w-full max-w-5xl px-6"><div><h2 class="text-foreground text-4xl font-semibold">Effortless Task Management</h2><p class="text-muted-foreground mb-12 mt-4 text-balance text-lg">Automate your tasks and workflows by connecting your favorite tools like Notion, Todoist, and more. AI-powered scheduling helps you stay on track and adapt to changing priorities.</p><div class="bg-foreground/5 rounded-3xl p-6"><section class="bg-background shadow-foreground/5 inset-ring-1 inset-ring-background ring-foreground/5 relative w-full overflow-hidden rounded-2xl border border-border/60 shadow-md ring-1" aria-label="Customers"><div class="space-y-1 border-b border-border/60 p-6"><div class="flex items-center gap-1.5"><span class="bg-muted size-2 rounded-full border border-black/5"></span><span class="bg-muted size-2 rounded-full border border-black/5"></span><span class="bg-muted size-2 rounded-full border border-black/5"></span></div><h2 class="text-lg font-semibold leading-none tracking-tight">Customers</h2><p class="text-muted-foreground text-sm">New users by First user primary channel group (Default Channel Group)</p></div><div class="overflow-x-auto"><table class="min-w-[640px] w-full border-collapse text-sm"><thead class="bg-muted/50 supports-[backdrop-filter]:backdrop-blur-sm sticky top-0 z-10"><tr class="text-muted-foreground *:text-left *:px-3 *:py-3 *:font-medium"><th class="w-12">#</th><th class="min-w-[120px]">Date</th><th class="min-w-[120px]">Status</th><th class="min-w-[220px]">Customer</th><th class="min-w-[120px] text-right pr-4">Revenue</th></tr></thead><tbody><tr class="hover:bg-muted/30 transition-colors *:px-3 *:py-2 border-b border-border/60 last:border-0"><td class="text-muted-foreground">1</td><td class="whitespace-nowrap">10/31/2023</td><td><span class="rounded-full px-2 py-1 text-xs font-medium bg-lime-500/15 text-lime-800 dark:text-lime-300">Paid</span></td><td><div class="flex items-center gap-2"><div class="size-7 overflow-hidden rounded-full ring-1 ring-border/60"><img alt="Bernard Ng" width="28" height="28" loading="lazy" src="https://avatars.githubusercontent.com/u/31113941?v=4"></div><span class="text-foreground font-medium truncate">Bernard Ng</span></div></td><td class="text-right pr-4 font-medium tabular-nums">$43.99</td></tr><tr class="hover:bg-muted/30 transition-colors *:px-3 *:py-2 border-b border-border/60 last:border-0"><td class="text-muted-foreground">2</td><td class="whitespace-nowrap">10/21/2023</td><td><span class="rounded-full px-2 py-1 text-xs font-medium bg-yellow-500/15 text-yellow-800 dark:text-yellow-300">Ref</span></td><td><div class="flex items-center gap-2"><div class="size-7 overflow-hidden rounded-full ring-1 ring-border/60"><img alt="Méschac Irung" width="28" height="28" loading="lazy" src="https://avatars.githubusercontent.com/u/47919550?v=4"></div><span class="text-foreground font-medium truncate">Méschac Irung</span></div></td><td class="text-right pr-4 font-medium tabular-nums">$19.99</td></tr><tr class="hover:bg-muted/30 transition-colors *:px-3 *:py-2 border-b border-border/60 last:border-0"><td class="text-muted-foreground">3</td><td class="whitespace-nowrap">10/15/2023</td><td><span class="rounded-full px-2 py-1 text-xs font-medium bg-lime-500/15 text-lime-800 dark:text-lime-300">Paid</span></td><td><div class="flex items-center gap-2"><div class="size-7 overflow-hidden rounded-full ring-1 ring-border/60"><img alt="Glodie Ng" width="28" height="28" loading="lazy" src="https://avatars.githubusercontent.com/u/99137927?v=4"></div><span class="text-foreground font-medium truncate">Glodie Ng</span></div></td><td class="text-right pr-4 font-medium tabular-nums">$99.99</td></tr><tr class="hover:bg-muted/30 transition-colors *:px-3 *:py-2 border-b border-border/60 last:border-0"><td class="text-muted-foreground">4</td><td class="whitespace-nowrap">10/12/2023</td><td><span class="rounded-full px-2 py-1 text-xs font-medium bg-red-500/15 text-red-800 dark:text-red-300">Cancelled</span></td><td><div class="flex items-center gap-2"><div class="size-7 overflow-hidden rounded-full ring-1 ring-border/60"><img alt="Theo Ng" width="28" height="28" loading="lazy" src="https://avatars.githubusercontent.com/u/68236786?v=4"></div><span class="text-foreground font-medium truncate">Theo Ng</span></div></td><td class="text-right pr-4 font-medium tabular-nums">$19.99</td></tr></tbody></table></div><div class="flex items-center justify-between border-t border-border/60 p-4 text-xs text-muted-foreground"><span>Showing <strong>4</strong> rows</span><span>Updated just now</span></div></section></div></div><div class="border-foreground/10 relative mt-16 grid gap-12 border-b pb-12 [--radius:1rem] md:grid-cols-2"><div><h3 class="text-foreground text-xl font-semibold">Marketing Campaigns</h3><p class="text-muted-foreground my-4 text-lg">Effortlessly plan and execute your marketing campaigns organized.</p><div class="rounded-lg border bg-card text-card-foreground shadow-sm aspect-video overflow-hidden px-6"><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full translate-y-6"></div></div></div><div><h3 class="text-foreground text-xl font-semibold">AI Meeting Scheduler</h3><p class="text-muted-foreground my-4 text-lg">Effortlessly book and manage your meetings. Stay on top of your schedule.</p><div class="rounded-lg border bg-card text-card-foreground shadow-sm aspect-video overflow-hidden"><div class="rounded-lg border bg-card text-card-foreground shadow-sm translate-6 h-full"></div></div></div></div><blockquote class="before:bg-primary relative mt-12 max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full"><p class="text-foreground text-lg">Wow, auto-generated pages are the kind of thing that you don't even know you need until you see it. It's like an AI-native CRM.</p><footer class="mt-4 flex items-center gap-2"><cite>Méschac Irung</cite><span aria-hidden="true" class="bg-foreground/15 size-1 rounded-full"></span><span class="text-muted-foreground">Creator</span></footer></blockquote></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.