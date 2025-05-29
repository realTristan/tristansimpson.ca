import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tristan Simpson | YNCU",
  description: "Experience at YNCU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
