# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shadway/sleek-hero-with-orb/default
- Registry URL: https://21st.dev/r/shadway/sleek-hero-with-orb
- Author: shadway
- Component slug: sleek-hero-with-orb
- Demo slug: default
- Title: sleek-hero-with-orb
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shadway/sleek-hero-with-orb with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shadway__sleek-hero-with-orb__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shadway__sleek-hero-with-orb__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full min-h-screen relative bg-background dark:bg-background overflow-x-hidden flex flex-col justify-start items-center"><nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 bg-background/60 dark:bg-background/60 backdrop-blur-sm rounded-full px-6 py-3" style="opacity: 1; transform: none;"><div class="flex justify-between items-center max-w-4xl"><div class="flex justify-center items-center"><div class="flex justify-start items-center"><div class="flex flex-col justify-center text-foreground text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-sans">sickui</div></div><div class="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4"><div class="flex justify-start items-center"><button class="flex flex-col justify-center text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-colors">Products</button></div><div class="flex justify-start items-center"><button class="flex flex-col justify-center text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-colors">Pricing</button></div><div class="flex justify-start items-center"><button class="flex flex-col justify-center text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-colors">Docs</button></div></div></div><div class="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3"><button class="sm:hidden px-2 py-1 text-foreground" aria-label="Toggle menu"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></button></div></div></nav><div class="relative flex flex-col justify-start items-center w-full"><div class="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1070px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen"><div class="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-border shadow-[1px_0px_0px_hsl(var(--background))] z-0"></div><div class="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-border shadow-[1px_0px_0px_hsl(var(--background))] z-0"></div><div class="self-stretch pt-[9px] overflow-hidden border-b border-border flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10"><div class="pt-32 sm:pt-36 md:pt-40 lg:pt-[200px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0" style="opacity: 1;"><div class="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6"><div class="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8"><div class="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-foreground text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0" style="opacity: 1; transform: none;">Effortless custom contract<br>billing by sickui</div><div class="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-muted-foreground sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm" style="opacity: 1; transform: none;">Streamline your billing process with seamless automation<br class="hidden sm:block">for every custom contract, tailored by sickui.</div></div></div><div class="w-full max-w-[540px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12" style="opacity: 1; transform: none;"><button class="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 sm:py-[6px] relative bg-primary shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center hover:bg-primary/90 transition-colors group" tabindex="0"><div class="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div><div class="flex flex-col justify-center text-primary-foreground text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans group-hover:text-primary-foreground/90 transition-colors">Start for free</div></button><div class="w-full"><div class="relative mx-auto w-full max-w-[620px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[520px]"><div class="absolute justify-center inset-0 rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden" aria-hidden="true" style="mask-image: radial-gradient(100% 140% at 50% 0%, black 70%, transparent 100%); filter: drop-shadow(rgba(0, 0, 0, 0.35) 0px 30px 80px);"><canvas data-engine="three.js r180" width="540" height="440" style="display: block;"></canvas></div></div></div></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.