import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Shankha Shubhro Ghosh | Radiologist | Kolkata",
  description: "Official clinical portfolio and diagnostic radiology consultation prototype for Dr. Shankha Shubhro Ghosh in Kolkata.",
  metadataBase: new URL("https://drshankhashubhroghosh.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Shankha Shubhro Ghosh | Radiologist | Kolkata",
    description: "Clinical portfolio and diagnostic radiology consultation prototype for Dr. Shankha Shubhro Ghosh in Kolkata.",
    url: "https://drshankhashubhroghosh.example.com",
    siteName: "Dr. Shankha Shubhro Ghosh Clinical Portfolio",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${sansFont.variable} ${serifFont.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#fbfbf9] text-slate-900 selection:bg-teal-100 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
