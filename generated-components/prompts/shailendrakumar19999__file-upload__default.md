# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shailendrakumar19999/file-upload/default
- Registry URL: https://21st.dev/r/shailendrakumar19999/file-upload
- Author: shailendrakumar19999
- Component slug: file-upload
- Demo slug: default
- Title: file-upload
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shailendrakumar19999/file-upload with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shailendrakumar19999__file-upload__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shailendrakumar19999__file-upload__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4"><div class="max-w-7xl mx-auto"><div class="text-center mb-8"><h1 class="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">File Upload Studio</h1><p class="text-gray-600 text-lg">Drag, drop, and upload your files with style</p></div><div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20"><input class="hidden" multiple="" accept="image/*,.pdf,.doc,.docx,.txt" type="file"><div class="relative border-2 border-dashed rounded-2xl transition-all duration-300 cursor-pointer group border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 hover:border-blue-400 hover:from-blue-50 hover:to-blue-100" style="min-height: 200px;"><div class="flex flex-col items-center justify-center h-full py-8"><div class="transition-transform duration-300 group-hover:scale-105"><div class="relative"><div class="text-6xl mb-4 opacity-80">📁</div></div></div><div class="text-center max-w-xs"><p class="text-lg font-semibold text-gray-700 mb-2">Drag &amp; drop your files</p><p class="text-sm text-gray-500 mb-3">or <span class="text-blue-600 font-medium underline decoration-2 underline-offset-2">browse from device</span></p><p class="text-xs text-gray-400">Supports: Images, PDFs, Documents (Max 10MB each)</p></div></div></div><button type="button" disabled="" class="w-full mt-6 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg bg-gray-300 text-gray-500 cursor-not-allowed"><div class="flex items-center justify-center gap-3"><span>🚀</span><span>Upload 0 Files</span></div></button></div></div><style>
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.