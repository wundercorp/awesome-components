# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-time-field/disabled
- Registry URL: https://21st.dev/r/hero_ui/heroui-time-field
- Author: hero_ui
- Component slug: heroui-time-field
- Demo slug: disabled
- Title: heroui-time-field
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-time-field with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-time-field__disabled.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-time-field__disabled.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[320px] w-full items-center justify-center p-8"><div class="flex flex-col gap-4"><div data-slot="time-field" class="time-field w-[256px]" data-rac="" data-disabled="true"><span class="label" id="react-aria7605940050-«r1»" data-slot="label">Time</span><div id="react-aria7605940050-«r0»" aria-labelledby="react-aria7605940050-«r1»" aria-describedby="react-aria-description-0 react-aria7605940050-«r3»" role="group" aria-disabled="true" data-react-aria-pressable="true" class="date-input-group date-input-group--primary" data-slot="date-input-group" data-rac="" data-disabled="true" style="unicode-bidi: isolate;"><div id="react-aria7605940050-«r0»" aria-labelledby="react-aria7605940050-«r1»" aria-describedby="react-aria-description-0 react-aria7605940050-«r3»" role="group" aria-disabled="true" data-react-aria-pressable="true" class="date-input-group__input" data-slot="date-input-group-input" data-rac="" data-disabled="true" style="unicode-bidi: isolate;"><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="literal">⁦</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuenow="6" aria-valuetext="6 PM" aria-valuemin="1" aria-valuemax="12" aria-disabled="true" id="react-aria7605940050-«r7»" aria-label="hour, " aria-labelledby="react-aria7605940050-«r7» react-aria7605940050-«r1»" aria-describedby="react-aria-description-0 react-aria7605940050-«r3»" contenteditable="false" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="hour" style="caret-color: transparent;">6</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="literal">:</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuenow="21" aria-valuetext="21" aria-valuemin="0" aria-valuemax="59" aria-disabled="true" id="react-aria7605940050-«rb»" aria-label="minute, " aria-labelledby="react-aria7605940050-«rb» react-aria7605940050-«r1»" contenteditable="false" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="minute" style="caret-color: transparent;">21</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="literal">⁩</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="literal"> </span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuenow="1" aria-valuetext="PM" aria-valuemin="0" aria-valuemax="1" aria-disabled="true" id="react-aria7605940050-«rh»" aria-label="AM/PM, " aria-labelledby="react-aria7605940050-«rh» react-aria7605940050-«r1»" contenteditable="false" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="dayPeriod" style="caret-color: transparent;">PM</span></div><input disabled="" hidden="" class="" data-rac="" data-disabled="true" type="text" value="18:21:02" name="time"></div><span class="description" id="react-aria7605940050-«r3»" data-slot="description" slot="description">This time field is disabled</span></div><div data-slot="time-field" class="time-field w-[256px]" data-rac="" data-disabled="true"><span class="label" id="react-aria7605940050-«rk»" data-slot="label">Time</span><div id="react-aria7605940050-«rj»" aria-labelledby="react-aria7605940050-«rk»" aria-describedby="react-aria7605940050-«rm»" role="group" aria-disabled="true" data-react-aria-pressable="true" class="date-input-group date-input-group--primary" data-slot="date-input-group" data-rac="" data-disabled="true" style="unicode-bidi: isolate;"><div id="react-aria7605940050-«rj»" aria-labelledby="react-aria7605940050-«rk»" aria-describedby="react-aria7605940050-«rm»" role="group" aria-disabled="true" data-react-aria-pressable="true" class="date-input-group__input" data-slot="date-input-group-input" data-rac="" data-disabled="true" style="unicode-bidi: isolate;"><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="literal">⁦</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="1" aria-valuemax="12" aria-disabled="true" id="react-aria7605940050-«rq»" aria-label="hour, " aria-labelledby="react-aria7605940050-«rq» react-aria7605940050-«rk»" aria-describedby="react-aria7605940050-«rm»" data-placeholder="true" contenteditable="false" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="hour" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="literal">:</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="59" aria-disabled="true" id="react-aria7605940050-«ru»" aria-label="minute, " aria-labelledby="react-aria7605940050-«ru» react-aria7605940050-«rk»" data-placeholder="true" contenteditable="false" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="minute" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="literal">⁩</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="literal"> </span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="1" aria-disabled="true" id="react-aria7605940050-«r14»" aria-label="AM/PM, " aria-labelledby="react-aria7605940050-«r14» react-aria7605940050-«rk»" data-placeholder="true" contenteditable="false" class="date-input-group__segment" data-rac="" data-disabled="true" data-type="dayPeriod" style="caret-color: transparent;">AM</span></div><input disabled="" hidden="" class="" data-rac="" data-disabled="true" type="text" value="" name="time-empty"></div><span class="description" id="react-aria7605940050-«rm»" data-slot="description" slot="description">This time field is disabled</span></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.