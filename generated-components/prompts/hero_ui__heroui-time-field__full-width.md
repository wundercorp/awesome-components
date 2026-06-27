# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-time-field/full-width
- Registry URL: https://21st.dev/r/hero_ui/heroui-time-field
- Author: hero_ui
- Component slug: heroui-time-field
- Demo slug: full-width
- Title: heroui-time-field
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-time-field with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-time-field__full-width.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-time-field__full-width.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[320px] w-full items-center justify-center p-8"><div class="w-[400px] space-y-4"><div data-slot="time-field" class="time-field time-field--full-width" data-rac=""><span class="label" id="react-aria6624700465-«r1»" data-slot="label">Time</span><div id="react-aria6624700465-«r0»" aria-labelledby="react-aria6624700465-«r1»" role="group" data-react-aria-pressable="true" class="date-input-group date-input-group--full-width date-input-group--primary" data-slot="date-input-group" data-rac="" style="unicode-bidi: isolate;"><div id="react-aria6624700465-«r0»" aria-labelledby="react-aria6624700465-«r1»" role="group" data-react-aria-pressable="true" class="date-input-group__input" data-slot="date-input-group-input" data-rac="" style="unicode-bidi: isolate;"><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal">⁦</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="1" aria-valuemax="12" id="react-aria6624700465-«r7»" aria-label="hour, " aria-labelledby="react-aria6624700465-«r7» react-aria6624700465-«r1»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" inputmode="numeric" tabindex="0" class="date-input-group__segment" data-rac="" data-type="hour" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal">:</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="59" id="react-aria6624700465-«rb»" aria-label="minute, " aria-labelledby="react-aria6624700465-«rb» react-aria6624700465-«r1»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" inputmode="numeric" tabindex="0" class="date-input-group__segment" data-rac="" data-type="minute" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal">⁩</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal"> </span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="1" id="react-aria6624700465-«rh»" aria-label="AM/PM, " aria-labelledby="react-aria6624700465-«rh» react-aria6624700465-«r1»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" tabindex="0" class="date-input-group__segment" data-rac="" data-type="dayPeriod" style="caret-color: transparent;">AM</span></div><input hidden="" class="" data-rac="" type="text" value="" name="time" title=""></div></div><div data-slot="time-field" class="time-field time-field--full-width" data-rac=""><span class="label" id="react-aria6624700465-«rk»" data-slot="label">Time</span><div id="react-aria6624700465-«rj»" aria-labelledby="react-aria6624700465-«rk»" role="group" data-react-aria-pressable="true" class="date-input-group date-input-group--full-width date-input-group--primary" data-slot="date-input-group" data-rac="" style="unicode-bidi: isolate;"><div class="date-input-group__prefix" data-slot="date-input-group-prefix"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" class="size-4 text-muted"><path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.5a.75.75 0 0 0-1.5 0V8a.75.75 0 0 0 .3.6l2 1.5a.75.75 0 1 0 .9-1.2l-1.7-1.275z" clip-rule="evenodd"></path></svg></div><div id="react-aria6624700465-«rj»" aria-labelledby="react-aria6624700465-«rk»" role="group" data-react-aria-pressable="true" class="date-input-group__input" data-slot="date-input-group-input" data-rac="" style="unicode-bidi: isolate;"><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal">⁦</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="1" aria-valuemax="12" id="react-aria6624700465-«rq»" aria-label="hour, " aria-labelledby="react-aria6624700465-«rq» react-aria6624700465-«rk»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" inputmode="numeric" tabindex="0" class="date-input-group__segment" data-rac="" data-type="hour" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal">:</span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="59" id="react-aria6624700465-«ru»" aria-label="minute, " aria-labelledby="react-aria6624700465-«ru» react-aria6624700465-«rk»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" inputmode="numeric" tabindex="0" class="date-input-group__segment" data-rac="" data-type="minute" style="caret-color: transparent;">––</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal">⁩</span><span data-slot="date-input-group-segment" aria-hidden="true" class="date-input-group__segment" data-rac="" data-type="literal"> </span><span data-slot="date-input-group-segment" role="spinbutton" aria-valuetext="Empty" aria-valuemin="0" aria-valuemax="1" id="react-aria6624700465-«r14»" aria-label="AM/PM, " aria-labelledby="react-aria6624700465-«r14» react-aria6624700465-«rk»" data-placeholder="true" contenteditable="true" spellcheck="false" autocorrect="off" enterkeyhint="next" tabindex="0" class="date-input-group__segment" data-rac="" data-type="dayPeriod" style="caret-color: transparent;">AM</span></div><input hidden="" class="" data-rac="" type="text" value="" name="time-icons" title=""><div class="date-input-group__suffix" data-slot="date-input-group-suffix"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" class="size-4 text-muted"><path fill="currentColor" fill-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></path></svg></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.