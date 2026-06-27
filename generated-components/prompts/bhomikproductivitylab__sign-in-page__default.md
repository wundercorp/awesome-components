# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/bhomikproductivitylab/sign-in-page/default
- Registry URL: https://21st.dev/r/bhomikproductivitylab/sign-in-page
- Author: bhomikproductivitylab
- Component slug: sign-in-page
- Demo slug: default
- Title: sign-in-page
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/bhomikproductivitylab/sign-in-page with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/bhomikproductivitylab__sign-in-page__default.html
- Local screenshot file: generated-21st-prompts/screenshots/bhomikproductivitylab__sign-in-page__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="h-screen w-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex"><div class="flex-1 relative overflow-hidden"><div class="absolute top-6 left-6 z-10"><button class="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/30 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left w-5 h-5 text-white" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button></div><div class="absolute inset-0"><img alt="Brand Asset" class="w-full h-full object-cover" src="https://i.ibb.co/dJxBbFks/brandasset.png"></div></div><div class="flex-1 flex items-center justify-center bg-white"><div class="w-full max-w-md p-8"><div class="mb-8"><h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1><p class="text-gray-600">Don't have an account? <button class="text-blue-600 hover:text-blue-700 font-medium">Sign up</button></p></div><form class="space-y-6"><div><label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label><input placeholder="Email Address" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required="" type="email" value="" name="email"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Password</label><div class="relative"><input placeholder="Password" class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required="" type="password" value="" name="password"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye w-5 h-5 text-gray-500" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></button></div></div><div class="flex items-center justify-between"><label class="flex items-center space-x-2 text-sm text-gray-600"><input class="w-4 h-4 text-blue-600 border-gray-300 rounded" type="checkbox" name="rememberMe"><span>Remember me</span></label><button type="button" class="text-sm text-blue-600 hover:text-blue-700 font-medium">Forgot password?</button></div><button type="submit" class="w-full bg-black text-white py-3 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors">Sign In</button><div class="relative my-6"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500">or</span></div></div><div class="grid grid-cols-2 gap-4"><button type="button" class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50"><svg class="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path></svg><span class="text-sm font-medium text-gray-700">Continue with Google</span></button><button type="button" class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50"><svg class="w-5 h-5 mr-2" fill="#24292f" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg><span class="text-sm font-medium text-gray-700">Continue with GitHub</span></button></div></form></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.