# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hextaui/newsletter-signup/default
- Registry URL: https://21st.dev/r/hextaui/newsletter-signup
- Author: hextaui
- Component slug: newsletter-signup
- Demo slug: default
- Title: newsletter-signup
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hextaui/newsletter-signup with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hextaui__newsletter-signup__default.html
- Local screenshot file: generated-21st-prompts/screenshots/hextaui__newsletter-signup__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="bg-secondary/50 border border-primary/10 rounded-lg p-6 "><form class="flex flex-col gap-4" style="opacity: 1; transform: none;"><div class="flex items-start justify-center gap-1 flex-col overflow-y-hidden"><h2 class="text-2xl font-bold text-foreground" style="opacity: 1; transform: none;">Subscribe to our newsletter</h2><p class="text-muted-foreground text-sm" style="opacity: 1; filter: blur(0px); transform: none;">Stay up to date with our latest news and updates.</p></div><div class="space-y-2"><label class="font-medium text-sm" for="email" style="opacity: 1; filter: blur(0px);">Email address</label><div class="flex gap-2" style="opacity: 1; filter: blur(0px);"><input id="email" placeholder="you@example.com" class="w-full px-3 py-2 border rounded-md focus-visible:ring-0 focus-within:ring-0 focus:outline-white/10 " type="email" value=""><button type="submit" class="relative overflow-hidden text-sm flex items-center justify-center gap-2 px-4 py-2 bg-white border-black font-medium"><div class="flex items-center px-4" style="opacity: 1;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-4 w-4" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg><span class="ml-2">Subscribe</span></div></button></div></div></form></div></div></div></div>
```

## Public registry source files

No public registry source files were available.