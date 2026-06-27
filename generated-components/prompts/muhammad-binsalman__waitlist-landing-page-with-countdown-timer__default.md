# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/muhammad-binsalman/waitlist-landing-page-with-countdown-timer/default
- Registry URL: https://21st.dev/r/muhammad-binsalman/waitlist-landing-page-with-countdown-timer
- Author: muhammad-binsalman
- Component slug: waitlist-landing-page-with-countdown-timer
- Demo slug: default
- Title: waitlist-landing-page-with-countdown-timer
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/muhammad-binsalman/waitlist-landing-page-with-countdown-timer with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/muhammad-binsalman__waitlist-landing-page-with-countdown-timer__default.html
- Local screenshot file: generated-21st-prompts/screenshots/muhammad-binsalman__waitlist-landing-page-with-countdown-timer__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="relative min-h-screen overflow-hidden bg-black w-full"><div class="fixed inset-0 w-full h-full" style="z-index: 0;"><canvas data-engine="three.js r170" width="992" height="944" style="display: block; width: 992px; height: 944px;"></canvas></div><div class="relative z-10 min-h-screen"><div class="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"><div class="bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3"><div class="flex items-center gap-6"><div class="flex items-center gap-4"><button class="text-sm px-3 py-1 rounded-full transition-colors text-white/60 hover:text-white/80">Community</button><button class="text-sm px-3 py-1 rounded-full transition-colors text-white/60 hover:text-white/80">Pricing</button><button class="text-sm px-3 py-1 rounded-full transition-colors bg-black/60 text-white border border-white/20">Beta</button><button class="text-sm px-3 py-1 rounded-full transition-colors text-white/60 hover:text-white/80">Launch</button><button class="text-sm px-3 py-1 rounded-full transition-colors text-white/60 hover:text-white/80">Updates</button></div></div></div></div><div class="flex items-center justify-center min-h-screen px-4"><div class="relative"><div class="relative backdrop-blur-xl bg-black/60 border border-white/20 rounded-3xl p-8 w-[420px] shadow-2xl"><div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div><div class="relative z-10"><div class="mb-8 text-center"><h1 class="text-4xl font-light text-white mb-4 tracking-wide"> Join the waitlist </h1><p class="text-white/70 text-base leading-relaxed">Get early access to Mysh AI - the next generation<br>workflow automation platform launching soon</p></div><form class="mb-6"><div class="flex gap-3"><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-black/40 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 h-12 rounded-xl backdrop-blur-sm" placeholder="saleem@21st.dev" required="" type="email" value=""><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 h-12 px-6 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25" type="submit">Get Notified</button></div></form><div class="flex items-center justify-center gap-3 mb-6"><div class="flex -space-x-2"><div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white/20 flex items-center justify-center text-white text-xs font-medium">J</div><div class="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white/20 flex items-center justify-center text-white text-xs font-medium">A</div><div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white/20 flex items-center justify-center text-white text-xs font-medium">M</div></div><span class="text-white/70 text-sm"> ~2k + Peoples already joined </span></div><div class="flex items-center justify-center gap-6 text-center"><div><div class="text-2xl font-light text-white"> 225 </div><div class="text-xs text-white/60 uppercase tracking-wide"> days </div></div><div class="text-white/40">| </div><div><div class="text-2xl font-light text-white"> 23 </div><div class="text-xs text-white/60 uppercase tracking-wide"> hours </div></div><div class="text-white/40">| </div><div><div class="text-2xl font-light text-white"> 17 </div><div class="text-xs text-white/60 uppercase tracking-wide"> minutes </div></div><div class="text-white/40">| </div><div><div class="text-2xl font-light text-white"> 54 </div><div class="text-xs text-white/60 uppercase tracking-wide"> seconds </div></div></div></div><div class="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none"></div></div><div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/10 to-purple-600/10 blur-xl scale-110 -z-10"></div></div></div></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.