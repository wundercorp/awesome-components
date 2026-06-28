# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shugar/select-1/prefix-and-suffix
- Registry URL: https://21st.dev/r/shugar/select-1
- Author: shugar
- Component slug: select-1
- Demo slug: prefix-and-suffix
- Title: select-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shugar/select-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shugar__select-1__prefix-and-suffix.html
- Local screenshot file: generated-21st-prompts/screenshots/shugar__select-1__prefix-and-suffix.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex gap-8 items-center justify-center"><div><div class="relative flex items-center fill-[#666666] dark:fill-[#a1a1a1] hover:fill-[#171717] hover:dark:fill-[#ededed]"><style>
          .xsmallIconContainer svg {
              width: 16px;
              height: 12px;
          }
          .smallIconContainer, .mediumIconContainer, .largeIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style><select id="select" class="font-sans appearance-none w-full border rounded-[5px] duration-200 outline-none h-8 text-sm px-9 text-gray-1000 bg-background-100 cursor-pointer ring-gray-alpha-500 ring-opacity-100 focus:ring-[3px] border-gray-alpha-400"><option value="" disabled="">Small</option></select><span class="inline-flex absolute pointer-events-none duration-150 smallIconContainer left-3"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 10.75V11.5H8.75V10.75V6.56066L10.2197 8.03033L10.75 8.56066L11.8107 7.5L11.2803 6.96967L8.53033 4.21967C8.23744 3.92678 7.76256 3.92678 7.46967 4.21967L4.71967 6.96967L4.18934 7.5L5.25 8.56066L5.78033 8.03033L7.25 6.56066V10.75ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"></path></svg></span><span class="inline-flex absolute pointer-events-none duration-150 smallIconContainer right-3"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 10.75V11.5H8.75V10.75V6.56066L10.2197 8.03033L10.75 8.56066L11.8107 7.5L11.2803 6.96967L8.53033 4.21967C8.23744 3.92678 7.76256 3.92678 7.46967 4.21967L4.71967 6.96967L4.18934 7.5L5.25 8.56066L5.78033 8.03033L7.25 6.56066V10.75ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"></path></svg></span></div></div><div><div class="relative flex items-center fill-[#666666] dark:fill-[#a1a1a1] hover:fill-[#171717] hover:dark:fill-[#ededed]"><style>
          .xsmallIconContainer svg {
              width: 16px;
              height: 12px;
          }
          .smallIconContainer, .mediumIconContainer, .largeIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style><select id="select" class="font-sans appearance-none w-full border rounded-[5px] duration-200 outline-none h-10 text-sm px-9 text-gray-1000 bg-background-100 cursor-pointer ring-gray-alpha-500 ring-opacity-100 focus:ring-[3px] border-gray-alpha-400"><option value="" disabled="">Default</option></select><span class="inline-flex absolute pointer-events-none duration-150 mediumIconContainer left-3"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 10.75V11.5H8.75V10.75V6.56066L10.2197 8.03033L10.75 8.56066L11.8107 7.5L11.2803 6.96967L8.53033 4.21967C8.23744 3.92678 7.76256 3.92678 7.46967 4.21967L4.71967 6.96967L4.18934 7.5L5.25 8.56066L5.78033 8.03033L7.25 6.56066V10.75ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"></path></svg></span><span class="inline-flex absolute pointer-events-none duration-150 mediumIconContainer right-3"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 10.75V11.5H8.75V10.75V6.56066L10.2197 8.03033L10.75 8.56066L11.8107 7.5L11.2803 6.96967L8.53033 4.21967C8.23744 3.92678 7.76256 3.92678 7.46967 4.21967L4.71967 6.96967L4.18934 7.5L5.25 8.56066L5.78033 8.03033L7.25 6.56066V10.75ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"></path></svg></span></div></div><div><div class="relative flex items-center fill-[#666666] dark:fill-[#a1a1a1] hover:fill-[#171717] hover:dark:fill-[#ededed]"><style>
          .xsmallIconContainer svg {
              width: 16px;
              height: 12px;
          }
          .smallIconContainer, .mediumIconContainer, .largeIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style><select id="select" class="font-sans appearance-none w-full border rounded-[5px] duration-200 outline-none h-12 text-base px-9 rounded-lg text-gray-1000 bg-background-100 cursor-pointer ring-gray-alpha-500 ring-opacity-100 focus:ring-[3px] border-gray-alpha-400"><option value="" disabled="">Large</option></select><span class="inline-flex absolute pointer-events-none duration-150 largeIconContainer left-3"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 10.75V11.5H8.75V10.75V6.56066L10.2197 8.03033L10.75 8.56066L11.8107 7.5L11.2803 6.96967L8.53033 4.21967C8.23744 3.92678 7.76256 3.92678 7.46967 4.21967L4.71967 6.96967L4.18934 7.5L5.25 8.56066L5.78033 8.03033L7.25 6.56066V10.75ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"></path></svg></span><span class="inline-flex absolute pointer-events-none duration-150 largeIconContainer right-3"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 10.75V11.5H8.75V10.75V6.56066L10.2197 8.03033L10.75 8.56066L11.8107 7.5L11.2803 6.96967L8.53033 4.21967C8.23744 3.92678 7.76256 3.92678 7.46967 4.21967L4.71967 6.96967L4.18934 7.5L5.25 8.56066L5.78033 8.03033L7.25 6.56066V10.75ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"></path></svg></span></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.