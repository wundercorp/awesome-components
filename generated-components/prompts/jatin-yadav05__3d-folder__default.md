# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jatin-yadav05/3d-folder/default
- Registry URL: https://21st.dev/r/jatin-yadav05/3d-folder
- Author: jatin-yadav05
- Component slug: 3d-folder
- Demo slug: default
- Title: 3d-folder
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jatin-yadav05/3d-folder with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jatin-yadav05__3d-folder__default.html
- Local screenshot file: generated-21st-prompts/screenshots/jatin-yadav05__3d-folder__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="min-h-screen bg-background flex items-center justify-center w-full"><section class="max-w-6xl mx-auto px-6 py-16"><div class="flex items-center justify-center w-full"><div class="relative flex flex-col items-center justify-center p-8 rounded-2xl cursor-pointer bg-card border border-border transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30 group" style="min-width: 280px; min-height: 320px; perspective: 1000px;"><div class="absolute inset-0 rounded-2xl transition-opacity duration-500" style="background: radial-gradient(circle at 50% 70%, var(--accent) 0%, transparent 70%); opacity: 0;"></div><div class="relative flex items-center justify-center mb-4" style="height: 160px; width: 200px;"><div class="absolute w-32 h-24 bg-folder-back rounded-lg shadow-md" style="transform-origin: center bottom; transform: rotateX(0deg); transition: transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1); z-index: 10;"></div><div class="absolute w-12 h-4 bg-folder-tab rounded-t-md" style="top: calc(50% - 60px); left: calc(50% - 48px); transform-origin: center bottom; transform: rotateX(0deg); transition: transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1); z-index: 10;"></div><div class="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 20;"><div class="absolute w-20 h-28 rounded-lg overflow-hidden shadow-xl bg-card border border-border cursor-pointer hover:ring-2 hover:ring-accent/50" style="transform: translateY(0px) translateX(0px) rotate(0deg) scale(0.5); opacity: 0; transition: 600ms cubic-bezier(0.34, 1.56, 0.64, 1); z-index: 10; left: -40px; top: -56px;"><img alt="Lumnia" class="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1723489242223-865b4a8cf7b8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0"><div class="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div><p class="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-medium text-primary-foreground truncate">Lumnia</p></div><div class="absolute w-20 h-28 rounded-lg overflow-hidden shadow-xl bg-card border border-border cursor-pointer hover:ring-2 hover:ring-accent/50" style="transform: translateY(0px) translateX(0px) rotate(0deg) scale(0.5); opacity: 0; transition: 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 80ms; z-index: 9; left: -40px; top: -56px;"><img alt="Prism" class="w-full h-full object-cover" src="https://i.pinimg.com/1200x/99/ca/5c/99ca5cf82cf12df8801f7b2bef38d325.jpg"><div class="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div><p class="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-medium text-primary-foreground truncate">Prism</p></div><div class="absolute w-20 h-28 rounded-lg overflow-hidden shadow-xl bg-card border border-border cursor-pointer hover:ring-2 hover:ring-accent/50" style="transform: translateY(0px) translateX(0px) rotate(0deg) scale(0.5); opacity: 0; transition: 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 160ms; z-index: 8; left: -40px; top: -56px;"><img alt="Vertex" class="w-full h-full object-cover" src="https://i.pinimg.com/736x/7c/15/39/7c1539cf7ff0207cb49ce0d338de1e5f.jpg"><div class="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div><p class="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-medium text-primary-foreground truncate">Vertex</p></div></div><div class="absolute w-32 h-24 bg-folder-front rounded-lg shadow-lg" style="top: calc(50% - 44px); transform-origin: center bottom; transform: rotateX(0deg); transition: transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1); z-index: 30;"></div><div class="absolute w-32 h-24 rounded-lg overflow-hidden pointer-events-none" style="top: calc(50% - 44px); background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%); transform-origin: center bottom; transform: rotateX(0deg); transition: transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1); z-index: 31;"></div></div><h3 class="text-lg font-semibold text-foreground mt-4 transition-all duration-300" style="transform: translateY(0px);">Branding</h3><p class="text-sm text-muted-foreground transition-all duration-300" style="opacity: 1;">3 projects</p><div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs text-muted-foreground transition-all duration-300" style="opacity: 0.6; transform: translateY(0px);"><span>Hover to explore</span></div></div></div></section></main></div></div></div>
```

## Public registry source files

No public registry source files were available.