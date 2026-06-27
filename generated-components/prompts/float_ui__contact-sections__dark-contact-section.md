# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/float_ui/contact-sections/dark-contact-section
- Registry URL: https://21st.dev/r/float_ui/contact-sections
- Author: float_ui
- Component slug: contact-sections
- Demo slug: dark-contact-section
- Title: contact-sections
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/float_ui/contact-sections with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/float_ui__contact-sections__dark-contact-section.html
- Local screenshot file: generated-21st-prompts/screenshots/float_ui__contact-sections__dark-contact-section.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="relative py-28 bg-gray-900"><div class="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8"><div class="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0"><h3 class="text-cyan-400 font-semibold">Contact</h3><p class="text-white text-3xl font-semibold sm:text-4xl">Get in touch</p><p class="text-gray-300">We’d love to hear from you! Please fill out the form bellow.</p></div><div class="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl"><form class="space-y-5"><div><label class="font-medium">Full name</label><input required="" class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" type="text"></div><div><label class="font-medium">Email</label><input required="" class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" type="email"></div><div><label class="font-medium">Phone number</label><div class="relative mt-2"><div class="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2"><select class="text-sm bg-transparent outline-none rounded-lg h-full"><option>US</option><option>ES</option><option>MR</option></select></div><input placeholder="+1 (555) 000-000" required="" class="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" type="number"></div></div><div><label class="font-medium">Message</label><textarea required="" class="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea></div><button class="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">Submit</button></form></div></div><div class="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]" style="background: linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%);"></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.