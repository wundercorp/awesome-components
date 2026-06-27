# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/coderislive07/cursor-wander-card/default
- Registry URL: https://21st.dev/r/coderislive07/cursor-wander-card
- Author: coderislive07
- Component slug: cursor-wander-card
- Demo slug: default
- Title: cursor-wander-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/coderislive07/cursor-wander-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/coderislive07__cursor-wander-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/coderislive07__cursor-wander-card__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="perspective-3000 " style="perspective: 3000px;"><div class="relative transition-transform hover:scale-105" style="transition: transform 0.1s ease-out; transform-style: preserve-3d; width: 450px; height: 280px; transform: rotateX(-6.4deg) rotateY(20.3deg) rotateZ(4.65deg);"><div class="absolute w-full h-full rounded-3xl overflow-hidden shadow-2xl" style="background: linear-gradient(135deg, rgb(0, 26, 51) 0%, rgb(0, 51, 102) 50%, rgb(0, 86, 179) 100%); box-shadow: rgba(15, 160, 206, 0.8) 0px 25px 50px -12px;"><div class="absolute inset-0" style="background: radial-gradient(circle at 76.4104% 20.937%, rgba(15, 160, 206, 0.8) 0%, transparent 70%), radial-gradient(circle at 63.0297% 89.8682%, rgba(128, 0, 255, 0.4) 0%, transparent 60%), radial-gradient(circle at 71.5583% 33.3984%, rgba(255, 128, 240, 0.3) 0%, transparent 55%); opacity: 0.9;"></div><div class="absolute inset-0" style="background: radial-gradient(at 99.9341% 26.5148%, rgba(15, 160, 206, 0.7) 0%, transparent 50%), radial-gradient(at 10.5134% 82.319%, rgba(51, 153, 255, 0.6) 0%, transparent 60%), radial-gradient(at 67.4393% 10.3948%, rgba(0, 195, 255, 0.5) 0%, transparent 55%); mix-blend-mode: screen;"></div><div class="absolute inset-0 overflow-hidden"><div class="particles-container"></div></div><div class="absolute inset-0 animate-holographicShift" style="background: linear-gradient(45deg, transparent 40%, rgba(51, 195, 240, 0.15) 45%, rgba(51, 195, 240, 0.3) 50%, rgba(51, 195, 240, 0.15) 55%, transparent 60%) 0% 0% / 200% 200%;"></div><div class="absolute inset-0 overflow-hidden"><div class="stars-small"></div><div class="stars-medium"></div><div class="stars-large"></div><div class="stars-twinkle"></div></div><div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="relative w-32 h-32 md:w-40 md:h-40"><div class="absolute w-full h-full animate-pulse-glow" style="background: linear-gradient(135deg, rgb(15, 160, 206) 0%, rgb(0, 86, 179) 100%); clip-path: polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%); transform: rotate(45deg); opacity: 0.8; filter: blur(5px); box-shadow: rgba(15, 160, 206, 0.8) 0px 0px 30px;"></div></div></div><div class="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center"><div class="text-white text-xs sm:text-sm font-bold"><div class="flex items-center gap-2 sm:gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L17 7L12 12L17 17L12 22L7 17L12 12L7 7L12 2Z" fill="white"></path></svg><div class="flex flex-col"><span class="text-xs sm:text-sm text-white/90">NEBULA</span><span class="text-xs sm:text-sm text-white/90">FLUX</span></div></div></div></div><div class="absolute left-4 sm:left-6 top-16 sm:top-24"><div class="w-12 h-8 sm:w-16 sm:h-12 rounded-md opacity-90 chip-glow" style="box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px, rgba(51, 195, 240, 0.3) 0px 0px 10px; background: linear-gradient(135deg, rgb(212, 212, 212) 0%, rgb(160, 160, 160) 50%, rgb(212, 212, 212) 100%);"></div></div><div class="absolute bottom-4 sm:bottom-6 left-0 w-full px-4 sm:px-6"><div class="text-white/80 tracking-wider text-xs sm:text-sm" style="text-shadow: rgba(51, 195, 240, 0.5) 0px 0px 5px;">JOHN DOE</div></div></div></div><style>
        @keyframes holographicShift {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        
        @keyframes aurora {
          0% { transform: translate(5%, 5%) scale(1.0); opacity: 0.7; }
          50% { transform: translate(-5%, -5%) scale(1.2); opacity: 0.9; }
          100% { transform: translate(5%, 5%) scale(1.0); opacity: 0.7; }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.6; }
          50% { opacity: 0.9; }
          100% { opacity: 0.6; }
        }

        @keyframes pulse-glow {
          0% { filter: blur(5px) brightness(1); }
          50% { filter: blur(7px) brightness(1.3); }
          100% { filter: blur(5px) brightness(1); }
        }
        
        .stars-small, .stars-medium, .stars-large, .stars-twinkle {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .stars-small {
          background-image: radial-gradient(1px 1px at 20px 30px, white, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 40px 70px, white, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 50px 160px, white, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 90px 40px, white, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 130px 80px, white, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 160px 120px, white, rgba(0,0,0,0));
          background-size: 200px 200px;
          opacity: 0.4;
        }
        
        .stars-medium {
          background-image: radial-gradient(1.5px 1.5px at 150px 150px, white, rgba(0,0,0,0)),
                          radial-gradient(1.5px 1.5px at 220px 220px, white, rgba(0,0,0,0)),
                          radial-gradient(1.5px 1.5px at 80px 250px, white, rgba(0,0,0,0)),
                          radial-gradient(1.5px 1.5px at 180px 80px, white, rgba(0,0,0,0));
          background-size: 300px 300px;
          opacity: 0.4;
        }
        
        .stars-large {
          background-image: radial-gradient(2px 2px at 100px 100px, white, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 200px 200px, white, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 300px 300px, white, rgba(0,0,0,0));
          background-size: 400px 400px;
          opacity: 0.5;
          animation: stars-move 100s linear infinite;
        }

        .stars-twinkle {
          background-image: radial-gradient(2px 2px at 50px 50px, rgba(255,255,255,0.8), rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 150px 150px, rgba(255,255,255,0.8), rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 250px 250px, rgba(255,255,255,0.8), rgba(0,0,0,0));
          background-size: 300px 300px;
          opacity: 0;
          animation: twinkle 4s ease-in-out infinite alternate;
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(1px 1px at 10% 10%, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 15% 15%, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 20% 20%, rgba(51, 195, 240, 0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 25% 25%, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 30% 30%, rgba(51, 195, 240, 0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 35% 35%, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 40% 40%, rgba(51, 195, 240, 0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 45% 45%, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50% 50%, rgba(51, 195, 240, 0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 55% 55%, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 60% 60%, rgba(51, 195, 240, 0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 65% 65%, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 70% 70%, rgba(51, 195, 240, 0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 75% 75%, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 80% 80%, rgba(51, 195, 240, 0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 85% 85%, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90% 90%, rgba(51, 195, 240, 0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 95% 95%, rgba(255,255,255,0.8), rgba(0,0,0,0));
          background-size: 150% 150%;
          animation: particles-float 20s ease infinite;
          opacity: 0.6;
        }
        
        @keyframes stars-move {
          0% { background-position: 0px 0px, 0px 0px, 0px 0px; }
          100% { background-position: 400px 400px, 300px 300px, 200px 200px; }
        }

        @keyframes twinkle {
          0% { opacity: 0.1; }
          50% { opacity: 0.7; }
          100% { opacity: 0.3; }
        }

        @keyframes particles-float {
          0% { background-position: 0% 0%; }
          50% { background-position: 75% 75%; }
          100% { background-position: 0% 0%; }
        }
        
        .animate-holographicShift {
          animation: holographicShift 5s ease infinite;
        }
        
        .animate-aurora {
          animation: aurora 15s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .perspective-3000 {
          perspective: 3000px;
        }

        .chip-glow {
          position: relative;
        }

        .chip-glow::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(51, 195, 240, 0.2) 0%, rgba(51, 195, 240, 0) 100%);
          opacity: 0;
          animation: chip-pulse 4s ease-in-out infinite;
        }

        @keyframes chip-pulse {
          0% { opacity: 0; }
          50% { opacity: 0.7; }
          100% { opacity: 0; }
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.