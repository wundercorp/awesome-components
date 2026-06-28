# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reuno-ui/animated-number/default
- Registry URL: https://21st.dev/r/reuno-ui/animated-number
- Author: reuno-ui
- Component slug: animated-number
- Demo slug: default
- Title: animated-number
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reuno-ui/animated-number with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reuno-ui__animated-number__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reuno-ui__animated-number__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="relative h-[calc(100vh-1rem)] w-full snap-y snap-mandatory overflow-y-scroll bg-[#f5f4f3]"><div class="snap-start"><div class="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3] text-black"><div class="top-22 absolute left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black"><span class="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-[#f5f4f3] after:to-black after:content-['']">Countdown with Number Flow</span></div><div class="font-bebas-neue text-[20vw] tracking-tight"><number-flow-react></number-flow-react></div><div class="flex w-fit items-center gap-2"><button aria-label="Pause timer" class="hover:bg-[#ff3828 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff3828] transition-colors" tabindex="0"><svg viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-[#f5f4f3]" style="opacity: 1; filter: blur(0px); transform: none;"><path d="M1.03906 12.7266H2.82031C3.5 12.7266 3.85938 12.3672 3.85938 11.6797V1.03906C3.85938 0.328125 3.5 0 2.82031 0H1.03906C0.359375 0 0 0.359375 0 1.03906V11.6797C0 12.3672 0.359375 12.7266 1.03906 12.7266ZM6.71875 12.7266H8.49219C9.17969 12.7266 9.53125 12.3672 9.53125 11.6797V1.03906C9.53125 0.328125 9.17969 0 8.49219 0H6.71875C6.03125 0 5.67188 0.359375 5.67188 1.03906V11.6797C5.67188 12.3672 6.03125 12.7266 6.71875 12.7266Z"></path></svg></button><button aria-label="Reset timer" class="flex h-10 w-10 items-center justify-center rounded-full bg-white/45 text-[#ff3828] shadow-2xl transition-colors hover:bg-white/70"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus rotate-45" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></div></div></div><div class="snap-start"><div class="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3] text-black"><div class="top-22 absolute left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black"><span class="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-[#f5f4f3] after:to-black after:content-['']">random numbers from x to y in view</span></div><div class="font-bebas-neue text-[20vw] tracking-tight">0</div></div></div><div class="snap-start"><div class="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3] text-black"><div class="top-22 absolute left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black"><span class="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-[#f5f4f3] after:to-black after:content-['']">random numbers from x to y in view</span></div><div class="font-bebas-neue text-[20vw] tracking-tight"><div>$1,000,000</div></div></div></div><div class="snap-start"><div class="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3] text-black"><div class="top-22 absolute left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black"><span class="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-[#f5f4f3] after:to-black after:content-['']">from x to y value in view [number-flow]</span></div><div class="font-bebas-neue text-[20vw] tracking-tight"><number-flow-react></number-flow-react></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.