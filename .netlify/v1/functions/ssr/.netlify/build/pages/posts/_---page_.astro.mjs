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
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent, h as createAstro } from '../../chunks/astro/server_akklIja1.mjs';
import 'kleur/colors';
import { $ as $$Postcard, a as $$Home } from '../../chunks/postcard_RhhaUAYS.mjs';
import { $ as $$Aside } from '../../chunks/aside_CbcIQ928.mjs';
import { a as $$Icon } from '../../chunks/main_DV75ckjB.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, primary, path, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-blue-600 rounded-md flex items-center -mx-1"> ${renderComponent($$result, "Icon", $$Icon, { "path": path, "primary": primary })} <span class="mx-1"> ${text} </span> </a>`;
}, "/home/syaiful/Documents/Blog/blog news/src/components/button.astro", void 0);

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-center items-center gap-4 mt-12"> ${prevUrl && renderTemplate`${renderComponent($$result, "Button", $$Button, { "text": "Previous", "href": prevUrl, "primary": "w-6 h-6 mx-1 rtl:-scale-x-100", "path": "M7 16l-4-4m0 0l4-4m-4 4h18" })}`} ${nextUrl && renderTemplate`${renderComponent($$result, "Button", $$Button, { "text": "Next", "href": nextUrl, "primary": "w-6 h-6 mx-1 rtl:-scale-x-100", "path": "M17 8l4 4m0 0l-4 4m4-4H3" })}`} </nav>`;
}, "/home/syaiful/Documents/Blog/blog news/src/components/pagination.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  Astro2.props;
  const allPosts = /* #__PURE__ */ Object.assign({"./post1.md": __vite_glob_0_0,"./post2.md": __vite_glob_0_1,"./post3.md": __vite_glob_0_2,"./post4.md": __vite_glob_0_3,"./post5.md": __vite_glob_0_4,"./post6.md": __vite_glob_0_5,"./post7.md": __vite_glob_0_6,"./post8.md": __vite_glob_0_7,"./post9.md": __vite_glob_0_8});
  const posts = Object.values(allPosts).map((post) => post).sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA;
  });
  const ITEMS_PER_PAGE = 5;
  const currentPage = parseInt(Astro2.params.page) || 1;
  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedPosts = posts.slice(start, end);
  const prevUrl = currentPage > 1 ? `/posts/${currentPage - 1}` : null;
  const nextUrl = currentPage < totalPages ? `/posts/${currentPage + 1}` : null;
  return renderTemplate`${renderComponent($$result, "Home", $$Home, { "title": "Blog |" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container px-6 py-12 mx-auto"> <div class="flex flex-col lg:flex-row gap-y-8 lg:divide-x divide-gray-100"> <div class="w-full lg:w-2/3 lg:px-8 my-8"> <h1 class="text-3xl font-bold mb-6">Blog Posts</h1> <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8"> ${paginatedPosts.map((post) => renderTemplate`<div class="relative overflow-hidden text-gray-900 bg-gray-100 flex flex-col items-center rounded-t-md [&>.desc]:p-6 [&>div>a>img]:rounded-t-md"> ${renderComponent($$result2, "Postcard", $$Postcard, { "frontmatter": post.frontmatter, "url": post.url })} </div>`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": prevUrl, "nextUrl": nextUrl })} </div> ${renderComponent($$result2, "Aside", $$Aside, {})} </div> </div> </section> ` })}`;
}, "/home/syaiful/Documents/Blog/blog news/src/pages/posts/[...page].astro", void 0);

const $$file = "/home/syaiful/Documents/Blog/blog news/src/pages/posts/[...page].astro";
const $$url = "/posts/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
