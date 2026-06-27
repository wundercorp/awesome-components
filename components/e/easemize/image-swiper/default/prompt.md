# Build Image Swiper in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Image Swiper screenshot](screenshot.png)

## Component

- Author group: `easemize`
- Component: `image-swiper`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: easemize
- Component slug: image-swiper
- Demo slug: default
- Title: image-swiper
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
<div id="root"><div class="flex items-center justify-center min-h-screen"><section class="relative grid place-content-center select-none " style="width: 288px; height: 384px; touch-action: none; transform-style: preserve-3d; --card-perspective: 700px; --card-z-offset: 12px; --card-y-offset: 7px; --card-max-z-index: 6; --card-swap-duration: 0.3s;"><article class="image-card absolute cursor-grab active:cursor-grabbing
                     place-self-center border border-slate-400 rounded-xl
                     shadow-md overflow-hidden will-change-transform" style="--i: 1; z-index: 6; width: 256px; height: 352px; transform: perspective(var(--card-perspective))
                       translateZ(calc(-1 * var(--card-z-offset) * var(--i)))
                       translateY(calc(var(--card-y-offset) * var(--i)))
                       translateX(var(--swipe-x, 0px))
                       rotateY(var(--swipe-rotate, 0deg)); --swipe-x: 0px; --swipe-rotate: 0deg; opacity: 1;"><img alt="Swiper image 1" class="w-full h-full object-cover select-none pointer-events-none" draggable="false" src="https://img.freepik.com/premium-photo/3d-cartoon_975306-1.jpg?w=2000"></article><article class="image-card absolute cursor-grab active:cursor-grabbing
                     place-self-center border border-slate-400 rounded-xl
                     shadow-md overflow-hidden will-change-transform" style="--i: 2; z-index: 5; width: 256px; height: 352px; transform: perspective(var(--card-perspective))
                       translateZ(calc(-1 * var(--card-z-offset) * var(--i)))
                       translateY(calc(var(--card-y-offset) * var(--i)))
                       translateX(var(--swipe-x, 0px))
                       rotateY(var(--swipe-rotate, 0deg)); --swipe-x: 0px; --swipe-rotate: 0deg; opacity: 1;"><img alt="Swiper image 2" class="w-full h-full object-cover select-none pointer-events-none" draggable="false" src="https://img.freepik.com/premium-photo/3d-cartoon-boy-avatar_113255-5540.jpg"></article><article class="image-card absolute cursor-grab active:cursor-grabbing
                     place-self-center border border-slate-400 rounded-xl
                     shadow-md overflow-hidden will-change-transform" style="--i: 3; z-index: 4; width: 256px; height: 352px; transform: perspective(var(--card-perspective))
                       translateZ(calc(-1 * var(--card-z-offset) * var(--i)))
                       translateY(calc(var(--card-y-offset) * var(--i)))
                       translateX(var(--swipe-x, 0px))
                       rotateY(var(--swipe-rotate, 0deg)); --swipe-x: 0px; --swipe-rotate: 0deg; opacity: 1;"><img alt="Swiper image 3" class="w-full h-full object-cover select-none pointer-events-none" draggable="false" src="https://th.bing.com/th/id/OIP.OmBLyKbo8iixJ2SeS12xxwHaE7?w=626&amp;h=417&amp;rs=1&amp;pid=ImgDetMain"></article><article class="image-card absolute cursor-grab active:cursor-grabbing
                     place-self-center border border-slate-400 rounded-xl
                     shadow-md overflow-hidden will-change-transform" style="--i: 4; z-index: 3; width: 256px; height: 352px; transform: perspective(var(--card-perspective))
                       translateZ(calc(-1 * var(--card-z-offset) * var(--i)))
                       translateY(calc(var(--card-y-offset) * var(--i)))
                       translateX(var(--swipe-x, 0px))
                       rotateY(var(--swipe-rotate, 0deg)); --swipe-x: 0px; --swipe-rotate: 0deg; opacity: 1;"><img alt="Swiper image 4" class="w-full h-full object-cover select-none pointer-events-none" draggable="false" src="https://thumbs.dreamstime.com/b/animated-academic-cheerful-cartoon-scholar-301088562.jpg"></article><article class="image-card absolute cursor-grab active:cursor-grabbing
                     place-self-center border border-slate-400 rounded-xl
                     shadow-md overflow-hidden will-change-transform" style="--i: 5; z-index: 2; width: 256px; height: 352px; transform: perspective(var(--card-perspective))
                       translateZ(calc(-1 * var(--card-z-offset) * var(--i)))
                       translateY(calc(var(--card-y-offset) * var(--i)))
                       translateX(var(--swipe-x, 0px))
                       rotateY(var(--swipe-rotate, 0deg)); --swipe-x: 0px; --swipe-rotate: 0deg; opacity: 1;"><img alt="Swiper image 5" class="w-full h-full object-cover select-none pointer-events-none" draggable="false" src="https://img.freepik.com/premium-psd/3d-cute-young-business-man-character-generative-ai_43614-1027.jpg"></article><article class="image-card absolute cursor-grab active:cursor-grabbing
                     place-self-center border border-slate-400 rounded-xl
                     shadow-md overflow-hidden will-change-transform" style="--i: 6; z-index: 1; width: 256px; height: 352px; transform: perspective(var(--card-perspective))
                       translateZ(calc(-1 * var(--card-z-offset) * var(--i)))
                       translateY(calc(var(--card-y-offset) * var(--i)))
                       translateX(var(--swipe-x, 0px))
                       rotateY(var(--swipe-rotate, 0deg)); --swipe-x: 0px; --swipe-rotate: 0deg; opacity: 1;"><img alt="Swiper image 6" class="w-full h-full object-cover select-none pointer-events-none" draggable="false" src="https://img.freepik.com/premium-photo/arafed-cartoon-man-suit-tie-standing-with-his-hands-his-hips_988987-15581.jpg"></article></section></div></div>
```

## Reference source files

No reference source files were available.
