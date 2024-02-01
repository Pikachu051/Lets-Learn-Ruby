import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const raleway = Raleway({ weight: ['300', '500', '700', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Let's get to know Ruby!",
  description: "A web application to learn Ruby programming language.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={raleway.className}>
        <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
      </body>
    </html>
  );
}
