# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/qr-code/qr-code-with-download
- Registry URL: https://21st.dev/r/anubra266/qr-code
- Author: anubra266
- Component slug: qr-code
- Demo slug: qr-code-with-download
- Title: qr-code
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/qr-code with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__qr-code__qr-code-with-download.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__qr-code__qr-code-with-download.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div id="qrcode:«r0»:root" data-scope="qr-code" data-part="root" class="flex flex-col items-center space-y-4" style="--qrcode-pixel-size: 10px; --qrcode-width: 270px; --qrcode-height: 270px; position: relative;"><svg id="qrcode:«r0»:frame" data-scope="qr-code" data-part="frame" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 270" class="w-40 h-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3"><path d="M10,10h10v10h-10zM20,10h10v10h-10zM30,10h10v10h-10zM40,10h10v10h-10zM50,10h10v10h-10zM60,10h10v10h-10zM70,10h10v10h-10zM90,10h10v10h-10zM100,10h10v10h-10zM140,10h10v10h-10zM170,10h10v10h-10zM190,10h10v10h-10zM200,10h10v10h-10zM210,10h10v10h-10zM220,10h10v10h-10zM230,10h10v10h-10zM240,10h10v10h-10zM250,10h10v10h-10zM10,20h10v10h-10zM70,20h10v10h-10zM170,20h10v10h-10zM190,20h10v10h-10zM250,20h10v10h-10zM10,30h10v10h-10zM30,30h10v10h-10zM40,30h10v10h-10zM50,30h10v10h-10zM70,30h10v10h-10zM90,30h10v10h-10zM120,30h10v10h-10zM130,30h10v10h-10zM140,30h10v10h-10zM150,30h10v10h-10zM160,30h10v10h-10zM190,30h10v10h-10zM210,30h10v10h-10zM220,30h10v10h-10zM230,30h10v10h-10zM250,30h10v10h-10zM10,40h10v10h-10zM30,40h10v10h-10zM40,40h10v10h-10zM50,40h10v10h-10zM70,40h10v10h-10zM90,40h10v10h-10zM100,40h10v10h-10zM120,40h10v10h-10zM190,40h10v10h-10zM210,40h10v10h-10zM220,40h10v10h-10zM230,40h10v10h-10zM250,40h10v10h-10zM10,50h10v10h-10zM30,50h10v10h-10zM40,50h10v10h-10zM50,50h10v10h-10zM70,50h10v10h-10zM90,50h10v10h-10zM100,50h10v10h-10zM110,50h10v10h-10zM120,50h10v10h-10zM140,50h10v10h-10zM150,50h10v10h-10zM160,50h10v10h-10zM170,50h10v10h-10zM190,50h10v10h-10zM210,50h10v10h-10zM220,50h10v10h-10zM230,50h10v10h-10zM250,50h10v10h-10zM10,60h10v10h-10zM70,60h10v10h-10zM100,60h10v10h-10zM130,60h10v10h-10zM150,60h10v10h-10zM190,60h10v10h-10zM250,60h10v10h-10zM10,70h10v10h-10zM20,70h10v10h-10zM30,70h10v10h-10zM40,70h10v10h-10zM50,70h10v10h-10zM60,70h10v10h-10zM70,70h10v10h-10zM90,70h10v10h-10zM110,70h10v10h-10zM130,70h10v10h-10zM150,70h10v10h-10zM170,70h10v10h-10zM190,70h10v10h-10zM200,70h10v10h-10zM210,70h10v10h-10zM220,70h10v10h-10zM230,70h10v10h-10zM240,70h10v10h-10zM250,70h10v10h-10zM100,80h10v10h-10zM120,80h10v10h-10zM140,80h10v10h-10zM150,80h10v10h-10zM160,80h10v10h-10zM10,90h10v10h-10zM20,90h10v10h-10zM30,90h10v10h-10zM40,90h10v10h-10zM70,90h10v10h-10zM90,90h10v10h-10zM140,90h10v10h-10zM150,90h10v10h-10zM170,90h10v10h-10zM180,90h10v10h-10zM210,90h10v10h-10zM220,90h10v10h-10zM230,90h10v10h-10zM250,90h10v10h-10zM10,100h10v10h-10zM50,100h10v10h-10zM90,100h10v10h-10zM100,100h10v10h-10zM170,100h10v10h-10zM200,100h10v10h-10zM240,100h10v10h-10zM10,110h10v10h-10zM70,110h10v10h-10zM90,110h10v10h-10zM150,110h10v10h-10zM180,110h10v10h-10zM210,110h10v10h-10zM60,120h10v10h-10zM80,120h10v10h-10zM120,120h10v10h-10zM130,120h10v10h-10zM140,120h10v10h-10zM150,120h10v10h-10zM160,120h10v10h-10zM180,120h10v10h-10zM220,120h10v10h-10zM230,120h10v10h-10zM10,130h10v10h-10zM20,130h10v10h-10zM40,130h10v10h-10zM50,130h10v10h-10zM60,130h10v10h-10zM70,130h10v10h-10zM100,130h10v10h-10zM120,130h10v10h-10zM180,130h10v10h-10zM190,130h10v10h-10zM200,130h10v10h-10zM210,130h10v10h-10zM230,130h10v10h-10zM240,130h10v10h-10zM250,130h10v10h-10zM60,140h10v10h-10zM80,140h10v10h-10zM110,140h10v10h-10zM120,140h10v10h-10zM140,140h10v10h-10zM160,140h10v10h-10zM190,140h10v10h-10zM200,140h10v10h-10zM210,140h10v10h-10zM250,140h10v10h-10zM20,150h10v10h-10zM30,150h10v10h-10zM40,150h10v10h-10zM60,150h10v10h-10zM70,150h10v10h-10zM80,150h10v10h-10zM100,150h10v10h-10zM110,150h10v10h-10zM130,150h10v10h-10zM150,150h10v10h-10zM210,150h10v10h-10zM230,150h10v10h-10zM240,150h10v10h-10zM10,160h10v10h-10zM30,160h10v10h-10zM50,160h10v10h-10zM90,160h10v10h-10zM100,160h10v10h-10zM130,160h10v10h-10zM140,160h10v10h-10zM160,160h10v10h-10zM200,160h10v10h-10zM210,160h10v10h-10zM250,160h10v10h-10zM30,170h10v10h-10zM40,170h10v10h-10zM70,170h10v10h-10zM120,170h10v10h-10zM160,170h10v10h-10zM170,170h10v10h-10zM180,170h10v10h-10zM190,170h10v10h-10zM200,170h10v10h-10zM210,170h10v10h-10zM220,170h10v10h-10zM230,170h10v10h-10zM240,170h10v10h-10zM250,170h10v10h-10zM90,180h10v10h-10zM100,180h10v10h-10zM130,180h10v10h-10zM140,180h10v10h-10zM170,180h10v10h-10zM210,180h10v10h-10zM230,180h10v10h-10zM250,180h10v10h-10zM10,190h10v10h-10zM20,190h10v10h-10zM30,190h10v10h-10zM40,190h10v10h-10zM50,190h10v10h-10zM60,190h10v10h-10zM70,190h10v10h-10zM100,190h10v10h-10zM110,190h10v10h-10zM120,190h10v10h-10zM130,190h10v10h-10zM170,190h10v10h-10zM190,190h10v10h-10zM210,190h10v10h-10zM230,190h10v10h-10zM240,190h10v10h-10zM250,190h10v10h-10zM10,200h10v10h-10zM70,200h10v10h-10zM110,200h10v10h-10zM130,200h10v10h-10zM160,200h10v10h-10zM170,200h10v10h-10zM210,200h10v10h-10zM240,200h10v10h-10zM250,200h10v10h-10zM10,210h10v10h-10zM30,210h10v10h-10zM40,210h10v10h-10zM50,210h10v10h-10zM70,210h10v10h-10zM100,210h10v10h-10zM120,210h10v10h-10zM130,210h10v10h-10zM140,210h10v10h-10zM170,210h10v10h-10zM180,210h10v10h-10zM190,210h10v10h-10zM200,210h10v10h-10zM210,210h10v10h-10zM220,210h10v10h-10zM10,220h10v10h-10zM30,220h10v10h-10zM40,220h10v10h-10zM50,220h10v10h-10zM70,220h10v10h-10zM90,220h10v10h-10zM100,220h10v10h-10zM110,220h10v10h-10zM130,220h10v10h-10zM140,220h10v10h-10zM150,220h10v10h-10zM180,220h10v10h-10zM190,220h10v10h-10zM210,220h10v10h-10zM220,220h10v10h-10zM230,220h10v10h-10zM240,220h10v10h-10zM250,220h10v10h-10zM10,230h10v10h-10zM30,230h10v10h-10zM40,230h10v10h-10zM50,230h10v10h-10zM70,230h10v10h-10zM90,230h10v10h-10zM100,230h10v10h-10zM120,230h10v10h-10zM130,230h10v10h-10zM140,230h10v10h-10zM160,230h10v10h-10zM180,230h10v10h-10zM190,230h10v10h-10zM210,230h10v10h-10zM230,230h10v10h-10zM240,230h10v10h-10zM10,240h10v10h-10zM70,240h10v10h-10zM90,240h10v10h-10zM100,240h10v10h-10zM160,240h10v10h-10zM190,240h10v10h-10zM210,240h10v10h-10zM230,240h10v10h-10zM10,250h10v10h-10zM20,250h10v10h-10zM30,250h10v10h-10zM40,250h10v10h-10zM50,250h10v10h-10zM60,250h10v10h-10zM70,250h10v10h-10zM90,250h10v10h-10zM100,250h10v10h-10zM130,250h10v10h-10zM150,250h10v10h-10zM180,250h10v10h-10zM200,250h10v10h-10zM210,250h10v10h-10zM220,250h10v10h-10zM230,250h10v10h-10zM240,250h10v10h-10zM250,250h10v10h-10z" data-scope="qr-code" data-part="pattern" class="fill-gray-900 dark:fill-white"></path></svg><button type="button" data-scope="qr-code" data-part="download-trigger" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download w-4 h-4" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>Download QR Code</button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.