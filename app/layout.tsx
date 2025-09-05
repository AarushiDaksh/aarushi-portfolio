// app/layout.tsx (RootLayout)
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import { ThemeProvider } from "./components/theme-switch";
import Footer from "./components/footer";
import Header from "./components/Header";
import { metaData } from "./lib/config";
import { Navbar } from "./components/nav";
import DraculaOverlay from "./components/Dracula";

const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--font-minecraft" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: { default: metaData.title, template: `%s | ${metaData.title}` },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage ?? "/photos/aa.png",
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
    images: ["/photos/d.png"],
  },
  icons: {
    icon: [{ url: "/photos/d.png", type: "image/png", sizes: "1000x1000" }],
    apple: "/photos/d.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${pressStart.variable} antialiased flex flex-col items-center justify-center mx-auto mt-0 lg:mt-8 mb-12`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Make this container positioning context for the line */}
          <main className="relative isolate flex-auto min-w-0 mt-0 md:mt-0 flex flex-col px-6 sm:px-4 md:px-0 max-w-[800px] w-full">
            {/* accent line (top of every page content) */}
            <span className="accent-line" aria-hidden />

            <Header />
            {children}
            <DraculaOverlay />
            <Navbar />
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
