# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/arunjdass/ai-planning/default
- Registry URL: https://21st.dev/r/arunjdass/ai-planning
- Author: arunjdass
- Component slug: ai-planning
- Demo slug: default
- Title: ai-planning
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/arunjdass/ai-planning with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/arunjdass__ai-planning__default.html
- Local screenshot file: generated-21st-prompts/screenshots/arunjdass__ai-planning__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-2xl mx-auto my-4 font-sans text-foreground"><div class="bg-card border border-border shadow-sm rounded-xl overflow-hidden transition-all duration-300"><div class="flex items-center justify-between px-4 py-3.5 cursor-pointer transition-colors select-none
            bg-secondary/30 border-b border-border/50
          "><div class="flex items-center gap-3"><div class="flex items-center justify-center w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle w-4 h-4 text-blue-600 dark:text-blue-400 animate-spin" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg></div><span class="text-[15px] font-semibold text-foreground/90 tracking-tight">Agent is planning</span></div><div class="flex items-center justify-center w-6 h-6 rounded-md hover:bg-secondary text-muted-foreground transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></div><div class="grid transition-all duration-500 ease-in-out bg-card grid-rows-[1fr] opacity-100"><div class="overflow-hidden"><div class="p-5 flex flex-col"><div class="relative flex gap-4 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both
                    opacity-100
                  " style="animation-delay: 0ms;"><div class="absolute left-[11px] top-7 bottom-[-10px] w-[2px] bg-border/60 z-0"></div><div class="relative z-10 flex-none w-6 h-6 mt-0.5"><div class="flex items-center justify-center w-full h-full rounded-full ring-4 ring-card transition-colors duration-300
                      bg-emerald-100 text-emerald-600 ring-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400
                    "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-3.5 h-3.5" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><div class="flex-1 pb-6"><div class="flex items-center justify-between group rounded-md -mx-2 px-2 py-1 transition-colors
                        cursor-pointer hover:bg-secondary/50
                      "><span class="text-[14px] tracking-tight transition-colors duration-200
                        text-foreground/80 group-hover:text-foreground font-medium
                      ">Analyze request and extract constraints</span><div class="flex items-center gap-3"><span class="text-[11px] font-mono text-muted-foreground tabular-nums">0.4s</span><div class="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></div></div></div><div class="grid transition-all duration-400 ease-in-out grid-rows-[0fr] mt-0 opacity-0"><div class="overflow-hidden"><div class="pt-1 pb-2"><div class="space-y-2 font-mono text-[11px] text-muted-foreground mt-2"><div class="flex items-start gap-2 text-emerald-600 dark:text-emerald-400 font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><span>Parsed user intent: Build minimalist UI Component</span></div><div class="grid grid-cols-[80px_1fr] gap-1.5 mt-3 bg-secondary/30 p-2.5 rounded-md border border-border/50"><span class="text-foreground/50 font-medium">Language:</span><span class="text-foreground">TypeScript, React</span><span class="text-foreground/50 font-medium">Styling:</span><span class="text-foreground">Tailwind CSS v4 (OKLCH variables)</span><span class="text-foreground/50 font-medium">Constraints:</span><span class="text-amber-600 dark:text-amber-400">Single-file, Interactive, No Overlaps</span></div></div></div></div></div></div></div><div class="relative flex gap-4 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both
                    opacity-100
                  " style="animation-delay: 80ms;"><div class="absolute left-[11px] top-7 bottom-[-10px] w-[2px] bg-border/60 z-0"></div><div class="relative z-10 flex-none w-6 h-6 mt-0.5"><div class="flex items-center justify-center w-full h-full rounded-full ring-4 ring-card transition-colors duration-300
                      bg-emerald-100 text-emerald-600 ring-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400
                    "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-3.5 h-3.5" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><div class="flex-1 pb-6"><div class="flex items-center justify-between group rounded-md -mx-2 px-2 py-1 transition-colors
                        cursor-pointer hover:bg-secondary/50
                      "><span class="text-[14px] tracking-tight transition-colors duration-200
                        text-foreground/80 group-hover:text-foreground font-medium
                      ">Search UI knowledge base</span><div class="flex items-center gap-3"><span class="text-[11px] font-mono text-muted-foreground tabular-nums">1.2s</span><div class="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></div></div></div><div class="grid transition-all duration-400 ease-in-out grid-rows-[0fr] mt-0 opacity-0"><div class="overflow-hidden"><div class="pt-1 pb-2"><div class="space-y-3 font-mono text-[11px] mt-2"><div class="flex items-center gap-2"><span class="text-muted-foreground">Executing tool:</span><span class="px-1.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-semibold flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-terminal w-3 h-3" aria-hidden="true"><path d="m7 11 2-2-2-2"></path><path d="M11 13h4"></path><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect></svg>vector_search</span></div><div class="p-3 rounded-md bg-card border border-border shadow-sm text-muted-foreground"><div class="text-emerald-600 dark:text-emerald-400 mb-2 font-semibold">Success: Retrieved 3 semantic patterns</div><ul class="space-y-1.5 list-disc list-inside"><li>Claude 3.5 Sonnet thinking block layout</li><li>Tailwind v4 flex-timeline micro-interactions</li><li>React state-driven accordions with smooth max-height</li></ul></div></div></div></div></div></div></div><div class="relative flex gap-4 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both
                    opacity-100
                  " style="animation-delay: 160ms;"><div class="absolute left-[11px] top-7 bottom-[-10px] w-[2px] bg-border/60 z-0"></div><div class="relative z-10 flex-none w-6 h-6 mt-0.5"><div class="flex items-center justify-center w-full h-full rounded-full ring-4 ring-card transition-colors duration-300
                      bg-blue-100 text-blue-600 ring-blue-500/30 dark:bg-blue-500/20 dark:text-blue-400
                    "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle w-3.5 h-3.5 animate-spin" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg></div></div><div class="flex-1 pb-6"><div class="flex items-center justify-between group rounded-md -mx-2 px-2 py-1 transition-colors
                        cursor-pointer hover:bg-secondary/50
                      "><span class="text-[14px] tracking-tight transition-colors duration-200
                        text-foreground font-semibold
                      ">Synthesize component logic</span><div class="flex items-center gap-3"><span class="text-[11px] font-mono text-muted-foreground tabular-nums">...</span><div class="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></div></div><div class="grid transition-all duration-400 ease-in-out grid-rows-[1fr] mt-2 opacity-100"><div class="overflow-hidden"><div class="pt-1 pb-2"><div class="space-y-3 font-mono text-[11px] mt-2"><div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle w-3.5 h-3.5 animate-spin" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg><span>Generating structured timeline layout...</span></div><div class="relative rounded-md overflow-hidden bg-zinc-950 dark:bg-black/60 border border-border/50 p-3.5 shadow-inner"><div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50"></div><div class="text-zinc-400 space-y-1.5 leading-relaxed"><div><span class="text-purple-400">const</span> <span class="text-blue-300">timelineLayout</span> = <span class="text-yellow-300">useMemo</span>(...)</div><div class="pl-4">- Fixing absolute positioning overlaps</div><div class="pl-4">- Applying distinct icon columns</div><div class="pl-4 text-zinc-300 font-medium animate-pulse flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-3 h-3 text-blue-400" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>Injecting rich content panels |</div></div></div></div></div></div></div></div></div><div class="relative flex gap-4 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both
                    opacity-100
                  " style="animation-delay: 240ms;"><div class="absolute left-[11px] top-7 bottom-[-10px] w-[2px] bg-border/60 z-0"></div><div class="relative z-10 flex-none w-6 h-6 mt-0.5"><div class="flex items-center justify-center w-full h-full rounded-full ring-4 ring-card transition-colors duration-300
                      bg-rose-100 text-rose-600 ring-rose-500/20 dark:bg-rose-500/20 dark:text-rose-400
                    "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert w-3.5 h-3.5" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></div></div><div class="flex-1 pb-6"><div class="flex items-center justify-between group rounded-md -mx-2 px-2 py-1 transition-colors
                        cursor-pointer hover:bg-secondary/50
                      "><span class="text-[14px] tracking-tight transition-colors duration-200
                        text-rose-600 dark:text-rose-400 font-semibold
                      ">Review dependency conflicts</span><div class="flex items-center gap-3"><span class="text-[11px] font-mono text-muted-foreground tabular-nums">0.8s</span><div class="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></div></div></div><div class="grid transition-all duration-400 ease-in-out grid-rows-[0fr] mt-0 opacity-0"><div class="overflow-hidden"><div class="pt-1 pb-2"><div class="space-y-2 font-mono text-[11px] mt-2 animate-in fade-in zoom-in-95 duration-300"><div class="p-3 rounded-md bg-rose-500/10 border border-rose-500/20"><div class="text-rose-600 dark:text-rose-400 font-bold mb-1 flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert w-3.5 h-3.5" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>Warning: Component styling deviation</div><div class="text-rose-600/80 dark:text-rose-400/80 leading-relaxed">Previous absolute positioning caused icon overlaps. Sub-agent is resolving layout tree to a strict flex-row grid before continuing execution.</div></div></div></div></div></div></div></div><div class="relative flex gap-4 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both
                    opacity-60 grayscale
                  " style="animation-delay: 320ms;"><div class="relative z-10 flex-none w-6 h-6 mt-0.5"><div class="flex items-center justify-center w-full h-full rounded-full ring-4 ring-card transition-colors duration-300
                      bg-secondary text-muted-foreground ring-border/50 dark:bg-secondary/50
                    "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code w-3.5 h-3.5" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div></div><div class="flex-1 pb-6"><div class="flex items-center justify-between group rounded-md -mx-2 px-2 py-1 transition-colors
                        
                      "><span class="text-[14px] tracking-tight transition-colors duration-200
                        text-foreground/80 group-hover:text-foreground font-medium
                      ">Execute final rendering</span><div class="flex items-center gap-3"></div></div></div></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.