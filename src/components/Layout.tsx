import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className={inter.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
