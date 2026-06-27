# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/berkcangumusisik/spotlight-card/default
- Registry URL: https://21st.dev/r/berkcangumusisik/spotlight-card
- Author: berkcangumusisik
- Component slug: spotlight-card
- Demo slug: default
- Title: spotlight-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/berkcangumusisik/spotlight-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/berkcangumusisik__spotlight-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/berkcangumusisik__spotlight-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-[500px] w-full flex items-center justify-center bg-black p-4 sm:p-10"><div class="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl w-full"><div class="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-200 transition-colors hover:border-neutral-700 p-6 h-full flex flex-col gap-4"><div class="pointer-events-none absolute -inset-px transition duration-300" style="opacity: 0; background: radial-gradient(600px at 0px 0px, rgba(255, 255, 255, 0.15), transparent 40%);"></div><div class="relative z-10"><div class="h-10 w-10 flex items-center justify-center rounded-lg bg-neutral-800 border border-neutral-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers text-white h-5 w-5" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div><div><h3 class="text-lg font-semibold text-white mb-1">Seamless UX</h3><p class="text-sm text-neutral-400">Smooth, mouse-responsive interactions that elevate the user experience to the next level.</p></div></div></div><div class="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-200 transition-colors hover:border-neutral-700 p-6 h-full flex flex-col gap-4"><div class="pointer-events-none absolute -inset-px transition duration-300" style="opacity: 0; background: radial-gradient(600px at 0px 0px, rgba(14, 165, 233, 0.25), transparent 40%);"></div><div class="relative z-10"><div class="h-10 w-10 flex items-center justify-center rounded-lg bg-sky-900/20 border border-sky-800/50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check text-sky-400 h-5 w-5" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div><div><h3 class="text-lg font-semibold text-white mb-1">Secure By Design</h3><p class="text-sm text-neutral-400">Built with modern security standards, ensuring your data is protected with end-to-end encryption.</p></div></div></div><div class="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-200 transition-colors hover:border-neutral-700 p-6 h-full flex flex-col gap-4"><div class="pointer-events-none absolute -inset-px transition duration-300" style="opacity: 0; background: radial-gradient(600px at 0px 0px, rgba(168, 85, 247, 0.25), transparent 40%);"></div><div class="relative z-10"><div class="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-900/20 border border-purple-800/50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap text-purple-400 h-5 w-5" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><div><h3 class="text-lg font-semibold text-white mb-1">Lightning Fast</h3><p class="text-sm text-neutral-400">Optimized for performance. Import the component and start building without configuration overhead.</p></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.