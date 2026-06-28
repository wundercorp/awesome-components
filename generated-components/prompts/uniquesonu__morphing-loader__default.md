# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/uniquesonu/morphing-loader/default
- Registry URL: https://21st.dev/r/uniquesonu/morphing-loader
- Author: uniquesonu
- Component slug: morphing-loader
- Demo slug: default
- Title: morphing-loader
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/uniquesonu/morphing-loader with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/uniquesonu__morphing-loader__default.html
- Local screenshot file: generated-21st-prompts/screenshots/uniquesonu__morphing-loader__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-gray-50 min-h-screen w-full p-8 space-y-16"><div class="text-center"><h1 class="text-3xl font-bold text-gray-900 mb-2">Morphing Loader Component</h1></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div class="bg-white rounded-lg p-8 shadow-sm"><h3 class="text-lg text-gray-800 font-semibold mb-4 text-center">Default</h3><div class="flex flex-col items-center justify-center space-y-8 "><style>
        
    @keyframes morph-0 {
      0%, 100% {
        border-radius: 50%;
        transform: scale(1) rotate(0deg);
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
      }
      12.5% {
        border-radius: 70% 30% 30% 70% / 60% 60% 40% 40%;
        transform: scale(0.85) rotate(45deg);
        background: linear-gradient(45deg, #8b5cf6, #3b82f6);
      }
      25% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        transform: scale(0.95) rotate(90deg);
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
      }
      37.5% {
        border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
        transform: scale(1.05) rotate(135deg);
        background: linear-gradient(45deg, #8b5cf6, #3b82f6);
      }
      50% {
        border-radius: 20% 80% 50% 50% / 50% 15% 85% 50%;
        transform: scale(1.1) rotate(180deg);
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
      }
      62.5% {
        border-radius: 60% 40% 70% 30% / 40% 60% 40% 60%;
        transform: scale(1.05) rotate(225deg);
        background: linear-gradient(45deg, #8b5cf6, #3b82f6);
      }
      75% {
        border-radius: 60% 40% 30% 70% / 60% 40% 60% 40%;
        transform: scale(0.95) rotate(270deg);
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
      }
      87.5% {
        border-radius: 30% 70% 40% 60% / 70% 30% 70% 30%;
        transform: scale(0.85) rotate(315deg);
        background: linear-gradient(45deg, #8b5cf6, #3b82f6);
      }
    }
  
        
        .morph-loader {
          position: relative;
          animation: spin 2s linear infinite, pulse 1.5s ease-in-out infinite, deform 3s ease-in-out infinite;
        }
        
        .morph-loader::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          animation: morph-0 4s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes deform {
          0%, 100% { transform: skewX(0deg) skewY(0deg); }
          25% { transform: skewX(10deg) skewY(5deg); }
          50% { transform: skewX(-5deg) skewY(10deg); }
          75% { transform: skewX(5deg) skewY(-5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .loading-text {
          font-weight: 600;
          color: #3b82f6;
          animation: textPulse 2s ease-in-out infinite;
        }
        
        @keyframes textPulse {
          0%, 100% {
            opacity: 0.7;
            letter-spacing: 0px;
          }
          50% {
            opacity: 1;
            letter-spacing: 1px;
          }
        }
        
        .dots::after {
          content: '.';
          animation: dots 1.5s steps(5, end) infinite;
        }
        
        @keyframes dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60% { content: '...'; }
          80%, 100% { content: ''; }
        }
      </style><div class="morph-loader mx-auto" style="width: 60px; height: 60px;"></div><div class="loading-text text-xl flex justify-center"><span>Loading</span><span class="dots"></span></div><p class="text-gray-500 text-sm mt-4">Please wait while we prepare your content</p></div></div><div class="bg-white rounded-lg p-8 shadow-sm"><h3 class="text-lg font-semibold mb-4 text-center text-gray-800">Custom Text &amp; Colors</h3><div class="flex flex-col items-center justify-center space-y-8 "><style>
        
    @keyframes morph-0 {
      0%, 100% {
        border-radius: 50%;
        transform: scale(1) rotate(0deg);
        background: linear-gradient(45deg, #ef4444, #f97316);
      }
      12.5% {
        border-radius: 70% 30% 30% 70% / 60% 60% 40% 40%;
        transform: scale(0.85) rotate(45deg);
        background: linear-gradient(45deg, #f97316, #ef4444);
      }
      25% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        transform: scale(0.95) rotate(90deg);
        background: linear-gradient(45deg, #ef4444, #f97316);
      }
      37.5% {
        border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
        transform: scale(1.05) rotate(135deg);
        background: linear-gradient(45deg, #f97316, #ef4444);
      }
      50% {
        border-radius: 20% 80% 50% 50% / 50% 15% 85% 50%;
        transform: scale(1.1) rotate(180deg);
        background: linear-gradient(45deg, #ef4444, #f97316);
      }
      62.5% {
        border-radius: 60% 40% 70% 30% / 40% 60% 40% 60%;
        transform: scale(1.05) rotate(225deg);
        background: linear-gradient(45deg, #f97316, #ef4444);
      }
      75% {
        border-radius: 60% 40% 30% 70% / 60% 40% 60% 40%;
        transform: scale(0.95) rotate(270deg);
        background: linear-gradient(45deg, #ef4444, #f97316);
      }
      87.5% {
        border-radius: 30% 70% 40% 60% / 70% 30% 70% 30%;
        transform: scale(0.85) rotate(315deg);
        background: linear-gradient(45deg, #f97316, #ef4444);
      }
    }
  
        
        .morph-loader {
          position: relative;
          animation: spin 2s linear infinite, pulse 1.5s ease-in-out infinite, deform 3s ease-in-out infinite;
        }
        
        .morph-loader::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #ef4444, #f97316);
          border-radius: 50%;
          animation: morph-0 4s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes deform {
          0%, 100% { transform: skewX(0deg) skewY(0deg); }
          25% { transform: skewX(10deg) skewY(5deg); }
          50% { transform: skewX(-5deg) skewY(10deg); }
          75% { transform: skewX(5deg) skewY(-5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .loading-text {
          font-weight: 600;
          color: #3b82f6;
          animation: textPulse 2s ease-in-out infinite;
        }
        
        @keyframes textPulse {
          0%, 100% {
            opacity: 0.7;
            letter-spacing: 0px;
          }
          50% {
            opacity: 1;
            letter-spacing: 1px;
          }
        }
        
        .dots::after {
          content: '.';
          animation: dots 1.5s steps(5, end) infinite;
        }
        
        @keyframes dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60% { content: '...'; }
          80%, 100% { content: ''; }
        }
      </style><div class="morph-loader mx-auto" style="width: 60px; height: 60px;"></div><div class="loading-text text-xl flex justify-center"><span>Processing</span><span class="dots"></span></div><p class="text-gray-500 text-sm mt-4">Analyzing your data...</p></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.