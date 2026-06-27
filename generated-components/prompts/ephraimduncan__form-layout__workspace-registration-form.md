# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ephraimduncan/form-layout/workspace-registration-form
- Registry URL: https://21st.dev/r/ephraimduncan/form-layout
- Author: ephraimduncan
- Component slug: form-layout
- Demo slug: workspace-registration-form
- Title: form-layout
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ephraimduncan/form-layout with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ephraimduncan__form-layout__workspace-registration-form.html
- Local screenshot file: generated-21st-prompts/screenshots/ephraimduncan__form-layout__workspace-registration-form.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center p-10"><div class="sm:mx-auto sm:max-w-2xl"><h3 class="text-2xl font-semibold text-foreground dark:text-foreground">Register to workspace</h3><p class="mt-1 text-sm text-muted-foreground dark:text-muted-foreground">Take a few moments to register for your company's workspace</p><form action="#" method="post" class="mt-8"><div class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6"><div class="col-span-full sm:col-span-3"><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-foreground dark:text-foreground" for="first-name">First name<span class="text-red-500">*</span></label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2" id="first-name" autocomplete="first-name" placeholder="First name" required="" type="text" name="first-name"></div><div class="col-span-full sm:col-span-3"><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-foreground dark:text-foreground" for="last-name">Last name<span class="text-red-500">*</span></label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2" id="last-name" autocomplete="last-name" placeholder="Last name" required="" type="text" name="last-name"></div><div class="col-span-full"><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-foreground dark:text-foreground" for="email">Email<span class="text-red-500">*</span></label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2" id="email" autocomplete="email" placeholder="Email" required="" type="email" name="email"></div><div class="col-span-full"><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-foreground dark:text-foreground" for="address">Address</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2" id="address" autocomplete="street-address" placeholder="Address" type="text" name="address"></div><div class="col-span-full sm:col-span-2"><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-foreground dark:text-foreground" for="city">City</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2" id="city" autocomplete="address-level2" placeholder="City" type="text" name="city"></div><div class="col-span-full sm:col-span-2"><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-foreground dark:text-foreground" for="state">State</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2" id="state" autocomplete="address-level1" placeholder="State" type="text" name="state"></div><div class="col-span-full sm:col-span-2"><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-foreground dark:text-foreground" for="postal-code">Postal code</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2" id="postal-code" autocomplete="postal-code" placeholder="Postal code" name="postal-code"></div></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-6"></div><div class="flex items-center justify-end space-x-4"><button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 whitespace-nowrap" type="button">Cancel</button><button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 whitespace-nowrap" type="submit">Submit</button></div></form></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.