import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tristan Simpson | Graphics & Physics",
  description: "Graphics & Physics Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
