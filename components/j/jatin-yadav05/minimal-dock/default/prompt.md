# Build Minimal Dock in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Minimal Dock screenshot](screenshot.png)

## Component

- Author group: `jatin-yadav05`
- Component: `minimal-dock`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: jatin-yadav05
- Component slug: minimal-dock
- Demo slug: default
- Title: minimal-dock
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-8"><div class="relative"><div class="
          flex items-end gap-3 px-6 py-4
          rounded-2xl
          bg-black/40 backdrop-blur-xl
          border border-white/10
          shadow-2xl
          transition-all duration-500 ease-out
          
        "><div class="relative group"><div class="
          relative flex items-center justify-center
          w-11 h-11 rounded-lg
          bg-white/5 backdrop-blur-[2px]
          border border-white/10
          transition-all duration-300 ease-out
          cursor-pointer
          shadow-none
          hover:scale-105 hover:bg-white/7 hover:-translate-y-0.5
        " style="transition-property: box-shadow, transform, background, border-color;"><div class="
          text-white transition-all duration-300
          
        "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></div></div><div class="
        absolute -top-10 left-1/2 transform -translate-x-1/2
        px-2.5 py-1 rounded-md
        bg-black/70 backdrop-blur
        text-white text-xs font-normal
        border border-white/5
        transition-all duration-200
        pointer-events-none
        whitespace-nowrap
        opacity-0 translate-y-1
        shadow-sm
      ">Home<div class="absolute top-full left-1/2 transform -translate-x-1/2"><div class="w-2 h-2 bg-black/70 rotate-45 border-r border-b border-white/5"></div></div></div></div><div class="relative group"><div class="
          relative flex items-center justify-center
          w-11 h-11 rounded-lg
          bg-white/5 backdrop-blur-[2px]
          border border-white/10
          transition-all duration-300 ease-out
          cursor-pointer
          shadow-none
          hover:scale-105 hover:bg-white/7 hover:-translate-y-0.5
        " style="transition-property: box-shadow, transform, background, border-color;"><div class="
          text-white transition-all duration-300
          
        "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div></div><div class="
        absolute -top-10 left-1/2 transform -translate-x-1/2
        px-2.5 py-1 rounded-md
        bg-black/70 backdrop-blur
        text-white text-xs font-normal
        border border-white/5
        transition-all duration-200
        pointer-events-none
        whitespace-nowrap
        opacity-0 translate-y-1
        shadow-sm
      ">Search<div class="absolute top-full left-1/2 transform -translate-x-1/2"><div class="w-2 h-2 bg-black/70 rotate-45 border-r border-b border-white/5"></div></div></div></div><div class="relative group"><div class="
          relative flex items-center justify-center
          w-11 h-11 rounded-lg
          bg-white/5 backdrop-blur-[2px]
          border border-white/10
          transition-all duration-300 ease-out
          cursor-pointer
          shadow-none
          hover:scale-105 hover:bg-white/7 hover:-translate-y-0.5
        " style="transition-property: box-shadow, transform, background, border-color;"><div class="
          text-white transition-all duration-300
          
        "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div></div><div class="
        absolute -top-10 left-1/2 transform -translate-x-1/2
        px-2.5 py-1 rounded-md
        bg-black/70 backdrop-blur
        text-white text-xs font-normal
        border border-white/5
        transition-all duration-200
        pointer-events-none
        whitespace-nowrap
        opacity-0 translate-y-1
        shadow-sm
      ">Mail<div class="absolute top-full left-1/2 transform -translate-x-1/2"><div class="w-2 h-2 bg-black/70 rotate-45 border-r border-b border-white/5"></div></div></div></div><div class="relative group"><div class="
          relative flex items-center justify-center
          w-11 h-11 rounded-lg
          bg-white/5 backdrop-blur-[2px]
          border border-white/10
          transition-all duration-300 ease-out
          cursor-pointer
          shadow-none
          hover:scale-105 hover:bg-white/7 hover:-translate-y-0.5
        " style="transition-property: box-shadow, transform, background, border-color;"><div class="
          text-white transition-all duration-300
          
        "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg></div></div><div class="
        absolute -top-10 left-1/2 transform -translate-x-1/2
        px-2.5 py-1 rounded-md
        bg-black/70 backdrop-blur
        text-white text-xs font-normal
        border border-white/5
        transition-all duration-200
        pointer-events-none
        whitespace-nowrap
        opacity-0 translate-y-1
        shadow-sm
      ">Camera<div class="absolute top-full left-1/2 transform -translate-x-1/2"><div class="w-2 h-2 bg-black/70 rotate-45 border-r border-b border-white/5"></div></div></div></div><div class="relative group"><div class="
          relative flex items-center justify-center
          w-11 h-11 rounded-lg
          bg-white/5 backdrop-blur-[2px]
          border border-white/10
          transition-all duration-300 ease-out
          cursor-pointer
          shadow-none
          hover:scale-105 hover:bg-white/7 hover:-translate-y-0.5
        " style="transition-property: box-shadow, transform, background, border-color;"><div class="
          text-white transition-all duration-300
          
        "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div></div><div class="
        absolute -top-10 left-1/2 transform -translate-x-1/2
        px-2.5 py-1 rounded-md
        bg-black/70 backdrop-blur
        text-white text-xs font-normal
        border border-white/5
        transition-all duration-200
        pointer-events-none
        whitespace-nowrap
        opacity-0 translate-y-1
        shadow-sm
      ">Favorites<div class="absolute top-full left-1/2 transform -translate-x-1/2"><div class="w-2 h-2 bg-black/70 rotate-45 border-r border-b border-white/5"></div></div></div></div><div class="relative group"><div class="
          relative flex items-center justify-center
          w-11 h-11 rounded-lg
          bg-white/5 backdrop-blur-[2px]
          border border-white/10
          transition-all duration-300 ease-out
          cursor-pointer
          shadow-none
          hover:scale-105 hover:bg-white/7 hover:-translate-y-0.5
        " style="transition-property: box-shadow, transform, background, border-color;"><div class="
          text-white transition-all duration-300
          
        "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div></div><div class="
        absolute -top-10 left-1/2 transform -translate-x-1/2
        px-2.5 py-1 rounded-md
        bg-black/70 backdrop-blur
        text-white text-xs font-normal
        border border-white/5
        transition-all duration-200
        pointer-events-none
        whitespace-nowrap
        opacity-0 translate-y-1
        shadow-sm
      ">Profile<div class="absolute top-full left-1/2 transform -translate-x-1/2"><div class="w-2 h-2 bg-black/70 rotate-45 border-r border-b border-white/5"></div></div></div></div><div class="relative group"><div class="
          relative flex items-center justify-center
          w-11 h-11 rounded-lg
          bg-white/5 backdrop-blur-[2px]
          border border-white/10
          transition-all duration-300 ease-out
          cursor-pointer
          shadow-none
          hover:scale-105 hover:bg-white/7 hover:-translate-y-0.5
        " style="transition-property: box-shadow, transform, background, border-color;"><div class="
          text-white transition-all duration-300
          
        "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></div></div><div class="
        absolute -top-10 left-1/2 transform -translate-x-1/2
        px-2.5 py-1 rounded-md
        bg-black/70 backdrop-blur
        text-white text-xs font-normal
        border border-white/5
        transition-all duration-200
        pointer-events-none
        whitespace-nowrap
        opacity-0 translate-y-1
        shadow-sm
      ">Settings<div class="absolute top-full left-1/2 transform -translate-x-1/2"><div class="w-2 h-2 bg-black/70 rotate-45 border-r border-b border-white/5"></div></div></div></div></div><div class="absolute top-full left-0 right-0 h-16 overflow-hidden"><div class="
            flex items-start gap-3 px-6 py-4
            rounded-2xl
            bg-black/20 backdrop-blur-xl
            border border-white/5
            opacity-30
            transform scale-y-[-1]
            transition-all duration-500 ease-out
            
          "><div class="
                  flex items-center justify-center
                  w-12 h-12 rounded-xl
                  bg-white/5
                  transition-all duration-300 ease-out
                  
                "><div class="text-white/50"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></div></div><div class="
                  flex items-center justify-center
                  w-12 h-12 rounded-xl
                  bg-white/5
                  transition-all duration-300 ease-out
                  
                "><div class="text-white/50"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div></div><div class="
                  flex items-center justify-center
                  w-12 h-12 rounded-xl
                  bg-white/5
                  transition-all duration-300 ease-out
                  
                "><div class="text-white/50"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div></div><div class="
                  flex items-center justify-center
                  w-12 h-12 rounded-xl
                  bg-white/5
                  transition-all duration-300 ease-out
                  
                "><div class="text-white/50"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg></div></div><div class="
                  flex items-center justify-center
                  w-12 h-12 rounded-xl
                  bg-white/5
                  transition-all duration-300 ease-out
                  
                "><div class="text-white/50"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div></div><div class="
                  flex items-center justify-center
                  w-12 h-12 rounded-xl
                  bg-white/5
                  transition-all duration-300 ease-out
                  
                "><div class="text-white/50"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div></div><div class="
                  flex items-center justify-center
                  w-12 h-12 rounded-xl
                  bg-white/5
                  transition-all duration-300 ease-out
                  
                "><div class="text-white/50"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></div></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
