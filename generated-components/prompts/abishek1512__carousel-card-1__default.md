# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/abishek1512/carousel-card-1/default
- Registry URL: https://21st.dev/r/abishek1512/carousel-card-1
- Author: abishek1512
- Component slug: carousel-card-1
- Demo slug: default
- Title: carousel-card-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/abishek1512/carousel-card-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/abishek1512__carousel-card-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/abishek1512__carousel-card-1__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex w-full h-screen justify-center items-center"><div class="w-full px-4"><div class="relative w-full"><button class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300" aria-label="Previous slide">←</button><button class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300" aria-label="Next slide">→</button><div class="overflow-hidden"><div class="flex" style="transform: translateX(0px); width: 133.333%;"><div class="px-2" style="width: 25%;"><div class="relative overflow-hidden rounded-lg shadow-md group h-full"><div class="w-full h-64"><img alt="" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"></div><div class="absolute inset-0 bg-black/80 text-white p-4 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 overflow-y-auto"><p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices dolor ac massa maximus, blandit ullamcorper eros accumsan. Sed facilisis lacinia venenatis. Donec bibendum, eros ut porttitor consectetur, enim sapien vehicula mi, et consequat lacus turpis vel dolor. Vestibulum sagittis facilisis ipsum vitae suscipit. Proin in nisl sollicitudin, interdum erat eu, consequat odio. Sed auctor felis ac lorem molestie, a cursus elit malesuada. Etiam et varius erat. Aliquam pharetra convallis aliquet. Vestibulum eros ipsum, sodales ac imperdiet id, pellentesque sed tortor.</p></div></div></div><div class="px-2" style="width: 25%;"><div class="relative overflow-hidden rounded-lg shadow-md group h-full"><div class="w-full h-64"><img alt="" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&amp;cs=tinysrgb&amp;w=800"></div><div class="absolute inset-0 bg-black/80 text-white p-4 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 overflow-y-auto"><p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices dolor ac massa maximus, blandit ullamcorper eros accumsan. Sed facilisis lacinia venenatis. Donec bibendum, eros ut porttitor consectetur, enim sapien vehicula mi, et consequat lacus turpis vel dolor. Vestibulum sagittis facilisis ipsum vitae suscipit. Proin in nisl sollicitudin, interdum erat eu, consequat odio. Sed auctor felis ac lorem molestie, a cursus elit malesuada. Etiam et varius erat. Aliquam pharetra convallis aliquet. Vestibulum eros ipsum, sodales ac imperdiet id, pellentesque sed tortor.</p></div></div></div><div class="px-2" style="width: 25%;"><div class="relative overflow-hidden rounded-lg shadow-md group h-full"><div class="w-full h-64"><img alt="" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"></div><div class="absolute inset-0 bg-black/80 text-white p-4 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 overflow-y-auto"><p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices dolor ac massa maximus, blandit ullamcorper eros accumsan. Sed facilisis lacinia venenatis. Donec bibendum, eros ut porttitor consectetur, enim sapien vehicula mi, et consequat lacus turpis vel dolor. Vestibulum sagittis facilisis ipsum vitae suscipit. Proin in nisl sollicitudin, interdum erat eu, consequat odio. Sed auctor felis ac lorem molestie, a cursus elit malesuada. Etiam et varius erat. Aliquam pharetra convallis aliquet. Vestibulum eros ipsum, sodales ac imperdiet id, pellentesque sed tortor.</p></div></div></div><div class="px-2" style="width: 25%;"><div class="relative overflow-hidden rounded-lg shadow-md group h-full"><div class="w-full h-64"><img alt="" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"></div><div class="absolute inset-0 bg-black/80 text-white p-4 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 overflow-y-auto"><p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices dolor ac massa maximus, blandit ullamcorper eros accumsan. Sed facilisis lacinia venenatis. Donec bibendum, eros ut porttitor consectetur, enim sapien vehicula mi, et consequat lacus turpis vel dolor. Vestibulum sagittis facilisis ipsum vitae suscipit. Proin in nisl sollicitudin, interdum erat eu, consequat odio. Sed auctor felis ac lorem molestie, a cursus elit malesuada. Etiam et varius erat. Aliquam pharetra convallis aliquet. Vestibulum eros ipsum, sodales ac imperdiet id, pellentesque sed tortor.</p></div></div></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.