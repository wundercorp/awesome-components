# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/tailark/sign-up/sign-up
- Registry URL: https://21st.dev/r/tailark/sign-up
- Author: tailark
- Component slug: sign-up
- Demo slug: sign-up
- Title: sign-up
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/tailark/sign-up with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/tailark__sign-up__sign-up.html
- Local screenshot file: generated-21st-prompts/screenshots/tailark__sign-up__sign-up.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent"><form action="" class="bg-muted m-auto h-fit w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]"><div class="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6"><div class="text-center"><a href="/" aria-label="go home" class="mx-auto block w-fit"></a><h1 class="text-title mb-1 mt-4 text-xl font-semibold">Create a Tailark Account</h1><p class="text-sm">Welcome! Create an account to get started</p></div><div class="mt-6 space-y-6"><div class="grid grid-cols-2 gap-3"><div class="space-y-2"><label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm" for="firstname">Firstname</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required="" id="firstname" type="text" name="firstname"></div><div class="space-y-2"><label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm" for="lastname">Lastname</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required="" id="lastname" type="text" name="lastname"></div></div><div class="space-y-2"><label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm" for="email">Username</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required="" id="email" type="email" name="email"></div><div class="space-y-0.5"><div class="flex items-center justify-between"><label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-title text-sm" for="pwd">Password</label><a href="#" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 rounded-md px-3 link intent-info variant-ghost text-sm">Forgot your Password ?</a></div><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 input sz-md variant-mixed" required="" id="pwd" type="password" name="pwd"></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">Sign In</button></div><div class="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3"><hr class="border-dashed"><span class="text-muted-foreground text-xs">Or continue With</span><hr class="border-dashed"></div><div class="grid grid-cols-2 gap-3"><button class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center justify-center gap-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg><span>Google</span></button><button class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center justify-center gap-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#f1511b" d="M121.666 121.666H0V0h121.666z"></path><path fill="#80cc28" d="M256 121.666H134.335V0H256z"></path><path fill="#00adef" d="M121.663 256.002H0V134.336h121.663z"></path><path fill="#fbbc09" d="M256 256.002H134.335V134.336H256z"></path></svg><span>Microsoft</span></button></div></div><div class="p-3"><p class="text-accent-foreground text-center text-sm">Have an account ?<a href="#" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 py-2 px-2">Sign In</a></p></div></form></section></div></div></div>
```

## Public registry source files

No public registry source files were available.