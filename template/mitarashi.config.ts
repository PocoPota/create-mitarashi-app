import { defineConfig } from "mitarashi";

export default defineConfig({
  site: {
    siteTitle: "My Blog",
    description: "Mitarashiで作られたブログサイト",
  },

  paths: {
    postsDir: "posts",
    outputDir: "dist",
    templateDir: "templates",
    customSyntaxFile: "mitarashi.syntax.json",
  },

  theme: {
    layout: "layout.html",
    post: "post.html",
  },

  options: {
    cleanOutputDir: true,
  },
});
