# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kokonutd/social-card/default
- Registry URL: https://21st.dev/r/kokonutd/social-card
- Author: kokonutd
- Component slug: social-card
- Demo slug: default
- Title: social-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kokonutd/social-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kokonutd__social-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kokonutd__social-card__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="space-y-8"><div><div class="w-full max-w-2xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl"><div class="divide-y divide-zinc-200 dark:divide-zinc-800"><div class="p-6"><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-3"><img alt="Dorian Baffier" class="w-10 h-10 rounded-full ring-2 ring-white dark:ring-zinc-800" src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-04-uuYHWIRvVPi01gEt6NwnGyjqLeeZhz.png"><div><h3 class="text-sm font-medium text-zinc-900 dark:text-zinc-100">Dorian Baffier</h3><p class="text-xs text-zinc-500 dark:text-zinc-400">@dorian_baffier · 2h ago</p></div></div><button type="button" class="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis w-5 h-5 text-zinc-400" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button></div><p class="text-zinc-600 dark:text-zinc-300 mb-4">Just launched Kokonut UI! Check out the documentation and let me know what you think 🎨</p><div class="mb-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden"><div class="p-4 bg-zinc-50 dark:bg-zinc-800/50"><div class="flex items-center gap-3 mb-2"><div class="p-2 bg-white dark:bg-zinc-700 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link w-5 h-5 text-blue-500" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></div><div><h4 class="text-sm font-medium text-zinc-900 dark:text-zinc-100">Kokonut UI Documentation</h4><p class="text-xs text-zinc-500 dark:text-zinc-400">A comprehensive guide to Kokonut UI</p></div></div></div></div><div class="flex items-center justify-between pt-2"><div class="flex items-center gap-6"><button type="button" class="flex items-center gap-2 text-sm transition-colors text-zinc-500 dark:text-zinc-400 hover:text-rose-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-5 h-5 transition-all" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg><span>128</span></button><button type="button" class="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-blue-500 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-5 h-5" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg><span>32</span></button><button type="button" class="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-green-500 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2 lucide-share-2 w-5 h-5" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg><span>24</span></button></div><button type="button" class="p-2 rounded-full transition-all text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark w-5 h-5 transition-transform" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg></button></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.