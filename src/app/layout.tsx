import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpsNerve.ai - Real-time Anomaly Detection for DevOps",
  description: "AI-powered anomaly detection and root cause intelligence platform for DevOps/SRE teams. From alert to root cause in seconds.",
  icons: {
    icon: "/OpsNerve-icon.svg",
    shortcut: "/OpsNerve-icon.svg",
    apple: "/OpsNerve-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">{children}</body>
    </html>
  );
}
