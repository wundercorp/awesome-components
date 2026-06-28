# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/tailark/forgot-password/default
- Registry URL: https://21st.dev/r/tailark/forgot-password
- Author: tailark
- Component slug: forgot-password
- Demo slug: default
- Title: forgot-password
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/tailark/forgot-password with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/tailark__forgot-password__default.html
- Local screenshot file: generated-21st-prompts/screenshots/tailark__forgot-password__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent"><form action="" class="bg-muted m-auto h-fit w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]"><div class="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6"><div><a href="/" aria-label="go home"></a><h1 class="mb-1 mt-4 text-xl font-semibold">Recover Password</h1><p class="text-sm">Enter your email to receive a reset link</p></div><div class="mt-6 space-y-6"><div class="space-y-2"><label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm" for="email">Email</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required="" id="email" placeholder="name@example.com" type="email" name="email"></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">Send Reset Link</button></div><div class="mt-6 text-center"><p class="text-muted-foreground text-sm">We'll send you a link to reset your password.</p></div></div><div class="p-3"><p class="text-accent-foreground text-center text-sm">Remembered your password?<a href="/preview/login/two" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 py-2 px-2">Log in</a></p></div></form></section></div></div></div>
```

## Public registry source files

No public registry source files were available.