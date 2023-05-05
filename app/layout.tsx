import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            marquee: React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
        }
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className=" antialiased tracking-tight">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
