import { API_PRODUCTS } from "./constants";

export async function GET() {
  let response;
  try {
    response = await fetch(process.env.HOST_NAME + API_PRODUCTS, {
      headers: {
        "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
      },
    });
  } catch (error) {
    console.log(error);
  }

  const data = await response?.json();
  return Response.json({ products: data.products });
}
