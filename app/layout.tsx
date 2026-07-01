import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { MetaPixel } from "@/components/MetaPixel";

const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-tc"
});

export const metadata: Metadata = {
  title: "57益智生活館加盟｜0加盟金・24H無人自助桌遊空間",
  description:
    "57益智生活館提供 0 加盟金合作方案，結合智能預約收款、遠端管理後台、D1 合法規劃與總部行銷支援，打造低人力、可試算的無人娛樂空間加盟模式。",
  openGraph: {
    title: "57益智生活館加盟｜0加盟金・24H無人自助桌遊空間",
    description:
      "結合智能預約收款、遠端管理後台、D1 合法規劃與總部行銷支援，打造低人力、可試算的無人娛樂空間加盟模式。",
    type: "website",
    locale: "zh_TW"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={notoSansTc.variable}>
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
