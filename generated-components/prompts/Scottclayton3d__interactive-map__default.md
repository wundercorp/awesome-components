# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/Scottclayton3d/interactive-map/default
- Registry URL: https://21st.dev/r/Scottclayton3d/interactive-map
- Author: Scottclayton3d
- Component slug: interactive-map
- Demo slug: default
- Title: interactive-map
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/Scottclayton3d/interactive-map with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/Scottclayton3d__interactive-map__default.html
- Local screenshot file: generated-21st-prompts/screenshots/Scottclayton3d__interactive-map__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div style="width: 75%;"><h1>Advanced Map Example</h1><div class="advanced-map " style="height: 600px;"><div class="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" tabindex="0" style="height: 100%; width: 100%; position: relative;"><div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(0px, 0px, 0px);"><div class="leaflet-pane leaflet-tile-pane"><div class="leaflet-layer " style="z-index: 1; opacity: 1;"><div class="leaflet-tile-container leaflet-zoom-animated" style="z-index: 18; transform: translate3d(0px, 0px, 0px) scale(1);"><img alt="" src="https://a.tile.openstreetmap.org/13/4093/2723.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(128px, 9px, 0px); opacity: 1;"><img alt="" src="https://b.tile.openstreetmap.org/13/4094/2723.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(384px, 9px, 0px); opacity: 1;"><img alt="" src="https://b.tile.openstreetmap.org/13/4093/2724.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(128px, 265px, 0px); opacity: 1;"><img alt="" src="https://c.tile.openstreetmap.org/13/4094/2724.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(384px, 265px, 0px); opacity: 1;"><img alt="" src="https://c.tile.openstreetmap.org/13/4093/2722.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(128px, -247px, 0px); opacity: 1;"><img alt="" src="https://a.tile.openstreetmap.org/13/4094/2722.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(384px, -247px, 0px); opacity: 1;"><img alt="" src="https://c.tile.openstreetmap.org/13/4092/2723.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-128px, 9px, 0px); opacity: 1;"><img alt="" src="https://c.tile.openstreetmap.org/13/4095/2723.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(640px, 9px, 0px); opacity: 1;"><img alt="" src="https://a.tile.openstreetmap.org/13/4092/2724.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-128px, 265px, 0px); opacity: 1;"><img alt="" src="https://a.tile.openstreetmap.org/13/4095/2724.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(640px, 265px, 0px); opacity: 1;"><img alt="" src="https://c.tile.openstreetmap.org/13/4093/2725.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(128px, 521px, 0px); opacity: 1;"><img alt="" src="https://a.tile.openstreetmap.org/13/4094/2725.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(384px, 521px, 0px); opacity: 1;"><img alt="" src="https://b.tile.openstreetmap.org/13/4092/2722.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-128px, -247px, 0px); opacity: 1;"><img alt="" src="https://b.tile.openstreetmap.org/13/4095/2722.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(640px, -247px, 0px); opacity: 1;"><img alt="" src="https://b.tile.openstreetmap.org/13/4092/2725.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-128px, 521px, 0px); opacity: 1;"><img alt="" src="https://b.tile.openstreetmap.org/13/4095/2725.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(640px, 521px, 0px); opacity: 1;"></div></div></div><div class="leaflet-pane leaflet-overlay-pane"><svg pointer-events="none" class="leaflet-zoom-animated" width="893" height="720" viewBox="-74 -60 893 720" style="transform: translate3d(-74px, -60px, 0px);"><g><path class="leaflet-interactive" stroke="green" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="green" fill-opacity="0.4" fill-rule="evenodd" d="M372 206L313 160L197 160z"></path><path class="leaflet-interactive" stroke="purple" stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="purple" fill-opacity="0.3" fill-rule="evenodd" d="M213.20355555554852,271.94704600190744a42,42 0 1,0 84,0 a42,42 0 1,0 -84,0 "></path></g></svg></div><div class="leaflet-pane leaflet-shadow-pane"></div><div class="leaflet-pane leaflet-marker-pane"><div class="leaflet-marker-icon marker-cluster marker-cluster-small leaflet-zoom-animated leaflet-interactive" tabindex="0" role="button" style="margin-left: -20px; margin-top: -20px; width: 40px; height: 40px; transform: translate3d(343px, 277px, 0px); z-index: 277;"><div><span>2</span></div></div></div><div class="leaflet-pane leaflet-tooltip-pane"></div><div class="leaflet-pane leaflet-popup-pane"></div><div class="leaflet-proxy leaflet-zoom-animated" style="transform: translate3d(1.04805e+06px, 697379px, 0px) scale(4096);"></div></div><div class="leaflet-control-container"><div class="leaflet-top leaflet-left"><div class="leaflet-control-zoom leaflet-bar leaflet-control"><a class="leaflet-control-zoom-in" href="#" title="Zoom in" role="button" aria-label="Zoom in" aria-disabled="false"><span aria-hidden="true">+</span></a><a class="leaflet-control-zoom-out" href="#" title="Zoom out" role="button" aria-label="Zoom out" aria-disabled="false"><span aria-hidden="true">−</span></a></div><div class="search-control leaflet-control">
        <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.2); display: flex; gap: 5px;">
          <input id="search-input" type="text" placeholder="Search places..." style="padding: 8px; border: 1px solid #ddd; border-radius: 3px; width: 200px;">
          <button id="search-btn" style="padding: 8px 12px; border: none; border-radius: 3px; cursor: pointer; background: #007bff; color: white;">
            🔍
          </button>
        </div>
      </div></div><div class="leaflet-top leaflet-right"><div class="custom-controls leaflet-control">
        <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.2);">
          <button id="locate-btn" style="margin: 2px; padding: 8px; border: none; border-radius: 3px; cursor: pointer;">📍 Locate Me</button>
          <button id="satellite-btn" style="margin: 2px; padding: 8px; border: none; border-radius: 3px; cursor: pointer;">🛰️ Satellite</button>
          <button id="traffic-btn" style="margin: 2px; padding: 8px; border: none; border-radius: 3px; cursor: pointer;">🚦 Traffic</button>
        </div>
      </div></div><div class="leaflet-bottom leaflet-left"></div><div class="leaflet-bottom leaflet-right"><div class="leaflet-control-attribution leaflet-control"><a href="https://leafletjs.com" title="A JavaScript library for interactive maps"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"></path><path fill="#FFD500" d="M0 4h12v3H0z"></path><path fill="#E0BC00" d="M0 7h12v1H0z"></path></svg> Leaflet</a> <span aria-hidden="true">|</span> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors</div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.