# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/ruixen-pricing05/default
- Registry URL: https://21st.dev/r/ruixenui/ruixen-pricing05
- Author: ruixenui
- Component slug: ruixen-pricing05
- Demo slug: default
- Title: ruixen-pricing05
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/ruixen-pricing05 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__ruixen-pricing05__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__ruixen-pricing05__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="py-24 bg-white dark:bg-background"><div class="container"><div class="text-center max-w-2xl mx-auto"><h2 class="text-4xl font-semibold tracking-tight sm:text-5xl">Simple pricing for every team</h2><p class="text-muted-foreground mt-4 text-lg">Whether you're starting small or scaling fast, Ruixen UI grows with your content needs.</p></div><div class="flex flex-col gap-6 items-center mt-12 lg:flex-row lg:items-end lg:justify-center"><div class="rounded-lg bg-card text-card-foreground shadow-sm max-w-xs w-full border"><div class="flex-col space-y-1.5 p-6 flex justify-between items-start"><h3 class="tracking-tight text-lg font-bold text-muted-foreground">Starter</h3></div><div class="p-6 pt-0"><div class="flex items-baseline gap-1 mt-2"><span class="text-4xl font-bold tracking-tighter leading-none">$0</span><span class="tracking-tight font-semibold text-muted-foreground">/month</span></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-6">Start free</button><ul class="flex flex-col gap-4 mt-6 text-sm"><li class="flex items-center gap-2"><span>Up to 5 team members</span></li><li class="flex items-center gap-2"><span>Unlimited content projects</span></li><li class="flex items-center gap-2"><span>2GB storage</span></li><li class="flex items-center gap-2"><span>Basic integrations</span></li><li class="flex items-center gap-2"><span>Community support</span></li></ul></div></div><div class="rounded-lg shadow-sm max-w-xs w-full border bg-black text-white"><div class="flex-col space-y-1.5 p-6 flex justify-between items-start"><h3 class="tracking-tight text-lg font-bold text-white/70">Pro</h3><div class="text-sm px-3 py-1 rounded-xl border border-white/20 bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium" style="background-position-x: -80.9%;">Popular</div></div><div class="p-6 pt-0"><div class="flex items-baseline gap-1 mt-2"><span class="text-4xl font-bold tracking-tighter leading-none">$9</span><span class="tracking-tight font-semibold text-white/60">/month</span></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full mt-6">Upgrade now</button><ul class="flex flex-col gap-4 mt-6 text-sm"><li class="flex items-center gap-2"><span>Up to 50 team members</span></li><li class="flex items-center gap-2"><span>Unlimited AI-generated content</span></li><li class="flex items-center gap-2"><span>50GB storage</span></li><li class="flex items-center gap-2"><span>All integrations</span></li><li class="flex items-center gap-2"><span>Priority support</span></li><li class="flex items-center gap-2"><span>Content export</span></li><li class="flex items-center gap-2"><span>Keyword analytics</span></li></ul></div></div><div class="rounded-lg bg-card text-card-foreground shadow-sm max-w-xs w-full border"><div class="flex-col space-y-1.5 p-6 flex justify-between items-start"><h3 class="tracking-tight text-lg font-bold text-muted-foreground">Business</h3></div><div class="p-6 pt-0"><div class="flex items-baseline gap-1 mt-2"><span class="text-4xl font-bold tracking-tighter leading-none">$19</span><span class="tracking-tight font-semibold text-muted-foreground">/month</span></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-6">Contact sales</button><ul class="flex flex-col gap-4 mt-6 text-sm"><li class="flex items-center gap-2"><span>Unlimited team members</span></li><li class="flex items-center gap-2"><span>200GB storage</span></li><li class="flex items-center gap-2"><span>Dedicated AI workflows</span></li><li class="flex items-center gap-2"><span>Custom branding</span></li><li class="flex items-center gap-2"><span>Dedicated support manager</span></li><li class="flex items-center gap-2"><span>API access</span></li><li class="flex items-center gap-2"><span>Enterprise-grade security</span></li></ul></div></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.