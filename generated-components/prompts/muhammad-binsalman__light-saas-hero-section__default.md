# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/muhammad-binsalman/light-saas-hero-section/default
- Registry URL: https://21st.dev/r/muhammad-binsalman/light-saas-hero-section
- Author: muhammad-binsalman
- Component slug: light-saas-hero-section
- Demo slug: default
- Title: light-saas-hero-section
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/muhammad-binsalman/light-saas-hero-section with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/muhammad-binsalman__light-saas-hero-section__default.html
- Local screenshot file: generated-21st-prompts/screenshots/muhammad-binsalman__light-saas-hero-section__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen relative overflow-hidden w-full"><nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 w-full max-w-6xl xl:px-0 px-12"><div class="bg-white/60 backdrop-blur-xl rounded-full px-6 py-1 shadow-lg border border-white/20"><div class="flex items-center justify-between"><div class="flex items-center"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="h-16 w-16"><defs><linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color: rgb(139, 92, 246); stop-opacity: 1;"></stop><stop offset="100%" style="stop-color: rgb(99, 102, 241); stop-opacity: 1;"></stop></linearGradient><linearGradient id="lightPurple" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color: rgb(167, 139, 250); stop-opacity: 1;"></stop><stop offset="100%" style="stop-color: rgb(139, 92, 246); stop-opacity: 1;"></stop></linearGradient></defs><polygon points="50,25 65,35 65,55 50,65 35,55 35,35" fill="url(#purpleGradient)" stroke="none"></polygon><circle cx="30" cy="30" r="4" fill="url(#lightPurple)"></circle><circle cx="70" cy="30" r="4" fill="url(#lightPurple)"></circle><circle cx="20" cy="50" r="4" fill="url(#lightPurple)"></circle><circle cx="80" cy="50" r="4" fill="url(#lightPurple)"></circle><circle cx="30" cy="70" r="4" fill="url(#lightPurple)"></circle><circle cx="70" cy="70" r="4" fill="url(#lightPurple)"></circle><line x1="30" y1="30" x2="42" y2="38" stroke="#A78BFA" stroke-width="2" opacity="0.6"></line><line x1="70" y1="30" x2="58" y2="38" stroke="#A78BFA" stroke-width="2" opacity="0.6"></line><line x1="20" y1="50" x2="35" y2="45" stroke="#A78BFA" stroke-width="2" opacity="0.6"></line><line x1="80" y1="50" x2="65" y2="45" stroke="#A78BFA" stroke-width="2" opacity="0.6"></line><line x1="30" y1="70" x2="42" y2="58" stroke="#A78BFA" stroke-width="2" opacity="0.6"></line><line x1="70" y1="70" x2="58" y2="58" stroke="#A78BFA" stroke-width="2" opacity="0.6"></line><path d="M 42 42 L 48 42 L 50 38 L 52 42 L 58 42 L 54 48 L 56 54 L 50 50 L 44 54 L 46 48 Z" fill="#FFFFFF" opacity="0.9"></path></svg><span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Mysh.ai</span></div><div class="hidden md:flex items-center space-x-1"><a href="#" class="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-full hover:bg-white/50 transition-colors">Features</a><a href="#" class="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-full hover:bg-white/50 transition-colors">Solutions</a><a href="#" class="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-full hover:bg-white/50 transition-colors">Pricing</a><a href="#" class="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-full hover:bg-white/50 transition-colors">Resources</a></div><div class="hidden md:flex items-center space-x-2"><a href="#" class="px-5 py-2 text-gray-700 font-medium rounded-full hover:bg-white/50 transition-colors">Sign in</a><a href="#" class="px-5 py-2 bg-indigo-600 text-white font-medium rounded-full shadow-md hover:bg-indigo-700 transition-colors">Get Started</a></div><button class="md:hidden p-2 rounded-full bg-white/50"><svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div></nav><div class="absolute inset-0 z-0"><div class="w-full h-full relative overflow-hidden"><canvas width="992" height="944" style="width: 992px; height: 944px; display: block;"></canvas></div><div class="absolute inset-0 bg-gradient-to-b from-white/40 to-white/80"></div></div><div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-20 text-center"><div class="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-800 mb-8"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>AI-Powered Platform v2.0</div><h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight pb-4">Transform Your Business with<span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 block mt-2 pb-2">AI Intelligence</span></h1><p class="text-xl text-gray-600 max-w-3xl mx-auto mb-10">Our advanced AI platform helps businesses automate processes, gain insights, and make data-driven decisions with unparalleled accuracy.</p><div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"><button class="px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:-translate-y-1">Get Started Free</button><button class="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>Watch Demo</button></div><div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"><div class="text-center"><div class="text-3xl font-bold text-gray-900">98%</div><div class="text-gray-600">Accuracy</div></div><div class="text-center"><div class="text-3xl font-bold text-gray-900">24/7</div><div class="text-gray-600">AI Monitoring</div></div><div class="text-center"><div class="text-3xl font-bold text-gray-900">5x</div><div class="text-gray-600">Faster Analysis</div></div><div class="text-center"><div class="text-3xl font-bold text-gray-900">100+</div><div class="text-gray-600">Integrations</div></div></div></div><div class="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-indigo-200/40 blur-xl"></div><div class="absolute bottom-1/3 right-16 w-10 h-10 rounded-full bg-purple-200/30 blur-xl"></div><div class="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-blue-200/40 blur-xl"></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.