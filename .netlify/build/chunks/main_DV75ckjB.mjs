import { e as createComponent, r as renderTemplate, g as addAttribute, h as createAstro, m as maybeRenderHead, i as renderComponent, o as renderScript, j as renderSlot, p as renderHead } from './astro/server_akklIja1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro$3 = createAstro();
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Seo;
  const { title, desc } = Astro2.props;
  return renderTemplate`<meta name="generator"${addAttribute(desc, "content")}><title>${title} Wobloo</title>`;
}, "/home/syaiful/Documents/Blog/blog news/src/components/seo.astro", void 0);

const $$Astro$2 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Logo;
  const { link, name, namesc, primaryst, primarysc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${primaryst} text-3xl font-montserrat`, "class")}> <a${addAttribute(link, "href")}>${name}<span${addAttribute(`${primarysc} font-bold`, "class")}>${namesc}</span>.</a> </div>`;
}, "/home/syaiful/Documents/Blog/blog news/src/components/logo.astro", void 0);

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  const { path, primary } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(primary, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(path, "d")}></path> </svg>`;
}, "/home/syaiful/Documents/Blog/blog news/src/components/icon.astro", void 0);

const $$Social = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-2 *:text-white *:w-6 *:h-6 hover:*:text-pink-300"> ${renderComponent($$result, "Icon", $$Icon, { "primary": "w-6", "path": "M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z" })} ${renderComponent($$result, "Icon", $$Icon, { "primary": "w-6", "path": "m8.25 7.5.415-.207a.75.75 0 0 1 1.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 0 0 5.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" })} ${renderComponent($$result, "Icon", $$Icon, { "primary": "w-6", "path": "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" })} </div>`;
}, "/home/syaiful/Documents/Blog/blog news/src/components/social.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { name: "Home", href: "/", current: true },
    { name: "Blog", href: "/posts", current: true },
    { name: "About", href: "/about", current: true },
    { name: "Contact", href: "/contact", current: true }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="bg-pink-900 px-6 py-8 mx-auto shadow-[0_5px_8px_rgb(0,0,0,0.12)]"> <div class="max-w-screen-xl mx-auto md:flex items-center justify-between"> <div class="flex items-center justify-between"> ${renderComponent($$result, "Logo", $$Logo, { "link": "/", "name": "Wob", "namesc": "loo", "primaryst": "text-white", "primarysc": "text-pink-400" })} <div class="md:hidden"> <svg id="icon1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6 stroke-white"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path> </svg> <svg id="icon2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6 hidden stroke-white"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path> </svg> </div> </div> <ul id="menu" class="flex flex-col md:flex-row gap-6 mt-8 md:mt-0 hidden md:flex"> ${links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-white font-montserrat hover:text-pink-300 font-bold"> ${link.name} </a> </li>`)} </ul> <div id="btn" class="hidden md:block mt-5 md:mt-0 max-w-1/2 mx-auto md:mx-0"> ${renderComponent($$result, "Social", $$Social, {})} </div> </div> </nav> ${renderScript($$result, "/home/syaiful/Documents/Blog/blog news/src/components/header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/syaiful/Documents/Blog/blog news/src/components/header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-pink-900 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"> <div class="container px-6 py-12 mx-auto"> <div class="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white [&>div>p]:text-pink-300"> <div> <p class="text-lg font-semibold">Blog Us</p> <div class="flex flex-col items-start mt-5 space-y-2"> <a href="#" class="transition-colors duration-300 hover:text-blue-500">BLog</a> <a href="#" class="transition-colors duration-300 hover:text-blue-500">About</a> <a href="#" class="transition-colors duration-300 hover:text-blue-500">Privacy Policy</a> </div> </div> <div> <p class="text-lg font-semibold">Follow Us</p> <div class="flex flex-col items-start mt-5 space-y-2"> <a href="#" class="transition-colors duration-300 hover:text-blue-500">Instagram</a> <a href="#" class="transition-colors duration-300 hover:text-blue-500">Facebook</a> <a href="#" class="transition-colors duration-300 hover:text-blue-500">Tiktok</a> </div> </div> <div> <p class="text-lg font-semibold">Learn More</p> <div class="flex flex-col items-start mt-5 space-y-2"> <a href="#" class="transition-colors duration-300 hover:text-blue-500">Advertise</a> <a href="#" class="transition-colors duration-300 hover:text-blue-500">Disclaimer</a> <a href="#" class="transition-colors duration-300 hover:text-blue-500">ChangeLog</a> </div> </div> <div> <p class="text-lg font-semibold">Contact Us</p> <div class="flex flex-col items-start mt-5 space-y-2"> <a href="#" class="transition-colors duration-300 hover:text-blue-500">+880 768 473 4978</a> <a href="#" class="transition-colors duration-300 hover:text-blue-500">info@frontmatter.com</a> </div> </div> </div> <hr class="my-6 border-gray-200 md:my-10"> <div class="px-6 flex flex-col items-center justify-between sm:flex-row"> <a href="#"> ${renderComponent($$result, "Logo", $$Logo, { "link": "/", "name": "Wob", "namesc": "loo", "primaryst": "text-pink-400", "primarysc": "text-white" })} </a> <p class="mt-4 text-sm text-gray-100 sm:mt-0">© Copyright 2025. All Rights Reserved.</p> </div> </div> </footer>`;
}, "/home/syaiful/Documents/Blog/blog news/src/components/footer.astro", void 0);

const $$Primary = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="min-h-screen"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/home/syaiful/Documents/Blog/blog news/src/components/primary.astro", void 0);

const $$Astro = createAstro();
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const { title, desc } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png">${renderComponent($$result, "Seo", $$Seo, { "title": title, "desc": desc })}${renderHead()}</head> <body class="bg-gray-200"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Primary", $$Primary, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/syaiful/Documents/Blog/blog news/src/layouts/main.astro", void 0);

export { $$Main as $, $$Icon as a };
