# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/moumensoliman/faq-section-shadcnui/default
- Registry URL: https://21st.dev/r/moumensoliman/faq-section-shadcnui
- Author: moumensoliman
- Component slug: faq-section-shadcnui
- Demo slug: default
- Title: faq-section-shadcnui
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/moumensoliman/faq-section-shadcnui with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/moumensoliman__faq-section-shadcnui__default.html
- Local screenshot file: generated-21st-prompts/screenshots/moumensoliman__faq-section-shadcnui__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen items-center justify-center bg-background p-8"><div class="w-full px-4 py-16"><div class="mx-auto max-w-4xl"><div class="mb-12 text-center" style="opacity: 1; transform: none;"><div class="mb-4 inline-flex rounded-full bg-accent/10 p-3" aria-hidden="true" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-help h-8 w-8 text-[var(--muted-foreground)]" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg></div><h2 class="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Frequently Asked Questions</h2><p class="text-sm text-[var(--foreground)]/70 sm:text-base md:text-lg">Everything you need to know about our library</p></div><div class="space-y-4"><div style="opacity: 1; transform: none;"><div class="rounded-xl border text-card-foreground shadow overflow-hidden bg-[var(--card-bg)]"><div class="flex flex-col space-y-1.5 p-6"><button type="button" class="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-white/70" aria-expanded="true" aria-controls="«r0»-answer-0" id="«r0»-question-0"><span class="text-lg font-semibold">How do I get started?</span><div aria-hidden="true" style="transform: rotate(180deg);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-[var(--foreground)]/60" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div><div role="region" id="«r0»-answer-0" aria-labelledby="«r0»-question-0" style="height: auto; opacity: 1;"><div class="p-6 pt-0"><p class="text-[var(--foreground)]/70">Simply install the library using npm or yarn, import the components you need, and start building amazing interfaces!</p></div></div></div></div><div style="opacity: 1; transform: none;"><div class="rounded-xl border text-card-foreground shadow overflow-hidden bg-[var(--card-bg)]"><div class="flex flex-col space-y-1.5 p-6"><button type="button" class="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-white/70" aria-expanded="false" aria-controls="«r0»-answer-1" id="«r0»-question-1"><span class="text-lg font-semibold">Is this library free to use?</span><div aria-hidden="true" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-[var(--foreground)]/60" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div></div><div style="opacity: 1; transform: none;"><div class="rounded-xl border text-card-foreground shadow overflow-hidden bg-[var(--card-bg)]"><div class="flex flex-col space-y-1.5 p-6"><button type="button" class="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-white/70" aria-expanded="false" aria-controls="«r0»-answer-2" id="«r0»-question-2"><span class="text-lg font-semibold">Can I customize the animations?</span><div aria-hidden="true" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-[var(--foreground)]/60" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div></div><div style="opacity: 1; transform: none;"><div class="rounded-xl border text-card-foreground shadow overflow-hidden bg-[var(--card-bg)]"><div class="flex flex-col space-y-1.5 p-6"><button type="button" class="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-white/70" aria-expanded="false" aria-controls="«r0»-answer-3" id="«r0»-question-3"><span class="text-lg font-semibold">Does it work with Next.js?</span><div aria-hidden="true" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-[var(--foreground)]/60" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div></div><div style="opacity: 1; transform: none;"><div class="rounded-xl border text-card-foreground shadow overflow-hidden bg-[var(--card-bg)]"><div class="flex flex-col space-y-1.5 p-6"><button type="button" class="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-white/70" aria-expanded="false" aria-controls="«r0»-answer-4" id="«r0»-question-4"><span class="text-lg font-semibold">Is TypeScript supported?</span><div aria-hidden="true" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-[var(--foreground)]/60" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.