# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/brijr/feature-modern/default
- Registry URL: https://21st.dev/r/brijr/feature-modern
- Author: brijr
- Component slug: feature-modern
- Demo slug: default
- Title: feature-modern
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/brijr/feature-modern with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/brijr__feature-modern__default.html
- Local screenshot file: generated-21st-prompts/screenshots/brijr__feature-modern__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="py-8 md:py-12 border-b"><div class="mx-auto max-w-5xl p-6 sm:p-8 not-prose"><div class="flex flex-col gap-6"><h3 class="text-4xl"><span data-br="«r0»" data-brr="1" style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance; max-width: 830px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span><script>self.__wrap_n=self.__wrap_n||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.__wrap_b=(o,E,S)=>{S=S||document.querySelector(`[data-br="${o}"]`);let s=S==null?void 0:S.parentElement;if(!s)return;let D=i(N=>S.style.maxWidth=N+"px","l");S.style.maxWidth="";let U=s.clientWidth,q=s.clientHeight,Z=U/2-.25,x=U+.5,T;if(U){for(D(Z),Z=Math.max(S.scrollWidth,Z);Z+1<x;)T=Math.round((Z+x)/2),D(T),s.clientHeight===q?x=T:Z=T;D(x*E+U*(1-E))}S.__wrap_o||typeof ResizeObserver<"u"&&(S.__wrap_o=new ResizeObserver(()=>{self.__wrap_b(0,+S.dataset.brr,S)})).observe(s)};self.__wrap_n!=1&&self.__wrap_b("«r0»",1)</script></h3><h4 class="text-2xl font-light opacity-70"><span data-br="«r1»" data-brr="1" style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance; max-width: 677px;">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span><script>self.__wrap_n=self.__wrap_n||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.__wrap_b=(o,E,S)=>{S=S||document.querySelector(`[data-br="${o}"]`);let s=S==null?void 0:S.parentElement;if(!s)return;let D=i(N=>S.style.maxWidth=N+"px","l");S.style.maxWidth="";let U=s.clientWidth,q=s.clientHeight,Z=U/2-.25,x=U+.5,T;if(U){for(D(Z),Z=Math.max(S.scrollWidth,Z);Z+1<x;)T=Math.round((Z+x)/2),D(T),s.clientHeight===q?x=T:Z=T;D(x*E+U*(1-E))}S.__wrap_o||typeof ResizeObserver<"u"&&(S.__wrap_o=new ResizeObserver(()=>{self.__wrap_b(0,+S.dataset.brr,S)})).observe(s)};self.__wrap_n!=1&&self.__wrap_b("«r1»",1)</script></h4><div class="mt-6 grid gap-6 md:mt-12 md:grid-cols-3"><div class="flex flex-col gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coins h-6 w-6" aria-hidden="true"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg><h4 class="text-xl text-primary">Lorem Ipsum</h4><p class="text-base opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div class="flex flex-col gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coins h-6 w-6" aria-hidden="true"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg><h4 class="text-xl text-primary">Lorem Ipsum</h4><p class="text-base opacity-75">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div class="flex flex-col gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coins h-6 w-6" aria-hidden="true"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg><h4 class="text-xl text-primary">Lorem Ipsum</h4><p class="text-base opacity-75">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></div></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.