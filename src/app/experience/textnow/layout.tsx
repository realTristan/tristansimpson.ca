import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tristan Simpson | TextNow",
  description: "Experience at TextNow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
