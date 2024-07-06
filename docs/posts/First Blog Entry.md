# Create a Blog using Vitepress

I created this blog using [vitepress](https://vitepress.dev/). Vitepress is mostly used for docs. But I decided to create my blog using this as this seems pretty convenient.

Other than stripping down many design elements, I have only added an auto sidebar which would automatically populate the sidebar as I keep adding new posts.

### Setup auto sidebar

Install module,

```bash
npm install vite-plugin-vitepress-auto-sidebar --save
```

Update config.mjs with following entries,

```js
import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'; // [!code focus]
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  base: '/blog/',
  description: "Technology | Art",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mintojoseph' }
    ],
  },
  vite: { // [!code focus]
  plugins: [ // [!code focus]
      AutoSidebar({ // [!code focus]
      }) // [!code focus]
    ]  // [!code focus]
  }  // [!code focus]
})
```

Now the side bar updates as I post new files.


### routing

As I am hosting the blog under a subpath, I needed to specify a base path as well.


```js
  base: '/blog/',
```
