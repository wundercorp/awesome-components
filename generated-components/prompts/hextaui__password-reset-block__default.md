# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hextaui/password-reset-block/default
- Registry URL: https://21st.dev/r/hextaui/password-reset-block
- Author: hextaui
- Component slug: password-reset-block
- Demo slug: default
- Title: password-reset-block
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hextaui/password-reset-block with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hextaui__password-reset-block__default.html
- Local screenshot file: generated-21st-prompts/screenshots/hextaui__password-reset-block__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative rounded-card bg-card text-card-foreground transition-all duration-300 ease-out overflow-hidden border border-border p-6 w-full max-w-md mx-auto flex flex-col gap-6"><div class="flex flex-col space-y-2 text-center"><h3 class="tracking-tight text-foreground text-2xl font-bold">Reset Password</h3><p class="text-sm text-muted-foreground leading-relaxed">Enter your email address and we'll send you a link to reset your password</p></div><form class="flex flex-col gap-6"><div class="space-y-4 flex flex-col gap-4"><div class="flex flex-col flex flex-col gap-2"><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground text-sm" for="email">Email Address</label><div class="relative w-full"><div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 z-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div><input class="flex w-full rounded-ele border bg-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm/2 border-border h-9 px-3 py-2 pl-10" id="email" placeholder="john.doe@example.com" type="email" value=""></div></div></div><div class="items-center justify-between flex flex-col gap-4"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-ele text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring shadow-sm/2 h-9 px-4 py-2 w-full" type="submit">Send Reset Link</button><button class="whitespace-nowrap rounded-ele transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent focus-visible:ring-ring h-9 px-4 py-2 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left h-4 w-4" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>Back to Sign In</button></div></form></div></div></div></div>
```

## Public registry source files

No public registry source files were available.