# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/Northstrix/shamayim-toggle-switch/default
- Registry URL: https://21st.dev/r/Northstrix/shamayim-toggle-switch
- Author: Northstrix
- Component slug: shamayim-toggle-switch
- Demo slug: default
- Title: shamayim-toggle-switch
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/Northstrix/shamayim-toggle-switch with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/Northstrix__shamayim-toggle-switch__default.html
- Local screenshot file: generated-21st-prompts/screenshots/Northstrix__shamayim-toggle-switch__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center w-full max-w-xl mx-auto space-y-16"><div class="text-center text-[#47b6d1] font-semibold text-lg" style="margin-top: 100px; margin-bottom: 24px;">Checker Pattern</div><div class="flex flex-col justify-center items-center gap-2 w-full rounded-xl bg-gradient-to-br from-[#47b6d1] to-[#90e0ec] text-2xl p-8 h-[240px] mb-6"><div class="flex items-center gap-4"><span class="text-[#E0F9FC]">Mobile Data</span><div class="toggle-wrapper" style="transform: none;"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: linear-gradient(45deg, rgb(11, 102, 160) 25%, transparent 25%, transparent 75%, rgb(11, 102, 160) 75%, rgb(11, 102, 160)), linear-gradient(45deg, rgb(11, 102, 160) 25%, transparent 25%, transparent 75%, rgb(11, 102, 160) 75%, rgb(11, 102, 160)); background-size: 8px 8px; background-position: 0px 0px, 4px 4px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div></div><div class="flex items-center gap-4"><div class="toggle-wrapper" style="transform: scaleX(-1);"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: linear-gradient(45deg, rgb(11, 102, 160) 25%, transparent 25%, transparent 75%, rgb(11, 102, 160) 75%, rgb(11, 102, 160)), linear-gradient(45deg, rgb(11, 102, 160) 25%, transparent 25%, transparent 75%, rgb(11, 102, 160) 75%, rgb(11, 102, 160)); background-size: 8px 8px; background-position: 0px 0px, 4px 4px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div><span class="text-[#E0F9FC]">נתונים סלולריים</span></div></div><div class="text-center text-[#47b6d1] font-semibold text-lg" style="margin-top: 100px; margin-bottom: 24px;">Conic Pattern</div><div class="flex flex-col justify-center items-center gap-2 w-full rounded-xl bg-gradient-to-br from-[#47b6d1] to-[#90e0ec] text-2xl p-8 h-[240px] mb-6"><div class="flex items-center gap-4"><span class="text-[#E0F9FC]">Mobile Data</span><div class="toggle-wrapper" style="transform: none;"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: repeating-conic-gradient(rgb(11, 102, 160) 0deg, rgb(11, 102, 160) 18deg, rgb(16, 147, 168) 18deg, rgb(16, 147, 168) 36deg); background-size: 18px 18px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div></div><div class="flex items-center gap-4"><div class="toggle-wrapper" style="transform: scaleX(-1);"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: repeating-conic-gradient(rgb(11, 102, 160) 0deg, rgb(11, 102, 160) 18deg, rgb(16, 147, 168) 18deg, rgb(16, 147, 168) 36deg); background-size: 18px 18px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div><span class="text-[#E0F9FC]">נתונים סלולריים</span></div></div><div class="text-center text-[#47b6d1] font-semibold text-lg" style="margin-top: 100px; margin-bottom: 24px;">Linear Pattern</div><div class="flex flex-col justify-center items-center gap-2 w-full rounded-xl bg-gradient-to-br from-[#47b6d1] to-[#90e0ec] text-2xl p-8 h-[240px] mb-6"><div class="flex items-center gap-4"><span class="text-[#E0F9FC]">Mobile Data</span><div class="toggle-wrapper" style="transform: none;"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: repeating-linear-gradient(135deg, rgb(11, 102, 160) 0px, rgb(11, 102, 160) 2px, rgb(16, 147, 168) 2px, rgb(16, 147, 168) 4px); background-size: 8px 8px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div></div><div class="flex items-center gap-4"><div class="toggle-wrapper" style="transform: scaleX(-1);"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: repeating-linear-gradient(135deg, rgb(11, 102, 160) 0px, rgb(11, 102, 160) 2px, rgb(16, 147, 168) 2px, rgb(16, 147, 168) 4px); background-size: 8px 8px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div><span class="text-[#E0F9FC]">נתונים סלולריים</span></div></div><div class="text-center text-[#47b6d1] font-semibold text-lg" style="margin-top: 100px; margin-bottom: 24px;">Dots Pattern</div><div class="flex flex-col justify-center items-center gap-2 w-full rounded-xl bg-gradient-to-br from-[#47b6d1] to-[#90e0ec] text-2xl p-8 h-[240px] mb-6"><div class="flex items-center gap-4"><span class="text-[#E0F9FC]">Mobile Data</span><div class="toggle-wrapper" style="transform: none;"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: radial-gradient(circle at 2px 2px, rgb(16, 147, 168) 1.5px, transparent 0px), radial-gradient(circle at 6px 6px, rgb(11, 102, 160) 1.5px, transparent 0px); background-size: 8px 8px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div></div><div class="flex items-center gap-4"><div class="toggle-wrapper" style="transform: scaleX(-1);"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: radial-gradient(circle at 2px 2px, rgb(16, 147, 168) 1.5px, transparent 0px), radial-gradient(circle at 6px 6px, rgb(11, 102, 160) 1.5px, transparent 0px); background-size: 8px 8px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div><span class="text-[#E0F9FC]">נתונים סלולריים</span></div></div><div class="text-center text-[#47b6d1] font-semibold text-lg" style="margin-top: 100px; margin-bottom: 24px;">Grid Pattern</div><div class="flex flex-col justify-center items-center gap-2 w-full rounded-xl bg-gradient-to-br from-[#47b6d1] to-[#90e0ec] text-2xl p-8 h-[240px] mb-6"><div class="flex items-center gap-4"><span class="text-[#E0F9FC]">Mobile Data</span><div class="toggle-wrapper" style="transform: none;"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: linear-gradient(rgb(16, 147, 168) 1.5px, transparent 1.5px), linear-gradient(90deg, rgb(16, 147, 168) 1.5px, transparent 1.5px); background-size: 8px 8px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div></div><div class="flex items-center gap-4"><div class="toggle-wrapper" style="transform: scaleX(-1);"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: linear-gradient(rgb(16, 147, 168) 1.5px, transparent 1.5px), linear-gradient(90deg, rgb(16, 147, 168) 1.5px, transparent 1.5px); background-size: 8px 8px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div><span class="text-[#E0F9FC]">נתונים סלולריים</span></div></div><div class="text-center text-[#47b6d1] font-semibold text-lg" style="margin-top: 100px; margin-bottom: 24px;">Zigzag Pattern</div><div class="flex flex-col justify-center items-center gap-2 w-full rounded-xl bg-gradient-to-br from-[#47b6d1] to-[#90e0ec] text-2xl p-8 h-[240px] mb-6"><div class="flex items-center gap-4"><span class="text-[#E0F9FC]">Mobile Data</span><div class="toggle-wrapper" style="transform: none;"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: repeating-linear-gradient(135deg, rgb(16, 147, 168) 0px, rgb(16, 147, 168) 2px, transparent 2px, transparent 4px), repeating-linear-gradient(-135deg, rgb(11, 102, 160) 0px, rgb(11, 102, 160) 2px, transparent 2px, transparent 4px); background-size: 8px 8px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div></div><div class="flex items-center gap-4"><div class="toggle-wrapper" style="transform: scaleX(-1);"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: repeating-linear-gradient(135deg, rgb(16, 147, 168) 0px, rgb(16, 147, 168) 2px, transparent 2px, transparent 4px), repeating-linear-gradient(-135deg, rgb(11, 102, 160) 0px, rgb(11, 102, 160) 2px, transparent 2px, transparent 4px); background-size: 8px 8px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div><span class="text-[#E0F9FC]">נתונים סלולריים</span></div></div><div class="text-center text-[#47b6d1] font-semibold text-lg" style="margin-top: 100px; margin-bottom: 24px;">Waves Pattern</div><div class="flex flex-col justify-center items-center gap-2 w-full rounded-xl bg-gradient-to-br from-[#47b6d1] to-[#90e0ec] text-2xl p-8 h-[240px] mb-6"><div class="flex items-center gap-4"><span class="text-[#E0F9FC]">Mobile Data</span><div class="toggle-wrapper" style="transform: none;"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: repeating-radial-gradient(circle at 0px 8px, rgb(16, 147, 168) 0px, rgb(16, 147, 168) 1px, transparent 1px, transparent 8px); background-size: 16px 16px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div></div><div class="flex items-center gap-4"><div class="toggle-wrapper" style="transform: scaleX(-1);"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: repeating-radial-gradient(circle at 0px 8px, rgb(16, 147, 168) 0px, rgb(16, 147, 168) 1px, transparent 1px, transparent 8px); background-size: 16px 16px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div><span class="text-[#E0F9FC]">נתונים סלולריים</span></div></div><div class="text-center text-[#47b6d1] font-semibold text-lg" style="margin-top: 100px; margin-bottom: 24px;">Cross Pattern</div><div class="flex flex-col justify-center items-center gap-2 w-full rounded-xl bg-gradient-to-br from-[#47b6d1] to-[#90e0ec] text-2xl p-8 h-[240px] mb-6"><div class="flex items-center gap-4"><span class="text-[#E0F9FC]">Mobile Data</span><div class="toggle-wrapper" style="transform: none;"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: linear-gradient(90deg, rgb(11, 102, 160) 1px, transparent 1px), linear-gradient(rgb(16, 147, 168) 1px, transparent 1px); background-size: 6px 6px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div></div><div class="flex items-center gap-4"><div class="toggle-wrapper" style="transform: scaleX(-1);"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"></path></svg><div class="toggle-container" style="background-image: linear-gradient(90deg, rgb(11, 102, 160) 1px, transparent 1px), linear-gradient(rgb(16, 147, 168) 1px, transparent 1px); background-size: 6px 6px; background-position: 0px 0px; box-shadow: rgba(0, 9, 38, 0.6) 0px 0.125em 0.25em inset, rgba(0, 9, 38, 0.5) -1.5em 0px 0.0625em inset, rgba(0, 9, 38, 0.5) 0.5em 0px 0.5em inset, rgba(255, 255, 255, 0.4) 0px 1px 1px;"><div class="toggle-button" style="background-image: linear-gradient(to right, rgb(134, 226, 250), rgb(18, 94, 121)); box-shadow: rgba(0, 0, 0, 0.6) 0px 0.125em 0.25em;"></div></div><svg class="toggle-icon on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: rgb(224, 249, 252); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 1 1 16 0zM2 8a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm10 0a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"></path></svg><style>
        .toggle-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0.25em;
        }
        .toggle-icon {
          width: 0.5em;
          height: 0.5em;
          transition: fill 0.4s;
        }
        .toggle-checkbox:not(:checked) + .toggle-icon.off,
        .toggle-checkbox:checked ~ .toggle-icon.on {
          fill: #e0f9fc;
        }
        .toggle-checkbox {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          z-index: 1;
          border-radius: 3.125em;
          width: 4.05em;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .toggle-container {
          position: relative;
          border-radius: 3.125em;
          width: 4.05em;
          height: 1.5em;
        }
        .toggle-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0.0625em;
          left: 0.0625em;
          border-radius: inherit;
          width: 2.55em;
          height: calc(100% - 0.125em);
          transition: left 0.4s;
        }
        .toggle-checkbox:checked ~ .toggle-container > .toggle-button {
          left: 1.4375em;
        }
        .toggle-button::before {
          content: '';
          position: absolute;
          top: inherit;
          border-radius: inherit;
          width: calc(100% - .375em);
          height: inherit;
          background-image: linear-gradient(to right, #0f73a8, #57cfe2, #b3f0ff);
        }
        .toggle-button::after {
          content: '';
          position: absolute;
          width: .5em;
          height: 38%;
          background-image: repeating-linear-gradient(to right, #d2f2f6 0 .0625em, #4ea0ae .0625em .125em, transparent .125em .1875em);
        }
      </style></div><span class="text-[#E0F9FC]">נתונים סלולריים</span></div></div><div class="text-center text-[#47b6d1] font-semibold text-lg" style="margin-top: 100px; margin-bottom: 24px;">Hex Pattern</div><div class="flex flex-col justify-center items-center gap-2 w-full rounded-xl bg-gradient-to-br from-[#47b6d1] to-[#90e0ec] text-2xl p-8 h-[240px] mb-6"><div class="flex items-center gap-4"><span class="text-[#E0F9FC]">Mobile Data</span><div class="toggle-wrapper" style="transform: none;"><input class="toggle-checkbox" type="checkbox"><svg class="toggle-icon off" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(76, 155, 171); filter: drop-shadow(rgba(255, 255, 255, 0.4) 0px 1px 1px); transition: fill 0.4s;"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"

[TRUNCATED: original length 118258 characters]
```

## Public registry source files

No public registry source files were available.