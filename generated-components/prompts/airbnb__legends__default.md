# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/airbnb/legends/default
- Registry URL: https://21st.dev/r/airbnb/legends
- Author: airbnb
- Component slug: legends
- Demo slug: default
- Title: legends
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/airbnb/legends with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/airbnb__legends__default.html
- Local screenshot file: generated-21st-prompts/screenshots/airbnb__legends__default.png

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
<div id="root"><div class="flex w-full h-screen justify-center items-center bg-gray-100 p-4"><div class="legends"><div class="legend"><div class="title">Size</div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="5" height="5" style="margin: 5px 0px;"><circle fill="rgb(117, 252, 252)" r="2.5" cx="2.5" cy="2.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">0</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="7" height="7" style="margin: 5px 0px;"><circle fill="rgb(100, 203, 235)" r="3.5" cx="3.5" cy="3.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">2.5</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="9" height="9" style="margin: 5px 0px;"><circle fill="rgb(84, 153, 218)" r="4.5" cx="4.5" cy="4.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">5</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="11" height="11" style="margin: 5px 0px;"><circle fill="rgb(67, 104, 201)" r="5.5" cx="5.5" cy="5.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">7.5</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="13" height="13" style="margin: 5px 0px;"><circle fill="rgb(50, 54, 184)" r="6.5" cx="6.5" cy="6.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">10</div></div><style>
        .legend {
          line-height: 0.9em;
          color: #efefef;
          font-size: 10px;
          font-family: arial;
          padding: 10px 10px;
          float: left;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          margin: 5px 5px;
        }
        .title {
          font-size: 12px;
          margin-bottom: 10px;
          font-weight: 100;
        }
      </style></div><div class="legend"><div class="title">Quantile</div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="15" height="15" style="margin: 2px 0px;"><circle fill="#eb4d70" r="7.5" cx="7.5" cy="7.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">0 - 0.03</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="15" height="15" style="margin: 2px 0px;"><circle fill="#f19938" r="7.5" cx="7.5" cy="7.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">0.03 - 0.06</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="15" height="15" style="margin: 2px 0px;"><circle fill="#6ce18b" r="7.5" cx="7.5" cy="7.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">0.06 - 0.09</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="15" height="15" style="margin: 2px 0px;"><circle fill="#78f6ef" r="7.5" cx="7.5" cy="7.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">0.09 - 0.12</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="15" height="15" style="margin: 2px 0px;"><circle fill="#9096f8" r="7.5" cx="7.5" cy="7.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">0.12 - 0.15</div></div><style>
        .legend {
          line-height: 0.9em;
          color: #efefef;
          font-size: 10px;
          font-family: arial;
          padding: 10px 10px;
          float: left;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          margin: 5px 5px;
        }
        .title {
          font-size: 12px;
          margin-bottom: 10px;
          font-weight: 100;
        }
      </style></div><div class="legend"><div class="title">Linear</div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="15" height="15" style="margin: 2px 0px;"><circle fill="rgb(237, 79, 187)" r="7.5" cx="7.5" cy="7.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">0.0</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="15" height="15" style="margin: 2px 0px;"><circle fill="rgb(236, 99, 155)" r="7.5" cx="7.5" cy="7.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;"></div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="15" height="15" style="margin: 2px 0px;"><circle fill="rgb(235, 120, 122)" r="7.5" cx="7.5" cy="7.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">5.0</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="15" height="15" style="margin: 2px 0px;"><circle fill="rgb(234, 140, 90)" r="7.5" cx="7.5" cy="7.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;"></div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px;"><svg width="15" height="15" style="margin: 2px 0px;"><circle fill="rgb(233, 160, 57)" r="7.5" cx="7.5" cy="7.5"></circle></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 4px;">10.0</div></div><style>
        .legend {
          line-height: 0.9em;
          color: #efefef;
          font-size: 10px;
          font-family: arial;
          padding: 10px 10px;
          float: left;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          margin: 5px 5px;
        }
        .title {
          font-size: 12px;
          margin-bottom: 10px;
          font-weight: 100;
        }
      </style></div><div class="legend"><div class="title">Threshold</div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 1px 0px;"><svg width="15" height="15"><rect fill="#54278f" width="15" height="15"></rect></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 2px 0px 0px 10px;">More than 0.08</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 1px 0px;"><svg width="15" height="15"><rect fill="#756bb1" width="15" height="15"></rect></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 2px 0px 0px 10px;">0.06 to 0.08</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 1px 0px;"><svg width="15" height="15"><rect fill="#9e9ac8" width="15" height="15"></rect></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 2px 0px 0px 10px;">0.04 to 0.06</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 1px 0px;"><svg width="15" height="15"><rect fill="#bcbddc" width="15" height="15"></rect></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 2px 0px 0px 10px;">0.02 to 0.04</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 1px 0px;"><svg width="15" height="15"><rect fill="#dadaeb" width="15" height="15"></rect></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 2px 0px 0px 10px;">0.01 to 0.02</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 1px 0px;"><svg width="15" height="15"><rect fill="#f2f0f7" width="15" height="15"></rect></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 2px 0px 0px 10px;">Less than 0.01</div></div><style>
        .legend {
          line-height: 0.9em;
          color: #efefef;
          font-size: 10px;
          font-family: arial;
          padding: 10px 10px;
          float: left;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          margin: 5px 5px;
        }
        .title {
          font-size: 12px;
          margin-bottom: 10px;
          font-weight: 100;
        }
      </style></div><div class="legend"><div class="title">Ordinal</div><div style="display: flex; flex-direction: row;"><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px 5px;"><svg width="15" height="15"><rect fill="#66d981" width="15" height="15"></rect></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 0px 0px 4px;">A</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px 5px;"><svg width="15" height="15"><rect fill="#71f5ef" width="15" height="15"></rect></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 0px 0px 4px;">B</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px 5px;"><svg width="15" height="15"><rect fill="#4899f1" width="15" height="15"></rect></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 0px 0px 4px;">C</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: row; margin: 0px 5px;"><svg width="15" height="15"><rect fill="#7d81f6" width="15" height="15"></rect></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px 0px 0px 4px;">D</div></div></div><style>
        .legend {
          line-height: 0.9em;
          color: #efefef;
          font-size: 10px;
          font-family: arial;
          padding: 10px 10px;
          float: left;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          margin: 5px 5px;
        }
        .title {
          font-size: 12px;
          margin-bottom: 10px;
          font-weight: 100;
        }
      </style></div><div class="legend"><div class="title">Custom Legend</div><div style="display: flex; flex-direction: row;"><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: column; margin: 0px 4px 0px 0px;"><svg width="15" height="15" style="margin: 0px 0px 8px;"><g class="visx-group visx-glyph" transform="translate(8.333333333333334, 8.333333333333334)"><path class="visx-glyph-star" d="M0,-6.673878525749795L1.4983790851776881,-2.0623418828507067L6.347235660876635,-2.062341882850707L2.4244282878494734,0.7877445028265158L3.9228073730271626,5.399281145725603L4.440892098500626e-16,2.549194760048381L-3.9228073730271613,5.399281145725605L-2.424428287849473,0.7877445028265166L-6.347235660876636,-2.0623418828507054L-1.4983790851776888,-2.0623418828507063Z" fill="#dd59b8"></path></g></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px;">a</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: column; margin: 0px 4px 0px 0px;"><svg width="15" height="15" style="margin: 0px 0px 8px;"><g class="visx-group visx-glyph" transform="translate(8.333333333333334, 8.333333333333334)"><path class="visx-glyph-wye" d="M1.90817104445714,1.1016830661771793L1.90817104445714,4.91802515509146L-1.90817104445714,4.91802515509146L-1.90817104445714,1.101683066177179L-5.213220242988678,-0.8064879782799612L-3.3050491985315382,-4.111537176811499L0,-2.2033661323543585L3.3050491985315382,-4.111537176811499L5.213220242988678,-0.8064879782799612Z" fill="#de6a9a"></path></g></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px;">b</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: column; margin: 0px 4px 0px 0px;"><svg width="15" height="15" style="margin: 0px 0px 8px;"><g class="visx-group visx-glyph" transform="translate(8.333333333333334, 8.333333333333334)"><path class="visx-glyph-triangle" d="M0,-6.204032394013997L5.372849659117709,3.1020161970069986L-5.372849659117709,3.1020161970069986Z" fill="#de7d7b"></path></g></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px;">c</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: column; margin: 0px 4px 0px 0px;"><svg width="15" height="15" style="margin: 0px 0px 8px;"><g class="visx-group visx-glyph" transform="translate(8.333333333333334, 8.333333333333334)"><path class="visx-glyph-diamond" d="M0,-6.580370064762462L3.7991784282579624,0L0,6.580370064762462L-3.7991784282579624,0Z" fill="#df905f"></path></g></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px;">d</div></div><div class="visx-legend-item" style="display: flex; align-items: center; flex-direction: column; margin: 0px 4px 0px 0px;"><svg width="15" height="15" style="margin: 0px 0px 8px;"><text font-size="12" dy="1em" dx=".33em" fill="#e0a346">$</text></svg><div class="visx-legend-label" style="justify-content: left; display: flex; flex: 1 1 0%; margin: 0px;">e</div></div></div><style>
        .legend {
          line-height: 0.9em;
          color: #efefef;
          font-size: 10px;
          font-family: arial;
          padding: 10px 10px;
          float: left;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          margin: 5px 5px;
        }
        .title {
          font-size: 12px;
          margin-bottom: 10px;
          font-weight: 100;
        }
      </style></div><style>
        .legends {
          font-family: arial;
          font-weight: 900;
          background-color: black;
          border-radius: 14px;
          padding: 24px 24px 24px 32px;
          overflow-y: auto;
          flex-grow: 1;
        }
        .chart h2 {
          margin-left: 10px;
        }
      </style></div></div></div>
```

## Public registry source files

No public registry source files were available.