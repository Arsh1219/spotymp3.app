import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" />
      <body className={`bg-zinc-950 text-gray-200 ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
