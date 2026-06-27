# Build Login Form in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Login Form screenshot](screenshot.png)

## Component

- Author group: `prebuiltui`
- Component: `login-form`
- Variant: `login-form-with-social-auth`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: prebuiltui
- Component slug: login-form
- Demo slug: login-form-with-social-auth
- Title: login-form
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"><h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">Welcome back</h2><form><input id="email" class="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" placeholder="Enter your email" required="" type="email"><input id="password" class="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" placeholder="Enter your password" required="" type="password"><div class="text-right py-4"><a class="text-blue-600 underline" href="#">Forgot Password</a></div><button type="submit" class="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white">Log in</button></form><p class="text-center mt-4">Don’t have an account? <a href="#" class="text-blue-500 underline">Signup</a></p><button type="button" class="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white"><img class="h-4 w-4" alt="appleLogo" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png">Log in with Apple</button><button type="button" class="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"><img class="h-4 w-4" alt="googleFavicon" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png">Log in with Apple</button></div></div></div></div>
```

## Reference source files

No reference source files were available.
