// app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dripit — Discover Fashion Beyond Brands",
  description:
    "Dripit is a platform focused on independent fashion designers. Discover unique clothing from voices beyond mainstream brands. Launching soon — join the waitlist.",
  openGraph: {
    title: "Dripit — Discover Fashion Beyond Brands",
    description:
      "A new platform for independent fashion. Launching soon — join the waitlist.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dripit — Discover Fashion Beyond Brands",
    description:
      "A new platform for independent fashion. Launching soon — join the waitlist.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
