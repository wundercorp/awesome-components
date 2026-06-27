# Build Form 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Form 1 screenshot](screenshot.png)

## Component

- Author group: `prebuiltui`
- Component: `form-1`
- Variant: `simple-contact-us-form`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: prebuiltui
- Component slug: form-1
- Demo slug: simple-contact-us-form
- Title: form-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><form class="flex flex-col items-center text-sm"><p class="text-lg text-blue-600 font-medium pb-2">Contact Us</p><h1 class="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1><p class="text-sm text-gray-500 text-center pb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry's standard dummy text.</p><div class="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]"><div class="w-full"><label class="text-black/70" for="name">Your Name</label><input class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" required="" type="text"></div><div class="w-full"><label class="text-black/70" for="name">Your Email</label><input class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" required="" type="email"></div></div><div class="mt-6 w-[350px] md:w-[700px]"><label class="text-black/70" for="name">Message</label><textarea class="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required=""></textarea></div><button type="submit" class="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send Message</button></form></div></div></div>
```

## Reference source files

No reference source files were available.
