# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/brijr/call-to-action-1/call-to-action-four
- Registry URL: https://21st.dev/r/brijr/call-to-action-1
- Author: brijr
- Component slug: call-to-action-1
- Demo slug: call-to-action-four
- Title: call-to-action-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/brijr/call-to-action-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/brijr__call-to-action-1__call-to-action-four.html
- Local screenshot file: generated-21st-prompts/screenshots/brijr__call-to-action-1__call-to-action-four.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="py-8 md:py-12"><div class="mx-auto max-w-5xl p-6 sm:p-8 flex flex-col items-center gap-6 text-center"><h2 class="!my-0">Lorem ipsum dolor sit amet!</h2><p class="text-lg opacity-70 md:text-2xl"><span data-br="«r0»" data-brr="1" style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance; max-width: 641px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span><script>self.__wrap_n=self.__wrap_n||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.__wrap_b=(n,u,c)=>{c=c||document.querySelector(`[data-br="${n}"]`);let o=c==null?void 0:c.parentElement;if(!o)return;let f=i(E=>c.style.maxWidth=E+"px","l");c.style.maxWidth="";let h=o.clientWidth,m=o.clientHeight,g=h/2-.25,y=h+.5,p;if(h){for(f(g),g=Math.max(c.scrollWidth,g);g+1<y;)p=Math.round((g+y)/2),f(p),o.clientHeight===m?y=p:g=p;f(y*u+h*(1-u))}c.__wrap_o||typeof ResizeObserver<"u"&&(c.__wrap_o=new ResizeObserver(()=>{self.__wrap_b(0,+c.dataset.brr,c)})).observe(o)};self.__wrap_n!=1&&self.__wrap_b("«r0»",1)</script></p><form class="mt-6 flex h-fit items-center justify-center gap-2"><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only" for="«r1»-form-item">Email</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 !mt-0 md:w-64" placeholder="Your email address" id="«r1»-form-item" aria-describedby="«r1»-form-item-description" aria-invalid="false" value="" name="email"></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" type="submit">Submit</button></form></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.