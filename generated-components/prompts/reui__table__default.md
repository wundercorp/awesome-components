# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reui/table/default
- Registry URL: https://21st.dev/r/reui/table
- Author: reui
- Component slug: table
- Demo slug: default
- Title: table
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reui/table with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reui__table__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reui__table__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col gap-5 p-10 w-full mx-auto max-w-[650px] h-screen justify-center items-center"><div data-slot="table-wrapper" class="relative w-full overflow-auto"><table data-slot="table" class="w-full caption-bottom text-foreground text-sm"><caption data-slot="table-caption" class="mt-4 text-sm text-muted-foreground">A list of your active and past subscriptions.</caption><thead data-slot="table-header" class="[&amp;_tr]:border-b"><tr data-slot="table-row" class="border-b transition-colors [&amp;:has(td):hover]:bg-muted/50 data-[state=selected]:bg-muted"><th data-slot="table-head" class="h-12 px-4 text-left rtl:text-right align-middle font-normal text-muted-foreground [&amp;:has([role=checkbox])]:pe-0 w-[120px]">Ref ID</th><th data-slot="table-head" class="h-12 px-4 text-left rtl:text-right align-middle font-normal text-muted-foreground [&amp;:has([role=checkbox])]:pe-0">Customer Name</th><th data-slot="table-head" class="h-12 px-4 text-left rtl:text-right align-middle font-normal text-muted-foreground [&amp;:has([role=checkbox])]:pe-0">Plan</th><th data-slot="table-head" class="h-12 px-4 text-left rtl:text-right align-middle font-normal text-muted-foreground [&amp;:has([role=checkbox])]:pe-0">Status</th><th data-slot="table-head" class="h-12 px-4 text-left rtl:text-right align-middle font-normal text-muted-foreground [&amp;:has([role=checkbox])]:pe-0">Renewal Date</th><th data-slot="table-head" class="h-12 px-4 rtl:text-right align-middle font-normal text-muted-foreground [&amp;:has([role=checkbox])]:pe-0 text-right">Amount</th></tr></thead><tbody data-slot="table-body" class="[&amp;_tr:last-child]:border-0"><tr data-slot="table-row" class="border-b transition-colors [&amp;:has(td):hover]:bg-muted/50 data-[state=selected]:bg-muted"><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0 font-medium">SUB001</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">John Doe</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">Pro</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0"><span class="text-green-600">Active</span></td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">2024-02-15</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0 text-right">$49.99</td></tr><tr data-slot="table-row" class="border-b transition-colors [&amp;:has(td):hover]:bg-muted/50 data-[state=selected]:bg-muted"><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0 font-medium">SUB002</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">Jane Smith</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">Basic</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0"><span class="text-red-600">Cancelled</span></td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">2024-01-10</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0 text-right">$19.99</td></tr><tr data-slot="table-row" class="border-b transition-colors [&amp;:has(td):hover]:bg-muted/50 data-[state=selected]:bg-muted"><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0 font-medium">SUB003</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">Michael Brown</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">Enterprise</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0"><span class="text-yellow-600">Pending</span></td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">2024-03-01</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0 text-right">$99.99</td></tr><tr data-slot="table-row" class="border-b transition-colors [&amp;:has(td):hover]:bg-muted/50 data-[state=selected]:bg-muted"><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0 font-medium">SUB004</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">Emily Johnson</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">Pro</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0"><span class="text-green-600">Active</span></td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">2024-02-20</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0 text-right">$49.99</td></tr><tr data-slot="table-row" class="border-b transition-colors [&amp;:has(td):hover]:bg-muted/50 data-[state=selected]:bg-muted"><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0 font-medium">SUB005</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">David Wilson</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">Basic</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0"><span class="text-green-600">Active</span></td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0">2024-02-05</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0 text-right">$19.99</td></tr></tbody><tfoot data-slot="table-footer" class="border-t bg-muted/50 font-medium last:[&amp;&gt;tr]:border-b-0"><tr data-slot="table-row" class="border-b transition-colors [&amp;:has(td):hover]:bg-muted/50 data-[state=selected]:bg-muted"><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0" colspan="5">Total Revenue</td><td data-slot="table-cell" class="p-4 align-middle [&amp;:has([role=checkbox])]:pe-0 text-right">$119.97</td></tr></tfoot></table></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.