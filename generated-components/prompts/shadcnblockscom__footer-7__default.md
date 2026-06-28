# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shadcnblockscom/footer-7/default
- Registry URL: https://21st.dev/r/shadcnblockscom/footer-7
- Author: shadcnblockscom
- Component slug: footer-7
- Demo slug: default
- Title: footer-7
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shadcnblockscom/footer-7 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shadcnblockscom__footer-7__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shadcnblockscom__footer-7__default.png

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
<div id="root"><section class="py-32"><div class="container mx-auto"><div class="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left"><div class="flex w-full flex-col justify-between gap-6 lg:items-start"><div class="flex items-center gap-2 lg:justify-start"><a href="https://www.shadcnblocks.com"><img alt="logo" title="Shadcnblocks.com" class="h-8" src="https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"></a><h2 class="text-xl font-semibold">Shadcnblocks.com</h2></div><p class="max-w-[70%] text-sm text-muted-foreground">A collection of components for your startup business or side project.</p><ul class="flex items-center space-x-6 text-muted-foreground"><li class="font-medium hover:text-primary"><a href="#" aria-label="Instagram"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a></li><li class="font-medium hover:text-primary"><a href="#" aria-label="Facebook"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a></li><li class="font-medium hover:text-primary"><a href="#" aria-label="Twitter"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></li><li class="font-medium hover:text-primary"><a href="#" aria-label="LinkedIn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a></li></ul></div><div class="grid w-full gap-6 md:grid-cols-3 lg:gap-20"><div><h3 class="mb-4 font-bold">Product</h3><ul class="space-y-3 text-sm text-muted-foreground"><li class="font-medium hover:text-primary"><a href="#">Overview</a></li><li class="font-medium hover:text-primary"><a href="#">Pricing</a></li><li class="font-medium hover:text-primary"><a href="#">Marketplace</a></li><li class="font-medium hover:text-primary"><a href="#">Features</a></li></ul></div><div><h3 class="mb-4 font-bold">Company</h3><ul class="space-y-3 text-sm text-muted-foreground"><li class="font-medium hover:text-primary"><a href="#">About</a></li><li class="font-medium hover:text-primary"><a href="#">Team</a></li><li class="font-medium hover:text-primary"><a href="#">Blog</a></li><li class="font-medium hover:text-primary"><a href="#">Careers</a></li></ul></div><div><h3 class="mb-4 font-bold">Resources</h3><ul class="space-y-3 text-sm text-muted-foreground"><li class="font-medium hover:text-primary"><a href="#">Help</a></li><li class="font-medium hover:text-primary"><a href="#">Sales</a></li><li class="font-medium hover:text-primary"><a href="#">Advertise</a></li><li class="font-medium hover:text-primary"><a href="#">Privacy</a></li></ul></div></div></div><div class="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left"><p class="order-2 lg:order-1">© 2024 Shadcnblocks.com. All rights reserved.</p><ul class="order-1 flex flex-col gap-2 md:order-2 md:flex-row"><li class="hover:text-primary"><a href="#"> Terms and Conditions</a></li><li class="hover:text-primary"><a href="#"> Privacy Policy</a></li></ul></div></div></section></div>
```

## Public registry source files

No public registry source files were available.