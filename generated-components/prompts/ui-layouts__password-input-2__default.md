# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ui-layouts/password-input-2/default
- Registry URL: https://21st.dev/r/ui-layouts/password-input-2
- Author: ui-layouts
- Component slug: password-input-2
- Demo slug: default
- Title: password-input-2
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ui-layouts/password-input-2 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ui-layouts__password-input-2__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ui-layouts__password-input-2__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default_PasswordInput">PasswordInput</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-96 mx-auto "><form class="space-y-2"><label for="password" class="block text-sm font-medium">Password</label><div class="relative"><input id="password" placeholder="Password" aria-invalid="true" aria-describedby="password-strength" class="w-full p-2 border-2 rounded-md bg-background outline-none focus-within:border-blue-700 transition" type="password" value=""><button type="button" aria-label="Show password" class="absolute inset-y-0 right-0 outline-none flex items-center justify-center w-9 text-muted-foreground/80 hover:text-foreground  "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></button></div></form><div class="flex gap-2 w-full justify-between mt-2"><span class="bg-border  p-1 rounded-full w-full"></span><span class="bg-border  p-1 rounded-full w-full"></span><span class="bg-border  p-1 rounded-full w-full"></span><span class="bg-border  p-1 rounded-full w-full"></span><span class="bg-border  p-1 rounded-full w-full"></span></div><p id="password-strength" class="my-2 text-sm font-medium flex justify-between"><span>Must contain:</span><span>Enter a password</span></p><ul class="space-y-1.5" aria-label="Password requirements"><li class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x text-muted-foreground/80" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg><span class="text-xs text-muted-foreground">At least 8 characters<span class="sr-only"> - Requirement not met</span></span></li><li class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x text-muted-foreground/80" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg><span class="text-xs text-muted-foreground">At least 1 number<span class="sr-only"> - Requirement not met</span></span></li><li class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x text-muted-foreground/80" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg><span class="text-xs text-muted-foreground">At least 1 lowercase letter<span class="sr-only"> - Requirement not met</span></span></li><li class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x text-muted-foreground/80" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg><span class="text-xs text-muted-foreground">At least 1 uppercase letter<span class="sr-only"> - Requirement not met</span></span></li><li class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x text-muted-foreground/80" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg><span class="text-xs text-muted-foreground">At least 1 special characters<span class="sr-only"> - Requirement not met</span></span></li></ul></div></div></div>
```

## Public registry source files

No public registry source files were available.