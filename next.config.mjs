 
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include MDX files
//   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//   // Optionally, add any other Next.js config below
// }

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//   },
// })
 
// module.exports = withMDX(nextConfig)
import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
 
/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
  theme: "github-dark",
};
 
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
 
/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };
 
export default withMDX(nextConfig);