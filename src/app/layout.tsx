import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/styles/global.css'
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/scroll-to-top";

 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 
export const metadata: Metadata = {
  title: "Luminous Moments | Sri Lankan Wedding Photography",
  description: "Capturing the beauty and elegance of Sri Lankan weddings with stunning photography",
  keywords: ["wedding photographer", "Sri Lanka", "photography", "wedding", "professional photographer", "portrait", "engagement"],
  authors: [
    {
      name: "Luminous Moments Photography",
      url: "https://luminousmoments.com",
    },
  ],
};

 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
 
      <body
        suppressHydrationWarning  
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}