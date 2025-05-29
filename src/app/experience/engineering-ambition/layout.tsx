import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tristan Simpson | Engineering Ambition",
  description: "Experience at Engineering Ambition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
