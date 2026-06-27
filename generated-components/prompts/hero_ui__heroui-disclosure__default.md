# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-disclosure/default
- Registry URL: https://21st.dev/r/hero_ui/heroui-disclosure
- Author: hero_ui
- Component slug: heroui-disclosure
- Demo slug: default
- Title: heroui-disclosure
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-disclosure with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-disclosure__default.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-disclosure__default.png

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
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8 text-foreground"><style>
        :root {
          --background: 240 5% 96%;
          --foreground: 240 10% 3.9%;
          --surface: 0 0% 100%;
          --muted: lab(47.8738 1.41454 -4.98644);
          --primary: oklab(0.497363 -0.0375369 -0.132786);
          --primary-button: lab(54.5335 3.31545 -66.5298);
          --secondary-bg: lab(93.0314 0.0993609 -0.364041);
          --panel-shadow: none;
        }

        .dark {
          --background: 240 10% 3.9%;
          --foreground: 0 0% 98%;
          --surface: 240 8% 9%;
          --muted: oklab(0.724755 -0.0256654 -0.0990053);
          --primary: oklab(0.781592 -0.0475363 -0.16033);
          --primary-button: oklab(0.62 -0.055 -0.188);
          --secondary-bg: oklab(0.245 0 0);
          --panel-shadow: none;
        }

        .bg-background { background-color: hsl(var(--background)); }
        .text-foreground { color: hsl(var(--foreground)); }
        .demo-card { width: 100%; max-width: 28rem; text-align: center; }
        .button {
          box-sizing: border-box;
          display: inline-flex;
          height: 36px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 0;
          border-radius: 24px;
          padding: 0 16px;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          white-space: nowrap;
          color: var(--primary);
          background: var(--secondary-bg);
        }
        .button--primary {
          color: white;
          background: var(--primary-button);
        }
        .button svg {
          width: 16px;
          height: 16px;
          flex: none;
        }
        .disclosure__heading {
          justify-content: center;
        }
        .native-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 24px;
          background: hsl(var(--surface));
          padding: 16px;
          text-align: center;
          box-shadow: var(--panel-shadow);
        }
        .native-panel p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 20px;
        }
        .native-panel img {
          aspect-ratio: 1 / 1;
          width: 100%;
          max-width: 216px;
          object-fit: cover;
        }
        .app-store-button {
          margin-top: 16px;
        }
      </style><div class="demo-card"><style>
      .disclosure {
        position: relative;
      }

      .disclosure__heading {
        display: flex;
        margin: 0;
      }

      .disclosure__trigger {
        cursor: pointer;
      }

      .disclosure__trigger:focus-visible,
      .disclosure__trigger[data-focus-visible="true"] {
        outline: 2px solid oklab(0.497363 -0.0375369 -0.132786);
        outline-offset: 2px;
      }

      .disclosure__trigger:disabled,
      .disclosure__trigger[aria-disabled="true"] {
        cursor: not-allowed;
        opacity: .5;
      }

      .disclosure__indicator {
        margin-left: auto;
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        color: inherit;
        transition: transform 250ms ease, opacity 250ms ease;
      }

      .disclosure__indicator[data-expanded="true"] {
        transform: rotate(-180deg);
      }

      .disclosure__content {
        height: var(--disclosure-panel-height, 0px);
        opacity: 0;
        overflow: clip;
        transition: height 200ms cubic-bezier(.25, .46, .45, .94), opacity 200ms ease-out;
      }

      .disclosure__content[data-expanded="true"] {
        opacity: 1;
        will-change: height, opacity;
      }

      .disclosure__body {
        padding: 8px;
      }

      @media (prefers-reduced-motion: reduce) {
        .disclosure__indicator,
        .disclosure__content {
          transition: none;
        }
      }
    </style><div class="disclosure" data-expanded="true" data-slot="disclosure"><h3 class="disclosure__heading" data-slot="disclosure-heading"><button aria-controls="disclosure-panel-_r_0_" aria-expanded="true" class="disclosure__trigger button button--secondary" data-expanded="true" data-slot="disclosure-trigger" id="disclosure-trigger-_r_0_" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8.75 2.25a.75.75 0 0 0-1.5 0v5h-5a.75.75 0 0 0 0 1.5h5.5a1 1 0 0 0 1-1zM7.25 11a1 1 0 0 1 1-1H11a.75.75 0 0 1 0 1.5H8.75v2.25a.75.75 0 0 1-1.5 0zM13 13h-2.25a.75.75 0 0 0 0 1.5h2.75a1 1 0 0 0 1-1V8.25a1 1 0 0 0-1-1h-2.75a.75.75 0 0 0 0 1.5H13zM3 4.5V3h1.5v1.5zm-1.5-2a1 1 0 0 1 1-1H5a1 1 0 0 1 1 1V5a1 1 0 0 1-1 1H2.5a1 1 0 0 1-1-1zm1.5 9V13h1.5v-1.5zM2.5 10a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zM11.5 3v1.5H13V3zm-1.5-.5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1V5a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1z" clip-rule="evenodd"></path></svg>Preview HeroUI Native<svg aria-hidden="true" aria-label="Chevron down icon" class="disclosure__indicator" data-expanded="true" data-slot="disclosure-indicator" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg></button></h3><div aria-hidden="false" aria-labelledby="disclosure-trigger-_r_0_" class="disclosure__content" data-expanded="true" data-slot="disclosure-content" id="disclosure-panel-_r_0_" role="region" style="--disclosure-panel-height: 376px;"><div><div class="disclosure__body" data-slot="disclosure-body"><div class="disclosure__body-inner native-panel"><p>Scan this QR code with your camera app to preview the HeroUI native components.</p><img alt="Expo Go QR Code" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png"><p>Expo must be installed on your device.</p><button class="button button--primary app-store-button" type="button"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--tabler" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m15.079 5.999l.239.012c1.43.097 3.434 1.013 4.508 2.586a1 1 0 0 1-.344 1.44c-.05.028-.372.158-.497.217a4 4 0 0 0-.722.431c-.614.461-.948 1.009-.942 1.694c.01.885.339 1.454.907 1.846c.208.143.436.253.666.33c.126.043.426.116.444.122a1 1 0 0 1 .662.942C20 18.24 16.96 22 14.714 22c-.79 0-1.272-.091-1.983-.315l-.098-.031c-.463-.146-.702-.192-1.133-.192c-.52 0-.863.06-1.518.237l-.197.053c-.575.153-.964.226-1.5.248C5.536 22 2 16.907 2 12.438c0-4.12 2.701-6.44 5.604-6.44c.846 0 1.596.242 2.359.705l.303.189c.359.219.53.307.734.307c.168 0 .331-.074.653-.263l.291-.17c.832-.472 1.675-.768 2.896-.768zM14 2a1 1 0 0 1 1 1a3 3 0 0 1-3 3a1 1 0 0 1-1-1a3 3 0 0 1 3-3"></path></svg>Download on App Store</button></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.