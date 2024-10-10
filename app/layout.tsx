import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const segoeUILight = localFont({
  src: "./fonts/segoe-ui-4/SegoeUILight.ttf",
  variable: "--font-segoe-ui-light",
  weight: "300",
});
const segoeUILightItalic = localFont({
  src: "./fonts/segoe-ui-4/SegoeUILightItalic.ttf",
  variable: "--font-segoe-ui-light-italic",
  weight: "300",
});
const segoeUI = localFont({
  src: "./fonts/segoe-ui-4/SegoeUI.ttf",
  variable: "--font-segoe-ui",
  weight: "400",
});
const segoeUIItalic = localFont({
  src: "./fonts/segoe-ui-4/SegoeUIItalic.ttf",
  variable: "--font-segoe-ui-italic",
  weight: "400",
});
const segoeUIBold = localFont({
  src: "./fonts/segoe-ui-4/SegoeUIBold.ttf",
  variable: "--font-segoe-ui-bold",
  weight: "700",
});
const segoeUIBoldItalic = localFont({
  src: "./fonts/segoe-ui-4/SegoeUIBoldItalic.ttf",
  variable: "--font-segoe-ui-bold-italic",
  weight: "700",
});
const caveatBold = localFont({
  src: "./fonts/caveat/caveat-bold.ttf",
  variable: "--font-caveat-bold",
  weight: "700",
});
const inter = localFont({
  src: "./fonts/inter/inter-regular.ttf",
  variable: "--font-inter",
  weight: "400",
});
const interSemiBold = localFont({
  src: "./fonts/inter/inter-semi-bold.ttf",
  variable: "--font-inter-semi-bold",
  weight: "600",
});
const interExtraBold = localFont({
  src: "./fonts/inter/inter-extra-bold.ttf",
  variable: "--font-inter-extra-bold",
  weight: "800",
});

export const metadata: Metadata = {
  title: "Komodo Island",
  description: "A portfolio by Antlia Creative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${segoeUILight.variable} ${segoeUILightItalic.variable} ${segoeUI.variable} ${segoeUI.variable} ${segoeUIItalic.variable} ${segoeUIBold.variable} ${segoeUIBoldItalic.variable} ${caveatBold.variable} ${inter.variable} ${interSemiBold.variable} ${interExtraBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
