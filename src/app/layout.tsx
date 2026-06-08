import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Loc Nguyen CPA | Tax Preparation & Advisory",
    template: "%s | Loc Nguyen CPA",
  },
  description:
    "CPA tax preparation and advisory for professionals with equity compensation, startup founders, and small business owners.",
  keywords: [
    "CPA",
    "tax preparation",
    "RSU tax",
    "ISO tax",
    "startup tax",
    "C corporation tax return",
    "penalty abatement",
  ],
  openGraph: {
    title: "Loc Nguyen CPA",
    description:
      "Thoughtful tax preparation and proactive guidance for complex financial lives.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
