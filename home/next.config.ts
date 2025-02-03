import { variables } from "app/sass/variables";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: variables,
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
};

export default nextConfig;
