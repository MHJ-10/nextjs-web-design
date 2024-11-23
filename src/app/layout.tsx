import * as React from "react";
import Providers from "./Providers";
import Navbar from "./ui/Navbar";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
