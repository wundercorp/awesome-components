# Build Animated Background in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animated Background screenshot](screenshot.png)

## Component

- Author group: `avanishverma4`
- Component: `animated-background`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: avanishverma4
- Component slug: animated-background
- Demo slug: default
- Title: animated-background
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative min-h-screen overflow-hidden bg-black w-full "><div class="absolute inset-0"><div class="absolute inset-0 opacity-70"><div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40"></div></div><div class="absolute inset-0"><div class="absolute inset-0 opacity-60" style="background: radial-gradient(800px 600px at 50% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%); animation: 8s ease-in-out 0s infinite alternate none running aurora1;"></div><div class="absolute inset-0 opacity-50" style="background: radial-gradient(600px 400px at 80% 30%, rgba(139, 92, 246, 0.4) 0%, transparent 50%); animation: 6s ease-in-out 0s infinite alternate-reverse none running aurora2;"></div><div class="absolute inset-0 opacity-40" style="background: radial-gradient(700px 500px at 20% 60%, rgba(236, 72, 153, 0.3) 0%, transparent 50%); animation: 10s ease-in-out 0s infinite alternate none running aurora3;"></div><div class="absolute inset-0 opacity-30" style="background: radial-gradient(900px 300px at 60% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 50%); animation: 7s ease-in-out 0s infinite alternate-reverse none running aurora4;"></div></div><div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div></div><div class="relative z-10"><div class="flex flex-col items-center justify-center min-h-screen px-8 text-center"><h1 class="text-6xl font-bold text-white mb-4 tracking-tight">Aurora Magic</h1><p class="text-xl text-gray-300 mb-8 max-w-md">Experience the mesmerizing beauty of dancing lights.</p><button class="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 hover:bg-white/20 transition-all duration-300">Explore More</button></div></div><style>
        @keyframes aurora1 {
          0% { transform: translateX(-100px) translateY(-50px) rotate(0deg) scale(1); }
          50% { transform: translateX(50px) translateY(30px) rotate(180deg) scale(1.1); }
          100% { transform: translateX(100px) translateY(-30px) rotate(360deg) scale(0.9); }
        }
        
        @keyframes aurora2 {
          0% { transform: translateX(80px) translateY(40px) rotate(45deg) scale(0.8); }
          50% { transform: translateX(-30px) translateY(-20px) rotate(225deg) scale(1.2); }
          100% { transform: translateX(-80px) translateY(60px) rotate(405deg) scale(0.9); }
        }
        
        @keyframes aurora3 {
          0% { transform: translateX(-50px) translateY(20px) rotate(90deg) scale(1.1); }
          50% { transform: translateX(70px) translateY(-40px) rotate(270deg) scale(0.8); }
          100% { transform: translateX(-20px) translateY(50px) rotate(450deg) scale(1.0); }
        }
        
        @keyframes aurora4 {
          0% { transform: translateX(30px) translateY(-20px) rotate(135deg) scale(0.9); }
          50% { transform: translateX(-60px) translateY(10px) rotate(315deg) scale(1.1); }
          100% { transform: translateX(40px) translateY(-60px) rotate(495deg) scale(0.8); }
        }
      </style></div></div></div></div>
```

## Reference source files

No reference source files were available.
