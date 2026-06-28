# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/uniquesonu/cuisine-selector-chips/default
- Registry URL: https://21st.dev/r/uniquesonu/cuisine-selector-chips
- Author: uniquesonu
- Component slug: cuisine-selector-chips
- Demo slug: default
- Title: cuisine-selector-chips
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/uniquesonu/cuisine-selector-chips with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/uniquesonu__cuisine-selector-chips__default.html
- Local screenshot file: generated-21st-prompts/screenshots/uniquesonu__cuisine-selector-chips__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen w-full bg-black p-6 pt-40"><h1 class="text-white text-3xl font-semibold mb-12 text-center">What are your favorite cuisines?</h1><div class="max-w-[570px] mx-auto"><div class="flex flex-wrap gap-3 overflow-visible"><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Mexican</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Italian</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Chinese</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Japanese</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Indian</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Greek</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>French</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Spanish</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Turkish</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Lebanese</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Vietnamese</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Korean</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Argentinian</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Peruvian</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Ethiopian</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Nigerian</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>German</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>British</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Irish</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Swedish</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Danish</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Polish</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Hungarian</span></div></button><button class="
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset
                  text-zinc-400 ring-[hsla(0,0%,100%,0.06)]
                " tabindex="0" style="background-color: rgba(39, 39, 42, 0.5);"><div class="relative flex items-center" style="width: 100%; padding-right: 0px;"><span>Portuguese</span></div></button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.