# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/muhammad-binsalman/glowing-ai-chat-assistant/default
- Registry URL: https://21st.dev/r/muhammad-binsalman/glowing-ai-chat-assistant
- Author: muhammad-binsalman
- Component slug: glowing-ai-chat-assistant
- Demo slug: default
- Title: glowing-ai-chat-assistant
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/muhammad-binsalman/glowing-ai-chat-assistant with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/muhammad-binsalman__glowing-ai-chat-assistant__default.html
- Local screenshot file: generated-21st-prompts/screenshots/muhammad-binsalman__glowing-ai-chat-assistant__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed bottom-6 right-6 z-50"><button class="floating-ai-button relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 transform rotate-0" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(168, 85, 247, 0.8) 100%); box-shadow: rgba(139, 92, 246, 0.7) 0px 0px 20px, rgba(124, 58, 237, 0.5) 0px 0px 40px, rgba(109, 40, 217, 0.3) 0px 0px 60px; border: 2px solid rgba(255, 255, 255, 0.2);"><div class="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-30"></div><div class="absolute inset-0 rounded-full border-2 border-white/10"></div><div class="relative z-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot w-8 h-8 text-white" aria-hidden="true"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg></div><div class="absolute inset-0 rounded-full animate-ping opacity-20 bg-indigo-500"></div></button><style>
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }
        
        .floating-ai-button:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.9), 0 0 50px rgba(124, 58, 237, 0.7), 0 0 70px rgba(109, 40, 217, 0.5);
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.