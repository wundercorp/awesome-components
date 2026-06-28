# Build Clipped Image in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Clipped Image screenshot](screenshot.png)

## Component

- Author group: `ui-layouts`
- Component: `clipped-image`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ui-layouts
- Component slug: clipped-image
- Demo slug: default
- Title: clipped-image
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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_ClippedGoeyGalleryDemo">ClippedGoeyGalleryDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-zinc-900 min-h-[1000px]"><div class="w-full max-w-5xl border rounded-lg shadow-md p-6 bg-white dark:bg-black space-y-12"><h2 class="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Clipped Goey Gallery Demo</h2><div><svg class="clipppy absolute -top-[999px] -left-[999px] w-0 h-0"><defs><clipPath id="clip-goey1" clipPathUnits="objectBoundingBox"><path d="M0.475097 0.0206081C0.480612 -0.00686926 0.519388 -0.00686941 0.524903 0.0206079L0.571269 0.251605C0.575051 0.270448 0.597161 0.278588 0.61201 0.266604L0.793792 0.119895C0.815436 0.102427 0.845153 0.127617 0.83198 0.152266L0.721096 0.359768C0.712075 0.37665 0.723822 0.397229 0.742771 0.397739L0.975238 0.403995C1.00289 0.404739 1.00963 0.443354 0.983905 0.453651L0.767467 0.540292C0.74985 0.547345 0.745772 0.570735 0.75994 0.58347L0.93413 0.740035C0.954822 0.758634 0.935419 0.792584 0.909186 0.783681L0.688795 0.708892C0.670805 0.702787 0.652793 0.718074 0.655584 0.737078L0.689853 0.970393C0.693926 0.998124 0.657484 1.01152 0.643038 0.987606L0.521679 0.786683C0.511768 0.770275 0.488232 0.770275 0.478321 0.786683L0.356962 0.987606C0.342516 1.01152 0.306074 0.998123 0.310147 0.970393L0.344416 0.737078C0.347207 0.718074 0.329195 0.702787 0.311205 0.708892L0.0908143 0.783681C0.0645805 0.792584 0.0451779 0.758634 0.0658702 0.740035L0.24006 0.58347C0.254228 0.570735 0.25015 0.547345 0.232533 0.540292L0.016095 0.453651C-0.00962926 0.443354 -0.00288931 0.404739 0.0247622 0.403995L0.257229 0.397739C0.276178 0.397229 0.287925 0.37665 0.278904 0.359768L0.16802 0.152266C0.154848 0.127617 0.184564 0.102427 0.206208 0.119895L0.38799 0.266604C0.402839 0.278588 0.424949 0.270448 0.428731 0.251605L0.475097 0.0206081Z" fill="#D9D9D9"></path></clipPath><clipPath id="clip-goey2" clipPathUnits="objectBoundingBox"><path d="M0.524367 0.0169408C0.516013 -0.00564697 0.483987 -0.00564692 0.475633 0.0169409L0.355942 0.340559C0.353318 0.347653 0.347718 0.35325 0.340612 0.355881L0.0169359 0.47571C-0.00564523 0.48407 -0.00564523 0.51593 0.0169359 0.52429L0.340612 0.644119C0.347718 0.64675 0.353318 0.652347 0.355942 0.659441L0.475633 0.983059C0.483987 1.00565 0.516013 1.00565 0.524367 0.983059L0.644058 0.659441C0.646682 0.652347 0.652282 0.64675 0.659388 0.644119L0.983064 0.52429C1.00565 0.51593 1.00565 0.48407 0.983064 0.47571L0.659389 0.355881C0.652282 0.35325 0.646682 0.347653 0.644058 0.340559L0.524367 0.0169408Z" fill="#D9D9D9"></path></clipPath><clipPath id="clip-goey3" clipPathUnits="objectBoundingBox"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.566745C0.5 0.25374 0.276142 0 0 0V0.433255C0 0.74626 0.223858 1 0.5 1C0.776142 1 1 0.74626 1 0.433255V0H0.5V0.566745Z" fill="#D9D9D9"></path></clipPath><clipPath id="clip-goey4" clipPathUnits="objectBoundingBox"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.499366 0H0V1H0.5V0.55597H0.509506C0.780398 0.55597 1 0.307054 1 0H0.5H0.499366Z" fill="#D9D9D9"></path></clipPath><clipPath id="clip-goey5" clipPathUnits="objectBoundingBox"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0249688 0C0.0111789 0 0 0.0112775 0 0.0251889V0.851385C0 0.865297 0.0111789 0.876574 0.0249688 0.876574H0.179775V0.974811C0.179775 0.988723 0.190954 1 0.204744 1H0.975031C0.988821 1 1 0.988723 1 0.974811V0.157431C1 0.143519 0.988821 0.132242 0.975031 0.132242H0.810237V0.0251889C0.810237 0.0112775 0.799058 0 0.785268 0H0.0249688Z" fill="#D9D9D9"></path></clipPath><clipPath id="clip-goey6" clipPathUnits="objectBoundingBox"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0H0V0.5L3.31881e-08 1H0.489388C0.771391 1 1 0.776142 1 0.5H0.489388C0.771391 0.5 1 0.276142 1 0Z" fill="#D9D9D9"></path></clipPath></defs></svg><section class="grid grid-cols-3 gap-8 dark:bg-black bg-white border rounded-lg p-5 "><figure class="group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-b to-[#bd8122] from-[#c9ad66] rounded-xl"><div style="clip-path: url(&quot;#clip-goey1&quot;);"><img alt="Golden abstract art" class="transition-all duration-300 align-bottom object-cover aspect-square group-hover:scale-110 w-full" src="https://images.unsplash.com/photo-1713727660632-841a92340a71?q=80&amp;w=1985&amp;auto=format&amp;fit=crop"></div></figure><figure class="group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-t to-[#8c8a57] from-[#6f7957] rounded-xl"><div style="clip-path: url(&quot;#clip-goey2&quot;);"><img alt="Green abstract art" class="transition-all duration-300 align-bottom object-cover aspect-square group-hover:scale-110 w-full" src="https://images.unsplash.com/photo-1691669151338-a983e71abc05?q=80&amp;w=1978&amp;auto=format&amp;fit=crop"></div></figure><figure class="group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-t to-[#ba4344] from-[#d5685a] rounded-xl"><div style="clip-path: url(&quot;#clip-goey3&quot;);"><img alt="Red abstract art" class="transition-all duration-300 align-bottom object-cover aspect-square group-hover:scale-110 w-full" src="https://images.unsplash.com/photo-1683223585116-23e136669e80?q=80&amp;w=1959&amp;auto=format&amp;fit=crop"></div></figure><figure class="group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-t to-[#9b2a08] from-[#f7d578] rounded-xl"><div style="clip-path: url(&quot;#clip-goey4&quot;);"><img alt="Orange abstract art" class="transition-all duration-300 align-bottom object-cover aspect-square group-hover:scale-110 w-full" src="https://images.unsplash.com/photo-1575995864268-5dec34a5bb99?w=500&amp;auto=format&amp;fit=crop"></div></figure><figure class="group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-b to-[#022641] from-[#356778] rounded-xl"><div style="clip-path: url(&quot;#clip-goey5&quot;);"><img alt="Blue abstract art" class="transition-all duration-300 align-bottom object-cover aspect-square group-hover:scale-110 w-full" src="https://images.unsplash.com/photo-1681238093193-1b3a8fcdf225?q=80&amp;w=1962&amp;auto=format&amp;fit=crop"></div></figure><figure class="group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-b to-[#324644] from-[#89a390] rounded-xl"><div style="clip-path: url(&quot;#clip-goey6&quot;);"><img alt="Grey abstract art" class="transition-all duration-300 align-bottom object-cover aspect-square group-hover:scale-110 w-full" src="https://images.unsplash.com/photo-1693162640799-9f192c4e0da3?q=80&amp;w=1959&amp;auto=format&amp;fit=crop"></div></figure></section></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
