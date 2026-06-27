# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/osint619/wilderness/default
- Registry URL: https://21st.dev/r/osint619/wilderness
- Author: osint619
- Component slug: wilderness
- Demo slug: default
- Title: wilderness
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/osint619/wilderness with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/osint619__wilderness__default.html
- Local screenshot file: generated-21st-prompts/screenshots/osint619__wilderness__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="relative h-screen w-screen overflow-hidden bg-gradient-to-b from-sky-1900 to-sky-1700"><div class="absolute inset-0 z-[100] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_65%,rgba(0,0,0,0.7))]"></div><img alt="background" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/9mHk68Gj/background.png" style="width: 3200px; top: calc(50% - 50px); left: calc(50% + 0px); z-index: 1; transform: translate(-50%, -50%);"><img alt="fog-7" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/DHhNwG0X/fog-7.png" style="width: 1900px; top: calc(50% - 100px); left: calc(50% + 300px); z-index: 2; transform: translate(-50%, -50%);"><img alt="mountain-10" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/4gT3LR9K/mountain-10.png" style="width: 1200px; top: calc(50% + 169px); left: calc(50% + 330px); z-index: 3; transform: translate(-50%, -50%);"><img alt="fog-6" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out opacity-30" src="https://i.ibb.co/rW6cjXV/fog-6.png" style="width: 2200px; top: calc(50% + 285px); left: calc(50%); z-index: 4; transform: translate(-50%, -50%);"><img alt="mountain-9" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/zHWDdxRR/mountain-9.png" style="width: 670px; top: calc(50% + 313px); left: calc(50% - 557px); z-index: 51; transform: translate(-50%, -50%);"><img alt="fog-5" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/jFSMJ2t/fog-5.png" style="width: 650px; top: calc(50% + 360px); left: calc(50% + 40px); z-index: 7; transform: translate(-50%, -50%);"><img alt="mountain-7" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/Fq5CHqZ6/mountain-7.png" style="width: 738px; top: calc(50% + 223px); left: calc(50% + 495px); z-index: 19; transform: translate(-50%, -50%);"><img alt="mountain-6" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/N2TjCDLQ/mountain-6.png" style="width: 408px; top: calc(50% + 120px); left: calc(50% + 590px); z-index: 18; transform: translate(-50%, -50%);"><img alt="fog-4" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out opacity-50" src="https://i.ibb.co/23Xc3QwX/fog-4.png" style="width: 590px; top: calc(50% + 223px); left: calc(50% + 460px); z-index: 11; transform: translate(-50%, -50%);"><img alt="mountain-5" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/SSfDbsF/mountain-5.png" style="width: 725px; top: calc(50% + 320px); left: calc(50% + 230px); z-index: 12; transform: translate(-50%, -50%);"><img alt="fog-3" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/chZkMKzX/fog-3.png" style="width: 1600px; top: calc(50% + 210px); left: calc(50% + 5px); z-index: 113; transform: translate(-50%, -50%);"><img alt="mountain-4" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/39PKgGNS/mountain-4.png" style="width: 1100px; top: calc(50% + 196px); left: calc(50% - 698px); z-index: 15; transform: translate(-50%, -50%);"><img alt="mountain-3" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/rKHGSD9S/mountain-3.png" style="width: 630px; top: calc(50% - 20px); left: calc(50% + 750px); z-index: 20; transform: translate(-50%, -50%);"><img alt="fog-2" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/bj0s7gRP/fog-2.png" style="width: 1100px; top: calc(50% - 20px); left: calc(50% + 698px); z-index: 16; transform: translate(-50%, -50%);"><img alt="mountain-2" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/7tHMfwZH/mountain-2.png" style="width: 800px; top: calc(50% + 256px); left: calc(50% + 528px); z-index: 17; transform: translate(-50%, -50%);"><img alt="mountain-1" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out" src="https://i.ibb.co/Knh5tBS/mountain-1.png" style="width: 1100px; top: calc(50% + 196px); left: calc(50% - 728px); z-index: 18; transform: translate(-50%, -50%);"><img alt="fog-1" class="absolute pointer-events-none transition-transform duration-[450ms] ease-out opacity-50" src="https://i.ibb.co/Y41vTxSN/fog-1.png" style="width: 1900px; top: calc(100% - 355px); left: calc(50% + 100px); z-index: 21; transform: translate(-50%, -50%);"><div class="absolute z-[9] text-white text-center pointer-events-auto transition-transform duration-[450ms] ease-out" style="top: calc(50% - 130px); left: 50%; transform: translate(-50%, -50%);"><h1 class="font-black text-[20rem] leading-[0.8] max-lg:text-[15rem] max-md:text-[5.8rem] max-sm:text-[3.3rem]">HERO</h1></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.