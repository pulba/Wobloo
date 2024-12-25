/* empty css                                    */
import { _ as __vite_glob_0_0 } from '../../chunks/post1_BOf_oERO.mjs';
import { _ as __vite_glob_0_1 } from '../../chunks/post2_BFp98otT.mjs';
import { _ as __vite_glob_0_2 } from '../../chunks/post3_KWUlMW2u.mjs';
import { _ as __vite_glob_0_3 } from '../../chunks/post4_CAJUzlG-.mjs';
import { _ as __vite_glob_0_4 } from '../../chunks/post5_BwcJilwy.mjs';
import { _ as __vite_glob_0_5 } from '../../chunks/post6_Bke9ZYek.mjs';
import { _ as __vite_glob_0_6 } from '../../chunks/post7_p6AkzdZ4.mjs';
import { _ as __vite_glob_0_7 } from '../../chunks/post8_CQKbLHYP.mjs';
import { _ as __vite_glob_0_8 } from '../../chunks/post9_Cv79xNNC.mjs';
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_akklIja1.mjs';
import 'kleur/colors';
import { $ as $$Postcard, a as $$Home } from '../../chunks/postcard_RhhaUAYS.mjs';
import { $ as $$Aside } from '../../chunks/aside_CbcIQ928.mjs';
import { f as formatBlogPosts, s as slugify } from '../../chunks/helpers_CA-N6K6D.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return [
    {
      params: { category: slugify("Aksesoris") },
      props: { name: "Aksesoris" }
    },
    {
      params: { category: slugify("Sepatu") },
      props: { name: "Sepatu" }
    },
    {
      params: { category: slugify("Tas") },
      props: { name: "Tas" }
    },
    {
      params: { category: slugify("Streetwear") },
      props: { name: "Streetwear" }
    },
    {
      params: { category: slugify("Baju") },
      props: { name: "Baju" }
    }
  ];
}
const $$category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  Astro2.props;
  const allPosts = /* #__PURE__ */ Object.assign({"../posts/post1.md": __vite_glob_0_0,"../posts/post2.md": __vite_glob_0_1,"../posts/post3.md": __vite_glob_0_2,"../posts/post4.md": __vite_glob_0_3,"../posts/post5.md": __vite_glob_0_4,"../posts/post6.md": __vite_glob_0_5,"../posts/post7.md": __vite_glob_0_6,"../posts/post8.md": __vite_glob_0_7,"../posts/post9.md": __vite_glob_0_8});
  const posts = Object.values(allPosts);
  const formatedPosts = formatBlogPosts(posts);
  const catPosts = formatedPosts.filter(
    (post) => slugify(post.frontmatter.categories) === category
  );
  return renderTemplate`${renderComponent($$result, "Home", $$Home, { "category": category }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container px-6 py-12 mx-auto"> <div class="flex flex-col lg:flex-row gap-y-8 lg:divide-x divide-gray-100"> <div class="w-full lg:w-2/3 lg:px-8"> <h3 class="text-2xl capitalize text-center font-bold py-6">
Posts about <span class="text-pink-900">${category}</span> </h3> <div class="w-full lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8"> ${catPosts.slice(0, 6).map(
    (post) => renderTemplate`<div class="text-gray-800 border rounded-md shadow-xl"> ${renderComponent($$result2, "Postcard", $$Postcard, { "frontmatter": post.frontmatter, "url": post.url })} </div>`
  )} </div> </div> ${renderComponent($$result2, "Aside", $$Aside, {})} </div> </div> </section> ` })}`;
}, "/home/syaiful/Documents/Blog/blog news/src/pages/categories/[category].astro", void 0);

const $$file = "/home/syaiful/Documents/Blog/blog news/src/pages/categories/[category].astro";
const $$url = "/categories/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
