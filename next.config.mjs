/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ExampleBlog",
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
  },
};

export default nextConfig;
