# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/Northstrix/inflected-card/default
- Registry URL: https://21st.dev/r/Northstrix/inflected-card
- Author: Northstrix
- Component slug: inflected-card
- Demo slug: default
- Title: inflected-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/Northstrix/inflected-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/Northstrix__inflected-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/Northstrix__inflected-card__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_InflectedCardDemo_InflectedCardDemo">InflectedCardDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><section><div class="bg-[#0a0a0a] min-h-[300px] flex flex-wrap gap-8 items-center justify-center relative py-10 rounded-lg"><div class="inflected-card" style="--card-rounding: 15px; max-width: 500px;"><div class="inflected-cardInner" style="--parent-bg: #050505;"><div class="inflected-box"><div class="inflected-imgBox" style="border-radius: 15px; overflow: hidden; width: 100%; height: 100%; position: absolute; inset: 0px;"><img alt="iPhone 15 Pro" layout="fill" objectfit="cover" draggable="false" src="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg" style="transition: transform 0.3s; will-change: transform; transform: scale(1); width: 100%; height: 100%; display: block;"><div class="inflected-priceTag" style="position: absolute; top: 12px; left: 12px; background-color: rgba(255, 255, 255, 0.78); color: rgb(10, 10, 10); padding: 9px 15px; border-radius: 6px; font-size: 1.12rem;"><span class="inflected-old-price" style="text-decoration: line-through; opacity: 0.7; margin-right: 8px; font-weight: bold; color: rgb(86, 86, 86);">$991</span><span class="inflected-new-price" style="font-weight: bold;">$499</span></div></div><div class="inflected-icon"><a class="inflected-iconBox" style="--button-bg: #00A6FB; --button-hover-bg: #0582CA; --icon-color: #ffffff; --icon-hover-color: #EEEEEE; --icon-size: 32px;"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" color="#ffffff" height="32" width="32" xmlns="http://www.w3.org/2000/svg" style="color: rgb(255, 255, 255);"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg></a></div></div></div><div class="inflected-content"><h3 style="font-size: 1.8rem; color: rgb(247, 247, 255); margin: 0px 0px 7px; font-weight: bold; direction: ltr; text-align: left;">iPhone 15 Pro</h3><p style="font-size: 1rem; color: rgb(199, 199, 207); margin: 0px 0px 18px; direction: ltr; text-align: left;">Titanium smartphone with an advanced camera system, offering stunning photography capabilities and a sleek design.</p><ul style="margin: 10px 0px 0px; display: flex; justify-content: left; flex-wrap: wrap; gap: 0.625rem;"><li style="--tag-bg: #00A6FB; --tag-color: #f7f7ff; --tag-rounding: 16px; font-size: 0.85rem; direction: ltr; text-align: left; display: inline-block;">Pre-owned</li><li style="--tag-bg: #f1f1f7; --tag-color: #242424; --tag-rounding: 16px; font-size: 0.85rem; direction: ltr; text-align: left; display: inline-block;">50% off</li></ul></div></div><style>
        .inflected-card {
          position: relative;
          border-radius: var(--card-rounding);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .inflected-cardInner {
          position: relative;
          width: 100%;
          height: 18.75rem;
          background: var(--parent-bg);
          border-radius: var(--card-rounding);
          border-bottom-right-radius: 0;
          overflow: hidden;
        }
        .inflected-box {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }
        .inflected-imgBox {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: var(--card-rounding);
        }
        .inflected-icon {
          position: absolute;
          bottom: -0.375rem;
          right: -0.375rem;
          width: 6rem;
          height: 6rem;
          background: var(--parent-bg);
          border-top-left-radius: 50%;
          transition: all 0.3s ease;
        }
        .inflected-icon:hover .inflected-iconBox {
          transform: scale(1.1);
          cursor: pointer;
        }
        .inflected-icon::before {
          position: absolute;
          content: "";
          bottom: 0.375rem;
          left: -1.25rem;
          background: transparent;
          width: 1.25rem;
          height: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          box-shadow: 0.313rem 0.313rem 0 0.313rem var(--parent-bg);
        }
        .inflected-icon::after {
          position: absolute;
          content: "";
          top: -1.25rem;
          right: 0.375rem;
          background: transparent;
          width: 1.25rem;
          height: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          box-shadow: 0.313rem 0.313rem 0 0.313rem var(--parent-bg);
        }
        .inflected-iconBox {
          position: absolute;
          inset: 0.625rem;
          background: var(--button-bg);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }
        .inflected-iconBox:hover {
          background: var(--button-hover-bg);
        }
        .inflected-iconBox :global(span) {
          color: var(--icon-color);
          font-size: var(--icon-size);
          transition: color 0.3s ease;
        }
        .inflected-iconBox:hover :global(span) {
          color: var(--icon-hover-color);
        }
        .inflected-content {
          padding: 0.938rem 0.625rem;
        }
        .inflected-content h3 {
          transition: color 0.3s ease;
        }
        .inflected-content p {
          transition: color 0.3s ease;
        }
        .inflected-content ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.625rem;
        }
        .inflected-content ul li {
          background: var(--tag-bg);
          color: var(--tag-color);
          font-weight: 700;
          padding: 0.375rem 0.625rem;
          border-radius: var(--tag-rounding);
          transition: all 0.3s ease;
        }
        .inflected-content ul li:hover {
          opacity: 0.8;
        }
      </style></div><div class="bg-[#f8f8fa] min-h-[300px] flex flex-wrap gap-8 items-center justify-center relative p-10 rounded-lg mt-10"><div class="inflected-card" style="--card-rounding: 15px; max-width: 500px;"><div class="inflected-cardInner" style="--parent-bg: #f8f8fa;"><div class="inflected-box"><div class="inflected-imgBox" style="border-radius: 15px; overflow: hidden; width: 100%; height: 100%; position: absolute; inset: 0px;"><img alt="iPhone 15 Pro" layout="fill" objectfit="cover" draggable="false" src="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg" style="transition: transform 0.3s; will-change: transform; transform: scale(1); width: 100%; height: 100%; display: block;"><div class="inflected-priceTag" style="position: absolute; top: 12px; left: 12px; background-color: rgb(245, 230, 255); color: rgb(34, 34, 34); padding: 9px 15px; border-radius: 25px; font-size: 0.84rem;"><span class="inflected-old-price" style="text-decoration: line-through; opacity: 0.7; margin-right: 8px; font-weight: bold; color: rgb(85, 85, 85);">$1,199</span><span class="inflected-new-price" style="font-weight: bold;">$1,079</span></div></div><div class="inflected-icon"><a class="inflected-iconBox" style="--button-bg: #E0C3FC; --button-hover-bg: #bca1e7; --icon-color: #181818; --icon-hover-color: #fff; --icon-size: 32px;"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" color="#181818" height="32" width="32" xmlns="http://www.w3.org/2000/svg" style="color: rgb(24, 24, 24);"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg></a></div></div></div><div class="inflected-content"><h3 style="font-size: 1.8rem; color: rgb(24, 24, 24); margin: 0px 0px 7px; font-weight: bold; direction: ltr; text-align: center;">iPhone 15 Pro</h3><p style="font-size: 1rem; color: rgb(86, 86, 86); margin: 0px 0px 18px; direction: ltr; text-align: center;">Titanium smartphone with an advanced camera system, offering stunning photography capabilities and a sleek design.</p><ul style="margin: 10px 0px 0px; display: flex; justify-content: center; flex-wrap: wrap; gap: 0.625rem;"><li style="--tag-bg: #E0C3FC; --tag-color: #181818; --tag-rounding: 5px; font-size: 0.85rem; direction: ltr; text-align: left; display: inline-block;">Brand new</li><li style="--tag-bg: #b49ad7; --tag-color: #181818; --tag-rounding: 5px; font-size: 0.85rem; direction: ltr; text-align: left; display: inline-block;">10% off</li></ul></div></div><style>
        .inflected-card {
          position: relative;
          border-radius: var(--card-rounding);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .inflected-cardInner {
          position: relative;
          width: 100%;
          height: 18.75rem;
          background: var(--parent-bg);
          border-radius: var(--card-rounding);
          border-bottom-right-radius: 0;
          overflow: hidden;
        }
        .inflected-box {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }
        .inflected-imgBox {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: var(--card-rounding);
        }
        .inflected-icon {
          position: absolute;
          bottom: -0.375rem;
          right: -0.375rem;
          width: 6rem;
          height: 6rem;
          background: var(--parent-bg);
          border-top-left-radius: 50%;
          transition: all 0.3s ease;
        }
        .inflected-icon:hover .inflected-iconBox {
          transform: scale(1.1);
          cursor: pointer;
        }
        .inflected-icon::before {
          position: absolute;
          content: "";
          bottom: 0.375rem;
          left: -1.25rem;
          background: transparent;
          width: 1.25rem;
          height: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          box-shadow: 0.313rem 0.313rem 0 0.313rem var(--parent-bg);
        }
        .inflected-icon::after {
          position: absolute;
          content: "";
          top: -1.25rem;
          right: 0.375rem;
          background: transparent;
          width: 1.25rem;
          height: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          box-shadow: 0.313rem 0.313rem 0 0.313rem var(--parent-bg);
        }
        .inflected-iconBox {
          position: absolute;
          inset: 0.625rem;
          background: var(--button-bg);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }
        .inflected-iconBox:hover {
          background: var(--button-hover-bg);
        }
        .inflected-iconBox :global(span) {
          color: var(--icon-color);
          font-size: var(--icon-size);
          transition: color 0.3s ease;
        }
        .inflected-iconBox:hover :global(span) {
          color: var(--icon-hover-color);
        }
        .inflected-content {
          padding: 0.938rem 0.625rem;
        }
        .inflected-content h3 {
          transition: color 0.3s ease;
        }
        .inflected-content p {
          transition: color 0.3s ease;
        }
        .inflected-content ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.625rem;
        }
        .inflected-content ul li {
          background: var(--tag-bg);
          color: var(--tag-color);
          font-weight: 700;
          padding: 0.375rem 0.625rem;
          border-radius: var(--tag-rounding);
          transition: all 0.3s ease;
        }
        .inflected-content ul li:hover {
          opacity: 0.8;
        }
      </style><div class="inflected-card" style="--card-rounding: 15px; max-width: 500px; transform: scaleX(-1);"><div class="inflected-cardInner" style="--parent-bg: #f8f8fa;"><div class="inflected-box"><div class="inflected-imgBox" style="transform: scaleX(-1); border-radius: 15px; overflow: hidden; width: 100%; height: 100%; position: absolute; inset: 0px;"><img alt="סמסונג גלקסי פליפ 6" layout="fill" objectfit="cover" draggable="false" src="https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="transition: transform 0.3s; will-change: transform; transform: scale(1); width: 100%; height: 100%; display: block;"><div class="inflected-priceTag" style="position: absolute; top: 12px; right: 12px; background-color: rgb(225, 251, 230); color: rgb(24, 24, 24); padding: 9px 15px; border-radius: 6px; font-size: 1.12rem;"><span class="inflected-old-price" style="text-decoration: line-through; opacity: 0.7; margin-right: 8px; font-weight: bold; color: rgb(86, 86, 86);">₪2,999</span><span class="inflected-new-price" style="font-weight: bold;">₪1,499</span></div></div><div class="inflected-icon"><a class="inflected-iconBox" style="--button-bg: #A2F9B8; --button-hover-bg: #7ee6a2; --icon-color: #181818; --icon-hover-color: #fff; --icon-size: 32px;"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" color="#181818" height="32" width="32" xmlns="http://www.w3.org/2000/svg" style="color: rgb(24, 24, 24);"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path></svg></a></div></div></div><div class="inflected-content"><h3 style="font-size: 1.8rem; color: rgb(24, 24, 24); margin: 0px 0px 7px; font-weight: bold; direction: rtl; text-align: right; transform: scaleX(-1);">סמסונג גלקסי פליפ 6</h3><p style="font-size: 1rem; color: rgb(86, 86, 86); margin: 0px 0px 18px; direction: rtl; text-align: right; transform: scaleX(-1);">טלפון מתקפל חדשני עם עיצוב דקיק, תצוגה גדולה, ומאפשר חוויית צפייה וסביבת עבודה מרובת משימות.</p><ul style="margin: 10px 0px 0px; display: flex; justify-content: right; flex-wrap: wrap; gap: 0.625rem; transform: scaleX(-1);"><li style="--tag-bg: #A2F9B8; --tag-color: #181818; --tag-rounding: 0px; font-size: 0.85rem; direction: rtl; text-align: left; display: inline-block;">יד שניה</li><li style="--tag-bg: #6ccf8f; --tag-color: #181818; --tag-rounding: 0px; font-size: 0.85rem; direction: rtl; text-align: left; display: inline-block;">50% הנחה</li></ul></div></div><style>
        .inflected-card {
          position: relative;
          border-radius: var(--card-rounding);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .inflected-cardInner {
          position: relative;
          width: 100%;
          height: 18.75rem;
          background: var(--parent-bg);
          border-radius: var(--card-rounding);
          border-bottom-right-radius: 0;
          overflow: hidden;
        }
        .inflected-box {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }
        .inflected-imgBox {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: var(--card-rounding);
        }
        .inflected-icon {
          position: absolute;
          bottom: -0.375rem;
          right: -0.375rem;
          width: 6rem;
          height: 6rem;
          background: var(--parent-bg);
          border-top-left-radius: 50%;
          transition: all 0.3s ease;
        }
        .inflected-icon:hover .inflected-iconBox {
          transform: scale(1.1);
          cursor: pointer;
        }
        .inflected-icon::before {
          position: absolute;
          content: "";
          bottom: 0.375rem;
          left: -1.25rem;
          background: transparent;
          width: 1.25rem;
          height: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          box-shadow: 0.313rem 0.313rem 0 0.313rem var(--parent-bg);
        }
        .inflected-icon::after {
          position: absolute;
          content: "";
          top: -1.25rem;
          right: 0.375rem;
          background: transparent;
          width: 1.25rem;
          height: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          box-shadow: 0.313rem 0.313rem 0 0.313rem var(--parent-bg);
        }
        .inflected-iconBox {
          position: absolute;
          inset: 0.625rem;
          background: var(--button-bg);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }
        .inflected-iconBox:hover {
          background: var(--button-hover-bg);
        }
        .inflected-iconBox :global(span) {
          color: var(--icon-color);
          font-size: var(--icon-size);
          transition: color 0.3s ease;
        }
        .inflected-iconBox:hover :global(span) {
          color: var(--icon-hover-color);
        }
        .inflected-content {
          padding: 0.938rem 0.625rem;
        }
        .inflected-content h3 {
          transition: color 0.3s ease;
        }
        .inflected-content p {
          transition: color 0.3s ease;
        }
        .inflected-content ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.625rem;
        }
        .inflected-content ul li {
          background: var(--tag-bg);
          color: var(--tag-color);
          font-weight: 700;
          padding: 0.375rem 0.625rem;
          border-radius: var(--tag-rounding);
          transition: all 0.3s ease;
        }
        .inflected-content ul li:hover {
          opacity: 0.8;
        }
      </style></div></section></div></div>
```

## Public registry source files

No public registry source files were available.