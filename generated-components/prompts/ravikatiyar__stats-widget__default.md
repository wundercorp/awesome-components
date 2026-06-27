# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/stats-widget/default
- Registry URL: https://21st.dev/r/ravikatiyar/stats-widget
- Author: ravikatiyar
- Component slug: stats-widget
- Demo slug: default
- Title: stats-widget
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/stats-widget with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__stats-widget__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__stats-widget__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><style>
                :root {
                  --background: 0 0% 100%;
                  --foreground: 222.2 84% 4.9%;
                  --card: 0 0% 100%;
                  --card-foreground: 222.2 84% 4.9%;
                  --muted: 210 40% 96.1%;
                  --muted-foreground: 215.4 16.3% 46.9%;
                  --border: 214.3 31.8% 91.4%;
                  --success: 142.1 76.2% 41.2%;
                  --destructive: 0 84.2% 60.2%;
                  --success-stroke: #22C55E;
                  --destructive-stroke: #F97316;
                  --diag-line-color: #e2e8f0;
                  --diag-bg-color: #f1f5f9;
                }
                
                .dark {
                  --background: 222.2 84% 4.9%;
                  --foreground: 210 40% 98%;
                  --card: 222.2 84% 4.9%;
                  --card-foreground: 210 40% 98%;
                  --muted: 217.2 32.6% 17.5%;
                  --muted-foreground: 215 20.2% 65.1%;
                  --border: 217.2 32.6% 17.5%;
                  --success: 142.1 70.2% 45.2%;
                  --destructive: 0 72.2% 50.6%;
                  --success-stroke: #22C55E;
                  --destructive-stroke: #F97316;
                  --diag-line-color: #1e293b;
                  --diag-bg-color: #0f172a;
                }

                .bg-background { background-color: hsl(var(--background)); }
                .text-foreground { color: hsl(var(--foreground)); }
                .bg-card { background-color: hsl(var(--card)); }
                .text-card-foreground { color: hsl(var(--card-foreground)); }
                .text-muted-foreground { color: hsl(var(--muted-foreground)); }
                .border { border-color: hsl(var(--border)); }
                .text-success { color: hsl(var(--success)); }
                .text-destructive { color: hsl(var(--destructive)); }
                
                @keyframes diagonal-scroll {
                    from { background-position: 0 0; }
                    to { background-position: -56px 56px; }
                }

                .diagonal-lines-bg {
                    background-color: var(--diag-bg-color);
                    background-image: repeating-linear-gradient(
                        45deg,
                        var(--diag-line-color) 0,
                        var(--diag-line-color) 1px,
                        transparent 1px,
                        transparent 28px
                    );
                    animation: diagonal-scroll 20s linear infinite;
                }
            </style><div class="w-full min-h-screen flex flex-col items-center justify-center font-sans p-4 diagonal-lines-bg bg-background transition-colors duration-300"><div class="w-full max-w-md bg-card text-card-foreground rounded-3xl shadow-lg p-6 border"><div class="flex justify-between items-center"><div class="flex flex-col w-1/2"><div class="flex items-center text-muted-foreground text-md"><span>This Week</span><span class="ml-2 flex items-center font-semibold text-success">20%<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up ml-1" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></span></div><p class="text-4xl font-bold text-foreground mt-2">$501</p></div><div class="w-1/2 h-16"><svg viewBox="0 0 150 60" class="w-full h-full" preserveAspectRatio="none"><defs><linearGradient id="areaGradientSuccess" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--success-stroke)" stop-opacity="0.4"></stop><stop offset="100%" stop-color="var(--success-stroke)" stop-opacity="0"></stop></linearGradient><linearGradient id="areaGradientDestructive" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--destructive-stroke)" stop-opacity="0.4"></stop><stop offset="100%" stop-color="var(--destructive-stroke)" stop-opacity="0"></stop></linearGradient></defs><path d="M 0 37.2 C 12.5,37.2 12.5,34.32 25,34.32 C 37.5,34.32 37.5,29.519999999999996 50,29.519999999999996 C 62.5,29.519999999999996 62.5,31.92 75,31.92 C 87.5,31.92 87.5,35.28 100,35.28 C 112.5,35.28 112.5,14.64 125,14.64 C 137.5,14.64 137.5,19.439999999999998 150,19.439999999999998 L 150 60 L 0 60 Z" fill="url(#areaGradientSuccess)" style="transition: opacity 0.8s ease-in-out 0.2s, fill 0.5s; opacity: 1;"></path><path d="M 0 37.2 C 12.5,37.2 12.5,34.32 25,34.32 C 37.5,34.32 37.5,29.519999999999996 50,29.519999999999996 C 62.5,29.519999999999996 62.5,31.92 75,31.92 C 87.5,31.92 87.5,35.28 100,35.28 C 112.5,35.28 112.5,14.64 125,14.64 C 137.5,14.64 137.5,19.439999999999998 150,19.439999999999998" fill="none" stroke="var(--success-stroke)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="transition: stroke-dashoffset 0.8s ease-in-out, stroke 0.5s; stroke-dasharray: 161.131, 161.131; stroke-dashoffset: 0;"></path></svg></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.