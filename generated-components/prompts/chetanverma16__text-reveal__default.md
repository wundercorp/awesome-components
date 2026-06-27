# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/chetanverma16/text-reveal/default
- Registry URL: https://21st.dev/r/chetanverma16/text-reveal
- Author: chetanverma16
- Component slug: text-reveal
- Demo slug: default
- Title: text-reveal
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/chetanverma16/text-reveal with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/chetanverma16__text-reveal__default.html
- Local screenshot file: generated-21st-prompts/screenshots/chetanverma16__text-reveal__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-6xl flex flex-col items-center justify-center gap-8 p-10"><div class="flex text-4xl lg:text-5xl py-10" style="gap: 10px;"><div style="translate: none; rotate: none; scale: none; filter: blur(0px); opacity: 1; transform: translate(0px, 0px);"><div style="letter-spacing: 10px;">Text</div></div><div style="translate: none; rotate: none; scale: none; filter: blur(0px); opacity: 1; transform: translate(0px, 0px);"><div style="letter-spacing: 10px;">Reveal</div></div><div style="translate: none; rotate: none; scale: none; filter: blur(0px); opacity: 1; transform: translate(0px, 0px);"><div style="letter-spacing: 10px;">Effect</div></div></div><div class="space-y-2 w-full"><div class="space-y-2"><label class="text-sm font-medium">Text</label><input class="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your text..." type="text" value="Text Reveal Effect"></div><div class="space-y-2"><label class="text-sm font-medium">Split By</label><select class="w-full p-2 border border-gray-300 rounded-md"><option value="word">Word</option><option value="character">Character</option></select></div><div class="space-y-2"><label class="text-sm font-medium">Effect</label><select class="w-full p-2 border border-gray-300 rounded-md"><option value="revealX">Reveal X</option><option value="revealY">Reveal Y</option><option value="revealXY">Reveal XY</option><option value="revealXReverse">Reveal X Reverse</option><option value="revealYReverse">Reveal Y Reverse</option><option value="revealXYReverse">Reveal XY Reverse</option><option value="scale">Scale</option></select></div><div class="space-y-2"><label class="text-sm font-medium">Duration: 0.5s</label><input min="0.1" max="2" step="0.1" class="w-full" type="range" value="0.5"></div><div class="space-y-2"><label class="text-sm font-medium">Stagger: 0.1s</label><input min="0" max="0.5" step="0.01" class="w-full" type="range" value="0.1"></div><div class="space-y-2"><label class="text-sm font-medium">Blur: 10px</label><input min="0" max="20" step="1" class="w-full" type="range" value="10"></div><div class="space-y-2"><label class="text-sm font-medium">Word Spacing: 1</label><input min="0" max="5" step="0.1" class="w-full" type="range" value="1"></div><div class="space-y-2"><label class="text-sm font-medium">Character Spacing: 1</label><input min="0" max="5" step="0.1" class="w-full" type="range" value="1"></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.