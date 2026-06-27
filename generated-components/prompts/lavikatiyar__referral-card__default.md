# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/lavikatiyar/referral-card/default
- Registry URL: https://21st.dev/r/lavikatiyar/referral-card
- Author: lavikatiyar
- Component slug: referral-card
- Demo slug: default
- Title: referral-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/lavikatiyar/referral-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/lavikatiyar__referral-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/lavikatiyar__referral-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[500px] w-full items-center justify-center bg-background p-4"><div class="relative w-full max-w-md overflow-hidden rounded-2xl border bg-card p-6 text-card-foreground shadow-lg sm:p-8" style="opacity: 1; transform: none;"><img alt="Referral illustration" class="absolute right-8 top-8 h-32 w-32 opacity-80" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-v0vbLLyS37IDvS2JqhJONhIAEgpeZP.png&amp;w=320&amp;q=75"><div class="relative z-10"><div class="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground" style="opacity: 1; transform: none;">Earn 10+ credits</div><h2 class="mb-1 text-3xl font-bold tracking-tight" style="opacity: 1; transform: none;">Refer &amp; Earn</h2><p class="mb-6 text-muted-foreground" style="opacity: 1; transform: none;">for each friend that you invite</p><div class="mb-6"><h3 class="mb-4 font-semibold" style="opacity: 1; transform: none;">How it works:</h3><ul class="space-y-3"><li class="flex items-center gap-3" style="opacity: 1; transform: none;"><span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap h-4 w-4" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></span><span class="text-sm text-muted-foreground">Share your invite link</span></li><li class="flex items-center gap-3" style="opacity: 1; transform: none;"><span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown h-4 w-4" aria-hidden="true"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg></span><span class="text-sm text-muted-foreground">Your friend gets <span class="font-semibold text-card-foreground">10 credits</span> when they subscribe</span></li><li class="flex items-center gap-3" style="opacity: 1; transform: none;"><span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span><span class="text-sm text-muted-foreground">You receive <span class="font-semibold text-card-foreground">10 credits</span> for each referral</span></li></ul></div><div><h3 class="mb-2 font-semibold" style="opacity: 1; transform: none;">Your invite link:</h3><div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2" style="opacity: 1; transform: none;"><div class="flex h-10 flex-grow items-center gap-2 rounded-md border bg-background px-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2 lucide-link-2 h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg><p class="truncate text-sm">https://21st.dev/lavikatiyar</p></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full shrink-0 sm:w-auto"><span class="flex items-center gap-2" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy h-4 w-4" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg> Copy Link</span></button></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.