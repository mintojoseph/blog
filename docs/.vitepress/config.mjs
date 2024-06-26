import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-blog/',
  // base: '/base/',
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
