# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/thanh/weave-spinner/default
- Registry URL: https://21st.dev/r/thanh/weave-spinner
- Author: thanh
- Component slug: weave-spinner
- Demo slug: default
- Title: weave-spinner
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/thanh/weave-spinner with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/thanh__weave-spinner__default.html
- Local screenshot file: generated-21st-prompts/screenshots/thanh__weave-spinner__default.png

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
          .spinner-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          /* Main container for the spinner */
          .spinner-container {
            position: relative;
            width: 160px;
            height: 160px;
            transform-style: preserve-3d;
            perspective: 1200px;
          }

          /* Central glowing node */
          .node {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 12px;
            height: 12px;
            background: #ffaa00; /* Bright amber glow */
            border-radius: 50%;
            transform: translate(-50%, -50%);
            box-shadow:
              0 0 20px #ffaa00,
              0 0 40px rgba(255, 170, 0, 0.6);
            animation: nodePulse 1.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
          }

          /* Base style for all weaving threads */
          .thread {
            position: absolute;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 170, 0, 0.8),
              transparent
            );
            box-shadow: 0 0 10px rgba(255, 170, 0, 0.5);
            transform-origin: center;
          }

          /* Individual thread positioning and animation delays */
          .t1 {
            width: 100%;
            height: 2px;
            top: 30%;
            left: 0;
            animation: weave1 2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          }

          .t2 {
            width: 2px;
            height: 100%;
            top: 0;
            left: 70%;
            animation: weave2 2.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
          }

          .t3 {
            width: 100%;
            height: 2px;
            bottom: 30%;
            left: 0;
            animation: weave3 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
          }

          .t4 {
            width: 2px;
            height: 100%;
            top: 0;
            left: 30%;
            animation: weave4 2.6s cubic-bezier(0.36, 0, 0.66, -0.56) infinite;
          }

          /* Animation for the central node's pulsing effect */
          @keyframes nodePulse {
            0%,
            100% {
              transform: translate(-50%, -50%) scale(1);
              box-shadow:
                0 0 20px #ffaa00,
                0 0 40px rgba(255, 170, 0, 0.6);
            }
            50% {
              transform: translate(-50%, -50%) scale(1.4);
              box-shadow:
                0 0 30px #ffaa00,
                0 0 60px rgba(255, 170, 0, 0.8);
            }
          }

          /* Animations for each of the four weaving threads */
          @keyframes weave1 {
            0% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateY(40px) rotateX(60deg) rotateZ(20deg);
              opacity: 1;
            }
            100% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
          }

          @keyframes weave2 {
            0% {
              transform: translateX(0) rotateY(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateX(-40px) rotateY(60deg) rotateZ(-20deg);
              opacity: 1;
            }
            100% {
              transform: translateX(0) rotateY(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
          }

          @keyframes weave3 {
            0% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateY(-40px) rotateX(-60deg) rotateZ(15deg);
              opacity: 1;
            }
            100% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
          }

          @keyframes weave4 {
            0% {
              transform: translateX(0) rotateY(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateX(40px) rotateY(-60deg) rotateZ(-15deg);
              opacity: 1;
            }
            100% {
              transform: translateX(0) rotateY(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
          }
        </style><div class="spinner-wrapper"><div class="spinner-container"><div class="thread t1"></div><div class="thread t2"></div><div class="thread t3"></div><div class="thread t4"></div><div class="node"></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.