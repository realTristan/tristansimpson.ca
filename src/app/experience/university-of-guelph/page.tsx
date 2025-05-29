import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tristan Simpson | University of Guelph",
  description: "Experience at The University of Guelph",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
