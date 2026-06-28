# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reui/alert-1/actions
- Registry URL: https://21st.dev/r/reui/alert-1
- Author: reui
- Component slug: alert-1
- Demo slug: actions
- Title: alert-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reui/alert-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reui__alert-1__actions.html
- Local screenshot file: generated-21st-prompts/screenshots/reui__alert-1__actions.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col gap-5 p-10 w-full mx-auto max-w-[600px] h-screen justify-center items-center"><div data-slot="alert" role="alert" class="flex items-stretch w-full group-[.toaster]:w-(--width) rounded-lg p-3.5 gap-2.5 text-sm [&amp;&gt;[data-slot=alert-icon]&gt;svg]:size-5 *:data-slot=alert-icon:mt-0 [&amp;_[data-slot=alert-close]]:mt-0.5 bg-primary text-primary-foreground"><div data-slot="alert-icon" class="shrink-0"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="remixicon "><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg></div><div data-slot="alert-content" class="space-y-2 [&amp;_[data-slot=alert-title]]:font-semibold"><div data-slot="alert-title" class="grow tracking-tight">Example Alert Title</div><div data-slot="alert-description" class="text-sm [&amp;_p]:leading-relaxed [&amp;_p]:mb-2"><p>Insert the alert description here. This is an example of a two-line message for better visual clarity.</p><div class="space-x-3.5"><button data-slot="button" class="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center has-data-[arrow=true]:justify-between whitespace-nowrap ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&amp;_svg]:shrink-0 gap-1.5 text-[0.8125rem] leading-(--text-sm--line-height) [&amp;_svg:not([class*=size-])]:size-4 h-auto p-0 bg-transparent rounded-none hover:bg-transparent data-[state=open]:bg-transparent font-medium text-inherit [&amp;_svg:not([role=img]):not([class*=text-])]:opacity-60 underline underline-offset-4 decoration-solid">Upgrade</button><button data-slot="button" class="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center has-data-[arrow=true]:justify-between whitespace-nowrap ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&amp;_svg]:shrink-0 gap-1.5 text-[0.8125rem] leading-(--text-sm--line-height) [&amp;_svg:not([class*=size-])]:size-4 h-auto p-0 bg-transparent rounded-none hover:bg-transparent data-[state=open]:bg-transparent font-medium text-inherit [&amp;_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-solid">Dismiss</button></div></div></div></div><div data-slot="alert" role="alert" class="flex items-stretch w-full group-[.toaster]:w-(--width) rounded-lg p-3.5 gap-2.5 text-sm [&amp;&gt;[data-slot=alert-icon]&gt;svg]:size-5 *:data-slot=alert-icon:mt-0 [&amp;_[data-slot=alert-close]]:mt-0.5 bg-[var(--color-destructive-soft,var(--color-red-50))] border border-[var(--color-destructive-alpha,var(--color-red-100))] text-foreground [&amp;_[data-slot=alert-icon]]:text-destructive dark:bg-[var(--color-destructive-soft,var(--color-red-950))] dark:border-[var(--color-destructive-alpha,var(--color-red-900))]"><div data-slot="alert-icon" class="shrink-0"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="remixicon "><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg></div><div data-slot="alert-content" class="space-y-2 [&amp;_[data-slot=alert-title]]:font-semibold"><div data-slot="alert-title" class="grow tracking-tight">Example Alert Title</div><div data-slot="alert-description" class="text-sm [&amp;_p]:leading-relaxed [&amp;_p]:mb-2"><p>Insert the alert description here. This is an example of a two-line message for better visual clarity.</p><div class="space-x-3.5"><button data-slot="button" class="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center has-data-[arrow=true]:justify-between whitespace-nowrap ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&amp;_svg]:shrink-0 gap-1.5 text-[0.8125rem] leading-(--text-sm--line-height) [&amp;_svg:not([class*=size-])]:size-4 h-auto p-0 bg-transparent rounded-none hover:bg-transparent data-[state=open]:bg-transparent font-medium text-foreground [&amp;_svg:not([role=img]):not([class*=text-])]:opacity-60 underline underline-offset-4 decoration-solid">Upgrade</button><button data-slot="button" class="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center has-data-[arrow=true]:justify-between whitespace-nowrap ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&amp;_svg]:shrink-0 gap-1.5 text-[0.8125rem] leading-(--text-sm--line-height) [&amp;_svg:not([class*=size-])]:size-4 h-auto p-0 bg-transparent rounded-none hover:bg-transparent data-[state=open]:bg-transparent font-medium text-foreground [&amp;_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-solid">Dismiss</button></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.