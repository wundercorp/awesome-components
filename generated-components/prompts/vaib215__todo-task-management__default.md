# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/vaib215/todo-task-management/default
- Registry URL: https://21st.dev/r/vaib215/todo-task-management
- Author: vaib215
- Component slug: todo-task-management
- Demo slug: default
- Title: todo-task-management
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/vaib215/todo-task-management with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/vaib215__todo-task-management__default.html
- Local screenshot file: generated-21st-prompts/screenshots/vaib215__todo-task-management__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen w-full flex items-start justify-center pt-20 p-8 bg-background"><div class="w-full max-w-2xl mx-auto relative"><div class="flex gap-0 border-b border-border relative"><input placeholder="Add a task..." class="flex-1 bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors" type="text" value=""><button class="px-6 border-l border-border hover:bg-accent transition-colors duration-200"><span class="text-sm font-medium">Add</span></button></div><div class="divide-y divide-border relative"><div class="group flex items-center gap-0 hover:bg-accent/50 transition-all duration-200 overflow-hidden" style="opacity: 1; height: auto;"><button class="flex items-center justify-center w-12 h-12 border-r border-border transition-colors"><div class="w-4 h-4 border border-foreground transition-all duration-300"></div></button><div class="flex-1 px-4 py-3"><span class="text-foreground transition-all duration-300">Do more of what makes you happy</span></div><button class="w-12 h-12 border-l border-border opacity-0 group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive transition-all duration-200"><span class="text-sm">×</span></button></div><div class="group flex items-center gap-0 hover:bg-accent/50 transition-all duration-200 overflow-hidden" style="opacity: 1; height: auto;"><button class="flex items-center justify-center w-12 h-12 border-r border-border transition-colors"><div class="w-4 h-4 border border-foreground transition-all duration-300 bg-foreground"></div></button><div class="flex-1 px-4 py-3"><span class="text-foreground transition-all duration-300 opacity-40 line-through decoration-foreground/40">Focus on progress, not perfection</span></div><button class="w-12 h-12 border-l border-border opacity-0 group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive transition-all duration-200"><span class="text-sm">×</span></button></div><div class="group flex items-center gap-0 hover:bg-accent/50 transition-all duration-200 overflow-hidden" style="opacity: 1; height: auto;"><button class="flex items-center justify-center w-12 h-12 border-r border-border transition-colors"><div class="w-4 h-4 border border-foreground transition-all duration-300"></div></button><div class="flex-1 px-4 py-3"><span class="text-foreground transition-all duration-300">Create something meaningful today</span></div><button class="w-12 h-12 border-l border-border opacity-0 group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive transition-all duration-200"><span class="text-sm">×</span></button></div></div><div class="flex items-center justify-between px-4 py-3 border-t border-border text-xs text-muted-foreground"><span>2 of 3 tasks remaining</span><button class="hover:text-foreground transition-colors duration-200">Clear completed</button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.