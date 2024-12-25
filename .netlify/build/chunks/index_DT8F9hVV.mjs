/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro } from './astro/server_akklIja1.mjs';
import 'kleur/colors';
import 'clsx';
import { s as slugify } from './helpers_CA-N6K6D.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post1.md": () => import('./post1_BOf_oERO.mjs').then(n => n._),"../posts/post2.md": () => import('./post2_BFp98otT.mjs').then(n => n._),"../posts/post3.md": () => import('./post3_KWUlMW2u.mjs').then(n => n._),"../posts/post4.md": () => import('./post4_CAJUzlG-.mjs').then(n => n._),"../posts/post5.md": () => import('./post5_BwcJilwy.mjs').then(n => n._),"../posts/post6.md": () => import('./post6_Bke9ZYek.mjs').then(n => n._),"../posts/post7.md": () => import('./post7_p6AkzdZ4.mjs').then(n => n._),"../posts/post8.md": () => import('./post8_CQKbLHYP.mjs').then(n => n._),"../posts/post9.md": () => import('./post9_Cv79xNNC.mjs').then(n => n._)}), () => "../posts/*.md");
  const tags = [
    ...new Set(
      allPosts.map((post) => slugify(post.frontmatter.tags))
    )
  ];
  const title = "Tagar";
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto"> <h3 class="relative w-full flex items-center my-8"> <span class="pr-3 text-sm text-pink-900 tracking-widest !relative uppercase">${title}</span> <span class="relative flex-grow h-1 bg-gray-100 before:content-[''] before:absolute before:h-1 before:w-8 before:bg-pink-900 before:right-0"></span> </h3> <div class="tags flex flex-wrap gap-4"> ${tags.map((tag) => renderTemplate`<p class="tag capitalize text-gray-900 border border-pink-900 rounded-full px-6 py-2 w-fit hover:bg-blue-50 hover:text-pink-900"> <a${addAttribute(`/../tags/${tag}`, "href")}># ${tag}</a> </p>`)} </div> </div>`;
}, "/home/syaiful/Documents/Blog/blog news/src/pages/tags/index.astro", void 0);

const $$file = "/home/syaiful/Documents/Blog/blog news/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
