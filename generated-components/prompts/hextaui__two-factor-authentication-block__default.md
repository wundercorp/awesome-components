# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hextaui/two-factor-authentication-block/default
- Registry URL: https://21st.dev/r/hextaui/two-factor-authentication-block
- Author: hextaui
- Component slug: two-factor-authentication-block
- Demo slug: default
- Title: two-factor-authentication-block
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hextaui/two-factor-authentication-block with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hextaui__two-factor-authentication-block__default.html
- Local screenshot file: generated-21st-prompts/screenshots/hextaui__two-factor-authentication-block__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative rounded-card bg-card text-card-foreground transition-all duration-300 ease-out overflow-hidden border border-border p-6 w-full max-w-md mx-auto flex flex-col gap-6"><div class="space-y-2 text-center flex flex-col items-center justify-center"><div class="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-12 w-12 text-primary" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg></div><h3 class="tracking-tight text-foreground text-2xl font-bold">Two-Factor Authentication</h3><p class="text-sm text-muted-foreground leading-relaxed">Enter the 6-digit code sent to your device</p></div><form class="flex flex-col gap-6"><div class="space-y-4 flex flex-col gap-3"><div class="flex flex-col gap-3 items-center"><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground text-sm text-center">Verification Code</label><noscript></noscript><div data-input-otp-container="true" class="flex items-center has-[:disabled]:opacity-50 gap-1 sm:gap-2" style="position: relative; cursor: text; user-select: none; pointer-events: none; --root-height: 40px;"><div class="flex items-center has-[:disabled]:opacity-50 gap-1 sm:gap-2"><div style="opacity: 1; transform: none;"><div class="relative flex items-center justify-center border-y border-r bg-input transition-all focus-within:z-10 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-border text-foreground h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm border-l rounded-l-ele"></div></div><div style="opacity: 1; transform: none;"><div class="relative flex items-center justify-center border-y border-r bg-input transition-all focus-within:z-10 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-l border-border text-foreground h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm rounded-sm"></div></div><div style="opacity: 1; transform: none;"><div class="relative flex items-center justify-center border-y border-r bg-input transition-all focus-within:z-10 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-l border-border text-foreground h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm rounded-sm"></div></div></div><div role="separator" class="flex items-center justify-center text-muted-foreground text-xs sm:text-sm">-</div><div class="flex items-center has-[:disabled]:opacity-50 gap-1 sm:gap-2"><div style="opacity: 1; transform: none;"><div class="relative flex items-center justify-center border-y border-r bg-input transition-all focus-within:z-10 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-l border-border text-foreground h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm rounded-sm"></div></div><div style="opacity: 1; transform: none;"><div class="relative flex items-center justify-center border-y border-r bg-input transition-all focus-within:z-10 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-l border-border text-foreground h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm rounded-sm"></div></div><div style="opacity: 1; transform: none;"><div class="relative flex items-center justify-center border-y border-r bg-input transition-all focus-within:z-10 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-l border-border text-foreground h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm rounded-r-ele"></div></div></div><div style="position: absolute; inset: 0px; pointer-events: none;"><input autocomplete="one-time-code" class="disabled:cursor-not-allowed" data-input-otp="true" data-input-otp-placeholder-shown="true" inputmode="numeric" pattern="[0-9]*" maxlength="6" value="" data-input-otp-mss="0" data-input-otp-mse="0" style="position: absolute; inset: 0px; width: 100%; height: 100%; display: flex; text-align: left; opacity: 1; color: transparent; pointer-events: all; background: transparent; caret-color: transparent; border: 0px solid transparent; outline: transparent solid 0px; box-shadow: none; line-height: 1; letter-spacing: -0.5em; font-size: var(--root-height); font-family: monospace; font-variant-numeric: tabular-nums;"></div></div></div><div class="text-center"><p class="text-sm text-muted-foreground">Didn't receive the code? <button type="button" class="text-primary hover:underline disabled:opacity-50">Resend Code</button></p></div></div><div class="items-center justify-between flex flex-col gap-4"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-ele text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring shadow-sm/2 h-9 px-4 py-2 w-full" disabled="" type="submit">Verify Code</button><button class="whitespace-nowrap rounded-ele transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent focus-visible:ring-ring h-9 px-4 py-2 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left h-4 w-4" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>Back to Sign In</button></div></form></div></div></div></div>
```

## Public registry source files

No public registry source files were available.