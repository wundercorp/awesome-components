# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/osiris-balonga/member-selector/default
- Registry URL: https://21st.dev/r/osiris-balonga/member-selector
- Author: osiris-balonga
- Component slug: member-selector
- Demo slug: default
- Title: member-selector
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/osiris-balonga/member-selector with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/osiris-balonga__member-selector__default.html
- Local screenshot file: generated-21st-prompts/screenshots/osiris-balonga__member-selector__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative"><div class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Participants</div><div class="flex items-start gap-4 flex-wrap"><button class="group relative flex flex-col items-center gap-1.5 outline-none cursor-pointer" tabindex="0" style="opacity: 1;"><div class="relative w-12 h-12 rounded-full overflow-hidden transition-all duration-200 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2"><img alt="Yuki Tanaka" class="w-full h-full object-cover transition-all duration-200" src="https://api.dicebear.com/9.x/micah/svg?seed=Yuki%20Tanaka&amp;backgroundColor=b6e3f4,c0aede,d1d4f9"></div><span class="text-xs font-medium truncate max-w-[60px] transition-colors duration-200 text-foreground" style="opacity: 1;">Yuki</span></button><button class="group relative flex flex-col items-center gap-1.5 outline-none cursor-pointer" tabindex="0" style="opacity: 1;"><div class="relative w-12 h-12 rounded-full overflow-hidden transition-all duration-200 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2"><img alt="Matt Cooper" class="w-full h-full object-cover transition-all duration-200" src="https://api.dicebear.com/9.x/micah/svg?seed=Matt%20Cooper&amp;backgroundColor=b6e3f4,c0aede,d1d4f9"></div><span class="text-xs font-medium truncate max-w-[60px] transition-colors duration-200 text-foreground" style="opacity: 1;">Matt</span></button><button class="group relative flex flex-col items-center gap-1.5 outline-none cursor-pointer" tabindex="0" style="opacity: 1;"><div class="relative w-12 h-12 rounded-full overflow-hidden transition-all duration-200 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 opacity-50 hover:opacity-75"><img alt="Sofia Martinez" class="w-full h-full object-cover transition-all duration-200 grayscale" src="https://api.dicebear.com/9.x/micah/svg?seed=Sofia%20Martinez&amp;backgroundColor=b6e3f4,c0aede,d1d4f9"></div><div class="absolute bottom-5 right-0 w-4 h-4 rounded-full bg-foreground dark:bg-white flex items-center justify-center shadow-sm" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-2.5 h-2.5 text-background dark:text-black" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div><span class="text-xs font-medium truncate max-w-[60px] transition-colors duration-200 text-muted-foreground" style="opacity: 1;">Sofia</span></button><button class="group relative flex flex-col items-center gap-1.5 outline-none cursor-pointer" tabindex="0" style="opacity: 1;"><div class="relative w-12 h-12 rounded-full overflow-hidden transition-all duration-200 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 opacity-50 hover:opacity-75"><img alt="Richard Weber" class="w-full h-full object-cover transition-all duration-200 grayscale" src="https://api.dicebear.com/9.x/micah/svg?seed=Richard%20Weber&amp;backgroundColor=b6e3f4,c0aede,d1d4f9"></div><div class="absolute bottom-5 right-0 w-4 h-4 rounded-full bg-foreground dark:bg-white flex items-center justify-center shadow-sm" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-2.5 h-2.5 text-background dark:text-black" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div><span class="text-xs font-medium truncate max-w-[60px] transition-colors duration-200 text-muted-foreground" style="opacity: 1;">Richard</span></button><button class="group relative flex flex-col items-center gap-1.5 outline-none cursor-pointer" tabindex="0" style="opacity: 1;"><div class="relative w-12 h-12 rounded-full overflow-hidden transition-all duration-200 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 opacity-50 hover:opacity-75"><img alt="Emma O'Brien" class="w-full h-full object-cover transition-all duration-200 grayscale" src="https://api.dicebear.com/9.x/micah/svg?seed=Emma%20O'Brien&amp;backgroundColor=b6e3f4,c0aede,d1d4f9"></div><div class="absolute bottom-5 right-0 w-4 h-4 rounded-full bg-foreground dark:bg-white flex items-center justify-center shadow-sm" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-2.5 h-2.5 text-background dark:text-black" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div><span class="text-xs font-medium truncate max-w-[60px] transition-colors duration-200 text-muted-foreground" style="opacity: 1;">Emma</span></button><div class="relative"><button class="group flex flex-col items-center gap-1.5 outline-none cursor-pointer" tabindex="0"><div class="w-12 h-12 rounded-full border-2 border-dashed flex items-center justify-center transition-all duration-200 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 border-muted-foreground/40 hover:border-muted-foreground/60 hover:bg-muted/50"><div style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-5 h-5 transition-colors duration-200 text-muted-foreground" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div></div><span class="text-xs font-medium transition-colors duration-200 text-muted-foreground">Add</span></button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.