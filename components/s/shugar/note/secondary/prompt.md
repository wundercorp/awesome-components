# Build Note in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Note screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `note`
- Variant: `secondary`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: note
- Demo slug: secondary
- Title: note
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-start gap-4 w-3/4"><div class="flex grow items-center justify-between gap-3 rounded-md font-sans leading-6 selection:text-selection-text-color box-border border py-2 px-3 min-h-10 text-[14px] text-gray-900 fill-gray-900 selection:bg-gray-900 border-gray-alpha-400 bg-transparent note-link" style="--geist-link-color: var(--ds-gray-1000);"><div class="flex items-center m-0 gap-3"><div class="w-4 h-4"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.25 7H7H7.74999C8.30227 7 8.74999 7.44772 8.74999 8V11.5V12.25H7.24999V11.5V8.5H7H6.25V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"></path></svg></div><span>This note details some secondary information.</span></div></div><div class="flex grow items-center justify-between gap-3 rounded-md font-sans leading-6 selection:text-selection-text-color box-border border py-2 px-3 min-h-10 text-[14px] text-gray-900 fill-gray-900 selection:bg-gray-900 border-gray-alpha-400 bg-transparent note-link" style="--geist-link-color: var(--ds-gray-1000);"><div class="flex items-center m-0 gap-3"><div class="w-4 h-4"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.25 7H7H7.74999C8.30227 7 8.74999 7.44772 8.74999 8V11.5V12.25H7.24999V11.5V8.5H7H6.25V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"></path></svg></div><span>This note details some secondary information.</span></div><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-1.5 h-8 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-md focus:shadow-focus-ring focus:outline-0"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Upgrade</span></button></div><div class="flex grow items-center justify-between gap-3 rounded-md font-sans leading-6 selection:text-selection-text-color box-border border py-2 px-3 min-h-10 text-[14px] text-gray-900 fill-gray-900 selection:bg-gray-900 border-gray-alpha-400 bg-transparent note-link" style="--geist-link-color: var(--ds-gray-1000);"><div class="flex items-center m-0 gap-3"><div class="w-4 h-4"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.25 7H7H7.74999C8.30227 7 8.74999 7.44772 8.74999 8V11.5V12.25H7.24999V11.5V8.5H7H6.25V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"></path></svg></div><span>This note details some success information. Check <a href="geist/#" data-zone="same">the documentation</a> to learn more.</span></div><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-1.5 h-8 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-md focus:shadow-focus-ring focus:outline-0"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Upgrade</span></button></div><div class="flex grow items-center justify-between gap-3 rounded-md font-sans leading-6 selection:text-selection-text-color box-border border py-2 px-3 min-h-10 text-[14px] text-gray-900 fill-gray-900 selection:bg-gray-900 border-transparent bg-gray-alpha-200 note-link" style="--geist-link-color: var(--ds-gray-1000);"><div class="flex items-center m-0 gap-3"><div class="w-4 h-4"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.25 7H7H7.74999C8.30227 7 8.74999 7.44772 8.74999 8V11.5V12.25H7.24999V11.5V8.5H7H6.25V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"></path></svg></div><span>This filled note details some secondary information.</span></div></div><div class="flex grow items-center justify-between gap-3 rounded-md font-sans leading-6 selection:text-selection-text-color box-border border py-2 px-3 min-h-10 text-[14px] text-gray-900 fill-gray-900 selection:bg-gray-900 border-transparent bg-gray-alpha-200 note-link" style="--geist-link-color: var(--ds-gray-1000);"><div class="flex items-center m-0 gap-3"><div class="w-4 h-4"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.25 7H7H7.74999C8.30227 7 8.74999 7.44772 8.74999 8V11.5V12.25H7.24999V11.5V8.5H7H6.25V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"></path></svg></div><span>This filled note details some secondary information.</span></div><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-1.5 h-8 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-md focus:shadow-focus-ring focus:outline-0"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Upgrade</span></button></div><div class="flex grow items-center justify-between gap-3 rounded-md font-sans leading-6 selection:text-selection-text-color box-border border py-2 px-3 min-h-10 text-[14px] text-gray-900 fill-gray-900 selection:bg-gray-900 border-transparent bg-gray-alpha-200 note-link" style="--geist-link-color: var(--ds-gray-1000);"><div class="flex items-center m-0 gap-3"><div class="w-4 h-4"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.25 7H7H7.74999C8.30227 7 8.74999 7.44772 8.74999 8V11.5V12.25H7.24999V11.5V8.5H7H6.25V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"></path></svg></div><span>This filled note details some success information. Check <a href="/geist#" data-zone="same">the documentation</a> to learn more.</span></div><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-1.5 h-8 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-md focus:shadow-focus-ring focus:outline-0"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Upgrade</span></button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
