# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/devongovett/react-aria-emoji-picker/default
- Registry URL: https://21st.dev/r/devongovett/react-aria-emoji-picker
- Author: devongovett
- Component slug: react-aria-emoji-picker
- Demo slug: default
- Title: react-aria-emoji-picker
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/devongovett/react-aria-emoji-picker with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/devongovett__react-aria-emoji-picker__default.html
- Local screenshot file: generated-21st-prompts/screenshots/devongovett__react-aria-emoji-picker__default.png

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
.emoji-picker { display: inline-flex; }

/* Кнопка-превью: фиксированный размер и центрирование */
.emoji-picker > button {
  width: 48px;
  height: 48px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

/* Контейнер поповера и сетка */
.emoji-picker-popover {
  padding: 12px;
  width: 320px;
  max-height: 360px;
  overflow: hidden;
  display: grid;
  gap: 12px;
}

.emoji-cell {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  font-size: 28px;
  cursor: pointer;
  border-radius: 8px;
}
.emoji-cell[data-hovered] { background: rgba(0,0,0,0.06); }
.emoji-cell[data-pressed] { background: rgba(0,0,0,0.12); }

/* Поисковое поле */
.react-aria-SearchField { display: flex; align-items: center; }
.react-aria-Group {
  display: flex; align-items: center; gap: 8px; padding: 0 8px;
  width: 100%; height: 36px; border: 1px solid #ccc; border-radius: 9999px;
}
.react-aria-Input { flex: 1; border: none; background: none; outline: none; }
.react-aria-Button { border: none; background: #aaa; color: #fff; border-radius: 9999px; }
.react-aria-Button[data-pressed] { background: #888; }
.react-aria-SearchField[data-empty] .react-aria-Button { display: none; }
.react-aria-FieldError { font-size: 12px; color: red; }

/* Размер выбранного эмодзи в превью */
.emoji-preview {
  display: block;
  font-size: 32px;   /* меняй это значение как хочешь */
  line-height: 1;    /* чтобы не было вертикального смещения */
}
</style><template data-react-aria-hidden="true"></template><div class="emoji-picker" data-rac=""><button id="react-aria7057343480-«r4»" class="react-aria-Button" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-label="Emoji" aria-labelledby="react-aria7057343480-«r9» react-aria7057343480-«r4»" aria-haspopup="listbox" aria-expanded="false"><span id="react-aria7057343480-«r9»" class="react-aria-SelectValue" data-rac="" data-placeholder="true"><span class="emoji-preview"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg></span></span></button><div aria-hidden="true" data-react-aria-prevent-focus="true" data-a11y-ignore="aria-hidden-focus" data-testid="hidden-select-container" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: fixed; width: 1px; white-space: nowrap; top: 0px; left: 0px;"><label><select tabindex="-1" title=""><option></option><option value="😀">grinning face smile happy</option><option value="😃">grinning face with big eyes smile happy</option><option value="😄">grinning face with smiling eyes smile happy</option><option value="😁">beaming face with smiling eyes smile happy</option><option value="😆">grinning squinting face lol</option><option value="😅">grinning face with sweat awkward</option><option value="😂">face with tears of joy lol funny</option><option value="🤣">rolling on the floor laughing lol funny</option><option value="🙂">slightly smiling face smile</option><option value="🙃">upside-down face sarcasm</option><option value="😉">winking face wink</option><option value="😊">smiling face with smiling eyes happy</option><option value="😇">smiling face with halo angel</option><option value="🥰">smiling face with hearts love</option><option value="😍">smiling face with heart-eyes love</option><option value="🤩">star-struck amazed</option><option value="😘">face blowing a kiss kiss</option><option value="😗">kissing face kiss</option><option value="😙">kissing face with smiling eyes kiss</option><option value="😚">kissing face with closed eyes kiss</option><option value="☺️">smiling face smile</option><option value="😋">face savoring food yum</option><option value="😛">face with tongue playful</option><option value="😜">winking face with tongue playful</option><option value="🤪">zany face crazy</option><option value="😝">squinting face with tongue playful</option><option value="🤑">money-mouth face rich</option><option value="🤗">hugging face hug</option><option value="🤭">face with hand over mouth oops</option><option value="🤫">shushing face quiet</option><option value="🤔">thinking face hmm</option><option value="🤐">zipper-mouth face secret</option><option value="🤨">face with raised eyebrow suspicious</option><option value="😐">neutral face meh</option><option value="😑">expressionless face blank</option><option value="😏">smirking face smirk</option><option value="😒">unamused face annoyed</option><option value="🙄">face with rolling eyes eyeroll</option><option value="😬">grimacing face awkward</option><option value="🤥">lying face lie</option><option value="😌">relieved face relieved</option><option value="😔">pensive face sad</option><option value="😪">sleepy face tired</option><option value="🤤">drooling face yum</option><option value="😴">sleeping face sleep</option><option value="😷">face with medical mask sick</option><option value="🤒">face with thermometer sick</option><option value="🤕">face with head-bandage injured</option><option value="🤢">nauseated face sick</option><option value="🤮">face vomiting sick</option></select></label></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.