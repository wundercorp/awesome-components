# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/itsankitverma/file-uploader/default
- Registry URL: https://21st.dev/r/itsankitverma/file-uploader
- Author: itsankitverma
- Component slug: file-uploader
- Demo slug: default
- Title: file-uploader
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/itsankitverma/file-uploader with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/itsankitverma__file-uploader__default.html
- Local screenshot file: generated-21st-prompts/screenshots/itsankitverma__file-uploader__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-4 w-full"><div class="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md border border-gray-100 animate-fade-in"><h1 class="text-3xl font-bold mb-8 text-center text-gray-900 tracking-tight">Upload Files</h1><input class="hidden" aria-label="File input" multiple="" type="file"><div class="w-full flex flex-col items-center justify-center border-2 border-dashed rounded-xl transition-all duration-200 mb-5 cursor-pointer border-gray-300 bg-gray-50 hover:border-blue-400" style="min-height: 120px;"><div class="flex flex-col items-center py-6"><span class="text-4xl mb-2 animate-bounce">📁</span><span class="text-gray-700 font-medium">Drag &amp; drop files here, or <span class="text-blue-600 underline">browse</span></span><span class="text-xs text-gray-400 mt-1">(PNG, JPG, PDF, etc. up to 5MB each)</span></div></div><button type="button" disabled="" class="w-full py-2 px-4 rounded-lg font-semibold text-base transition focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 shadow-lg flex items-center justify-center gap-2
            bg-gray-300 text-gray-500 cursor-not-allowed
          " style="min-height: 40px;">Upload</button></div><style>
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease;
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.