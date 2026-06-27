# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/antdesign/button-ant/button-sizes
- Registry URL: https://21st.dev/r/antdesign/button-ant
- Author: antdesign
- Component slug: button-ant
- Demo slug: button-sizes
- Title: button-ant
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/antdesign/button-ant with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/antdesign__button-ant__button-sizes.html
- Local screenshot file: generated-21st-prompts/screenshots/antdesign__button-ant__button-sizes.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="ant-radio-group ant-radio-group-outline css-xepvsj"><label class="ant-radio-button-wrapper ant-radio-button-wrapper-checked css-xepvsj"><span class="ant-radio-button ant-radio-button-checked"><input class="ant-radio-button-input" type="radio" value="large" checked="" name="«r0»"><span class="ant-radio-button-inner"></span></span><span class="ant-radio-button-label">Large</span></label><label class="ant-radio-button-wrapper css-xepvsj"><span class="ant-radio-button"><input class="ant-radio-button-input" type="radio" value="default" name="«r0»"><span class="ant-radio-button-inner"></span></span><span class="ant-radio-button-label">Default</span></label><label class="ant-radio-button-wrapper css-xepvsj"><span class="ant-radio-button"><input class="ant-radio-button-input" type="radio" value="small" name="«r0»"><span class="ant-radio-button-inner"></span></span><span class="ant-radio-button-label">Small</span></label></div><div class="ant-flex css-xepvsj ant-flex-align-flex-start ant-flex-gap-small ant-flex-vertical"><div class="ant-flex css-xepvsj ant-flex-wrap-wrap ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-lg"><span>Primary</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-lg"><span>Default</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-dashed ant-btn-color-default ant-btn-variant-dashed ant-btn-lg"><span>Dashed</span></button></div><button type="button" class="ant-btn css-xepvsj ant-btn-link ant-btn-color-link ant-btn-variant-link ant-btn-lg"><span>Link</span></button><div class="ant-flex css-xepvsj ant-flex-wrap-wrap ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-lg ant-btn-icon-only"><span class="ant-btn-icon"><span role="img" aria-label="download" class="anticon anticon-download"><svg viewBox="64 64 896 896" focusable="false" data-icon="download" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg></span></span></button><button type="button" class="ant-btn css-xepvsj ant-btn-circle ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-lg ant-btn-icon-only"><span class="ant-btn-icon"><span role="img" aria-label="download" class="anticon anticon-download"><svg viewBox="64 64 896 896" focusable="false" data-icon="download" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg></span></span></button><button type="button" class="ant-btn css-xepvsj ant-btn-round ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-lg ant-btn-icon-only"><span class="ant-btn-icon"><span role="img" aria-label="download" class="anticon anticon-download"><svg viewBox="64 64 896 896" focusable="false" data-icon="download" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg></span></span></button><button type="button" class="ant-btn css-xepvsj ant-btn-round ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-lg"><span class="ant-btn-icon"><span role="img" aria-label="download" class="anticon anticon-download"><svg viewBox="64 64 896 896" focusable="false" data-icon="download" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg></span></span><span>Download</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-lg"><span class="ant-btn-icon"><span role="img" aria-label="download" class="anticon anticon-download"><svg viewBox="64 64 896 896" focusable="false" data-icon="download" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg></span></span><span>Download</span></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.