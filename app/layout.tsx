import "./globals.css";

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
                    rel="shortcut icon"
                    href="/logo-square.png"
                    type="image/x-icon"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className=" antialiased tracking-tighter">{children}</body>
        </html>
    );
}
