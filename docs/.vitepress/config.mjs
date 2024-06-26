import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig(
  {
  head: [
      [
        'script',
        { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-CDDRE89N1P' }
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-CDDRE89N1P');`
      ]
  ],
  base: '/vitepress-blog/',
  title: " ",
  description: "Technology | Art",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
      // { text: 'Examples', link: '/markdown-examples' },
      // { text: 'Posts', link: '/posts' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mintojoseph' }
    ],
  },
  vite: {
  plugins: [

      AutoSidebar({
      })
    ]  
  }  
})


