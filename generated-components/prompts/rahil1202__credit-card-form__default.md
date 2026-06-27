# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/rahil1202/credit-card-form/default
- Registry URL: https://21st.dev/r/rahil1202/credit-card-form
- Author: rahil1202
- Component slug: credit-card-form
- Demo slug: default
- Title: credit-card-form
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/rahil1202/credit-card-form with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/rahil1202__credit-card-form__default.html
- Local screenshot file: generated-21st-prompts/screenshots/rahil1202__credit-card-form__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main style="min-height: 100vh; display: grid; place-items: center;"><section class="ccp "><div class="wrap"><section id="card" class="card "><div id="highlight" class="hidden"></div><section class="card__front" style="--ring1: #ff6be7; --ring2: #7288ff;"><div class="card__header"><div>CreditCard</div><svg xmlns="http://www.w3.org/2000/svg" height="40" width="60" viewBox="-96 -98.908 832 593.448"><path fill="#ff5f00" d="M224.833 42.298h190.416v311.005H224.833z"></path><path d="M244.446 197.828a197.448 197.448 0 0175.54-155.475 197.777 197.777 0 100 311.004 197.448 197.448 0 01-75.54-155.53z" fill="#eb001b"></path><path d="M621.101 320.394v-6.372h2.747v-1.319h-6.537v1.319h2.582v6.373zm12.691 0v-7.69h-1.978l-2.307 5.493-2.308-5.494h-1.977v7.691h1.428v-5.823l2.143 5h1.483l2.143-5v5.823z" fill="#f79e1b"></path><path d="M640 197.828a197.777 197.777 0 01-320.015 155.474 197.777 197.777 0 000-311.004A197.777 197.777 0 01640 197.773z" fill="#f79e1b"></path></svg></div><div id="card_number" class="card__number" aria-label="Card number"><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span><span class="slot"><span class="digit "><span class="row placeholder">#</span><span class="row value">#</span></span></span></div><div class="card__footer"><div class="card__holder"><div class="card__section__title">Card Holder</div><div id="card_holder">RAHIL VAHORA</div></div><div class="card__expires"><div class="card__section__title">Expires</div><span id="card_expires_month">MM</span>/<span id="card_expires_year">YY</span></div></div></section><section class="card__back" style="--ring1: #ff6be7; --ring2: #7288ff;"><div class="card__hide_line"></div><div class="card_cvv"><span>CVV</span><div id="card_cvv_field" class="card_cvv_field"></div></div></section></section><form class="form" novalidate=""><div><label for="number">Card Number</label><input id="number" inputmode="numeric" autocomplete="cc-number" placeholder="1234 5678 9012 3456" aria-invalid="true" value=""></div><div><label for="holder">Card Holder</label><input id="holder" autocomplete="cc-name" placeholder="JANE DOE" aria-invalid="false" type="text" value="RAHIL VAHORA"></div><div class="filed__group"><div><label>Expiration Date</label><div class="filed__date"><select id="expiration_month" aria-invalid="true"><option value="" disabled="">Month</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select><select id="expiration_year" aria-invalid="true"><option value="" disabled="">Year</option><option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option><option value="2031">2031</option><option value="2032">2032</option><option value="2033">2033</option><option value="2034">2034</option><option value="2035">2035</option></select></div></div><div><label for="cvv">CVV</label><input id="cvv" inputmode="numeric" autocomplete="cc-csc" placeholder="***" aria-invalid="true" value=""></div></div><button class="submit" type="submit" disabled="" aria-disabled="true">Complete all fields</button></form></div><style>
        .ccp {
          width: 100vw;
          display: flex;
          justify-content: center;
          padding: 24px;
          background: #fbfcff;
          color: #0d0c22;
        }
        .wrap {
          width: 100vw;
          max-width: 1000px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
        }

        @media (max-width: 920px) {
          .wrap {
            grid-template-columns: 1fr;
          }
        }

        * {
          box-sizing: border-box;
        }

        #highlight {
          position: absolute;
          border: 1px solid #fff;
          border-radius: 12px;
          z-index: 1;
          width: 0;
          height: 0;
          top: 0;
          left: 0;
          box-shadow: 0 0 5px #fff;
          transition: 0.3s;
        }
        #highlight.highlight__number {
          width: 346px;
          height: 40px;
          top: 92px;
          left: 18px;
        }
        #highlight.highlight__holder {
          width: 264px;
          height: 56px;
          top: 156px;
          left: 18px;
        }
        #highlight.highlight__expire {
          width: 86px;
          height: 56px;
          top: 156px;
          left: 323px;
        }
        #highlight.highlight__cvv {
          width: 381px;
          height: 91px;
          top: 83px;
          left: 18px;
        }
        #highlight.hidden {
          display: none;
        }

        .card {
          position: relative;
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
          transform-style: preserve-3d;
          transition: 0.8s;
          perspective: 1000px;
        }
        .card.flip {
          transform: rotateY(180deg);
        }

        .card__front,
        .card__back {
          width: 100%;
          max-width: 420px;
          height: 233px;
          border-radius: 20px;
          padding: 24px 30px 30px;
          background: linear-gradient(to right bottom, #323941, #061018);
          box-shadow: 0 33px 50px -15px rgba(50, 55, 63, 0.66);
          color: #fff;
          overflow: hidden;
          margin: 0 auto;
          backface-visibility: hidden;
          position: relative;
        }

        @media (max-width: 450px) {
          .card__front,
          .card__back {
            padding: 12px 14px 16px;
            height: 206px;
          }
          /* shrink highlight boxes for small screens */
          #highlight.highlight__number {
            width: 300px;
            left: 14px;
          }
          #highlight.highlight__holder {
            width: 220px;
            left: 14px;
          }
          #highlight.highlight__expire {
            left: 280px;
          }
          #highlight.highlight__cvv {
            width: 330px;
            left: 14px;
          }
        }

        .card__back {
          position: absolute;
          top: 0;
          left: 0;
          transform: rotateY(180deg);
          padding: 24px 0 0;
        }

        .card__front::before,
        .card__back::before {
          content: "";
          position: absolute;
          border: 16px solid var(--ring1, #ff6be7);
          border-radius: 100%;
          left: -17%;
          top: -45px;
          height: 300px;
          width: 300px;
          filter: blur(13px);
        }

        .card__front::after,
        .card__back::after {
          content: "";
          position: absolute;
          border: 16px solid var(--ring2, #7288ff);
          border-radius: 100%;
          width: 300px;
          top: 55%;
          left: -200px;
          height: 300px;
          filter: blur(13px);
        }

        .card__hide_line {
          height: 40px;
          width: 100%;
          background-color: #6b7280;
          position: relative;
          z-index: 1;
        }

        .card_cvv {
          position: relative;
          z-index: 1;
          margin-top: 24px;
          padding: 0 32px;
          display: flex;
          flex-direction: column;
          align-items: end;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .card_cvv_field {
          margin-top: 6px;
          background-color: #fff;
          border-radius: 12px;
          height: 44px;
          width: 100%;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: end;
          padding: 0 12px;
          font-size: 25px;
          line-height: 21px;
        }

        .card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 600;
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }

        .card__number {
          font-size: 22px;
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
          display: flex;
          height: 33px;         
          overflow: hidden;
          color: #fff;
        }

        .card__number .slot {
          display: inline-flex;
          margin-right: 0;
        }

        .card__number .slot:nth-child(4n) {
          margin-right: 10px;    /* group spacing */
        }

        .card__number .digit {
          display: flex;
          flex-direction: column;
          height: 33px;          /* one row height */
          line-height: 33px;
          transition: transform 0.2s;
        }

        .card__number .digit.filed {
          transform: translateY(-33px); /* slide to reveal the value row */
        }

        .card__number .row {
          height: 33px;
          display: block;
        }

        .card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }
        .card__holder {
          text-transform: uppercase;
        }
        .card__section__title {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .form {
          border-radius: 12px;
          background: #fff;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 24px;
          border: 1px solid #f1f1f1;
          box-shadow: 0 0 40px rgba(50, 55, 63, 0.16);
          display: grid;
          gap: 12px;
          color: #0d0c22;
        }

        label {
          display: block;
          margin: 6px 0 4px;
          color: #0d0c22;
          font-weight: 500;
        }

        input,
        select {
          height: 52px;
          display: block;
          width: 100%;
          border: 1px solid #6b7280;
          padding: 18px 20px;
          transition: outline 200ms ease, box-shadow 200ms ease;
          border-radius: 12px;
          outline: none;
          background-color: #fff;
          color: #0d0c22;
          font-size: 16px;
        }

        input:focus,
        select:focus {
          border: 1px solid #000;
          outline: 4px solid rgba(0, 0, 0, 0.1);
        }

        select {
          padding: 0 20px;
        }

        .filed__group {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        @media (max-width: 560px) {
          .filed__group {
            grid-template-columns: 1fr;
          }
        }

        .filed__date {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .err {
          color: #b42318;
          font-size: 12px;
          margin-top: 4px;
        }

        .submit {
          margin-top: 8px;
          height: 48px;
          border: none;
          border-radius: 10px;
          background: #0d0c22;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          opacity: 0.6;
        }
      </style></section></main></div></div></div>
```

## Public registry source files

No public registry source files were available.