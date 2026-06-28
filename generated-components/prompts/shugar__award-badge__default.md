# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shugar/award-badge/default
- Registry URL: https://21st.dev/r/shugar/award-badge
- Author: shugar
- Component slug: award-badge
- Demo slug: default
- Title: award-badge
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shugar/award-badge with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shugar__award-badge__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shugar__award-badge__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="absolute z-10 top-4 right-14 flex flex-col items-end gap-1"><button type="button" role="combobox" aria-controls="radix-«r0»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 gap-2 h-8"><span style="pointer-events: none;">Golden Kitty</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="flex w-full justify-center relative"><div class="grid grid-cols-1 gap-4"><a href="https://www.producthunt.com/golden-kitty-awards/hall-of-fame?year=2024#bootstrapped-small-teams-2" target="_blank" class="block w-[180px] sm:w-[260px] h-auto cursor-pointer"><style>
    @keyframes overlayAnimation1 {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(10deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
     
    @keyframes overlayAnimation2 {
      0% {
        transform: rotate(10deg);
      }
      50% {
        transform: rotate(20deg);
      }
      100% {
        transform: rotate(10deg);
      }
    }
     
    @keyframes overlayAnimation3 {
      0% {
        transform: rotate(20deg);
      }
      50% {
        transform: rotate(30deg);
      }
      100% {
        transform: rotate(20deg);
      }
    }
     
    @keyframes overlayAnimation4 {
      0% {
        transform: rotate(30deg);
      }
      50% {
        transform: rotate(40deg);
      }
      100% {
        transform: rotate(30deg);
      }
    }
     
    @keyframes overlayAnimation5 {
      0% {
        transform: rotate(40deg);
      }
      50% {
        transform: rotate(50deg);
      }
      100% {
        transform: rotate(40deg);
      }
    }
     
    @keyframes overlayAnimation6 {
      0% {
        transform: rotate(50deg);
      }
      50% {
        transform: rotate(60deg);
      }
      100% {
        transform: rotate(50deg);
      }
    }
     
    @keyframes overlayAnimation7 {
      0% {
        transform: rotate(60deg);
      }
      50% {
        transform: rotate(70deg);
      }
      100% {
        transform: rotate(60deg);
      }
    }
     
    @keyframes overlayAnimation8 {
      0% {
        transform: rotate(70deg);
      }
      50% {
        transform: rotate(80deg);
      }
      100% {
        transform: rotate(70deg);
      }
    }
     
    @keyframes overlayAnimation9 {
      0% {
        transform: rotate(80deg);
      }
      50% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(80deg);
      }
    }
     
    @keyframes overlayAnimation10 {
      0% {
        transform: rotate(90deg);
      }
      50% {
        transform: rotate(100deg);
      }
      100% {
        transform: rotate(90deg);
      }
    }
    </style><div style="transform: perspective(700px) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: center center; transition: transform 200ms ease-out;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 54" class="w-180px sm:w-260px h-auto"><defs><filter id="blur1"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><mask id="badgeMask"><rect width="260" height="54" fill="white" rx="10"></rect></mask></defs><rect width="260" height="54" rx="10" fill="#ddd"></rect><rect x="4" y="4" width="252" height="46" rx="8" fill="transparent" stroke="#bbb" stroke-width="1"></rect><text font-family="Helvetica-Bold, Helvetica" font-size="9" font-weight="bold" fill="#666" x="53" y="20">PRODUCT HUNT</text><text font-family="Helvetica-Bold, Helvetica" font-size="16" font-weight="bold" fill="#666" x="52" y="40">Golden Kitty Awards</text><g transform="translate(8, 9)"><path fill="#666" d="M14.963 9.075c.787-3-.188-5.887-.188-5.887S12.488 5.175 11.7 8.175c-.787 3 .188 5.887.188 5.887s2.25-1.987 3.075-4.987m-4.5 1.987c.787 3-.188 5.888-.188 5.888S7.988 14.962 7.2 11.962c-.787-3 .188-5.887.188-5.887s2.287 1.987 3.075 4.987m.862 10.388s-.6-2.962-2.775-5.175C6.337 14.1 3.375 13.5 3.375 13.5s.6 2.962 2.775 5.175c2.213 2.175 5.175 2.775 5.175 2.775m3.3 3.413s-1.988-2.288-4.988-3.075-5.887.187-5.887.187 1.987 2.287 4.988 3.075c3 .787 5.887-.188 5.887-.188Zm6.75 0s1.988-2.288 4.988-3.075c3-.826 5.887.187 5.887.187s-1.988 2.287-4.988 3.075c-3 .787-5.887-.188-5.887-.188ZM32.625 13.5s-2.963.6-5.175 2.775c-2.213 2.213-2.775 5.175-2.775 5.175s2.962-.6 5.175-2.775c2.175-2.213 2.775-5.175 2.775-5.175M28.65 6.075s.975 2.887.188 5.887c-.826 3-3.076 4.988-3.076 4.988s-.974-2.888-.187-5.888c.788-3 3.075-4.987 3.075-4.987m-4.5 7.987s.975-2.887.188-5.887c-.788-3-3.076-4.988-3.076-4.988s-.974 2.888-.187 5.888c.788 3 3.075 4.988 3.075 4.988ZM18 26.1c.975-.225 3.113-.6 5.325 0 3 .788 5.063 3.038 5.063 3.038s-2.888.975-5.888.187a13 13 0 0 1-1.425-.525c.563.788 1.125 1.425 2.288 1.913l-.863 2.062c-2.063-.862-2.925-2.137-3.675-3.262-.262-.375-.525-.713-.787-1.05-.26.293-.465.586-.686.903l-.102.147-.048.068c-.775 1.108-1.643 2.35-3.627 3.194l-.862-2.062c1.162-.488 1.725-1.125 2.287-1.913-.45.225-.938.375-1.425.525-3 .788-5.887-.187-5.887-.187s1.987-2.288 4.987-3.075c2.212-.563 4.35-.188 5.325.037"></path></g><g mask="url(#badgeMask)" style="mix-blend-mode: overlay;"><g style="transform: rotate(0deg); transform-origin: center center; transition: none; animation: 5s ease 0s infinite normal none running overlayAnimation1; will-change: transform;"><polygon points="0,0 260,54 260,0 0,54" fill="hsl(358, 100%, 62%)" filter="url(#blur1)" opacity="0.5"></polygon></g><g style="transform: rotate(10deg); transform-origin: center center; transition: none; animation: 5s ease 0s infinite normal none running overlayAnimation2; will-change: transform;"><polygon points="0,0 260,54 260,0 0,54" fill="hsl(30, 100%, 50%)" filter="url(#blur1)" opacity="0.5"></polygon></g><g style="transform: rotate(20deg); transform-origin: center center; transition: none; animation: 5s ease 0s infinite normal none running overlayAnimation3; will-change: transform;"><polygon points="0,0 260,54 260,0 0,54" fill="hsl(60, 100%, 50%)" filter="url(#blur1)" opacity="0.5"></polygon></g><g style="transform: rotate(30deg); transform-origin: center center; transition: none; animation: 5s ease 0s infinite normal none running overlayAnimation4; will-change: transform;"><polygon points="0,0 260,54 260,0 0,54" fill="hsl(96, 100%, 50%)" filter="url(#blur1)" opacity="0.5"></polygon></g><g style="transform: rotate(40deg); transform-origin: center center; transition: none; animation: 5s ease 0s infinite normal none running overlayAnimation5; will-change: transform;"><polygon points="0,0 260,54 260,0 0,54" fill="hsl(233, 85%, 47%)" filter="url(#blur1)" opacity="0.5"></polygon></g><g style="transform: rotate(50deg); transform-origin: center center; transition: none; animation: 5s ease 0s infinite normal none running overlayAnimation6; will-change: transform;"><polygon points="0,0 260,54 260,0 0,54" fill="hsl(271, 85%, 47%)" filter="url(#blur1)" opacity="0.5"></polygon></g><g style="transform: rotate(60deg); transform-origin: center center; transition: none; animation: 5s ease 0s infinite normal none running overlayAnimation7; will-change: transform;"><polygon points="0,0 260,54 260,0 0,54" fill="hsl(300, 20%, 35%)" filter="url(#blur1)" opacity="0.5"></polygon></g><g style="transform: rotate(70deg); transform-origin: center center; transition: none; animation: 5s ease 0s infinite normal none running overlayAnimation8; will-change: transform;"><polygon points="0,0 260,54 260,0 0,54" fill="transparent" filter="url(#blur1)" opacity="0.5"></polygon></g><g style="transform: rotate(80deg); transform-origin: center center; transition: none; animation: 5s ease 0s infinite normal none running overlayAnimation9; will-change: transform;"><polygon points="0,0 260,54 260,0 0,54" fill="transparent" filter="url(#blur1)" opacity="0.5"></polygon></g><g style="transform: rotate(90deg); transform-origin: center center; transition: none; animation: 5s ease 0s infinite normal none running overlayAnimation10; will-change: transform;"><polygon points="0,0 260,54 260,0 0,54" fill="white" filter="url(#blur1)" opacity="0.5"></polygon></g></g></svg></div></a></div></div></div></div>
```

## Public registry source files

No public registry source files were available.