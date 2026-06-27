# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/isaiahbjork/crypto-swap/default
- Registry URL: https://21st.dev/r/isaiahbjork/crypto-swap
- Author: isaiahbjork
- Component slug: crypto-swap
- Demo slug: default
- Title: crypto-swap
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/isaiahbjork/crypto-swap with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/isaiahbjork__crypto-swap__default.html
- Local screenshot file: generated-21st-prompts/screenshots/isaiahbjork__crypto-swap__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_DemoOne">DemoOne</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen bg-background flex items-center justify-center p-4"><div class="relative w-full max-w-md" style="opacity: 1; transform: none;"><div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" style="opacity: 0;"></div><div class="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-6 shadow-2xl" style="opacity: 1; filter: blur(0px); transform: none;"><div class="flex items-center justify-between mb-6" style="opacity: 1; filter: blur(0px); transform: none;"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-5 h-5 text-white" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><div><h1 class="text-xl font-bold text-foreground">Swap</h1><p class="text-sm text-muted-foreground">Trade tokens instantly</p></div></div><button class="p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings w-5 h-5 text-muted-foreground" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></button></div><div class="relative mb-2" style="opacity: 1; filter: blur(0px); transform: none;"><div class="bg-muted/30 rounded-2xl p-4 border border-border/30"><div class="flex items-center justify-between mb-3"><span class="text-sm text-muted-foreground">From</span><span class="text-sm text-muted-foreground">Balance: 2.5847</span></div><div class="flex items-center gap-3"><button class="flex items-center gap-2 bg-background/50 rounded-xl px-3 py-2 hover:bg-background/80 transition-colors" tabindex="0"><span class="text-2xl">⟠</span><span class="font-semibold">ETH</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4 text-muted-foreground" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button><input placeholder="0.0" class="flex-1 bg-transparent text-right text-2xl font-semibold outline-none placeholder:text-muted-foreground" type="number" value=""></div><div class="flex justify-between items-center mt-2"><span class="text-xs text-muted-foreground">$2,340.5</span><span class="text-xs text-muted-foreground">≈ $0.00</span></div></div></div><div class="flex justify-center -my-1 relative z-10" style="opacity: 1; filter: blur(0px); transform: none;"><button class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg" tabindex="0" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-down w-5 h-5 text-white" aria-hidden="true"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg></button></div><div class="relative mb-6" style="opacity: 1; filter: blur(0px); transform: none;"><div class="bg-muted/30 rounded-2xl p-4 border border-border/30"><div class="flex items-center justify-between mb-3"><span class="text-sm text-muted-foreground">To</span><span class="text-sm text-muted-foreground">Balance: 1,250.00</span></div><div class="flex items-center gap-3"><button class="flex items-center gap-2 bg-background/50 rounded-xl px-3 py-2 hover:bg-background/80 transition-colors" tabindex="0"><span class="text-2xl">💵</span><span class="font-semibold">USDC</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4 text-muted-foreground" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button><div class="flex-1 text-right text-2xl font-semibold text-muted-foreground">0.0</div></div><div class="flex justify-between items-center mt-2"><span class="text-xs text-muted-foreground">$1</span><span class="text-xs text-muted-foreground">≈ $0.00</span></div></div></div><button class="w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 bg-muted text-muted-foreground cursor-not-allowed" disabled="" tabindex="0" style="opacity: 1; filter: blur(0px); transform: none;"><div class="flex items-center justify-center gap-2">Enter an amount</div></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.