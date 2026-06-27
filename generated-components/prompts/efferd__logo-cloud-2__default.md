# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/efferd/logo-cloud-2/default
- Registry URL: https://21st.dev/r/efferd/logo-cloud-2
- Author: efferd
- Component slug: logo-cloud-2
- Demo slug: default
- Title: logo-cloud-2
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/efferd/logo-cloud-2 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/efferd__logo-cloud-2__default.html
- Local screenshot file: generated-21st-prompts/screenshots/efferd__logo-cloud-2__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen w-full place-content-center px-4"><section class="relative mx-auto grid max-w-3xl"><h2 class="mb-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">Companies we <span class="font-semibold text-primary">collaborate</span> with.</h2><div class="relative grid grid-cols-2 border-x md:grid-cols-4"><div class="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t"></div><div class="flex items-center justify-center px-4 py-8 md:p-8 relative border-r border-b bg-secondary dark:bg-secondary/30"><img alt="Nvidia Logo" class="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert" height="auto" width="auto" src="https://svgl.app/library/nvidia-wordmark-light.svg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus -right-[12.5px] -bottom-[12.5px] absolute z-10 size-6" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div><div class="flex items-center justify-center bg-background px-4 py-8 md:p-8 border-b md:border-r"><img alt="Supabase Logo" class="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert" height="auto" width="auto" src="https://svgl.app/library/supabase_wordmark_light.svg"></div><div class="flex items-center justify-center bg-background px-4 py-8 md:p-8 relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"><img alt="GitHub Logo" class="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert" height="auto" width="auto" src="https://svgl.app/library/github_wordmark_light.svg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus -right-[12.5px] -bottom-[12.5px] absolute z-10 size-6" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus -bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div><div class="flex items-center justify-center px-4 py-8 md:p-8 relative border-b bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"><img alt="OpenAI Logo" class="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert" height="auto" width="auto" src="https://svgl.app/library/openai_wordmark_light.svg"></div><div class="flex items-center justify-center px-4 py-8 md:p-8 relative border-r border-b bg-secondary md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background"><img alt="Turso Logo" class="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert" height="auto" width="auto" src="https://svgl.app/library/turso-wordmark-light.svg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus -right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div><div class="flex items-center justify-center px-4 py-8 md:p-8 border-b bg-background md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30"><img alt="Clerk Logo" class="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert" height="auto" width="auto" src="https://svgl.app/library/clerk-wordmark-light.svg"></div><div class="flex items-center justify-center bg-background px-4 py-8 md:p-8 border-r"><img alt="Claude AI Logo" class="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert" height="auto" width="auto" src="https://svgl.app/library/claude-ai-wordmark-icon_light.svg"></div><div class="flex items-center justify-center px-4 py-8 md:p-8 bg-secondary dark:bg-secondary/30"><img alt="Vercel Logo" class="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert" height="auto" width="auto" src="https://svgl.app/library/vercel_wordmark.svg"></div><div class="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b"></div></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.