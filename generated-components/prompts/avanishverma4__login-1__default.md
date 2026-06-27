# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/avanishverma4/login-1/default
- Registry URL: https://21st.dev/r/avanishverma4/login-1
- Author: avanishverma4
- Component slug: login-1
- Demo slug: default
- Title: login-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/avanishverma4/login-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/avanishverma4__login-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/avanishverma4__login-1__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full min-h-screen flex"><div class="flex-1 bg-gradient-to-br from-slate-900 via-blue-900 to-orange-600 flex items-center justify-center p-12"><div class="text-white max-w-lg"><h1 class="text-6xl font-bold mb-8 leading-tight">Build amazing products with our creative team.</h1></div></div><div class="flex-1 bg-gray-50 flex items-center justify-center p-12"><div class="w-full max-w-md"><div class="text-center mb-8"><div class="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-4"><div class="w-6 h-6 bg-white rounded-sm relative"><div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-orange-500 rounded-b-sm"></div><div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-red-500 rounded-t-sm"></div></div></div><h2 class="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2><p class="text-gray-600">Welcome back to CreativeStudio — Continue your journey</p></div><div class="space-y-6"><div><label for="email" class="block text-sm font-medium text-gray-700 mb-2">Your email</label><input id="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Enter your email" required="" type="email" value="" name="email"></div><div><label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label><div class="relative"><input id="password" class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Enter your password" required="" type="password" value="" name="password"><button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></button></div></div><div class="flex items-center justify-between"><label class="flex items-center"><input class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" type="checkbox"><span class="ml-2 text-sm text-gray-600">Remember me</span></label><button type="button" class="text-sm text-blue-600 hover:text-blue-700 font-medium">Forgot password?</button></div><button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Sign In</button><div class="text-center"><span class="text-gray-600">Don't have an account?</span> <button type="button" class="text-blue-600 hover:text-blue-700 font-semibold">Sign Up</button></div></div><div class="mt-8 mb-6"><div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-gray-50 text-gray-500">Or continue with</span></div></div></div><div class="grid grid-cols-2 gap-3"><button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><svg class="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path><path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path></svg><span class="text-sm font-medium">Google</span></button><button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><svg class="w-5 h-5 mr-2" fill="#1877f2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg><span class="text-sm font-medium">Facebook</span></button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.