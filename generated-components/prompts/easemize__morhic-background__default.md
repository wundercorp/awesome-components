# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/easemize/morhic-background/default
- Registry URL: https://21st.dev/r/easemize/morhic-background
- Author: easemize
- Component slug: morhic-background
- Demo slug: default
- Title: morhic-background
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/easemize/morhic-background with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/easemize__morhic-background__default.html
- Local screenshot file: generated-21st-prompts/screenshots/easemize__morhic-background__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_Customized_Customized">Customized</option><option value="named_Default_Default">Default</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div id="particles" class="absolute inset-0 z-1 [filter:url('#goo')] pointer-events-none"><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(-94.5698px) translateY(841.353px) scale(2.14946) rotate(-202.647deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(254.85px) translateY(854.205px) scale(2.07018) rotate(-189.795deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(560.801px) translateY(942.714px) scale(0.785266) rotate(-101.286deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(203.603px) translateY(907.964px) scale(0.860352) rotate(-136.036deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(74.2295px) translateY(885.107px) scale(2.28364) rotate(-158.893deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(713.886px) translateY(928.217px) scale(1.02123) rotate(-115.783deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(451.194px) translateY(899.161px) scale(2.20736) rotate(144.839deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(-1.93659px) translateY(909.875px) scale(2.01311) rotate(-134.125deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(841.977px) translateY(932.879px) scale(1.98835) rotate(111.121deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(338.295px) translateY(954.922px) scale(2.29555) rotate(89.0775deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(393.488px) translateY(974.305px) scale(0.545339) rotate(69.6947deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(503.558px) translateY(951.237px) scale(2.26228) rotate(92.7632deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(505.055px) translateY(986.716px) scale(0.885765) rotate(-57.2837deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(372.043px) translateY(988.267px) scale(2.0302) rotate(55.7327deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(368.939px) translateY(986.226px) scale(1.94498) rotate(57.7741deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(294.643px) translateY(1004.69px) scale(1.00505) rotate(39.3147deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(1133.83px) translateY(1009.35px) scale(0.910878) rotate(34.6545deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(502.706px) translateY(1011.17px) scale(1.18113) rotate(-32.8289deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(503.708px) translateY(1022.03px) scale(0.817756) rotate(-21.9734deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(531.001px) translateY(1024.21px) scale(1.51828) rotate(-19.7865deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(479.343px) translateY(1037.36px) scale(0.615096) rotate(-6.63785deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg><svg viewBox="0 0 67.4 67.4" style="position: absolute; width: 30px; height: 30px; transform: translateX(523.239px) translateY(1041.22px) scale(1.74542) rotate(-2.77835deg);"><circle cx="33.7" cy="33.7" r="33.7" fill="hotpink"></circle></svg></div><div class="absolute inset-0 -z-20 bg-secondary dark:bg-background"></div><svg class="absolute w-0 h-0"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12"></feGaussianBlur><feColorMatrix in="blur" result="colormatrix" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"></feColorMatrix><feBlend in="SourceGraphic" in2="colormatrix"></feBlend></filter></defs></svg></div></div>
```

## Public registry source files

No public registry source files were available.