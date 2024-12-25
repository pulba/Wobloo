import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent, h as createAstro } from './astro/server_akklIja1.mjs';
import 'kleur/colors';
import { $ as $$Index$1 } from './index_DT8F9hVV.mjs';
import { $ as $$Index } from './index_C41Aikbi.mjs';
import { a as $$Icon } from './main_DV75ckjB.mjs';
import { f as formatBlogPosts, s as slugify, a as formatDate } from './helpers_CA-N6K6D.mjs';

const $$Astro = createAstro();
const $$Aside = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Aside;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/posts/post1.md": () => import('./post1_BOf_oERO.mjs').then(n => n._),"../pages/posts/post2.md": () => import('./post2_BFp98otT.mjs').then(n => n._),"../pages/posts/post3.md": () => import('./post3_KWUlMW2u.mjs').then(n => n._),"../pages/posts/post4.md": () => import('./post4_CAJUzlG-.mjs').then(n => n._),"../pages/posts/post5.md": () => import('./post5_BwcJilwy.mjs').then(n => n._),"../pages/posts/post6.md": () => import('./post6_Bke9ZYek.mjs').then(n => n._),"../pages/posts/post7.md": () => import('./post7_p6AkzdZ4.mjs').then(n => n._),"../pages/posts/post8.md": () => import('./post8_CQKbLHYP.mjs').then(n => n._),"../pages/posts/post9.md": () => import('./post9_Cv79xNNC.mjs').then(n => n._)}), () => "../pages/posts/*.md");
  const formatPosts = formatBlogPosts(allPosts);
  Astro2.props;
  const categoryColors = {
    Streetwear: "text-blue-900 bg-blue-100",
    Tas: "text-green-900 bg-green-100",
    Sepatu: "text-yellow-900 bg-yellow-100",
    Aksesoris: "text-red-900 bg-red-100"
  };
  const featuredPost = formatPosts[0];
  categoryColors[featuredPost?.frontmatter?.categories] || "text-pink-900 bg-pink-100";
  return renderTemplate`${maybeRenderHead()}<div class="font-montserrat w-full lg:w-1/3 lg:px-8"> <h3 class="relative w-full flex items-center my-8"> <span class="pr-3 text-sm text-pink-900 !relative">POPULAR POSTS</span> <span class="relative flex-grow h-1 bg-gray-100 before:content-[''] before:absolute before:h-1 before:w-8 before:bg-pink-900 before:right-0"></span> </h3> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"> ${formatPosts.slice(0, 5).map((post2) => renderTemplate`<div class="w-full flex gap-2 mx-auto rounded-md shadow-xl bg-gray-100 text-gray-900 p-4 mb-5"> <a${addAttribute(post2.url, "href")}> <img${addAttribute(post2.frontmatter.image.img, "src")}${addAttribute(post2.frontmatter.image.alt, "alt")} class="w-44 h-24 rounded-md object-center object-cover"> </a> <div class="ps-3 w-full"> <div class="text-xs flex items-center justify-between"> <a${addAttribute(`/categories/${slugify(post2.frontmatter.categories)}/`, "href")}${addAttribute(`capitalize transition-all duration-300 ease-linear py-1 px-3 rounded-full ${categoryColors[post2.frontmatter.categories] || "text-pink-900 bg-pink-100"}`, "class")}> ${post2.frontmatter.categories} </a> <p class="text-gray-500"> ${formatDate(post2.frontmatter.date)} </p> </div> <a${addAttribute(post2.url, "href")}> <h4 class="font-bold font-josefin my-2 text-sm capitalize transition-all duration-300 ease-linear hover:text-gray-600 text-pink-900"> ${post2.frontmatter.title} </h4> </a> <a${addAttribute(`/author/${slugify(post2.frontmatter.author)}/`, "href")} class="flex gap-1 items-center text-xs text-gray-500"> ${renderComponent($$result, "Icon", $$Icon, { "path": "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z", "primary": "w-4 h-4" })} ${post2.frontmatter.author} </a> </div> </div>`)} </div> ${renderComponent($$result, "Categories", $$Index, {})} ${renderComponent($$result, "Tag", $$Index$1, {})} </div>`;
}, "/home/syaiful/Documents/Blog/blog news/src/layouts/aside.astro", void 0);

export { $$Aside as $ };
