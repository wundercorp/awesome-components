# Build Multi Series Bar in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Multi Series Bar screenshot](screenshot.png)

## Component

- Author group: `reaviz`
- Component: `multi-series-bar`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reaviz
- Component slug: multi-series-bar
- Demo slug: default
- Title: multi-series-bar
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
<div id="root"><div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-4 transition-colors duration-300"><style>
        :root {
          --reaviz-tick-fill: #9A9AAF;
          --reaviz-gridline-stroke: #7E7E8F75;
          --reaviz-x-axis-label-fill: #9A9AAF; 
        }
        .dark {
          --reaviz-tick-fill: #A0AEC0; 
          --reaviz-gridline-stroke: rgba(74, 85, 104, 0.6);
          --reaviz-x-axis-label-fill: #A0AEC0;
        }
      </style><div class="flex flex-col pt-4 pb-4 bg-white dark:bg-black rounded-3xl shadow-[11px_21px_3px_rgba(0,0,0,0.06),14px_27px_7px_rgba(0,0,0,0.10),19px_38px_14px_rgba(0,0,0,0.13),27px_54px_27px_rgba(0,0,0,0.16),39px_78px_50px_rgba(0,0,0,0.20),55px_110px_86px_rgba(0,0,0,0.26)] w-full max-w-sm min-h-[400px] overflow-hidden transition-colors duration-300"><h3 class="text-3xl text-left p-7 pt-6 pb-8 font-bold text-gray-900 dark:text-white transition-colors duration-300">Incident Report</h3><div class="flex-grow px-4 reaviz-chart-container"> <div class="_container_1u3dt_1" height="250" style="height: 250px; width: 100%;"><svg width="352" height="250" class="_svg_1u3dt_30 _barChart_sfjii_1" tabindex="0"><g transform="translate(0, 0)"><g style="pointer-events: none;"><line y1="202" y2="202" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="189.375" y2="189.375" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="176.75" y2="176.75" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="164.125" y2="164.125" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="151.5" y2="151.5" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="138.875" y2="138.875" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="126.25" y2="126.25" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="113.625" y2="113.625" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="101" y2="101" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="88.375" y2="88.375" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="75.75" y2="75.75" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="63.125" y2="63.125" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="50.5" y2="50.5" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="37.875" y2="37.875" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="25.25" y2="25.25" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="12.625" y2="12.625" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line y1="0" y2="0" x1="0" x2="352" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line x1="8" x2="8" y1="0" y2="202" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line x1="96" x2="96" y1="0" y2="202" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line x1="184" x2="184" y1="0" y2="202" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line><line x1="272" x2="272" y1="0" y2="202" class="_gridLine_5yx3q_1" stroke-dasharray="2 5" stroke-width="1" stroke="var(--reaviz-gridline-stroke)" fill="none"></line></g><g transform="translate(0, 202)" visibility="visible"><line x1="0" x2="352" y1="0" y2="0.00001" stroke-width="1" stroke="#8F979F"></line><g transform="translate(45, 0)"><line stroke-width="1" stroke="#8F979F" x1="0" x2="0" y1="0" y2="5"></line><g transform="translate(0, 15)" font-size="11" font-family="sans-serif"><title>Firew...</title><text transform="rotate(-45)" text-anchor="end" alignment-baseline="middle" fill="var(--reaviz-x-axis-label-fill)">Firew...</text></g></g><g transform="translate(133, 0)"><line stroke-width="1" stroke="#8F979F" x1="0" x2="0" y1="0" y2="5"></line><g transform="translate(0, 15)" font-size="11" font-family="sans-serif"><title>Endpo...</title><text transform="rotate(-45)" text-anchor="end" alignment-baseline="middle" fill="var(--reaviz-x-axis-label-fill)">Endpo...</text></g></g><g transform="translate(221, 0)"><line stroke-width="1" stroke="#8F979F" x1="0" x2="0" y1="0" y2="5"></line><g transform="translate(0, 15)" font-size="11" font-family="sans-serif"><title>Netwo...</title><text transform="rotate(-45)" text-anchor="end" alignment-baseline="middle" fill="var(--reaviz-x-axis-label-fill)">Netwo...</text></g></g><g transform="translate(309, 0)"><line stroke-width="1" stroke="#8F979F" x1="0" x2="0" y1="0" y2="5"></line><g transform="translate(0, 15)" font-size="11" font-family="sans-serif"><title>Cloud...</title><text transform="rotate(-45)" text-anchor="end" alignment-baseline="middle" fill="var(--reaviz-x-axis-label-fill)">Cloud...</text></g></g></g><g transform="translate(0, 0)" visibility="visible"></g><g><rect height="202" width="352" opacity="0" cursor="auto"></rect><g transform="translate(8, 0)"><g><rect class="" mask="" rx="0" ry="0" tabindex="0" aria-label="Firewall ∙ Blocked: 45" role="graphics-document" height="113.625px" width="6px" fill="#DAC5F9" x="10" y="88.375" style="filter: drop-shadow(rgba(218, 197, 249, 0.7) 0px 0px 20px); cursor: auto;"></rect></g><g><rect class="" mask="" rx="0" ry="0" tabindex="0" aria-label="Firewall ∙ Allowed: 80" role="graphics-document" height="202px" width="6px" fill="#40E5D1" x="34" y="0" style="filter: drop-shadow(rgba(64, 229, 209, 0.7) 0px 0px 20px); cursor: auto;"></rect></g><g><rect class="" mask="" rx="0" ry="0" tabindex="0" aria-label="Firewall ∙ Monitored: 20" role="graphics-document" height="50.5px" width="6px" fill="#9152EE" x="58" y="151.5" style="filter: drop-shadow(rgba(145, 82, 238, 0.7) 0px 0px 20px); cursor: auto;"></rect></g></g><g transform="translate(96, 0)"><g><rect class="" mask="" rx="0" ry="0" tabindex="0" aria-label="Endpoint ∙ Blocked: 60" role="graphics-document" height="151.5px" width="6px" fill="#DAC5F9" x="10" y="50.5" style="filter: drop-shadow(rgba(218, 197, 249, 0.7) 0px 0px 20px); cursor: auto;"></rect></g><g><rect class="" mask="" rx="0" ry="0" tabindex="0" aria-label="Endpoint ∙ Allowed: 50" role="graphics-document" height="126.25px" width="6px" fill="#40E5D1" x="34" y="75.75" style="filter: drop-shadow(rgba(64, 229, 209, 0.7) 0px 0px 20px); cursor: auto;"></rect></g><g><rect class="" mask="" rx="0" ry="0" tabindex="0" aria-label="Endpoint ∙ Monitored: 35" role="graphics-document" height="88.375px" width="6px" fill="#9152EE" x="58" y="113.625" style="filter: drop-shadow(rgba(145, 82, 238, 0.7) 0px 0px 20px); cursor: auto;"></rect></g></g><g transform="translate(184, 0)"><g><rect class="" mask="" rx="0" ry="0" tabindex="0" aria-label="Network ∙ Blocked: 30" role="graphics-document" height="75.75px" width="6px" fill="#DAC5F9" x="10" y="126.25" style="filter: drop-shadow(rgba(218, 197, 249, 0.7) 0px 0px 20px); cursor: auto;"></rect></g><g><rect class="" mask="" rx="0" ry="0" tabindex="0" aria-label="Network ∙ Allowed: 70" role="graphics-document" height="176.75px" width="6px" fill="#40E5D1" x="34" y="25.25" style="filter: drop-shadow(rgba(64, 229, 209, 0.7) 0px 0px 20px); cursor: auto;"></rect></g><g><rect class="" mask="" rx="0" ry="0" tabindex="0" aria-label="Network ∙ Monitored: 25" role="graphics-document" height="63.125px" width="6px" fill="#9152EE" x="58" y="138.875" style="filter: drop-shadow(rgba(145, 82, 238, 0.7) 0px 0px 20px); cursor: auto;"></rect></g></g><g transform="translate(272, 0)"><g><rect class="" mask="" rx="0" ry="0" tabindex="0" aria-label="Cloud ∙ Blocked: 55" role="graphics-document" height="138.875px" width="6px" fill="#DAC5F9" x="10" y="63.125" style="filter: drop-shadow(rgba(218, 197, 249, 0.7) 0px 0px 20px); cursor: auto;"></rect></g><g><rect class="" mask="" rx="0" ry="0" tabindex="0" aria-label="Cloud ∙ Allowed: 60" role="graphics-document" height="151.5px" width="6px" fill="#40E5D1" x="34" y="50.5" style="filter: drop-shadow(rgba(64, 229, 209, 0.7) 0px 0px 20px); cursor: auto;"></rect></g><g><rect class="" mask="" rx="0" ry="0" tabindex="0" aria-label="Cloud ∙ Monitored: 40" role="graphics-document" height="101px" width="6px" fill="#9152EE" x="58" y="101" style="filter: drop-shadow(rgba(145, 82, 238, 0.7) 0px 0px 20px); cursor: auto;"></rect></g></g></g></g></svg></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
