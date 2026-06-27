# Build Sign In in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Sign In screenshot](screenshot.png)

## Component

- Author group: `easemize`
- Component: `sign-in`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: easemize
- Component slug: sign-in
- Demo slug: default
- Title: sign-in
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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default_SignInPageDemo">SignInPageDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-background text-foreground"><div class="h-[100dvh] flex flex-col md:flex-row font-geist w-[100dvw]"><section class="flex-1 flex items-center justify-center p-8"><div class="w-full max-w-md"><div class="flex flex-col gap-6"><h1 class="animate-element animate-delay-100 text-4xl md:text-5xl font-semibold leading-tight"><span class="font-light text-foreground tracking-tighter">Welcome</span></h1><p class="animate-element animate-delay-200 text-muted-foreground">Access your account and continue your journey with us</p><form class="space-y-5"><div class="animate-element animate-delay-300"><label class="text-sm font-medium text-muted-foreground">Email Address</label><div class="rounded-2xl border border-border bg-foreground/5 backdrop-blur-sm transition-colors focus-within:border-violet-400/70 focus-within:bg-violet-500/10"><input placeholder="Enter your email address" class="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none" type="email" name="email"></div></div><div class="animate-element animate-delay-400"><label class="text-sm font-medium text-muted-foreground">Password</label><div class="rounded-2xl border border-border bg-foreground/5 backdrop-blur-sm transition-colors focus-within:border-violet-400/70 focus-within:bg-violet-500/10"><div class="relative"><input placeholder="Enter your password" class="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none" type="password" name="password"><button type="button" class="absolute inset-y-0 right-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></button></div></div></div><div class="animate-element animate-delay-500 flex items-center justify-between text-sm"><label class="flex items-center gap-3 cursor-pointer"><input class="custom-checkbox" type="checkbox" name="rememberMe"><span class="text-foreground/90">Keep me signed in</span></label><a href="#" class="hover:underline text-violet-400 transition-colors">Reset password</a></div><button type="submit" class="animate-element animate-delay-600 w-full rounded-2xl bg-primary py-4 font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Sign In</button></form><div class="animate-element animate-delay-700 relative flex items-center justify-center"><span class="w-full border-t border-border"></span><span class="px-4 text-sm text-muted-foreground bg-background absolute">Or continue with</span></div><button class="animate-element animate-delay-800 w-full flex items-center justify-center gap-3 border border-border rounded-2xl py-4 hover:bg-secondary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z"></path></svg>Continue with Google</button><p class="animate-element animate-delay-900 text-center text-sm text-muted-foreground">New to our platform? <a href="#" class="text-violet-400 hover:underline transition-colors">Create Account</a></p></div></div></section><section class="hidden md:block flex-1 relative p-4"><div class="animate-slide-right animate-delay-300 absolute inset-4 rounded-3xl bg-cover bg-center" style="background-image: url(&quot;https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&amp;q=80&quot;);"></div><div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 px-8 w-full justify-center"><div class="animate-testimonial animate-delay-1000 flex items-start gap-3 rounded-3xl bg-card/40 dark:bg-zinc-800/40 backdrop-blur-xl border border-white/10 p-5 w-64"><img class="h-10 w-10 object-cover rounded-2xl" alt="avatar" src="https://randomuser.me/api/portraits/women/57.jpg"><div class="text-sm leading-snug"><p class="flex items-center gap-1 font-medium">Sarah Chen</p><p class="text-muted-foreground">@sarahdigital</p><p class="mt-1 text-foreground/80">Amazing platform! The user experience is seamless and the features are exactly what I needed.</p></div></div><div class="hidden xl:flex"><div class="animate-testimonial animate-delay-1200 flex items-start gap-3 rounded-3xl bg-card/40 dark:bg-zinc-800/40 backdrop-blur-xl border border-white/10 p-5 w-64"><img class="h-10 w-10 object-cover rounded-2xl" alt="avatar" src="https://randomuser.me/api/portraits/men/64.jpg"><div class="text-sm leading-snug"><p class="flex items-center gap-1 font-medium">Marcus Johnson</p><p class="text-muted-foreground">@marcustech</p><p class="mt-1 text-foreground/80">This service has transformed how I work. Clean design, powerful features, and excellent support.</p></div></div></div><div class="hidden 2xl:flex"><div class="animate-testimonial animate-delay-1400 flex items-start gap-3 rounded-3xl bg-card/40 dark:bg-zinc-800/40 backdrop-blur-xl border border-white/10 p-5 w-64"><img class="h-10 w-10 object-cover rounded-2xl" alt="avatar" src="https://randomuser.me/api/portraits/men/32.jpg"><div class="text-sm leading-snug"><p class="flex items-center gap-1 font-medium">David Martinez</p><p class="text-muted-foreground">@davidcreates</p><p class="mt-1 text-foreground/80">I've tried many platforms, but this one stands out. Intuitive, reliable, and genuinely helpful for productivity.</p></div></div></div></div></section></div></div></div></div>
```

## Reference source files

No reference source files were available.
