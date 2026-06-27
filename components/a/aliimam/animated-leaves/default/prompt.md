# Build Animated Leaves in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animated Leaves screenshot](screenshot.png)

## Component

- Author group: `aliimam`
- Component: `animated-leaves`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: aliimam
- Component slug: animated-leaves
- Demo slug: default
- Title: animated-leaves
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen h-screen grid place-items-center m-0 relative overflow-hidden"><svg class="absolute invisible pointer-events-none" xmlns="http://www.w3.org/2000/svg" version="1.1"><filter id="blurFilter"><feGaussianBlur stdDeviation="4.5"></feGaussianBlur><feColorMatrix type="matrix" values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 19 -9"></feColorMatrix></filter></svg><div class="absolute w-[30vmin] aspect-square rounded-full translate-y-1/2" style="filter: blur(1rem);"></div><div class="relative" style="filter: url(&quot;#blurFilter&quot;) saturate(1.5) brightness(1.1); --color-primary: #ee75d2;"><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 0; --i: 0; --delay: 0.34805563658076294s; --count: 10; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(0, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(0deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44)),
                    calc(sin(0deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44) * -1)
                  )
                  rotate(90deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 0; --i: 1; --delay: 0.8574318901319112s; --count: 10; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(10, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(36deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44)),
                    calc(sin(36deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44) * -1)
                  )
                  rotate(54deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 0; --i: 2; --delay: 0.049655041988292306s; --count: 10; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(20, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(72deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44)),
                    calc(sin(72deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44) * -1)
                  )
                  rotate(18deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 0; --i: 3; --delay: 0.5885541800226495s; --count: 10; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(30, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(108deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44)),
                    calc(sin(108deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44) * -1)
                  )
                  rotate(-18deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 0; --i: 4; --delay: 0.6010922735577038s; --count: 10; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(40, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(144deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44)),
                    calc(sin(144deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44) * -1)
                  )
                  rotate(-54deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 0; --i: 5; --delay: 0.5257562636485926s; --count: 10; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(50, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(180deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44)),
                    calc(sin(180deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44) * -1)
                  )
                  rotate(-90deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 0; --i: 6; --delay: 0.6992525459945499s; --count: 10; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(60, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(216deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44)),
                    calc(sin(216deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44) * -1)
                  )
                  rotate(-126deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 0; --i: 7; --delay: 0.3024039302465389s; --count: 10; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(70, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(252deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44)),
                    calc(sin(252deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44) * -1)
                  )
                  rotate(-162deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 0; --i: 8; --delay: 0.5226316512473134s; --count: 10; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(80, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(288deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44)),
                    calc(sin(288deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44) * -1)
                  )
                  rotate(-198deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 0; --i: 9; --delay: 0.4528329242283766s; --count: 10; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(90, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(324deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44)),
                    calc(sin(324deg) * (var(--move, 0vmin) + 4.2vmin + 0 * 20vmin * 0.44) * -1)
                  )
                  rotate(-234deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 10; --delay: 0.708570219147429s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(100, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(171.42857142857142deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(171.42857142857142deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-81.42857142857142deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 11; --delay: 1.0082007673488755s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(110, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(188.57142857142856deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(188.57142857142856deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-98.57142857142856deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 12; --delay: 0.9344705010482781s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(120, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(205.71428571428572deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(205.71428571428572deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-115.71428571428572deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 13; --delay: 0.9165214303437801s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(130, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(222.85714285714286deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(222.85714285714286deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-132.85714285714286deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 14; --delay: 0.9058847368887324s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(140, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(240deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(240deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-150deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 15; --delay: 1.0054368648077323s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(150, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(257.1428571428571deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(257.1428571428571deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-167.1428571428571deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 16; --delay: 0.9450586537614247s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(160, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(274.2857142857143deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(274.2857142857143deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-184.28571428571428deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 17; --delay: 1.0398622617316486s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(170, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(291.42857142857144deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(291.42857142857144deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-201.42857142857144deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 18; --delay: 0.7908425620649505s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(180, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(308.57142857142856deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(308.57142857142856deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-218.57142857142856deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 19; --delay: 1.2215419567842678s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(190, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(325.7142857142857deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(325.7142857142857deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-235.71428571428572deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 20; --delay: 0.8447110934599323s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(200, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(342.85714285714283deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(342.85714285714283deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-252.85714285714283deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 0; --delay: 0.6630472008058461s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(0, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(0deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(0deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(90deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 1; --delay: 0.9350137604682207s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(10, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(17.142857142857142deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(17.142857142857142deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(72.85714285714286deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 2; --delay: 1.4073051795837213s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(20, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(34.285714285714285deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(34.285714285714285deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(55.714285714285715deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 3; --delay: 1.0971129103782868s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(30, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(51.42857142857143deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(51.42857142857143deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(38.57142857142857deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 4; --delay: 0.8379400071863576s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(40, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(68.57142857142857deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(68.57142857142857deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(21.42857142857143deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 5; --delay: 1.037803004343861s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(50, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(85.71428571428571deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(85.71428571428571deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(4.285714285714292deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 6; --delay: 0.6041015505460232s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(60, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(102.85714285714286deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(102.85714285714286deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-12.857142857142861deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 7; --delay: 1.4874551507733762s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(70, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(120deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(120deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-30deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 8; --delay: 0.8601096505029497s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(80, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(137.14285714285714deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(137.14285714285714deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-47.14285714285714deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 1; --i: 9; --delay: 1.4878152261202446s; --count: 21; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(90, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(154.28571428571428deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44)),
                    calc(sin(154.28571428571428deg) * (var(--move, 0vmin) + 4.2vmin + 1 * 20vmin * 0.44) * -1)
                  )
                  rotate(-64.28571428571428deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 31; --delay: 1.4704456758414128s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(310, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(348.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(348.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-258.75deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 0; --delay: 1.2800611846466834s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(0, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(0deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(0deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(90deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 1; --delay: 1.3014639382778814s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(10, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(11.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(11.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(78.75deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 2; --delay: 1.353606496783285s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(20, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(22.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(22.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(67.5deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 3; --delay: 1.6883288188197156s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(30, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(33.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(33.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(56.25deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 4; --delay: 1.685992850707228s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(40, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(45deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(45deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(45deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 5; --delay: 1.4665939604648957s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(50, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(56.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(56.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(33.75deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 6; --delay: 1.2100988619767281s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(60, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(67.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(67.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(22.5deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 7; --delay: 1.9163078246267427s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(70, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(78.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(78.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(11.25deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 8; --delay: 2.027116749388063s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(80, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(90deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(90deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(0deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 9; --delay: 1.3721836677872676s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(90, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(101.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(101.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-11.25deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 10; --delay: 1.5704494610035002s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(100, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(112.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(112.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-22.5deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 11; --delay: 1.7835624735181614s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(110, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(123.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(123.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-33.75deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 12; --delay: 1.2269992586715828s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(120, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(135deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(135deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-45deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 13; --delay: 1.889001096815584s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(130, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(146.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(146.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-56.25deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 14; --delay: 1.7996665865115276s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(140, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(157.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(157.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-67.5deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 15; --delay: 2.021766301257544s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(150, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(168.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(168.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-78.75deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 16; --delay: 1.6158476760609255s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(160, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(180deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(180deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-90deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 17; --delay: 1.8718923768907496s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(170, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(191.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(191.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-101.25deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 18; --delay: 1.3019688618865737s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(180, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(202.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(202.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-112.5deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 19; --delay: 2.0985474389407788s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(190, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(213.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(213.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-123.75deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 20; --delay: 1.343198925784357s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(200, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(225deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(225deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-135deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 21; --delay: 1.5123157001229879s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(210, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(236.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(236.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-146.25deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 22; --delay: 1.3257992454526448s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(220, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(247.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(247.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-157.5deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 23; --delay: 1.438980698923558s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(230, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(258.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(258.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-168.75deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 24; --delay: 1.4801391701343496s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(240, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(270deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(270deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-180deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 25; --delay: 1.8813972654385829s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(250, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(281.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(281.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-191.25deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 26; --delay: 1.4604447519808528s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(260, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(292.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(292.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-202.5deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 27; --delay: 1.7886641044409703s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(270, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(303.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(303.75deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-213.75deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 28; --delay: 1.3933466511118926s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(280, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(315deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(315deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-225deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 29; --delay: 1.8613034293575081s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(290, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(326.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(326.25deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-236.25deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 2; --i: 30; --delay: 1.3426312271844991s; --count: 32; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(300, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(337.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44)),
                    calc(sin(337.5deg) * (var(--move, 0vmin) + 4.2vmin + 2 * 20vmin * 0.44) * -1)
                  )
                  rotate(-247.5deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 20; --delay: 2.5046959312520842s; --count: 43; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(200, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(167.4418604651163deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44)),
                    calc(sin(167.4418604651163deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44) * -1)
                  )
                  rotate(-77.44186046511629deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 21; --delay: 2.2533198106736343s; --count: 43; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(210, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(175.8139534883721deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44)),
                    calc(sin(175.8139534883721deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44) * -1)
                  )
                  rotate(-85.8139534883721deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 22; --delay: 2.0495765931638767s; --count: 43; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(220, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(184.18604651162792deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44)),
                    calc(sin(184.18604651162792deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44) * -1)
                  )
                  rotate(-94.18604651162792deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 23; --delay: 1.9762765558984197s; --count: 43; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(230, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(192.55813953488374deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44)),
                    calc(sin(192.55813953488374deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44) * -1)
                  )
                  rotate(-102.55813953488374deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 24; --delay: 2.6310012464978536s; --count: 43; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(240, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(200.93023255813955deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44)),
                    calc(sin(200.93023255813955deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44) * -1)
                  )
                  rotate(-110.93023255813955deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 25; --delay: 2.447705734615984s; --count: 43; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(250, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(209.30232558139537deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44)),
                    calc(sin(209.30232558139537deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44) * -1)
                  )
                  rotate(-119.30232558139537deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 26; --delay: 2.401636768987341s; --count: 43; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(260, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(217.67441860465118deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44)),
                    calc(sin(217.67441860465118deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44) * -1)
                  )
                  rotate(-127.67441860465118deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 27; --delay: 2.360557831493507s; --count: 43; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(270, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(226.046511627907deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44)),
                    calc(sin(226.046511627907deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44) * -1)
                  )
                  rotate(-136.046511627907deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 28; --delay: 1.910374733726221s; --count: 43; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(280, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(234.4186046511628deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44)),
                    calc(sin(234.4186046511628deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44) * -1)
                  )
                  rotate(-144.4186046511628deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 29; --delay: 2.0212917659912555s; --count: 43; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(290, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(242.79069767441862deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44)),
                    calc(sin(242.79069767441862deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44) * -1)
                  )
                  rotate(-152.79069767441862deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 30; --delay: 2.108250111666094s; --count: 43; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(300, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(251.16279069767444deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44)),
                    calc(sin(251.16279069767444deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44) * -1)
                  )
                  rotate(-161.16279069767444deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 31; --delay: 2.372329708494782s; --count: 43; height: 20vmin; aspect-ratio: 1 / 20; background: radial-gradient(
                  color-mix(in srgb, white, transparent 90%),
                  color-mix(
                    in srgb,
                    var(--color-primary),
                    hsla(310, 100%, 50%, 1) 50%
                  )
                ); animation: leafMove 0.8s var(--delay) ease infinite; transform: translate(
                    calc(cos(259.5348837209302deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44)),
                    calc(sin(259.5348837209302deg) * (var(--move, 0vmin) + 4.2vmin + 3 * 20vmin * 0.44) * -1)
                  )
                  rotate(-169.53488372093022deg);"></div><div class="absolute opacity-0 rounded-full" style="--size: 20vmin; --ri: 3; --i: 

[TRUNCATED: original length 796765 characters]
```

## Reference source files

No reference source files were available.
