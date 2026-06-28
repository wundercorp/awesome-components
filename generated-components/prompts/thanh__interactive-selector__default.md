# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/thanh/interactive-selector/default
- Registry URL: https://21st.dev/r/thanh/interactive-selector
- Author: thanh
- Component slug: interactive-selector
- Demo slug: default
- Title: interactive-selector
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/thanh/interactive-selector with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/thanh__interactive-selector__default.html
- Local screenshot file: generated-21st-prompts/screenshots/thanh__interactive-selector__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_DemoOne">DemoOne</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full h-min-screen"><div class="relative flex flex-col items-center justify-center min-h-screen bg-[#222] font-sans text-white"><div class="w-full max-w-2xl px-6 mt-8 mb-2 text-center"><h1 class="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg animate-fadeInTop delay-300">Escape in Style</h1><p class="text-lg md:text-xl text-gray-300 font-medium max-w-xl mx-auto animate-fadeInTop delay-600">Discover luxurious camping experiences in nature’s most breathtaking spots.</p></div><div class="h-12"></div><div class="options flex w-full max-w-[900px] min-w-[600px] h-[400px] mx-0 items-stretch overflow-hidden relative"><div class="
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              active
            " style="background-image: url(&quot;https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=800&amp;q=80&quot;); background-size: auto 100%; background-position: center center; backface-visibility: hidden; opacity: 1; transform: translateX(0px); min-width: 60px; min-height: 100px; margin: 0px; border-radius: 0px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255); cursor: pointer; background-color: rgb(24, 24, 27); box-shadow: rgba(0, 0, 0, 0.5) 0px 20px 60px; flex: 7 1 0%; z-index: 10; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; will-change: flex-grow, box-shadow, background-size, background-position;"><div class="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out" style="bottom: 0px; height: 120px; box-shadow: rgb(0, 0, 0) 0px -120px 120px -120px inset, rgb(0, 0, 0) 0px -120px 120px -80px inset;"></div><div class="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full"><div class="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-white" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35l-25.9-18.79c-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3 278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55l-25.88 18.8c-7.15 5.19-8.74 15.2-3.54 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM320 288l116.36 160H203.64L320 288z"></path></svg></div><div class="info text-white whitespace-pre relative"><div class="main font-bold text-lg transition-all duration-700 ease-in-out" style="opacity: 1; transform: translateX(0px);">Luxury Tent</div><div class="sub text-base text-gray-300 transition-all duration-700 ease-in-out" style="opacity: 1; transform: translateX(0px);">Cozy glamping under the stars</div></div></div></div><div class="
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              
            " style="background-image: url(&quot;https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=crop&amp;w=800&amp;q=80&quot;); background-size: auto 120%; background-position: center center; backface-visibility: hidden; opacity: 1; transform: translateX(0px); min-width: 60px; min-height: 100px; margin: 0px; border-radius: 0px; border-width: 2px; border-style: solid; border-color: rgb(41, 41, 41); cursor: pointer; background-color: rgb(24, 24, 27); box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 30px; flex: 1 1 0%; z-index: 1; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; will-change: flex-grow, box-shadow, background-size, background-position;"><div class="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out" style="bottom: -40px; height: 120px; box-shadow: rgb(0, 0, 0) 0px -120px 0px -120px inset, rgb(0, 0, 0) 0px -120px 0px -80px inset;"></div><div class="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full"><div class="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-white" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"></path></svg></div><div class="info text-white whitespace-pre relative"><div class="main font-bold text-lg transition-all duration-700 ease-in-out" style="opacity: 0; transform: translateX(25px);">Campfire Feast</div><div class="sub text-base text-gray-300 transition-all duration-700 ease-in-out" style="opacity: 0; transform: translateX(25px);">Gourmet s'mores &amp; stories</div></div></div></div><div class="
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              
            " style="background-image: url(&quot;https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&amp;fit=crop&amp;w=800&amp;q=80&quot;); background-size: auto 120%; background-position: center center; backface-visibility: hidden; opacity: 1; transform: translateX(0px); min-width: 60px; min-height: 100px; margin: 0px; border-radius: 0px; border-width: 2px; border-style: solid; border-color: rgb(41, 41, 41); cursor: pointer; background-color: rgb(24, 24, 27); box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 30px; flex: 1 1 0%; z-index: 1; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; will-change: flex-grow, box-shadow, background-size, background-position;"><div class="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out" style="bottom: -40px; height: 120px; box-shadow: rgb(0, 0, 0) 0px -120px 0px -120px inset, rgb(0, 0, 0) 0px -120px 0px -80px inset;"></div><div class="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full"><div class="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" class="text-white" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path></svg></div><div class="info text-white whitespace-pre relative"><div class="main font-bold text-lg transition-all duration-700 ease-in-out" style="opacity: 0; transform: translateX(25px);">Lakeside Retreat</div><div class="sub text-base text-gray-300 transition-all duration-700 ease-in-out" style="opacity: 0; transform: translateX(25px);">Private dock &amp; canoe rides</div></div></div></div><div class="
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              
            " style="background-image: url(&quot;https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&amp;fit=crop&amp;w=800&amp;q=80&quot;); background-size: auto 120%; background-position: center center; backface-visibility: hidden; opacity: 1; transform: translateX(0px); min-width: 60px; min-height: 100px; margin: 0px; border-radius: 0px; border-width: 2px; border-style: solid; border-color: rgb(41, 41, 41); cursor: pointer; background-color: rgb(24, 24, 27); box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 30px; flex: 1 1 0%; z-index: 1; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; will-change: flex-grow, box-shadow, background-size, background-position;"><div class="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out" style="bottom: -40px; height: 120px; box-shadow: rgb(0, 0, 0) 0px -120px 0px -120px inset, rgb(0, 0, 0) 0px -120px 0px -80px inset;"></div><div class="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full"><div class="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-white" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M414.21 177.65c1.02 8.21 7.75 14.35 15.75 14.35h16.12c9.51 0 17.08-8.57 16-18.35-4.34-39.11-22.4-74.53-50.13-97.16-17.37-14.17-28.82-36.75-31.98-62.15C378.96 6.14 372.22 0 364.23 0h-16.12c-9.51 0-17.09 8.57-16 18.35 4.34 39.11 22.4 74.53 50.13 97.16 17.36 14.17 28.82 36.75 31.97 62.14zm-108 0c1.02 8.21 7.75 14.35 15.75 14.35h16.12c9.51 0 17.08-8.57 16-18.35-4.34-39.11-22.4-74.53-50.13-97.16-17.37-14.17-28.82-36.75-31.98-62.15C270.96 6.14 264.22 0 256.23 0h-16.12c-9.51 0-17.09 8.57-16 18.35 4.34 39.11 22.4 74.53 50.13 97.16 17.36 14.17 28.82 36.75 31.97 62.14zM480 256H256l-110.93-83.2a63.99 63.99 0 0 0-38.4-12.8H64c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V288c0-17.67-14.33-32-32-32zM128 440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v112zm96 0c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v112zm96 0c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v112zm96 0c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v112zM64 128c35.35 0 64-28.65 64-64S99.35 0 64 0 0 28.65 0 64s28.65 64 64 64z"></path></svg></div><div class="info text-white whitespace-pre relative"><div class="main font-bold text-lg transition-all duration-700 ease-in-out" style="opacity: 0; transform: translateX(25px);">Mountain Spa</div><div class="sub text-base text-gray-300 transition-all duration-700 ease-in-out" style="opacity: 0; transform: translateX(25px);">Outdoor sauna &amp; hot tub</div></div></div></div><div class="
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              
            " style="background-image: url(&quot;https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&amp;fit=crop&amp;w=800&amp;q=80&quot;); background-size: auto 120%; background-position: center center; backface-visibility: hidden; opacity: 1; transform: translateX(0px); min-width: 60px; min-height: 100px; margin: 0px; border-radius: 0px; border-width: 2px; border-style: solid; border-color: rgb(41, 41, 41); cursor: pointer; background-color: rgb(24, 24, 27); box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 30px; flex: 1 1 0%; z-index: 1; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; will-change: flex-grow, box-shadow, background-size, background-position;"><div class="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out" style="bottom: -40px; height: 120px; box-shadow: rgb(0, 0, 0) 0px -120px 0px -120px inset, rgb(0, 0, 0) 0px -120px 0px -80px inset;"></div><div class="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full"><div class="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-white" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z"></path></svg></div><div class="info text-white whitespace-pre relative"><div class="main font-bold text-lg transition-all duration-700 ease-in-out" style="opacity: 0; transform: translateX(25px);">Guided Adventure</div><div class="sub text-base text-gray-300 transition-all duration-700 ease-in-out" style="opacity: 0; transform: translateX(25px);">Expert-led nature tours</div></div></div></div></div><style>
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.