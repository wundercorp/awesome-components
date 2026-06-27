# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/pate1kiran/daybreak-text-reveal/default
- Registry URL: https://21st.dev/r/pate1kiran/daybreak-text-reveal
- Author: pate1kiran
- Component slug: daybreak-text-reveal
- Demo slug: default
- Title: daybreak-text-reveal
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/pate1kiran/daybreak-text-reveal with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/pate1kiran__daybreak-text-reveal__default.html
- Local screenshot file: generated-21st-prompts/screenshots/pate1kiran__daybreak-text-reveal__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="daybreak"><div class="wordmark"><svg viewBox="0 0 954 224" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.3422 65.0859H0.00195312V183.474H44.3422C60.7983 183.474 74.9689 177.814 85.9397 166.494C96.9104 155.174 102.396 141.024 102.396 124.044C102.396 107.064 96.9104 92.9143 85.9397 81.5943C74.9689 70.7459 60.7983 65.0859 44.3422 65.0859ZM16.4581 167.438V81.1226H44.3422C56.2272 81.1226 65.8266 85.3676 74.0547 93.3859C81.8256 101.404 85.9397 111.781 85.9397 124.044C85.9397 136.308 81.8256 146.684 74.0547 154.703C66.2837 162.721 56.2272 166.966 44.3422 166.966H16.4581V167.438Z" fill="black"></path><path d="M181.937 95.2695H116.569V110.835H166.395V126.4H142.168C133.025 126.4 125.712 129.23 120.226 134.89C114.284 140.55 111.541 147.625 111.541 155.643C111.541 164.133 114.284 171.208 120.226 176.868C126.169 182.528 133.483 185.358 142.168 185.358C152.681 185.358 162.281 181.113 167.766 173.566V183.471H192.908V168.85H181.937V95.2695ZM143.996 170.736C134.397 170.736 127.083 164.605 127.083 155.643C127.083 147.153 134.397 141.021 143.996 141.021H166.395V154.228C166.395 164.133 157.253 170.736 143.996 170.736Z" fill="black"></path><path d="M342.667 93.8321C329.411 93.8321 318.44 99.0204 310.669 108.454V60.3438H295.127V183.92H310.669V171.185C318.44 181.09 328.954 185.807 342.667 185.807C355.009 185.807 365.066 181.562 373.294 172.6C381.522 163.639 385.636 152.79 385.636 139.584C385.636 126.849 381.522 115.529 373.294 107.039C364.609 98.0771 354.552 93.8321 342.667 93.8321ZM318.897 161.752C313.412 156.092 310.669 149.017 310.669 140.055C310.669 131.094 313.412 124.019 318.897 118.359C324.839 112.227 331.239 109.397 339.924 109.397C348.152 109.397 355.466 112.227 360.952 118.359C366.437 124.019 369.18 131.094 369.18 140.055C369.18 149.017 366.437 156.092 360.952 161.752C355.466 167.412 348.609 170.242 339.924 170.242C331.239 170.242 324.382 167.412 318.897 161.752Z" fill="black"></path><path d="M398.146 183.471H413.688V111.306H441.115V95.2695H398.146V183.471Z" fill="black"></path><path d="M489.116 93.3789C476.317 93.3789 465.346 97.6239 456.661 106.586C447.975 115.547 443.861 126.396 443.861 139.131C443.861 152.337 447.975 163.186 456.661 172.147C465.346 180.637 476.317 185.354 489.116 185.354C509.229 185.354 526.599 173.562 532.542 155.167L532.999 154.224H516.086V154.696C511.514 164.601 501.458 170.732 489.573 170.732C482.259 170.732 475.859 168.374 470.374 163.657C465.346 159.412 462.146 153.281 460.775 146.206H533.456L533.913 145.734V145.262C533.913 143.376 534.37 141.017 534.37 139.602C534.37 126.396 529.799 115.547 521.571 107.057C512.429 98.0956 501.915 93.3789 489.116 93.3789ZM489.116 108.472C503.286 108.472 514.714 117.906 517.914 132.056H460.775C463.517 117.434 474.488 108.472 489.116 108.472Z" fill="black"></path><path d="M616.196 95.2695H550.829V110.835H600.654V126.4H576.427C567.285 126.4 559.971 129.23 554.486 134.89C548.543 140.55 545.801 147.625 545.801 155.643C545.801 164.133 548.543 171.208 554.486 176.868C560.428 182.528 567.742 185.358 576.427 185.358C586.941 185.358 596.54 181.113 602.026 173.566V183.471H627.167V168.85H616.196V95.2695ZM578.256 170.736C568.657 170.736 561.343 164.605 561.343 155.643C561.343 147.153 568.657 141.021 578.256 141.021H600.654V154.228C600.654 164.133 591.512 170.736 578.256 170.736Z" fill="black"></path><path d="M239.071 163.19L211.187 95.2695H193.816L230.386 182.528L215.301 216.959L229.471 223.563L266.498 137.248L284.325 95.2695H266.955L239.071 163.19Z" fill="black"></path><path d="M682.478 139.146L711.734 101.413L699.849 91.9796L670.136 131.6H656.423V59.9062H640.881V183.483H656.423V146.693H670.136L698.02 183.483H717.219L682.478 139.146Z" fill="black"></path></svg></div><div class="scrim"><div></div></div><svg class="logomark" viewBox="0 0 200 199" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2254_253)"><g clip-path="url(#clip1_2254_253)"><g class="logomark-animate"><rect x="107.469" y="199.301" width="14.5784" height="71.4846" transform="rotate(179.9 107.469 199.301)" fill="black"></rect><rect x="106.959" y="75.4922" width="14" height="75.9607" transform="rotate(179.9 106.959 75.4922)" fill="black"></rect><rect x="143.756" y="9.25391" width="14.5784" height="75.6694" transform="rotate(29.36 143.756 9.25391)" fill="black"></rect><rect x="81.0488" y="120.723" width="14.5784" height="72.1569" transform="rotate(29.36 81.0488 120.723)" fill="black"></rect><rect x="182.494" y="44.0703" width="14.5784" height="74.1255" transform="rotate(59 182.494 44.0703)" fill="black"></rect><rect x="74.0938" y="109.203" width="14.5784" height="73.7623" transform="rotate(59 74.0938 109.203)" fill="black"></rect><rect x="154.41" y="183.598" width="14.5784" height="72.0479" transform="rotate(150.64 154.41 183.598)" fill="black"></rect><rect x="93.6016" y="75.5156" width="14.5784" height="76.0357" transform="rotate(150.64 93.6016 75.5156)" fill="black"></rect><rect x="189.061" y="147.113" width="14.5784" height="74.0452" transform="rotate(121 189.061 147.113)" fill="black"></rect><rect x="81.2207" y="82.3086" width="14.5784" height="74.4117" transform="rotate(121 81.2207 82.3086)" fill="black"></rect><rect x="126.053" y="109.227" width="14.5784" height="73.8174" transform="rotate(-90 126.053 109.227)" fill="black"></rect><rect x="0.0292969" y="109.227" width="14.5784" height="73.8174" transform="rotate(-90 0.0292969 109.227)" fill="black"></rect></g></g><path d="M125.99 109.126C126.647 106.523 126.998 103.645 126.998 100.492C126.998 85.3044 114.91 72.9922 99.998 72.9922C85.0864 72.9922 72.998 85.3044 72.998 100.492C72.998 103.65 73.3502 106.53 74.0083 109.137L100.005 82.6735L125.99 109.126Z" fill="black"></path></g><defs><clipPath id="clip0_2254_253"><rect width="200" height="110" fill="white" transform="translate(0 -1)"></rect></clipPath><clipPath id="clip1_2254_253"><rect width="200" height="205" fill="white" transform="translate(0.0292969 -0.96875)"></rect></clipPath></defs></svg></div></div></div></div>
```

## Public registry source files

No public registry source files were available.