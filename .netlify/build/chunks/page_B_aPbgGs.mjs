import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead, j as renderSlot } from './astro/server_akklIja1.mjs';
import 'kleur/colors';
import { $ as $$Main } from './main_DV75ckjB.mjs';

const $$Astro = createAstro();
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Page;
  const { title, desc, subs } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": title, "desc": desc }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container py-20 px-6 font-montserrat mx-auto"> <div class="text-center"> <h1 class="font-bold text-4xl md:text-5xl text-blue-600"> ${title} </h1> <p class="text-gray-500 font-poppins max-w-prose mx-auto mt-2"> ${subs} </p> </div> <div class="mx-auto my-8 py-6 max-w-4xl"> ${renderSlot($$result2, $$slots["default"])} </div> </div> </section> ` })}`;
}, "/home/syaiful/Documents/Blog/blog news/src/layouts/page.astro", void 0);

export { $$Page as $ };
