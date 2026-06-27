# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/easemize/svg-blob-animation/default
- Registry URL: https://21st.dev/r/easemize/svg-blob-animation
- Author: easemize
- Component slug: svg-blob-animation
- Demo slug: default
- Title: svg-blob-animation
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/easemize/svg-blob-animation with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/easemize__svg-blob-animation__default.html
- Local screenshot file: generated-21st-prompts/screenshots/easemize__svg-blob-animation__default.png

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
<div id="root"><div class="flex w-full h-screen justify-center items-center"><div id="bg-wrap"><svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="Gradient1" cx="50%" cy="50%" fx="1%" fy="50%" r=".5"><animate attributeName="fx" dur="10s" values="1%;5%;1%" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate><stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop><stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop></radialGradient><radialGradient id="Gradient2" cx="50%" cy="50%" fx="1%" fy="50%" r=".5"><animate attributeName="fx" dur="8s" values="1%;5%;1%" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate><stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient3" cx="50%" cy="50%" fx="1%" fy="50%" r=".5"><animate attributeName="fx" dur="7s" values="1%;5%;1%" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate><stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop></radialGradient></defs><rect x="10%" y="5%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(0 50 50)"><animate attributeName="x" dur="8s" values="10%;0%;10%" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate><animate attributeName="y" dur="9s" values="5%;15%;5%" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="4s" repeatCount="indefinite"></animateTransform></rect><rect x="-10%" y="10%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(0 50 50)"><animate attributeName="x" dur="9s" values="-10%;0%;-10%" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate><animate attributeName="y" dur="10s" values="10%;30%;10%" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="6s" repeatCount="indefinite"></animateTransform></rect><rect x="5%" y="5%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(0 50 50)"><animate attributeName="x" dur="10s" values="5%;15%;5%" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate><animate attributeName="y" dur="7s" values="5%;15%;5%" repeatCount="indefinite" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="5s" repeatCount="indefinite"></animateTransform></rect></svg></div></div></div>
```

## Public registry source files

No public registry source files were available.