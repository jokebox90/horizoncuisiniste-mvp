import { GoogleTagManager } from "@next/third-parties/google";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <GoogleTagManager gtmId="G-M5CQMKJ2SC" />
    </Html>
  );
}
