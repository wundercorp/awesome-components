# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/airbnb/patterns/default
- Registry URL: https://21st.dev/r/airbnb/patterns
- Author: airbnb
- Component slug: patterns
- Demo slug: default
- Title: patterns
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/airbnb/patterns with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/airbnb__patterns__default.html
- Local screenshot file: generated-21st-prompts/screenshots/airbnb__patterns__default.png

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
<div id="root"><div class="flex w-full h-screen justify-center items-center bg-gray-100"><svg width="800" height="600"><rect x="0" y="0" width="800" height="600" fill="#f5f2e3" rx="14"></rect><g class="visx-group" transform="translate(0, 0)"><defs><pattern id="visx-pattern-demo-0" width="6" height="6" patternUnits="userSpaceOnUse"><path class="visx-pattern-line" d="M 3, 0 l 0, 6" stroke="black" stroke-width="1" stroke-linecap="square" shape-rendering="auto"></path></pattern></defs><rect class="visx-bar" fill="url(#visx-pattern-demo-0)" x="0" y="0" width="266.6666666666667" height="173.33333333333334" rx="14"></rect><defs><pattern id="visx-pattern-demo-1" width="10" height="10" patternUnits="userSpaceOnUse"><animateTransform attributeType="xml" attributeName="patternTransform" type="translate" from="0 0" to="0 30" dur="10s" repeatCount="indefinite"></animateTransform><circle cx="5" cy="5" r="3" stroke="none" fill="black" transform-origin="center"></circle></pattern></defs><rect class="visx-bar" fill="url(#visx-pattern-demo-1)" x="266.6666666666667" y="0" width="266.6666666666667" height="173.33333333333334" rx="14"></rect><defs><pattern id="visx-pattern-demo-2" width="6" height="6" patternUnits="userSpaceOnUse"><path class="visx-pattern-line" d="M 0,3 l 6,0" stroke="black" stroke-width="1" stroke-linecap="square" shape-rendering="auto"></path></pattern></defs><rect class="visx-bar" fill="url(#visx-pattern-demo-2)" x="533.3333333333334" y="0" width="266.6666666666667" height="173.33333333333334" rx="14"></rect><defs><pattern id="visx-pattern-demo-3" width="6" height="6" patternUnits="userSpaceOnUse"><path class="visx-pattern-line" d="M 0,6 l 6,-6 M -1.5,1.5 l 3,-3
             M 4.5,7.5 l 3,-3" stroke="black" stroke-width="1" stroke-linecap="square" shape-rendering="auto"></path></pattern></defs><rect class="visx-bar" fill="url(#visx-pattern-demo-3)" x="0" y="173.33333333333334" width="266.6666666666667" height="173.33333333333334" rx="14"></rect><defs><pattern id="visx-pattern-demo-4" width="6" height="6" patternUnits="userSpaceOnUse"><path class="visx-pattern-line" d="M 0,0 l 6,6
        M -1.5,4.5 l 3,3
        M 4.5,-1.5 l 3,3" stroke="black" stroke-width="1" stroke-linecap="square" shape-rendering="auto"></path></pattern></defs><rect class="visx-bar" fill="url(#visx-pattern-demo-4)" x="266.6666666666667" y="173.33333333333334" width="266.6666666666667" height="173.33333333333334" rx="14"></rect><defs><pattern id="visx-pattern-demo-5" width="6" height="6" patternUnits="userSpaceOnUse"><path class="visx-pattern-line" d="M 3, 0 l 0, 6" stroke="black" stroke-width="1" stroke-linecap="square" shape-rendering="auto"></path><path class="visx-pattern-line" d="M 0,3 l 6,0" stroke="black" stroke-width="1" stroke-linecap="square" shape-rendering="auto"></path></pattern></defs><rect class="visx-bar" fill="url(#visx-pattern-demo-5)" x="533.3333333333334" y="173.33333333333334" width="266.6666666666667" height="173.33333333333334" rx="14"></rect><defs><pattern id="visx-pattern-demo-6" width="10" height="10" patternUnits="userSpaceOnUse"><circle class="visx-pattern-circle" cx="5" cy="5" r="2" fill="black"></circle><circle class="visx-pattern-circle visx-pattern-circle-complement" cx="0" cy="0" r="2" fill="black"></circle><circle class="visx-pattern-circle visx-pattern-circle-complement" cx="0" cy="10" r="2" fill="black"></circle><circle class="visx-pattern-circle visx-pattern-circle-complement" cx="10" cy="0" r="2" fill="black"></circle><circle class="visx-pattern-circle visx-pattern-circle-complement" cx="10" cy="10" r="2" fill="black"></circle></pattern></defs><rect class="visx-bar" fill="url(#visx-pattern-demo-6)" x="0" y="346.6666666666667" width="266.6666666666667" height="173.33333333333334" rx="14"></rect><defs><pattern id="visx-pattern-demo-7" width="10" height="10" patternUnits="userSpaceOnUse"><animateTransform attributeType="xml" attributeName="patternTransform" type="translate" from="0 0" to="50 0" dur="10s" repeatCount="indefinite"></animateTransform><path d="M 0 5 c 1.25 -2.5 , 3.75 -2.5 , 5 0
               c 1.25 2.5 , 3.75 2.5 , 5 0 M -5 5
               c 1.25 2.5 , 3.75 2.5 , 5 0 M 10 5
               c 1.25 -2.5 , 3.75 -2.5 , 5 0" fill="none" stroke="black" stroke-width="1"></path></pattern></defs><rect class="visx-bar" fill="url(#visx-pattern-demo-7)" x="266.6666666666667" y="346.6666666666667" width="266.6666666666667" height="173.33333333333334" rx="14"></rect><defs><pattern id="visx-pattern-demo-8" width="6" height="6" patternUnits="userSpaceOnUse"><path class="visx-pattern-path visx-pattern-wave" d="M 0 3 c 0.75 -1.5 , 2.25 -1.5 , 3 0
             c 0.75 1.5 , 2.25 1.5 , 3 0 M -3 3
             c 0.75 1.5 , 2.25 1.5 , 3 0 M 6 3
             c 0.75 -1.5 , 2.25 -1.5 , 3 0" fill="transparent" stroke="black" stroke-width="1" stroke-linecap="square" shape-rendering="auto"></path></pattern></defs><rect class="visx-bar" fill="url(#visx-pattern-demo-8)" x="533.3333333333334" y="346.6666666666667" width="266.6666666666667" height="173.33333333333334" rx="14"></rect></g></svg></div></div>
```

## Public registry source files

No public registry source files were available.