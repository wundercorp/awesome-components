# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kousthubha_sky_/real-time-analytics/default
- Registry URL: https://21st.dev/r/kousthubha_sky_/real-time-analytics
- Author: kousthubha_sky_
- Component slug: real-time-analytics
- Demo slug: default
- Title: real-time-analytics
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kousthubha_sky_/real-time-analytics with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kousthubha_sky___real-time-analytics__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kousthubha_sky___real-time-analytics__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div style="min-height: 100vh; background-color: rgb(0, 0, 0); padding: 32px; font-family: system-ui, -apple-system, sans-mono;"><style>
        @keyframes flowGradient {
          0% { stop-color: #6366f1; }
          50% { stop-color: #8b5cf6; }
          100% { stop-color: #6366f1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; r: 6; }
          50% { opacity: 0.7; r: 8; }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        .flowing-line {
          stroke-dasharray: 1000;
          animation: drawLine 2s ease-out forwards;
        }
        .data-dot {
          animation: pulse 2s ease-in-out infinite;
        }
        .glow {
          filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.6));
        }
      </style><div style="max-width: 900px; margin: 0px auto;"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;"><div><h2 style="font-size: 24px; font-weight: 700; color: white; margin-bottom: 4px;">Real-time Activity</h2><p style="color: rgb(100, 116, 139); font-size: 14px;">Live server performance metrics</p></div><div style="display: flex; align-items: center; gap: 12px; padding: 12px 20px; background-color: rgb(26, 26, 26); border-radius: 12px;"><div style="width: 10px; height: 10px; border-radius: 50%; background-color: rgb(34, 197, 94); animation: 1.5s ease-in-out 0s infinite normal none running pulse;"></div><span style="color: rgb(148, 163, 184); font-size: 14px;">Live</span><span style="color: white; font-size: 24px; font-weight: 700; margin-left: 8px;">70.6%</span></div></div><div style="background-color: rgb(26, 26, 26); border-radius: 16px; padding: 24px; position: relative;"><svg width="100%" height="300" viewBox="0 0 800 300" style="cursor: crosshair;"><defs><linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#6366f\1"><animate attributeName="stop-color" values="#6366f1;#8b5cf6;#6366f1" dur="3s" repeatCount="indefinite"></animate></stop><stop offset="50%" stop-color="#8b5cf6"><animate attributeName="stop-color" values="#8b5cf6;#a855f7;#8b5cf6" dur="3s" repeatCount="indefinite"></animate></stop><stop offset="100%" stop-color="#a855f7"><animate attributeName="stop-color" values="#a855f7;#6366f1;#a855f7" dur="3s" repeatCount="indefinite"></animate></stop></linearGradient><linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"></stop><stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop></linearGradient></defs><g><line x1="50" y1="260" x2="780" y2="260" stroke="#334155" stroke-dasharray="4 4"></line><text x="40" y="260" fill="#64748b" font-size="12" text-anchor="end" dominant-baseline="middle">0%</text></g><g><line x1="50" y1="200" x2="780" y2="200" stroke="#334155" stroke-dasharray="4 4"></line><text x="40" y="200" fill="#64748b" font-size="12" text-anchor="end" dominant-baseline="middle">25%</text></g><g><line x1="50" y1="140" x2="780" y2="140" stroke="#334155" stroke-dasharray="4 4"></line><text x="40" y="140" fill="#64748b" font-size="12" text-anchor="end" dominant-baseline="middle">50%</text></g><g><line x1="50" y1="80" x2="780" y2="80" stroke="#334155" stroke-dasharray="4 4"></line><text x="40" y="80" fill="#64748b" font-size="12" text-anchor="end" dominant-baseline="middle">75%</text></g><g><line x1="50" y1="20" x2="780" y2="20" stroke="#334155" stroke-dasharray="4 4"></line><text x="40" y="20" fill="#64748b" font-size="12" text-anchor="end" dominant-baseline="middle">100%</text></g><path d="M 50,98.11011245024916 L 78.07368380571472,116.13978447019082 L 106.14736761142944,108.33883265464809 L 134.22105141714417,110.2285110866125 L 162.2947352228589,133.44890361315723 L 190.3684190285736,177.28609121559214 L 218.44210283428833,128.94935668855896 L 246.51578664000309,102.65207600731323 L 274.5894704457178,182.04341931979243 L 302.6631542514325,126.37009203741232 L 330.7368380571472,92.00533673438407 L 358.81052186286195,113.2128649247604 L 386.88420566857667,158.7049971164584 L 414.9578894742914,158.17892010850258 L 443.03157328000617,106.39647406126412 L 471.1052570857209,125.06492026624454 L 499.1789408914356,114.33165766857053 L 527.2526246971504,171.5003898322211 L 555.326308502865,99.20215022144694 L 583.3999923085797,161.68574676105757 L 639.6035072876207,142.53754852772502 L 667.7052647771411,121.3978196214476 L 695.7228012152444,114.33952497515385 L 723.8245587047649,124.71008577164247 L 751.9263161942853,103.29865308123661 L 780,90.51775487379805 L 780,260 L 50,260 Z" fill="url(#areaGradient)"></path><path class="flowing-line glow" d="M 50,98.11011245024916 L 78.07368380571472,116.13978447019082 L 106.14736761142944,108.33883265464809 L 134.22105141714417,110.2285110866125 L 162.2947352228589,133.44890361315723 L 190.3684190285736,177.28609121559214 L 218.44210283428833,128.94935668855896 L 246.51578664000309,102.65207600731323 L 274.5894704457178,182.04341931979243 L 302.6631542514325,126.37009203741232 L 330.7368380571472,92.00533673438407 L 358.81052186286195,113.2128649247604 L 386.88420566857667,158.7049971164584 L 414.9578894742914,158.17892010850258 L 443.03157328000617,106.39647406126412 L 471.1052570857209,125.06492026624454 L 499.1789408914356,114.33165766857053 L 527.2526246971504,171.5003898322211 L 555.326308502865,99.20215022144694 L 583.3999923085797,161.68574676105757 L 639.6035072876207,142.53754852772502 L 667.7052647771411,121.3978196214476 L 695.7228012152444,114.33952497515385 L 723.8245587047649,124.71008577164247 L 751.9263161942853,103.29865308123661 L 780,90.51775487379805" fill="none" stroke="url(#lineGradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><circle class="" cx="50" cy="98.11011245024916" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="78.07368380571472" cy="116.13978447019082" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="106.14736761142944" cy="108.33883265464809" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="134.22105141714417" cy="110.2285110866125" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="162.2947352228589" cy="133.44890361315723" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="190.3684190285736" cy="177.28609121559214" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="218.44210283428833" cy="128.94935668855896" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="246.51578664000309" cy="102.65207600731323" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="274.5894704457178" cy="182.04341931979243" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="302.6631542514325" cy="126.37009203741232" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="330.7368380571472" cy="92.00533673438407" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="358.81052186286195" cy="113.2128649247604" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="386.88420566857667" cy="158.7049971164584" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="414.9578894742914" cy="158.17892010850258" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="443.03157328000617" cy="106.39647406126412" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="471.1052570857209" cy="125.06492026624454" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="499.1789408914356" cy="114.33165766857053" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="527.2526246971504" cy="171.5003898322211" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="555.326308502865" cy="99.20215022144694" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="583.3999923085797" cy="161.68574676105757" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="639.6035072876207" cy="142.53754852772502" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="667.7052647771411" cy="121.3978196214476" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="695.7228012152444" cy="114.33952497515385" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="723.8245587047649" cy="124.71008577164247" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="" cx="751.9263161942853" cy="103.29865308123661" r="3" fill="#6366f1" style="opacity: 0.7; transition: opacity 0.2s;"></circle><circle class="data-dot" cx="780" cy="90.51775487379805" r="6" fill="#a855f7" style="opacity: 0.7; transition: opacity 0.2s;"></circle></svg></div><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px;"><div style="background-color: rgb(30, 30, 30); border-radius: 12px; padding: 16px; text-align: center;"><div style="color: rgb(100, 116, 139); font-size: 12px; margin-bottom: 4px;">Average</div><div style="color: white; font-size: 20px; font-weight: 600;">55.8%</div></div><div style="background-color: rgb(30, 30, 30); border-radius: 12px; padding: 16px; text-align: center;"><div style="color: rgb(100, 116, 139); font-size: 12px; margin-bottom: 4px;">Peak</div><div style="color: white; font-size: 20px; font-weight: 600;">70.6%</div></div><div style="background-color: rgb(30, 30, 30); border-radius: 12px; padding: 16px; text-align: center;"><div style="color: rgb(100, 116, 139); font-size: 12px; margin-bottom: 4px;">Data Points</div><div style="color: white; font-size: 20px; font-weight: 600;">26</div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.