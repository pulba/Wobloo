/* empty css                                    */
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
      params: { tag: slugify("HTML") },
      props: { name: "HTML" }
    },
    {
      params: { tag: slugify("ChatGPT") },
      props: { name: "ChatGPT" }
    },
    {
      params: { tag: slugify("Laptop") },
      props: { name: "laptop" }
    },
    {
      params: { tag: slugify("Update") },
      props: { name: "Update" }
    }
  ];
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  Astro2.props;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post1.md": () => import('../../chunks/post1_BOf_oERO.mjs').then(n => n._),"../posts/post2.md": () => import('../../chunks/post2_BFp98otT.mjs').then(n => n._),"../posts/post3.md": () => import('../../chunks/post3_KWUlMW2u.mjs').then(n => n._),"../posts/post4.md": () => import('../../chunks/post4_CAJUzlG-.mjs').then(n => n._),"../posts/post5.md": () => import('../../chunks/post5_BwcJilwy.mjs').then(n => n._),"../posts/post6.md": () => import('../../chunks/post6_Bke9ZYek.mjs').then(n => n._),"../posts/post7.md": () => import('../../chunks/post7_p6AkzdZ4.mjs').then(n => n._),"../posts/post8.md": () => import('../../chunks/post8_CQKbLHYP.mjs').then(n => n._),"../posts/post9.md": () => import('../../chunks/post9_Cv79xNNC.mjs').then(n => n._)}), () => "../posts/*.md");
  const formatedPosts = formatBlogPosts(allPosts);
  const tagPosts = formatedPosts.filter(
    (post) => slugify(post.frontmatter.tags) === tag
  );
  return renderTemplate`${renderComponent($$result, "Home", $$Home, { "tag": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container px-6 py-12 mx-auto"> <div class="flex flex-col lg:flex-row gap-y-8 lg:divide-x divide-gray-100"> <div class="w-full lg:w-2/3 lg:px-8"> <h3 class="text-2xl capitalize text-center font-bold py-6">
Posts about <span class="text-pink-900">${tag}</span> </h3> <div class="w-full lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8"> ${tagPosts.slice(0, 6).map(
    (post) => renderTemplate`<div class="text-gray-800 border rounded-md shadow-xl"> ${renderComponent($$result2, "Postcard", $$Postcard, { "frontmatter": post.frontmatter, "url": post.url })} </div>`
  )} </div> </div> ${renderComponent($$result2, "Aside", $$Aside, {})} </div> </div> </section> ` })}`;
}, "/home/syaiful/Documents/Blog/blog news/src/pages/tags/[tag].astro", void 0);

const $$file = "/home/syaiful/Documents/Blog/blog news/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
