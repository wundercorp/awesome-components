# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/prebuiltui/testimonial/customer-testimonials
- Registry URL: https://21st.dev/r/prebuiltui/testimonial
- Author: prebuiltui
- Component slug: testimonial
- Demo slug: customer-testimonials
- Title: testimonial
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/prebuiltui/testimonial with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/prebuiltui__testimonial__customer-testimonials.html
- Local screenshot file: generated-21st-prompts/screenshots/prebuiltui__testimonial__customer-testimonials.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center px-6 md:px-16 lg:px-24 pt-20 pb-30"><div class="flex flex-col justify-center items-center text-center"><h1 class="text-4xl md:text-[40px] font-bold">Customer Testimonials</h1><p class="text-sm md:text-base text-gray-500/90 mt-2 max-w-[696px]">Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review.</p></div><div class="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10"><div class="bg-white p-6 rounded-xl shadow max-w-xs"><div class="flex items-center gap-3"><img class="w-12 h-12 rounded-full" alt="Emma Rodriguez" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&amp;w=200"><div><p class="font-playfair text-xl">Emma Rodriguez</p><p class="text-gray-500">Barcelona, Spain</p></div></div><div class="flex items-center gap-1 mt-4"><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg></div><p class="text-gray-500 max-w-90 mt-4">"Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!"</p></div><div class="bg-white p-6 rounded-xl shadow max-w-xs"><div class="flex items-center gap-3"><img class="w-12 h-12 rounded-full" alt="Liam Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200"><div><p class="font-playfair text-xl">Liam Johnson</p><p class="text-gray-500">New York, USA</p></div></div><div class="flex items-center gap-1 mt-4"><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg><svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg></div><p class="text-gray-500 max-w-90 mt-4">"I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!"</p></div><div class="bg-white p-6 rounded-xl shadow max-w-xs"><div class="flex items-center gap-3"><img class="w-12 h-12 rounded-full" alt="Sophia Lee" src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&amp;w=200"><div><p class="font-playfair text-xl">Sophia Lee</p><p class="text-gray-500">Seoul, South Korea</p></div></div><div class="flex items-center gap-1 mt-4"><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg><svg class="w-4 h-4 text-yellow-400" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"></path></svg></div><p class="text-gray-500 max-w-90 mt-4">"Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results."</p></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.