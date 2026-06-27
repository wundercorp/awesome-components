# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/isaiahbjork/gradient-ai-chat-input/default
- Registry URL: https://21st.dev/r/isaiahbjork/gradient-ai-chat-input
- Author: isaiahbjork
- Component slug: gradient-ai-chat-input
- Demo slug: default
- Title: gradient-ai-chat-input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/isaiahbjork/gradient-ai-chat-input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/isaiahbjork__gradient-ai-chat-input__default.html
- Local screenshot file: generated-21st-prompts/screenshots/isaiahbjork__gradient-ai-chat-input__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen bg-background p-8"><div class="max-w-4xl mx-auto space-y-8 mt-12"><div class="text-center space-y-4"><h1 class="text-4xl font-bold text-foreground">Gradient AI Chat Input</h1></div><div class="space-y-6"><div class="relative" style="opacity: 1; transform: none;"><div class="relative"><div class="absolute inset-0 rounded-[20px] p-[0.5px]" style="background: conic-gradient(rgb(229, 217, 157) 0deg, rgb(230, 164, 157) 90deg, rgb(229, 155, 144) 180deg, rgb(229, 204, 186) 270deg, rgb(229, 217, 157) 360deg);"><div class="h-full w-full rounded-[19.5px] p-[2px]" style="background: conic-gradient(rgb(245, 233, 173) 0deg, rgb(246, 180, 173) 90deg, rgb(245, 171, 160) 180deg, rgb(245, 220, 186) 270deg, rgb(245, 233, 173) 360deg);"><div class="h-full w-full rounded-[17.5px] bg-background relative"><div class="absolute inset-0 rounded-[17.5px] p-[0.5px]" style="background: conic-gradient(rgba(229, 217, 157, 0.1) 0deg, rgba(230, 164, 157, 0.1) 90deg, rgba(229, 155, 144, 0.1) 180deg, rgba(229, 204, 186, 0.1) 270deg, rgba(229, 217, 157, 0.1) 360deg);"><div class="h-full w-full rounded-[17px] bg-background"></div></div><div class="absolute top-0 left-4 right-4 h-[0.5px] bg-gradient-to-r from-transparent via-[var(--top-highlight)]/30 to-transparent" style="--top-highlight: #F5E9AD;"></div><div class="absolute bottom-0 left-4 right-4 h-[0.5px] bg-gradient-to-r from-transparent via-[var(--bottom-highlight)]/20 to-transparent" style="--bottom-highlight: #F5ABA0;"></div></div></div></div><div class="relative p-4"><div class="flex items-start gap-3 mb-3"><div class="flex-1 relative"><textarea placeholder="Send message..." rows="1" class="w-full resize-none border-0 bg-transparent text-foreground placeholder:text-muted-foreground text-base leading-6 py-2 px-0 focus:outline-none focus:ring-0 outline-none overflow-hidden transition-colors duration-200" style="min-height: 40px; max-height: 120px; height: auto;"></textarea></div><button type="submit" disabled="" class="flex items-center justify-center w-8 h-8 mt-1 text-muted-foreground hover:text-foreground transition-colors opacity-50 cursor-not-allowed" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send w-4 h-4" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></button></div><div class="flex items-center gap-2"><button type="button" class="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors cursor-pointer bg-muted/30 hover:bg-muted/50" tabindex="0" style="border: 1px solid rgb(219, 219, 216);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image w-3 h-3" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span>Attach File</span></button><div class="relative"><button type="button" class="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors cursor-pointer bg-muted/30 hover:bg-muted/50" tabindex="0" style="border: 1px solid rgb(219, 219, 216);"><span class="text-muted-foreground font-medium">Select</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-3 h-3 transition-transform" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div></div></div><input multiple="" class="hidden" accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt" type="file"><div class="absolute -bottom-3 left-3 right-3 h-6 rounded-full blur-md" style="opacity: 1; background: linear-gradient(rgba(0, 0, 0, 0.1) 0%, transparent 100%);"></div><div class="absolute -left-2 top-3 bottom-3 w-4 rounded-full blur-sm" style="opacity: 1; background: linear-gradient(to right, rgba(0, 0, 0, 0.06) 0%, transparent 100%);"></div><div class="absolute -right-2 top-3 bottom-3 w-4 rounded-full blur-sm" style="opacity: 1; background: linear-gradient(to left, rgba(0, 0, 0, 0.06) 0%, transparent 100%);"></div><div class="absolute inset-0 rounded-[20px] shadow-lg pointer-events-none" style="opacity: 1; box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 25px;"></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.