# Build Heroui Form in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Form screenshot](screenshot.png)

## Component

- Author group: `hero_ui`
- Component: `heroui-form`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hero_ui
- Component slug: heroui-form
- Demo slug: default
- Title: heroui-form
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><form class="flex w-96 flex-col gap-4"><div data-slot="textfield" class="textfield" data-rac="" data-required="true"><label class="label" id="react-aria4662681123-«r1»" for="react-aria4662681123-«r0»" data-slot="label">Email</label><input required="" placeholder="john@example.com" tabindex="0" id="react-aria4662681123-«r0»" aria-labelledby="react-aria4662681123-«r1»" class="input input--primary" data-slot="input" data-rac="" type="email" value="" name="email" title=""></div><div data-slot="textfield" class="textfield" data-rac="" data-required="true"><label class="label" id="react-aria4662681123-«r6»" for="react-aria4662681123-«r5»" data-slot="label">Password</label><input required="" minlength="8" placeholder="Enter your password" tabindex="0" id="react-aria4662681123-«r5»" aria-labelledby="react-aria4662681123-«r6»" aria-describedby="react-aria4662681123-«r8»" class="input input--primary" data-slot="input" data-rac="" type="password" value="" name="password" title=""><span class="description" id="react-aria4662681123-«r8»" data-slot="description" slot="description">Must be at least 8 characters with 1 uppercase and 1 number</span></div><div class="flex gap-2"><button data-slot="button" class="button button--md button--primary" data-rac="" type="submit" tabindex="0" data-react-aria-pressable="true" id="react-aria4662681123-«ra»"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>Submit</button><button data-slot="button" class="button button--md button--secondary" data-rac="" type="reset" tabindex="0" data-react-aria-pressable="true" id="react-aria4662681123-«rc»">Reset</button></div></form></div></div></div>
```

## Reference source files

No reference source files were available.
