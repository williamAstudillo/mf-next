import { variables } from "app/sass/variables";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: variables,
  },
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
