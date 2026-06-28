# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/samhimself/stack-flow-integrator/default
- Registry URL: https://21st.dev/r/samhimself/stack-flow-integrator
- Author: samhimself
- Component slug: stack-flow-integrator
- Demo slug: default
- Title: stack-flow-integrator
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/samhimself/stack-flow-integrator with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/samhimself__stack-flow-integrator__default.html
- Local screenshot file: generated-21st-prompts/screenshots/samhimself__stack-flow-integrator__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="group relative w-full max-w-[880px] mx-auto overflow-hidden rounded-[36px] border backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(9,12,14,0.92),rgba(6,8,10,0.94))] dark:shadow-[inset_0_2px_0_rgba(255,255,255,0.07),0_50px_130px_-40px_rgba(0,0,0,0.85)] border-neutral-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(245,246,247,0.9))] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_40px_100px_-40px_rgba(0,0,0,0.1)]"><div class="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full blur-3xl dark:bg-[radial-gradient(closest-side,rgba(0,255,170,0.18),transparent_70%)] bg-[radial-gradient(closest-side,rgba(16,185,129,0.12),transparent_70%)]"></div><div class="pointer-events-none absolute -bottom-24 -right-28 h-96 w-96 rounded-full blur-3xl dark:bg-[radial-gradient(closest-side,rgba(124,58,237,0.2),transparent_70%)] bg-[radial-gradient(closest-side,rgba(139,92,246,0.12),transparent_70%)]"></div><div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"><div class="absolute h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 dark:from-emerald-500 dark:to-cyan-500 blur-[2px] opacity-60 transition-all duration-700 ease-in-out top-1/4 left-1/4 animate-float-1" style="animation: 6s ease-in-out 0.286206s infinite normal none running float;"><style>
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-30px) translateX(-10px);
            opacity: 0.9;
          }
        }
      </style></div><div class="absolute h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 dark:from-emerald-500 dark:to-cyan-500 blur-[2px] opacity-60 transition-all duration-700 ease-in-out top-1/3 right-1/3 animate-float-2" style="animation: 6s ease-in-out 1.84885s infinite normal none running float;"><style>
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-30px) translateX(-10px);
            opacity: 0.9;
          }
        }
      </style></div><div class="absolute h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 dark:from-emerald-500 dark:to-cyan-500 blur-[2px] opacity-60 transition-all duration-700 ease-in-out bottom-1/4 left-1/3 animate-float-3" style="animation: 6s ease-in-out 1.82253s infinite normal none running float;"><style>
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-30px) translateX(-10px);
            opacity: 0.9;
          }
        }
      </style></div><div class="absolute h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 dark:from-emerald-500 dark:to-cyan-500 blur-[2px] opacity-60 transition-all duration-700 ease-in-out bottom-1/3 right-1/4 animate-float-4" style="animation: 6s ease-in-out 0.335831s infinite normal none running float;"><style>
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-30px) translateX(-10px);
            opacity: 0.9;
          }
        }
      </style></div></div><div class="relative p-12 md:p-16"><h2 class="text-[32px] sm:text-5xl font-extrabold tracking-tight dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent bg-gradient-to-b from-black to-neutral-600 bg-clip-text text-transparent">Fits right into your stack</h2><p class="mt-5 max-w-2xl text-lg leading-relaxed dark:text-slate-300/80 text-neutral-600">Seamlessly connect with your existing stack + your favorite tools</p><div class="mx-auto mt-14 grid grid-cols-3 gap-8 md:gap-12 place-items-center max-w-[560px]"><div></div><div class="group relative h-28 w-28 md:h-32 md:w-32 rounded-[24px] overflow-hidden backdrop-blur-md border transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl dark:bg-[linear-gradient(180deg,rgba(18,24,27,0.92),rgba(10,14,16,0.95))] dark:border-white/10 dark:shadow-[inset_0_2px_2px_rgba(255,255,255,0.08),inset_0_-2px_1px_rgba(0,0,0,0.55),0_26px_70px_-22px_rgba(0,0,0,0.9)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,246,247,0.95))] border-neutral-200 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_20px_50px_-20px_rgba(0,0,0,0.2)]"><div class="relative z-10 flex h-full w-full items-center justify-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="h-10 w-10 text-emerald-400 dark:text-emerald-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path></svg></div></div><div></div><div class="group relative h-28 w-28 md:h-32 md:w-32 rounded-[24px] overflow-hidden backdrop-blur-md border transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl dark:bg-[linear-gradient(180deg,rgba(18,24,27,0.92),rgba(10,14,16,0.95))] dark:border-white/10 dark:shadow-[inset_0_2px_2px_rgba(255,255,255,0.08),inset_0_-2px_1px_rgba(0,0,0,0.55),0_26px_70px_-22px_rgba(0,0,0,0.9)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,246,247,0.95))] border-neutral-200 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_20px_50px_-20px_rgba(0,0,0,0.2)]"><div class="relative z-10 flex h-full w-full items-center justify-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="h-10 w-10 text-emerald-400 dark:text-emerald-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg></div></div><div></div><div class="group relative h-28 w-28 md:h-32 md:w-32 rounded-[24px] overflow-hidden backdrop-blur-md border transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl dark:bg-[linear-gradient(180deg,rgba(18,24,27,0.92),rgba(10,14,16,0.95))] dark:border-white/10 dark:shadow-[inset_0_2px_2px_rgba(255,255,255,0.08),inset_0_-2px_1px_rgba(0,0,0,0.55),0_26px_70px_-22px_rgba(0,0,0,0.9)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,246,247,0.95))] border-neutral-200 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_20px_50px_-20px_rgba(0,0,0,0.2)]"><div class="relative z-10 flex h-full w-full items-center justify-center"><div class="relative flex items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-9 w-9 text-emerald-400 dark:text-emerald-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 2 2 22"></path></svg><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-9 w-9 -ml-3 text-emerald-400/80 dark:text-emerald-300/80" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 2 2 22"></path></svg></div></div></div><div></div><div class="group relative h-28 w-28 md:h-32 md:w-32 rounded-[24px] overflow-hidden backdrop-blur-md border transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl dark:bg-[linear-gradient(180deg,rgba(18,24,27,0.92),rgba(10,14,16,0.95))] dark:border-white/10 dark:shadow-[inset_0_2px_2px_rgba(255,255,255,0.08),inset_0_-2px_1px_rgba(0,0,0,0.55),0_26px_70px_-22px_rgba(0,0,0,0.9)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,246,247,0.95))] border-neutral-200 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_20px_50px_-20px_rgba(0,0,0,0.2)]"><div class="relative z-10 flex h-full w-full items-center justify-center"><div class="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-200 dark:bg-white/10 ring-1 ring-black/10 dark:ring-white/20"><span class="text-sm font-black tracking-tight text-emerald-600 dark:text-emerald-200">TS</span></div></div></div><div></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.