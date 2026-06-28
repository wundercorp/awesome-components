# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shadcn/alert/with-link-button
- Registry URL: https://21st.dev/r/shadcn/alert
- Author: shadcn
- Component slug: alert
- Demo slug: with-link-button
- Title: alert
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shadcn/alert with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shadcn__alert__with-link-button.html
- Local screenshot file: generated-21st-prompts/screenshots/shadcn__alert__with-link-button.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex flex-col gap-4 max-w-[500px]"><div role="alert" class="relative w-full rounded-lg border p-4 [&amp;&gt;svg~*]:pl-7 [&amp;&gt;svg+div]:translate-y-[-3px] [&amp;&gt;svg]:absolute [&amp;&gt;svg]:left-4 [&amp;&gt;svg]:top-4 [&amp;&gt;svg]:text-foreground bg-background text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info size-4" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg><h5 class="mb-1 font-medium leading-none tracking-tight">You have a new invoice due.</h5><div class="text-sm [&amp;_p]:leading-relaxed">Do not miss out on the opportunity to pay your invoice. It's due in 3 days.</div><a href="#" class="mt-2.5 inline-flex text-sm font-medium underline">Pay Now</a></div><div role="alert" class="relative w-full rounded-lg border p-4 [&amp;&gt;svg~*]:pl-7 [&amp;&gt;svg+div]:translate-y-[-3px] [&amp;&gt;svg]:absolute [&amp;&gt;svg]:left-4 [&amp;&gt;svg]:top-4 border-destructive/50 text-destructive dark:border-destructive [&amp;&gt;svg]:text-destructive"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert size-4" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg><h5 class="mb-1 font-medium leading-none tracking-tight">Something went wrong with your submission.</h5><div class="text-sm [&amp;_p]:leading-relaxed">Please check your connection and try again. If the problem persists, contact support.</div><a href="#" class="mt-2.5 inline-flex text-sm font-medium text-destructive underline">Retry</a></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.