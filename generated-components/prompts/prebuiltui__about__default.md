# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/prebuiltui/about/default
- Registry URL: https://21st.dev/r/prebuiltui/about
- Author: prebuiltui
- Component slug: about
- Demo slug: default
- Title: about
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/prebuiltui/about with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/prebuiltui__about__default.html
- Local screenshot file: generated-21st-prompts/screenshots/prebuiltui__about__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="relative mx-auto max-w-6xl px-4 py-16"><div class="pointer-events-none absolute -top-64 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#FBFFE1] blur-[300px] -z-10" aria-hidden="true"></div><style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      </style><header class="mx-auto max-w-2xl text-center"><h1 class="text-3xl md:text-4xl font-semibold">About our apps</h1><p class="mt-2 text-sm md:text-base text-slate-500">A visual collection of our most recent works — each piece crafted with intention, emotion and style.</p></header><div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"><div class="group flex items-start gap-4 rounded-xl border border-slate-200/60 bg-white/50 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md"><div class="size-10 shrink-0 rounded bg-indigo-50 border border-indigo-200 p-2"><img alt="" class="h-full w-full object-contain" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"></div><div><h3 class="text-base font-medium text-slate-700">Lightning-Fast Performance</h3><p class="mt-1 text-sm leading-relaxed text-slate-500">Built with speed — minimal load times and optimized.</p></div></div><div class="group flex items-start gap-4 rounded-xl border border-slate-200/60 bg-white/50 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md"><div class="size-10 shrink-0 rounded bg-indigo-50 border border-indigo-200 p-2"><img alt="" class="h-full w-full object-contain" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"></div><div><h3 class="text-base font-medium text-slate-700">Beautifully Designed Components</h3><p class="mt-1 text-sm leading-relaxed text-slate-500">Modern, pixel-perfect UI components ready for any project.</p></div></div><div class="group flex items-start gap-4 rounded-xl border border-slate-200/60 bg-white/50 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md"><div class="size-10 shrink-0 rounded bg-indigo-50 border border-indigo-200 p-2"><img alt="" class="h-full w-full object-contain" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"></div><div><h3 class="text-base font-medium text-slate-700">Plug-and-Play Integration</h3><p class="mt-1 text-sm leading-relaxed text-slate-500">Simple setup with support for React, Next.js and Tailwind CSS.</p></div></div><div class="group flex items-start gap-4 rounded-xl border border-slate-200/60 bg-white/50 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md"><div class="size-10 shrink-0 rounded bg-indigo-50 border border-indigo-200 p-2"><img alt="" class="h-full w-full object-contain" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/bookEmoji.png"></div><div><h3 class="text-base font-medium text-slate-700">Clear &amp; Comprehensive</h3><p class="mt-1 text-sm leading-relaxed text-slate-500">Get started fast with usage examples, live previews and code.</p></div></div><div class="group flex items-start gap-4 rounded-xl border border-slate-200/60 bg-white/50 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md"><div class="size-10 shrink-0 rounded bg-indigo-50 border border-indigo-200 p-2"><img alt="" class="h-full w-full object-contain" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/boxEmoji.png"></div><div><h3 class="text-base font-medium text-slate-700">Fully Customizable</h3><p class="mt-1 text-sm leading-relaxed text-slate-500">Easily adapt styles, colors and layout to match your brand or product.</p></div></div><div class="group flex items-start gap-4 rounded-xl border border-slate-200/60 bg-white/50 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md"><div class="size-10 shrink-0 rounded bg-indigo-50 border border-indigo-200 p-2"><img alt="" class="h-full w-full object-contain" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/brainEmoji.png"></div><div><h3 class="text-base font-medium text-slate-700">Accessibility First</h3><p class="mt-1 text-sm leading-relaxed text-slate-500">Built with WCAG standards in mind to ensure inclusive experiences.</p></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.