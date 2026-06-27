# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reapollo/interfaces-switch/with-form
- Registry URL: https://21st.dev/r/reapollo/interfaces-switch
- Author: reapollo
- Component slug: interfaces-switch
- Demo slug: with-form
- Title: interfaces-switch
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reapollo/interfaces-switch with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reapollo__interfaces-switch__with-form.html
- Local screenshot file: generated-21st-prompts/screenshots/reapollo__interfaces-switch__with-form.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default.tsx_SwitchWithFormDemo">default.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 overflow-hidden"><div class="w-full max-w-sm rounded-xl border bg-background p-6 shadow-sm space-y-4"><div><h3 class="text-base font-semibold">Notifications</h3><p class="text-muted-foreground text-sm">Manage your notification settings.</p></div><div class="space-y-3"><div class="flex items-center justify-between"><label for="notif" class="text-sm font-medium cursor-pointer">Push Notifications</label><button type="button" role="switch" aria-checked="true" data-state="checked" value="on" data-slot="switch" class="peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-fit w-11 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 p-0.5" id="notif"><span data-state="checked" data-slot="switch-thumb" class="bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"></span></button></div><div class="flex items-center justify-between"><label for="mkt" class="text-sm font-medium cursor-pointer">Marketing Emails</label><button type="button" role="switch" aria-checked="false" data-state="unchecked" value="on" data-slot="switch" class="peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-fit w-11 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 p-0.5" id="mkt"><span data-state="unchecked" data-slot="switch-thumb" class="bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"></span></button></div><div class="flex items-center justify-between"><label for="sec" class="text-sm font-medium cursor-pointer">Security Alerts</label><button type="button" role="switch" aria-checked="true" data-state="checked" value="on" data-slot="switch" class="peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-fit w-11 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 p-0.5" id="sec"><span data-state="checked" data-slot="switch-thumb" class="bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"></span></button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.