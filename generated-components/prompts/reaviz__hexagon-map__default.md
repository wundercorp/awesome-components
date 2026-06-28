# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reaviz/hexagon-map/default
- Registry URL: https://21st.dev/r/reaviz/hexagon-map
- Author: reaviz
- Component slug: hexagon-map
- Demo slug: default
- Title: hexagon-map
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reaviz/hexagon-map with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reaviz__hexagon-map__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reaviz__hexagon-map__default.png

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
<div id="root"><div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-300"><button aria-pressed="false" class="mb-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 dark:bg-yellow-700 dark:hover:bg-yellow-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Toggle Dark Mode (Off)</button><div class="flex flex-col justify-between pt-4 pb-4 bg-white dark:bg-black rounded-3xl shadow-[11px_21px_3px_rgba(0,0,0,0.06),14px_27px_7px_rgba(0,0,0,0.10),19px_38px_14px_rgba(0,0,0,0.13),27px_54px_27px_rgba(0,0,0,0.16),39px_78px_50px_rgba(0,0,0,0.20),55px_110px_86px_rgba(0,0,0,0.26)] w-[600px] h-[714px] overflow-hidden text-black dark:text-white transition-colors duration-300"><div class="flex justify-between items-center p-7 pt-6 pb-8"><h3 class="text-3xl text-left font-bold">Incident Report</h3><select aria-label="Select time range for incident report" class="p-3 pt-2 pb-2 rounded-md bg-gray-100 text-gray-800 dark:bg-[#262631] dark:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="last-7-days">Last 7 Days</option><option value="last-30-days">Last 30 Days</option><option value="last-90-days">Last 90 Days</option></select></div><div class="flex w-full flex-grow px-2 min-h-0"><div class="flex-grow h-full min-w-0"><div class="_container_1u3dt_1" width="100%" height="100%" style="height: 100%; width: 100%;"><svg width="556" height="288" class="_svg_1u3dt_30" tabindex="0"><g transform="translate(30, 10)"><g transform="translate(0, 240)" visibility="visible"><g transform="translate(33.65217391304348, 0)"><g transform="translate(0, 10)" font-size="11" font-family="sans-serif"><title>Mon</title><text transform="rotate(-60)" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">Mon</text></g></g><g transform="translate(108.43478260869566, 0)"><g transform="translate(0, 10)" font-size="11" font-family="sans-serif"><title>Tue</title><text transform="rotate(-60)" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">Tue</text></g></g><g transform="translate(183.2173913043478, 0)"><g transform="translate(0, 10)" font-size="11" font-family="sans-serif"><title>Wed</title><text transform="rotate(-60)" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">Wed</text></g></g><g transform="translate(258, 0)"><g transform="translate(0, 10)" font-size="11" font-family="sans-serif"><title>Thu</title><text transform="rotate(-60)" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">Thu</text></g></g><g transform="translate(332.7826086956522, 0)"><g transform="translate(0, 10)" font-size="11" font-family="sans-serif"><title>Fri</title><text transform="rotate(-60)" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">Fri</text></g></g><g transform="translate(407.5652173913044, 0)"><g transform="translate(0, 10)" font-size="11" font-family="sans-serif"><title>Sat</title><text transform="rotate(-60)" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">Sat</text></g></g><g transform="translate(482.3478260869565, 0)"><g transform="translate(0, 10)" font-size="11" font-family="sans-serif"><title>Sun</title><text transform="rotate(-60)" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">Sun</text></g></g></g><g transform="translate(0, 0)" visibility="visible"><g transform="translate(0, 226.32911392405063)"><g transform="translate(-10, 0)" font-size="11" font-family="sans-serif"><title>00h</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">00h</text></g></g><g transform="translate(0, 195.9493670886076)"><g transform="translate(-10, 0)" font-size="11" font-family="sans-serif"><title>03h</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">03h</text></g></g><g transform="translate(0, 165.56962025316454)"><g transform="translate(-10, 0)" font-size="11" font-family="sans-serif"><title>06h</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">06h</text></g></g><g transform="translate(0, 135.18987341772151)"><g transform="translate(-10, 0)" font-size="11" font-family="sans-serif"><title>09h</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">09h</text></g></g><g transform="translate(0, 104.81012658227849)"><g transform="translate(-10, 0)" font-size="11" font-family="sans-serif"><title>12h</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">12h</text></g></g><g transform="translate(0, 74.43037974683544)"><g transform="translate(-10, 0)" font-size="11" font-family="sans-serif"><title>15h</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">15h</text></g></g><g transform="translate(0, 44.050632911392405)"><g transform="translate(-10, 0)" font-size="11" font-family="sans-serif"><title>18h</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">18h</text></g></g><g transform="translate(0, 13.670886075949367)"><g transform="translate(-10, 0)" font-size="11" font-family="sans-serif"><title>21h</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F" class="fill-gray-600 dark:fill-gray-400 text-xs transition-colors duration-300">21h</text></g></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(0, 212.65822784810126)" tabindex="0" aria-label="Mon ∙ 00h: 5" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(0, 182.27848101265823)" tabindex="0" aria-label="Mon ∙ 03h: 10" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(0, 151.89873417721518)" tabindex="0" aria-label="Mon ∙ 06h: 15" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#E84045" stroke="#E84045" class="" transform="translate(0, 121.51898734177215)" tabindex="0" aria-label="Mon ∙ 09h: 20" role="graphics-document" opacity="1" style="fill: rgb(232, 64, 69); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#E84045" stroke="#E84045" class="" transform="translate(0, 91.13924050632912)" tabindex="0" aria-label="Mon ∙ 12h: 25" role="graphics-document" opacity="1" style="fill: rgb(232, 64, 69); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(0, 60.75949367088607)" tabindex="0" aria-label="Mon ∙ 15h: 10" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(0, 30.379746835443036)" tabindex="0" aria-label="Mon ∙ 18h: 5" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(0, 0)" tabindex="0" aria-label="Mon ∙ 21h: 2" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(74.78260869565217, 212.65822784810126)" tabindex="0" aria-label="Tue ∙ 00h: 2" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(74.78260869565217, 182.27848101265823)" tabindex="0" aria-label="Tue ∙ 03h: 8" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(74.78260869565217, 151.89873417721518)" tabindex="0" aria-label="Tue ∙ 06h: 12" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(74.78260869565217, 121.51898734177215)" tabindex="0" aria-label="Tue ∙ 09h: 18" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#E84045" stroke="#E84045" class="" transform="translate(74.78260869565217, 91.13924050632912)" tabindex="0" aria-label="Tue ∙ 12h: 30" role="graphics-document" opacity="1" style="fill: rgb(232, 64, 69); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(74.78260869565217, 60.75949367088607)" tabindex="0" aria-label="Tue ∙ 15h: 15" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(74.78260869565217, 30.379746835443036)" tabindex="0" aria-label="Tue ∙ 18h: 8" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(74.78260869565217, 0)" tabindex="0" aria-label="Tue ∙ 21h: 3" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(149.56521739130434, 212.65822784810126)" tabindex="0" aria-label="Wed ∙ 00h: 7" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(149.56521739130434, 182.27848101265823)" tabindex="0" aria-label="Wed ∙ 03h: 12" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(149.56521739130434, 151.89873417721518)" tabindex="0" aria-label="Wed ∙ 06h: 18" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#E84045" stroke="#E84045" class="" transform="translate(149.56521739130434, 121.51898734177215)" tabindex="0" aria-label="Wed ∙ 09h: 22" role="graphics-document" opacity="1" style="fill: rgb(232, 64, 69); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#E84045" stroke="#E84045" class="" transform="translate(149.56521739130434, 91.13924050632912)" tabindex="0" aria-label="Wed ∙ 12h: 20" role="graphics-document" opacity="1" style="fill: rgb(232, 64, 69); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(149.56521739130434, 60.75949367088607)" tabindex="0" aria-label="Wed ∙ 15h: 12" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(149.56521739130434, 30.379746835443036)" tabindex="0" aria-label="Wed ∙ 18h: 0" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(149.56521739130434, 0)" tabindex="0" aria-label="Wed ∙ 21h: 4" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(224.3478260869565, 212.65822784810126)" tabindex="0" aria-label="Thu ∙ 00h: 3" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(224.3478260869565, 182.27848101265823)" tabindex="0" aria-label="Thu ∙ 03h: 9" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(224.3478260869565, 151.89873417721518)" tabindex="0" aria-label="Thu ∙ 06h: 14" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(224.3478260869565, 121.51898734177215)" tabindex="0" aria-label="Thu ∙ 09h: 19" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#E84045" stroke="#E84045" class="" transform="translate(224.3478260869565, 91.13924050632912)" tabindex="0" aria-label="Thu ∙ 12h: 28" role="graphics-document" opacity="1" style="fill: rgb(232, 64, 69); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(224.3478260869565, 60.75949367088607)" tabindex="0" aria-label="Thu ∙ 15h: 13" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(224.3478260869565, 30.379746835443036)" tabindex="0" aria-label="Thu ∙ 18h: 7" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(224.3478260869565, 0)" tabindex="0" aria-label="Thu ∙ 21h: 0" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(299.1304347826087, 212.65822784810126)" tabindex="0" aria-label="Fri ∙ 00h: 10" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(299.1304347826087, 182.27848101265823)" tabindex="0" aria-label="Fri ∙ 03h: 15" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#E84045" stroke="#E84045" class="" transform="translate(299.1304347826087, 151.89873417721518)" tabindex="0" aria-label="Fri ∙ 06h: 20" role="graphics-document" opacity="1" style="fill: rgb(232, 64, 69); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#E84045" stroke="#E84045" class="" transform="translate(299.1304347826087, 121.51898734177215)" tabindex="0" aria-label="Fri ∙ 09h: 25" role="graphics-document" opacity="1" style="fill: rgb(232, 64, 69); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#E84045" stroke="#E84045" class="" transform="translate(299.1304347826087, 91.13924050632912)" tabindex="0" aria-label="Fri ∙ 12h: 22" role="graphics-document" opacity="1" style="fill: rgb(232, 64, 69); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(299.1304347826087, 60.75949367088607)" tabindex="0" aria-label="Fri ∙ 15h: 18" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(299.1304347826087, 30.379746835443036)" tabindex="0" aria-label="Fri ∙ 18h: 10" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(299.1304347826087, 0)" tabindex="0" aria-label="Fri ∙ 21h: 5" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(373.9130434782609, 212.65822784810126)" tabindex="0" aria-label="Sat ∙ 00h: 12" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(373.9130434782609, 182.27848101265823)" tabindex="0" aria-label="Sat ∙ 03h: 18" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#E84045" stroke="#E84045" class="" transform="translate(373.9130434782609, 151.89873417721518)" tabindex="0" aria-label="Sat ∙ 06h: 22" role="graphics-document" opacity="1" style="fill: rgb(232, 64, 69); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(373.9130434782609, 121.51898734177215)" tabindex="0" aria-label="Sat ∙ 09h: 15" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(373.9130434782609, 91.13924050632912)" tabindex="0" aria-label="Sat ∙ 12h: 10" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(373.9130434782609, 60.75949367088607)" tabindex="0" aria-label="Sat ∙ 15h: 8" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(373.9130434782609, 30.379746835443036)" tabindex="0" aria-label="Sat ∙ 18h: 5" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(373.9130434782609, 0)" tabindex="0" aria-label="Sat ∙ 21h: 3" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(448.695652173913, 212.65822784810126)" tabindex="0" aria-label="Sun ∙ 00h: 15" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#E84045" stroke="#E84045" class="" transform="translate(448.695652173913, 182.27848101265823)" tabindex="0" aria-label="Sun ∙ 03h: 20" role="graphics-document" opacity="1" style="fill: rgb(232, 64, 69); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#F8A340" stroke="#F8A340" class="" transform="translate(448.695652173913, 151.89873417721518)" tabindex="0" aria-label="Sun ∙ 06h: 10" role="graphics-document" opacity="1" style="fill: rgb(248, 163, 64); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(448.695652173913, 121.51898734177215)" tabindex="0" aria-label="Sun ∙ 09h: 8" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(448.695652173913, 91.13924050632912)" tabindex="0" aria-label="Sun ∙ 12h: 5" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(448.695652173913, 60.75949367088607)" tabindex="0" aria-label="Sun ∙ 15h: 3" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(448.695652173913, 30.379746835443036)" tabindex="0" aria-label="Sun ∙ 18h: 2" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g><g><g width="67.30434782608695" height="27.341772151898734" fill="#FFD440" stroke="#FFD440" class="" transform="translate(448.695652173913, 0)" tabindex="0" aria-label="Sun ∙ 21h: 1" role="graphics-document" opacity="1" style="fill: rgb(255, 212, 64); filter: drop-shadow(rgb(255, 212, 64) 0px 0px 5px); cursor: auto;"><path d="M 10.57237022219292 0
             L 5.28618511109646 8.323582900575634
             L -5.28618511109646 8.323582900575634
             L -10.57237022219292 0
             L -5.28618511109646 -8.323582900575634
             L 5.28618511109646 -8.323582900575634 Z" transform="translate(6, 8) rotate(90)"></path></g></g></g></svg></div></div><div class="_container_1gnp9_1 pl-1 pr-1 mt-8 !h-[180px] text-gray-600 dark:text-gray-400 transition-colors duration-300 text-xs _vertical_1gnp9_5"><div class="_start_1gnp9_9">30</div><div class="_gradient_1gnp9_16 !w-[20px]" style="background: linear-gradient(rgb(45, 162, 131) 0%, rgba(43, 156, 126, 0.945) 10%, rgba(41, 150, 121, 0.89) 20%, rgba(39, 144, 116, 0.83) 30%, rgba(37, 138, 111, 0.776) 40%, rgba(36, 131, 106, 0.72) 50%, rgba(34, 125, 101, 0.667) 60%, rgba(32, 119, 96, 0.61) 70%, rgba(30, 113, 91, 0.557) 80%, rgba(28, 107, 86, 0.5) 90%);"></div><div class="_end_1gnp9_10">0</div></div></div><div class="flex w-full pl-8 pr-8 justify-between pb-2 pt-8"><div class="flex flex-col gap-2 w-1/2"><span class="text-xl">Critical Incidents</span><div class="flex items-center gap-2"><span class="font-mono text-4xl font-semibold">321</span><div class="flex p-1 pl-2 pr-2 items-center rounded-full bg-red-500/30 dark:bg-[rgb(232,64,69)]/40 text-red-700 dark:text-[#F08083] transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-[21px]" viewBox="0 0 20 21" fill="none"><path d="M5.50134 9.11119L10.0013 4.66675M10.0013 4.66675L14.5013 9.11119M10.0013 4.66675L10.0013 16.3334" stroke="#F08083" stroke-width="2" stroke-linecap="square"></path></svg>12%</div></div><span class="text-gray-500 dark:text-[#9A9AAF] text-sm transition-colors duration-300">Compared to 293 last week</span></div><div class="flex flex-col gap-2 w-1/2"><span class="text-xl">Total Incidents</span><div class="flex items-center gap-2"><span class="font-mono text-4xl font-semibold">1,120</span><div class="flex p-1 pl-2 pr-2 items-center rounded-full bg-teal-500/30 dark:bg-[rgb(64,229,209)]/40 text-teal-700 dark:text-[#40E5D1] transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-[21px]" viewBox="0 0 20 21" fill="none"><path d="M14.4987 11.8888L9.99866 16.3333M9.99866 16.3333L5.49866 11.8888M9.99866 16.3333V4.66658" stroke="#40E5D1" stroke-width="2" stroke-linecap="square"></path></svg>4%</div></div><span class="text-gray-500 dark:text-[#9A9AAF] text-sm transition-colors duration-300">Compared to 1.06k last week</span></div></div><div class="flex flex-col pl-8 pr-8 font-mono divide-y divide-gray-200 dark:divide-[#262631] transition-colors duration-300"><div class="flex w-full py-3 items-center gap-2" style="opacity: 1; transform: none;"><div class="flex flex-row gap-2 items-center text-base w-1/2 text-gray-500 dark:text-[#9A9AAF] transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="none"><path d="M9.92844 1.25411C9.32947 1.25895 8.73263 1.49041 8.28293 1.94747L1.92062 8.41475C1.02123 9.32885 1.03336 10.8178 1.94748 11.7172L8.41476 18.0795C9.32886 18.9789 10.8178 18.9667 11.7172 18.0526L18.0795 11.5861C18.0798 11.5859 18.08 11.5856 18.0803 11.5853C18.979 10.6708 18.9667 9.18232 18.0526 8.28291L11.5853 1.92061C11.1283 1.47091 10.5274 1.24926 9.92844 1.25411ZM9.93901 2.49597C10.2155 2.49373 10.4926 2.59892 10.7089 2.81172L17.1762 9.17403C17.6087 9.59962 17.6139 10.2767 17.1884 10.7097L10.8261 17.1761C10.4005 17.6087 9.72379 17.614 9.29123 17.1884L2.82394 10.826C2.39139 10.4005 2.38613 9.72378 2.81174 9.29121L9.17404 2.82393C9.38684 2.60765 9.66256 2.4982 9.93901 2.49597ZM9.99028 5.40775C9.82481 5.41034 9.66711 5.47845 9.55178 5.59714C9.43645 5.71583 9.37289 5.87541 9.37505 6.04089V11.0409C9.37388 11.1237 9.38918 11.2059 9.42006 11.2828C9.45095 11.3596 9.4968 11.4296 9.55495 11.4886C9.6131 11.5476 9.6824 11.5944 9.75881 11.6264C9.83522 11.6583 9.91722 11.6748 10 11.6748C10.0829 11.6748 10.1649 11.6583 10.2413 11.6264C10.3177 11.5944 10.387 11.5476 10.4451 11.4886C10.5033 11.4296 10.5492 11.3596 10.58 11.2828C10.6109 11.2059 10.6262 11.1237 10.625 11.0409V6.04089C10.6261 5.95731 10.6105 5.87435 10.5789 5.79694C10.5474 5.71952 10.5006 5.64922 10.4415 5.59019C10.3823 5.53115 10.3119 5.48459 10.2344 5.45326C10.1569 5.42192 10.0739 5.40645 9.99028 5.40775ZM10 12.9159C9.77904 12.9159 9.56707 13.0037 9.41079 13.16C9.25451 13.3162 9.16672 13.5282 9.16672 13.7492C9.16672 13.9702 9.25451 14.1822 9.41079 14.3385C9.56707 14.4948 9.77904 14.5826 10 14.5826C10.2211 14.5826 10.433 14.4948 10.5893 14.3385C10.7456 14.1822 10.8334 13.9702 10.8334 13.7492C10.8334 13.5282 10.7456 13.3162 10.5893 13.16C10.433 13.0037 10.2211 12.9159 10 12.9159Z" fill="#E84045"></path></svg><span class="truncate" title="Mean Time to Respond">Mean Time to Respond</span></div><div class="flex gap-2 w-1/2 justify-end items-center"><span class="font-semibold text-xl">6 Hours</span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="14" fill="#E84045" fill-opacity="0.4"></rect><path d="M9.50134 12.6111L14.0013 8.16663M14.0013 8.16663L18.5013 12.6111M14.0013 8.16663L14.0013 19.8333" stroke="#F08083" stroke-width="2" stroke-linecap="square"></path></svg></div></div><div class="flex w-full py-3 items-center gap-2" style="opacity: 1; transform: none;"><div class="flex flex-row gap-2 items-center text-base w-1/2 text-gray-500 dark:text-[#9A9AAF] transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="none"><path d="M10.0001 1.66663C5.40511 1.66663 1.66675 5.40499 1.66675 9.99996C1.66675 14.5949 5.40511 18.3333 10.0001 18.3333C14.5951 18.3333 18.3334 14.5949 18.3334 9.99996C18.3334 5.40499 14.5951 1.66663 10.0001 1.66663ZM10.0001 2.91663C13.9195 2.91663 17.0834 6.08054 17.0834 9.99996C17.0834 13.9194 13.9195 17.0833 10.0001 17.0833C6.08066 17.0833 2.91675 13.9194 2.91675 9.99996C2.91675 6.08054 6.08066 2.91663 10.0001 2.91663ZM9.99032 5.82434C9.8247 5.82693 9.66688 5.89515 9.55152 6.01401C9.43616 6.13288 9.37271 6.29267 9.37508 6.45829V10.625C9.37391 10.7078 9.38921 10.79 9.42009 10.8669C9.45098 10.9437 9.49683 11.0137 9.55498 11.0726C9.61313 11.1316 9.68243 11.1785 9.75884 11.2104C9.83525 11.2424 9.91725 11.2589 10.0001 11.2589C10.0829 11.2589 10.1649 11.2424 10.2413 11.2104C10.3177 11.1785 10.387 11.1316 10.4452 11.0726C10.5033 11.0137 10.5492 10.9437 10.5801 10.8669C10.611 10.79 10.6263 10.7078 10.6251 10.625V6.45829C10.6263 6.37464 10.6107 6.2916 10.5792 6.21409C10.5477 6.13658 10.501 6.06618 10.4418 6.00706C10.3826 5.94794 10.3121 5.9013 10.2346 5.86992C10.157 5.83853 10.074 5.82303 9.99032 5.82434ZM10.0001 12.5C9.77907 12.5 9.56711 12.5878 9.41083 12.744C9.25455 12.9003 9.16675 13.1123 9.16675 13.3333C9.16675 13.5543 9.25455 13.7663 9.41083 13.9225C9.56711 14.0788 9.77907 14.1666 10.0001 14.1666C10.2211 14.1666 10.4331 14.0788 10.5893 13.9225C10.7456 13.7663 10.8334 13.5543 10.8334 13.3333C10.8334 13.1123 10.7456 12.9003 10.5893 12.744C10.4331 12.5878 10.2211 12.5 10.0001 12.5Z" fill="#E84045"></path></svg><span class="truncate" title="Incident Response Time">Incident Response Time</span></div><div class="flex gap-2 w-1/2 justify-end items-center"><span class="font-semibold text-xl">4 Hours</span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="14" fill="#E84045" fill-opacity="0.4"></rect><path d="M9.50134 12.6111L14.0013 8.16663M14.0013 8.16663L18.5013 12.6111M14.0013 8.16663L14.0013 19.8333" stroke="#F08083" stroke-width="2" stroke-linecap="square"></path></svg></div></div><div class="flex w-full py-3 items-center gap-2" style="opacity: 1; transform: none;"><div class="flex flex-row gap-2 items-center text-base w-1/2 text-gray-500 dark:text-[#9A9AAF] transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="none"><path d="M10.0001 2.10535C9.35241 2.10535 8.70472 2.42118 8.35459 3.05343L1.9044 14.7063C1.22414 15.9354 2.14514 17.5 3.5499 17.5H16.4511C17.8559 17.5 18.7769 15.9354 18.0966 14.7063L11.6456 3.05343C11.2955 2.42118 10.6478 2.10535 10.0001 2.10535ZM10.0001 3.31222C10.212 3.31222 10.4237 3.42739 10.5519 3.65889L17.0029 15.3117C17.2501 15.7585 16.9605 16.25 16.4511 16.25H3.5499C3.04051 16.25 2.7509 15.7585 2.99815 15.3117L9.44834 3.65889C9.57655 3.42739 9.78821 3.31222 10.0001 3.31222ZM9.99033 6.65776C9.82472 6.66034 9.6669 6.72856 9.55154 6.84743C9.43618 6.96629 9.37272 7.12609 9.3751 7.29171V11.4584C9.37393 11.5412 9.38923 11.6234 9.42011 11.7003C9.451 11.7771 9.49685 11.8471 9.555 11.9061C9.61315 11.965 9.68245 12.0119 9.75886 12.0438C9.83527 12.0758 9.91727 12.0923 10.0001 12.0923C10.0829 12.0923 10.1649 12.0758 10.2413 12.0438C10.3178 12.0119 10.387 11.965 10.4452 11.9061C10.5034 11.8471 10.5492 11.7771 10.5801 11.7003C10.611 11.6234 10.6263 11.5412 10.6251 11.4584V7.29171C10.6263 7.20806 10.6107 7.12501 10.5792 7.0475C10.5477 6.96999 10.501 6.89959 10.4418 6.84047C10.3826 6.78135 10.3121 6.73472 10.2346 6.70333C10.157 6.67195 10.074 6.65645 9.99033 6.65776ZM10.0001 13.3334C9.77909 13.3334 9.56712 13.4212 9.41084 13.5775C9.25456 13.7337 9.16677 13.9457 9.16677 14.1667C9.16677 14.3877 9.25456 14.5997 9.41084 14.756C9.56712 14.9122 9.77909 15 10.0001 15C10.2211 15 10.4331 14.9122 10.5894 14.756C10.7456 14.5997 10.8334 14.3877 10.8334 14.1667C10.8334 13.9457 10.7456 13.7337 10.5894 13.5775C10.4331 13.4212 10.2211 13.3334 10.0001 13.3334Z" fill="#40E5D1"></path></svg><span class="truncate" title="Incident Escalation Rate">Incident Escalation Rate</span></div><div class="flex gap-2 w-1/2 justify-end items-center"><span class="font-semibold text-xl">10%</span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="14" fill="#40E5D1" fill-opacity="0.4"></rect><path d="M18.4987 15.3889L13.9987 19.8334M13.9987 19.8334L9.49866 15.3889M13.9987 19.8334V8.16671" stroke="#40E5D1" stroke-width="2" stroke-linecap="square"></path></svg></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.