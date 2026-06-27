# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/easemize/ripple-effect-creator/default
- Registry URL: https://21st.dev/r/easemize/ripple-effect-creator
- Author: easemize
- Component slug: ripple-effect-creator
- Demo slug: default
- Title: ripple-effect-creator
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/easemize/ripple-effect-creator with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/easemize__ripple-effect-creator__default.html
- Local screenshot file: generated-21st-prompts/screenshots/easemize__ripple-effect-creator__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="dark"><div class="min-h-screen w-screen flex items-center justify-center border-b border-gray-700"><style>
    @keyframes js-ripple-animation {
      0% { transform: scale(0); opacity: 0.3; }
      100% { transform: scale(1); opacity: 0; }
    }
    .animate-js-ripple-effect { 
      animation: js-ripple-animation var(--ripple-duration, 600ms) ease-out forwards; 
    }
    :root { --ripple-color: oklch(0.145 0 0 / 0.3); }
    .dark { --ripple-color: oklch(0.985 0 0 / 0.4); }
  </style><button class="relative overflow-hidden isolate px-10 py-5 text-xl font-bold text-white bg-blue-600 rounded-xl shadow-lg">Standard Button<div class="absolute inset-0 z-10 overflow-hidden pointer-events-none"></div></button></div><div class="min-h-screen w-screen flex items-center justify-center border-b border-gray-700"><style>
    @keyframes js-ripple-animation {
      0% { transform: scale(0); opacity: 0.3; }
      100% { transform: scale(1); opacity: 0; }
    }
    .animate-js-ripple-effect { 
      animation: js-ripple-animation var(--ripple-duration, 600ms) ease-out forwards; 
    }
    :root { --ripple-color: oklch(0.145 0 0 / 0.3); }
    .dark { --ripple-color: oklch(0.985 0 0 / 0.4); }
  </style><a href="#" class="relative overflow-hidden isolate inline-block px-12 py-5 text-xl font-bold text-white bg-teal-500 rounded-full shadow-lg hover:bg-teal-600 transform hover:scale-105 transition-transform">Pill-Shaped Link<div class="absolute inset-0 z-10 overflow-hidden pointer-events-none"></div></a></div><div class="min-h-screen w-screen flex items-center justify-center border-b border-gray-700"><div class="relative inline-block overflow-hidden cursor-pointer isolate w-48 h-48 rounded-full object-cover shadow-2xl cursor-pointer border-4 border-gray-600 transform hover:scale-105 transition-transform "><style>
    @keyframes js-ripple-animation {
      0% { transform: scale(0); opacity: 0.3; }
      100% { transform: scale(1); opacity: 0; }
    }
    .animate-js-ripple-effect { 
      animation: js-ripple-animation var(--ripple-duration, 600ms) ease-out forwards; 
    }
    :root { --ripple-color: oklch(0.145 0 0 / 0.3); }
    .dark { --ripple-color: oklch(0.985 0 0 / 0.4); }
  </style><img alt="Avatar" class="w-48 h-48 rounded-full object-cover shadow-2xl cursor-pointer border-4 border-gray-600 transform hover:scale-105 transition-transform" src="https://i.pravatar.cc/250?img=35"><div class="absolute inset-0 z-10 overflow-hidden pointer-events-none"></div></div></div><div class="min-h-screen w-screen flex items-center justify-center border-b border-gray-700"><style>
    @keyframes js-ripple-animation {
      0% { transform: scale(0); opacity: 0.3; }
      100% { transform: scale(1); opacity: 0; }
    }
    .animate-js-ripple-effect { 
      animation: js-ripple-animation var(--ripple-duration, 600ms) ease-out forwards; 
    }
    :root { --ripple-color: oklch(0.145 0 0 / 0.3); }
    .dark { --ripple-color: oklch(0.985 0 0 / 0.4); }
  </style><div class="relative overflow-hidden isolate w-[400px] h-[300px] bg-indigo-600 text-white rounded-2xl flex flex-col items-center justify-center cursor-pointer shadow-xl transform transition-transform"><p class="font-bold text-3xl">Interactive Card</p><p class="text-lg opacity-80">(a div element)</p><div class="absolute inset-0 z-10 overflow-hidden pointer-events-none"></div></div></div><div class="min-h-screen w-screen flex items-center justify-center border-b border-gray-700"><style>
    @keyframes js-ripple-animation {
      0% { transform: scale(0); opacity: 0.3; }
      100% { transform: scale(1); opacity: 0; }
    }
    .animate-js-ripple-effect { 
      animation: js-ripple-animation var(--ripple-duration, 600ms) ease-out forwards; 
    }
    :root { --ripple-color: oklch(0.145 0 0 / 0.3); }
    .dark { --ripple-color: oklch(0.985 0 0 / 0.4); }
  </style><button class="relative overflow-hidden isolate px-10 py-5 text-xl font-bold text-white bg-purple-600 rounded-xl shadow-lg">Custom Ripple yellow color<div class="absolute inset-0 z-10 overflow-hidden pointer-events-none"></div></button></div><div class="min-h-screen w-screen flex items-center justify-center border-b border-gray-700"><style>
    @keyframes js-ripple-animation {
      0% { transform: scale(0); opacity: 0.3; }
      100% { transform: scale(1); opacity: 0; }
    }
    .animate-js-ripple-effect { 
      animation: js-ripple-animation var(--ripple-duration, 600ms) ease-out forwards; 
    }
    :root { --ripple-color: oklch(0.145 0 0 / 0.3); }
    .dark { --ripple-color: oklch(0.985 0 0 / 0.4); }
  </style><button class="relative overflow-hidden isolate px-10 py-5 text-xl font-bold text-white bg-green-600 rounded-xl shadow-lg hover:bg-green-700 transform hover:scale-105 transition-transform">Slow Duration (2s)<div class="absolute inset-0 z-10 overflow-hidden pointer-events-none"></div></button></div><div class="min-h-screen w-screen flex items-center justify-center border-b border-gray-700"><style>
    @keyframes js-ripple-animation {
      0% { transform: scale(0); opacity: 0.3; }
      100% { transform: scale(1); opacity: 0; }
    }
    .animate-js-ripple-effect { 
      animation: js-ripple-animation var(--ripple-duration, 600ms) ease-out forwards; 
    }
    :root { --ripple-color: oklch(0.145 0 0 / 0.3); }
    .dark { --ripple-color: oklch(0.985 0 0 / 0.4); }
  </style><button class="relative overflow-hidden isolate px-10 py-5 text-xl font-bold text-white bg-gray-500 rounded-xl cursor-not-allowed opacity-70">Disabled<div class="absolute inset-0 z-10 overflow-hidden pointer-events-none"></div></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.