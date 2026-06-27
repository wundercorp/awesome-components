# Build Tech Stack in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Tech Stack screenshot](screenshot.png)

## Component

- Author group: `ayushmxxn`
- Component: `tech-stack`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ayushmxxn
- Component slug: tech-stack
- Demo slug: default
- Title: tech-stack
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full h-screen justify-center items-center"><div class="flex justify-center items-center py-20 "><div class="relative bg-black/50 overflow-hidden w-96 h-60 pb-3 rounded-lg shadow-lg"><img alt="Background" width="96" height="96" class="absolute inset-0 w-full h-full object-cover filter blur-3xl  " src="https://images.unsplash.com/photo-1695883701435-7bd88f796e05?w=600&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"><div class="absolute inset-0 bg-black/50 rounded-lg border border-zinc-600 backdrop-blur-xl "></div><div class="relative z-10 flex flex-col justify-between p-6 "><div class="flex justify-between "><div class="flex items-center gap-2 mb-2 text-sm text-white "><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-code mb-4"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m10 13-2 2 2 2"></path><path d="m14 17 2-2-2-2"></path></svg><p class="font-medium mb-3 text-base">Techstack</p></div></div><div class="flex flex-wrap gap-1.5"><a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/"><div class="inline-flex items-center rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white hover:bg-white/10"><div class="w-2 h-2 mr-2 rounded-full" style="background-color: rgb(255, 255, 255);"></div>Next.js</div></a><a target="_blank" rel="noopener noreferrer" href="https://react.dev/"><div class="inline-flex items-center rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white hover:bg-white/10"><div class="w-2 h-2 mr-2 rounded-full" style="background-color: rgb(97, 218, 251);"></div>React</div></a><a target="_blank" rel="noopener noreferrer" href="https://www.typescriptlang.org/"><div class="inline-flex items-center rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white hover:bg-white/10"><div class="w-2 h-2 mr-2 rounded-full" style="background-color: rgb(49, 120, 198);"></div>TypeScript</div></a><a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/"><div class="inline-flex items-center rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white hover:bg-white/10"><div class="w-2 h-2 mr-2 rounded-full" style="background-color: rgb(6, 182, 212);"></div>Tailwind CSS</div></a><a target="_blank" rel="noopener noreferrer" href="https://www.framer.com/motion/"><div class="inline-flex items-center rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white hover:bg-white/10"><div class="w-2 h-2 mr-2 rounded-full" style="background-color: rgb(0, 85, 255);"></div>Framer Motion</div></a><a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en"><div class="inline-flex items-center rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white hover:bg-white/10"><div class="w-2 h-2 mr-2 rounded-full" style="background-color: rgb(104, 160, 99);"></div>Node.js</div></a><a target="_blank" rel="noopener noreferrer" href="https://vercel.com/"><div class="inline-flex items-center rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white hover:bg-white/10"><div class="w-2 h-2 mr-2 rounded-full" style="background-color: rgb(0, 0, 0);"></div>Vercel</div></a></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
