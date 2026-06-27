# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jatin-yadav05/orbital-clock/default
- Registry URL: https://21st.dev/r/jatin-yadav05/orbital-clock
- Author: jatin-yadav05
- Component slug: orbital-clock
- Demo slug: default
- Title: orbital-clock
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jatin-yadav05/orbital-clock with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jatin-yadav05__orbital-clock__default.html
- Local screenshot file: generated-21st-prompts/screenshots/jatin-yadav05__orbital-clock__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="min-h-screen flex flex-col items-center justify-center gap-16 bg-background px-6 w-full"><div class="text-center space-y-2"><p class="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-mono">Local Time</p></div><div class="
        relative flex items-center justify-center cursor-pointer select-none
        text-slate-900 dark:text-slate-100
        /* Theme variables */
        [--orb-primary:rgb(59,130,246)] dark:[--orb-primary:rgb(125,211,252)]
        [--orb-marker-strong:rgba(15,23,42,0.7)] dark:[--orb-marker-strong:rgba(255,255,255,0.7)]
        [--orb-marker-weak:rgba(15,23,42,0.35)] dark:[--orb-marker-weak:rgba(255,255,255,0.25)]
        [--orb-center:rgba(15,23,42,0.9)] dark:[--orb-center:rgba(255,255,255,0.85)]
        [--orb-date:rgba(100,116,139,0.9)] dark:[--orb-date:rgba(148,163,184,0.9)]
      " style="perspective: 600px;"><div class="relative w-52 h-52 transition-transform duration-300 ease-out" style="transform: rotateX(0deg) rotateY(0deg);"><div class="absolute inset-0 rounded-full transition-all duration-500" style="background: transparent; transform: scale(1);"></div><div class="absolute inset-2 rounded-full bg-white/95 dark:bg-card border border-slate-200/70 dark:border-border/50 shadow-xl"><div class="absolute inset-3 rounded-full border transition-all duration-500 border-black/5 dark:border-white/5"></div><div class="absolute w-1.5 h-1.5 rounded-full transition-all duration-300" style="left: 50%; top: 12%; transform: translate(-50%, -50%); background: var(--orb-marker-strong); box-shadow: none;"></div><div class="absolute w-1.5 h-1.5 rounded-full transition-all duration-300" style="left: 69%; top: 17.091%; transform: translate(-50%, -50%); background: var(--orb-marker-weak); box-shadow: none;"></div><div class="absolute w-1.5 h-1.5 rounded-full transition-all duration-300" style="left: 82.909%; top: 31%; transform: translate(-50%, -50%); background: var(--orb-marker-weak); box-shadow: none;"></div><div class="absolute w-1.5 h-1.5 rounded-full transition-all duration-300" style="left: 88%; top: 50%; transform: translate(-50%, -50%); background: var(--orb-marker-strong); box-shadow: none;"></div><div class="absolute w-1.5 h-1.5 rounded-full transition-all duration-300" style="left: 82.909%; top: 69%; transform: translate(-50%, -50%); background: var(--orb-marker-weak); box-shadow: none;"></div><div class="absolute w-1.5 h-1.5 rounded-full transition-all duration-300" style="left: 69%; top: 82.909%; transform: translate(-50%, -50%); background: var(--orb-marker-weak); box-shadow: none;"></div><div class="absolute w-1.5 h-1.5 rounded-full transition-all duration-300" style="left: 50%; top: 88%; transform: translate(-50%, -50%); background: var(--orb-marker-strong); box-shadow: none;"></div><div class="absolute w-1.5 h-1.5 rounded-full transition-all duration-300" style="left: 31%; top: 82.909%; transform: translate(-50%, -50%); background: var(--orb-primary); box-shadow: 0 0 10px color-mix(in srgb, var(--orb-primary) 70%, transparent);"></div><div class="absolute w-1.5 h-1.5 rounded-full transition-all duration-300" style="left: 17.091%; top: 69%; transform: translate(-50%, -50%); background: var(--orb-marker-weak); box-shadow: none;"></div><div class="absolute w-1.5 h-1.5 rounded-full transition-all duration-300" style="left: 12%; top: 50%; transform: translate(-50%, -50%); background: var(--orb-marker-strong); box-shadow: none;"></div><div class="absolute w-1.5 h-1.5 rounded-full transition-all duration-300" style="left: 17.091%; top: 31%; transform: translate(-50%, -50%); background: var(--orb-marker-weak); box-shadow: none;"></div><div class="absolute w-1.5 h-1.5 rounded-full transition-all duration-300" style="left: 31%; top: 17.091%; transform: translate(-50%, -50%); background: var(--orb-marker-weak); box-shadow: none;"></div><div class="absolute left-1/2 bottom-1/2 w-1 origin-bottom rounded-full transition-all duration-200
             bg-slate-800 dark:bg-slate-200" style="height: 28%; transform: translateX(-50%) rotate(213.381deg);"></div><div class="absolute left-1/2 bottom-1/2 w-0.5 origin-bottom rounded-full transition-all duration-200
             bg-slate-500 dark:bg-slate-300" style="height: 36%; transform: translateX(-50%) rotate(40.5735deg);"></div><div class="absolute left-1/2 bottom-1/2 origin-bottom rounded-full" style="width: 1px; height: 40%; transform: translateX(-50%) rotate(274.41deg); background: var(--orb-primary); box-shadow: 0 0 8px color-mix(in srgb, var(--orb-primary) 70%, transparent);"></div><div class="absolute left-1/2 top-1/2 w-2.5 h-2.5 rounded-full transition-all duration-300" style="transform: translate(-50%, -50%); background: var(--orb-center); box-shadow: none;"></div></div></div><div class="absolute w-full flex items-center justify-center -bottom-8 left-1/2 font-mono text-xs tracking-[0.3em] uppercase transition-all duration-500" style="transform: translateX(-50%) translateY(-10px); opacity: 0; color: var(--orb-date);">Sat, Jun 27</div><style>
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }
      </style></div><p class="text-xs text-muted-foreground font-mono tracking-wide">[ orbital clock ]</p></main></div></div></div>
```

## Public registry source files

No public registry source files were available.