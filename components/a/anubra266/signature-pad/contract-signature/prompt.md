# Build Signature Pad in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Signature Pad screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `signature-pad`
- Variant: `contract-signature`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: signature-pad
- Demo slug: contract-signature
- Title: signature-pad
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div class="max-w-md w-full space-y-4"><div class="text-center space-y-2"><div class="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div><h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Contract Agreement</h2><p class="text-sm text-gray-600 dark:text-gray-400">Please review and sign the agreement below</p></div><div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 space-y-2"><h3 class="font-medium text-gray-900 dark:text-gray-100 text-sm">Terms and Conditions</h3><p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">By signing this document, you agree to the terms and conditions outlined in our service agreement. This signature constitutes your acceptance of all terms and represents your legal consent.</p></div><div class="space-y-2"><div data-scope="signature-pad" data-part="root" id="signature-«r0»"><label data-scope="signature-pad" data-part="label" id="signature-label-«r0»" for="signature-input-«r0»" class="text-sm font-medium text-gray-900 dark:text-gray-100">Digital Signature *</label><div data-scope="signature-pad" data-part="control" tabindex="0" id="signature-control-«r0»" role="application" aria-roledescription="signature pad" aria-label="signature pad" class="relative w-full h-32 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-300 dark:border-gray-600" style="position: relative; touch-action: none; user-select: none;"><svg data-scope="signature-pad" data-part="segment" class="w-full h-full stroke-gray-900 dark:stroke-gray-100 fill-gray-900 dark:fill-gray-100" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; pointer-events: none;"><title>Signature</title></svg><button data-scope="signature-pad" data-part="clear-trigger" type="button" aria-label="clear signature" hidden="" class="absolute top-2 right-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-xs font-medium">Clear</button><div data-scope="signature-pad" data-part="guide" class="absolute bottom-4 left-3 right-3 border-b-2 border-dashed border-gray-400 dark:border-gray-500"></div></div></div><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert w-4 h-4 text-gray-400" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg><span class="text-sm text-gray-600 dark:text-gray-400">Signature required</span></div></div><div class="flex space-x-3"><button disabled="" class="flex-1 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:text-gray-500 dark:disabled:text-gray-400 hover:bg-blue-700 dark:hover:bg-blue-600 disabled:hover:bg-gray-300 dark:disabled:hover:bg-gray-600">Submit Agreement</button></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
