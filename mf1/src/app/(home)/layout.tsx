import { Header } from "app/components/Header/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      layout internoooooo
      <Header />
      {children}
    </div>
  );
}
