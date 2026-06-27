# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/Kain0127/layered-text/default
- Registry URL: https://21st.dev/r/Kain0127/layered-text
- Author: Kain0127
- Component slug: layered-text
- Demo slug: default
- Title: layered-text
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/Kain0127/layered-text with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/Kain0127__layered-text__default.html
- Local screenshot file: generated-21st-prompts/screenshots/Kain0127__layered-text__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen bg-white dark:bg-black flex items-center justify-center"><div class="mx-auto py-24 font-sans font-black tracking-[-2px] uppercase text-black dark:text-white antialiased cursor-pointer " style="font-size: 72px; --md-font-size: 36px;"><ul class="list-none p-0 m-0 flex flex-col items-center"><li class="
                overflow-hidden relative
                [transform:skew(60deg,-30deg)_scaleY(0.66667)]
              " style="height: 60px; transform: translateX(-105px) skew(60deg, -30deg) scaleY(0.66667); --md-height: 35px; --md-translateX: -60px;"><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">&nbsp;</p><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">INFINITE</p></li><li class="
                overflow-hidden relative
                [transform:skew(0deg,-30deg)_scaleY(1.33333)]
              " style="height: 60px; transform: translateX(-70px) skew(0deg, -30deg) scaleY(1.33333); --md-height: 35px; --md-translateX: -40px;"><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">INFINITE</p><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">PROGRESS</p></li><li class="
                overflow-hidden relative
                [transform:skew(60deg,-30deg)_scaleY(0.66667)]
              " style="height: 60px; transform: translateX(-35px) skew(60deg, -30deg) scaleY(0.66667); --md-height: 35px; --md-translateX: -20px;"><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">PROGRESS</p><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">INNOVATION</p></li><li class="
                overflow-hidden relative
                [transform:skew(0deg,-30deg)_scaleY(1.33333)]
              " style="height: 60px; transform: translateX(0px) skew(0deg, -30deg) scaleY(1.33333); --md-height: 35px; --md-translateX: 0px;"><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">INNOVATION</p><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">FUTURE</p></li><li class="
                overflow-hidden relative
                [transform:skew(60deg,-30deg)_scaleY(0.66667)]
              " style="height: 60px; transform: translateX(35px) skew(60deg, -30deg) scaleY(0.66667); --md-height: 35px; --md-translateX: 20px;"><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">FUTURE</p><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">DREAMS</p></li><li class="
                overflow-hidden relative
                [transform:skew(0deg,-30deg)_scaleY(1.33333)]
              " style="height: 60px; transform: translateX(70px) skew(0deg, -30deg) scaleY(1.33333); --md-height: 35px; --md-translateX: 40px;"><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">DREAMS</p><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">ACHIEVEMENT</p></li><li class="
                overflow-hidden relative
                [transform:skew(60deg,-30deg)_scaleY(0.66667)]
              " style="height: 60px; transform: translateX(105px) skew(60deg, -30deg) scaleY(0.66667); --md-height: 35px; --md-translateX: 60px;"><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">ACHIEVEMENT</p><p class="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0" style="height: 60px; line-height: 55px;">&nbsp;</p></li></ul></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.