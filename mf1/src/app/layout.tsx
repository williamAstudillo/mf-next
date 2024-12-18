import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import "app/sass/globals.sass";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Categorias</Link>
          </li>
          <li>
            <Link href="/home">Home ruta </Link>
          </li>
          <li>
            <Link href="/products">products ruta </Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
