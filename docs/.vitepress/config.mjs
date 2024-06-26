import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description: "Technology | Art",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
      // { text: 'Examples', link: '/markdown-examples' },
      // { text: 'Posts', link: '/posts' }
    ],

    // sidebar: [
    //   {
    //     text: 'Posts',
    //     items: [
    //       { text: 'First Blog Entry', link: 'posts/first_post.md' },
    //       // { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mintojoseph' }
    ],
  },
  vite: {
  plugins: [
      // add plugin
      AutoSidebar({
        // path: '/docs/posts'
        // You can also set options to adjust sidebar data
        // see option document below
      })
    ]  
  }  
})
