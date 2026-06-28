# Build Cookies Banner in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Cookies Banner screenshot](screenshot.png)

## Component

- Author group: `shadway`
- Component: `cookies-banner`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shadway
- Component slug: cookies-banner
- Demo slug: default
- Title: cookies-banner
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"><div role="dialog" aria-modal="true" aria-labelledby="cookie-title" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4
        bg-black/30 dark:bg-black/50
      "><div class="
          relative w-full max-w-md rounded-2xl border
          bg-white text-neutral-800 border-neutral-200 shadow-xl
          dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-800
          p-5 sm:p-7
          
        "><div class="mx-auto mb-4 sm:mb-5 h-16 w-16 drop-shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="12.439992904663086 20.160001754760742 231.07997131347656 206.8550567626953" class="h-full w-full" role="img" aria-label="Cookie illustration"><g fill="none" stroke="none"><g transform="scale(4,4)"><path d="M57.8,20.28l-3.8,-0.49l-1.09,-2.55l-2.91,-1.25h-2l-2.5,-2.19c0,0 -3.5,-0.81 -3.5,-2.81c0,-0.61 -0.09,-1.6 -0.22,-2.68c-0.59,0.03 -1.19,0.07 -1.78,0.07c-2.1,0 -4.25,-0.43 -6.15,0.19c-1.97,0.64 -3.45,2.27 -5.08,3.46c-1.65,1.2 -3.66,2.12 -4.86,3.77c-1.19,1.64 -1.45,3.82 -2.09,5.78c-0.62,1.9 -1.71,3.8 -1.71,5.91c0,2.11 1.09,4.01 1.71,5.91c0.64,1.97 0.9,4.15 2.09,5.78c1.2,1.65 3.21,2.57 4.86,3.77c1.64,1.19 3.12,2.82 5.08,3.46c1.9,0.62 4.04,0.19 6.15,0.19c2.11,0 4.25,0.43 6.15,-0.19c1.97,-0.64 3.45,-2.27 5.08,-3.46c1.65,-1.2 3.66,-2.12 4.86,-3.77c1.19,-1.64 1.45,-3.82 2.09,-5.78c0.62,-1.9 1.71,-3.8 1.71,-5.91c0,-2.11 -1.09,-4.01 -1.71,-5.91c-0.14,-0.43 -0.26,-0.87 -0.38,-1.31z" fill="#894c3d"></path><circle cx="52" cy="29" r="2" fill="#702e24"></circle><circle cx="36" cy="15" r="2" fill="#702e24"></circle><path d="M46,7l3,5l1,-3.16v-2.79c0,0 -4,-0.05 -4,0.95z" fill="#894c3d"></path><path d="M54,10.9l-0.62,1.1c1.02,1.49 2.2,2.03 3.62,1c0,0 -1,-4.2 -3,-2.1z" fill="#894c3d"></path><path d="M43.89,36.5c0,2.1 -1.09,4.01 -1.71,5.91c-0.62,1.9 -0.9,4.15 -2.09,5.78c-1.19,1.63 -3.21,2.57 -4.86,3.77c-1.65,1.2 -3.12,2.82 -5.08,3.46c-1.96,0.64 -4.04,0.19 -6.15,0.19c-2.11,0 -4.25,0.43 -6.15,-0.19c-1.9,-0.62 -3.45,-2.27 -5.08,-3.46c-1.63,-1.19 -3.66,-2.12 -4.86,-3.77c-1.2,-1.65 -1.45,-3.82 -2.09,-5.78c-0.64,-1.96 -1.71,-3.8 -1.71,-5.91c0,-2.11 1.09,-4.01 1.71,-5.91c0.62,-1.9 0.9,-4.15 2.09,-5.78c1.19,-1.63 3.21,-2.57 4.86,-3.77c1.65,-1.2 3.12,-2.82 5.08,-3.46c1.96,-0.64 4.04,-0.19 6.15,-0.19c2.11,0 4.25,-0.43 6.15,0.19c1.9,0.62 3.45,2.27 5.08,3.46c1.63,1.19 3.66,2.12 4.86,3.77c1.2,1.65 1.45,3.82 2.09,5.78c0.64,1.96 1.71,3.8 1.71,5.91z" fill="#a26a55"></path><circle cx="36" cy="38" r="2" fill="#702e24"></circle><circle cx="23" cy="37" r="2" fill="#702e24"></circle><circle cx="20" cy="26" r="2" fill="#702e24"></circle><circle cx="18" cy="46" r="2" fill="#702e24"></circle><path d="M59.72,22.87c-0.21,-0.53 -0.42,-1.06 -0.59,-1.59c-0.13,-0.41 -0.25,-0.83 -0.36,-1.26c-0.1,-0.39 -0.44,-0.68 -0.84,-0.74l-3.24,-0.42l-0.86,-2.02c-0.1,-0.24 -0.29,-0.43 -0.53,-0.53l-2.91,-1.25c-0.12,-0.05 -0.26,-0.08 -0.39,-0.08h-1.62l-2.22,-1.94c-0.12,-0.11 -0.27,-0.18 -0.43,-0.22c-0.85,-0.2 -2.73,-0.94 -2.73,-1.83c0,-0.59 -0.08,-1.5 -0.23,-2.8c-0.06,-0.53 -0.54,-0.9 -1.05,-0.88c-1.17,0.07 -2.34,0.06 -3.51,0c-1.55,-0.09 -3.15,-0.19 -4.67,0.31c-1.58,0.51 -2.82,1.54 -4.02,2.53c-0.45,0.37 -0.89,0.74 -1.35,1.07c-0.46,0.34 -0.96,0.65 -1.45,0.97c-1.31,0.83 -2.66,1.7 -3.62,3.02c-0.24,0.33 -0.45,0.7 -0.65,1.11c-0.08,0 -0.16,0 -0.24,0c-1.55,-0.09 -3.15,-0.19 -4.67,0.31c-1.58,0.51 -2.82,1.54 -4.02,2.53c-0.45,0.37 -0.89,0.74 -1.35,1.07c-0.46,0.34 -0.96,0.65 -1.45,0.97c-1.31,0.83 -2.66,1.7 -3.62,3.02c-0.96,1.32 -1.37,2.88 -1.76,4.38c-0.15,0.57 -0.29,1.13 -0.47,1.68c-0.17,0.53 -0.38,1.05 -0.59,1.59c-0.57,1.45 -1.17,2.94 -1.17,4.63c0,1.69 0.59,3.18 1.17,4.63c0.21,0.53 0.42,1.06 0.59,1.59c0.18,0.55 0.33,1.12 0.47,1.68c0.39,1.51 0.8,3.06 1.76,4.38c0.96,1.33 2.32,2.19 3.62,3.02c0.5,0.32 0.99,0.63 1.46,0.97c0.46,0.33 0.9,0.7 1.35,1.07c1.2,0.99 2.44,2.02 4.01,2.53c0.92,0.3 1.86,0.38 2.8,0.38c0.62,0 1.25,-0.04 1.86,-0.07c1.19,-0.07 2.39,-0.07 3.58,0c1.55,0.09 3.15,0.19 4.67,-0.31c1.58,-0.51 2.82,-1.54 4.02,-2.53c0.45,-0.37 0.89,-0.74 1.35,-1.07c0.46,-0.34 0.96,-0.65 1.45,-0.97c1.31,-0.83 2.66,-1.7 3.62,-3.02c0.26,-0.35 0.47,-0.73 0.66,-1.11h0.23c0.62,0.05 1.24,0.09 1.87,0.09c0.94,0 1.89,-0.08 2.8,-0.38c1.58,-0.51 2.82,-1.54 4.02,-2.53c0.45,-0.37 0.89,-0.74 1.35,-1.07c0.46,-0.34 0.96,-0.65 1.45,-0.97c1.31,-0.83 2.66,-1.7 3.62,-3.02c0.96,-1.32 1.37,-2.88 1.76,-4.38c0.15,-0.57 0.29,-1.13 0.47,-1.68c0.17,-0.53 0.38,-1.05 0.59,-1.59c0.57,-1.45 1.17,-2.94 1.17,-4.63c0,-1.69 -0.59,-3.18 -1.17,-4.63zM39.28,47.6c-0.74,1.02 -1.88,1.74 -3.08,2.51c-0.53,0.34 -1.06,0.68 -1.56,1.04c-0.49,0.36 -0.97,0.75 -1.45,1.15c-1.1,0.91 -2.14,1.77 -3.36,2.17c-1.16,0.38 -2.51,0.3 -3.93,0.21c-1.27,-0.07 -2.54,-0.07 -3.81,0c-1.42,0.09 -2.77,0.16 -3.93,-0.21c-1.22,-0.4 -2.26,-1.26 -3.36,-2.17c-0.48,-0.4 -0.96,-0.79 -1.45,-1.15c-0.5,-0.36 -1.03,-0.7 -1.56,-1.04c-1.2,-0.77 -2.34,-1.49 -3.08,-2.51c-0.74,-1.01 -1.08,-2.32 -1.44,-3.71c-0.16,-0.6 -0.32,-1.21 -0.51,-1.8c-0.18,-0.57 -0.41,-1.13 -0.64,-1.71c-0.53,-1.33 -1.03,-2.58 -1.03,-3.89c0,-1.31 0.5,-2.56 1.03,-3.89c0.23,-0.57 0.45,-1.14 0.64,-1.71c0.19,-0.59 0.35,-1.19 0.51,-1.8c0.36,-1.39 0.7,-2.7 1.44,-3.71c0.74,-1.02 1.88,-1.74 3.08,-2.51c0.53,-0.34 1.06,-0.68 1.56,-1.04c0.49,-0.36 0.97,-0.75 1.45,-1.15c1.1,-0.91 2.14,-1.77 3.36,-2.17c0.67,-0.22 1.41,-0.28 2.18,-0.28c0.56,0 1.15,0.03 1.75,0.07c1.27,0.07 2.54,0.07 3.81,0c1.42,-0.09 2.77,-0.16 3.93,0.21c1.22,0.4 2.26,1.26 3.36,2.17c0.48,0.4 0.96,0.79 1.45,1.15c0.5,0.36 1.03,0.7 1.56,1.04c1.2,0.77 2.34,1.49 3.08,2.51c0.74,1.01 1.08,2.32 1.44,3.71c0.16,0.6 0.32,1.21 0.51,1.8c0.18,0.57 0.41,1.13 0.64,1.71c0.53,1.33 1.03,2.58 1.03,3.89c0,1.31 -0.5,2.56 -1.03,3.89zM57.86,31.39c-0.23,0.57 -0.45,1.14 -0.64,1.71c-0.19,0.59 -0.35,1.19 -0.51,1.8c-0.36,1.39 -0.7,2.7 -1.44,3.71c-0.74,1.02 -1.88,1.74 -3.08,2.51c-0.53,0.34 -1.06,0.68 -1.56,1.04c-0.49,0.36 -0.97,0.75 -1.45,1.15c-1.1,0.91 -2.14,1.77 -3.36,2.17c-1.06,0.34 -2.27,0.31 -3.54,0.23c0.13,-0.44 0.25,-0.87 0.36,-1.31c0.15,-0.57 0.29,-1.13 0.47,-1.68c0.17,-0.53 0.38,-1.05 0.59,-1.59c0.57,-1.45 1.17,-2.94 1.17,-4.63c0,-1.69 -0.59,-3.18 -1.17,-4.63c-0.21,-0.53 -0.42,-1.06 -0.59,-1.59c-0.18,-0.55 -0.33,-1.12 -0.47,-1.68c-0.39,-1.51 -0.8,-3.06 -1.76,-4.38c-0.96,-1.33 -2.32,-2.19 -3.62,-3.02c-0.5,-0.32 -0.99,-0.63 -1.46,-0.97c-0.46,-0.33 -0.9,-0.7 -1.35,-1.07c-1.2,-0.99 -2.44,-2.02 -4.01,-2.53c-1.52,-0.5 -3.12,-0.4 -4.67,-0.31c-0.34,0.02 -0.69,0.02 -1.03,0.03c0.74,-0.99 1.86,-1.71 3.04,-2.46c0.53,-0.34 1.06,-0.68 1.56,-1.04c0.49,-0.36 0.97,-0.75 1.45,-1.15c1.1,-0.91 2.14,-1.77 3.36,-2.17c1.16,-0.38 2.51,-0.3 3.93,-0.21c0.93,0.05 1.86,0.09 2.8,0.05c0.07,0.72 0.11,1.27 0.11,1.63c0,2.42 3.05,3.45 4.02,3.72l2.32,2.03c0.18,0.16 0.42,0.25 0.66,0.25h1.79l2.36,1.01l0.93,2.18c0.14,0.33 0.44,0.55 0.79,0.6l3.14,0.41c0.07,0.24 0.14,0.48 0.21,0.71c0.18,0.57 0.41,1.13 0.64,1.71c0.53,1.33 1.03,2.58 1.03,3.89c0,1.31 -0.5,2.56 -1.03,3.89z" fill="#1a2c3d"></path><path d="M52,26c-1.65,0 -3,1.35 -3,3c0,1.65 1.35,3 3,3c1.65,0 3,-1.35 3,-3c0,-1.65 -1.35,-3 -3,-3zM52,30c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0.55,0 1,0.45 1,1c0,0.55 -0.45,1 -1,1z" fill="#1a2c3d"></path><circle cx="49.5" cy="38.5" r="1.5" fill="#1a2c3d"></circle><circle cx="47.5" cy="22.5" r="1.5" fill="#1a2c3d"></circle><path d="M36,12c-1.65,0 -3,1.35 -3,3c0,1.65 1.35,3 3,3c1.65,0 3,-1.35 3,-3c0,-1.65 -1.35,-3 -3,-3zM36,16c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0.55,0 1,0.45 1,1c0,0.55 -0.45,1 -1,1z" fill="#1a2c3d"></path><path d="M48.14,12.51c0.18,0.3 0.51,0.49 0.86,0.49c0.04,0 0.08,0 0.12,0c0.39,-0.05 0.72,-0.32 0.84,-0.69l1,-3.16c0.03,-0.1 0.05,-0.2 0.05,-0.3v-2.79c0,-0.46 -0.23,-1.02 -1.35,-1.02c-0.62,0 -1.56,0.05 -2.36,0.19c-0.57,0.1 -2.29,0.4 -2.29,1.77c0,0.18 0.05,0.36 0.14,0.51l3,5zM49,7.04v1.63l-0.28,0.9l-1.4,-2.33c0.46,-0.1 1.12,-0.17 1.68,-0.21z" fill="#1a2c3d"></path><path d="M55.11,14.49c0.16,0.03 0.31,0.04 0.47,0.04c0.67,0 1.34,-0.24 2,-0.72c0.33,-0.24 0.48,-0.65 0.39,-1.04c-0.16,-0.69 -0.82,-2.96 -2.39,-3.39c-0.55,-0.15 -1.39,-0.12 -2.3,0.83c-0.06,0.06 -0.11,0.12 -0.15,0.19l-0.62,1.1c-0.19,0.33 -0.17,0.75 0.04,1.06c0.78,1.13 1.62,1.76 2.56,1.93zM54.8,11.51c0.17,-0.16 0.26,-0.19 0.26,-0.2c0.18,0.07 0.49,0.57 0.74,1.19c-0.18,0.05 -0.29,0.03 -0.34,0.02c-0.27,-0.05 -0-57,-0.25 -0.88,-0.61l0.23,-0.4z" fill="#1a2c3d"></path><path d="M36,35c-1.65,0 -3,1.35 -3,3c0,1.65 1.35,3 3,3c1.65,0 3,-1.35 3,-3c0,-1.65 -1.35,-3 -3,-3zM36,39c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0.55,0 1,0.45 1,1c0,0.55 -0.45,1 -1,1z" fill="#1a2c3d"></path><circle cx="29.5" cy="46.5" r="1.5" fill="#1a2c3d"></circle><circle cx="12.5" cy="38.5" r="1.5" fill="#1a2c3d"></circle><circle cx="34.5" cy="29.5" r="1.5" fill="#1a2c3d"></circle><path d="M23,34c-1.65,0 -3,1.35 -3,3c0,1.65 1.35,3 3,3c1.65,0 3,-1.35 3,-3c0,-1.65 -1.35,-3 -3,-3zM23,38c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0.55,0 1,0.45 1,1c0,0.55 -0.45,1 -1,1z" fill="#1a2c3d"></path><path d="M20,29c1.65,0 3,-1.35 3,-3c0,-1.65 -1.35,-3 -3,-3c-1.65,0 -3,1.35 -3,3c0,1.65 1.35,3 3,3zM20,25c0.55,0 1,0.45 1,1c0,0.55 -0.45,1 -1,1c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1z" fill="#1a2c3d"></path><path d="M18,43c-1.65,0 -3,1.35 -3,3c0,1.65 1.35,3 3,3c1.65,0 3,-1.35 3,-3c0,-1.65 -1.35,-3 -3,-3zM18,47c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0,0.55 -0.45,1 -1,1z" fill="#1a2c3d"></path></g></g></svg></div><div class="text-center mb-5"><h2 id="cookie-title" class="text-lg sm:text-xl font-bold text-neutral-700 dark:text-neutral-100">Freshly Baked Cookies!</h2><p class="mt-2 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">Our site uses cookies to provide you with a smooth and personalized experience. By clicking “Accept”, you agree to our <a href="/" class="font-semibold underline text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">Privacy Policy</a>.</p></div><div class="flex flex-col sm:flex-row gap-2 sm:gap-3"><button type="button" class="relative inline-flex items-center justify-center px-4 py-2.5 sm:px-5 font-semibold text-white bg-amber-700 hover:bg-amber-800 active:bg-amber-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors">Accept</button><button type="button" class="relative inline-flex items-center justify-center px-4 py-2.5 sm:px-5 font-semibold bg-neutral-200 text-neutral-800 hover:bg-neutral-300 active:bg-neutral-400 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 transition-colors">Decline</button></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
