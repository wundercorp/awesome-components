# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ephraimduncan/file-upload-1/multi-file-dropzone
- Registry URL: https://21st.dev/r/ephraimduncan/file-upload-1
- Author: ephraimduncan
- Component slug: file-upload-1
- Demo slug: multi-file-dropzone
- Title: file-upload-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ephraimduncan/file-upload-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ephraimduncan__file-upload-1__multi-file-dropzone.html
- Local screenshot file: generated-21st-prompts/screenshots/ephraimduncan__file-upload-1__multi-file-dropzone.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center p-10"><div class="rounded-lg border bg-card text-card-foreground shadow-sm sm:mx-auto sm:max-w-xl"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Set up your first cloud storage</h3><p class="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p></div><div class="p-6 pt-0"><form action="#" method="post"><div class="grid grid-cols-1 gap-4 sm:grid-cols-6"><div class="col-span-full sm:col-span-3"><label class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium" for="bucket-name">Bucket name</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2" id="bucket-name" placeholder="Bucket name" type="text" name="bucket-name"></div><div class="col-span-full sm:col-span-3"><label class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium" for="visibility">Visibility</label><button type="button" role="combobox" aria-controls="radix-«r0»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" disabled="" data-disabled="" class="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 mt-2 w-full" id="visibility" name="visibility"><span style="pointer-events: none;">Private</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button><select aria-hidden="true" tabindex="-1" disabled="" style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;"><option value="private" selected="">Private</option><option value="public">Public</option></select><p class="mt-2 text-sm text-muted-foreground">Only admins can change visibility.</p></div><div class="col-span-full"><label class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium" for="file-upload-2">File(s) upload</label><div role="presentation" tabindex="0" class="border-border mt-2 flex justify-center rounded-md border border-dashed px-6 py-20 transition-colors duration-200"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file mx-auto h-12 w-12 text-muted-foreground/80" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg><div class="mt-4 flex text-muted-foreground"><p>Drag and drop or</p><label for="file" class="relative cursor-pointer rounded-sm pl-1 font-medium text-primary hover:text-primary/80 hover:underline hover:underline-offset-4"><span>choose file(s)</span><input multiple="" tabindex="-1" id="file-upload-2" class="sr-only" type="file" name="file-upload-2" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: 0px -1px -1px 0px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;"></label><p class="pl-1">to upload</p></div></div></div><p class="mt-2 text-sm leading-5 text-muted-foreground sm:flex sm:items-center sm:justify-between"><span>All file types are allowed to upload.</span><span class="pl-1 sm:pl-0">Max. size per file: 50MB</span></p></div></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-6"></div><div class="flex items-center justify-end space-x-3"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" type="button">Cancel</button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" type="submit">Upload</button></div></form></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.