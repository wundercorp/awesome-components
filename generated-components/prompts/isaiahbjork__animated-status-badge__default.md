# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/isaiahbjork/animated-status-badge/default
- Registry URL: https://21st.dev/r/isaiahbjork/animated-status-badge
- Author: isaiahbjork
- Component slug: animated-status-badge
- Demo slug: default
- Title: animated-status-badge
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/isaiahbjork/animated-status-badge with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/isaiahbjork__animated-status-badge__default.html
- Local screenshot file: generated-21st-prompts/screenshots/isaiahbjork__animated-status-badge__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default_Page">Page</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen p-8"><div class="max-w-4xl mx-auto space-y-8"><h1 class="text-3xl mt-10 pb-5 font-bold text-center text-primary mb-8">Reusable Animated Status Badge Demo</h1><div class="grid grid-cols-1 md:grid-cols-2 gap-12"><div class="relative"><div class="border bg-card text-card-foreground shadow-sm w-full h-64 overflow-hidden rounded-lg relative z-10"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Project Alpha</h3></div><div class="p-6 pt-0 space-y-4"><p class="text-foreground">This is a sample card to demonstrate the animated status badge appearing BEHIND the card.</p><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Start Process 1</button></div></div></div><div class="relative"><div class="border bg-card text-card-foreground shadow-sm w-full h-64 overflow-hidden rounded-lg relative z-10"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Project Beta</h3></div><div class="p-6 pt-0 space-y-4"><p class="text-foreground">Another card showing how the badge can be reused across different components while staying behind the card.</p><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">Start Process 2</button></div></div></div></div><div class="text-center text-gray-600"><p>Click the buttons to see the animated status badges appear BEHIND the cards!</p><p class="text-sm mt-2">Each badge runs once per trigger: “Running” → disappears → “Completed” → auto-reset</p></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.