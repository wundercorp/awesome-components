# Build Bar Chart in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Bar Chart screenshot](screenshot.png)

## Component

- Author group: `bklit`
- Component: `bar-chart`
- Variant: `bar-chart-stacked`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: Bklit
- Component slug: bar-chart
- Demo slug: bar-chart-stacked
- Title: bar-chart
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full"><div class="relative w-full" style="aspect-ratio: 2 / 1; touch-action: none;"><div style="width: 100%; height: 100%;"><svg aria-hidden="true" height="496" width="992"><rect fill="transparent" height="496" width="992" x="0" y="0"></rect><g transform="translate(40,40)" style="cursor: crosshair; touch-action: none;"><rect fill="transparent" height="416" width="912" x="0" y="0"></rect><g class="chart-grid"><defs><linearGradient id="grid-rows-fade-«r0»-gradient" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="0%" style="stop-color: white; stop-opacity: 0;"></stop><stop offset="10%" style="stop-color: white; stop-opacity: 1;"></stop><stop offset="90%" style="stop-color: white; stop-opacity: 1;"></stop><stop offset="100%" style="stop-color: white; stop-opacity: 0;"></stop></linearGradient><mask id="grid-rows-fade-«r0»"><rect fill="url(#grid-rows-fade-«r0»-gradient)" height="416" width="912" x="0" y="0"></rect></mask></defs><g mask="url(#grid-rows-fade-«r0»)"><g class="visx-group visx-rows" transform="translate(0, 0)"><line class="visx-line" x1="0" y1="416" x2="912" y2="416" fill="transparent" shape-rendering="crispEdges" stroke="var(--chart-grid)" stroke-width="1" stroke-dasharray="4,4" stroke-opacity="1"></line><line class="visx-line" x1="0" y1="340.3636363636363" x2="912" y2="340.3636363636363" fill="transparent" shape-rendering="crispEdges" stroke="var(--chart-grid)" stroke-width="1" stroke-dasharray="4,4" stroke-opacity="1"></line><line class="visx-line" x1="0" y1="264.72727272727275" x2="912" y2="264.72727272727275" fill="transparent" shape-rendering="crispEdges" stroke="var(--chart-grid)" stroke-width="1" stroke-dasharray="4,4" stroke-opacity="1"></line><line class="visx-line" x1="0" y1="189.09090909090912" x2="912" y2="189.09090909090912" fill="transparent" shape-rendering="crispEdges" stroke="var(--chart-grid)" stroke-width="1" stroke-dasharray="4,4" stroke-opacity="1"></line><line class="visx-line" x1="0" y1="113.45454545454544" x2="912" y2="113.45454545454544" fill="transparent" shape-rendering="crispEdges" stroke="var(--chart-grid)" stroke-width="1" stroke-dasharray="4,4" stroke-opacity="1"></line><line class="visx-line" x1="0" y1="37.81818181818183" x2="912" y2="37.81818181818183" fill="transparent" shape-rendering="crispEdges" stroke="var(--chart-grid)" stroke-width="1" stroke-dasharray="4,4" stroke-opacity="1"></line></g></g></g><path d="M29.419354838709694,416 L29.419354838709694,264.72727272727275 Q29.419354838709694,264.72727272727275 29.419354838709694,264.72727272727275 L147.0967741935484,264.72727272727275 Q147.0967741935484,264.72727272727275 147.0967741935484,264.72727272727275 L147.0967741935484,416Z" fill="var(--chart-1)" opacity="1" style="transform-origin: 50% 50%; transform: scaleY(0.99997); transform-box: fill-box;"></path><path d="M176.51612903225808,416 L176.51612903225808,226.90909090909088 Q176.51612903225808,226.90909090909088 176.51612903225808,226.90909090909088 L294.1935483870968,226.90909090909088 Q294.1935483870968,226.90909090909088 294.1935483870968,226.90909090909088 L294.1935483870968,416Z" fill="var(--chart-1)" opacity="1" style="transform-origin: 50% 50%; transform: scaleY(0.998062); transform-box: fill-box;"></path><path d="M323.61290322580646,416 L323.61290322580646,283.6363636363637 Q323.61290322580646,283.6363636363637 323.61290322580646,283.6363636363637 L441.2903225806452,283.6363636363637 Q441.2903225806452,283.6363636363637 441.2903225806452,283.6363636363637 L441.2903225806452,416Z" fill="var(--chart-1)" opacity="1" style="transform-origin: 50% 50%; transform: scaleY(0.992596); transform-box: fill-box;"></path><path d="M470.7096774193548,416 L470.7096774193548,257.16363636363633 Q470.7096774193548,257.16363636363633 470.7096774193548,257.16363636363633 L588.3870967741935,257.16363636363633 Q588.3870967741935,257.16363636363633 588.3870967741935,257.16363636363633 L588.3870967741935,416Z" fill="var(--chart-1)" opacity="1" style="transform-origin: 50% 50%; transform: scaleY(0.982748); transform-box: fill-box;"></path><path d="M617.8064516129032,416 L617.8064516129032,272.2909090909091 Q617.8064516129032,272.2909090909091 617.8064516129032,272.2909090909091 L735.483870967742,272.2909090909091 Q735.483870967742,272.2909090909091 735.483870967742,272.2909090909091 L735.483870967742,416Z" fill="var(--chart-1)" opacity="1" style="transform-origin: 50% 50%; transform: scaleY(0.967155); transform-box: fill-box;"></path><path d="M764.9032258064517,416 L764.9032258064517,208 Q764.9032258064517,208 764.9032258064517,208 L882.5806451612905,208 Q882.5806451612905,208 882.5806451612905,208 L882.5806451612905,416Z" fill="var(--chart-1)" opacity="1" style="transform-origin: 50% 50%; transform: scaleY(0.943189); transform-box: fill-box;"></path><path d="M29.419354838709694,264.72727272727275 L29.419354838709694,176.9636363636364 Q29.419354838709694,176.9636363636364 29.419354838709694,176.9636363636364 L147.0967741935484,176.9636363636364 Q147.0967741935484,176.9636363636364 147.0967741935484,176.9636363636364 L147.0967741935484,264.72727272727275Z" fill="var(--chart-3)" opacity="1" style="transform-origin: 50% 50%; transform: scaleY(0.99997); transform-box: fill-box;"></path><path d="M176.51612903225808,226.90909090909088 L176.51612903225808,116.45454545454544 Q176.51612903225808,116.45454545454544 176.51612903225808,116.45454545454544 L294.1935483870968,116.45454545454544 Q294.1935483870968,116.45454545454544 294.1935483870968,116.45454545454544 L294.1935483870968,226.90909090909088Z" fill="var(--chart-3)" opacity="1" style="transform-origin: 50% 50%; transform: scaleY(0.998062); transform-box: fill-box;"></path><path d="M323.61290322580646,283.6363636363637 L323.61290322580646,180.7454545454546 Q323.61290322580646,180.7454545454546 323.61290322580646,180.7454545454546 L441.2903225806452,180.7454545454546 Q441.2903225806452,180.7454545454546 441.2903225806452,180.7454545454546 L441.2903225806452,283.6363636363637Z" fill="var(--chart-3)" opacity="1" style="transform-origin: 50% 50%; transform: scaleY(0.992596); transform-box: fill-box;"></path><path d="M470.7096774193548,257.16363636363633 L470.7096774193548,139.14545454545453 Q470.7096774193548,139.14545454545453 470.7096774193548,139.14545454545453 L588.3870967741935,139.14545454545453 Q588.3870967741935,139.14545454545453 588.3870967741935,139.14545454545453 L588.3870967741935,257.16363636363633Z" fill="var(--chart-3)" opacity="1" style="transform-origin: 50% 50%; transform: scaleY(0.982748); transform-box: fill-box;"></path><path d="M617.8064516129032,272.2909090909091 L617.8064516129032,176.9636363636364 Q617.8064516129032,176.9636363636364 617.8064516129032,176.9636363636364 L735.483870967742,176.9636363636364 Q735.483870967742,176.9636363636364 735.483870967742,176.9636363636364 L735.483870967742,272.2909090909091Z" fill="var(--chart-3)" opacity="1" style="transform-origin: 50% 50%; transform: scaleY(0.967155); transform-box: fill-box;"></path><path d="M764.9032258064517,208 L764.9032258064517,67.29090909090911 Q764.9032258064517,67.29090909090911 764.9032258064517,67.29090909090911 L882.5806451612905,67.29090909090911 Q882.5806451612905,67.29090909090911 882.5806451612905,67.29090909090911 L882.5806451612905,208Z" fill="var(--chart-3)" opacity="1" style="transform-origin: 50% 50%; transform: scaleY(0.943189); transform-box: fill-box;"></path></g></svg></div><div class="pointer-events-none absolute inset-0"><div class="absolute" style="left: 128.258px; bottom: 12px; width: 0px; display: flex; justify-content: center;"><span class="whitespace-nowrap text-chart-label text-xs" style="opacity: 1;">Jan</span></div><div class="absolute" style="left: 275.355px; bottom: 12px; width: 0px; display: flex; justify-content: center;"><span class="whitespace-nowrap text-chart-label text-xs" style="opacity: 1;">Feb</span></div><div class="absolute" style="left: 422.452px; bottom: 12px; width: 0px; display: flex; justify-content: center;"><span class="whitespace-nowrap text-chart-label text-xs" style="opacity: 1;">Mar</span></div><div class="absolute" style="left: 569.548px; bottom: 12px; width: 0px; display: flex; justify-content: center;"><span class="whitespace-nowrap text-chart-label text-xs" style="opacity: 1;">Apr</span></div><div class="absolute" style="left: 716.645px; bottom: 12px; width: 0px; display: flex; justify-content: center;"><span class="whitespace-nowrap text-chart-label text-xs" style="opacity: 1;">May</span></div><div class="absolute" style="left: 863.742px; bottom: 12px; width: 0px; display: flex; justify-content: center;"><span class="whitespace-nowrap text-chart-label text-xs" style="opacity: 1;">Jun</span></div></div><svg aria-hidden="true" class="pointer-events-none absolute inset-0" height="100%" width="100%"><g transform="translate(40,40)"></g></svg></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
