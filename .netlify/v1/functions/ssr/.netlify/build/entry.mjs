import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BcxZKbLA.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/author/_---author_.astro.mjs');
const _page3 = () => import('./pages/categories/_category_.astro.mjs');
const _page4 = () => import('./pages/categories.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/posts/post1.astro.mjs');
const _page7 = () => import('./pages/posts/post2.astro.mjs');
const _page8 = () => import('./pages/posts/post3.astro.mjs');
const _page9 = () => import('./pages/posts/post4.astro.mjs');
const _page10 = () => import('./pages/posts/post5.astro.mjs');
const _page11 = () => import('./pages/posts/post6.astro.mjs');
const _page12 = () => import('./pages/posts/post7.astro.mjs');
const _page13 = () => import('./pages/posts/post8.astro.mjs');
const _page14 = () => import('./pages/posts/post9.astro.mjs');
const _page15 = () => import('./pages/posts/_---page_.astro.mjs');
const _page16 = () => import('./pages/tags/_tag_.astro.mjs');
const _page17 = () => import('./pages/tags.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/author/[...author].astro", _page2],
    ["src/pages/categories/[category].astro", _page3],
    ["src/pages/categories/index.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/posts/post1.md", _page6],
    ["src/pages/posts/post2.md", _page7],
    ["src/pages/posts/post3.md", _page8],
    ["src/pages/posts/post4.md", _page9],
    ["src/pages/posts/post5.md", _page10],
    ["src/pages/posts/post6.md", _page11],
    ["src/pages/posts/post7.md", _page12],
    ["src/pages/posts/post8.md", _page13],
    ["src/pages/posts/post9.md", _page14],
    ["src/pages/posts/[...page].astro", _page15],
    ["src/pages/tags/[tag].astro", _page16],
    ["src/pages/tags/index.astro", _page17],
    ["src/pages/index.astro", _page18]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "aefc0f89-4de8-49e0-ad34-6b612b2ff931"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
