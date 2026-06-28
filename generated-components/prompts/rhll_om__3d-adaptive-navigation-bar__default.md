# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/rhll_om/3d-adaptive-navigation-bar/default
- Registry URL: https://21st.dev/r/rhll_om/3d-adaptive-navigation-bar
- Author: rhll_om
- Component slug: 3d-adaptive-navigation-bar
- Demo slug: default
- Title: 3d-adaptive-navigation-bar
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/rhll_om/3d-adaptive-navigation-bar with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/rhll_om__3d-adaptive-navigation-bar__default.html
- Local screenshot file: generated-21st-prompts/screenshots/rhll_om__3d-adaptive-navigation-bar__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div style="background: rgb(255, 255, 255); min-height: 100vh; display: flex; align-items: center; justify-content: center;"><nav class="relative rounded-full" style="height: 56px; background: linear-gradient(135deg, rgb(252, 252, 253) 0%, rgb(248, 248, 250) 15%, rgb(243, 244, 246) 30%, rgb(238, 239, 242) 45%, rgb(233, 234, 237) 60%, rgb(228, 229, 232) 75%, rgb(222, 224, 227) 90%, rgb(226, 227, 230) 100%); box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px, rgba(0, 0, 0, 0.1) 0px 8px 16px, rgba(0, 0, 0, 0.08) 0px 16px 32px, rgba(0, 0, 0, 0.12) 0px 1px 2px, rgba(255, 255, 255, 0.7) 0px 2px 1px inset, rgba(0, 0, 0, 0.1) 0px -2px 6px inset, rgba(0, 0, 0, 0.08) 2px 2px 8px inset, rgba(0, 0, 0, 0.07) -2px 2px 8px inset, rgba(0, 0, 0, 0.15) 0px 0px 1px inset; overflow: hidden; transition: box-shadow 0.3s ease-out; width: 140px; transform: none;"><div class="absolute inset-x-0 top-0 rounded-t-full pointer-events-none" style="height: 2px; background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.95) 5%, rgb(255, 255, 255) 15%, rgb(255, 255, 255) 85%, rgba(255, 255, 255, 0.95) 95%, rgba(255, 255, 255, 0) 100%); filter: blur(0.3px);"></div><div class="absolute inset-x-0 top-0 rounded-full pointer-events-none" style="height: 55%; background: linear-gradient(rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.25) 30%, rgba(255, 255, 255, 0.1) 60%, rgba(255, 255, 255, 0) 100%);"></div><div class="absolute inset-0 rounded-full pointer-events-none" style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.08) 40%, rgba(255, 255, 255, 0) 65%);"></div><div class="absolute rounded-full pointer-events-none" style="left: 15%; top: 16%; width: 60px; height: 14px; background: radial-gradient(rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.35) 40%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0) 100%); filter: blur(4px); transform: rotate(-12deg); transition: 0.3s;"></div><div class="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none" style="height: 50%; background: linear-gradient(0deg, rgba(0, 0, 0, 0.14) 0%, rgba(0, 0, 0, 0.08) 25%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0) 100%);"></div><div class="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none" style="height: 20%; background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%); filter: blur(2px);"></div><div class="absolute inset-0 rounded-full pointer-events-none" style="box-shadow: rgba(255, 255, 255, 0.22) 0px 0px 40px inset; opacity: 0.7;"></div><div class="absolute inset-0 rounded-full pointer-events-none" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset;"></div><div class="relative z-10 h-full flex items-center justify-center px-6" style="font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;SF Pro&quot;, Poppins, sans-serif;"><div class="flex items-center relative"><span style="font-size: 15.5px; font-weight: 680; color: rgb(26, 26, 26); letter-spacing: 0.45px; white-space: nowrap; font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;SF Pro Display&quot;, Poppins, sans-serif; -webkit-font-smoothing: antialiased; text-shadow: rgba(0, 0, 0, 0.35) 0px 1px 0px, rgba(255, 255, 255, 0.8) 0px -1px 0px, rgba(0, 0, 0, 0.18) 1px 1px 0px, rgba(0, 0, 0, 0.15) -1px 1px 0px; opacity: 1; filter: blur(0px); transform: none;">Home</span></div></div></nav></div></div></div></div>
```

## Public registry source files

No public registry source files were available.