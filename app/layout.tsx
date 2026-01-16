// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import { ThemeProvider } from "./components/theme-switch";
import Header from "./components/Header";
import DraculaOverlay from "./components/Dracula";
import { metaData } from "./lib/config";

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
    images: ["/photos/avatar.jpeg"],
  },
  icons: {
    icon: [{ url: "/photos/avatar.jpeg", type: "image/jpeg", sizes: "1000x1000" }],
    apple: "/photos/avatar.jpeg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* add a kill-switch class to guarantee no legacy body margin/padding applies */}
      <body className={`${inter.className} ${pressStart.variable} antialiased no-body-push`}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {/* Fixed right sidebar (client) */}
         

          {/* Page wrapper — no grid, just a centered container so fixed header never affects centering */}
          <div className="min-h-screen">
            <main className="relative isolate w-full max-w-[1000px] mx-auto px-6 sm:px-4 md:px-0">
              <span className="accent-line" aria-hidden />
              {children}
              <DraculaOverlay />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
