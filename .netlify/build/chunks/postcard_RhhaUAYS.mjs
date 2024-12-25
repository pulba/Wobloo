import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, j as renderSlot, m as maybeRenderHead, g as addAttribute } from './astro/server_akklIja1.mjs';
import 'kleur/colors';
import { $ as $$Main, a as $$Icon } from './main_DV75ckjB.mjs';
import { s as slugify, a as formatDate } from './helpers_CA-N6K6D.mjs';

const $$Astro$1 = createAstro();
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Home;
  const { title, desc } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": title, "desc": desc }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/syaiful/Documents/Blog/blog news/src/layouts/home.astro", void 0);

const $$Astro = createAstro();
const $$Postcard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Postcard;
  const { frontmatter, url } = Astro2.props;
  const { title, date, author, image, description, categories } = frontmatter;
  const maxLength = 50;
  const truncatedDescription = description.length > maxLength ? description.slice(0, maxLength) + "..." : description;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden w-full"> <a${addAttribute(url, "href")} class="relative overflow-hidden"> <img${addAttribute(image.img, "src")}${addAttribute(image.alt, "alt")} class="w-full rounded-t-md aspect-video object-center object-cover hover:scale-110 hover:rounded-md transition-all ease-linear duration-300"> </a> </div> <div id="desc" class="desc px-6 py-12 w-full"> <a${addAttribute(`/categories/${slugify(categories)}/`, "href")} class="font-josefin uppercase text-sm text-pink-900">${categories} </a> <a${addAttribute(url, "href")}> <h4 class="font-bold font-josefin text-2xl sm:text-2xl capitalize hover:text-pink-900 text-gray-600"> ${title} </h4> </a> <p class="my-2"> ${truncatedDescription} <a${addAttribute(url, "href")} class="text-pink-900">
Read more
</a> </p> <div class="flex gap-2 items-end text-gray-500 text-sm"> <a${addAttribute(`/author/${slugify(author)}/`, "href")} class="flex gap-1 items-center"> ${renderComponent($$result, "Icon", $$Icon, { "path": "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z", "primary": "w-4 h-4" })} ${author} </a> <span class="flex gap-1 items-center"> ${renderComponent($$result, "Icon", $$Icon, { "path": "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", "primary": "w-4 h-4" })} ${formatDate(date)} </span> </div> </div>`;
}, "/home/syaiful/Documents/Blog/blog news/src/components/postcard.astro", void 0);

export { $$Postcard as $, $$Home as a };
