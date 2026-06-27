# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hedevelope/live-visitor/default
- Registry URL: https://21st.dev/r/hedevelope/live-visitor
- Author: hedevelope
- Component slug: live-visitor
- Demo slug: default
- Title: live-visitor
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hedevelope/live-visitor with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hedevelope__live-visitor__default.html
- Local screenshot file: generated-21st-prompts/screenshots/hedevelope__live-visitor__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="demo-container"><div class="visitor-card"><div class="header"><span class="label">Live Visitors</span><span class="pulse-dot"><span class="pulse-ring"></span><span class="pulse-core"></span></span></div><div class="content"><div class="counter"><div class="digit-place"><span class="digit-number" style="transform: translateY(-20px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">0</span><span class="digit-number" style="transform: translateY(0px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">1</span><span class="digit-number" style="transform: translateY(20px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">2</span><span class="digit-number" style="transform: translateY(40px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">3</span><span class="digit-number" style="transform: translateY(60px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">4</span><span class="digit-number" style="transform: translateY(80px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">5</span><span class="digit-number" style="transform: translateY(100px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">6</span><span class="digit-number" style="transform: translateY(-80px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">7</span><span class="digit-number" style="transform: translateY(-60px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">8</span><span class="digit-number" style="transform: translateY(-40px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">9</span></div><div class="digit-place"><span class="digit-number" style="transform: translateY(-60px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">0</span><span class="digit-number" style="transform: translateY(-40px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">1</span><span class="digit-number" style="transform: translateY(-20px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">2</span><span class="digit-number" style="transform: translateY(0px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">3</span><span class="digit-number" style="transform: translateY(20px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">4</span><span class="digit-number" style="transform: translateY(40px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">5</span><span class="digit-number" style="transform: translateY(60px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">6</span><span class="digit-number" style="transform: translateY(80px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">7</span><span class="digit-number" style="transform: translateY(100px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">8</span><span class="digit-number" style="transform: translateY(-80px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">9</span></div><div class="digit-place"><span class="digit-number" style="transform: translateY(80px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">0</span><span class="digit-number" style="transform: translateY(100px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">1</span><span class="digit-number" style="transform: translateY(-80px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">2</span><span class="digit-number" style="transform: translateY(-60px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">3</span><span class="digit-number" style="transform: translateY(-40px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">4</span><span class="digit-number" style="transform: translateY(-20px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">5</span><span class="digit-number" style="transform: translateY(0px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">6</span><span class="digit-number" style="transform: translateY(20px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">7</span><span class="digit-number" style="transform: translateY(40px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">8</span><span class="digit-number" style="transform: translateY(60px); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">9</span></div></div><div class="avatar-stack"><div class="avatar avatar-enter" style="z-index: 10; background-color: rgb(219, 234, 254); animation-delay: 0ms;"><img alt="Visitor 0" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Technologist.png"></div><div class="avatar avatar-enter" style="z-index: 11; background-color: rgb(220, 252, 231); animation-delay: 120ms;"><img alt="Visitor 1" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Student.png"></div><div class="avatar avatar-enter" style="z-index: 12; background-color: rgb(252, 231, 243); animation-delay: 240ms;"><img alt="Visitor 2" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Mechanic.png"></div><div class="avatar avatar-enter" style="z-index: 13; background-color: rgb(255, 237, 213); animation-delay: 360ms;"><img alt="Visitor 3" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Student.png"></div><div class="avatar avatar-enter" style="z-index: 14; background-color: rgb(243, 244, 246); animation-delay: 480ms;"><img alt="Visitor 4" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Teacher.png"></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.