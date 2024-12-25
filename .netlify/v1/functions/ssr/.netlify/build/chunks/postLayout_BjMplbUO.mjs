import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead, g as addAttribute, j as renderSlot } from './astro/server_akklIja1.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Main } from './main_DV75ckjB.mjs';
import { $ as $$Aside } from './aside_CbcIQ928.mjs';
import { s as slugify, a as formatDate } from './helpers_CA-N6K6D.mjs';

const $$Astro = createAstro();
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { title, desc, frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": title, "desc": desc }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container py-20 px-6 mx-auto"> <div class="flex flex-col lg:flex-row gap-12"> <div class="w-full lg:w-2/3 text-gray-800 px-6"> <a${addAttribute(`/tags/${slugify(frontmatter.tags)}/`, "href")} class="font-josefin uppercase text-md text-pink-900">${frontmatter.tags} </a> <h1 class="font-bold font-montserrat text-pink-900 capitalize text-4xl md:text-4xl"> ${frontmatter.title} </h1> <div class="flex items-center gap-2 mt-2 mb-5"> <p class="flex gap-2 items-end text-gray-500 text-sm"> <a${addAttribute(`/author/${slugify(frontmatter.author)}/`, "href")} class="flex gap-1 items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "path": "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z", "primary": "w-4 h-4" })} ${frontmatter.author} </a> <span class="flex gap-1 items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "path": "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", "primary": "w-4 h-4" })} ${formatDate(frontmatter.date)} </span> </p> </div> <img${addAttribute(frontmatter.image.img, "src")}${addAttribute(frontmatter.image.alt, "alt")} class="mb-12 aspect-video"> <div class="prose prose-a:text-blue-900 hover:prose-a:text-blue-500"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ${renderComponent($$result2, "Aside", $$Aside, {})} </div> </div> </section> ` })}`;
}, "/home/syaiful/Documents/Blog/blog news/src/layouts/postLayout.astro", void 0);

export { $$PostLayout as $ };
