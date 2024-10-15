import { Inter } from "next/font/google";
import { Navbar } from "./component/navbar";
import "./globals.css";
import Footer from "./component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jem-digital",
  description: "Increase sales by reaching a larger audience with our results driven campaigns to increase your online visibility and drive more people to your business.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="favicon-16x16"
        href="/favicon-16x16.png"
        type="image/png"
        sizes="16x16"
      />
      <link
        rel="favicon-32x32"
        href="/favicon-32x32.png"
        type="image/png"
        sizes="32x32"
      />
      <link
        rel="apple-touch-icon"
        href="/apple-icon.png"
        type="image/png"
        sizes="<generated>"
      />
      <link
        rel="android-chrome-192x192"
        href="/android-chrome-192x192.png"
        type="image/png"
        sizes="192x192"
      />
      <link
        rel="android-chrome-512x512"
        href="/android-chrome-512x512.png"
        type="image/png"
        sizes="512x512"
      />
      
      <body className={`${inter.className} scroll-smooth`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
