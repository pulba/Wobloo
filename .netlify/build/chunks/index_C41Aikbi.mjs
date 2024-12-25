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
  [
    ...new Set(
      allPosts.map((post) => slugify(post.frontmatter.categories))
    )
  ];
  const title = "Categories";
  const posts = [
    { frontmatter: { categories: "Streetwear" } },
    { frontmatter: { categories: "Tas" } },
    { frontmatter: { categories: "Sepatu" } },
    { frontmatter: { categories: "Aksesoris" } },
    { frontmatter: { categories: "Baju" } }
  ];
  const categoryColors = {
    Streetwear: "text-blue-900 bg-blue-100",
    Tas: "text-green-900 bg-green-100",
    Sepatu: "text-yellow-900 bg-yellow-100",
    Aksesoris: "text-red-900 bg-red-100",
    Baju: "text-purple-900 bg-purple-100"
  };
  return renderTemplate`${maybeRenderHead()}<div class="py-12 mx-auto"> <h3 class="relative w-full flex items-center my-8"> <span class="pr-3 text-sm text-pink-900 !relative uppercase">${title}</span> <span class="relative flex-grow h-1 bg-pink-100 before:content-[''] before:absolute before:h-1 before:w-8 before:bg-pink-900 before:right-0"></span> </h3> <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center"> ${posts.map((post) => {
    const categoryClass = categoryColors[post.frontmatter.categories] || "text-pink-900 bg-pink-100";
    return renderTemplate`<a${addAttribute(`/categories/${slugify(post.frontmatter.categories)}/`, "href")}${addAttribute(`capitalize transition-all duration-300 ease-linear py-1 px-3 rounded-full w-full text-center shadow-xl border-2 ${categoryClass}`, "class")}> ${post.frontmatter.categories} </a>`;
  })} </div> </div>`;
}, "/home/syaiful/Documents/Blog/blog news/src/pages/categories/index.astro", void 0);

const $$file = "/home/syaiful/Documents/Blog/blog news/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
