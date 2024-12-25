/* empty css                                 */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_akklIja1.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_B_aPbgGs.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Contact Us |", "desc": "Vestibulum luctus, erat non sollicitudin gravida, nisi elit mollis nunc, rhoncus posuere nulla tortor non magna. " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class=""> Morbi commodo porttitor velit sit amet sagittis. Duis in sem ut turpis pellentesque finibus at id mauris. Vivamus sed est ullamcorper, ullamcorper turpis ut, faucibus nisl. Ut sed est eget eros interdum dapibus vel ut lacus. Vestibulum faucibus suscipit elit, nec laoreet neque facilisis eget. Duis nibh tellus, ornare a pulvinar sed, porta semper turpis. Proin ullamcorper id lorem id dapibus. Mauris eu auctor sem, nec euismod elit. Donec vel nisi a sem iaculis pulvinar et vitae lorem.
</p> ` })}`;
}, "/home/syaiful/Documents/Blog/blog news/src/pages/contact.astro", void 0);

const $$file = "/home/syaiful/Documents/Blog/blog news/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
