# Build Animated Generate Button Shadcn Tailwind in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animated Generate Button Shadcn Tailwind screenshot](screenshot.png)

## Component

- Author group: `shadway`
- Component: `animated-generate-button-shadcn-tailwind`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shadway
- Component slug: animated-generate-button-shadcn-tailwind
- Demo slug: default
- Title: animated-generate-button-shadcn-tailwind
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative inline-block"><button type="button" aria-label="Generate" aria-pressed="false" class="ui-anim-btn relative flex items-center justify-center cursor-pointer select-none rounded-[24px] px-4 py-2 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))]/20 shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2),inset_0px_2px_2px_rgba(255,255,255,0.15),inset_0px_4px_4px_rgba(255,255,255,0.1),inset_0px_8px_8px_rgba(255,255,255,0.05),inset_0px_16px_16px_rgba(255,255,255,0.05),0_-1px_1px_rgba(0,0,0,0.02),0_-2px_2px_rgba(0,0,0,0.03),0_-4px_4px_rgba(0,0,0,0.05),0_-8px_8px_rgba(0,0,0,0.06),0_-16px_16px_rgba(0,0,0,0.08)] transition-[box-shadow,border,background-color] duration-400" style="--highlight-hue: 5000deg;"><svg class="ui-anim-btn-svg mr-2 h-6 w-6 flex-grow-0 fill-[color:var(--ui-anim-svg-fill)] transition-[fill,filter,opacity] duration-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path></svg><div class="ui-anim-txt-wrapper relative flex min-w-[6.4em] items-center"><div class="ui-anim-txt-1 absolute animate-[ui-appear_1s_ease-in-out_forwards]"><span class="ui-anim-letter inline-block">G</span><span class="ui-anim-letter inline-block">e</span><span class="ui-anim-letter inline-block">n</span><span class="ui-anim-letter inline-block">e</span><span class="ui-anim-letter inline-block">r</span><span class="ui-anim-letter inline-block">a</span><span class="ui-anim-letter inline-block">t</span><span class="ui-anim-letter inline-block">e</span></div><div class="ui-anim-txt-2 absolute opacity-0"><span class="ui-anim-letter inline-block">B</span><span class="ui-anim-letter inline-block">u</span><span class="ui-anim-letter inline-block">i</span><span class="ui-anim-letter inline-block">l</span><span class="ui-anim-letter inline-block">d</span><span class="ui-anim-letter inline-block">i</span><span class="ui-anim-letter inline-block">n</span><span class="ui-anim-letter inline-block">g</span></div></div></button><style>
        .ui-anim-btn {
          --padding: 4px;
          --radius: 24px;
          --transition: 0.4s;
          --highlight: hsl(var(--highlight-hue), 100%, 70%);
          --highlight-50: hsla(var(--highlight-hue), 100%, 70%, 0.5);
          --highlight-30: hsla(var(--highlight-hue), 100%, 70%, 0.3);
          --highlight-20: hsla(var(--highlight-hue), 100%, 70%, 0.2);
          --highlight-80: hsla(var(--highlight-hue), 100%, 70%, 0.8);
          --ui-anim-svg-fill: #e8e8e8;
        }

        .ui-anim-btn::before {
          content: "";
          position: absolute;
          top: calc(0px - var(--padding));
          left: calc(0px - var(--padding));
          width: calc(100% + var(--padding) * 2);
          height: calc(100% + var(--padding) * 2);
          border-radius: calc(var(--radius) + var(--padding));
          pointer-events: none;
          background-image: linear-gradient(0deg, #0004, #000a);
          z-index: -1;
          transition: box-shadow var(--transition), filter var(--transition);
          box-shadow:
            0 -8px 8px -6px #0000 inset,
            0 -16px 16px -8px #00000000 inset,
            1px 1px 1px #fff2,
            2px 2px 2px #fff1,
            -1px -1px 1px #0002,
            -2px -2px 2px #0001;
        }

        .ui-anim-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background-image: linear-gradient(0deg, #fff, var(--highlight), var(--highlight-50), 8%, transparent);
          background-position: 0 0;
          opacity: 0;
          transition: opacity var(--transition), filter var(--transition);
        }

        /* Letters */
        .ui-anim-letter {
          color: #ffffff88;
          animation: ui-letter-anim 2s ease-in-out infinite;
          transition: color var(--transition), text-shadow var(--transition), opacity var(--transition);
        }

        @keyframes ui-letter-anim {
          50% {
            text-shadow: 0 0 3px #fff8;
            color: #fff;
          }
        }

        /* SVG flicker */
        .ui-anim-btn-svg {
          filter: drop-shadow(0 0 2px #fff9);
          animation: ui-flicker 2s linear infinite;
          animation-delay: 0.5s;
        }

        @keyframes ui-flicker {
          50% {
            opacity: 0.3;
          }
        }

        /* Text layers */
        @keyframes ui-appear {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* Focus swaps idle/active text with delays mimicking original */
        .ui-anim-btn:focus .ui-anim-txt-1 {
          animation: ui-opacity-swap 0.3s ease-in-out forwards;
          animation-delay: 1s;
        }
        .ui-anim-btn:focus .ui-anim-txt-2 {
          animation: ui-opacity-swap 0.3s ease-in-out reverse forwards;
          animation-delay: 1s;
        }

        @keyframes ui-opacity-swap {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .ui-anim-btn:focus .ui-anim-letter {
          animation:
            ui-focused-letter 1s ease-in-out forwards,
            ui-letter-anim 1.2s ease-in-out infinite;
          animation-delay: 0s, 1s;
        }

        @keyframes ui-focused-letter {
          0%,
          100% {
            filter: blur(0px);
            transform: scale(1);
          }
          50% {
            transform: scale(2);
            filter: blur(10px) brightness(150%)
              drop-shadow(-36px 12px 12px var(--highlight));
          }
        }

        .ui-anim-btn:focus .ui-anim-btn-svg {
          animation-duration: 1.2s;
          animation-delay: 0.2s;
        }

        .ui-anim-btn:focus::before {
          box-shadow:
            0 -8px 12px -6px #fff3 inset,
            0 -16px 16px -8px var(--highlight-20) inset,
            1px 1px 1px #fff3,
            2px 2px 2px #fff1,
            -1px -1px 1px #0002,
            -2px -2px 2px #0001;
        }
        .ui-anim-btn:focus::after {
          opacity: 0.6;
          -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
          mask-image: linear-gradient(0deg, #fff, transparent);
          filter: brightness(100%);
        }

        /* Hover */
        .ui-anim-btn:hover {
          border-color: hsla(var(--highlight-hue), 100%, 80%, 0.4);
        }
        .ui-anim-btn:hover::before {
          box-shadow:
            0 -8px 8px -6px #fffa inset,
            0 -16px 16px -8px var(--highlight-30) inset,
            1px 1px 1px #fff2,
            2px 2px 2px #fff1,
            -1px -1px 1px #0002,
            -2px -2px 2px #0001;
        }
        .ui-anim-btn:hover::after {
          opacity: 1;
          -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
          mask-image: linear-gradient(0deg, #fff, transparent);
        }
        .ui-anim-btn:hover .ui-anim-btn-svg {
          fill: #fff;
          filter:
            drop-shadow(0 0 3px var(--highlight))
            drop-shadow(0 -4px 6px #0009);
          animation: none;
        }

        /* Active */
        .ui-anim-btn:active {
          border-color: hsla(var(--highlight-hue), 100%, 80%, 0.7);
          background-color: hsla(var(--highlight-hue), 50%, 20%, 0.5);
        }
        .ui-anim-btn:active::before {
          box-shadow:
            0 -8px 12px -6px #fffa inset,
            0 -16px 16px -8px var(--highlight-80) inset,
            1px 1px 1px #fff4,
            2px 2px 2px #fff2,
            -1px -1px 1px #0002,
            -2px -2px 2px #0001;
        }
        .ui-anim-btn:active::after {
          opacity: 1;
          -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
          mask-image: linear-gradient(0deg, #fff, transparent);
          filter: brightness(200%);
        }
        .ui-anim-btn:active .ui-anim-letter {
          text-shadow: 0 0 1px hsla(var(--highlight-hue), 100%, 90%, 0.9);
          animation: none;
        }

        /* Letter stagger delays 1:1 */
        .ui-anim-txt-1 .ui-anim-letter:nth-child(1),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(1) {
          animation-delay: 0s;
        }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(2),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(2) {
          animation-delay: 0.08s;
        }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(3),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(3) {
          animation-delay: 0.16s;
        }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(4),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(4) {
          animation-delay: 0.24s;
        }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(5),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(5) {
          animation-delay: 0.32s;
        }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(6),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(6) {
          animation-delay: 0.4s;
        }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(7),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(7) {
          animation-delay: 0.48s;
        }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(8),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(8) {
          animation-delay: 0.56s;
        }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(9),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(9) {
          animation-delay: 0.64s;
        }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(10),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(10) {
          animation-delay: 0.72s;
        }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(11),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(11) {
          animation-delay: 0.8s;
        }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(12),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(12) {
          animation-delay: 0.88s;
        }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(13),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(13) {
          animation-delay: 0.96s;
        }

        /* Disabled */
        .ui-anim-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      </style></div></div></div></div>
```

## Reference source files

No reference source files were available.
