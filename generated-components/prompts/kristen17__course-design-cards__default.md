# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kristen17/course-design-cards/default
- Registry URL: https://21st.dev/r/kristen17/course-design-cards
- Author: kristen17
- Component slug: course-design-cards
- Demo slug: default
- Title: course-design-cards
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kristen17/course-design-cards with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kristen17__course-design-cards__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kristen17__course-design-cards__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section><div class="card green"><div class="card-header"><div class="date">Feb 2, 2021</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0" clip-rule="evenodd"></path></svg></div><div class="card-body"><h3>web designing</h3><p>Prototyping</p><div class="progress"><span>Progress</span><div class="progress-bar"></div><span>90%</span></div></div><div class="card-footer"><ul><li><img alt="User 1" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"></li><li><img alt="User 2" src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"></li><li><a href="#" class="btn-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"></path></svg></a></li></ul><a href="#" class="btn-countdown">2 days left</a></div></div><div class="card orange"><div class="card-header"><div class="date">Feb 05, 2021</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0" clip-rule="evenodd"></path></svg></div><div class="card-body"><h3>mobile app</h3><p>Shopping</p><div class="progress"><span>Progress</span><div class="progress-bar"></div><span>30%</span></div></div><div class="card-footer"><ul><li><img alt="User 3" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"></li><li><img alt="User 4" src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"></li><li><a href="#" class="btn-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"></path></svg></a></li></ul><a href="#" class="btn-countdown">3 weeks left</a></div></div><div class="card red"><div class="card-header"><div class="date">March 03, 2021</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0" clip-rule="evenodd"></path></svg></div><div class="card-body"><h3>dashboard</h3><p>Medical</p><div class="progress"><span>Progress</span><div class="progress-bar"></div><span>50%</span></div></div><div class="card-footer"><ul><li><img alt="User 5" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"></li><li><img alt="User 6" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"></li><li><a href="#" class="btn-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"></path></svg></a></li></ul><a href="#" class="btn-countdown">3 weeks left</a></div></div><div class="card blue"><div class="card-header"><div class="date">March 08, 2021</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0" clip-rule="evenodd"></path></svg></div><div class="card-body"><h3>web designing</h3><p>Wireframing</p><div class="progress"><span>Progress</span><div class="progress-bar"></div><span>20%</span></div></div><div class="card-footer"><ul><li><img alt="Erik Longman" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"></li><li><img alt="Jane Doe" src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"></li><li><a href="#" class="btn-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"></path></svg></a></li></ul><a href="#" class="btn-countdown">3 weeks left</a></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.