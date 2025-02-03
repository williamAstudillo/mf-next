import { AxiosInstanceBuilder } from "./axios-builder/axios-builder.instances";

const instanceBuilder = new AxiosInstanceBuilder(
  process.env.NEXT_PUBLIC_PRODUCTS_URL
);
const axiosInstance = instanceBuilder.build();
export { axiosInstance };
