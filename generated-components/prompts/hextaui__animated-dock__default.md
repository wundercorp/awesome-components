# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hextaui/animated-dock/default
- Registry URL: https://21st.dev/r/hextaui/animated-dock
- Author: hextaui
- Component slug: animated-dock
- Demo slug: default
- Title: animated-dock
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hextaui/animated-dock with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hextaui__animated-dock__default.html
- Local screenshot file: generated-21st-prompts/screenshots/hextaui__animated-dock__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="mx-auto flex h-16 items-end gap-4 rounded-2xl bg-secondary/50 border border-primary/10 shadow-md px-4 pb-3"><div class="aspect-square w-10 rounded-full bg-primary text-secondary-foreground flex items-center justify-center" style="width: 40px;"><div class="flex items-center justify-center w-full h-full grow" style="transform: none;"><a href="https://github.com/preetsuthar17" target="_blank" class="grow flex items-center justify-center w-full h-full text-primary-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a></div></div><div class="aspect-square w-10 rounded-full bg-primary text-secondary-foreground flex items-center justify-center" style="width: 40px;"><div class="flex items-center justify-center w-full h-full grow" style="transform: none;"><a href="https://x.com/preetsuthar17" target="_blank" class="grow flex items-center justify-center w-full h-full text-primary-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a></div></div><div class="aspect-square w-10 rounded-full bg-primary text-secondary-foreground flex items-center justify-center" style="width: 40px;"><div class="flex items-center justify-center w-full h-full grow" style="transform: none;"><a href="https://www.youtube.com/@preetsuthar17" target="_blank" class="grow flex items-center justify-center w-full h-full text-primary-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a></div></div><div class="aspect-square w-10 rounded-full bg-primary text-secondary-foreground flex items-center justify-center" style="width: 40px;"><div class="flex items-center justify-center w-full h-full grow" style="transform: none;"><a href="https://github.com/preetsuthar17/hextaui" target="_blank" class="grow flex items-center justify-center w-full h-full text-primary-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flower" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path d="M16.5 12H15"></path><path d="M12 16.5V15"></path><path d="m8 8 1.88 1.88"></path><path d="M14.12 9.88 16 8"></path><path d="m8 16 1.88-1.88"></path><path d="M14.12 14.12 16 16"></path></svg></a></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.