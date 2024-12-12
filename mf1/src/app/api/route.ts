export const dynamic = "force-static";
import { getProducts } from "app/services/services";

export async function GET() {
  const res = await getProducts();
  return Response.json({ data: res });
}
