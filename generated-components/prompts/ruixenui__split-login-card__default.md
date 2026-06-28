# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/split-login-card/default
- Registry URL: https://21st.dev/r/ruixenui/split-login-card
- Author: ruixenui
- Component slug: split-login-card
- Demo slug: default
- Title: split-login-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/split-login-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__split-login-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__split-login-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col md:flex-row w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white border dark:bg-gray-800"><div class="md:w-1/2 bg-[#8371F5] dark:bg-blue-600 text-white flex flex-col items-center justify-center p-8"><h2 class="text-3xl font-bold mb-4">Welcome Back!</h2><p class="mb-6 text-center">Sign in to continue to your dashboard and enjoy seamless experience.</p><img alt="Login Illustration" class="w-16" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen-dark.png"></div><div class="md:w-1/2 p-8 flex flex-col justify-center"><h3 class="text-2xl font-semibold mb-6">Sign In</h3><div class="flex flex-col gap-4"><div><label class="text-sm font-medium leading-4 text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label><input class="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 mt-1" id="email" placeholder="you@example.com" type="email"></div><div><label class="text-sm font-medium leading-4 text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="password">Password</label><input class="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 mt-1" id="password" placeholder="********" type="password"></div></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-9 px-4 py-2 mt-6 w-full">Login</button><p class="mt-4 text-sm text-gray-500 dark:text-gray-300 text-center">Don’t have an account? <a href="#" class="text-blue-500 hover:underline">Sign up</a></p></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.