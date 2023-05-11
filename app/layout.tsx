import "../styles/globals.css";
import Providers from "./Providers";
export const metadata = {
  title: "Nike Shoes Stroe",
  description: "Nike Shoes Stroe",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="cutomscoll" className="bg-[#FFFFFF] dark:bg-[black]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
