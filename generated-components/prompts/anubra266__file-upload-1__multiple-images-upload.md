# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/file-upload-1/multiple-images-upload
- Registry URL: https://21st.dev/r/anubra266/file-upload-1
- Author: anubra266
- Component slug: file-upload-1
- Demo slug: multiple-images-upload
- Title: file-upload-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/file-upload-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__file-upload-1__multiple-images-upload.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__file-upload-1__multiple-images-upload.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-scope="file-upload" data-part="root" dir="ltr" id="file:«r0»" class="w-full max-w-4xl"><div class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 bg-gray-50 dark:bg-gray-800 min-h-64"><div class="flex items-center justify-between mb-6"><h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">Uploaded Files (4)</h3><button data-scope="file-upload" data-part="trigger" dir="ltr" id="file:«r0»:trigger" type="button" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload w-3 h-3" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>Add more</button></div><ul data-scope="file-upload" data-part="item-group" dir="ltr"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><li data-scope="file-upload" data-part="item" dir="ltr" id="file:«r0»:item:photo1.jpg" class="relative"><div class="relative aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700"><div data-scope="file-upload" data-part="item-preview" dir="ltr" id="file:«r0»:item-preview:photo1.jpg" type="image/*" class="w-full h-full object-cover"><img data-scope="file-upload" data-part="item-preview-image" alt="preview of photo1.jpg" class="w-full h-full object-cover" src="blob:https://cdn.21st.dev/49f16b7c-a67b-4614-be0e-a3bae1993c4e"></div><button data-scope="file-upload" data-part="item-delete-trigger" dir="ltr" type="button" aria-label="delete file photo1.jpg" class="absolute top-2 right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-3 h-3" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div></li><li data-scope="file-upload" data-part="item" dir="ltr" id="file:«r0»:item:photo2.jpg" class="relative"><div class="relative aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700"><div data-scope="file-upload" data-part="item-preview" dir="ltr" id="file:«r0»:item-preview:photo2.jpg" type="image/*" class="w-full h-full object-cover"><img data-scope="file-upload" data-part="item-preview-image" alt="preview of photo2.jpg" class="w-full h-full object-cover" src="blob:https://cdn.21st.dev/b4076436-62d2-42fa-a73b-16642d2338cb"></div><button data-scope="file-upload" data-part="item-delete-trigger" dir="ltr" type="button" aria-label="delete file photo2.jpg" class="absolute top-2 right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-3 h-3" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div></li><li data-scope="file-upload" data-part="item" dir="ltr" id="file:«r0»:item:photo3.jpg" class="relative"><div class="relative aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700"><div data-scope="file-upload" data-part="item-preview" dir="ltr" id="file:«r0»:item-preview:photo3.jpg" type="image/*" class="w-full h-full object-cover"><img data-scope="file-upload" data-part="item-preview-image" alt="preview of photo3.jpg" class="w-full h-full object-cover" src="blob:https://cdn.21st.dev/d99868a4-09bb-4f2b-8c4a-055f5f23f48a"></div><button data-scope="file-upload" data-part="item-delete-trigger" dir="ltr" type="button" aria-label="delete file photo3.jpg" class="absolute top-2 right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-3 h-3" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div></li><li data-scope="file-upload" data-part="item" dir="ltr" id="file:«r0»:item:photo4.jpg" class="relative"><div class="relative aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700"><div data-scope="file-upload" data-part="item-preview" dir="ltr" id="file:«r0»:item-preview:photo4.jpg" type="image/*" class="w-full h-full object-cover"><img data-scope="file-upload" data-part="item-preview-image" alt="preview of photo4.jpg" class="w-full h-full object-cover" src="blob:https://cdn.21st.dev/65b2f6ec-da84-4e78-952a-653ece361cf9"></div><button data-scope="file-upload" data-part="item-delete-trigger" dir="ltr" type="button" aria-label="delete file photo4.jpg" class="absolute top-2 right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-3 h-3" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div></li></div></ul></div><input id="file:«r0»:input" tabindex="-1" accept="image/*" multiple="" type="file" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></div></div></div></div>
```

## Public registry source files

No public registry source files were available.