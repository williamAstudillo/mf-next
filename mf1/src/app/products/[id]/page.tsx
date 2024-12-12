import { Metadata } from "next";
import Head from "next/head";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
  const products = await res.json();
  return products.map((product: { id: number }) => ({
    id: product.id + "",
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const id = (await params).id;

  return {
    title: "titleeee" + id,
  };
}
// export function generateStaticParams() {
//   return [{ id: "1" }, { id: "2" }, { id: "3" }];
// }

async function page(props: { params: Params }) {
  const params = (await props.params).id;
  if (!params) return <></>;
  return (
    <div>
      <Head>
        <title>My page title {params}</title>
      </Head>
      {params}
    </div>
  );
}

export default page;
