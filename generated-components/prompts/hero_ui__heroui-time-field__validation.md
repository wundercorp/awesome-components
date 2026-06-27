# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-time-field/validation
- Registry URL: https://21st.dev/r/hero_ui/heroui-time-field
- Author: hero_ui
- Component slug: heroui-time-field
- Demo slug: validation
- Title: heroui-time-field
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-time-field with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-time-field__validation.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-time-field__validation.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[320px] w-full items-center justify-center p-8"><div class="flex flex-col gap-4"><div data-required="true" data-slot="time-field" class="time-field w-[256px]" data-rac="" data-invalid="true"><span class="label" id="react-aria8061955592-«r1»" data-slot="label">Time</span><div id="react-aria8061955592-«r0»" aria-labelledby="react-aria8061955592-«r1»" aria-describedby="react-aria8061955592-«r4»" role="group" data-react-aria-pressable="true" class="date-input-group date-input-group--primary" data-slot="date-input-group" data-rac="" data-invalid="true" style="unicode-bidi: isolate;"><div id="react-aria8061955592-«r0»" aria-labelledby="react-aria8061955592-«r1»" aria-describedby="react-aria8061955592-«r4»" role="group" data-react-aria-pressable="true" class="date-input-group__input" data-slot="date-input-group-input" data-rac="" data-invalid="true" style="unicode-bidi: isolate;"><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="literal">⁦</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="1" aria-valuemax="12" aria-required="true" id="react-aria8061955592-«r7»" aria-label="hour, " aria-labelledby="react-aria8061955592-«r7» react-aria8061955592-«r1»" aria-invalid="true" aria-describedby="react-aria8061955592-«r4»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" inputmode="numeric" tabindex="0" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="hour" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="literal">:</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="59" aria-required="true" id="react-aria8061955592-«rb»" aria-label="minute, " aria-labelledby="react-aria8061955592-«rb» react-aria8061955592-«r1»" aria-invalid="true" aria-describedby="react-aria8061955592-«r4»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" inputmode="numeric" tabindex="0" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="minute" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="literal">⁩</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="literal"> </span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="1" aria-required="true" id="react-aria8061955592-«rh»" aria-label="AM/PM, " aria-labelledby="react-aria8061955592-«rh» react-aria8061955592-«r1»" aria-invalid="true" aria-describedby="react-aria8061955592-«r4»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" tabindex="0" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="dayPeriod" style="caret-color: transparent;">AM</span></div><input hidden="" required="" class="" data-rac="" type="text" value="" name="time" title=""></div><span class="field-error" id="react-aria8061955592-«r4»" slot="errorMessage" data-visible="true" data-slot="field-error" data-rac="">Please enter a valid time</span></div><div data-slot="time-field" class="time-field w-[256px]" data-rac="" data-invalid="true"><span class="label" id="react-aria8061955592-«rk»" data-slot="label">Time</span><div id="react-aria8061955592-«rj»" aria-labelledby="react-aria8061955592-«rk»" aria-describedby="react-aria8061955592-«rn»" role="group" data-react-aria-pressable="true" class="date-input-group date-input-group--primary" data-slot="date-input-group" data-rac="" data-invalid="true" style="unicode-bidi: isolate;"><div id="react-aria8061955592-«rj»" aria-labelledby="react-aria8061955592-«rk»" aria-describedby="react-aria8061955592-«rn»" role="group" data-react-aria-pressable="true" class="date-input-group__input" data-slot="date-input-group-input" data-rac="" data-invalid="true" style="unicode-bidi: isolate;"><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="literal">⁦</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="1" aria-valuemax="12" id="react-aria8061955592-«rq»" aria-label="hour, " aria-labelledby="react-aria8061955592-«rq» react-aria8061955592-«rk»" aria-invalid="true" aria-describedby="react-aria8061955592-«rn»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" inputmode="numeric" tabindex="0" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="hour" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="literal">:</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="59" id="react-aria8061955592-«ru»" aria-label="minute, " aria-labelledby="react-aria8061955592-«ru» react-aria8061955592-«rk»" aria-invalid="true" aria-describedby="react-aria8061955592-«rn»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" inputmode="numeric" tabindex="0" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="minute" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="literal">⁩</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="literal"> </span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="1" id="react-aria8061955592-«r14»" aria-label="AM/PM, " aria-labelledby="react-aria8061955592-«r14» react-aria8061955592-«rk»" aria-invalid="true" aria-describedby="react-aria8061955592-«rn»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" tabindex="0" class="date-input-group__segment" data-rac="" data-invalid="true" data-type="dayPeriod" style="caret-color: transparent;">AM</span></div><input hidden="" class="" data-rac="" type="text" value="" name="invalid-time" title=""></div><span class="field-error" id="react-aria8061955592-«rn»" slot="errorMessage" data-visible="true" data-slot="field-error" data-rac="">Time must be within business hours</span></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.