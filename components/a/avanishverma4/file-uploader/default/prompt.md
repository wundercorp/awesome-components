# Build File Uploader in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![File Uploader screenshot](screenshot.png)

## Component

- Author group: `avanishverma4`
- Component: `file-uploader`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: avanishverma4
- Component slug: file-uploader
- Demo slug: default
- Title: file-uploader
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full min-h-screen transition-colors duration-300 bg-gray-900"><div class="max-w-4xl mx-auto p-6"><div class="rounded-2xl shadow-xl border bg-gray-800 border-gray-700"><div class="p-8"><div class="flex items-center justify-between mb-8"><div class="flex items-center gap-4"><div class="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload w-8 h-8 text-white" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg></div><div><h1 class="text-3xl font-bold text-white">File Uploader</h1><p class="mt-1 text-gray-300">Upload and manage your files</p></div></div><button class="p-3 rounded-xl border transition-all duration-200 hover:scale-105 hover:shadow-lg border-gray-700 bg-gray-700 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun w-6 h-6" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></button></div><div class="relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 bg-gray-700 border-gray-600 hover:scale-[1.01]"><input multiple="" class="hidden" type="file"><div class="relative z-10"><div class="w-16 h-16 mx-auto mb-6 p-4 rounded-full bg-gray-400 transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload w-full h-full text-white" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg></div><h3 class="text-xl font-bold mb-3 text-white">Upload your files</h3><p class="mb-6 text-lg text-gray-300">Drag and drop files here, or click to browse</p><button class="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">Choose Files</button><div class="mt-4 text-sm text-gray-300">Supports all file types • Maximum 100MB per file</div></div></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
