# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/tailark/team/team-one
- Registry URL: https://21st.dev/r/tailark/team
- Author: tailark
- Component slug: team
- Demo slug: team-one
- Title: team
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/tailark/team with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/tailark__team__team-one.html
- Local screenshot file: generated-21st-prompts/screenshots/tailark__team__team-one.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="bg-gray-50 py-16 md:py-32 dark:bg-transparent"><div class="mx-auto max-w-5xl border-t px-6"><span class="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Team</span><div class="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24"><div class="sm:w-2/5"><h2 class="text-3xl font-bold sm:text-4xl">Our dream team</h2></div><div class="mt-6 sm:mt-0"><p>During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.</p></div></div><div class="mt-12 md:mt-24"><div class="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"><div class="group overflow-hidden"><img class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" alt="team member" width="826" height="1239" src="https://alt.tailus.io/images/team/member-one.webp"><div class="px-2 pt-2 sm:pb-0 sm:pt-4"><div class="flex justify-between"><h3 class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Liam Brown</h3><span class="text-xs">_01</span></div><div class="mt-1 flex items-center justify-between"><span class="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">Founder - CEO</span><a href="#" class="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"> Linktree</a></div></div></div><div class="group overflow-hidden"><img class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" alt="team member" width="826" height="1239" src="https://alt.tailus.io/images/team/member-two.webp"><div class="px-2 pt-2 sm:pb-0 sm:pt-4"><div class="flex justify-between"><h3 class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Elijah Jones</h3><span class="text-xs">_02</span></div><div class="mt-1 flex items-center justify-between"><span class="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">Co-Founder - CTO</span><a href="#" class="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"> Linktree</a></div></div></div><div class="group overflow-hidden"><img class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" alt="team member" width="826" height="1239" src="https://alt.tailus.io/images/team/member-three.webp"><div class="px-2 pt-2 sm:pb-0 sm:pt-4"><div class="flex justify-between"><h3 class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Isabella Garcia</h3><span class="text-xs">_03</span></div><div class="mt-1 flex items-center justify-between"><span class="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">Sales Manager</span><a href="#" class="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"> Linktree</a></div></div></div><div class="group overflow-hidden"><img class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" alt="team member" width="826" height="1239" src="https://alt.tailus.io/images/team/member-four.webp"><div class="px-2 pt-2 sm:pb-0 sm:pt-4"><div class="flex justify-between"><h3 class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Henry Lee</h3><span class="text-xs">_04</span></div><div class="mt-1 flex items-center justify-between"><span class="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">UX Engeneer</span><a href="#" class="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"> Linktree</a></div></div></div><div class="group overflow-hidden"><img class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" alt="team member" width="826" height="1239" src="https://alt.tailus.io/images/team/member-five.webp"><div class="px-2 pt-2 sm:pb-0 sm:pt-4"><div class="flex justify-between"><h3 class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Ava Williams</h3><span class="text-xs">_05</span></div><div class="mt-1 flex items-center justify-between"><span class="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">Interaction Designer</span><a href="#" class="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"> Linktree</a></div></div></div><div class="group overflow-hidden"><img class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" alt="team member" width="826" height="1239" src="https://alt.tailus.io/images/team/member-six.webp"><div class="px-2 pt-2 sm:pb-0 sm:pt-4"><div class="flex justify-between"><h3 class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Olivia Miller</h3><span class="text-xs">_06</span></div><div class="mt-1 flex items-center justify-between"><span class="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">Visual Designer</span><a href="#" class="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"> Linktree</a></div></div></div></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.