# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/thanh/web3-hero-section/default
- Registry URL: https://21st.dev/r/thanh/web3-hero-section
- Author: thanh
- Component slug: web3-hero-section
- Demo slug: default
- Title: web3-hero-section
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/thanh/web3-hero-section with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/thanh__web3-hero-section__default.html
- Local screenshot file: generated-21st-prompts/screenshots/thanh__web3-hero-section__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="w-full"><div class="bg-[#0D0D0D] min-h-screen font-sans text-white overflow-hidden"><style>
        @keyframes scroll-grid {
            0% { background-position: 0 0; }
            100% { background-position: -100px -100px; }
        }
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
    </style><div class="relative w-full min-h-screen flex flex-col items-center justify-center p-4"><div class="absolute inset-0 w-full h-full overflow-hidden"><div class="absolute inset-0 w-full h-full" style="mask-image: linear-gradient(transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to right, black 0%, black 15%, transparent 25%, transparent 75%, black 85%, black 100%), linear-gradient(to right, black 0%, black 25%, transparent 35%, transparent 65%, black 75%, black 100%), linear-gradient(black 0%, black 25%, transparent 40%, transparent 60%, black 75%, black 100%); mask-composite: intersect;"><div class="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 opacity-90"></div><div class="absolute inset-0" style="perspective: 1000px;"><div class="w-full h-full" style="background-image: repeating-linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 50px), repeating-linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 50px); transform: rotateX(60deg) translateY(20%); transform-origin: center bottom; animation: 10s linear 0s infinite normal none running scroll-grid;"></div></div></div></div><main class="relative z-10 text-center flex flex-col items-center mt-20 md:mt-0"><div class="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-full px-4 py-1 text-sm mb-4" style="animation: 1s ease-out 0s 1 normal none running fade-in;">Announcing our web3 beta</div><h1 class="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight" style="animation: 0.8s ease-out 0.2s 1 normal backwards running fade-in-up;">Create and connect your world on web3</h1><p class="text-gray-300 mt-6 max-w-2xl text-lg md:text-xl" style="animation: 0.8s ease-out 0.4s 1 normal backwards running fade-in-up;">The essential web3 toolkit for sharing and funding anything. From writing about your latest idea, to building for the next big DAO.</p><button class="bg-white text-black font-semibold px-8 py-3 rounded-md mt-8 hover:bg-gray-200 transition-colors text-lg" style="animation: 0.8s ease-out 0.6s 1 normal backwards running fade-in-up;">Try Molibra</button></main><footer class="absolute bottom-0 left-0 right-0 p-6 md:px-12 z-10" style="animation: 1s ease-out 1s 1 normal backwards running fade-in;"><div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-gray-400"><div class="flex items-center gap-2 font-mono text-sm"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-auto text-gray-400"><path d="M18 6l-6 6-6-6"></path><path d="M12 12v6"></path></svg></div><div class="flex items-center gap-2 font-mono text-sm"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-auto text-gray-400"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20 4H4v16h16V4zM7 7h2v10H7V7zm4 0h2v10h-2V7zm4 0h2v10h-2V7z"></path></svg></div><div class="flex items-center gap-2 font-mono text-sm"><span>Lucidchart</span></div><div class="flex items-center gap-2 font-mono text-sm"><span>wrike</span></div><div class="flex items-center gap-2 font-mono text-sm"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-auto text-gray-400"><path d="M20 6L9 17l-5-5"></path></svg></div><div class="flex items-center gap-2 font-mono text-sm"><span>openstack</span></div><div class="flex items-center gap-2 font-mono text-sm"><span>servicenow</span></div><div class="flex items-center gap-2 font-mono text-sm"><span>Paysafe:</span></div></div></footer></div></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.