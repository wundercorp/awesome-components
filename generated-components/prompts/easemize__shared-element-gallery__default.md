# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/easemize/shared-element-gallery/default
- Registry URL: https://21st.dev/r/easemize/shared-element-gallery
- Author: easemize
- Component slug: shared-element-gallery
- Demo slug: default
- Title: shared-element-gallery
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/easemize/shared-element-gallery with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/easemize__shared-element-gallery__default.html
- Local screenshot file: generated-21st-prompts/screenshots/easemize__shared-element-gallery__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full self-start min-h-screen bg-background"><div class="max-w-7xl mx-auto px-6 py-24"><header class="mb-16 space-y-4"><h1 class="text-5xl font-bold tracking-tight text-primary">Curated Spaces</h1><p class="text-xl text-muted-foreground max-w-2xl">A premium photo experience with seamless shared-element transitions. Tap any image to expand, drag vertically to dismiss.</p></header><div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4"><div class="relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden" tabindex="0"><img alt="Premium photography 1" class="w-full h-auto object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/215f11bd-8f46-486d-8b18-377cf347096f_3840w.webp" style="opacity: 1;"><div class="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" style="opacity: 0;"></div></div><div class="relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden" tabindex="0"><img alt="Premium photography 2" class="w-full h-auto object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/edaf8dff-6ac4-4fed-b5ff-f41e6863a090_3840w.jpg" style="opacity: 1;"><div class="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" style="opacity: 0;"></div></div><div class="relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden" tabindex="0"><img alt="Premium photography 3" class="w-full h-auto object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ab0a4be-b66e-441b-9576-a9d5ac06f8fb_3840w.jpg" style="opacity: 1;"><div class="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" style="opacity: 0;"></div></div><div class="relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden" tabindex="0"><img alt="Premium photography 4" class="w-full h-auto object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32ecf28d-1c1d-4769-9096-c1094771e78c_3840w.webp" style="opacity: 1;"><div class="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" style="opacity: 0;"></div></div><div class="relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden" tabindex="0"><img alt="Premium photography 5" class="w-full h-auto object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e5d812f-98e8-460c-ab63-780281a96167_3840w.jpg" style="opacity: 1;"><div class="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" style="opacity: 0;"></div></div><div class="relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden" tabindex="0"><img alt="Premium photography 6" class="w-full h-auto object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b2eae1d-50c9-4fc6-bc0b-6e04ab1507b1_3840w.webp" style="opacity: 1;"><div class="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" style="opacity: 0;"></div></div><div class="relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden" tabindex="0"><img alt="Premium photography 7" class="w-full h-auto object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/765e26b6-040b-48cb-96df-db0ea0f7f300_3840w.jpg" style="opacity: 1;"><div class="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" style="opacity: 0;"></div></div><div class="relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden" tabindex="0"><img alt="Premium photography 8" class="w-full h-auto object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00d83233-ec00-4110-bf1d-95338af5875e_3840w.jpg" style="opacity: 1;"><div class="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" style="opacity: 0;"></div></div><div class="relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden" tabindex="0"><img alt="Premium photography 9" class="w-full h-auto object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60645413-4071-4ba2-9dca-f0008184633d_3840w.jpg" style="opacity: 1;"><div class="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" style="opacity: 0;"></div></div><div class="relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden" tabindex="0"><img alt="Premium photography 10" class="w-full h-auto object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df91b8b5-69b1-4e4e-b5e1-6716a8c8bcf1_3840w.jpg" style="opacity: 1;"><div class="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" style="opacity: 0;"></div></div><div class="relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden" tabindex="0"><img alt="Premium photography 11" class="w-full h-auto object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2d21a7c-b90f-4b76-b3a7-15903b6f8bf5_3840w.webp" style="opacity: 1;"><div class="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" style="opacity: 0;"></div></div><div class="relative mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden" tabindex="0"><img alt="Premium photography 12" class="w-full h-auto object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f3f7238-ddee-4491-88ab-3db3caaaf654_3840w.webp" style="opacity: 1;"><div class="absolute inset-0 bg-black/10 pointer-events-none rounded-xl" style="opacity: 0;"></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.