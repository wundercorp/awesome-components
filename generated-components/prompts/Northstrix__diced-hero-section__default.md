# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/Northstrix/diced-hero-section/default
- Registry URL: https://21st.dev/r/Northstrix/diced-hero-section
- Author: Northstrix
- Component slug: diced-hero-section
- Demo slug: default
- Title: diced-hero-section
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/Northstrix/diced-hero-section with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/Northstrix__diced-hero-section__default.html
- Local screenshot file: generated-21st-prompts/screenshots/Northstrix__diced-hero-section__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoLTR_DemoLTR">DemoLTR</option><option value="named_DemoRTL_DemoRTL">DemoRTL</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><main style="border-radius: 0px; padding: 2rem; overflow: hidden; display: flex; flex-direction: column; justify-content: center; align-items: stretch; width: 100%; max-width: 1536px; margin: 0px auto; min-height: auto; height: auto; font-family: Arial, sans-serif; position: relative;"><div style="flex: 1 1 0%; margin-right: 0px; margin-left: 0px; text-align: center; align-items: center; max-width: 100%; display: flex; flex-direction: column; justify-content: center; z-index: 1; padding-bottom: 2rem;"><div><span style="color: var(--diced-hero-section-top-text); direction: ltr; text-align: left; opacity: 1; transform: none;">Discover</span><h1 style="font-size: 4.5rem; direction: ltr; text-align: center; opacity: 1; transform: none;"><span style="background-image: linear-gradient(45deg, var(--diced-hero-section-main-gradient-from), var(--diced-hero-section-main-gradient-to)); background-clip: text; -webkit-text-fill-color: transparent; display: inline-block;">Freshness</span></h1><hr style="height: 0.25rem; background: var(--diced-hero-section-separator); border-width: medium; border-style: none; border-color: currentcolor; border-image: initial; margin: 1.125rem auto 1.875rem; align-self: center; width: 6.25rem;"><p style="color: var(--diced-hero-section-sub-text); direction: ltr; text-align: left; opacity: 1; transform: none;">Explore a vibrant harvest of organic, seasonal fruits and vegetables, bursting with flavors. Unveil a paramount selection of naturally delicious and nutritious premium produce sourced directly from local farms!</p></div><div style="margin-top: 1rem; display: flex; justify-content: center; opacity: 1; transform: none;"><button class="chronicleButton" type="button" style="--chronicle-button-background: var(--diced-hero-section-button-bg); --chronicle-button-foreground: var(--diced-hero-section-button-fg); --chronicle-button-hover-background: var(--diced-hero-section-button-hover-bg); --chronicle-button-hover-foreground: var(--diced-hero-section-button-hover-fg); --outline-padding-adjustment: 2px; --chronicle-button-border-radius: 2rem; --outlined-button-background-on-hover: transparent; width: 160px; border-radius: 2rem;"><span><em>Shop Now</em></span><span><em>Shop Now</em></span></button></div></div><div style="flex: 1 1 0%; display: flex; flex-direction: column; align-items: flex-end; position: relative; width: 100%; padding-left: 0px; padding-right: 0px; height: auto;"><div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%; aspect-ratio: 1 / 1;"><div style="position: relative; width: 100%; padding-bottom: 100%; overflow: hidden; border-radius: 20px;"><img alt="Fruits and Vegetables" class="warped-image bottom-right" src="https://images.unsplash.com/photo-1646340691161-521e588e9964?q=80&amp;w=1920&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; cursor: pointer;"></div><div style="position: relative; width: 100%; padding-bottom: 100%; overflow: hidden; border-radius: 20px;"><img alt="Feijoa" class="warped-image bottom-left" src="https://images.unsplash.com/photo-1541857754-557a44522bec?q=80&amp;w=1920&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; cursor: pointer;"></div><div style="position: relative; width: 100%; padding-bottom: 100%; overflow: hidden; border-radius: 20px;"><img alt="Strawberry" class="warped-image top-right" src="https://images.unsplash.com/photo-1623227866882-c005c26dfe41?q=80&amp;w=1920&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; cursor: pointer;"></div><div style="position: relative; width: 100%; padding-bottom: 100%; overflow: hidden; border-radius: 20px;"><img alt="Purple Cauliflower" class="warped-image top-left" src="https://images.unsplash.com/photo-1620053927547-cf64d4829ff4?q=80&amp;w=1920&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; cursor: pointer;"></div></div></div><style>
        .warped-image {
          --r: 20px;
          --s: 40px;
          --x: 25px;
          --y: 5px;
        }
        .top-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at calc(100% - var(--r)) var(--r),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 0 var(--_m), 100% calc(var(--_d) + var(--y)) var(--_m), radial-gradient(var(--s) at 100% 0,#0000 99%,#000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(var(--r) + var(--y)), var(--_g) calc(-1*var(--_d) - var(--x)) 0, var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .top-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at var(--r) var(--r),#000 75%,#0000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 0 var(--_m), 0 calc(var(--_d) + var(--y)) var(--_m), radial-gradient(var(--s) at 0 0,#0000 99%,#000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(var(--r) + var(--y)), var(--_g) calc(var(--_d) + var(--x)) 0, var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 180deg at var(--r) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 100% var(--_m), 0 calc(100% - var(--_d) - var(--y)) var(--_m), radial-gradient(var(--s) at 0 100%,#0000 99%,#000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(-1*var(--r) - var(--y)), var(--_g) calc(var(--_d) + var(--x)) 0, var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 100% var(--_m), 100% calc(100% - var(--_d) - var(--y)) var(--_m), radial-gradient(var(--s) at 100% 100%,#0000 99%,#000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)), var(--_g) calc(-1*var(--_d) - var(--x)) 0, var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
      </style></main></div></div>
```

## Public registry source files

No public registry source files were available.