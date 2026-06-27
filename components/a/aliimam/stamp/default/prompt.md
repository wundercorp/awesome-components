# Build Stamp in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Stamp screenshot](screenshot.png)

## Component

- Author group: `aliimam`
- Component: `stamp`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: aliimam
- Component slug: stamp
- Demo slug: default
- Title: stamp
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default.tsx_DemoOne">default.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative mx-auto flex h-48 w-48 items-center justify-center"><svg class="absolute inset-0 h-full w-full" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><defs><path id="top-curve" d="M 41 96 A 55 55 0 0 1 151 96" fill="none"></path><path id="bottom-curve" d="M 36 96 A 60 60 0 0 1 156 96" fill="none" transform="rotate(180 96 96)"></path></defs><path d="M 192 96 L 182.91657397237213 109.76623292354031 L 187.30142556433475 125.66563145999496 L 174.4085741285764 135.9511639770801 L 173.66563145999496 152.4273842200774 L 158.22539674441617 158.22539674441617 L 152.4273842200774 173.66563145999496 L 135.9511639770801 174.40857412857636 L 125.66563145999496 187.30142556433475 L 109.76623292354031 182.91657397237213 L 96 192 L 82.23376707645967 182.91657397237213 L 66.33436854000506 187.30142556433475 L 56.04883602291989 174.4085741285764 L 39.572615779922586 173.66563145999496 L 33.77460325558383 158.22539674441617 L 18.33436854000506 152.42738422007744 L 17.59142587142364 135.9511639770801 L 4.698574435665265 125.66563145999496 L 9.08342602762788 109.76623292354033 L 0 96.00000000000001 L 9.08342602762788 82.2337670764597 L 4.698574435665265 66.33436854000502 L 17.59142587142361 56.04883602291993 L 18.33436854000503 39.572615779922586 L 33.774603255583806 33.77460325558383 L 39.57261577992257 18.33436854000506 L 56.04883602291987 17.59142587142364 L 66.33436854000503 4.698574435665265 L 82.23376707645967 9.08342602762788 L 95.99999999999999 0 L 109.7662329235403 9.08342602762788 L 125.66563145999493 4.69857443566525 L 135.9511639770801 17.591425871423624 L 152.42738422007739 18.33436854000503 L 158.22539674441617 33.774603255583806 L 173.66563145999493 39.57261577992256 L 174.40857412857636 56.048836022919865 L 187.30142556433475 66.33436854000502 L 182.91657397237213 82.23376707645966 Z" stroke-width="0.2" class="fill-white stroke-black dark:fill-black dark:stroke-white"></path><circle cx="96" cy="96" r="78" class="fill-white stroke-black dark:fill-black dark:stroke-white" stroke-width="0.2"></circle><text class="fill-white text-xl font-bold"><textPath href="#top-curve" startOffset="50%" text-anchor="middle" class="fill-black dark:fill-white">Excellence Award</textPath></text><text class="text-[10px] tracking-wider"><textPath href="#bottom-curve" startOffset="50%" text-anchor="middle" class="fill-black dark:fill-white">Outstanding Performance</textPath></text></svg><div class="relative z-10 text-center"><div class="mb-1 flex justify-center text-center text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star text-primary fill-primary" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div><div class="text-primary mt-2 text-[14px]">Ali Imam</div><div class="text-[10px] italic">June 2025</div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
