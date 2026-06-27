# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/Scottclayton3d/particle-hero/default
- Registry URL: https://21st.dev/r/Scottclayton3d/particle-hero
- Author: Scottclayton3d
- Component slug: particle-hero
- Demo slug: default
- Title: particle-hero
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/Scottclayton3d/particle-hero with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/Scottclayton3d__particle-hero__default.html
- Local screenshot file: generated-21st-prompts/screenshots/Scottclayton3d__particle-hero__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_DemoOne">DemoOne</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="advanced-dev-container"><div class="particles-layer"><div class="particle" style="left: 52.3908%; top: 26.826%; width: 6.22696px; height: 6.22696px; opacity: 0.813102;"></div><div class="particle" style="left: 51.2255%; top: 35.5159%; width: 7.21005px; height: 7.21005px; opacity: 0.999114;"></div><div class="particle" style="left: 54.1864%; top: 57.9024%; width: 6.99075px; height: 6.99075px; opacity: 0.746687;"></div><div class="particle" style="left: 43.8156%; top: 70.2291%; width: 6.73798px; height: 6.73798px; opacity: 0.795883;"></div><div class="particle" style="left: 26.7121%; top: 86.8361%; width: 7.05212px; height: 7.05212px; opacity: 0.786729;"></div><div class="particle" style="left: 11.7175%; top: 82.2623%; width: 5.33922px; height: 5.33922px; opacity: 0.710835;"></div><div class="particle" style="left: 71.5351%; top: 85.5779%; width: 5.14338px; height: 5.14338px; opacity: 0.947768;"></div><div class="particle" style="left: 79.7559%; top: 76.5285%; width: 6.26633px; height: 6.26633px; opacity: 0.840057;"></div><div class="particle" style="left: 18.0349%; top: 58.6141%; width: 5.94359px; height: 5.94359px; opacity: 0.86896;"></div><div class="particle" style="left: 36.7514%; top: 99.5012%; width: 6.75049px; height: 6.75049px; opacity: 0.723225;"></div><div class="particle" style="left: 93.8305%; top: 7.97327%; width: 6.65991px; height: 6.65991px; opacity: 0.902059;"></div><div class="particle" style="left: 84.2094%; top: 96.9735%; width: 7.44434px; height: 7.44434px; opacity: 0.777417;"></div><div class="particle" style="left: 49.5343%; top: 67.0198%; width: 5.15655px; height: 5.15655px; opacity: 0.835975;"></div><div class="particle" style="left: 8.17237%; top: 71.1029%; width: 5.83037px; height: 5.83037px; opacity: 0.820526;"></div><div class="particle" style="left: 40.1444%; top: 13.9264%; width: 6.25427px; height: 6.25427px; opacity: 0.782278;"></div><div class="particle" style="left: 74.2929%; top: 20.3326%; width: 6.22392px; height: 6.22392px; opacity: 0.852392;"></div><div class="particle" style="left: 17.446%; top: 85.2004%; width: 5.14632px; height: 5.14632px; opacity: 0.861046;"></div><div class="particle" style="left: 9.65196%; top: 95.1478%; width: 6.53723px; height: 6.53723px; opacity: 0.914375;"></div><div class="particle" style="left: 93.4018%; top: 64.3646%; width: 5.99167px; height: 5.99167px; opacity: 0.798995;"></div><div class="particle" style="left: 84.6783%; top: 61.2539%; width: 6.03576px; height: 6.03576px; opacity: 0.878884;"></div><div class="particle" style="left: 50.9755%; top: 41.3773%; width: 6.28563px; height: 6.28563px; opacity: 0.769126;"></div><div class="particle" style="left: 54.4705%; top: 63.1231%; width: 6.89197px; height: 6.89197px; opacity: 0.925182;"></div><div class="particle" style="left: 59.3995%; top: 22.8974%; width: 6.73895px; height: 6.73895px; opacity: 0.930939;"></div><div class="particle" style="left: 93.2644%; top: 15.5837%; width: 6.80312px; height: 6.80312px; opacity: 0.975815;"></div><div class="particle" style="left: 54.947%; top: 52.5359%; width: 5.645px; height: 5.645px; opacity: 0.735808;"></div><div class="particle" style="left: 39.3498%; top: 83.0886%; width: 5.43762px; height: 5.43762px; opacity: 0.998522;"></div><div class="particle" style="left: 64.726%; top: 4.00635%; width: 6.32959px; height: 6.32959px; opacity: 0.861867;"></div><div class="particle" style="left: 6.6821%; top: 34.9061%; width: 5.05574px; height: 5.05574px; opacity: 0.715664;"></div><div class="particle" style="left: 98.3878%; top: 24.1082%; width: 6.23841px; height: 6.23841px; opacity: 0.982043;"></div><div class="particle" style="left: 77.7627%; top: 85.4631%; width: 6.96903px; height: 6.96903px; opacity: 0.998033;"></div><div class="particle" style="left: 21.1853%; top: 80.0444%; width: 5.92925px; height: 5.92925px; opacity: 0.730684;"></div><div class="particle" style="left: 28.9196%; top: 89.4029%; width: 7.09528px; height: 7.09528px; opacity: 0.751301;"></div><div class="particle" style="left: 96.4987%; top: 52.4074%; width: 6.9585px; height: 6.9585px; opacity: 0.998868;"></div><div class="particle" style="left: 95.4898%; top: 88.8562%; width: 5.43726px; height: 5.43726px; opacity: 0.835873;"></div><div class="particle" style="left: 57.2649%; top: 21.7554%; width: 5.8834px; height: 5.8834px; opacity: 0.937095;"></div><div class="particle" style="left: 24.3818%; top: 69.604%; width: 7.26316px; height: 7.26316px; opacity: 0.989864;"></div><div class="particle" style="left: 25.2907%; top: 48.9174%; width: 6.48609px; height: 6.48609px; opacity: 0.809431;"></div><div class="particle" style="left: 29.1846%; top: 47.1633%; width: 5.41713px; height: 5.41713px; opacity: 0.714362;"></div><div class="particle" style="left: 61.2677%; top: 89.2344%; width: 5.6393px; height: 5.6393px; opacity: 0.897611;"></div><div class="particle" style="left: 98.7582%; top: 12.0028%; width: 6.29391px; height: 6.29391px; opacity: 0.858948;"></div><div class="particle" style="left: 23.5319%; top: 35.1092%; width: 5.76352px; height: 5.76352px; opacity: 0.742059;"></div><div class="particle" style="left: 68.7195%; top: 77.4%; width: 5.94979px; height: 5.94979px; opacity: 0.979819;"></div><div class="particle" style="left: 10.0302%; top: 85.2386%; width: 7.6436px; height: 7.6436px; opacity: 0.721195;"></div><div class="particle" style="left: 78.0493%; top: 6.18899%; width: 7.11407px; height: 7.11407px; opacity: 0.90609;"></div><div class="particle" style="left: 96.3399%; top: 2.78062%; width: 5.94425px; height: 5.94425px; opacity: 0.853323;"></div><div class="particle" style="left: 47.1932%; top: 2.15153%; width: 7.39046px; height: 7.39046px; opacity: 0.750307;"></div><div class="particle" style="left: 13.2707%; top: 79.3502%; width: 7.57746px; height: 7.57746px; opacity: 0.765631;"></div><div class="particle" style="left: 56.0455%; top: 73.0033%; width: 6.15534px; height: 6.15534px; opacity: 0.736427;"></div><div class="particle" style="left: 2.73706%; top: 67.2284%; width: 7.65821px; height: 7.65821px; opacity: 0.885866;"></div><div class="particle" style="left: 91.3401%; top: 52.2024%; width: 5.69492px; height: 5.69492px; opacity: 0.724948;"></div></div><div class="glow-effect"></div><div class="content-overlay"><h1 class="title">Say Something Bold</h1></div></div></div></div>
```

## Public registry source files

No public registry source files were available.