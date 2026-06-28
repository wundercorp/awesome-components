# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/gradient-reveal-text/default
- Registry URL: https://21st.dev/r/ruixenui/gradient-reveal-text
- Author: ruixenui
- Component slug: gradient-reveal-text
- Demo slug: default
- Title: gradient-reveal-text
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/gradient-reveal-text with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__gradient-reveal-text__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__gradient-reveal-text__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="p-8 space-y-8"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Hover-triggered Gradient Reveal</h3></div><div class="p-6 pt-0"><span><span class="inline rounded-md p-1" style="background-image: linear-gradient(to right, rgb(6, 182, 212), rgb(59, 130, 246)); background-size: 0% 100%; background-position: 0% 0%; background-repeat: no-repeat; -webkit-box-decoration-break: clone; box-decoration-break: clone; transition: background-size 0.8s; color: black;">Hover Me</span></span></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Auto-triggered Gradient Reveal</h3></div><div class="p-6 pt-0"><span><span class="inline rounded-md p-1" style="background-image: linear-gradient(rgb(59, 130, 246), rgb(6, 182, 212)); background-size: 100% 100%; background-position: 0% 0%; background-repeat: no-repeat; -webkit-box-decoration-break: clone; box-decoration-break: clone; transition: background-size 0.8s; color: white;">Auto Reveal</span></span><div class="mt-4"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-9 px-4 py-2">Animate</button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-9 px-4 py-2 ml-2">Reset</button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.