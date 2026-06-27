# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/danielpetho/use-elastic-line-events/default
- Registry URL: https://21st.dev/r/danielpetho/use-elastic-line-events
- Author: danielpetho
- Component slug: use-elastic-line-events
- Demo slug: default
- Title: use-elastic-line-events
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/danielpetho/use-elastic-line-events with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/danielpetho__use-elastic-line-events__default.html
- Local screenshot file: generated-21st-prompts/screenshots/danielpetho__use-elastic-line-events__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-4xl mx-auto"><div class="space-y-4"><div class="space-y-2"><h3 class="text-lg font-medium">Vertical Elastic Line</h3><p class="text-sm text-muted-foreground">Move your cursor near the center line</p></div><div class="relative aspect-square w-full border rounded-lg bg-muted/30"><svg class="w-full h-full" viewBox="0 0 400 400" style="touch-action: none;"><path d="M 200,0 Q -180,0 200,400" stroke="#94a3b8" stroke-width="2" fill="none"></path></svg></div></div><div class="space-y-4"><div class="space-y-2"><h3 class="text-lg font-medium">Horizontal Elastic Line</h3><p class="text-sm text-muted-foreground">Move your cursor near the center line</p></div><div class="relative aspect-square w-full border rounded-lg bg-muted/30"><svg class="w-full h-full" viewBox="0 0 400 400" style="touch-action: none;"><path d="M 0,200 Q 0,-180 400,200" stroke="#94a3b8" stroke-width="2" fill="none"></path></svg></div></div><div class="md:col-span-2"><div class="space-y-4 p-6 border rounded-lg"><h3 class="text-lg font-medium">About useElasticLineEvents</h3><div class="space-y-4"><pre class="bg-muted p-4 rounded-md text-xs overflow-x-auto">const { isGrabbed, controlPoint } = useElasticLineEvents(
  svgRef,      // SVG element ref
  isVertical,  // boolean
  grabThreshold,    // number (px)
  releaseThreshold  // number (px)
)</pre><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"><div><h4 class="font-medium mb-2">Features</h4><ul class="list-disc list-inside space-y-1 text-muted-foreground"><li>Mouse position tracking</li><li>Automatic grab/release</li><li>Responsive control points</li><li>Vertical/horizontal modes</li></ul></div><div><h4 class="font-medium mb-2">Use Cases</h4><ul class="list-disc list-inside space-y-1 text-muted-foreground"><li>Interactive dividers</li><li>Navigation indicators</li><li>Playful UI elements</li><li>Custom cursors</li></ul></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.