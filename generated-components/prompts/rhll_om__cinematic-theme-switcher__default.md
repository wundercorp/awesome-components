# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/rhll_om/cinematic-theme-switcher/default
- Registry URL: https://21st.dev/r/rhll_om/cinematic-theme-switcher
- Author: rhll_om
- Component slug: cinematic-theme-switcher
- Demo slug: default
- Title: cinematic-theme-switcher
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/rhll_om/cinematic-theme-switcher with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/rhll_om__cinematic-theme-switcher__default.html
- Local screenshot file: generated-21st-prompts/screenshots/rhll_om__cinematic-theme-switcher__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen w-full bg-white dark:bg-[#1d1e1f] transition-colors duration-700 ease-in-out"><div class="flex min-h-screen items-center justify-center transition-colors duration-700 ease-in-out"><div class="relative inline-block"><svg class="absolute w-0 h-0"><defs><filter id="grain-light"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"></feTurbulence><feColorMatrix in="noise" type="saturate" values="0" result="desaturatedNoise"></feColorMatrix><feComponentTransfer in="desaturatedNoise" result="lightGrain"><feFuncA type="linear" slope="0.3"></feFuncA></feComponentTransfer><feBlend in="SourceGraphic" in2="lightGrain" mode="overlay"></feBlend></filter><filter id="grain-dark"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"></feTurbulence><feColorMatrix in="noise" type="saturate" values="0" result="desaturatedNoise"></feColorMatrix><feComponentTransfer in="desaturatedNoise" result="darkGrain"><feFuncA type="linear" slope="0.5"></feFuncA></feComponentTransfer><feBlend in="SourceGraphic" in2="darkGrain" mode="overlay"></feBlend></filter></defs></svg><button class="relative flex h-[64px] w-[104px] items-center rounded-full p-[6px] transition-all duration-300 focus:outline-none" aria-label="Switch to dark mode" role="switch" aria-checked="false" tabindex="0" style="background: radial-gradient(at left top, rgb(255, 255, 255) 0%, rgb(241, 245, 249) 40%, rgb(203, 213, 225) 100%); box-shadow: rgba(148, 163, 184, 0.5) 5px 5px 12px inset, rgb(255, 255, 255) -5px -5px 12px inset, rgba(100, 116, 139, 0.3) 8px 8px 16px inset, rgba(255, 255, 255, 0.9) -8px -8px 16px inset, rgba(148, 163, 184, 0.4) 0px 2px 4px inset, rgb(255, 255, 255) 0px -2px 4px inset, rgba(203, 213, 225, 0.3) 0px 0px 20px inset, rgb(255, 255, 255) 0px 1px 2px, rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.08) 0px 8px 16px, rgba(0, 0, 0, 0.06) 0px 16px 32px, rgba(0, 0, 0, 0.04) 0px 24px 48px; border: 2px solid rgba(203, 213, 225, 0.6); position: relative;"><div class="absolute inset-[3px] rounded-full pointer-events-none" style="box-shadow: rgba(100, 116, 139, 0.4) 0px 2px 6px inset, rgba(255, 255, 255, 0.8) 0px -1px 3px inset;"></div><div class="absolute inset-0 rounded-full pointer-events-none" style="background: radial-gradient(at center top, rgba(255, 255, 255, 0.8) 0%, transparent 50%), linear-gradient(rgba(255, 255, 255, 0.7) 0%, transparent 30%, transparent 70%, rgba(148, 163, 184, 0.15) 100%); mix-blend-mode: overlay;"></div><div class="absolute inset-0 rounded-full pointer-events-none" style="box-shadow: rgba(148, 163, 184, 0.2) 0px 0px 15px inset;"></div><div class="absolute inset-0 flex items-center justify-between px-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun text-amber-600" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon text-slate-700" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></div><div class="relative z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full overflow-hidden" style="background: linear-gradient(145deg, rgb(255, 255, 255) 0%, rgb(254, 254, 254) 50%, rgb(248, 250, 252) 100%); box-shadow: rgba(203, 213, 225, 0.3) 2px 2px 4px inset, rgb(255, 255, 255) -2px -2px 4px inset, rgb(255, 255, 255) 0px 1px 2px inset, rgb(255, 255, 255) 0px 1px 2px, rgba(0, 0, 0, 0.18) 0px 8px 32px, rgba(0, 0, 0, 0.12) 0px 4px 12px, rgba(0, 0, 0, 0.08) 0px 2px 4px; border: 2px solid rgba(255, 255, 255, 0.9); transform: none;"><div class="absolute inset-0 rounded-full pointer-events-none" style="background: linear-gradient(rgba(255, 255, 255, 0.4) 0%, transparent 40%, rgba(0, 0, 0, 0.1) 100%); mix-blend-mode: overlay;"></div><div class="relative z-10"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun text-amber-500" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></div></div></button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.