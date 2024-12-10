import { variables } from "app/sass/variables";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: variables,
  },
  output: "export",
};

export default nextConfig;
