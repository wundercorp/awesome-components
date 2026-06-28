# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/contributors-overview-table/default
- Registry URL: https://21st.dev/r/ruixenui/contributors-overview-table
- Author: ruixenui
- Component slug: contributors-overview-table
- Demo slug: default
- Title: contributors-overview-table
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/contributors-overview-table with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__contributors-overview-table__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__contributors-overview-table__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_DemoOne">DemoOne</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="max-w-3xl mx-auto rounded-xl border border-border bg-background p-6 shadow-sm"><h2 class="mb-4 text-xl font-semibold text-foreground">Team Contributors</h2><div class="relative w-full overflow-auto"><table class="w-full caption-bottom text-sm table-fixed"><thead class=""><tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><th class="h-12 px-3 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:w-px [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 w-[180px]">Name</th><th class="h-12 px-3 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:w-px [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">Email</th><th class="h-12 px-3 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:w-px [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">Location</th><th class="h-12 px-3 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:w-px [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">Status</th><th class="h-12 px-3 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:w-px [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 text-right">Payout</th></tr></thead><tbody class="[&amp;_tr:last-child]:border-0"><tr class="border-b border-border data-[state=selected]:bg-muted hover:bg-muted/40 transition-colors"><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 font-medium">Aarav Mehta</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">aarav@ruixen.dev</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">Bangalore, India</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5"><span class="inline-block rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-700">Active</span></td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 text-right">₹45,000</td></tr><tr class="border-b border-border data-[state=selected]:bg-muted hover:bg-muted/40 transition-colors"><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 font-medium">Elena Torres</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">elena.t@ruixen.dev</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">Barcelona, Spain</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5"><span class="inline-block rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-700">Active</span></td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 text-right">₹22,000</td></tr><tr class="border-b border-border data-[state=selected]:bg-muted hover:bg-muted/40 transition-colors"><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 font-medium">Kenji Nakamura</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">kenji.n@ruixen.dev</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">Tokyo, Japan</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5"><span class="inline-block rounded-full px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-700">Inactive</span></td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 text-right">₹0</td></tr><tr class="border-b border-border data-[state=selected]:bg-muted hover:bg-muted/40 transition-colors"><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 font-medium">Leila Ahmed</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">leila.a@ruixen.dev</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">Cairo, Egypt</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5"><span class="inline-block rounded-full px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700">Pending</span></td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 text-right">₹10,000</td></tr><tr class="border-b border-border data-[state=selected]:bg-muted hover:bg-muted/40 transition-colors"><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 font-medium">Ryan Smith</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">ryan.s@ruixen.dev</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5">Toronto, Canada</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5"><span class="inline-block rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-700">Active</span></td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 text-right">₹31,500</td></tr></tbody><tfoot class="border-t border-border bg-muted/50 font-medium [&amp;&gt;tr]:last:border-b-0"><tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 text-right font-semibold" colspan="4">Total</td><td class="p-3 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-0.5 text-right font-bold text-foreground">₹1,08,500</td></tr></tfoot></table></div><p class="mt-4 text-center text-sm text-muted-foreground">contributors payout summary</p></div></div></div>
```

## Public registry source files

No public registry source files were available.