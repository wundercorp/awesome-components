# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jatin-yadav05/radial-orbital-timeline/default
- Registry URL: https://21st.dev/r/jatin-yadav05/radial-orbital-timeline
- Author: jatin-yadav05
- Component slug: radial-orbital-timeline
- Demo slug: default
- Title: radial-orbital-timeline
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jatin-yadav05/radial-orbital-timeline with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jatin-yadav05__radial-orbital-timeline__default.html
- Local screenshot file: generated-21st-prompts/screenshots/jatin-yadav05__radial-orbital-timeline__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"><div class="relative w-full max-w-4xl h-full flex items-center justify-center"><div class="absolute w-full h-full flex items-center justify-center" style="perspective: 1000px; transform: translate(0px, 0px);"><div class="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10"><div class="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div><div class="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50" style="animation-delay: 0.5s;"></div><div class="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div></div><div class="absolute w-96 h-96 rounded-full border border-white/10"></div><div class="absolute transition-all duration-700 cursor-pointer" style="transform: translate(175.261px, 96.3507px); z-index: 144; opacity: 0.844526;"><div class="absolute rounded-full -inset-1 " style="background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%); width: 90px; height: 90px; left: -25px; top: -25px;"></div><div class="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-black text-white
                  border-2 
                  border-white/40
                  transition-all duration-300 transform
                  
                "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg></div><div class="
                  absolute top-12  whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  text-white/70
                ">Planning</div></div><div class="absolute transition-all duration-700 cursor-pointer" style="transform: translate(-37.4763px, 196.457px); z-index: 91; opacity: 0.994686;"><div class="absolute rounded-full -inset-1 " style="background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%); width: 85px; height: 85px; left: -22.5px; top: -22.5px;"></div><div class="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-black text-white
                  border-2 
                  border-white/40
                  transition-all duration-300 transform
                  
                "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div><div class="
                  absolute top-12  whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  text-white/70
                ">Design</div></div><div class="absolute transition-all duration-700 cursor-pointer" style="transform: translate(-198.423px, 25.0666px); z-index: 50; opacity: 0.7376;"><div class="absolute rounded-full -inset-1 " style="background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%); width: 70px; height: 70px; left: -15px; top: -15px;"></div><div class="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-black text-white
                  border-2 
                  border-white/40
                  transition-all duration-300 transform
                  
                "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code" aria-hidden="true"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg></div><div class="
                  absolute top-12  whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  text-white/70
                ">Development</div></div><div class="absolute transition-all duration-700 cursor-pointer" style="transform: translate(-85.1559px, -180.965px); z-index: 79; opacity: 0.428552;"><div class="absolute rounded-full -inset-1 " style="background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%); width: 55px; height: 55px; left: -7.5px; top: -7.5px;"></div><div class="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-black text-white
                  border-2 
                  border-white/40
                  transition-all duration-300 transform
                  
                "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><div class="
                  absolute top-12  whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  text-white/70
                ">Testing</div></div><div class="absolute transition-all duration-700 cursor-pointer" style="transform: translate(145.794px, -136.909px); z-index: 136; opacity: 0.494636;"><div class="absolute rounded-full -inset-1 " style="background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%); width: 45px; height: 45px; left: -2.5px; top: -2.5px;"></div><div class="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-black text-white
                  border-2 
                  border-white/40
                  transition-all duration-300 transform
                  
                "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><div class="
                  absolute top-12  whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  text-white/70
                ">Release</div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.