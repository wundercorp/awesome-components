# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/prebuiltui/faq-sections/clean-faq-section-with-gradient
- Registry URL: https://21st.dev/r/prebuiltui/faq-sections
- Author: prebuiltui
- Component slug: faq-sections
- Demo slug: clean-faq-section-with-gradient
- Title: faq-sections
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/prebuiltui/faq-sections with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/prebuiltui__faq-sections__clean-faq-section-with-gradient.html
- Local screenshot file: generated-21st-prompts/screenshots/prebuiltui__faq-sections__clean-faq-section-with-gradient.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }
            </style><div class="flex flex-col items-center text-center text-slate-800 px-3"><p class="text-base font-medium text-slate-600">FAQ</p><h1 class="text-3xl md:text-4xl font-semibold mt-2">Frequently Asked Questions</h1><p class="text-sm text-slate-500 mt-4 max-w-sm">Proactively answering FAQs boosts user confidence and cuts down on support tickets.</p><div class="max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left"><div class="flex flex-col items-start w-full"><div class="flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 p-4 rounded"><h2 class="text-sm">Lightning-Fast Performance</h2><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class=" transition-all duration-500 ease-in-out"><path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out opacity-0 max-h-0 -translate-y-2">Built with speed — minimal load times and optimized rendering.</p></div><div class="flex flex-col items-start w-full"><div class="flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 p-4 rounded"><h2 class="text-sm">Fully Customizable Components</h2><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class=" transition-all duration-500 ease-in-out"><path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out opacity-0 max-h-0 -translate-y-2">Easily adjust styles, structure, and behavior to match your project needs.</p></div><div class="flex flex-col items-start w-full"><div class="flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 p-4 rounded"><h2 class="text-sm">Responsive by Default</h2><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class=" transition-all duration-500 ease-in-out"><path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out opacity-0 max-h-0 -translate-y-2">Every component are responsive by default — no extra CSS required.</p></div><div class="flex flex-col items-start w-full"><div class="flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 p-4 rounded"><h2 class="text-sm">Tailwind CSS Powered</h2><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class=" transition-all duration-500 ease-in-out"><path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out opacity-0 max-h-0 -translate-y-2">Built using Tailwind utility classes — no extra CSS or frameworks required.</p></div><div class="flex flex-col items-start w-full"><div class="flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 p-4 rounded"><h2 class="text-sm">Dark Mode Support</h2><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class=" transition-all duration-500 ease-in-out"><path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out opacity-0 max-h-0 -translate-y-2">All components come ready with light and dark theme support out of the box.</p></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.