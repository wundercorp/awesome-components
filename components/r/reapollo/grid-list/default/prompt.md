# Build Grid List in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Grid List screenshot](screenshot.png)

## Component

- Author group: `reapollo`
- Component: `grid-list`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reapollo
- Component slug: grid-list
- Demo slug: default
- Title: grid-list
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center p-8"><div class="overflow-hidden rounded-[1rem] bg-muted shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-0.5 space-y-0.5 sm:space-y-0 p-0.5"><div class="text-card-foreground shadow-sm group relative rounded-xl border-0 bg-card p-0 focus-within:ring-2 focus-within:ring-ring focus-within:ring-inset"><div class="p-6"><div><span class="bg-green-50 dark:bg-green-950/30 text-green-700 inline-flex rounded-lg p-3 ring-2 ring-inset ring-green-700/30"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-6 w-6" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span></div><div class="mt-4"><h3 class="text-base font-semibold text-foreground"><a href="#" class="focus:outline-none"><span aria-hidden="true" class="absolute inset-0"></span>Getting Started</a></h3><p class="mt-2 text-sm text-muted-foreground">Everything you need to know to get started and get to work in ChatCloud.</p></div><span aria-hidden="true" class="pointer-events-none absolute top-6 right-6 text-muted-foreground/50 group-hover:text-muted-foreground/60"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-6 w-6" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></div><div class="text-card-foreground shadow-sm group relative rounded-xl border-0 bg-card p-0 focus-within:ring-2 focus-within:ring-ring focus-within:ring-inset"><div class="p-6"><div><span class="bg-red-50 dark:bg-red-950/30 text-red-700 inline-flex rounded-lg p-3 ring-2 ring-inset ring-red-700/30"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user h-6 w-6" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg></span></div><div class="mt-4"><h3 class="text-base font-semibold text-foreground"><a href="#" class="focus:outline-none"><span aria-hidden="true" class="absolute inset-0"></span>Admin Settings</a></h3><p class="mt-2 text-sm text-muted-foreground">Learn how to manage your current workspace or your enterprise space.</p></div><span aria-hidden="true" class="pointer-events-none absolute top-6 right-6 text-muted-foreground/50 group-hover:text-muted-foreground/60"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-6 w-6" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></div><div class="text-card-foreground shadow-sm group relative rounded-xl border-0 bg-card p-0 focus-within:ring-2 focus-within:ring-ring focus-within:ring-inset"><div class="p-6"><div><span class="bg-blue-50 dark:bg-blue-950/30 text-blue-700 inline-flex rounded-lg p-3 ring-2 ring-inset ring-blue-700/30"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-server h-6 w-6" aria-hidden="true"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></span></div><div class="mt-4"><h3 class="text-base font-semibold text-foreground"><a href="#" class="focus:outline-none"><span aria-hidden="true" class="absolute inset-0"></span>Server Setup</a></h3><p class="mt-2 text-sm text-muted-foreground">Connect, simplify, and automate. Discover the power of apps and tools.</p></div><span aria-hidden="true" class="pointer-events-none absolute top-6 right-6 text-muted-foreground/50 group-hover:text-muted-foreground/60"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-6 w-6" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></div><div class="text-card-foreground shadow-sm group relative rounded-xl border-0 bg-card p-0 focus-within:ring-2 focus-within:ring-ring focus-within:ring-inset"><div class="p-6"><div><span class="bg-sky-50 dark:bg-sky-950/30 text-sky-700 inline-flex rounded-lg p-3 ring-2 ring-inset ring-sky-700/30"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-6 w-6" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></span></div><div class="mt-4"><h3 class="text-base font-semibold text-foreground"><a href="#" class="focus:outline-none"><span aria-hidden="true" class="absolute inset-0"></span>Login and Verification</a></h3><p class="mt-2 text-sm text-muted-foreground">Read on to learn how to sign in with your email address, or your Apple or Google.</p></div><span aria-hidden="true" class="pointer-events-none absolute top-6 right-6 text-muted-foreground/50 group-hover:text-muted-foreground/60"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-6 w-6" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></div><div class="text-card-foreground shadow-sm group relative rounded-xl border-0 bg-card p-0 focus-within:ring-2 focus-within:ring-ring focus-within:ring-inset"><div class="p-6"><div><span class="bg-pink-50 dark:bg-pink-950/30 text-pink-700 inline-flex rounded-lg p-3 ring-2 ring-inset ring-pink-700/30"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-contact-round h-6 w-6" aria-hidden="true"><path d="M16 2v2"></path><path d="M17.915 22a6 6 0 0 0-12 0"></path><path d="M8 2v2"></path><circle cx="12" cy="12" r="4"></circle><rect x="3" y="4" width="18" height="18" rx="2"></rect></svg></span></div><div class="mt-4"><h3 class="text-base font-semibold text-foreground"><a href="#" class="focus:outline-none"><span aria-hidden="true" class="absolute inset-0"></span>Account Setup</a></h3><p class="mt-2 text-sm text-muted-foreground">Adjust your profile and preferences to make ChatCloud work just for you.</p></div><span aria-hidden="true" class="pointer-events-none absolute top-6 right-6 text-muted-foreground/50 group-hover:text-muted-foreground/60"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-6 w-6" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></div><div class="text-card-foreground shadow-sm group relative rounded-xl border-0 bg-card p-0 focus-within:ring-2 focus-within:ring-ring focus-within:ring-inset"><div class="p-6"><div><span class="bg-orange-50 dark:bg-orange-950/30 text-orange-700 inline-flex rounded-lg p-3 ring-2 ring-inset ring-orange-700/30"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand h-6 w-6" aria-hidden="true"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg></span></div><div class="mt-4"><h3 class="text-base font-semibold text-foreground"><a href="#" class="focus:outline-none"><span aria-hidden="true" class="absolute inset-0"></span>Trust &amp; Safety</a></h3><p class="mt-2 text-sm text-muted-foreground">Trust on our current database and learn how we distribute your data.</p></div><span aria-hidden="true" class="pointer-events-none absolute top-6 right-6 text-muted-foreground/50 group-hover:text-muted-foreground/60"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-6 w-6" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
