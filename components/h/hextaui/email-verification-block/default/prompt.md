# Build Email Verification Block in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Email Verification Block screenshot](screenshot.png)

## Component

- Author group: `hextaui`
- Component: `email-verification-block`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hextaui
- Component slug: email-verification-block
- Demo slug: default
- Title: email-verification-block
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative rounded-card bg-card text-card-foreground transition-all duration-300 ease-out overflow-hidden border border-border p-6 w-full max-w-md mx-auto flex flex-col gap-6"><div class="space-y-2 text-center flex flex-col gap-4"><div class="flex justify-center"><div class="p-3 bg-blue-50 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-8 w-8 text-blue-600" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div></div><h3 class="tracking-tight text-foreground text-xl font-semibold">Check Your Email</h3><p class="text-muted-foreground flex flex-col gap-2 text-sm">We have sent a verification email to your address.<br><span class="font-medium text-foreground">user@example.com</span></p></div><div class="space-y-4 flex flex-col gap-4"><div class="text-center text-sm text-muted-foreground"><button class="text-primary hover:underline disabled:opacity-50 font-medium">Resend email</button></div></div><div class="items-center justify-between flex flex-col gap-4"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-ele text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring shadow-sm/2 h-9 px-4 py-2 w-full">I've verified my email</button><button class="whitespace-nowrap rounded-ele focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent focus-visible:ring-ring h-9 px-4 py-2 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left h-4 w-4" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>Back to Sign In</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
