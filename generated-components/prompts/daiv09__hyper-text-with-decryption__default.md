# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/daiv09/hyper-text-with-decryption/default
- Registry URL: https://21st.dev/r/daiv09/hyper-text-with-decryption
- Author: daiv09
- Component slug: hyper-text-with-decryption
- Demo slug: default
- Title: hyper-text-with-decryption
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/daiv09/hyper-text-with-decryption with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/daiv09__hyper-text-with-decryption__default.html
- Local screenshot file: generated-21st-prompts/screenshots/daiv09__hyper-text-with-decryption__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen bg-zinc-50 flex items-center justify-center p-6 md:p-12 relative overflow-hidden"><div class="absolute inset-0 z-0"><div class="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-200/30 rounded-full blur-[120px]"></div><div class="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-200/30 rounded-full blur-[120px]"></div><div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgb(0, 0, 0) 1px, transparent 1px), linear-gradient(90deg, rgb(0, 0, 0) 1px, transparent 1px); background-size: 32px 32px;"></div></div><div class="max-w-4xl w-full relative z-10" style="opacity: 1; transform: none;"><div class="flex justify-center mb-8"><div class="bg-white border border-gray-200 shadow-sm px-4 py-1.5 rounded-full flex items-center gap-2"><span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span><span class="text-xs font-bold tracking-widest text-gray-500 uppercase">Interactive Bio</span></div></div><div class="bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 md:p-16"><div class="leading-relaxed tracking-wide text-2xl md:text-4xl text-gray-800 font-normal leading-[1.6]"><span class="
        relative inline-block font-mono font-medium whitespace-nowrap
        cursor-default
      " style="opacity: 1; filter: blur(0px); color: rgb(31, 41, 55); z-index: 1; transform: none;"><span class="relative z-10 px-1">Lorem,</span></span><span class="inline-block whitespace-pre"> </span><span class="
        relative inline-block font-mono font-medium whitespace-nowrap
        cursor-pointer
      " style="opacity: 1; filter: blur(0px); color: rgb(37, 99, 235); z-index: 1; transform: none;"><span class="relative z-10 px-1">ipsum</span></span><span class="inline-block whitespace-pre"> </span><span class="
        relative inline-block font-mono font-medium whitespace-nowrap
        cursor-default
      " style="opacity: 1; filter: blur(0px); color: rgb(31, 41, 55); z-index: 1; transform: none;"><span class="relative z-10 px-1">dolor</span></span><span class="inline-block whitespace-pre"> </span><span class="
        relative inline-block font-mono font-medium whitespace-nowrap
        cursor-default
      " style="opacity: 1; filter: blur(0px); color: rgb(31, 41, 55); z-index: 1; transform: none;"><span class="relative z-10 px-1">sit</span></span><span class="inline-block whitespace-pre"> </span><span class="
        relative inline-block font-mono font-medium whitespace-nowrap
        cursor-pointer
      " style="opacity: 1; filter: blur(0px); color: rgb(37, 99, 235); z-index: 1; transform: none;"><span class="relative z-10 px-1">amet</span></span><span class="inline-block whitespace-pre"> </span><span class="
        relative inline-block font-mono font-medium whitespace-nowrap
        cursor-default
      " style="opacity: 1; filter: blur(0px); color: rgb(31, 41, 55); z-index: 1; transform: none;"><span class="relative z-10 px-1">consectetur</span></span><span class="inline-block whitespace-pre"> </span><span class="
        relative inline-block font-mono font-medium whitespace-nowrap
        cursor-pointer
      " style="opacity: 1; filter: blur(0px); color: rgb(37, 99, 235); z-index: 1; transform: none;"><span class="relative z-10 px-1">adipisicing</span></span><span class="inline-block whitespace-pre"> </span><span class="
        relative inline-block font-mono font-medium whitespace-nowrap
        cursor-default
      " style="opacity: 1; filter: blur(0px); color: rgb(31, 41, 55); z-index: 1; transform: none;"><span class="relative z-10 px-1">elit.</span></span><span class="inline-block whitespace-pre"> </span><span class="
        relative inline-block font-mono font-medium whitespace-nowrap
        cursor-default
      " style="opacity: 1; filter: blur(0px); color: rgb(31, 41, 55); z-index: 1; transform: none;"><span class="relative z-10 px-1">Beatae,</span></span><span class="inline-block whitespace-pre"> </span><span class="
        relative inline-block font-mono font-medium whitespace-nowrap
        cursor-pointer
      " style="opacity: 1; filter: blur(0px); color: rgb(37, 99, 235); z-index: 1; transform: none;"><span class="relative z-10 px-1">rerum.</span></span><span class="inline-block whitespace-pre"> </span></div></div><p class="text-center mt-8 text-gray-400 text-sm font-mono">Hover highlighted keywords to decrypt</p></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.