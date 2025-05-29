import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tristan Simpson | Experience",
  description: "Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
