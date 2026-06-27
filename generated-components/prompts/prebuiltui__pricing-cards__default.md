# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/prebuiltui/pricing-cards/default
- Registry URL: https://21st.dev/r/prebuiltui/pricing-cards
- Author: prebuiltui
- Component slug: pricing-cards
- Demo slug: default
- Title: pricing-cards
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/prebuiltui/pricing-cards with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/prebuiltui__pricing-cards__default.html
- Local screenshot file: generated-21st-prompts/screenshots/prebuiltui__pricing-cards__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-wrap items-center justify-center gap-6"><div class="w-72 bg-white text-center text-gray-800/80 border border-gray-200 p-6 pb-16 rounded-lg"><p class="font-semibold">Basic</p><h1 class="text-3xl font-semibold">$29<span class="text-gray-500 text-sm font-normal">/month</span></h1><ul class="list-none text-gray-500 text-sm mt-6 space-y-1"><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#6366F1"></path></svg><p>Access to all basic courses</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#6366F1"></path></svg><p>Community support</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#6366F1"></path></svg><p>10 practice projects</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#6366F1"></path></svg><p>Course completion certificate</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#6366F1"></path></svg><p>Basic code review</p></li></ul><button type="button" class="bg-indigo-500 text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-indigo-600 transition-all">Get Started</button></div><div class="w-72 bg-indigo-500 relative text-center text-white border border-gray-500/30 p-6 pb-14 rounded-lg"><p class="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#8789FB] rounded-full">Most Popular</p><p class="font-semibold pt-2">Pro</p><h1 class="text-3xl font-semibold">$79<span class="text-sm font-normal">/month</span></h1><ul class="list-none text-white text-sm mt-6 space-y-1"><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="currentColor"></path></svg><p>Access to all Pro courses</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="currentColor"></path></svg><p>Priority community support</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="currentColor"></path></svg><p>30 practice projects</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="currentColor"></path></svg><p>Course completion certificate</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="currentColor"></path></svg><p>Advance code review</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="currentColor"></path></svg><p>1-on-1 mentoring sessions</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="currentColor"></path></svg><p>Job assistance</p></li></ul><button type="button" class="bg-white text-sm w-full py-2 rounded text-indigo-500 font-medium mt-7 hover:bg-gray-200 transition-all">Get Started</button></div><div class="w-72 bg-white text-center text-gray-800/80 border border-gray-200 p-6 rounded-lg"><p class="font-semibold">Enterprise</p><h1 class="text-3xl font-semibold">$199<span class="text-gray-500 text-sm font-normal">/month</span></h1><ul class="list-none text-gray-500 text-sm mt-6 space-y-1"><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#6366F1"></path></svg><p>Access to all courses</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#6366F1"></path></svg><p>Dedicated support</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#6366F1"></path></svg><p>Unlimited projects</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#6366F1"></path></svg><p>Course completion certificate</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#6366F1"></path></svg><p>Premium code review</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#6366F1"></path></svg><p>Weekly 1-on-1 mentoring</p></li><li class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#6366F1"></path></svg><p>Job guarantee</p></li></ul><button type="button" class="bg-indigo-500 text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-indigo-600 transition-all">Get Started</button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.