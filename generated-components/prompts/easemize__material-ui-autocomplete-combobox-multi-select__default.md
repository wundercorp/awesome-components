# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/easemize/material-ui-autocomplete-combobox-multi-select/default
- Registry URL: https://21st.dev/r/easemize/material-ui-autocomplete-combobox-multi-select
- Author: easemize
- Component slug: material-ui-autocomplete-combobox-multi-select
- Demo slug: default
- Title: material-ui-autocomplete-combobox-multi-select
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/easemize/material-ui-autocomplete-combobox-multi-select with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/easemize__material-ui-autocomplete-combobox-multi-select__default.html
- Local screenshot file: generated-21st-prompts/screenshots/easemize__material-ui-autocomplete-combobox-multi-select__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center min-h-screen w-full bg-background/50 p-4 md:p-8 relative overflow-hidden font-sans"><div class="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20"><div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[10px]"></div><div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[10px]"></div></div><div class="w-full max-w-[400px] relative z-10 flex flex-col"><div class="mb-6 space-y-1 text-center md:text-left"><h2 class="text-2xl font-semibold tracking-tight text-foreground">Tech Stack Locator</h2><p class="text-sm text-muted-foreground">Autocomplete Mode: Search or register custom tech.</p></div><div class="relative w-full transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] h-11"><style>
    @keyframes m3-auto-item-cinematic { 
      0% { opacity: 0; transform: translateY(8px) scale(0.98); filter: blur(4px); } 
      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } 
    }
    
    @keyframes m3-chip-enter { 
      0% { opacity: 0; transform: scale(0.8) translate3d(8px, 0, 0); } 
      100% { opacity: 1; transform: scale(1) translate3d(0, 0, 0); } 
    }

    .m3-chip-animate {
      animation: m3-chip-enter 200ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
    
    .m3-auto-container[data-state="open"] .m3-auto-item { 
      opacity: 0; 
      animation: m3-auto-item-cinematic 350ms cubic-bezier(0.1, 0.8, 0.2, 1) forwards; 
    }

    .m3-auto-container[data-state="open"] .m3-auto-item:nth-child(1) { animation-delay: 50ms; }
    .m3-auto-container[data-state="open"] .m3-auto-item:nth-child(2) { animation-delay: 100ms; }
    .m3-auto-container[data-state="open"] .m3-auto-item:nth-child(3) { animation-delay: 150ms; }
    .m3-auto-container[data-state="open"] .m3-auto-item:nth-child(4) { animation-delay: 200ms; }
    .m3-auto-container[data-state="open"] .m3-auto-item:nth-child(n+5) { animation-delay: 250ms; }

    .m3-hide-scroll {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .m3-hide-scroll::-webkit-scrollbar {
      display: none;
    }
  </style><div data-state="closed" class="m3-auto-container absolute inset-x-0 flex bg-card overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] top-0 flex-col z-10 rounded-xl border border-input/60 shadow-sm hover:border-input h-full"><div class="relative flex items-center w-full h-11 flex-shrink-0 pl-4 pr-1.5 z-30"><input role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls="«r0»-listbox" placeholder="Search frameworks..." autocomplete="off" class="flex-1 h-full bg-transparent outline-none text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" value=""><button type="button" tabindex="-1" class="p-1.5 rounded-full z-20 hover:bg-muted/50 transition-all relative overflow-hidden h-8 w-8 flex items-center justify-center flex-shrink-0" aria-label="Toggle options"><div class="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none z-0"><div class="absolute inset-0 bg-current opacity-0 transition-opacity duration-200 group-hover/m3item:opacity-[0.08] group-data-[active=true]:opacity-[0.08]"></div><div class="absolute rounded-full opacity-0 bg-current" style="background: radial-gradient(closest-side, currentcolor max(100% - 70px, 65%), transparent 100%); transition: opacity 375ms linear; opacity: 0;"></div></div><span class="relative z-10 flex items-center justify-center pointer-events-none"><svg viewBox="0 0 24 24" class="w-5 h-5 text-muted-foreground transition-colors group-hover:text-foreground pointer-events-none"><path d="M 6 9 L 12 15 M 18 9 L 12 15" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" style="transition: d 0.4s cubic-bezier(0.4, 0, 0.2, 1);"></path></svg></span></button></div><div class="grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] relative z-10 grid-rows-[0fr] opacity-0"><div class="overflow-hidden"></div></div></div></div><div class="h-8 mt-4 relative w-full flex justify-center"><div class="absolute top-0 text-center text-xs text-muted-foreground transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] opacity-0 -translate-y-2 pointer-events-none">Selected value: <span class="font-medium text-foreground">none</span></div></div></div><a href="https://img2m3.vercel.app/" target="_blank" rel="noopener noreferrer" class="fixed bottom-4 right-4 z-50 group flex flex-col bg-card/80 backdrop-blur-md border border-border shadow-sm hover:shadow-2xl rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] w-[160px] hover:w-[280px]"><div class="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"><div class="overflow-hidden"><div class="p-2 pb-0 flex flex-col gap-3 min-w-[280px]"><img alt="IMG2M3 Theme Generator" class="aspect-video object-cover rounded-lg border border-border/40 shadow-sm" src="https://i.ibb.co.com/S4WwFmTK/IMG2M3.png"><p class="text-xs text-muted-foreground leading-relaxed pr-2">Create full Customized shadcn theme's instantly.</p></div></div></div><div class="p-2 flex items-center justify-between"><div class="flex items-center gap-2 text-sm font-medium text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles w-4 h-4 text-primary" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg><span class="whitespace-nowrap">Get extra bonus</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4 text-muted-foreground opacity-0 -translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-100 group-hover:translate-x-0 flex-shrink-0" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div></a></div></div></div></div>
```

## Public registry source files

No public registry source files were available.