# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kedhar/hotel-showcase/default
- Registry URL: https://21st.dev/r/kedhar/hotel-showcase
- Author: kedhar
- Component slug: hotel-showcase
- Demo slug: default
- Title: hotel-showcase
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kedhar/hotel-showcase with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kedhar__hotel-showcase__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kedhar__hotel-showcase__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><section class="cloneable"><div class="page"><div class="main"><div class="main-col"><div class="main-img__list"><div class="main-img__item"><img loading="lazy" alt="Eclipse Lodge" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/676882d4c39ce9e70bcb9745_tobias-reich-AwqQch2wAmM-unsplash.avif"></div><div class="main-img__item"><img loading="lazy" alt="Serenity Peaks" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/676882d4fad20ba1fac1a107_massimiliano-morosinotto-oJmVzkVStoo-unsplash.avif"></div><div class="main-img__item"><img loading="lazy" alt="The Celestial Inn" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/676882d4244a70cbb10a6403_karsten-winegeart-9CTqIV6kPQ0-unsplash.avif"></div><div class="main-img__item"><img loading="lazy" alt="Aurora Heights Hotel" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/676882d4be32396ee62f4946_lucas-marcomini-cVBz9q1T_9M-unsplash.avif"></div><div class="main-img__item"><img loading="lazy" alt="Golden Sands Retreat" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/676882d42880b4fc111df2bc_sergey-pesterev-i-P1lmY_e1w-unsplash.avif"></div></div></div><div class="main-col"><ul class="main-title__list"><li class="main-title__item"><button class="button"><h2 class="main-title">Eclipse Lodge</h2></button></li><li class="main-title__item"><button class="button"><h2 class="main-title">Serenity Peaks</h2></button></li><li class="main-title__item"><button class="button"><h2 class="main-title">The Celestial Inn</h2></button></li><li class="main-title__item"><button class="button"><h2 class="main-title">Aurora Heights Hotel</h2></button></li><li class="main-title__item"><button class="button"><h2 class="main-title">Golden Sands Retreat</h2></button></li></ul></div></div><div class="overlay-wrap"><div class="overlay-item"><div class="overlay-hero"><div data-overlay="text-target" class="overlay-title__wrap"></div><div data-overlay="img-target" class="overlay-img__wrap"></div></div><div class="overlay-row"><div class="overlay-col col-left"><div class="overlay-col__img"><img loading="lazy" alt="" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/676882d42e09d4366787f302_tobias-reich-VltYe88rkt8-unsplash.avif"></div></div><div class="overlay-col col-right"><div class="overlay-col__img"><img loading="lazy" alt="" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/676882d41f2900efdbe4c20d_tobias-reich-wr6m4OOZZtw-unsplash.avif"></div><p class="paragraph">A sophisticated getaway with modern architecture and unforgettable sunsets, where every moment feels timeless.</p></div></div></div><div class="overlay-item"><div class="overlay-hero"><div data-overlay="text-target" class="overlay-title__wrap"></div><div data-overlay="img-target" class="overlay-img__wrap"></div></div><div class="overlay-row"><div class="overlay-col col-left"><div class="overlay-col__img"><img loading="lazy" alt="" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/6768a24ba580bdb31f092521_eberhard-grossgasteiger-UclnVUmf5aQ-unsplash.jpg"></div></div><div class="overlay-col col-right"><div class="overlay-col__img"><img loading="lazy" alt="" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/6768a2c0717640eb150afb88_filippo-fFh53mf_6iE-unsplash.jpg"></div><p class="paragraph">Tucked among towering peaks and serene valleys, this haven offers a peaceful escape from the noise of the world.</p></div></div></div><div class="overlay-item"><div class="overlay-hero"><div data-overlay="text-target" class="overlay-title__wrap"></div><div data-overlay="img-target" class="overlay-img__wrap"></div></div><div class="overlay-row"><div class="overlay-col col-left"><div class="overlay-col__img"><img loading="lazy" alt="" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/6768b1abc8db3718aca6b42a_karsten-winegeart-VTzcKDm7Sug-unsplash.jpg"></div></div><div class="overlay-col col-right"><div class="overlay-col__img"><img loading="lazy" alt="" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/6768b1fbdc6bc1ff5504e024_karsten-winegeart-EqMRa0cgEiI-unsplash.jpg"></div><p class="paragraph">A sanctuary above the clouds, offering celestial views and unmatched tranquility for dreamers and stargazers alike.</p></div></div></div><div class="overlay-item"><div class="overlay-hero"><div data-overlay="text-target" class="overlay-title__wrap"></div><div data-overlay="img-target" class="overlay-img__wrap"></div></div><div class="overlay-row"><div class="overlay-col col-left"><div class="overlay-col__img"><img loading="lazy" alt="" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/6768b1aba580bdb31f116524_lisha-riabinina-08P8Hzja_Yk-unsplash.jpg"></div></div><div class="overlay-col col-right"><div class="overlay-col__img"><img loading="lazy" alt="" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/6768b1abc8db3718aca6b405_laszlo-bajnoczi-tThY14QmOYE-unsplash.jpg"></div><p class="paragraph">Nestled in the heart of nature, this retreat is the perfect place to watch the northern lights dance across the sky.</p></div></div></div><div class="overlay-item"><div class="overlay-hero"><div data-overlay="text-target" class="overlay-title__wrap"></div><div data-overlay="img-target" class="overlay-img__wrap"></div></div><div class="overlay-row"><div class="overlay-col col-left"><div class="overlay-col__img"><img loading="lazy" alt="" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/6768b1ab95b4aee14bc0aadf_toa-heftiba-hi0Fml1Xj_E-unsplash.jpg"></div></div><div class="overlay-col col-right"><div class="overlay-col__img"><img loading="lazy" alt="" class="image" src="https://cdn.prod.website-files.com/67684bfc3496e563bea11dc0/6768b1ab27d120c7e32f8578_maria-orlova-b37mDyPzdJM-unsplash.jpg"></div><p class="paragraph">Feel the warmth of the sun and the embrace of golden shores, where luxury meets the serenity of the sea.</p></div></div></div><div class="overlay-nav"><button data-overlay="close" class="button text"><p data-overlay="nav-item" class="text-reg">Back to list</p></button><p data-overlay="nav-item" class="text-reg">Scroll to explore</p></div></div></div></section><div class="osmo-credits"><p class="osmo-credits__p">Resource by <a target="_blank" href="https://www.osmo.supply/" class="osmo-credits__p-a">Osmo</a></p></div></div></div>
```

## Public registry source files

No public registry source files were available.