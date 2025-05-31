import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { TRPCProvider } from "@/lib/trpc/client";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { FooterText } from "@/components/footer-text";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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
    "Tristan Simpson, a full-stack developer with over 5 years of experience in web development and software engineering.",
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
  metadataBase: new URL(process.env.PROD_URL!),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tristansimpson.ca",
    title: "Tristan Simpson",
    description:
      "Tristan Simpson, a full-stack developer with over 5 years of experience in web development and software engineering.",
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
            <Analytics />
          </TRPCProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
