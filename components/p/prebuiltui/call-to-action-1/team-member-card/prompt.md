# Build Call To Action 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Call To Action 1 screenshot](screenshot.png)

## Component

- Author group: `prebuiltui`
- Component: `call-to-action-1`
- Variant: `team-member-card`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: prebuiltui
- Component slug: call-to-action-1
- Demo slug: team-member-card
- Title: call-to-action-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-wrap items-center justify-center gap-6"><div class="text-sm text-gray-500 w-80 divide-y divide-gray-500/30 border border-gray-500/30 rounded bg-white"><div class="flex items-start justify-between p-3"><div><div class="flex items-center space-x-2"><h2 class="text-lg text-gray-800">James Washington</h2><p class="bg-green-500/20 px-2 py-0.5 rounded-full text-xs text-green-600 border border-green-500/30">Admin</p></div><p>Content Marketing</p></div><img class="h-10 w-10 rounded-full" alt="userImage1" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&amp;w=100"></div><div class="flex items-center divide-x divide-gray-500/30"><button type="button" class="flex items-center justify-center gap-2 w-1/2 py-3"><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 2.5c0-.825-.675-1.5-1.5-1.5H3c-.825 0-1.5.675-1.5 1.5m15 0v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9m15 0L9 7.75 1.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Send Email</button><button type="button" class="flex items-center justify-center gap-2 w-1/2 py-3"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.29 3.75a3.75 3.75 0 0 1 2.962 2.963M11.289.75a6.75 6.75 0 0 1 5.963 5.955m-.75 5.985v2.25a1.5 1.5 0 0 1-1.635 1.5 14.84 14.84 0 0 1-6.472-2.303 14.6 14.6 0 0 1-4.5-4.5 14.84 14.84 0 0 1-2.303-6.502A1.5 1.5 0 0 1 3.085 1.5h2.25a1.5 1.5 0 0 1 1.5 1.29 9.6 9.6 0 0 0 .525 2.108 1.5 1.5 0 0 1-.338 1.582l-.952.952a12 12 0 0 0 4.5 4.5l.952-.952a1.5 1.5 0 0 1 1.582-.338c.681.254 1.388.43 2.108.526a1.5 1.5 0 0 1 1.29 1.522" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Call Now</button></div></div><div class="text-sm text-gray-500 w-80 divide-y divide-gray-500/30 border border-gray-500/30 rounded bg-white"><div class="flex items-start justify-between p-3"><div><div class="flex items-center space-x-2"><h2 class="text-lg text-gray-800">Richard Nelson</h2><p class="bg-green-500/20 px-2 py-0.5 rounded-full text-xs text-green-600 border border-green-500/30">Admin</p></div><p>Content Writer</p></div><img class="h-10 w-10 rounded-full" alt="userImage2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=100"></div><div class="flex items-center divide-x divide-gray-500/30"><button type="button" class="flex items-center justify-center gap-2 w-1/2 py-3"><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 2.5c0-.825-.675-1.5-1.5-1.5H3c-.825 0-1.5.675-1.5 1.5m15 0v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9m15 0L9 7.75 1.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Send Email</button><button type="button" class="flex items-center justify-center gap-2 w-1/2 py-3"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.29 3.75a3.75 3.75 0 0 1 2.962 2.963M11.289.75a6.75 6.75 0 0 1 5.963 5.955m-.75 5.985v2.25a1.5 1.5 0 0 1-1.635 1.5 14.84 14.84 0 0 1-6.472-2.303 14.6 14.6 0 0 1-4.5-4.5 14.84 14.84 0 0 1-2.303-6.502A1.5 1.5 0 0 1 3.085 1.5h2.25a1.5 1.5 0 0 1 1.5 1.29 9.6 9.6 0 0 0 .525 2.108 1.5 1.5 0 0 1-.338 1.582l-.952.952a12 12 0 0 0 4.5 4.5l.952-.952a1.5 1.5 0 0 1 1.582-.338c.681.254 1.388.43 2.108.526a1.5 1.5 0 0 1 1.29 1.522" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Call Now</button></div></div><div class="text-sm text-gray-500 w-80 divide-y divide-gray-500/30 border border-gray-500/30 rounded bg-white"><div class="flex items-start justify-between p-3"><div><div class="flex items-center space-x-2"><h2 class="text-lg text-gray-800">Donald Jackman</h2><p class="bg-green-500/20 px-2 py-0.5 rounded-full text-xs text-green-600 border border-green-500/30">Admin</p></div><p>Content Creator</p></div><img class="h-10 w-10 rounded-full" alt="userImage3" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;h=100&amp;auto=format&amp;fit=crop"></div><div class="flex items-center divide-x divide-gray-500/30"><button type="button" class="flex items-center justify-center gap-2 w-1/2 py-3"><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 2.5c0-.825-.675-1.5-1.5-1.5H3c-.825 0-1.5.675-1.5 1.5m15 0v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9m15 0L9 7.75 1.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Send Email</button><button type="button" class="flex items-center justify-center gap-2 w-1/2 py-3"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.29 3.75a3.75 3.75 0 0 1 2.962 2.963M11.289.75a6.75 6.75 0 0 1 5.963 5.955m-.75 5.985v2.25a1.5 1.5 0 0 1-1.635 1.5 14.84 14.84 0 0 1-6.472-2.303 14.6 14.6 0 0 1-4.5-4.5 14.84 14.84 0 0 1-2.303-6.502A1.5 1.5 0 0 1 3.085 1.5h2.25a1.5 1.5 0 0 1 1.5 1.29 9.6 9.6 0 0 0 .525 2.108 1.5 1.5 0 0 1-.338 1.582l-.952.952a12 12 0 0 0 4.5 4.5l.952-.952a1.5 1.5 0 0 1 1.582-.338c.681.254 1.388.43 2.108.526a1.5 1.5 0 0 1 1.29 1.522" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Call Now</button></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
