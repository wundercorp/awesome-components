# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/float_ui/login-with-listed-provider/login-with-grid-provider
- Registry URL: https://21st.dev/r/float_ui/login-with-listed-provider
- Author: float_ui
- Component slug: login-with-listed-provider
- Demo slug: login-with-grid-provider
- Title: login-with-listed-provider
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/float_ui/login-with-listed-provider with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/float_ui__login-with-listed-provider__login-with-grid-provider.html
- Local screenshot file: generated-21st-prompts/screenshots/float_ui__login-with-listed-provider__login-with-grid-provider.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4"><div class="w-full space-y-6 text-gray-600 sm:max-w-md"><div class="text-center"><img width="150" class="mx-auto" alt="Logo" src="https://floatui.com/logo.svg"><div class="mt-5 space-y-2"><h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3><p>Don't have an account? <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p></div></div><div class="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg"><div class="grid grid-cols-3 gap-x-3"><button class="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"><svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M47.532 24.553c0-1.632-.132-3.272-.414-4.877H24.48v9.242h12.963c-.538 2.981-2.266 5.618-4.797 7.294v5.997h7.734c4.542-4.18 7.152-10.353 7.152-17.655Z"></path><path fill="#34A853" d="M24.48 48c6.473 0 11.932-2.125 15.909-5.793l-7.734-5.997c-2.152 1.464-4.93 2.293-8.166 2.293-6.261 0-11.57-4.224-13.475-10.403H3.033v6.182C7.107 42.887 15.406 48 24.48 48Z"></path><path fill="#FBBC05" d="M11.005 28.6a14.37 14.37 0 0 1 0-9.189V13.23H3.033a23.92 23.92 0 0 0 0 21.553l7.972-6.182Z"></path><path fill="#EA4335" d="M24.48 9.499c3.422-.053 6.729 1.235 9.207 3.598l6.852-6.852C36.2 2.171 30.441-.069 24.48.002 15.406.002 7.107 5.117 3.033 13.23l7.972 6.182c1.896-5.688 7.214-9.912 13.475-9.912Z"></path></svg></button><button class="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"><svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227"><path fill="#000000" d="M714.163 519.284 1160.9 0H1052.56L669.701 450.887 363.044 0H0l463.055 678.764L0 1226.37h108.342l406.5-479.102 325.636 479.102H1200M148.756 79.845h165.69l737.178 1067.68h-165.68"></path></svg></button><button class="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"><svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#181717" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                  3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                  0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61 
                  -.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.729.083-.729 
                  1.205.084 1.84 1.237 1.84 1.237 
                  1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605 
                  -2.665-.3-5.466-1.334-5.466-5.93 
                  0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                  0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404 
                  c1.02.005 2.045.138 3.003.404 
                  2.28-1.552 3.285-1.23 3.285-1.23 
                  .645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 
                  0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.22 
                  0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></button></div><div class="relative"><span class="block w-full h-px bg-gray-300"></span><p class="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">Or continue with</p></div><form class="space-y-5"><div><label class="font-medium">Email</label><input required="" class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" type="email"></div><div><label class="font-medium">Password</label><input required="" class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" type="password"></div><button class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">Sign in</button></form></div><div class="text-center"><a href="#" class="hover:text-indigo-600">Forgot password?</a></div></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.