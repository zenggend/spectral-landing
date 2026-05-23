const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubActions ? "/spectral-landing" : "",
  assetPrefix: isGitHubActions ? "/spectral-landing/" : "",
};

export default nextConfig;
