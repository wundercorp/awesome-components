# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/collapsible-1/collapsible-faq-style
- Registry URL: https://21st.dev/r/anubra266/collapsible-1
- Author: anubra266
- Component slug: collapsible-1
- Demo slug: collapsible-faq-style
- Title: collapsible-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/collapsible-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__collapsible-1__collapsible-faq-style.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__collapsible-1__collapsible-faq-style.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-2xl space-y-4"><h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">Frequently Asked Questions</h3><div data-scope="collapsible" data-part="root" data-state="closed" dir="ltr" id="collapsible:«r0»" class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"><button data-scope="collapsible" data-part="trigger" id="collapsible:«r0»:trigger" dir="ltr" type="button" data-state="closed" aria-controls="collapsible:«r0»:content" aria-expanded="false" class="w-full flex items-center justify-between px-6 py-4 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"><span class="font-medium text-gray-900 dark:text-gray-100 pr-4">What is the return policy?</span><div data-scope="collapsible" data-part="indicator" dir="ltr" data-state="closed" class="transition-transform duration-200 shrink-0 data-[state=open]:rotate-180"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-5 h-5 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button><div data-scope="collapsible" data-part="content" data-collapsible="" data-state="closed" id="collapsible:«r0»:content" hidden="" class="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1" style="--height: 0px; --width: 0px;"><div class="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"><p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">You can return any item within 30 days of purchase for a full refund, provided it's in its original condition.</p></div></div></div><div data-scope="collapsible" data-part="root" data-state="closed" dir="ltr" id="collapsible:«r1»" class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"><button data-scope="collapsible" data-part="trigger" id="collapsible:«r1»:trigger" dir="ltr" type="button" data-state="closed" aria-controls="collapsible:«r1»:content" aria-expanded="false" class="w-full flex items-center justify-between px-6 py-4 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"><span class="font-medium text-gray-900 dark:text-gray-100 pr-4">How long does shipping take?</span><div data-scope="collapsible" data-part="indicator" dir="ltr" data-state="closed" class="transition-transform duration-200 shrink-0 data-[state=open]:rotate-180"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-5 h-5 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button><div data-scope="collapsible" data-part="content" data-collapsible="" data-state="closed" id="collapsible:«r1»:content" hidden="" class="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1" style="--height: 0px; --width: 0px;"><div class="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"><p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days.</p></div></div></div><div data-scope="collapsible" data-part="root" data-state="closed" dir="ltr" id="collapsible:«r2»" class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"><button data-scope="collapsible" data-part="trigger" id="collapsible:«r2»:trigger" dir="ltr" type="button" data-state="closed" aria-controls="collapsible:«r2»:content" aria-expanded="false" class="w-full flex items-center justify-between px-6 py-4 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"><span class="font-medium text-gray-900 dark:text-gray-100 pr-4">Do you ship internationally?</span><div data-scope="collapsible" data-part="indicator" dir="ltr" data-state="closed" class="transition-transform duration-200 shrink-0 data-[state=open]:rotate-180"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-5 h-5 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button><div data-scope="collapsible" data-part="content" data-collapsible="" data-state="closed" id="collapsible:«r2»:content" hidden="" class="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1" style="--height: 0px; --width: 0px;"><div class="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"><p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Yes, we ship to most countries worldwide. International shipping typically takes 7-14 business days.</p></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.