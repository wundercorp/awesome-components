# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/pin-input/pin-verification
- Registry URL: https://21st.dev/r/anubra266/pin-input
- Author: anubra266
- Component slug: pin-input
- Demo slug: pin-verification
- Title: pin-input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/pin-input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__pin-input__pin-verification.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__pin-input__pin-verification.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-32"><div class="w-96 text-center"><div class="mb-4"><h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Verify your phone</h3><p class="text-sm text-gray-600 dark:text-gray-400">We sent a verification code to <br><span class="font-medium">+1 (555) 123-4567</span></p></div><div dir="ltr" data-scope="pin-input" data-part="root" id="pin-input:«r0»"><div data-scope="pin-input" data-part="control" dir="ltr" id="pin-input:«r0»:control" class="flex gap-3 justify-center mb-6"><input data-scope="pin-input" data-part="input" dir="ltr" id="pin-input:«r0»:0" data-index="0" data-ownedby="pin-input:«r0»" aria-label="pin code 1 of 6" inputmode="numeric" autocapitalize="none" autocomplete="one-time-code" placeholder="○" class="w-12 h-12 text-center text-lg font-medium border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 transition-all border-gray-200 dark:border-gray-700 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400" type="tel" value=""><input data-scope="pin-input" data-part="input" dir="ltr" id="pin-input:«r0»:1" data-index="1" data-ownedby="pin-input:«r0»" aria-label="pin code 2 of 6" inputmode="numeric" autocapitalize="none" autocomplete="one-time-code" placeholder="○" class="w-12 h-12 text-center text-lg font-medium border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 transition-all border-gray-200 dark:border-gray-700 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400" type="tel" value=""><input data-scope="pin-input" data-part="input" dir="ltr" id="pin-input:«r0»:2" data-index="2" data-ownedby="pin-input:«r0»" aria-label="pin code 3 of 6" inputmode="numeric" autocapitalize="none" autocomplete="one-time-code" placeholder="○" class="w-12 h-12 text-center text-lg font-medium border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 transition-all border-gray-200 dark:border-gray-700 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400" type="tel" value=""><input data-scope="pin-input" data-part="input" dir="ltr" id="pin-input:«r0»:3" data-index="3" data-ownedby="pin-input:«r0»" aria-label="pin code 4 of 6" inputmode="numeric" autocapitalize="none" autocomplete="one-time-code" placeholder="○" class="w-12 h-12 text-center text-lg font-medium border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 transition-all border-gray-200 dark:border-gray-700 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400" type="tel" value=""><input data-scope="pin-input" data-part="input" dir="ltr" id="pin-input:«r0»:4" data-index="4" data-ownedby="pin-input:«r0»" aria-label="pin code 5 of 6" inputmode="numeric" autocapitalize="none" autocomplete="one-time-code" placeholder="○" class="w-12 h-12 text-center text-lg font-medium border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 transition-all border-gray-200 dark:border-gray-700 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400" type="tel" value=""><input data-scope="pin-input" data-part="input" dir="ltr" id="pin-input:«r0»:5" data-index="5" data-ownedby="pin-input:«r0»" aria-label="pin code 6 of 6" inputmode="numeric" autocapitalize="none" autocomplete="one-time-code" placeholder="○" class="w-12 h-12 text-center text-lg font-medium border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 transition-all border-gray-200 dark:border-gray-700 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400" type="tel" value=""></div><input aria-hidden="true" tabindex="-1" id="pin-input:«r0»:hidden" maxlength="6" type="text" value="" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></div><div class="space-y-3"><p class="text-sm text-gray-500 dark:text-gray-400">Didn't receive the code?</p><button class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">Resend code</button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.