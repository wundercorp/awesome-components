# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-time-field/on-surface
- Registry URL: https://21st.dev/r/hero_ui/heroui-time-field
- Author: hero_ui
- Component slug: heroui-time-field
- Demo slug: on-surface
- Title: heroui-time-field
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-time-field with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-time-field__on-surface.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-time-field__on-surface.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[340px] w-full items-center justify-center p-8"><div class="surface surface--default flex w-full max-w-sm flex-col gap-4 rounded-3xl p-6" data-slot="surface"><div data-slot="time-field" class="time-field w-full" data-rac=""><span class="label" id="react-aria8205586402-«r1»" data-slot="label">Time</span><div id="react-aria8205586402-«r0»" aria-labelledby="react-aria8205586402-«r1»" aria-describedby="react-aria8205586402-«r3»" role="group" data-react-aria-pressable="true" class="date-input-group date-input-group--secondary" data-slot="date-input-group" data-rac="" style="unicode-bidi: isolate;"><div id="react-aria8205586402-«r0»" aria-labelledby="react-aria8205586402-«r1»" aria-describedby="react-aria8205586402-«r3»" role="group" data-react-aria-pressable="true" class="date-input-group__input" data-slot="date-input-group-input" data-rac="" style="unicode-bidi: isolate;"><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal">⁦</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="1" aria-valuemax="12" id="react-aria8205586402-«r7»" aria-label="hour, " aria-labelledby="react-aria8205586402-«r7» react-aria8205586402-«r1»" aria-describedby="react-aria8205586402-«r3»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" inputmode="numeric" tabindex="0" class="date-input-group__segment" data-rac="" data-type="hour" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal">:</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="59" id="react-aria8205586402-«rb»" aria-label="minute, " aria-labelledby="react-aria8205586402-«rb» react-aria8205586402-«r1»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" inputmode="numeric" tabindex="0" class="date-input-group__segment" data-rac="" data-type="minute" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal">⁩</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal"> </span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="1" id="react-aria8205586402-«rh»" aria-label="AM/PM, " aria-labelledby="react-aria8205586402-«rh» react-aria8205586402-«r1»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" tabindex="0" class="date-input-group__segment" data-rac="" data-type="dayPeriod" style="caret-color: transparent;">AM</span></div><input hidden="" class="" data-rac="" type="text" value="" name="time" title=""></div><span class="description" id="react-aria8205586402-«r3»" data-slot="description" slot="description">Enter a time</span></div><div data-slot="time-field" class="time-field w-full" data-rac=""><span class="label" id="react-aria8205586402-«rk»" data-slot="label">Appointment time</span><div id="react-aria8205586402-«rj»" aria-labelledby="react-aria8205586402-«rk»" aria-describedby="react-aria8205586402-«rm»" role="group" data-react-aria-pressable="true" class="date-input-group date-input-group--secondary" data-slot="date-input-group" data-rac="" style="unicode-bidi: isolate;"><div class="date-input-group__prefix" data-slot="date-input-group-prefix"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" class="size-4 text-muted"><path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.5a.75.75 0 0 0-1.5 0V8a.75.75 0 0 0 .3.6l2 1.5a.75.75 0 1 0 .9-1.2l-1.7-1.275z" clip-rule="evenodd"></path></svg></div><div id="react-aria8205586402-«rj»" aria-labelledby="react-aria8205586402-«rk»" aria-describedby="react-aria8205586402-«rm»" role="group" data-react-aria-pressable="true" class="date-input-group__input" data-slot="date-input-group-input" data-rac="" style="unicode-bidi: isolate;"><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal">⁦</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="1" aria-valuemax="12" id="react-aria8205586402-«rq»" aria-label="hour, " aria-labelledby="react-aria8205586402-«rq» react-aria8205586402-«rk»" aria-describedby="react-aria8205586402-«rm»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" inputmode="numeric" tabindex="0" class="date-input-group__segment" data-rac="" data-type="hour" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal">:</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="59" id="react-aria8205586402-«ru»" aria-label="minute, " aria-labelledby="react-aria8205586402-«ru» react-aria8205586402-«rk»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" inputmode="numeric" tabindex="0" class="date-input-group__segment" data-rac="" data-type="minute" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal">⁩</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal"> </span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="1" id="react-aria8205586402-«r14»" aria-label="AM/PM, " aria-labelledby="react-aria8205586402-«r14» react-aria8205586402-«rk»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" tabindex="0" class="date-input-group__segment" data-rac="" data-type="dayPeriod" style="caret-color: transparent;">AM</span></div><input hidden="" class="" data-rac="" type="text" value="" name="time-2" title=""></div><span class="description" id="react-aria8205586402-«rm»" data-slot="description" slot="description">Enter a time for your appointment</span></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.