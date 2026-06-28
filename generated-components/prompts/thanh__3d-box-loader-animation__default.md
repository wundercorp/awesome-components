# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/thanh/3d-box-loader-animation/default
- Registry URL: https://21st.dev/r/thanh/3d-box-loader-animation
- Author: thanh
- Component slug: 3d-box-loader-animation
- Demo slug: default
- Title: 3d-box-loader-animation
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/thanh/3d-box-loader-animation with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/thanh__3d-box-loader-animation__default.html
- Local screenshot file: generated-21st-prompts/screenshots/thanh__3d-box-loader-animation__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_DemoOne">DemoOne</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full h-min-screen items-center justify-center min-h-screen bg-gray-200"><style>
    .loader {
      --duration: 3s;
      /* Updated the color variables to use black and dark gray */
      --primary: rgba(0, 0, 0, 1);
      --primary-light: #333333;
      --primary-rgba: rgba(0, 0, 0, 0);
      width: 200px;
      height: 320px;
      position: relative;
      transform-style: preserve-3d;
    }
    @media (max-width: 480px) {
      .loader {
        zoom: 0.44;
      }
    }
    .loader:before, .loader:after {
      --r: 20.5deg;
      content: "";
      width: 320px;
      height: 140px;
      position: absolute;
      right: 32%;
      bottom: -11px;
      /* This background color is crucial for the masking effect and must match the page background */
      background: #e5e7eb; 
      transform: translateZ(200px) rotate(var(--r));
      animation: mask var(--duration) linear forwards infinite;
    }
    .loader:after {
      --r: -20.5deg;
      right: auto;
      left: 32%;
    }
    .loader .ground {
      position: absolute;
      left: -50px;
      bottom: -120px;
      transform-style: preserve-3d;
      transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
    }
    .loader .ground div {
      transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
      width: 200px;
      height: 200px;
      background: var(--primary);
      background: linear-gradient(45deg, var(--primary) 0%, var(--primary) 50%, var(--primary-light) 50%, var(--primary-light) 100%);
      transform-style: preserve-3d;
      animation: ground var(--duration) linear forwards infinite;
    }
    .loader .ground div:before, .loader .ground div:after {
      --rx: 90deg;
      --ry: 0deg;
      --x: 44px;
      --y: 162px;
      --z: -50px;
      content: "";
      width: 156px;
      height: 300px;
      opacity: 0;
      background: linear-gradient(var(--primary), var(--primary-rgba));
      position: absolute;
      transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y)) translateZ(var(--z));
      animation: ground-shine var(--duration) linear forwards infinite;
    }
    .loader .ground div:after {
      --rx: 90deg;
      --ry: 90deg;
      --x: 0;
      --y: 177px;
      --z: 150px;
    }
    .loader .box {
      --x: 0;
      --y: 0;
      position: absolute;
      animation: var(--duration) linear forwards infinite;
      transform: translate(var(--x), var(--y));
    }
    .loader .box div {
      background-color: var(--primary);
      width: 48px;
      height: 48px;
      position: relative;
      transform-style: preserve-3d;
      animation: var(--duration) ease forwards infinite;
      transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
    }
    .loader .box div:before, .loader .box div:after {
      --rx: 90deg;
      --ry: 0deg;
      --z: 24px;
      --y: -24px;
      --x: 0;
      content: "";
      position: absolute;
      background-color: inherit;
      width: inherit;
      height: inherit;
      transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y)) translateZ(var(--z));
      filter: brightness(var(--b, 1.2));
    }
    .loader .box div:after {
      --rx: 0deg;
      --ry: 90deg;
      --x: 24px;
      --y: 0;
      --b: 1.4;
    }
    .loader .box.box0 { --x: -220px; --y: -120px; left: 58px; top: 108px; animation-name: box-move0; }
    .loader .box.box0 div { animation-name: box-scale0; }
    .loader .box.box1 { --x: -260px; --y: 120px; left: 25px; top: 120px; animation-name: box-move1; }
    .loader .box.box1 div { animation-name: box-scale1; }
    .loader .box.box2 { --x: 120px; --y: -190px; left: 58px; top: 64px; animation-name: box-move2; }
    .loader .box.box2 div { animation-name: box-scale2; }
    .loader .box.box3 { --x: 280px; --y: -40px; left: 91px; top: 120px; animation-name: box-move3; }
    .loader .box.box3 div { animation-name: box-scale3; }
    .loader .box.box4 { --x: 60px; --y: 200px; left: 58px; top: 132px; animation-name: box-move4; }
    .loader .box.box4 div { animation-name: box-scale4; }
    .loader .box.box5 { --x: -220px; --y: -120px; left: 25px; top: 76px; animation-name: box-move5; }
    .loader .box.box5 div { animation-name: box-scale5; }
    .loader .box.box6 { --x: -260px; --y: 120px; left: 91px; top: 76px; animation-name: box-move6; }
    .loader .box.box6 div { animation-name: box-scale6; }
    .loader .box.box7 { --x: -240px; --y: 200px; left: 58px; top: 87px; animation-name: box-move7; }
    .loader .box.box7 div { animation-name: box-scale7; }

    @keyframes box-move0 { 12% { transform: translate(var(--x), var(--y)); } 25%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes box-scale0 { 6% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 14%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move1 { 16% { transform: translate(var(--x), var(--y)); } 29%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes box-scale1 { 10% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 18%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move2 { 20% { transform: translate(var(--x), var(--y)); } 33%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes box-scale2 { 14% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 22%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move3 { 24% { transform: translate(var(--x), var(--y)); } 37%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes box-scale3 { 18% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 26%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move4 { 28% { transform: translate(var(--x), var(--y)); } 41%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes box-scale4 { 22% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 30%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move5 { 32% { transform: translate(var(--x), var(--y)); } 45%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes box-scale5 { 26% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 34%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move6 { 36% { transform: translate(var(--x), var(--y)); } 49%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes box-scale6 { 30% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 38%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move7 { 40% { transform: translate(var(--x), var(--y)); } 53%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); } 90%, 100% { transform: translate(0, 188px); } }
    @keyframes box-scale7 { 34% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 42%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    
    @keyframes ground { 0%, 65% { transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0); } 75%, 90% { transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(1); } 100% { transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0); } }
    @keyframes ground-shine { 0%, 70% { opacity: 0; } 75%, 87% { opacity: 0.2; } 100% { opacity: 0; } }
    @keyframes mask { 0%, 65% { opacity: 0; } 66%, 100% { opacity: 1; } }
  </style><div class="loader"><div class="box box0"><div></div></div><div class="box box1"><div></div></div><div class="box box2"><div></div></div><div class="box box3"><div></div></div><div class="box box4"><div></div></div><div class="box box5"><div></div></div><div class="box box6"><div></div></div><div class="box box7"><div></div></div><div class="ground"><div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.