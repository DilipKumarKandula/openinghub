import "./globals.css";
// import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <ThemeProvider> */}
          <Navbar />
          {children}
          <Footer></Footer>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}