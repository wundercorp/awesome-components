# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/animated-shader-hero/default
- Registry URL: https://21st.dev/r/ravikatiyar/animated-shader-hero
- Author: ravikatiyar
- Component slug: animated-shader-hero
- Demo slug: default
- Title: animated-shader-hero
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/animated-shader-hero with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__animated-shader-hero__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__animated-shader-hero__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full"><div class="relative w-full h-screen overflow-hidden bg-black "><style>
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      </style><canvas class="absolute inset-0 w-full h-full object-contain touch-none" width="992" height="944" style="background: black;"></canvas><div class="absolute inset-0 z-10 flex flex-col items-center justify-center text-white"><div class="mb-8 animate-fade-in-down"><div class="flex items-center gap-2 px-6 py-3 bg-orange-500/10 backdrop-blur-md border border-orange-300/30 rounded-full text-sm"><div class="flex"><span class="text-yellow-300">✨</span></div><span class="text-orange-100">Trusted by forward-thinking teams.</span></div></div><div class="text-center space-y-6 max-w-5xl mx-auto px-4"><div class="space-y-2"><h1 class="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">Launch Your</h1><h1 class="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-400">Workflow Into Orbit</h1></div><div class="max-w-3xl mx-auto animate-fade-in-up animation-delay-600"><p class="text-lg md:text-xl lg:text-2xl text-orange-100/90 font-light leading-relaxed">Supercharge productivity with AI-powered automation and integrations built for the next generation of teams — fast, seamless, and limitless.</p></div><div class="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up animation-delay-800"><button class="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25">Get Started for Free</button><button class="px-8 py-4 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-300/30 hover:border-orange-300/50 text-orange-100 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">Explore Features</button></div></div></div></div><div class="bg-gray-100 p-8"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold text-gray-800 mb-4">How to Use the Hero Component</h2><div class="bg-white p-6 rounded-lg shadow-sm"><pre class="text-sm text-gray-600 overflow-x-auto">&lt;Hero
  trustBadge={{
    text: "Your trust badge text",
    icons: ["🚀", "⭐", "✨"] // optional
  }}
  headline={{
    line1: "Your First Line",
    line2: "Your Second Line"
  }}
  subtitle="Your compelling subtitle text goes here..."
  buttons={{
    primary: {
      text: "Primary CTA",
      onClick: handlePrimaryClick
    },
    secondary: {
      text: "Secondary CTA", 
      onClick: handleSecondaryClick
    }
  }}
  className="custom-classes" // optional
/&gt;</pre></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.