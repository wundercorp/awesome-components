# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/Kain0127/blur-text-animation/default
- Registry URL: https://21st.dev/r/Kain0127/blur-text-animation
- Author: Kain0127
- Component slug: blur-text-animation
- Demo slug: default
- Title: blur-text-animation
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/Kain0127/blur-text-animation with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/Kain0127__blur-text-animation__default.html
- Local screenshot file: generated-21st-prompts/screenshots/Kain0127__blur-text-animation__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen bg-black "><div class="text-center max-w-5xl px-8"><p class="text-white text-4xl md:text-5xl lg:text-6xl font-['Avenir_Next',_'Avenir',_system-ui,_sans-serif] font-light leading-relaxed tracking-wide"><span class="inline-block transition-all opacity-100" style="transition-duration: 2.5s; transition-delay: -0.022969s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); filter: blur(0px) brightness(1); transform: translateY(0px) scale(1) rotateX(0deg); margin-right: 0.35em; will-change: filter, transform, opacity; transform-style: preserve-3d; backface-visibility: hidden; text-shadow: rgba(255, 255, 255, 0.1) 0px 2px 8px;">Elegant</span><span class="inline-block transition-all opacity-100" style="transition-duration: 2.4866s; transition-delay: 0.121492s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); filter: blur(0px) brightness(1); transform: translateY(0px) scale(1) rotateX(0deg); margin-right: 0.35em; will-change: filter, transform, opacity; transform-style: preserve-3d; backface-visibility: hidden; text-shadow: rgba(255, 255, 255, 0.1) 0px 2px 8px;">blur</span><span class="inline-block transition-all opacity-100" style="transition-duration: 2.4476s; transition-delay: 0.257439s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); filter: blur(0px) brightness(1); transform: translateY(0px) scale(1) rotateX(0deg); margin-right: 0.35em; will-change: filter, transform, opacity; transform-style: preserve-3d; backface-visibility: hidden; text-shadow: rgba(255, 255, 255, 0.1) 0px 2px 8px;">animation</span><span class="inline-block transition-all opacity-100" style="transition-duration: 2.38648s; transition-delay: 0.352024s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); filter: blur(0px) brightness(1); transform: translateY(0px) scale(1) rotateX(0deg); margin-right: 0.35em; will-change: filter, transform, opacity; transform-style: preserve-3d; backface-visibility: hidden; text-shadow: rgba(255, 255, 255, 0.1) 0px 2px 8px;">that</span><span class="inline-block transition-all opacity-100" style="transition-duration: 2.30871s; transition-delay: 0.436452s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); filter: blur(0px) brightness(1); transform: translateY(0px) scale(1) rotateX(0deg); margin-right: 0.35em; will-change: filter, transform, opacity; transform-style: preserve-3d; backface-visibility: hidden; text-shadow: rgba(255, 255, 255, 0.1) 0px 2px 8px;">brings</span><span class="inline-block transition-all opacity-100" style="transition-duration: 2.22122s; transition-delay: 0.558522s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); filter: blur(0px) brightness(1); transform: translateY(0px) scale(1) rotateX(0deg); margin-right: 0.35em; will-change: filter, transform, opacity; transform-style: preserve-3d; backface-visibility: hidden; text-shadow: rgba(255, 255, 255, 0.1) 0px 2px 8px;">your</span><span class="inline-block transition-all opacity-100" style="transition-duration: 2.13184s; transition-delay: 0.641112s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); filter: blur(0px) brightness(1); transform: translateY(0px) scale(1) rotateX(0deg); margin-right: 0.35em; will-change: filter, transform, opacity; transform-style: preserve-3d; backface-visibility: hidden; text-shadow: rgba(255, 255, 255, 0.1) 0px 2px 8px;">words</span><span class="inline-block transition-all opacity-100" style="transition-duration: 2.04855s; transition-delay: 0.748731s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); filter: blur(0px) brightness(1); transform: translateY(0px) scale(1) rotateX(0deg); margin-right: 0.35em; will-change: filter, transform, opacity; transform-style: preserve-3d; backface-visibility: hidden; text-shadow: rgba(255, 255, 255, 0.1) 0px 2px 8px;">to</span><span class="inline-block transition-all opacity-100" style="transition-duration: 1.97878s; transition-delay: 0.832406s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); filter: blur(0px) brightness(1); transform: translateY(0px) scale(1) rotateX(0deg); margin-right: 0.35em; will-change: filter, transform, opacity; transform-style: preserve-3d; backface-visibility: hidden; text-shadow: rgba(255, 255, 255, 0.1) 0px 2px 8px;">life</span><span class="inline-block transition-all opacity-100" style="transition-duration: 1.92878s; transition-delay: 0.944181s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); filter: blur(0px) brightness(1); transform: translateY(0px) scale(1) rotateX(0deg); margin-right: 0.35em; will-change: filter, transform, opacity; transform-style: preserve-3d; backface-visibility: hidden; text-shadow: rgba(255, 255, 255, 0.1) 0px 2px 8px;">with</span><span class="inline-block transition-all opacity-100" style="transition-duration: 1.903s; transition-delay: 1.04011s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); filter: blur(0px) brightness(1); transform: translateY(0px) scale(1) rotateX(0deg); margin-right: 0.35em; will-change: filter, transform, opacity; transform-style: preserve-3d; backface-visibility: hidden; text-shadow: rgba(255, 255, 255, 0.1) 0px 2px 8px;">cinematic</span><span class="inline-block transition-all opacity-100" style="transition-duration: 1.90376s; transition-delay: 1.15054s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); filter: blur(0px) brightness(1); transform: translateY(0px) scale(1) rotateX(0deg); margin-right: 0.35em; will-change: filter, transform, opacity; transform-style: preserve-3d; backface-visibility: hidden; text-shadow: rgba(255, 255, 255, 0.1) 0px 2px 8px;">transitions.</span></p></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.