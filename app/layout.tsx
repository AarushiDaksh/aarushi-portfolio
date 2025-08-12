import "./globals.css";
import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import { ThemeProvider } from "./components/theme-switch";
import Footer from "./components/footer";
import Header from "./components/Header";
import { metaData } from "./lib/config";
import { Navbar } from "./components/nav";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-minecraft",
});
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
    images: ["/photos/aa.png"], // optional but nice for consistency
  },
  // Files must live in /public; reference them with a leading slash
  icons: {
    icon: [
      { url: "/photos/aa.png", type: "image/png", sizes: "1000x1000" },
      // keep a classic favicon too if you have it:
      // { url: "/favicon.ico" }
    ],
    // optional Apple touch icon (ideally 180x180)
    apple: "/photos/aa.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${pressStart.variable} antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-12`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[800px] w-full">
            <Header />
            {children}
            <Navbar />
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
