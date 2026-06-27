# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-date-picker/international-calendar
- Registry URL: https://21st.dev/r/hero_ui/heroui-date-picker
- Author: hero_ui
- Component slug: heroui-date-picker
- Demo slug: international-calendar
- Title: heroui-date-picker
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-date-picker with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-date-picker__international-calendar.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-date-picker__international-calendar.png

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
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><div data-slot="date-picker" class="date-picker w-64" data-rac=""><style>
      .date-picker,.date-picker *{box-sizing:border-box}
      .date-picker{position:relative;display:inline-flex;flex-direction:column;gap:.25rem;color:hsl(var(--foreground,240 10% 3.9%));font-family:Inter,ui-sans-serif,system-ui,sans-serif;overflow:visible}
      .date-picker[data-open=true]{z-index:80}
      .date-picker.w-64{width:16rem}.date-picker.min-w-72{min-width:18rem;width:fit-content}.date-picker[data-disabled=true]{opacity:.6}
      .label{font-size:.875rem;line-height:1.25rem;font-weight:500;color:hsl(var(--foreground,240 10% 3.9%))}
      .required-mark{color:#ef4444}
      .description{font-size:.875rem;line-height:1.25rem;color:hsl(var(--muted-foreground,240 3.8% 46.1%))}
      .date-input-group{display:inline-flex;align-items:center;height:2.25rem;overflow:hidden;border-radius:.75rem;border:1px solid hsl(var(--border,240 5.9% 90%));background:hsl(var(--background,0 0% 100%));box-shadow:0 1px 2px rgba(0,0,0,.04);outline:none;transition:border-color .16s ease,box-shadow .16s ease,background-color .16s ease}
      .date-input-group:hover{border-color:hsl(var(--foreground,240 10% 3.9%) / .32)}
      .date-input-group:focus-within{border-color:hsl(var(--foreground,240 10% 3.9%) / .38);box-shadow:0 0 0 2px hsl(var(--ring,240 5% 64.9%) / .35)}
      .date-input-group[aria-invalid=true]{border-color:hsl(var(--destructive,0 84% 60%));box-shadow:0 0 0 2px hsl(var(--destructive,0 84% 60%) / .18)}
      .date-input-group[aria-disabled=true]{pointer-events:none;background:hsl(var(--muted,240 4.8% 95.9%));color:hsl(var(--muted-foreground,240 3.8% 46.1%))}
      .date-input-group__input{display:flex;flex:1;align-items:center;gap:1px;min-width:0;padding:.5rem .5rem .5rem .75rem;border:0;background:transparent;font-size:.875rem;line-height:1.25rem;unicode-bidi:isolate}
      .date-input-group__segment{display:inline-block;outline:none;border-radius:.375rem;padding:0 .125rem;color:inherit;text-align:end;text-wrap:nowrap;caret-color:transparent}
      .date-input-group__segment[data-placeholder=true]{color:hsl(var(--muted-foreground,240 3.8% 46.1%))}
      .date-input-group__segment:focus,.date-input-group__segment[data-focused=true]{background:hsl(var(--primary,221 83% 53%) / .14);color:hsl(var(--foreground,240 10% 3.9%))}
      .date-input-group__suffix{pointer-events:none;display:flex;align-items:center;flex-shrink:0;margin-right:.75rem;color:hsl(var(--muted-foreground,240 3.8% 46.1%))}
      .date-picker__trigger{pointer-events:auto;display:inline-flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;padding:.25rem;border:0;border-radius:.75rem;background:transparent;color:hsl(var(--muted-foreground,240 3.8% 46.1%));cursor:pointer;transition:box-shadow .15s ease,background-color .16s ease,color .16s ease,transform .12s ease}
      .date-picker__trigger:hover{background:hsl(var(--accent,240 4.8% 95.9%));color:hsl(var(--foreground,240 10% 3.9%))}
      .date-picker__trigger:active{transform:scale(.96)}
      .date-picker__trigger:focus-visible{outline:2px solid hsl(var(--ring,240 5% 64.9%));outline-offset:2px}
      .date-picker__trigger-indicator{display:inline-flex;align-items:center;justify-content:center;font-size:1rem}
      .date-picker__popover{position:absolute;z-index:100;top:calc(100% + .5rem);left:0;width:var(--trigger-width,16rem);max-width:var(--trigger-width,16rem);overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;border-radius:min(32px,1.25rem);border:0;background:hsl(var(--popover,0 0% 100%));box-shadow:0 16px 40px rgba(0,0,0,.16),0 2px 8px rgba(0,0,0,.08);padding:.75rem;transform-origin:top;animation:datePickerPopover .16s ease-out}
      .calendar{display:flex;flex-direction:column;gap:.5rem;min-width:0}
      .calendar__header{display:flex;align-items:center;gap:.25rem;height:2rem}
      .calendar-year-picker__trigger{display:flex;align-items:center;gap:.375rem;height:2rem;padding:0 .5rem;border:0;border-radius:.5rem;background:transparent;color:inherit;font-weight:500;cursor:pointer}
      .calendar-year-picker__trigger:hover,.calendar__nav-button:hover{background:hsl(var(--accent,240 4.8% 95.9%))}
      .calendar-year-picker__trigger-heading{font-size:.875rem}.calendar-year-picker__trigger-indicator{display:inline-flex;color:hsl(var(--muted-foreground,240 3.8% 46.1%))}
      .calendar__nav-button{margin-left:auto;display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;border:0;border-radius:.5rem;background:transparent;color:inherit;font-size:1.125rem;cursor:pointer}.calendar__nav-button + .calendar__nav-button{margin-left:0}
      .calendar__grid{width:100%;border-collapse:separate;border-spacing:0 .125rem;table-layout:fixed}
      .calendar__grid th,.calendar__grid td{padding:0;text-align:center;vertical-align:middle}
      .calendar__header-cell{height:2rem;text-align:center;font-size:.75rem;font-weight:500;color:hsl(var(--muted-foreground,240 3.8% 46.1%))}
      .calendar__cell{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;border:0;border-radius:999px;background:transparent;color:inherit;font-size:.875rem;cursor:pointer;transition:background-color .14s ease,color .14s ease,transform .12s ease}
      .calendar__cell:hover{background:hsl(var(--accent,240 4.8% 95.9%))}
      .calendar__cell:focus-visible{outline:2px solid hsl(var(--ring,240 5% 64.9%));outline-offset:1px}
      .calendar__cell:active{transform:scale(.95)}
      .calendar__cell[data-outside-month=true]{color:hsl(var(--muted-foreground,240 3.8% 46.1%) / .55)}
      .calendar__cell[data-selected=true]{background:hsl(var(--primary,221 83% 53%));color:hsl(var(--primary-foreground,0 0% 98%));font-weight:500}
      .calendar-year-picker__year-grid{max-height:9rem;overflow:auto;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.25rem;border-top:1px solid hsl(var(--border,240 5.9% 90%));padding-top:.5rem}
      .calendar-year-picker__year-cell{height:2rem;border:0;border-radius:.5rem;background:transparent;color:inherit;font-size:.8125rem;cursor:pointer}
      .calendar-year-picker__year-cell[data-selected=true]{background:hsl(var(--primary,221 83% 53%));color:white}
      .button{display:inline-flex;align-items:center;justify-content:center;height:2.5rem;border-radius:.75rem;border:1px solid transparent;padding:0 .875rem;font-size:.875rem;font-weight:500;transition:background-color .16s ease,transform .12s ease;cursor:pointer}.button:active{transform:scale(.98)}
      .button--primary{background:hsl(var(--primary,221 83% 53%));color:white}.button--primary:hover{background:hsl(var(--primary,221 83% 48%))}
      .button--secondary{background:hsl(var(--secondary,240 4.8% 95.9%));color:hsl(var(--foreground,240 10% 3.9%));border-color:hsl(var(--border,240 5.9% 90%))}
      @keyframes datePickerPopover{from{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}
      .dark .label,.dark .date-picker{color:hsl(var(--foreground,0 0% 98%))}
      .dark .description,.dark .date-input-group__segment[data-placeholder=true],.dark .calendar__header-cell{color:hsl(var(--muted-foreground,240 5% 64.9%))}
      .dark .date-input-group{border-color:hsl(var(--border,240 3.7% 15.9%));background:hsl(var(--background,240 10% 3.9%));box-shadow:0 1px 2px rgba(0,0,0,.35)}
      .dark .date-input-group:hover{border-color:hsl(var(--foreground,0 0% 98%) / .28)}
      .dark .date-input-group[aria-disabled=true]{background:hsl(var(--muted,240 3.7% 15.9%));color:hsl(var(--muted-foreground,240 5% 64.9%))}
      .dark .date-picker__trigger:hover,.dark .calendar-year-picker__trigger:hover,.dark .calendar__nav-button:hover,.dark .calendar__cell:hover{background:hsl(var(--accent,240 3.7% 15.9%))}
      .dark .date-picker__popover{background:hsl(var(--popover,240 10% 3.9%));box-shadow:0 18px 44px rgba(0,0,0,.55),0 2px 8px rgba(0,0,0,.32)}
      .dark .button--secondary{background:hsl(var(--secondary,240 3.7% 15.9%));color:hsl(var(--foreground,0 0% 98%));border-color:hsl(var(--border,240 3.7% 15.9%))}
    </style><span class="label" data-slot="label">Event date</span><div data-react-aria-pressable="true" role="group" class="date-input-group date-input-group--full-width date-input-group--primary" data-slot="date-input-group" data-rac=""><div role="presentation" data-react-aria-pressable="true" class="date-input-group__input" data-slot="date-input-group-input" data-rac=""><span data-slot="date-input-group-segment" role="spinbutton" aria-label="दिन, " contenteditable="true" tabindex="0" class="date-input-group__segment" data-rac="">11</span><span data-slot="date-input-group-segment" contenteditable="false" class="date-input-group__segment" data-rac="">/</span><span data-slot="date-input-group-segment" role="spinbutton" aria-label="माह, " contenteditable="true" tabindex="0" class="date-input-group__segment" data-rac="">3</span><span data-slot="date-input-group-segment" contenteditable="false" class="date-input-group__segment" data-rac="">/</span><span data-slot="date-input-group-segment" role="spinbutton" aria-label="वर्ष, " contenteditable="true" tabindex="0" class="date-input-group__segment" data-rac="">1948</span><span data-slot="date-input-group-segment" contenteditable="false" class="date-input-group__segment" data-rac=""> </span><span data-slot="date-input-group-segment" role="spinbutton" aria-label="year, " contenteditable="true" tabindex="0" class="date-input-group__segment" data-rac="">शक</span></div><input hidden="" readonly="" type="text" value="2026-06-01" name="date"><div class="date-input-group__suffix" data-slot="date-input-group-suffix"><button data-slot="date-picker-trigger" class="date-picker__trigger" data-rac="" type="button" aria-label="Calendar" aria-haspopup="dialog" aria-expanded="false"><span aria-hidden="true" class="date-picker__trigger-indicator" data-slot="date-picker-trigger-indicator"><svg aria-hidden="true" aria-label="Calendar icon" fill="none" height="1em" role="presentation" viewBox="0 0 13 14" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.75 4.5A.75.75 0 0 1 3 3.75v-.748a1.5 1.5 0 0 0-1.5 1.5v1h10v-1a1.5 1.5 0 0 0-1.5-1.5v.75a.75.75 0 1 1-1.5 0v-.75h-4v.747a.75.75 0 0 1-.75.75ZM8.5 1.501h-4V.75a.75.75 0 0 0-1.5 0v.752a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3v-.75a.75.75 0 0 0-1.5 0v.75Zm-7 5.5v3.5a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5v-3.5h-10Z" fill="currentColor" fill-rule="evenodd"></path></svg></span></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.