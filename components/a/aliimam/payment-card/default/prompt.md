# Build Payment Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Payment Card screenshot](screenshot.png)

## Component

- Author group: `aliimam`
- Component: `payment-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: aliimam
- Component slug: payment-card
- Demo slug: default
- Title: payment-card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="p-6 mx-auto max-w-md space-y-6"><div class="relative h-60 w-full perspective-1000"><div class="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d "><div class="absolute inset-0 w-full h-full backface-hidden"><div class=""><div data-slot="card" class="flex flex-col gap-6 rounded-xl py-6 transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] w-full mx-auto max-w-md h-60 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white border-0 shadow-2xl" style="backdrop-filter: url(&quot;#container-glass&quot;);"><div data-slot="card-content" class="p-6 h-full flex flex-col justify-between"><div class="flex justify-between items-start"><div class="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md flex items-center justify-center"><div class="w-6 h-4 bg-yellow-300 rounded-full"></div></div><div class="text-right"></div></div><div class="space-y-4"><div class="text-2xl font-mono tracking-wider">•••• •••• •••• ••••</div></div><div class="flex justify-between items-end"><div><div class="text-xs text-gray-300 uppercase tracking-wide">Card Holder</div><div class="text-lg font-medium">YOUR NAME</div></div><div><div class="text-xs text-gray-300 uppercase tracking-wide">Expires</div><div class="text-lg font-mono">MM/YY</div></div></div></div></div><svg class="hidden"><defs><filter id="container-glass" x="0%" y="0%" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.02" numOctaves="1" seed="1" result="turbulence"></feTurbulence><feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise"></feGaussianBlur><feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="120" xChannelSelector="R" yChannelSelector="B" result="displaced"></feDisplacementMap><feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur"></feGaussianBlur><feComposite in="finalBlur" in2="finalBlur" operator="over"></feComposite></filter></defs></svg></div></div><div class="absolute inset-0 w-full h-full backface-hidden rotate-y-180"><div class=""><div data-slot="card" class="flex flex-col gap-6 rounded-xl py-6 transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white border-0 shadow-2xl" style="backdrop-filter: url(&quot;#container-glass&quot;);"><div data-slot="card-content" class="p-0 h-full"><div class="w-full h-12 bg-black mt-6"></div><div class="p-6 pt-8"><div class="bg-white h-10 rounded flex items-center justify-end px-3"><div class="text-black font-mono text-lg">•••</div></div><div class="text-xs text-gray-300 mt-2">CVV</div></div><div class="absolute bottom-6 right-6"></div></div></div><svg class="hidden"><defs><filter id="container-glass" x="0%" y="0%" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.02" numOctaves="1" seed="1" result="turbulence"></feTurbulence><feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise"></feGaussianBlur><feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="120" xChannelSelector="R" yChannelSelector="B" result="displaced"></feDisplacementMap><feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur"></feGaussianBlur><feComposite in="finalBlur" in2="finalBlur" operator="over"></feComposite></filter></defs></svg></div></div></div></div><div class=""><div data-slot="card" class="text-card-foreground bg-transparent flex flex-col gap-6 rounded-xl border py-6 shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]" style="backdrop-filter: url(&quot;#container-glass&quot;);"><div data-slot="card-content" class="p-6 space-y-4"><h2 class="text-2xl font-semibold text-center mb-6">Payment Details</h2><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="cardNumber">Card Number</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono text-lg" id="cardNumber" placeholder="1234 5678 9012 3456" value=""></div><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="cardName">Cardholder Name</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 uppercase" id="cardName" placeholder="John Doe" value=""></div><div class="grid grid-cols-2 gap-4"><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="expiry">Expiry Date</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono" id="expiry" placeholder="MM/YY" value=""></div><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="cvv">CVV</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono" id="cvv" placeholder="123" value=""></div></div><button class="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-8 w-full mt-6">Pay Now</button></div></div><svg class="hidden"><defs><filter id="container-glass" x="0%" y="0%" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.02" numOctaves="1" seed="1" result="turbulence"></feTurbulence><feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise"></feGaussianBlur><feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="120" xChannelSelector="R" yChannelSelector="B" result="displaced"></feDisplacementMap><feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur"></feGaussianBlur><feComposite in="finalBlur" in2="finalBlur" operator="over"></feComposite></filter></defs></svg></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
