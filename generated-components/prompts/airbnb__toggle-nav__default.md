# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/airbnb/toggle-nav/default
- Registry URL: https://21st.dev/r/airbnb/toggle-nav
- Author: airbnb
- Component slug: toggle-nav
- Demo slug: default
- Title: toggle-nav
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/airbnb/toggle-nav with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/airbnb__toggle-nav__default.html
- Local screenshot file: generated-21st-prompts/screenshots/airbnb__toggle-nav__default.png

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
<div id="root"><div class="flex w-full min-h-screen justify-center items-center p-0 bg-white"><div class="shadow-none rounded-none overflow-hidden border-box"><style>
    .responsive-layout-container {
      display: flex;
      background-color: #ffffff;
    }
    .responsive-layout-nav {
      display: flex;
      flex: 0 0 220px;
      padding: 1.5rem;
      background-color: #fff;
      transition: flex-basis 0.3s ease-in-out, min-width 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out, border 0.3s ease-in-out;
      overflow: hidden;
    }
    .responsive-layout-nav.hidden {
        flex-basis: 0px !important;
        min-width: 0px !important;
        padding: 0rem !important;
        opacity: 0 !important;
        border-right: none !important; 
    }
    .responsive-nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
    }
    .responsive-nav-list li {
      padding: 0.6rem 0;
      cursor: pointer;
      font-size: 1.6rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #000000;
    }
    .responsive-layout-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      overflow: hidden;
      padding: 1rem;
      background-color: #fff;
      border-left: 1px solid #eeeeee;
    }
    .responsive-layout-controls {
      margin-bottom: 0.5rem; /* Reduced margin */
      text-align: left; /* Align button to left */
    }
    .responsive-layout-toggle-button {
      padding: 0.25rem 0.75rem;
      font-size: 0.8rem;
      background-color: #f0f0f0;
      color: black;
      border: 1px solid #cccccc;
      border-radius: 0.25rem;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .responsive-layout-toggle-button:hover {
      background-color: #e0e0e0;
    }
    .responsive-layout-graph-area {
      display: flex;
      flex: 1;
      overflow: hidden;
      background: #000000;
    }
    .responsive-graph-container-class {
        width: 100%;
        height: 100%;
    }
  </style><div class="responsive-layout-container" style="width: 800px; height: 600px;"><div class="responsive-layout-nav"><ul class="responsive-nav-list"><li style="margin-bottom: 0.5rem;"><span role="img" aria-label="robot" style="font-size: 2.5rem;">🤖</span></li><li>Home</li><li>Profile</li><li>Favorites</li><li>Settings</li></ul></div><div class="responsive-layout-content"><div class="responsive-layout-controls"><button class="responsive-layout-toggle-button">toggle nav</button></div><div class="responsive-layout-graph-area"><div class="responsive-graph-container-class" style="width: 100%; height: 100%;"><svg width="547" height="530.8125" viewBox="0 0 547 530.8125"><rect width="547" height="530.8125" fill="#000000"></rect><path d="M 0 57.950764784828955 L 21.88 65.61 L 43.76 61.02 L 65.64 67.81 L 87.52 70.39 L 109.40 58.49 L 131.28 66.98 L 153.16 76.66 L 175.04 72.75 L 196.92 64.08 L 218.80 63.68 L 240.68 38.81 L 262.56 54.21 L 284.44 60.35 L 306.32 35.87 L 328.20 59.86 L 350.08 73.15 L 371.96 42.57 L 393.84 38.88 L 415.72 55.79 L 437.60 44.76 L 459.48 72.71 L 481.36 39.76 L 503.24 56.16 L 525.12 61.80 L 547.00 48.79" stroke="white" stroke-width="1.5" fill="none"></path><path d="M 0 113.16763288077534 L 21.88 112.62 L 43.76 104.88 L 65.64 125.34 L 87.52 121.19 L 109.40 105.38 L 131.28 126.24 L 153.16 96.89 L 175.04 116.06 L 196.92 129.94 L 218.80 120.41 L 240.68 114.22 L 262.56 141.09 L 284.44 123.65 L 306.32 103.77 L 328.20 105.01 L 350.08 94.14 L 371.96 94.82 L 393.84 140.17 L 415.72 140.83 L 437.60 109.21 L 459.48 138.49 L 481.36 139.25 L 503.24 96.18 L 525.12 140.14 L 547.00 135.34" stroke="white" stroke-width="1.5" fill="none"></path><path d="M 0 182.7634222787959 L 21.88 186.37 L 43.76 164.94 L 65.64 163.53 L 87.52 183.26 L 109.40 184.05 L 131.28 177.53 L 153.16 173.58 L 175.04 194.08 L 196.92 185.65 L 218.80 179.20 L 240.68 182.01 L 262.56 157.86 L 284.44 157.69 L 306.32 176.39 L 328.20 198.54 L 350.08 165.70 L 371.96 177.09 L 393.84 172.73 L 415.72 186.79 L 437.60 189.03 L 459.48 192.66 L 481.36 160.78 L 503.24 177.83 L 525.12 177.46 L 547.00 154.87" stroke="white" stroke-width="1.5" fill="none"></path><path d="M 0 239.4516431117096 L 21.88 257.91 L 43.76 249.36 L 65.64 231.53 L 87.52 243.40 L 109.40 222.96 L 131.28 240.51 L 153.16 245.09 L 175.04 245.37 L 196.92 216.33 L 218.80 222.09 L 240.68 240.20 L 262.56 236.26 L 284.44 215.47 L 306.32 237.28 L 328.20 212.50 L 350.08 213.19 L 371.96 226.26 L 393.84 237.31 L 415.72 231.24 L 437.60 214.39 L 459.48 250.77 L 481.36 224.10 L 503.24 237.31 L 525.12 231.54 L 547.00 215.98" stroke="white" stroke-width="1.5" fill="none"></path><path d="M 0 300.57120681770294 L 21.88 273.50 L 43.76 313.61 L 65.64 314.09 L 87.52 309.21 L 109.40 274.56 L 131.28 277.61 L 153.16 302.78 L 175.04 289.95 L 196.92 299.12 L 218.80 291.14 L 240.68 287.32 L 262.56 298.79 L 284.44 281.40 L 306.32 273.28 L 328.20 300.82 L 350.08 314.89 L 371.96 300.31 L 393.84 312.59 L 415.72 311.77 L 437.60 299.13 L 459.48 292.06 L 481.36 285.00 L 503.24 315.54 L 525.12 286.15 L 547.00 314.16" stroke="white" stroke-width="1.5" fill="none"></path><path d="M 0 351.5674060619225 L 21.88 349.75 L 43.76 371.82 L 65.64 365.46 L 87.52 377.66 L 109.40 359.68 L 131.28 339.29 L 153.16 350.05 L 175.04 343.53 L 196.92 351.73 L 218.80 365.90 L 240.68 373.32 L 262.56 344.77 L 284.44 356.01 L 306.32 330.86 L 328.20 370.27 L 350.08 356.42 L 371.96 343.34 L 393.84 344.45 L 415.72 359.52 L 437.60 353.95 L 459.48 373.56 L 481.36 361.93 L 503.24 350.56 L 525.12 366.76 L 547.00 347.88" stroke="white" stroke-width="1.5" fill="none"></path><path d="M 0 406.38017946695913 L 21.88 399.58 L 43.76 415.75 L 65.64 426.16 L 87.52 425.94 L 109.40 389.99 L 131.28 435.79 L 153.16 434.64 L 175.04 402.56 L 196.92 417.31 L 218.80 422.72 L 240.68 421.18 L 262.56 428.39 L 284.44 421.42 L 306.32 405.23 L 328.20 425.27 L 350.08 395.68 L 371.96 391.03 L 393.84 401.59 L 415.72 411.37 L 437.60 399.51 L 459.48 392.82 L 481.36 409.84 L 503.24 393.87 L 525.12 391.63 L 547.00 424.45" stroke="white" stroke-width="1.5" fill="none"></path><path d="M 0 471.3226495674661 L 21.88 460.89 L 43.76 461.91 L 65.64 456.74 L 87.52 451.95 L 109.40 492.77 L 131.28 476.05 L 153.16 476.60 L 175.04 450.28 L 196.92 455.86 L 218.80 469.78 L 240.68 459.21 L 262.56 460.21 L 284.44 472.30 L 306.32 458.74 L 328.20 462.24 L 350.08 467.46 L 371.96 489.53 L 393.84 450.17 L 415.72 461.29 L 437.60 479.64 L 459.48 476.15 L 481.36 471.89 L 503.24 486.52 L 525.12 464.10 L 547.00 451.42" stroke="white" stroke-width="1.5" fill="none"></path></svg></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.