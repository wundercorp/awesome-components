# Build Animated Glassy Pricing in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animated Glassy Pricing screenshot](screenshot.png)

## Component

- Author group: `easemize`
- Component: `animated-glassy-pricing`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: easemize
- Component slug: animated-glassy-pricing
- Demo slug: default
- Title: animated-glassy-pricing
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_Default_Default">Default</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-background text-foreground min-h-screen w-full overflow-x-hidden"><canvas class="fixed top-0 left-0 w-full h-full block z-0 bg-background" width="992" height="944"></canvas><main class="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-8"><div class="w-full max-w-5xl mx-auto text-center mb-14"><h1 class="text-[48px] md:text-[64px] font-extralight leading-tight tracking-[-0.03em] bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-500 to-blue-600 dark:from-white dark:via-cyan-300 dark:to-blue-400 font-display">Find the <span class="text-cyan-400">Perfect Plan</span> for Your Business</h1><p class="mt-3 text-[16px] md:text-[20px] text-foreground/80 max-w-2xl mx-auto font-sans">Start for free, then grow with us. Flexible plans for projects of all sizes.</p></div><div class="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center w-full max-w-4xl"><div class="backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-xs px-7 py-8 flex flex-col transition-all duration-300
    from-black/5 to-black/0 border border-black/10
    dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]"><div class="mb-3"><h2 class="text-[48px] font-extralight tracking-[-0.03em] text-foreground font-display">Basic</h2><p class="text-[16px] text-foreground/70 mt-1 font-sans">Perfect for personal projects and hobbyists.</p></div><div class="my-6 flex items-baseline gap-2"><span class="text-[48px] font-extralight text-foreground font-display">$0</span><span class="text-[14px] text-foreground/70 font-sans">/mo</span></div><div class="card-divider w-full mb-5 h-px bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.1)_50%,transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09)_20%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.09)_80%,transparent)]"></div><ul class="flex flex-col gap-2 text-[14px] text-foreground/90 mb-6 font-sans"><li class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg> 1 User</li><li class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg> 1GB Storage</li><li class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg> Community Forum</li></ul><style>
  @keyframes js-ripple-animation {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }
  .animate-js-ripple-effect {
    animation: js-ripple-animation var(--ripple-duration) ease-out forwards;
  }
</style><button class="relative border-none overflow-hidden isolate transition-all duration-200 cursor-pointer px-4 py-2 bg-blue-600 hover:opacity-90 text-white rounded-lg  mt-auto w-full py-2.5 rounded-xl font-semibold text-[14px] transition font-sans
    bg-black/10 hover:bg-black/20 text-foreground border border-black/20 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20"><span class="relative z-[1] pointer-events-none">Get Started</span><div class="absolute inset-0 pointer-events-none z-[5]"></div></button></div><div class="backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-xs px-7 py-8 flex flex-col transition-all duration-300
    from-black/5 to-black/0 border border-black/10
    dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]
    scale-105 relative ring-2 ring-cyan-400/20 dark:from-white/20 dark:to-white/10 dark:border-cyan-400/30 shadow-2xl"><div class="absolute -top-4 right-4 px-3 py-1 text-[12px] font-semibold rounded-full bg-cyan-400 text-foreground dark:text-black">Most Popular</div><div class="mb-3"><h2 class="text-[48px] font-extralight tracking-[-0.03em] text-foreground font-display">Team</h2><p class="text-[16px] text-foreground/70 mt-1 font-sans">Collaborate with your team on multiple projects.</p></div><div class="my-6 flex items-baseline gap-2"><span class="text-[48px] font-extralight text-foreground font-display">$49</span><span class="text-[14px] text-foreground/70 font-sans">/mo</span></div><div class="card-divider w-full mb-5 h-px bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.1)_50%,transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09)_20%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.09)_80%,transparent)]"></div><ul class="flex flex-col gap-2 text-[14px] text-foreground/90 mb-6 font-sans"><li class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg> 10 Users</li><li class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg> 100GB Storage</li><li class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg> Email Support</li><li class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg> Shared Workspaces</li></ul><style>
  @keyframes js-ripple-animation {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }
  .animate-js-ripple-effect {
    animation: js-ripple-animation var(--ripple-duration) ease-out forwards;
  }
</style><button class="relative border-none overflow-hidden isolate transition-all duration-200 cursor-pointer px-4 py-2 bg-blue-600 hover:opacity-90 text-white rounded-lg  mt-auto w-full py-2.5 rounded-xl font-semibold text-[14px] transition font-sans
    bg-cyan-400 hover:bg-cyan-300 text-foreground"><span class="relative z-[1] pointer-events-none">Choose Team Plan</span><div class="absolute inset-0 pointer-events-none z-[5]"></div></button></div><div class="backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-xs px-7 py-8 flex flex-col transition-all duration-300
    from-black/5 to-black/0 border border-black/10
    dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]"><div class="mb-3"><h2 class="text-[48px] font-extralight tracking-[-0.03em] text-foreground font-display">Agency</h2><p class="text-[16px] text-foreground/70 mt-1 font-sans">Manage all your clients under one roof.</p></div><div class="my-6 flex items-baseline gap-2"><span class="text-[48px] font-extralight text-foreground font-display">$149</span><span class="text-[14px] text-foreground/70 font-sans">/mo</span></div><div class="card-divider w-full mb-5 h-px bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.1)_50%,transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09)_20%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.09)_80%,transparent)]"></div><ul class="flex flex-col gap-2 text-[14px] text-foreground/90 mb-6 font-sans"><li class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited Users</li><li class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg> 1TB Storage</li><li class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated Support</li><li class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg> Client Invoicing</li></ul><style>
  @keyframes js-ripple-animation {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }
  .animate-js-ripple-effect {
    animation: js-ripple-animation var(--ripple-duration) ease-out forwards;
  }
</style><button class="relative border-none overflow-hidden isolate transition-all duration-200 cursor-pointer px-4 py-2 bg-blue-600 hover:opacity-90 text-white rounded-lg  mt-auto w-full py-2.5 rounded-xl font-semibold text-[14px] transition font-sans
    bg-cyan-400 hover:bg-cyan-300 text-foreground"><span class="relative z-[1] pointer-events-none">Contact Us</span><div class="absolute inset-0 pointer-events-none z-[5]"></div></button></div></div></main></div></div></div>
```

## Reference source files

No reference source files were available.
