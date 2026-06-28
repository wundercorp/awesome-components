# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reuno-ui/card-carousel/default
- Registry URL: https://21st.dev/r/reuno-ui/card-carousel
- Author: reuno-ui
- Component slug: card-carousel
- Demo slug: default
- Title: card-carousel
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reuno-ui/card-carousel with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reuno-ui__card-carousel__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reuno-ui__card-carousel__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full"><section class="w-ace-y-4"><style>
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  </style><div class="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]"><div class="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2"><div class="inline-flex items-center px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground absolute left-4 top-6 rounded-[14px] border border-black/10 text-base md:left-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles fill-[#EEBDE0] stroke-1 text-neutral-800" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg> Latest component</div><div class="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center"><div class="flex gap-2"><div><h3 class="text-4xl opacity-85 font-bold tracking-tight">Card Carousel</h3><p>Seamless Images carousel animation.</p></div></div></div><div class="flex w-full items-center justify-center gap-4"><div class="w-full"><div class="swiper swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress"><div class="swiper-wrapper" style="cursor: grab; transition-duration: 0ms; transform: translate3d(-1120px, 0px, 0px); transition-delay: 0ms;"><div class="swiper-slide" data-swiper-slide-index="4" style="transition-duration: 0ms; transform: translate3d(0px, 0px, -1166.67px) rotateX(0deg) rotateY(0deg) scale(1); z-index: -11; margin-right: 50px;"><div class="size-full rounded-3xl"><img alt="Portrait 2" width="200" height="200" class="size-full rounded-xl" src="https://picsum.photos/id/1062/500/750"></div><div class="swiper-slide-shadow-left swiper-slide-shadow-coverflow" style="opacity: 11.6667; transition-duration: 0ms;"></div><div class="swiper-slide-shadow-right swiper-slide-shadow-coverflow" style="opacity: 0; transition-duration: 0ms;"></div></div><div class="swiper-slide" data-swiper-slide-index="5" style="transition-duration: 0ms; transform: translate3d(0px, 0px, -875px) rotateX(0deg) rotateY(0deg) scale(1); z-index: -8; margin-right: 50px;"><div class="size-full rounded-3xl"><img alt="Portrait 3" width="200" height="200" class="size-full rounded-xl" src="https://picsum.photos/id/1074/500/750"></div><div class="swiper-slide-shadow-left swiper-slide-shadow-coverflow" style="opacity: 8.75; transition-duration: 0ms;"></div><div class="swiper-slide-shadow-right swiper-slide-shadow-coverflow" style="opacity: 0; transition-duration: 0ms;"></div></div><div class="swiper-slide" data-swiper-slide-index="0" style="transition-duration: 0ms; transform: translate3d(0px, 0px, -583.333px) rotateX(0deg) rotateY(0deg) scale(1); z-index: -5; margin-right: 50px;"><div class="size-full rounded-3xl"><img alt="Portrait 1" width="500" height="500" class="size-full rounded-xl" src="https://picsum.photos/id/249/500/750"></div><div class="swiper-slide-shadow-left swiper-slide-shadow-coverflow" style="opacity: 5.83333; transition-duration: 0ms;"></div><div class="swiper-slide-shadow-right swiper-slide-shadow-coverflow" style="opacity: 0; transition-duration: 0ms;"></div></div><div class="swiper-slide swiper-slide-visible swiper-slide-prev" data-swiper-slide-index="1" style="transition-duration: 0ms; transform: translate3d(0px, 0px, -291.667px) rotateX(0deg) rotateY(0deg) scale(1); z-index: -2; margin-right: 50px;"><div class="size-full rounded-3xl"><img alt="Portrait 2" width="500" height="500" class="size-full rounded-xl" src="https://picsum.photos/id/1062/500/750"></div><div class="swiper-slide-shadow-left swiper-slide-shadow-coverflow" style="opacity: 2.91667; transition-duration: 0ms;"></div><div class="swiper-slide-shadow-right swiper-slide-shadow-coverflow" style="opacity: 0; transition-duration: 0ms;"></div></div><div class="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active" data-swiper-slide-index="2" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1); z-index: 1; margin-right: 50px;"><div class="size-full rounded-3xl"><img alt="Portrait 3" width="500" height="500" class="size-full rounded-xl" src="https://picsum.photos/id/1074/500/750"></div><div class="swiper-slide-shadow-left swiper-slide-shadow-coverflow" style="opacity: 0; transition-duration: 0ms;"></div><div class="swiper-slide-shadow-right swiper-slide-shadow-coverflow" style="opacity: 0; transition-duration: 0ms;"></div></div><div class="swiper-slide swiper-slide-visible swiper-slide-next" data-swiper-slide-index="3" style="transition-duration: 0ms; transform: translate3d(0px, 0px, -291.667px) rotateX(0deg) rotateY(0deg) scale(1); z-index: -2; margin-right: 50px;"><div class="size-full rounded-3xl"><img alt="Portrait 1" width="200" height="200" class="size-full rounded-xl" src="https://picsum.photos/id/249/500/750"></div><div class="swiper-slide-shadow-left swiper-slide-shadow-coverflow" style="opacity: 0; transition-duration: 0ms;"></div><div class="swiper-slide-shadow-right swiper-slide-shadow-coverflow" style="opacity: 2.91667; transition-duration: 0ms;"></div></div></div><div class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div></div></div></div></div></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.