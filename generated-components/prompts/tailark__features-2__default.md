# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/tailark/features-2/default
- Registry URL: https://21st.dev/r/tailark/features-2
- Author: tailark
- Component slug: features-2
- Demo slug: default
- Title: features-2
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/tailark/features-2 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/tailark__features-2__default.html
- Local screenshot file: generated-21st-prompts/screenshots/tailark__features-2__default.png

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
<div id="root"><div class="bg-background text-foreground"><div class="w-full"><section class="py-16 md:py-32"><div class="@container mx-auto max-w-5xl px-6"><div class="text-center"><h2 class="text-balance text-4xl font-semibold lg:text-5xl">Built to cover your needs</h2><p class="mt-4">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</p></div><div class="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16"><div class="rounded-lg text-card-foreground group border-0 bg-muted shadow-none"><div class="flex flex-col space-y-1.5 p-6 pb-3"><div aria-hidden="true" class="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"><div class="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div><div class="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap size-6" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div></div><h3 class="mt-6 font-medium">Customizable</h3></div><div class="p-6 pt-0"><p class="text-sm">Extensive customization options, allowing you to tailor every aspect to meet your specific needs.</p></div></div><div class="rounded-lg text-card-foreground group border-0 bg-muted shadow-none"><div class="flex flex-col space-y-1.5 p-6 pb-3"><div aria-hidden="true" class="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"><div class="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div><div class="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2 lucide-settings-2 size-6" aria-hidden="true"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg></div></div><h3 class="mt-6 font-medium">You have full control</h3></div><div class="p-6 pt-0"><p class="text-sm">From design elements to functionality, you have complete control to create a unique and personalized experience.</p></div></div><div class="rounded-lg text-card-foreground group border-0 bg-muted shadow-none"><div class="flex flex-col space-y-1.5 p-6 pb-3"><div aria-hidden="true" class="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"><div class="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div><div class="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles size-6" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg></div></div><h3 class="mt-6 font-medium">Powered By AI</h3></div><div class="p-6 pt-0"><p class="text-sm">Elements to functionality, you have complete control to create a unique experience.</p></div></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.