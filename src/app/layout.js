import { Inter } from "next/font/google";
import { Navbar } from "./component/navbar";
import "./globals.css";
import Footer from "./component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jem-digital",
  description: "Grow up your business with us!",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
