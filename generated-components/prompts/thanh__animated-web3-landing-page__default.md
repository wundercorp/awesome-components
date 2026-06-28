# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/thanh/animated-web3-landing-page/default
- Registry URL: https://21st.dev/r/thanh/animated-web3-landing-page
- Author: thanh
- Component slug: animated-web3-landing-page
- Demo slug: default
- Title: animated-web3-landing-page
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/thanh/animated-web3-landing-page with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/thanh__animated-web3-landing-page__default.html
- Local screenshot file: generated-21st-prompts/screenshots/thanh__animated-web3-landing-page__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><style>
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes subtlePulse {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.03);
            }
          }
          
          /* We use a class to apply the animation */
          .animate-fadeInUp {
            /* Use 'forwards' to maintain the end state of the animation */
            animation: fadeInUp 0.8s ease-out forwards;
          }
        </style><section class="relative isolate h-screen overflow-hidden bg-black text-white"><div aria-hidden="true" class="absolute inset-0 -z-30" style="background-image: radial-gradient(80% 55% at 50% 52%, rgba(252, 166, 154, 0.45) 0%, rgba(214, 76, 82, 0.46) 27%, rgba(61, 36, 47, 0.38) 47%, rgba(39, 38, 67, 0.45) 60%, rgba(8, 8, 12, 0.92) 78%, rgb(0, 0, 0) 88%), radial-gradient(85% 60% at 14% 0%, rgba(255, 193, 171, 0.65) 0%, rgba(233, 109, 99, 0.58) 30%, rgba(48, 24, 28, 0) 64%), radial-gradient(70% 50% at 86% 22%, rgba(88, 112, 255, 0.4) 0%, rgba(16, 18, 28, 0) 55%), linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0) 40%); background-color: rgb(0, 0, 0);"></div><div aria-hidden="true" class="absolute inset-0 -z-20 bg-[radial-gradient(140%_120%_at_50%_0%,transparent_60%,rgba(0,0,0,0.85))]"></div><div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-30" style="background-image: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.09) 0px, rgba(255, 255, 255, 0.09) 1px, transparent 1px, transparent 96px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 24px), repeating-radial-gradient(80% 55% at 50% 52%, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 1px, transparent 1px, transparent 120px); background-blend-mode: screen;"></div><header class="relative z-10"><div class="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-8"><div class="flex items-center gap-3"><div class="h-6 w-6 rounded-full bg-white"></div><span class="text-lg font-semibold tracking-tight">MoraAI</span></div><nav class="hidden items-center gap-8 text-sm/6 text-white/80 md:flex"><a class="hover:text-white" href="#">Product</a><a class="hover:text-white" href="#">Docs</a><a class="hover:text-white" href="#">Customers</a><a class="hover:text-white" href="#">Resources</a><a class="hover:text-white" href="#">Partners</a><a class="hover:text-white" href="#">Pricing</a></nav><div class="hidden items-center gap-3 md:flex"><button class="rounded-full px-4 py-2 text-sm text-white/80 hover:text-white">Sign in</button><button class="rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:bg-white/90">Request Demo</button></div><button class="md:hidden rounded-full bg-white/10 px-3 py-2 text-sm">Menu</button></div></header><div class="relative z-10 mx-auto grid w-full max-w-5xl place-items-center px-6 py-16 md:py-24 lg:py-28"><div class="mx-auto text-center animate-fadeInUp"><span class="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70 ring-1 ring-white/10 backdrop-blur"><span class="h-1.5 w-1.5 rounded-full bg-white/70"></span> web3 toolkit</span><h1 class="mt-6 text-4xl font-bold tracking-tight md:text-6xl animate-fadeInUp" style="animation-delay: 200ms;">Create and connect your world on web3</h1><p class="mx-auto mt-5 max-w-2xl text-balance text-white/80 md:text-lg animate-fadeInUp" style="animation-delay: 300ms;">The essential toolkit for sharing and funding anything—from your latest idea to the next big DAO.</p><div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fadeInUp" style="animation-delay: 400ms;"><a href="#" class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow transition hover:bg-white/90">Try Molithra</a><a href="#" class="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:border-white/40">Read More</a></div></div></div><div class="relative z-10 mx-auto mt-10 w-full max-w-6xl px-6 pb-24"><div class="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70"><div class="text-xs uppercase tracking-wider text-white/70">git</div><div class="text-xs uppercase tracking-wider text-white/70">npm</div><div class="text-xs uppercase tracking-wider text-white/70">Lucidchart</div><div class="text-xs uppercase tracking-wider text-white/70">wrike</div><div class="text-xs uppercase tracking-wider text-white/70">jquery</div><div class="text-xs uppercase tracking-wider text-white/70">openstack</div><div class="text-xs uppercase tracking-wider text-white/70">servicenow</div><div class="text-xs uppercase tracking-wider text-white/70">Paysafe</div></div></div><div class="pointer-events-none absolute bottom-[128px] left-1/2 z-0 h-36 w-28 -translate-x-1/2 rounded-md bg-gradient-to-b from-white/75 via-rose-100/60 to-transparent" style="animation: 6s ease-in-out 0s infinite normal none running subtlePulse;"></div><div class="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[54vh]"><div class="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div><div class="absolute inset-x-0 bottom-0 flex h-full items-end gap-px px-[2px]"><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 92%; transition-delay: 480ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 84%; transition-delay: 420ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 78%; transition-delay: 360ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 70%; transition-delay: 300ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 62%; transition-delay: 240ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 54%; transition-delay: 180ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 46%; transition-delay: 120ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 34%; transition-delay: 60ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 18%; transition-delay: 0ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 34%; transition-delay: 60ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 46%; transition-delay: 120ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 54%; transition-delay: 180ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 62%; transition-delay: 240ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 70%; transition-delay: 300ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 78%; transition-delay: 360ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 84%; transition-delay: 420ms;"></div><div class="flex-1 bg-black transition-height duration-1000 ease-in-out" style="height: 92%; transition-delay: 480ms;"></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.