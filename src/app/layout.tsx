import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/lib/trpc/client";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { FooterText } from "@/components/footer-text";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Tristan Simpson",
    template: "%s",
  },
  description:
    "Full-stack software developer showcasing innovative projects, technical expertise, and professional journey in web development and software engineering.",
  keywords: [
    "portfolio",
    "projects",
    "journey",
    "experience",
    "tristan",
    "simpson",
    "software developer",
    "full stack developer",
    "web developer",
    "software engineer",
    "yncu",
    "university of guelph",
    "dominion lending",
    "engineering ambition",
    "hermes",
    "versa",
    "graphics",
    "rapier",
    "three.js",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Tristan Simpson" }],
  creator: "Tristan Simpson",
  publisher: "Tristan Simpson",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXTAUTH_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tristansimpson.ca",
    title: "Tristan Simpson",
    description:
      "Full-stack software developer showcasing innovative projects, technical expertise, and professional journey in web development and software engineering.",
    siteName: "Tristan Simpson",
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCProvider>
            {children}
            <FooterText />
            <Toaster />
          </TRPCProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
