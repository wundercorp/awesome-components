# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/creat-account-form/default
- Registry URL: https://21st.dev/r/ruixenui/creat-account-form
- Author: ruixenui
- Component slug: creat-account-form
- Demo slug: default
- Title: creat-account-form
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/creat-account-form with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__creat-account-form__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__creat-account-form__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen"><div class="bg-card text-card-foreground w-full max-w-md shadow-lg rounded-2xl border border-gray-200"><div class="flex flex-col space-y-1.5 p-6"><h3 class="tracking-tight text-2xl font-semibold text-center text-gray-800">Create Your Account</h3><p class="text-center text-sm text-gray-500 mt-1">Sign up and start exploring features tailored just for you.</p></div><div class="p-6 pt-0"><form class="space-y-5"><div><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">Full Name</label><div class="flex items-center gap-2 border rounded-lg px-3 py-2 bg-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-4 h-4 text-gray-500" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><input class="flex h-9 w-full rounded-lg border-input bg-background px-3 py-2 text-sm text-foreground shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 border-0 focus-visible:ring-0 focus-visible:outline-none shadow-none" id="name" placeholder="John Doe" type="text" value=""></div></div><div><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email Address</label><div class="flex items-center gap-2 border rounded-lg px-3 py-2 bg-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-4 h-4 text-gray-500" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><input class="flex h-9 w-full rounded-lg border-input bg-background px-3 py-2 text-sm text-foreground shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 border-0 focus-visible:ring-0 focus-visible:outline-none shadow-none" id="email" placeholder="you@example.com" type="email" value=""></div></div><div><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="password">Password</label><div class="flex items-center gap-2 border rounded-lg px-3 py-2 bg-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock w-4 h-4 text-gray-500" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><input class="flex h-9 w-full rounded-lg border-input bg-background px-3 py-2 text-sm text-foreground shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 border-0 focus-visible:ring-0 focus-visible:outline-none shadow-none" id="password" placeholder="••••••••" type="password" value=""></div></div><button class="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full rounded-xl hover:cursor-pointer text-white font-medium shadow-md" type="submit">Get Started</button></form><p class="text-xs text-gray-500 text-center mt-4">By continuing, you agree to our <span class="text-indigo-600 font-medium cursor-pointer hover:underline">Terms of Service</span> and <span class="text-indigo-600 font-medium cursor-pointer hover:underline">Privacy Policy</span>.</p></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.