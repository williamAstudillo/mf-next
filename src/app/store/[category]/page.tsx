import { Header } from "app/components/Header/Header";
type Params = Promise<{ category: string }>;

export async function generateStaticParams() {
  return [{ category: "1" }, { category: "2" }, { category: "3" }];
}

const Page = async (props: { params: Params }) => {
  const { category } = await props.params;
  return (
    <>
      <Header />
      store
      {" " + category}
    </>
  );
};

export default Page;
