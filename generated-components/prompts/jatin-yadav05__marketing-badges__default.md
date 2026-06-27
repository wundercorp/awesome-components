# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jatin-yadav05/marketing-badges/default
- Registry URL: https://21st.dev/r/jatin-yadav05/marketing-badges
- Author: jatin-yadav05
- Component slug: marketing-badges
- Demo slug: default
- Title: marketing-badges
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jatin-yadav05/marketing-badges with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jatin-yadav05__marketing-badges__default.html
- Local screenshot file: generated-21st-prompts/screenshots/jatin-yadav05__marketing-badges__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="flex min-h-screen flex-col items-center justify-center w-full"><div class="relative flex h-[400px] w-full items-center justify-center"><div class="absolute cursor-pointer select-none rounded-full font-semibold transition-all duration-500 ease-out bg-gradient-to-b shadow-lg from-amber-300 to-yellow-400 px-10 py-3.5 text-xl hover:shadow-2xl" style="transform: translate(-20px, -60px) rotate(-3deg) scale(1) translateY(0px); z-index: 1; box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 25px -5px, rgba(0, 0, 0, 0.1) 0px 4px 10px -2px, rgba(255, 255, 255, 0.2) 0px 1px 2px inset;"><span class="relative block transition-transform duration-300 text-slate-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]" style="transform: translateY(0px);">marketing</span><div class="pointer-events-none absolute inset-0 rounded-full opacity-50" style="background: linear-gradient(rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%);"></div></div><div class="absolute cursor-pointer select-none rounded-full font-semibold transition-all duration-500 ease-out bg-gradient-to-b shadow-lg from-orange-400 to-orange-500 px-6 py-2.5 text-base hover:shadow-2xl" style="transform: translate(60px, -35px) rotate(2deg) scale(1) translateY(0px); z-index: 2; box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 25px -5px, rgba(0, 0, 0, 0.1) 0px 4px 10px -2px, rgba(255, 255, 255, 0.2) 0px 1px 2px inset;"><span class="relative block transition-transform duration-300 text-slate-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]" style="transform: translateY(0px);">SEO</span><div class="pointer-events-none absolute inset-0 rounded-full opacity-50" style="background: linear-gradient(rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%);"></div></div><div class="absolute cursor-pointer select-none rounded-full font-semibold transition-all duration-500 ease-out bg-gradient-to-b shadow-lg from-amber-400 to-yellow-500 px-10 py-3.5 text-xl hover:shadow-2xl" style="transform: translate(-30px, -15px) rotate(-2deg) scale(1) translateY(0px); z-index: 3; box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 25px -5px, rgba(0, 0, 0, 0.1) 0px 4px 10px -2px, rgba(255, 255, 255, 0.2) 0px 1px 2px inset;"><span class="relative block transition-transform duration-300 text-slate-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]" style="transform: translateY(0px);">social media</span><div class="pointer-events-none absolute inset-0 rounded-full opacity-50" style="background: linear-gradient(rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%);"></div></div><div class="absolute cursor-pointer select-none rounded-full font-semibold transition-all duration-500 ease-out bg-gradient-to-b shadow-lg from-pink-300 to-pink-400 px-10 py-3.5 text-xl hover:shadow-2xl" style="transform: translate(0px, 25px) rotate(0deg) scale(1) translateY(0px); z-index: 4; box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 25px -5px, rgba(0, 0, 0, 0.1) 0px 4px 10px -2px, rgba(255, 255, 255, 0.2) 0px 1px 2px inset;"><span class="relative block transition-transform duration-300 text-slate-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]" style="transform: translateY(0px);">email marketing</span><div class="pointer-events-none absolute inset-0 rounded-full opacity-50" style="background: linear-gradient(rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%);"></div></div><div class="absolute cursor-pointer select-none rounded-full font-semibold transition-all duration-500 ease-out bg-gradient-to-b shadow-lg from-blue-400 to-blue-500 px-8 py-3 text-lg hover:shadow-2xl" style="transform: translate(-15px, 65px) rotate(3deg) scale(1) translateY(0px); z-index: 5; box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 25px -5px, rgba(0, 0, 0, 0.1) 0px 4px 10px -2px, rgba(255, 255, 255, 0.2) 0px 1px 2px inset;"><span class="relative block transition-transform duration-300 text-slate-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]" style="transform: translateY(0px);">conversions</span><div class="pointer-events-none absolute inset-0 rounded-full opacity-50" style="background: linear-gradient(rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%);"></div></div><div class="absolute cursor-pointer select-none rounded-full font-semibold transition-all duration-500 ease-out bg-gradient-to-b shadow-lg from-sky-300 to-sky-400 px-6 py-2.5 text-base hover:shadow-2xl" style="transform: translate(50px, 90px) rotate(-1deg) scale(1) translateY(0px); z-index: 6; box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 25px -5px, rgba(0, 0, 0, 0.1) 0px 4px 10px -2px, rgba(255, 255, 255, 0.2) 0px 1px 2px inset;"><span class="relative block transition-transform duration-300 text-slate-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]" style="transform: translateY(0px);">ads</span><div class="pointer-events-none absolute inset-0 rounded-full opacity-50" style="background: linear-gradient(rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%);"></div></div></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.