import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
    title: "Samuel Gledhill",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-[#0F172A]">  
                {children}
                <Analytics />
            </body>
        </html>
    );
}
