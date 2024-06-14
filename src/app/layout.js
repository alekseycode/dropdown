import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./appComponents/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dropdown",
  description: "A dropdown menu for nav links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
