# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/arihantcodes_1f7b8c4d/login-card/default
- Registry URL: https://21st.dev/r/arihantcodes_1f7b8c4d/login-card
- Author: arihantcodes_1f7b8c4d
- Component slug: login-card
- Demo slug: default
- Title: login-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/arihantcodes_1f7b8c4d/login-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/arihantcodes_1f7b8c4d__login-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/arihantcodes_1f7b8c4d__login-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default.tsx_LoginPage">default.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class=" w-full min-h-screen"><div class="relative min-h-screen z-10 flex items-center justify-center p-4"><div class="w-full max-w-md" style="opacity: 1;"><div class="bg-white dark:bg-[#3F3F3F] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl " style="opacity: 1; transform: none;"><div class="text-center mb-8" style="opacity: 1; transform: none;"><h1 class="text-3xl font-light text-gray-900 dark:text-white mb-2">Welcome back</h1><p class="text-gray-600 dark:text-gray-300 text-sm">Sign in to your account</p></div><div class="mb-6" style="opacity: 1; transform: none;"><div class="relative"><input placeholder="Please enter your Email" class="w-full bg-gray-100 dark:bg-[#1B1B1B] border border-gray-300 dark:border-white/20 rounded-full px-6 py-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-500 dark:focus:border-white/40 transition-colors" type="email" value=""><button class="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-full p-3 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right w-4 h-4 text-black" aria-hidden="true"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg></button></div></div><div class="flex items-center mb-6" style="opacity: 1; transform: none;"><div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent"></div><span class="px-4 text-gray-500 dark:text-gray-400 text-sm">OR</span><div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent"></div></div><div class="space-y-4 mb-6" style="opacity: 1; transform: none;"><button class="w-full bg-gray-100 dark:bg-[#1B1B1B] border border-gray-300 dark:border-white/20 rounded-full px-6 py-4 text-gray-900 dark:text-white flex items-center justify-between hover:bg-gray-200 dark:hover:bg-black/60 transition-colors group" tabindex="0"><div class="flex items-center"><div class="w-5 h-5 mr-3"><svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></div><span>Continue with Twitter</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg></button><button class="w-full bg-gray-100 dark:bg-[#1B1B1B] border border-gray-300 dark:border-white/20 rounded-full px-6 py-4 text-gray-900 dark:text-white flex items-center justify-between hover:bg-gray-200 dark:hover:bg-black/60 transition-colors group" tabindex="0"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" class="w-5 h-5 mr-3"><path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path></svg><span>Continue with Apple</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg></button></div><div class="text-center" style="opacity: 1; transform: none;"><p class="text-gray-500 dark:text-gray-400 text-sm">Don't have an account?<a href="#" class="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors underline" tabindex="0">Sign up</a></p></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.