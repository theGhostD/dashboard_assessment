import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/services/ReactQueryProvider";
import { ConfigProvider } from "antd";
import { antdTheme } from "@/theme";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Poppins } from "next/font/google";
import { ProductProvider } from "@/app/context/productContext";
export const metadata: Metadata = {
  title: "CRM Dashboard",
  description: "Dave Assessment",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} antialiased`}
        suppressHydrationWarning
      >
        <ReactQueryProvider>
          <ConfigProvider theme={antdTheme}>
            <AntdRegistry>
              <ProductProvider>{children}</ProductProvider>
            </AntdRegistry>
          </ConfigProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
