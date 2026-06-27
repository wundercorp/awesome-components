# Build Sign In Block in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Sign In Block screenshot](screenshot.png)

## Component

- Author group: `hextaui`
- Component: `sign-in-block`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hextaui
- Component slug: sign-in-block
- Demo slug: default
- Title: sign-in-block
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative rounded-card bg-card text-card-foreground transition-all duration-300 ease-out overflow-hidden border border-border p-6 w-full max-w-sm mx-auto flex flex-col gap-6"><div class="flex flex-col space-y-2 text-center"><h3 class="tracking-tight text-foreground text-2xl font-bold">Welcome Back</h3><p class="text-sm text-muted-foreground leading-relaxed">Sign in to your account to continue</p></div><form class="flex flex-col gap-6"><div class="space-y-4 flex flex-col gap-4"><div class="flex flex-col gap-2"><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground text-sm" for="email">Email</label><div class="relative w-full"><input class="flex w-full rounded-ele border bg-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm/2 border-border h-9 px-3 py-2" id="email" placeholder="john.doe@example.com" type="email" value=""></div></div><div class="flex flex-col gap-2"><div class="flex items-center justify-between"><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground text-sm" for="password">Password</label><a href="#" class="text-sm text-primary hover:underline">Forgot password?</a></div><div class="relative w-full"><input class="flex w-full rounded-ele border bg-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm/2 border-border h-9 px-3 py-2 pr-10" id="password" placeholder="Enter your password" type="password" value=""><div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 z-10"><button type="button" class="text-muted-foreground hover:text-foreground transition-colors [&amp;_svg]:size-4 [&amp;_svg]:shrink-0" tabindex="-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></button></div></div></div><div class="flex items-center justify-between"><div class="flex flex-col gap-1"><div class="flex items-start gap-2"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id="rememberMe" class="peer shrink-0 rounded-sm border border-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary bg-accent text-foreground focus-visible:ring-offset-background focus-visible:ring-offset-2 transition-colors shadow-sm/2 h-4 w-4"></button><input aria-hidden="true" tabindex="-1" type="checkbox" value="on" style="position: absolute; pointer-events: none; opacity: 0; margin: 0px; transform: translateX(-100%); width: 16px; height: 16px;"></div></div><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground ml-2 text-sm" for="rememberMe">Remember me</label></div></div><div class="items-center justify-between flex flex-col gap-4"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-ele text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring shadow-sm/2 h-9 px-4 py-2 w-full" type="submit">Sign In</button><div class="text-center"><p class="text-sm text-muted-foreground">Don't have an account? <a href="#" class="text-foreground decoration-0 no-underline font-normal">Sign Up</a></p></div></div></form></div></div></div></div>
```

## Reference source files

No reference source files were available.
