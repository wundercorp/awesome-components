# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/DalexDev/dashboard-template-neumorphism/default
- Registry URL: https://21st.dev/r/DalexDev/dashboard-template-neumorphism
- Author: DalexDev
- Component slug: dashboard-template-neumorphism
- Demo slug: default
- Title: dashboard-template-neumorphism
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/DalexDev/dashboard-template-neumorphism with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/DalexDev__dashboard-template-neumorphism__default.html
- Local screenshot file: generated-21st-prompts/screenshots/DalexDev__dashboard-template-neumorphism__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen flex transition-colors duration-300 bg-gray-200"><div class="transition-all duration-300 ease-in-out p-4 bg-gray-200 w-64"><div class="h-full rounded-3xl p-6 transition-colors duration-300 bg-gray-200 shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]"><div class="flex items-center justify-between mb-8"><div class="px-4 py-2 rounded-xl transition-colors duration-300 bg-gray-200 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]"><h1 class="text-lg font-bold transition-colors duration-300 text-gray-700">Template</h1></div><div class="flex gap-2"><button class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 bg-gray-200 text-gray-600 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">🌙</button></div></div><nav class="space-y-3"><button class="w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 font-medium bg-gray-200 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] text-blue-600"><span class="text-xl">📊</span><span class="text-sm">Dashboard</span></button><button class="w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 font-medium bg-gray-200 text-gray-600 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:text-blue-500"><span class="text-xl">📁</span><span class="text-sm">Proyects</span></button><button class="w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 font-medium bg-gray-200 text-gray-600 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:text-blue-500"><span class="text-xl">✅</span><span class="text-sm">Tasks</span></button><button class="w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 font-medium bg-gray-200 text-gray-600 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:text-blue-500"><span class="text-xl">📈</span><span class="text-sm">Analytics</span></button><button class="w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 font-medium bg-gray-200 text-gray-600 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:text-blue-500"><span class="text-xl">👥</span><span class="text-sm">Team</span></button><button class="w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 font-medium bg-gray-200 text-gray-600 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:text-blue-500"><span class="text-xl">⚙️</span><span class="text-sm">Settings</span></button></nav><div class="mt-8 pt-6 transition-colors duration-300 border-t border-gray-300"><div class="flex items-center gap-3 p-3 rounded-xl transition-colors duration-300 bg-gray-200 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]"><div class="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors duration-300 bg-gray-200 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]">👤</div><div class="flex-1"><p class="text-sm font-medium transition-colors duration-300 text-gray-700">DalexDev</p><p class="text-xs transition-colors duration-300 text-gray-500">byDalexDev@exm.com</p></div></div></div><div class="mt-4"><div class="flex items-center gap-2 p-2 rounded-lg transition-colors duration-300 bg-gray-200 shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]"><div class="w-3 h-3 rounded-full bg-green-400 shadow-sm"></div><span class="text-xs transition-colors duration-300 text-gray-500">Online</span></div></div></div></div><div class="flex-1 p-8"><div class="h-full rounded-3xl p-8 transition-colors duration-300 bg-gray-200 shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff]"><div class="h-full rounded-2xl p-6 flex flex-col items-center justify-center transition-colors duration-300 bg-gray-200 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"><h2 class="text-3xl font-bold mb-4 transition-colors duration-300 text-gray-700">Dashboard</h2><p class="text-center max-w-md transition-colors duration-300 text-gray-500">You selected Dashboard. This is the main content area where the information corresponding to the selected section would be displayed.</p><div class="mt-8 grid grid-cols-2 gap-4"><div class="w-24 h-24 rounded-2xl flex items-center justify-center font-bold transition-all duration-200 bg-gray-200 text-gray-600 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">1</div><div class="w-24 h-24 rounded-2xl flex items-center justify-center font-bold transition-all duration-200 bg-gray-200 text-gray-600 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">2</div><div class="w-24 h-24 rounded-2xl flex items-center justify-center font-bold transition-all duration-200 bg-gray-200 text-gray-600 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">3</div><div class="w-24 h-24 rounded-2xl flex items-center justify-center font-bold transition-all duration-200 bg-gray-200 text-gray-600 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">4</div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.