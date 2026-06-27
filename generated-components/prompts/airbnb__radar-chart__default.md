# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/airbnb/radar-chart/default
- Registry URL: https://21st.dev/r/airbnb/radar-chart
- Author: airbnb
- Component slug: radar-chart
- Demo slug: default
- Title: radar-chart
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/airbnb/radar-chart with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/airbnb__radar-chart__default.html
- Local screenshot file: generated-21st-prompts/screenshots/airbnb__radar-chart__default.png

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
<div id="root"><div class="flex w-full min-h-screen justify-center items-center p-4 bg-gray-100"><div class="bg-white p-6 rounded-lg shadow-xl"><h1 class="text-2xl font-bold mb-6 text-center text-gray-700">Radar Chart Example</h1><svg width="500" height="500"><rect fill="#FAF7E9" width="500" height="500" rx="14"></rect><g class="visx-group" transform="translate(250, 250)"><path class="visx-line-radial" d="M-9.307315673519884e-15,-38L-22.335839587113988,-30.742645786247998L-36.14014761921584,-11.742645786247994L-36.14014761921583,11.742645786248007L-22.335839587113973,30.74264578624801L4.653657836759942e-15,38L22.335839587113984,30.742645786247998L36.14014761921583,11.742645786248007L36.14014761921583,-11.742645786248012L22.335839587113973,-30.742645786248005L0,-38" fill="none" stroke="#d9d9d9" stroke-width="2" stroke-opacity="0.8" stroke-linecap="round"></path><path class="visx-line-radial" d="M-1.8614631347039768e-14,-76L-44.671679174227975,-61.485291572495996L-72.28029523843168,-23.48529157249599L-72.28029523843166,23.485291572496013L-44.67167917422795,61.48529157249602L9.307315673519884e-15,76L44.67167917422797,61.485291572495996L72.28029523843166,23.485291572496013L72.28029523843166,-23.485291572496024L44.67167917422795,-61.48529157249601L0,-76" fill="none" stroke="#d9d9d9" stroke-width="2" stroke-opacity="0.8" stroke-linecap="round"></path><path class="visx-line-radial" d="M-2.7921947020559652e-14,-114L-67.00751876134197,-92.227937358744L-108.42044285764752,-35.227937358743986L-108.4204428576475,35.22793735874402L-67.00751876134193,92.22793735874403L1.3960973510279826e-14,114L67.00751876134196,92.227937358744L108.4204428576475,35.22793735874402L108.4204428576475,-35.227937358744036L67.00751876134193,-92.22793735874401L0,-114" fill="none" stroke="#d9d9d9" stroke-width="2" stroke-opacity="0.8" stroke-linecap="round"></path><path class="visx-line-radial" d="M-3.7229262694079536e-14,-152L-89.34335834845595,-122.97058314499199L-144.56059047686335,-46.97058314499198L-144.56059047686333,46.97058314499203L-89.3433583484559,122.97058314499203L1.8614631347039768e-14,152L89.34335834845594,122.97058314499199L144.56059047686333,46.97058314499203L144.56059047686333,-46.97058314499205L89.3433583484559,-122.97058314499202L0,-152" fill="none" stroke="#d9d9d9" stroke-width="2" stroke-opacity="0.8" stroke-linecap="round"></path><path class="visx-line-radial" d="M-4.653657836759942e-14,-190L-111.67919793556993,-153.71322893124L-180.7007380960792,-58.713228931239975L-180.70073809607916,58.71322893124004L-111.67919793556987,153.71322893124002L2.326828918379971e-14,190L111.67919793556992,153.71322893124L180.70073809607916,58.71322893124004L180.70073809607916,-58.71322893124006L111.67919793556987,-153.71322893124002L0,-190" fill="none" stroke="#d9d9d9" stroke-width="2" stroke-opacity="0.8" stroke-linecap="round"></path><line class="visx-line" x1="0" y1="0" x2="0" y2="190" fill="transparent" shape-rendering="crispEdges" stroke="#d9d9d9"></line><line class="visx-line" x1="0" y1="0" x2="111.6791979355699" y2="153.71322893124002" fill="transparent" shape-rendering="auto" stroke="#d9d9d9"></line><line class="visx-line" x1="0" y1="0" x2="180.70073809607916" y2="58.71322893124002" fill="transparent" shape-rendering="auto" stroke="#d9d9d9"></line><line class="visx-line" x1="0" y1="0" x2="180.7007380960792" y2="-58.713228931239996" fill="transparent" shape-rendering="auto" stroke="#d9d9d9"></line><line class="visx-line" x1="0" y1="0" x2="111.67919793556992" y2="-153.71322893124" fill="transparent" shape-rendering="auto" stroke="#d9d9d9"></line><line class="visx-line" x1="0" y1="0" x2="2.326828918379971e-14" y2="-190" fill="transparent" shape-rendering="auto" stroke="#d9d9d9"></line><line class="visx-line" x1="0" y1="0" x2="-111.67919793556987" y2="-153.71322893124002" fill="transparent" shape-rendering="auto" stroke="#d9d9d9"></line><line class="visx-line" x1="0" y1="0" x2="-180.70073809607916" y2="-58.71322893124004" fill="transparent" shape-rendering="auto" stroke="#d9d9d9"></line><line class="visx-line" x1="0" y1="0" x2="-180.7007380960792" y2="58.713228931239975" fill="transparent" shape-rendering="auto" stroke="#d9d9d9"></line><line class="visx-line" x1="0" y1="0" x2="-111.67919793556993" y2="153.71322893124" fill="transparent" shape-rendering="auto" stroke="#d9d9d9"></line><polygon points="0,41.61391906786333 37.39345211934961,51.46767144107729 180.70073809607916,58.71322893124002 32.54946376663748,-10.575961879599836 17.7163898472818,-24.384518681817717 1.1163356501816679e-14,-91.15572350810896 -61.24683457874191,-84.29903580026911 -2.176603127751544,-0.7072212270886259 -10.982598788393414,3.5684626621726707 -35.38881842943387,48.708529873109825" fill="#ff9933" fill-opacity="0.3" stroke="#ff9933" stroke-width="1"></polygon><circle cx="0" cy="41.61391906786333" r="4" fill="#f5810c"></circle><circle cx="37.39345211934961" cy="51.46767144107729" r="4" fill="#f5810c"></circle><circle cx="180.70073809607916" cy="58.71322893124002" r="4" fill="#f5810c"></circle><circle cx="32.54946376663748" cy="-10.575961879599836" r="4" fill="#f5810c"></circle><circle cx="17.7163898472818" cy="-24.384518681817717" r="4" fill="#f5810c"></circle><circle cx="1.1163356501816679e-14" cy="-91.15572350810896" r="4" fill="#f5810c"></circle><circle cx="-61.24683457874191" cy="-84.29903580026911" r="4" fill="#f5810c"></circle><circle cx="-2.176603127751544" cy="-0.7072212270886259" r="4" fill="#f5810c"></circle><circle cx="-10.982598788393414" cy="3.5684626621726707" r="4" fill="#f5810c"></circle><circle cx="-35.38881842943387" cy="48.708529873109825" r="4" fill="#f5810c"></circle></g></svg></div></div></div>
```

## Public registry source files

No public registry source files were available.