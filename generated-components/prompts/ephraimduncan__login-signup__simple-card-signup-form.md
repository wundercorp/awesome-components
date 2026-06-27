# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ephraimduncan/login-signup/simple-card-signup-form
- Registry URL: https://21st.dev/r/ephraimduncan/login-signup
- Author: ephraimduncan
- Component slug: login-signup
- Demo slug: simple-card-signup-form
- Title: login-signup
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ephraimduncan/login-signup with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ephraimduncan__login-signup__simple-card-signup-form.html
- Local screenshot file: generated-21st-prompts/screenshots/ephraimduncan__login-signup__simple-card-signup-form.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen"><div class="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6"><div class="sm:mx-auto sm:w-full sm:max-w-md"><svg fill="currentColor" height="48" viewBox="0 0 40 48" width="40" class="mx-auto h-10 w-10 text-foreground dark:text-foreground" aria-hidden="true"><clipPath id="a"><path d="m0 0h40v48h-40z"></path></clipPath><g clip-path="url(#a)"><path d="m25.0887 5.05386-3.933-1.05386-3.3145 12.3696-2.9923-11.16736-3.9331 1.05386 3.233 12.0655-8.05262-8.0526-2.87919 2.8792 8.83271 8.8328-10.99975-2.9474-1.05385625 3.933 12.01860625 3.2204c-.1376-.5935-.2104-1.2119-.2104-1.8473 0-4.4976 3.646-8.1436 8.1437-8.1436 4.4976 0 8.1436 3.646 8.1436 8.1436 0 .6313-.0719 1.2459-.2078 1.8359l10.9227 2.9267 1.0538-3.933-12.0664-3.2332 11.0005-2.9476-1.0539-3.933-12.0659 3.233 8.0526-8.0526-2.8792-2.87916-8.7102 8.71026z"></path><path d="m27.8723 26.2214c-.3372 1.4256-1.0491 2.7063-2.0259 3.7324l7.913 7.9131 2.8792-2.8792z"></path><path d="m25.7665 30.0366c-.9886 1.0097-2.2379 1.7632-3.6389 2.1515l2.8794 10.746 3.933-1.0539z"></path><path d="m21.9807 32.2274c-.65.1671-1.3313.2559-2.0334.2559-.7522 0-1.4806-.102-2.1721-.2929l-2.882 10.7558 3.933 1.0538z"></path><path d="m17.6361 32.1507c-1.3796-.4076-2.6067-1.1707-3.5751-2.1833l-7.9325 7.9325 2.87919 2.8792z"></path><path d="m13.9956 29.8973c-.9518-1.019-1.6451-2.2826-1.9751-3.6862l-10.95836 2.9363 1.05385 3.933z"></path></g></svg><h3 class="mt-2 text-center text-lg font-bold text-foreground dark:text-foreground">Create new account for workspace</h3></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm mt-4 sm:mx-auto sm:w-full sm:max-w-md"><div class="p-6 pt-0"><form action="#" method="post" class="space-y-4"><div><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-foreground dark:text-foreground" for="name-login-05">Name</label><input class="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 mt-2" id="name-login-05" autocomplete="name-login-05" placeholder="Name" type="text" name="name-login-05"></div><div><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-foreground dark:text-foreground" for="email-login-05">Email</label><input class="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 mt-2" id="email-login-05" autocomplete="email-login-05" placeholder="ephraim@blocks.so" type="email" name="email-login-05"></div><div><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-foreground dark:text-foreground" for="password-login-05">Password</label><input class="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 mt-2" id="password-login-05   " autocomplete="password-login-05" placeholder="Password" type="password" name="password-login-05"></div><div><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-foreground dark:text-foreground" for="confirm-password-login-05">Confirm password</label><input class="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 mt-2" id="confirm-password-login-05" autocomplete="confirm-password-login-05" placeholder="Password" type="password" name="confirm-password-login-05"></div><div class="mt-2 flex items-start"><div class="flex h-6 items-center"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground size-4" id="newsletter-login-05"></button><input aria-hidden="true" tabindex="-1" type="checkbox" value="on" name="newsletter-login-05" style="position: absolute; pointer-events: none; opacity: 0; margin: 0px; transform: translateX(-100%); width: 16px; height: 16px;"></div><label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-3 text-sm leading-6 text-muted-foreground dark:text-muted-foreground" for="newsletter-login-05">Sign up to our newsletter</label></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 mt-4 w-full py-2 font-medium" type="submit">Create account</button><p class="text-center text-xs text-muted-foreground dark:text-muted-foreground">By signing in, you agree to our <a href="#" class="capitalize text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90">Terms of use</a> and <a href="#" class="capitalize text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90">Privacy policy</a></p></form></div></div><p class="mt-6 text-center text-sm text-muted-foreground dark:text-muted-foreground">Already have an account? <a href="#" class="font-medium text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90">Sign in</a></p></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.