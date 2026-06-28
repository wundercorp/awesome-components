# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reaviz/layered-funnel-chart/default
- Registry URL: https://21st.dev/r/reaviz/layered-funnel-chart
- Author: reaviz
- Component slug: layered-funnel-chart
- Demo slug: default
- Title: layered-funnel-chart
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reaviz/layered-funnel-chart with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reaviz__layered-funnel-chart__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reaviz__layered-funnel-chart__default.png

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
<div id="root"><div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900 p-4 transition-colors duration-300"><div class="flex flex-col pt-4 pb-4 bg-white dark:bg-black rounded-3xl shadow-[11px_21px_3px_rgba(0,0,0,0.06),14px_27px_7px_rgba(0,0,0,0.10),19px_38px_14px_rgba(0,0,0,0.13),27px_54px_27px_rgba(0,0,0,0.16),39px_78px_50px_rgba(0,0,0,0.20),55px_110px_86px_rgba(0,0,0,0.26)] w-[300px] h-[420px] overflow-hidden transition-colors duration-300"><h3 class="text-3xl text-left p-7 pt-6 pb-8 font-bold text-neutral-800 dark:text-white">Layered Incident Funnel</h3><div class="flex-grow px-4"><div class="_container_1u3dt_1" height="280" style="height: 280px; width: 100%;"><svg width="268" height="280" class="_svg_1u3dt_30" tabindex="0"><g transform="translate(0, 0)"><g style="transform: translate(0px, 0px);"><g><rect height="280" width="268" opacity="0" cursor="auto"></rect><g pointer-events="none" aria-label="All Events: 1,000, Alerts Triggered: 750, Incidents Created: 500, Escalated: 250, Resolved: 200" role="graphics-document" style="filter: drop-shadow(rgb(238, 64, 148) 0px 0px 15px);"><path d="M0,0C17.867,11.667,35.733,23.333,53.6,35C71.467,46.667,89.333,58.333,107.2,70C125.067,81.667,142.933,100.333,160.8,105C178.667,109.667,196.533,112,214.4,112C232.267,112,250.133,112,268,112L268,140C250.133,140,232.267,140,214.4,140C196.533,140,178.667,140,160.8,140C142.933,140,125.067,140,107.2,140C89.333,140,71.467,140,53.6,140C35.733,140,17.867,140,0,140Z" fill="#EE409430" stroke="none" opacity="1"></path><path d="M0,280C17.867,268.333,35.733,256.667,53.6,245C71.467,233.333,89.333,221.667,107.2,210C125.067,198.333,142.933,179.667,160.8,175C178.667,170.333,196.533,168,214.4,168C232.267,168,250.133,168,268,168L268,140C250.133,140,232.267,140,214.4,140C196.533,140,178.667,140,160.8,140C142.933,140,125.067,140,107.2,140C89.333,140,71.467,140,53.6,140C35.733,140,17.867,140,0,140Z" fill="#EE409430" stroke="none" opacity="1"></path></g></g></g><g style="transform: translate(0px, 35px);"><g><rect height="210" width="268" opacity="0" cursor="auto"></rect><g pointer-events="none" aria-label="All Events: 1,000, Alerts Triggered: 750, Incidents Created: 500, Escalated: 250, Resolved: 200" role="graphics-document" style="filter: drop-shadow(rgb(238, 64, 148) 0px 0px 15px);"><path d="M0,0C17.867,8.75,35.733,17.5,53.6,26.25C71.467,35,89.333,43.75,107.2,52.5C125.067,61.25,142.933,75.25,160.8,78.75C178.667,82.25,196.533,84,214.4,84C232.267,84,250.133,84,268,84L268,105C250.133,105,232.267,105,214.4,105C196.533,105,178.667,105,160.8,105C142.933,105,125.067,105,107.2,105C89.333,105,71.467,105,53.6,105C35.733,105,17.867,105,0,105Z" fill="#EE409475" stroke="none" opacity="1"></path><path d="M0,210C17.867,201.25,35.733,192.5,53.6,183.75C71.467,175,89.333,166.25,107.2,157.5C125.067,148.75,142.933,134.75,160.8,131.25C178.667,127.75,196.533,126,214.4,126C232.267,126,250.133,126,268,126L268,105C250.133,105,232.267,105,214.4,105C196.533,105,178.667,105,160.8,105C142.933,105,125.067,105,107.2,105C89.333,105,71.467,105,53.6,105C35.733,105,17.867,105,0,105Z" fill="#EE409475" stroke="none" opacity="1"></path></g></g></g><g style="transform: translate(0px, 70px);"><g><rect height="140" width="268" opacity="0" cursor="auto"></rect><g pointer-events="none" aria-label="All Events: 1,000, Alerts Triggered: 750, Incidents Created: 500, Escalated: 250, Resolved: 200" role="graphics-document" style="filter: drop-shadow(rgb(238, 64, 148) 0px 0px 15px);"><path d="M0,0C17.867,5.833,35.733,11.667,53.6,17.5C71.467,23.333,89.333,29.167,107.2,35C125.067,40.833,142.933,50.167,160.8,52.5C178.667,54.833,196.533,56,214.4,56C232.267,56,250.133,56,268,56L268,70C250.133,70,232.267,70,214.4,70C196.533,70,178.667,70,160.8,70C142.933,70,125.067,70,107.2,70C89.333,70,71.467,70,53.6,70C35.733,70,17.867,70,0,70Z" fill="#EE4094" stroke="none" opacity="1"></path><path d="M0,140C17.867,134.167,35.733,128.333,53.6,122.5C71.467,116.667,89.333,110.833,107.2,105C125.067,99.167,142.933,89.833,160.8,87.5C178.667,85.167,196.533,84,214.4,84C232.267,84,250.133,84,268,84L268,70C250.133,70,232.267,70,214.4,70C196.533,70,178.667,70,160.8,70C142.933,70,125.067,70,107.2,70C89.333,70,71.467,70,53.6,70C35.733,70,17.867,70,0,70Z" fill="#EE4094" stroke="none" opacity="1"></path></g></g></g><line x1="53.6" y1="0" x2="53.6" y2="280" stroke="#4A5568" stroke-width="2" pointer-events="none"></line><line x1="107.2" y1="0" x2="107.2" y2="280" stroke="#4A5568" stroke-width="2" pointer-events="none"></line><line x1="160.79999999999998" y1="0" x2="160.79999999999998" y2="280" stroke="#4A5568" stroke-width="2" pointer-events="none"></line><line x1="214.4" y1="0" x2="214.4" y2="280" stroke="#4A5568" stroke-width="2" pointer-events="none"></line></g></svg></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.