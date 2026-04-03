import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kai Skin Advisor",
  description: "你的專屬皮膚顧問 - 簡單、直接、有效的護膚建議",
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">{children}</body>
    </html>
  );
}
