# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shugar/input/disabled
- Registry URL: https://21st.dev/r/shugar/input
- Author: shugar
- Component slug: input
- Demo slug: disabled
- Title: input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shugar/input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shugar__input__disabled.html
- Local screenshot file: generated-21st-prompts/screenshots/shugar__input__disabled.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-start gap-4"><div class="flex flex-col gap-2"><div class="flex items-center duration-150 font-sans border border-gray-alpha-400 hover:border-gray-alpha-500 focus-within:border-transparent focus-within:shadow-focus-input h-10 text-sm rounded-md cursor-not-allowed bg-gray-100"><input class="w-full inline-flex appearance-none placeholder:text-gray-900 placeholder:opacity-70 outline-none px-3 cursor-not-allowed bg-gray-100 text-gray-700" placeholder="Disabled with placeholder" disabled="" aria-labelledby="Demo" value=""></div></div><div class="flex flex-col gap-2"><div class="flex items-center duration-150 font-sans border border-gray-alpha-400 hover:border-gray-alpha-500 focus-within:border-transparent focus-within:shadow-focus-input h-10 text-sm rounded-md cursor-not-allowed bg-gray-100"><input class="w-full inline-flex appearance-none placeholder:text-gray-900 placeholder:opacity-70 outline-none px-3 cursor-not-allowed bg-gray-100 text-gray-700" disabled="" aria-labelledby="Demo" value="Disabled with value"></div></div><div class="flex flex-col gap-2"><div class="flex items-center duration-150 font-sans border border-gray-alpha-400 hover:border-gray-alpha-500 focus-within:border-transparent focus-within:shadow-focus-input h-10 text-sm rounded-md cursor-not-allowed bg-gray-100"><div class="text-gray-700 fill-gray-700 h-full flex items-center justify-center bg-background-200 border-r border-gray-alpha-400 px-3 rounded-l-md"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 10.75V11.5H8.75V10.75V6.56066L10.2197 8.03033L10.75 8.56066L11.8107 7.5L11.2803 6.96967L8.53033 4.21967C8.23744 3.92678 7.76256 3.92678 7.46967 4.21967L4.71967 6.96967L4.18934 7.5L5.25 8.56066L5.78033 8.03033L7.25 6.56066V10.75ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"></path></svg></div><input class="w-full inline-flex appearance-none placeholder:text-gray-900 placeholder:opacity-70 outline-none px-3 cursor-not-allowed bg-gray-100 text-gray-700" placeholder="Disabled with prefix" disabled="" aria-labelledby="Demo" value=""></div></div><div class="flex flex-col gap-2"><div class="flex items-center duration-150 font-sans border border-gray-alpha-400 hover:border-gray-alpha-500 focus-within:border-transparent focus-within:shadow-focus-input h-10 text-sm rounded-md cursor-not-allowed bg-gray-100"><input class="w-full inline-flex appearance-none placeholder:text-gray-900 placeholder:opacity-70 outline-none px-3 cursor-not-allowed bg-gray-100 text-gray-700" placeholder="Disabled with suffix" disabled="" aria-labelledby="Demo" value=""><div class="text-gray-700 fill-gray-700 h-full flex items-center justify-center bg-background-200 border-l border-gray-alpha-400 px-3 rounded-r-md"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 10.75V11.5H8.75V10.75V6.56066L10.2197 8.03033L10.75 8.56066L11.8107 7.5L11.2803 6.96967L8.53033 4.21967C8.23744 3.92678 7.76256 3.92678 7.46967 4.21967L4.71967 6.96967L4.18934 7.5L5.25 8.56066L5.78033 8.03033L7.25 6.56066V10.75ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"></path></svg></div></div></div><div class="flex flex-col gap-2"><div class="flex items-center duration-150 font-sans border border-gray-alpha-400 hover:border-gray-alpha-500 focus-within:border-transparent focus-within:shadow-focus-input h-10 text-sm rounded-md cursor-not-allowed bg-gray-100"><div class="text-gray-700 fill-gray-700 h-full flex items-center justify-center bg-background-200 border-r border-gray-alpha-400 px-3 rounded-l-md">https://</div><input class="w-full inline-flex appearance-none placeholder:text-gray-900 placeholder:opacity-70 outline-none px-3 cursor-not-allowed bg-gray-100 text-gray-700" placeholder="Disabled with prefix and suffix" disabled="" aria-labelledby="Demo" value=""><div class="text-gray-700 fill-gray-700 h-full flex items-center justify-center bg-background-200 border-l border-gray-alpha-400 px-3 rounded-r-md">.com</div></div></div><div class="flex flex-col gap-2"><div class="flex items-center duration-150 font-sans border border-gray-alpha-400 hover:border-gray-alpha-500 focus-within:border-transparent focus-within:shadow-focus-input h-10 text-sm rounded-md cursor-not-allowed bg-gray-100"><div class="text-gray-700 fill-gray-700 h-full flex items-center justify-center pl-3 rounded-l-md"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 10.75V11.5H8.75V10.75V6.56066L10.2197 8.03033L10.75 8.56066L11.8107 7.5L11.2803 6.96967L8.53033 4.21967C8.23744 3.92678 7.76256 3.92678 7.46967 4.21967L4.71967 6.96967L4.18934 7.5L5.25 8.56066L5.78033 8.03033L7.25 6.56066V10.75ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"></path></svg></div><input class="w-full inline-flex appearance-none placeholder:text-gray-900 placeholder:opacity-70 outline-none px-3 cursor-not-allowed bg-gray-100 text-gray-700" placeholder="Disabled with prefix and suffix" disabled="" aria-labelledby="Demo" value=""><div class="text-gray-700 fill-gray-700 h-full flex items-center justify-center pr-3  rounded-r-md"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 10.75V11.5H8.75V10.75V6.56066L10.2197 8.03033L10.75 8.56066L11.8107 7.5L11.2803 6.96967L8.53033 4.21967C8.23744 3.92678 7.76256 3.92678 7.46967 4.21967L4.71967 6.96967L4.18934 7.5L5.25 8.56066L5.78033 8.03033L7.25 6.56066V10.75ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"></path></svg></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.