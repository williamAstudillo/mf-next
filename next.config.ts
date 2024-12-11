import { variables } from "app/sass/variables";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: variables,
  },
  output: "export",
  images: { unoptimized: true },
  basePath: "/mf1",
};

export default nextConfig;
