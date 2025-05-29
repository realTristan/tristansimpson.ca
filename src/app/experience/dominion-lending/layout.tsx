import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tristan Simpson | Dominion Lending",
  description: "Experience at Dominion Lending",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
