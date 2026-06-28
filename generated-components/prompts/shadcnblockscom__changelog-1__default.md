# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shadcnblockscom/changelog-1/default
- Registry URL: https://21st.dev/r/shadcnblockscom/changelog-1
- Author: shadcnblockscom
- Component slug: changelog-1
- Demo slug: default
- Title: changelog-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shadcnblockscom/changelog-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shadcnblockscom__changelog-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shadcnblockscom__changelog-1__default.png

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
<div id="root"><section class="py-32"><div class="container"><div class="mx-auto max-w-3xl"><h1 class="mb-4 text-3xl font-bold tracking-tight md:text-5xl">Changelog</h1><p class="mb-6 text-base text-muted-foreground md:text-lg">Get the latest updates and improvements to our platform.</p></div><div class="mx-auto mt-16 max-w-3xl space-y-16 md:mt-24 md:space-y-24"><div class="relative flex flex-col gap-4 md:flex-row md:gap-16"><div class="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky"><div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Version 1.3.0</div><span class="text-xs font-medium text-muted-foreground">15 November 2024</span></div><div class="flex flex-col"><h2 class="mb-3 text-lg leading-tight font-bold text-foreground/90 md:text-2xl">Enhanced Analytics Dashboard</h2><p class="text-sm text-muted-foreground md:text-base">We've completely redesigned our analytics dashboard to provide deeper insights and improved visualizations of your data.</p><ul class="mt-4 ml-4 space-y-1.5 text-sm text-muted-foreground md:text-base"><li class="list-disc">Interactive data visualizations with real-time updates</li><li class="list-disc">Customizable dashboard widgets</li><li class="list-disc">Export analytics in multiple formats (CSV, PDF, Excel)</li><li class="list-disc">New reporting templates for common use cases</li><li class="list-disc">Improved data filtering and segmentation options</li></ul><img alt="Version 1.3.0 visual" class="mt-8 w-full rounded-lg object-cover" src="https://shadcnblocks.com/images/block/placeholder-aspect-video-1.svg"><a href="https://shadcnblocks.com" target="_blank" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 mt-4 self-end">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div><div class="relative flex flex-col gap-4 md:flex-row md:gap-16"><div class="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky"><div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Version 1.2.5</div><span class="text-xs font-medium text-muted-foreground">7 October 2024</span></div><div class="flex flex-col"><h2 class="mb-3 text-lg leading-tight font-bold text-foreground/90 md:text-2xl">Mobile App Launch</h2><p class="text-sm text-muted-foreground md:text-base">We're excited to announce the launch of our mobile application, available now on iOS and Android platforms.</p><ul class="mt-4 ml-4 space-y-1.5 text-sm text-muted-foreground md:text-base"><li class="list-disc">Native mobile experience for on-the-go productivity</li><li class="list-disc">Offline mode support for working without internet connection</li><li class="list-disc">Push notifications for important updates</li><li class="list-disc">Biometric authentication for enhanced security</li></ul></div></div><div class="relative flex flex-col gap-4 md:flex-row md:gap-16"><div class="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky"><div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Version 1.2.1</div><span class="text-xs font-medium text-muted-foreground">23 September 2024</span></div><div class="flex flex-col"><h2 class="mb-3 text-lg leading-tight font-bold text-foreground/90 md:text-2xl">New features and improvements</h2><p class="text-sm text-muted-foreground md:text-base">Here are the latest updates and improvements to our platform. We are always working to improve our platform and your experience.</p><ul class="mt-4 ml-4 space-y-1.5 text-sm text-muted-foreground md:text-base"><li class="list-disc">Added new feature to export data</li><li class="list-disc">Improved performance and speed</li><li class="list-disc">Fixed minor bugs and issues</li><li class="list-disc">Added new feature to import data</li></ul><img alt="Version 1.2.1 visual" class="mt-8 w-full rounded-lg object-cover" src="https://shadcnblocks.com/images/block/placeholder-aspect-video-1.svg"></div></div><div class="relative flex flex-col gap-4 md:flex-row md:gap-16"><div class="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky"><div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Version 1.0.0</div><span class="text-xs font-medium text-muted-foreground">31 August 2024</span></div><div class="flex flex-col"><h2 class="mb-3 text-lg leading-tight font-bold text-foreground/90 md:text-2xl">First version of our platform</h2><p class="text-sm text-muted-foreground md:text-base">Introducing a new platform to help you manage your projects and tasks. We are excited to launch our platform and help you get started. We are always working to improve our platform and your experience.</p><img alt="Version 1.0.0 visual" class="mt-8 w-full rounded-lg object-cover" src="https://shadcnblocks.com/images/block/placeholder-aspect-video-1.svg"><a href="https://shadcnblocks.com" target="_blank" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 mt-4 self-end">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></div></div></section></div>
```

## Public registry source files

No public registry source files were available.