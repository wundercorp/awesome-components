# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/easemize/multi-type-ripple-buttons/default
- Registry URL: https://21st.dev/r/easemize/multi-type-ripple-buttons
- Author: easemize
- Component slug: multi-type-ripple-buttons
- Demo slug: default
- Title: multi-type-ripple-buttons
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/easemize/multi-type-ripple-buttons with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/easemize__multi-type-ripple-buttons__default.html
- Local screenshot file: generated-21st-prompts/screenshots/easemize__multi-type-ripple-buttons__default.png

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
<div id="root"><div class="flex w-full h-screen justify-center items-center flex-row gap-4"><style>
  @keyframes js-ripple-animation {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }
  .animate-js-ripple-effect {
    animation: js-ripple-animation var(--ripple-duration) ease-out forwards;
  }
</style><button class="relative border-none overflow-hidden isolate transition-all duration-200 cursor-pointer px-4 py-2 bg-blue-600 hover:opacity-90 text-white rounded-lg  "><span class="relative z-[1] pointer-events-none"> Click Me </span><div class="absolute inset-0 pointer-events-none z-[5]"></div></button><style>
  @keyframes js-ripple-animation {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }
  .animate-js-ripple-effect {
    animation: js-ripple-animation var(--ripple-duration) ease-out forwards;
  }
</style><style>
        .hover-variant-visual-ripple {
          background-color: #16A34A;
          transition: width 0.9s ease, height 0.9s ease, top 99999s linear, left 99999s linear;
        }
        .hover-variant-grid-cell:hover ~ .hover-variant-visual-ripple {
          width: 18.973665961em; height: 18.973665961em;
        }
        
            .hover-variant-grid-cell:nth-child(1):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 0.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(2):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 0.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(3):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 0.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(4):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 0.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(5):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 1.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(6):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 1.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(7):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 1.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(8):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 1.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(9):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 2.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(10):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 2.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(11):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 2.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(12):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 2.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(13):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 3.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(14):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 3.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(15):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 3.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(16):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 3.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(17):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 4.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(18):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 4.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(19):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 4.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(20):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 4.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(21):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 5.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(22):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 5.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(23):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 5.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(24):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 5.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(25):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 6.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(26):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 6.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(27):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 6.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(28):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 6.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(29):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 7.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(30):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 7.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(31):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 7.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(32):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 7.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(33):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 8.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(34):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 8.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(35):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 8.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(36):hover ~ .hover-variant-visual-ripple {
              top: 0.125em; left: 8.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(37):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 0.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(38):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 0.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(39):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 0.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(40):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 0.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(41):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 1.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(42):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 1.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(43):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 1.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(44):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 1.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(45):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 2.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(46):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 2.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(47):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 2.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(48):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 2.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(49):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 3.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(50):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 3.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(51):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 3.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(52):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 3.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(53):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 4.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(54):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 4.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(55):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 4.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(56):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 4.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(57):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 5.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(58):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 5.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(59):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 5.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(60):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 5.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(61):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 6.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(62):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 6.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(63):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 6.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(64):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 6.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(65):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 7.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(66):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 7.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(67):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 7.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(68):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 7.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(69):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 8.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(70):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 8.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(71):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 8.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(72):hover ~ .hover-variant-visual-ripple {
              top: 0.375em; left: 8.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(73):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 0.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(74):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 0.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(75):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 0.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(76):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 0.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(77):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 1.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(78):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 1.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(79):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 1.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(80):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 1.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(81):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 2.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(82):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 2.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(83):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 2.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(84):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 2.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(85):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 3.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(86):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 3.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(87):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 3.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(88):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 3.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(89):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 4.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(90):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 4.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(91):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 4.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(92):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 4.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(93):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 5.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(94):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 5.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(95):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 5.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(96):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 5.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(97):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 6.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(98):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 6.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(99):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 6.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(100):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 6.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(101):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 7.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(102):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 7.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(103):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 7.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(104):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 7.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(105):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 8.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(106):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 8.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(107):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 8.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(108):hover ~ .hover-variant-visual-ripple {
              top: 0.625em; left: 8.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(109):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 0.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(110):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 0.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(111):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 0.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(112):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 0.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(113):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 1.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(114):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 1.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(115):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 1.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(116):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 1.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(117):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 2.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(118):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 2.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(119):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 2.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(120):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 2.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(121):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 3.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(122):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 3.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(123):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 3.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(124):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 3.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(125):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 4.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(126):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 4.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(127):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 4.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(128):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 4.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(129):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 5.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(130):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 5.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(131):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 5.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(132):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 5.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(133):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 6.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(134):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 6.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(135):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 6.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(136):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 6.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(137):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 7.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(138):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 7.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(139):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 7.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(140):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 7.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(141):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 8.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(142):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 8.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(143):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 8.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(144):hover ~ .hover-variant-visual-ripple {
              top: 0.875em; left: 8.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(145):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 0.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(146):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 0.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(147):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 0.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(148):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 0.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(149):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 1.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(150):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 1.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(151):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 1.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(152):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 1.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(153):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 2.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(154):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 2.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(155):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 2.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(156):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 2.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(157):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 3.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(158):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 3.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(159):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 3.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(160):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 3.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(161):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 4.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(162):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 4.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(163):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 4.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(164):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 4.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(165):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 5.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(166):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 5.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(167):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 5.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(168):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 5.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(169):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 6.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(170):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 6.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(171):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 6.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(172):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 6.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(173):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 7.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(174):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 7.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(175):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 7.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(176):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 7.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(177):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 8.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(178):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 8.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(179):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 8.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(180):hover ~ .hover-variant-visual-ripple {
              top: 1.125em; left: 8.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(181):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 0.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(182):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 0.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(183):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 0.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(184):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 0.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(185):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 1.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(186):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 1.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(187):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 1.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(188):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 1.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(189):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 2.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(190):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 2.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(191):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 2.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(192):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 2.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(193):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 3.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(194):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 3.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(195):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 3.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(196):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 3.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(197):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 4.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(198):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 4.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(199):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 4.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(200):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 4.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(201):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 5.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(202):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 5.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(203):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 5.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(204):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 5.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(205):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 6.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(206):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 6.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(207):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 6.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(208):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 6.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(209):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 7.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(210):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 7.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(211):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 7.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(212):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 7.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(213):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 8.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(214):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 8.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(215):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 8.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(216):hover ~ .hover-variant-visual-ripple {
              top: 1.375em; left: 8.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(217):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 0.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(218):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 0.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(219):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 0.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(220):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 0.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(221):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 1.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(222):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 1.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(223):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 1.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(224):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 1.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(225):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 2.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(226):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 2.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(227):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 2.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(228):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 2.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(229):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 3.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(230):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 3.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(231):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 3.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(232):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 3.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(233):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 4.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(234):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 4.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(235):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 4.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(236):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 4.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(237):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 5.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(238):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 5.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(239):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 5.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(240):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 5.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(241):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 6.1875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(242):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 6.4375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(243):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 6.6875em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(244):hover ~ .hover-variant-visual-ripple {
              top: 1.625em; left: 6.9375em;
              transition: width 0.9s ease, height 0.9s ease, top 0s linear, left 0s linear;
            }
            .hover-variant-grid-cell:nth-child(245):hover 

[TRUNCATED: original length 315794 characters]
```

## Public registry source files

No public registry source files were available.