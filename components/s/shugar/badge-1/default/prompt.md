# Build Badge 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Badge 1 screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `badge-1`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: badge-1
- Demo slug: default
- Title: badge-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col gap-2"><div class="flex gap-1"><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-gray-700 text-white fill-white text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>gray</div><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-gray-200 text-gray-1000 fill-gray-1000 text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>gray-subtle</div></div><div class="flex gap-1"><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-blue-700 text-white fill-white text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>blue</div><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-blue-200 text-blue-900 fill-blue-900 text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>blue-subtle</div></div><div class="flex gap-1"><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-purple-700 text-white fill-white text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>purple</div><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-purple-200 text-purple-900 fill-purple-900 text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>purple-subtle</div></div><div class="flex gap-1"><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-amber-700 text-black fill-black text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>amber</div><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-amber-200 text-amber-900 fill-amber-900 text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>amber-subtle</div></div><div class="flex gap-1"><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-red-700 text-white fill-white text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>red</div><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-red-200 text-red-900 fill-red-900 text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>red-subtle</div></div><div class="flex gap-1"><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-pink-700 text-white fill-white text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>pink</div><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-pink-300 text-pink-900 fill-pink-900 text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>pink-subtle</div></div><div class="flex gap-1"><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-green-700 text-white fill-white text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>green</div><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-green-200 text-green-900 fill-green-900 text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>green-subtle</div></div><div class="flex gap-1"><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-teal-700 text-white fill-white text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>teal</div><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-teal-300 text-teal-900 fill-teal-900 text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>teal-subtle</div></div><div class="flex gap-1"><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-gray-1000 text-gray-100 fill-gray-100 text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>inverted</div></div><div class="flex gap-1"><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-gradient-to-br from-trial-start to-trial-end text-white fill-white text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>trial</div></div><div class="flex gap-1"><div class="inline-flex justify-center items-center shrink-0 rounded-[9999px] font-sans font-medium whitespace-nowrap tabular-nums capitalize bg-gradient-to-br from-turbo-start to-turbo-end text-white fill-white text-[12px] h-6 px-2.5 tracking-normal gap-1"><style>
          .smIconContainer svg {
              width: 11px;
              height: 11px;
          }
          .mdIconContainer svg {
              width: 14px;
              height: 14px;
          }
          .lgIconContainer svg {
              width: 16px;
              height: 16px;
          }
        </style>turborepo</div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
