import { defineConfig } from "mitarashi";

export default defineConfig({
  site: {
    siteTitle: "My Blog",
    description: "Mitarashiで作られたブログサイト",
    baseUrl: "/",
  },

  paths: {
    postsDir: "posts",
    outputDir: "dist",
    templateDir: "templates",
  },

  theme: {
    layout: "layout.html",
    post: "post.html",
  },

  options: {
    cleanOutputDir: true,
  },
});
