/* empty css                                 */
import { _ as __vite_glob_0_0 } from '../chunks/post1_BOf_oERO.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/post2_BFp98otT.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/post3_KWUlMW2u.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/post4_CAJUzlG-.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/post5_BwcJilwy.mjs';
import { _ as __vite_glob_0_5 } from '../chunks/post6_Bke9ZYek.mjs';
import { _ as __vite_glob_0_6 } from '../chunks/post7_p6AkzdZ4.mjs';
import { _ as __vite_glob_0_7 } from '../chunks/post8_CQKbLHYP.mjs';
import { _ as __vite_glob_0_8 } from '../chunks/post9_Cv79xNNC.mjs';
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_akklIja1.mjs';
import 'kleur/colors';
import { $ as $$Postcard, a as $$Home } from '../chunks/postcard_RhhaUAYS.mjs';
import { $ as $$Aside } from '../chunks/aside_CbcIQ928.mjs';
import { f as formatBlogPosts } from '../chunks/helpers_CA-N6K6D.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const matches = await /* #__PURE__ */ Object.assign({"./posts/post1.md": __vite_glob_0_0,"./posts/post2.md": __vite_glob_0_1,"./posts/post3.md": __vite_glob_0_2,"./posts/post4.md": __vite_glob_0_3,"./posts/post5.md": __vite_glob_0_4,"./posts/post6.md": __vite_glob_0_5,"./posts/post7.md": __vite_glob_0_6,"./posts/post8.md": __vite_glob_0_7,"./posts/post9.md": __vite_glob_0_8});
  const posts = Object.values(matches);
  const formatPosts = formatBlogPosts(posts);
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Home", $$Home, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container px-6 py-12 mx-auto"> <div class="flex flex-col lg:flex-row gap-y-8 lg:divide-x divide-gray-100"> <div class="w-full lg:w-2/3 lg:px-8"> <div class=""> <h3 class="relative w-full flex items-center my-8"> <span class="pr-3 text-lg text-pink-900 uppercase !relative">Future Posts
</span> <span class="relative flex-grow h-1 bg-gray-100 before:content-[''] before:absolute before:h-1 before:w-8 before:bg-pink-900 before:right-0"></span> </h3> <div class="flex flex-col md:flex-row gap-4"> ${formatPosts.slice(0, 1).map((post) => renderTemplate`<div class="relative overflow-hidden text-gray-900 bg-gray-100 flex flex-col items-center rounded-t-md [&>.desc]:p-6 [&>div>a>img]:rounded-t-md"> ${renderComponent($$result2, "Postcard", $$Postcard, { "frontmatter": post.frontmatter, "url": post.url })} </div>`)} <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-8"> ${formatPosts.slice(1, 4).map(
    (post) => renderTemplate`<div class="relative overflow-hidden text-gray-900 bg-gray-100 border p-2 flex flex-col md:flex-row items-start gap-2 rounded-md shadow-xl [&>div]:relative [&>div]:overflow-hidden [&>div]:rounded-md [&>div>a>img]:md:h-28 [&>div>a>img]:md:w-64 hover:[&>div>a>img]:rounded-md [&>div>a>img]:rounded-b-md [&>div]:md:px-0 [&>div]:md:py-0 [&>div>a]:md:text-[10px] [&>div>a>h4]:md:text-sm [&>div>div>a]:md:hidden [&>div>p]:md:hidden"> ${renderComponent($$result2, "Postcard", $$Postcard, { "frontmatter": post.frontmatter, "url": post.url })} </div>`
  )} </div> </div> </div> <h3 class="relative w-full flex items-center my-12"> <span class="pr-3 text-lg text-pink-900 !relative">LATEST POSTS
</span> <span class="relative flex-grow h-1 bg-gray-100 before:content-[''] before:absolute before:h-1 before:w-8 before:bg-pink-900 before:right-0"></span> </h3> <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 [&>div]:overflow-hidden [&>div>a>img]:hover:rounded-t-md"> ${formatPosts.slice(4, 9).map(
    (post) => renderTemplate`<div class="relative overflow-hidden text-gray-900 bg-gray-100 flex flex-col items-center rounded-t-md [&>.desc]:p-6 [&>div>a>img]:rounded-t-md"> ${renderComponent($$result2, "Postcard", $$Postcard, { "frontmatter": post.frontmatter, "url": post.url })} </div>`
  )} </div> </div> ${renderComponent($$result2, "Aside", $$Aside, {})} </div> </div> </section> ` })}`;
}, "/home/syaiful/Documents/Blog/blog news/src/pages/index.astro", void 0);

const $$file = "/home/syaiful/Documents/Blog/blog news/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
