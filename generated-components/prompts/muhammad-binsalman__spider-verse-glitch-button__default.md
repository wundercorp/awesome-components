# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/muhammad-binsalman/spider-verse-glitch-button/default
- Registry URL: https://21st.dev/r/muhammad-binsalman/spider-verse-glitch-button
- Author: muhammad-binsalman
- Component slug: spider-verse-glitch-button
- Demo slug: default
- Title: spider-verse-glitch-button
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/muhammad-binsalman/spider-verse-glitch-button with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/muhammad-binsalman__spider-verse-glitch-button__default.html
- Local screenshot file: generated-21st-prompts/screenshots/muhammad-binsalman__spider-verse-glitch-button__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="p-10 flex items-center justify-center min-h-screen w-full bg-stone-900"><div class="button-wrapper relative group p-10 transform-gpu transition-transform duration-200 ease-out"><button class="spiderverse-button relative px-8 py-4 text-2xl font-black border-none rounded-full cursor-pointer bg-white text-black uppercase tracking-[3px] transform-gpu transition-all duration-150 ease-out font-sans
          [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">CLICK ME<div class="glitch-layers absolute top-0 left-0 w-full h-full"><div class="glitch-layer layer-1 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white rounded-full text-cyan-400 opacity-0 transition-all duration-150 origin-center">CLICK ME</div><div class="glitch-layer layer-2 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white rounded-full text-fuchsia-500 opacity-0 transition-all duration-150 origin-center">CLICK ME</div></div><div class="noise absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none opacity-0 transition-opacity duration-300
            bg-[repeating-radial-gradient(circle_at_50%_50%,_transparent_0,_rgba(0,0,0,0.1)_1px,_transparent_2px)]"></div><div class="glitch-slice absolute w-[120%] h-[5px] bg-white opacity-0"></div></button></div><style>
        .button-wrapper:hover .layer-1 {
          opacity: 1;
          animation: glitchLayer1 0.4s steps(2) infinite;
        }

        .button-wrapper:hover .layer-2 {
          opacity: 1;
          animation: glitchLayer2 0.4s steps(2) infinite;
        }

        .button-wrapper:hover .spiderverse-button {
          animation: buttonGlitch 0.3s steps(2) infinite;
          box-shadow:
            0 0 20px rgba(255, 255, 255, 0.5),
            0 0 30px rgba(0, 255, 255, 0.5),
            0 0 40px rgba(255, 0, 255, 0.5);
        }

        .button-wrapper:hover .noise {
          opacity: 1;
        }

        .noise {
          animation: noise 0.2s steps(2) infinite;
        }

        .glitch-slice {
          animation: slice 3s linear infinite;
        }

        @keyframes buttonGlitch {
          0% { transform: translate(0) scale(1.1); }
          25% { transform: translate(-10px, 5px) scale(1.15) skew(-5deg); }
          50% { transform: translate(10px, -5px) scale(1.1) skew(5deg); }
          75% { transform: translate(-15px, -5px) scale(1.05) skew(-3deg); }
          100% { transform: translate(0) scale(1.1); }
        }
        
        @keyframes glitchLayer1 {
          0% { 
            transform: translate(-20px, -10px) scale(1.1) skew(-10deg);
            clip-path: polygon(0 20%, 100% 20%, 100% 50%, 0 50%);
          }
          25% { 
            transform: translate(20px, 10px) scale(1.2) skew(10deg);
            clip-path: polygon(0 30%, 100% 30%, 100% 60%, 0 60%);
          }
          50% { 
            transform: translate(-15px, 5px) scale(0.9) skew(-5deg);
            clip-path: polygon(0 10%, 100% 10%, 100% 40%, 0 40%);
          }
          75% { 
            transform: translate(15px, -5px) scale(1.3) skew(5deg);
            clip-path: polygon(0 40%, 100% 40%, 100% 70%, 0 70%);
          }
          100% { 
            transform: translate(-20px, -10px) scale(1.1) skew(-10deg);
            clip-path: polygon(0 20%, 100% 20%, 100% 50%, 0 50%);
          }
        }
        
        @keyframes glitchLayer2 {
          0% { 
            transform: translate(20px, 10px) scale(1.1) skew(10deg);
            clip-path: polygon(0 50%, 100% 50%, 100% 80%, 0 80%);
          }
          25% { 
            transform: translate(-20px, -10px) scale(1.2) skew(-10deg);
            clip-path: polygon(0 60%, 100% 60%, 100% 90%, 0 90%);
          }
          50% { 
            transform: translate(15px, -5px) scale(0.9) skew(5deg);
            clip-path: polygon(0 40%, 100% 40%, 100% 70%, 0 70%);
          }
          75% { 
            transform: translate(-15px, 5px) scale(1.3) skew(-5deg);
            clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%);
          }
          100% { 
            transform: translate(20px, 10px) scale(1.1) skew(10deg);
            clip-path: polygon(0 50%, 100% 50%, 100% 80%, 0 80%);
          }
        }
        
        @keyframes noise {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(10%, 5%); }
          30% { transform: translate(-5%, 10%); }
          40% { transform: translate(15%, -5%); }
          50% { transform: translate(-10%, 15%); }
          60% { transform: translate(5%, -10%); }
          70% { transform: translate(-15%, 5%); }
          80% { transform: translate(10%, 10%); }
          90% { transform: translate(-5%, 15%); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes slice {
          0% { top: -10%; opacity: 0; }
          1% { opacity: 0.5; }
          3% { opacity: 0; }
          50% { top: 110%; }
          100% { top: 110%; }
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.