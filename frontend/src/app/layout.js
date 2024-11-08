import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

export const metadata = {
    title: "Legistai",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${poppins.className} bg-[#707070] flex items-center justify-center min-h-screen`}>
        <div className="bg-white w-[1440px] h-[1024px] rounded-lg shadow-lg ">
            {children}
        </div>
        </body>
        </html>
    );
}