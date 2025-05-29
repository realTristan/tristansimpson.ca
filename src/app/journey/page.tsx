import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tristan Simpson | Journey",
  description: "Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
