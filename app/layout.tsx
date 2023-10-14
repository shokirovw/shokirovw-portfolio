import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Shokirov's Space"
// }

export default function RootestLayout ({ children }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Shokirov's Space</title>
        </head>
        <body>
            {children}
        </body>
        </html>
    );
}