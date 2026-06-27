# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/airbnb/pie-chart/default
- Registry URL: https://21st.dev/r/airbnb/pie-chart
- Author: airbnb
- Component slug: pie-chart
- Demo slug: default
- Title: pie-chart
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/airbnb/pie-chart with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/airbnb__pie-chart__default.html
- Local screenshot file: generated-21st-prompts/screenshots/airbnb__pie-chart__default.png

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
<div id="root"><div class="flex w-full h-screen justify-center items-center bg-gray-100"><svg width="600" height="400"><defs><linearGradient id="visx-pie-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F02FC2" stop-opacity="1"></stop><stop offset="100%" stop-color="#6094EA" stop-opacity="1"></stop></linearGradient></defs><rect rx="14" width="600" height="400" fill="url('#visx-pie-gradient')"></rect><g class="visx-group" transform="translate(300, 200)"><g><path d="M0.5550895045607342,-176.9642939652363A3,3,0,0,1,3.615345258875323,-179.9636887782064A180,180,0,0,1,27.616107311324704,177.86891413895066A3,3,0,0,1,24.182710368167786,175.30506547793178L18.305178172314644,131.68747060769468A3,3,0,0,1,20.79834485591553,128.3254801325692A130,130,0,0,0,3.4748995157360367,-129.9535496758574A3,3,0,0,1,0.5550895045607094,-132.95247774530029Z" fill="rgba(255,255,255,0.7)"></path><g style="opacity: 1;"><text fill="white" x="154.65252014512797" y="-10.372946194827795" dy=".33em" font-size="9" text-anchor="middle" pointer-events="none">Google Chrome</text></g></g><g><path d="M23.082475421913376,175.45332368287984A3,3,0,0,1,20.450183322656144,178.83453246526454A180,180,0,0,1,-175.94847976967705,37.97541924376274A3,3,0,0,1,-173.58990159091067,34.39790006134949L-130.39090251230806,25.97849119942128A3,3,0,0,1,-126.88880288475222,28.270686275265653A130,130,0,0,0,13.910796360541154,129.25358697001624A3,3,0,0,1,17.20494322606028,131.83572881264274Z" fill="rgba(255,255,255,0.6)"></path><g style="opacity: 1;"><text fill="white" x="-90.33565515076609" y="125.95423537333657" dy=".33em" font-size="9" text-anchor="middle" pointer-events="none">Internet Explorer</text></g></g><g><path d="M-173.8022775342486,33.30822401270703A3,3,0,0,1,-177.33170239150184,30.878266255277822A180,180,0,0,1,-102.12284834979285,-148.225921636282A3,3,0,0,1,-97.91668115638713,-147.40757448072694L-73.67959590514916,-110.67062216426982A3,3,0,0,1,-74.46528595028256,-106.55947254159368A130,130,0,0,0,-128.21829129445098,21.4492372249299A3,3,0,0,1,-130.60327845564598,24.888815150778797Z" fill="rgba(255,255,255,0.5)"></path><g style="opacity: 1;"><text fill="white" x="-142.9114720497695" y="-60.01092531004628" dy=".33em" font-size="9" text-anchor="middle" pointer-events="none">Firefox</text></g></g><g><path d="M-96.99000743956029,-148.01894446268244A3,3,0,0,1,-96.08734344269607,-152.20782644176143A180,180,0,0,1,-23.77938044545035,-178.42236705534015A3,3,0,0,1,-20.40199095597334,-175.78517636025234L-15.465105979207971,-132.05112631107886A3,3,0,0,1,-18.030093383187253,-128.74360462793308A130,130,0,0,0,-68.66424301326094,-110.3866918220482A3,3,0,0,1,-72.75292218832232,-111.28199214622535Z" fill="rgba(255,255,255,0.4)"></path><g style="opacity: 1;"><text fill="white" x="-52.829067774346115" y="-145.7192149240914" dy=".33em" font-size="9" text-anchor="middle" pointer-events="none">Safari</text></g></g><g><path d="M-1.693783085776554,-179.92854657670452A0.0634119153660012,0.0634119153660012,0,1,1,-1.5669645634302083,-179.92969570475003L-1.1779076968383264,-129.99466348068958Z" fill="rgba(255,255,255,0.3)"></path></g><g><path d="M-19.298818478249746,-175.9097071463545A3,3,0,0,1,-16.594324063929065,-179.2334466801922A180,180,0,0,1,-8.111058102516614,-179.8171591824807A3,3,0,0,1,-4.976810509367915,-176.8951690129679L-3.877065493218285,-132.89709487469597A3,3,0,0,1,-6.721028135380329,-129.82614444249444A130,130,0,0,0,-11.124155733278979,-129.52317614705777A3,3,0,0,1,-14.36193350148439,-132.17565709718104Z" fill="rgba(255,255,255,0.2)"></path></g><g><path d="M-3.9286099062430146,-179.3886439843003A0.5657011226852646,0.5657011226852646,0,1,1,-2.7974284705514263,-179.4098491172478L-2.1828812025380353,-130.23888702719955A0.25853725794182625,0.25853725794182625,0,0,1,-2.699854803775011,-130.22919583744104Z" fill="rgba(255,255,255,0.1)"></path></g><g><path d="M-0.5061936199945187,-179.9992882430902L-0.3655842811071524,-129.99948595334294Z" fill="rgba(255,255,255,0.7)"></path></g><g><path d="M-7.784980705334064,114.73619339780092A115,115,0,0,1,-2.112515728529184e-14,-115L0,0Z" fill="rgba(93,30,91,1)"></path><g style="opacity: 1;"><text fill="white" x="-57.467014713602346" y="-1.9473622946466838" dy=".33em" font-size="9" text-anchor="middle" pointer-events="none">A</text></g></g><g><path d="M54.50741920574931,101.26174623977562A115,115,0,0,1,-7.784980705334064,114.73619339780092L0,0Z" fill="rgba(93,30,91,0.8)"></path><g style="opacity: 1;"><text fill="white" x="12.15665194872621" y="56.20022965609243" dy=".33em" font-size="9" text-anchor="middle" pointer-events="none">B</text></g></g><g><path d="M114.94852354655656,3.4404846267249614A115,115,0,0,1,54.50741920574931,101.26174623977562L0,0Z" fill="rgba(93,30,91,0.6)"></path><g style="opacity: 1;"><text fill="white" x="48.91594560930621" y="30.223836042888333" dy=".33em" font-size="9" text-anchor="middle" pointer-events="none">C</text></g></g><g><path d="M7.041719095097281e-15,-115A115,115,0,0,1,114.94852354655656,3.4404846267249614L0,0Z" fill="rgba(93,30,91,0.4)"></path><g style="opacity: 1;"><text fill="white" x="41.26235531945761" y="-40.04582417045289" dy=".33em" font-size="9" text-anchor="middle" pointer-events="none">D</text></g></g></g><text text-anchor="end" x="584" y="384" fill="white" font-size="11" font-weight="300" pointer-events="none">Click segments to update</text></svg></div></div>
```

## Public registry source files

No public registry source files were available.