# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/rubenerik/pricing-card-with-features/default
- Registry URL: https://21st.dev/r/rubenerik/pricing-card-with-features
- Author: rubenerik
- Component slug: pricing-card-with-features
- Demo slug: default
- Title: pricing-card-with-features
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/rubenerik/pricing-card-with-features with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/rubenerik__pricing-card-with-features__default.html
- Local screenshot file: generated-21st-prompts/screenshots/rubenerik__pricing-card-with-features__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-[464px] rounded-[38px] border border-border bg-card text-card-foreground p-[23px] flex flex-col gap-6 shadow-sm"><div><h2 class="text-xl font-semibold leading-[24px]">Full GPT App Development</h2><p class="text-base text-muted-foreground leading-[19px]">Tailor solution for your case</p></div><div class="p-6 rounded-[33px] border border-border bg-background px-[27px] py-[30px] flex flex-col gap-[25px]"><div class="flex items-center gap-3 cursor-pointer select-none text-muted-foreground hover:text-foreground transition-colors" data-state="closed"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-primary w-5 h-5 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span class="text-base leading-[19px]">Complete App development</span></div><div class="flex items-center gap-3 cursor-pointer select-none text-muted-foreground hover:text-foreground transition-colors" data-state="closed"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-primary w-5 h-5 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span class="text-base leading-[19px]">Custom UI/UX Interfaces for ChatGPT</span></div><div class="flex items-center gap-3 cursor-pointer select-none text-muted-foreground hover:text-foreground transition-colors" data-state="closed"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-primary w-5 h-5 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span class="text-base leading-[19px]">Backend API integration</span></div><div class="flex items-center gap-3 cursor-pointer select-none text-muted-foreground hover:text-foreground transition-colors" data-state="closed"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-primary w-5 h-5 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span class="text-base leading-[19px]">OAuth authentication setup trough OpenAI</span></div><div class="flex items-center gap-3 cursor-pointer select-none text-muted-foreground hover:text-foreground transition-colors" data-state="closed"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-primary w-5 h-5 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span class="text-base leading-[19px]">Production deployment</span></div><div class="flex items-center gap-3 cursor-pointer select-none text-muted-foreground hover:text-foreground transition-colors" data-state="closed"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-primary w-5 h-5 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span class="text-base leading-[19px]">Updates every 48h</span></div><div class="flex items-center gap-3 cursor-pointer select-none text-muted-foreground hover:text-foreground transition-colors" data-state="closed"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-primary w-5 h-5 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span class="text-base leading-[19px]">30-90 days post-launch support</span></div><div class="flex items-center gap-3 cursor-pointer select-none text-muted-foreground hover:text-foreground transition-colors" data-state="closed"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-primary w-5 h-5 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg><span class="text-base leading-[19px]">Handling submission process with OpenAI</span></div></div><div class="flex items-center justify-between px-[6px]"><div class="flex flex-col"><span class="text-sm text-muted-foreground">Starting from</span><span class="text-[34px] font-medium leading-[41px]">$3499</span></div><button class="whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 flex items-center justify-center gap-3 w-[220px] h-[64px] rounded-[39px] text-[20px] font-medium text-white bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 border-[3px] border-blue-600 shadow-sm hover:opacity-90 transition-all duration-150"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-[20px] h-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg><span>Book a call</span></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.