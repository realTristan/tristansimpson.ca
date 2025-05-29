import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tristan Simpson | Apollo",
  description: "Project Apollo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
