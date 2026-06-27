# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/efferd/footer/default
- Registry URL: https://21st.dev/r/efferd/footer
- Author: efferd
- Component slug: footer
- Demo slug: default
- Title: footer
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/efferd/footer with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/efferd__footer__default.html
- Local screenshot file: generated-21st-prompts/screenshots/efferd__footer__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full"><div class="w-full relative flex min-h-screen h-full items-center"><div aria-hidden="true" class="pointer-events-none absolute inset-0" style="background-image: radial-gradient(rgba(255, 255, 255, 0.08) 0.8px, transparent 0.8px); background-size: 14px 14px; mask-image: radial-gradient(circle at 50% 10%, rgb(0, 0, 0), rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0) 70%);"></div><div aria-hidden="true" class="pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)] blur-[30px]"></div><div class="container mx-auto flex flex-col items-center justify-center px-4"><h1 class="text-center text-4xl font-extrabold font-mono">Footer Section</h1><p class="text-foreground/60 mt-4 text-center text-lg font-medium">The Footer is a common component.</p></div></div><footer class="border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]"><div class="relative mx-auto max-w-5xl px-4"><div class="relative grid grid-cols-1 border-x md:grid-cols-4 md:divide-x"><div><a href="#" class="hover:bg-accent hover:text-accent-foreground flex items-center justify-between border-t border-b p-2 text-sm md:border-t-0"><span class="font-medium">Facebook</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 transition-colors" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a><div class="p-2"><h3 class="text-foreground/75 mt-2 mb-4 text-xs font-medium tracking-wider uppercase">About Us</h3><ul><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Pricing</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Testimonials</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">FAQs</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Contact Us</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Blog</a></li></ul></div></div><div><a href="#" class="hover:bg-accent hover:text-accent-foreground flex items-center justify-between border-t border-b p-2 text-sm md:border-t-0"><span class="font-medium">Youtube</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 transition-colors" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a><div class="p-2"><h3 class="text-foreground/75 mt-2 mb-4 text-xs font-medium tracking-wider uppercase">Support</h3><ul><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Help Center</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Terms</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Privacy</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Security</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Cookie Policy</a></li></ul></div></div><div><a href="#" class="hover:bg-accent hover:text-accent-foreground flex items-center justify-between border-t border-b p-2 text-sm md:border-t-0"><span class="font-medium">Twitter</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 transition-colors" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a><div class="p-2"><h3 class="text-foreground/75 mt-2 mb-4 text-xs font-medium tracking-wider uppercase">Community</h3><ul><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Forum</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Events</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Partners</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Affiliates</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Career</a></li></ul></div></div><div><a href="#" class="hover:bg-accent hover:text-accent-foreground flex items-center justify-between border-t border-b p-2 text-sm md:border-t-0"><span class="font-medium">Instagram</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 transition-colors" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a><div class="p-2"><h3 class="text-foreground/75 mt-2 mb-4 text-xs font-medium tracking-wider uppercase">Press</h3><ul><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Investors</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Terms of Use</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Privacy Policy</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Cookie Policy</a></li><li><a href="#" class="text-muted-foreground hover:text-foreground text-xs">Legal</a></li></ul></div></div></div></div><div class="flex justify-center border-t p-3"><p class="text-muted-foreground text-xs">© 2026 Asme. All rights reserved.</p></div></footer></div></div></div></div>
```

## Public registry source files

No public registry source files were available.