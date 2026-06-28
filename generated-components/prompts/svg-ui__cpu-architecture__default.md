# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/svg-ui/cpu-architecture/default
- Registry URL: https://21st.dev/r/svg-ui/cpu-architecture
- Author: svg-ui
- Component slug: cpu-architecture
- Demo slug: default
- Title: cpu-architecture
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/svg-ui/cpu-architecture with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/svg-ui__cpu-architecture__default.html
- Local screenshot file: generated-21st-prompts/screenshots/svg-ui__cpu-architecture__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="p-4 rounded-xl bg-accent/20"><svg class="text-muted" width="100%" height="100%" viewBox="0 0 200 100"><g stroke="currentColor" fill="none" stroke-width="0.3" stroke-dasharray="100 100" pathLength="100" marker-start="url(#cpu-circle-marker)"><path stroke-dasharray="100 100" pathLength="100" d="M 10 20 h 79.5 q 5 0 5 5 v 30"></path><path stroke-dasharray="100 100" pathLength="100" d="M 180 10 h -69.7 q -5 0 -5 5 v 30"></path><path d="M 130 20 v 21.8 q 0 5 -5 5 h -10"></path><path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50"></path><path stroke-dasharray="100 100" pathLength="100" d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"></path><path d="M 94.8 95 v -36"></path><path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14"></path><path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20"></path><animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1"></animate></g><g mask="url(#cpu-mask-1)"><circle class="cpu-architecture cpu-line-1" cx="0" cy="0" r="8" fill="url(#cpu-blue-grad)"></circle></g><g mask="url(#cpu-mask-2)"><circle class="cpu-architecture cpu-line-2" cx="0" cy="0" r="8" fill="url(#cpu-yellow-grad)"></circle></g><g mask="url(#cpu-mask-3)"><circle class="cpu-architecture cpu-line-3" cx="0" cy="0" r="8" fill="url(#cpu-pinkish-grad)"></circle></g><g mask="url(#cpu-mask-4)"><circle class="cpu-architecture cpu-line-4" cx="0" cy="0" r="8" fill="url(#cpu-white-grad)"></circle></g><g mask="url(#cpu-mask-5)"><circle class="cpu-architecture cpu-line-5" cx="0" cy="0" r="8" fill="url(#cpu-green-grad)"></circle></g><g mask="url(#cpu-mask-6)"><circle class="cpu-architecture cpu-line-6" cx="0" cy="0" r="8" fill="url(#cpu-orange-grad)"></circle></g><g mask="url(#cpu-mask-7)"><circle class="cpu-architecture cpu-line-7" cx="0" cy="0" r="8" fill="url(#cpu-cyan-grad)"></circle></g><g mask="url(#cpu-mask-8)"><circle class="cpu-architecture cpu-line-8" cx="0" cy="0" r="8" fill="url(#cpu-rose-grad)"></circle></g><g><g fill="url(#cpu-connection-gradient)"><rect x="93" y="37" width="2.5" height="5" rx="0.7"></rect><rect x="104" y="37" width="2.5" height="5" rx="0.7"></rect><rect x="116.3" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)"></rect><rect x="122.8" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)"></rect><rect x="104" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)"></rect><rect x="114.5" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)"></rect><rect x="80" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)"></rect><rect x="87" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)"></rect></g><rect x="85" y="40" width="30" height="20" rx="2" fill="#181818" filter="url(#cpu-light-shadow)"></rect><text x="92" y="52.5" font-size="7" fill="url(#cpu-text-gradient)" font-weight="600" letter-spacing="0.05em">CPU</text></g><defs><mask id="cpu-mask-1"><path d="M 10 20 h 79.5 q 5 0 5 5 v 24" stroke-width="0.5" stroke="white"></path></mask><mask id="cpu-mask-2"><path d="M 180 10 h -69.7 q -5 0 -5 5 v 24" stroke-width="0.5" stroke="white"></path></mask><mask id="cpu-mask-3"><path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" stroke-width="0.5" stroke="white"></path></mask><mask id="cpu-mask-4"><path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" stroke-width="0.5" stroke="white"></path></mask><mask id="cpu-mask-5"><path d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" stroke-width="0.5" stroke="white"></path></mask><mask id="cpu-mask-6"><path d="M 94.8 95 v -36" stroke-width="0.5" stroke="white"></path></mask><mask id="cpu-mask-7"><path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" stroke-width="0.5" stroke="white"></path></mask><mask id="cpu-mask-8"><path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" stroke-width="0.5" stroke="white"></path></mask><radialGradient id="cpu-blue-grad" fx="1"><stop offset="0%" stop-color="#00E8ED"></stop><stop offset="50%" stop-color="#08F"></stop><stop offset="100%" stop-color="transparent"></stop></radialGradient><radialGradient id="cpu-yellow-grad" fx="1"><stop offset="0%" stop-color="#FFD800"></stop><stop offset="50%" stop-color="#FFD800"></stop><stop offset="100%" stop-color="transparent"></stop></radialGradient><radialGradient id="cpu-pinkish-grad" fx="1"><stop offset="0%" stop-color="#830CD1"></stop><stop offset="50%" stop-color="#FF008B"></stop><stop offset="100%" stop-color="transparent"></stop></radialGradient><radialGradient id="cpu-white-grad" fx="1"><stop offset="0%" stop-color="white"></stop><stop offset="100%" stop-color="transparent"></stop></radialGradient><radialGradient id="cpu-green-grad" fx="1"><stop offset="0%" stop-color="#22c55e"></stop><stop offset="100%" stop-color="transparent"></stop></radialGradient><radialGradient id="cpu-orange-grad" fx="1"><stop offset="0%" stop-color="#f97316"></stop><stop offset="100%" stop-color="transparent"></stop></radialGradient><radialGradient id="cpu-cyan-grad" fx="1"><stop offset="0%" stop-color="#06b6d4"></stop><stop offset="100%" stop-color="transparent"></stop></radialGradient><radialGradient id="cpu-rose-grad" fx="1"><stop offset="0%" stop-color="#f43f5e"></stop><stop offset="100%" stop-color="transparent"></stop></radialGradient><filter id="cpu-light-shadow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="1.5" dy="1.5" stdDeviation="1" flood-color="black" flood-opacity="0.1"></feDropShadow></filter><marker id="cpu-circle-marker" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="18" markerHeight="18"><circle id="innerMarkerCircle" cx="5" cy="5" r="2" fill="black" stroke="#232323" stroke-width="0.5"><animate attributeName="r" values="0; 3; 2" dur="0.5s"></animate></circle></marker><linearGradient id="cpu-connection-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4F4F4F"></stop><stop offset="60%" stop-color="#121214"></stop></linearGradient><linearGradient id="cpu-text-gradient" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#666666"><animate attributeName="offset" values="-2; -1; 0" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate></stop><stop offset="25%" stop-color="white"><animate attributeName="offset" values="-1; 0; 1" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate></stop><stop offset="50%" stop-color="#666666"><animate attributeName="offset" values="0; 1; 2;" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate></stop></linearGradient></defs></svg></div></div></div></div>
```

## Public registry source files

No public registry source files were available.