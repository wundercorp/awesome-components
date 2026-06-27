# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/intentui/button7/button-size
- Registry URL: https://21st.dev/r/intentui/button7
- Author: intentui
- Component slug: button7
- Demo slug: button-size
- Title: button7
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/intentui/button7 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/intentui__button7__button-size.html
- Local screenshot file: generated-21st-prompts/screenshots/intentui__button7__button-size.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col gap-y-6"><div class="flex flex-wrap items-center gap-2"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-2 py-1">Label</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 py-1.5">Label</button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Label</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-5 py-2.5">Label</button></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div><div class="flex flex-wrap items-center gap-2"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 p-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 25" class="intentui-icons w-3 h-3" data-slot="icon" aria-hidden="true"><path fill="currentColor" d="M23.25 5.881a9.4 9.4 0 0 1-2.65.715 4.57 4.57 0 0 0 2.029-2.514c-.892.52-1.88.899-2.931 1.102a4.65 4.65 0 0 0-3.37-1.434c-2.548 0-4.615 2.035-4.615 4.545q.001.533.119 1.034a13.18 13.18 0 0 1-9.515-4.748 4.5 4.5 0 0 0-.625 2.284c0 1.577.816 2.969 2.054 3.783a4.66 4.66 0 0 1-2.091-.569v.059c0 2.201 1.59 4.038 3.703 4.456a4.7 4.7 0 0 1-2.085.078c.588 1.804 2.292 3.119 4.312 3.154a9.36 9.36 0 0 1-5.733 1.946 10 10 0 0 1-1.102-.063 13.2 13.2 0 0 0 7.075 2.041c8.492 0 13.135-6.923 13.135-12.928q0-.293-.014-.587a9.3 9.3 0 0 0 2.302-2.35z"></path></svg></button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 25" class="intentui-icons w-4 h-4" data-slot="icon" aria-hidden="true"><path fill="currentColor" d="M23.25 5.881a9.4 9.4 0 0 1-2.65.715 4.57 4.57 0 0 0 2.029-2.514c-.892.52-1.88.899-2.931 1.102a4.65 4.65 0 0 0-3.37-1.434c-2.548 0-4.615 2.035-4.615 4.545q.001.533.119 1.034a13.18 13.18 0 0 1-9.515-4.748 4.5 4.5 0 0 0-.625 2.284c0 1.577.816 2.969 2.054 3.783a4.66 4.66 0 0 1-2.091-.569v.059c0 2.201 1.59 4.038 3.703 4.456a4.7 4.7 0 0 1-2.085.078c.588 1.804 2.292 3.119 4.312 3.154a9.36 9.36 0 0 1-5.733 1.946 10 10 0 0 1-1.102-.063 13.2 13.2 0 0 0 7.075 2.041c8.492 0 13.135-6.923 13.135-12.928q0-.293-.014-.587a9.3 9.3 0 0 0 2.302-2.35z"></path></svg></button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 p-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 25" class="intentui-icons w-5 h-5" data-slot="icon" aria-hidden="true"><path fill="currentColor" d="M23.25 5.881a9.4 9.4 0 0 1-2.65.715 4.57 4.57 0 0 0 2.029-2.514c-.892.52-1.88.899-2.931 1.102a4.65 4.65 0 0 0-3.37-1.434c-2.548 0-4.615 2.035-4.615 4.545q.001.533.119 1.034a13.18 13.18 0 0 1-9.515-4.748 4.5 4.5 0 0 0-.625 2.284c0 1.577.816 2.969 2.054 3.783a4.66 4.66 0 0 1-2.091-.569v.059c0 2.201 1.59 4.038 3.703 4.456a4.7 4.7 0 0 1-2.085.078c.588 1.804 2.292 3.119 4.312 3.154a9.36 9.36 0 0 1-5.733 1.946 10 10 0 0 1-1.102-.063 13.2 13.2 0 0 0 7.075 2.041c8.492 0 13.135-6.923 13.135-12.928q0-.293-.014-.587a9.3 9.3 0 0 0 2.302-2.35z"></path></svg></button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 p-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 25" class="intentui-icons w-6 h-6" data-slot="icon" aria-hidden="true"><path fill="currentColor" d="M23.25 5.881a9.4 9.4 0 0 1-2.65.715 4.57 4.57 0 0 0 2.029-2.514c-.892.52-1.88.899-2.931 1.102a4.65 4.65 0 0 0-3.37-1.434c-2.548 0-4.615 2.035-4.615 4.545q.001.533.119 1.034a13.18 13.18 0 0 1-9.515-4.748 4.5 4.5 0 0 0-.625 2.284c0 1.577.816 2.969 2.054 3.783a4.66 4.66 0 0 1-2.091-.569v.059c0 2.201 1.59 4.038 3.703 4.456a4.7 4.7 0 0 1-2.085.078c.588 1.804 2.292 3.119 4.312 3.154a9.36 9.36 0 0 1-5.733 1.946 10 10 0 0 1-1.102-.063 13.2 13.2 0 0 0 7.075 2.041c8.492 0 13.135-6.923 13.135-12.928q0-.293-.014-.587a9.3 9.3 0 0 0 2.302-2.35z"></path></svg></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.