# Build Gauge 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Gauge 1 screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `gauge-1`
- Variant: `label`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: gauge-1
- Demo slug: label
- Title: gauge-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex gap-8 items-center justify-center"><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" class="relative" role="progressbar"><svg aria-hidden="true" fill="none" height="20" width="20" viewBox="0 0 100 100" stroke-width="2"><circle cx="50" cy="50" r="42.5" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="scale-y-[-1] origin-center rotate-[calc(1turn_-_90deg_-_(9*3.6deg))] stroke-gray-alpha-400" stroke-dasharray="5.340707511102648 267.0353755551324"></circle><circle cx="50" cy="50" r="42.5" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="origin-center -rotate-90" stroke="#00ac3a" stroke-dasharray="213.62830044410592 267.0353755551324"></circle></svg></div><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" class="relative" role="progressbar"><svg aria-hidden="true" fill="none" height="20" width="20" viewBox="0 0 100 100" stroke-width="2"><circle cx="50" cy="50" r="42.5" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="scale-y-[-1] origin-center rotate-[calc(1turn_-_90deg_-_(9*3.6deg))] stroke-gray-alpha-400" stroke-dasharray="-48.06636759992384 267.0353755551324"></circle><circle cx="50" cy="50" r="42.5" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="origin-center -rotate-90" stroke="#00ac3a" stroke-dasharray="267.0353755551324 267.0353755551324"></circle></svg></div><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" class="relative" role="progressbar"><svg aria-hidden="true" fill="none" height="32" width="32" viewBox="0 0 100 100" stroke-width="2"><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="scale-y-[-1] origin-center rotate-[calc(1turn_-_90deg_-_(6*3.6deg))] stroke-gray-alpha-400" stroke-dasharray="22.61946710584651 282.7433388230814"></circle><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="origin-center -rotate-90" stroke="#00ac3a" stroke-dasharray="226.1946710584651 282.7433388230814"></circle></svg><div aria-hidden="true" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><p class="text-gray-1000 font-sans text-[11px] font-medium">80</p></div></div><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" class="relative" role="progressbar"><svg aria-hidden="true" fill="none" height="32" width="32" viewBox="0 0 100 100" stroke-width="2"><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="scale-y-[-1] origin-center rotate-[calc(1turn_-_90deg_-_(6*3.6deg))] stroke-gray-alpha-400" stroke-dasharray="-33.929200658769766 282.7433388230814"></circle><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="origin-center -rotate-90" stroke="#00ac3a" stroke-dasharray="282.7433388230814 282.7433388230814"></circle></svg><div aria-hidden="true" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><p class="text-gray-1000 font-sans text-[11px] font-medium">100</p></div></div><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" class="relative" role="progressbar"><svg aria-hidden="true" fill="none" height="64" width="64" viewBox="0 0 100 100" stroke-width="2"><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="scale-y-[-1] origin-center rotate-[calc(1turn_-_90deg_-_(5*3.6deg))] stroke-gray-alpha-400" stroke-dasharray="28.274333882308138 282.7433388230814"></circle><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="origin-center -rotate-90" stroke="#00ac3a" stroke-dasharray="226.1946710584651 282.7433388230814"></circle></svg><div aria-hidden="true" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><p class="text-gray-1000 font-sans text-[18px] font-medium">80</p></div></div><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" class="relative" role="progressbar"><svg aria-hidden="true" fill="none" height="64" width="64" viewBox="0 0 100 100" stroke-width="2"><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="scale-y-[-1] origin-center rotate-[calc(1turn_-_90deg_-_(5*3.6deg))] stroke-gray-alpha-400" stroke-dasharray="-28.274333882308138 282.7433388230814"></circle><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="origin-center -rotate-90" stroke="#00ac3a" stroke-dasharray="282.7433388230814 282.7433388230814"></circle></svg><div aria-hidden="true" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><p class="text-gray-1000 font-sans text-[18px] font-medium">100</p></div></div><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" class="relative" role="progressbar"><svg aria-hidden="true" fill="none" height="128" width="128" viewBox="0 0 100 100" stroke-width="2"><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="scale-y-[-1] origin-center rotate-[calc(1turn_-_90deg_-_(5*3.6deg))] stroke-gray-alpha-400" stroke-dasharray="28.274333882308138 282.7433388230814"></circle><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="origin-center -rotate-90" stroke="#00ac3a" stroke-dasharray="226.1946710584651 282.7433388230814"></circle></svg><div aria-hidden="true" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><p class="text-gray-1000 font-sans text-[32px] font-semibold">80</p></div></div><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" class="relative" role="progressbar"><svg aria-hidden="true" fill="none" height="128" width="128" viewBox="0 0 100 100" stroke-width="2"><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="scale-y-[-1] origin-center rotate-[calc(1turn_-_90deg_-_(5*3.6deg))] stroke-gray-alpha-400" stroke-dasharray="-28.274333882308138 282.7433388230814"></circle><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="origin-center -rotate-90" stroke="#00ac3a" stroke-dasharray="282.7433388230814 282.7433388230814"></circle></svg><div aria-hidden="true" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><p class="text-gray-1000 font-sans text-[32px] font-semibold">100</p></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
