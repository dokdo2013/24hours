import "@/styles/globals.css";
import { pretendard } from "./common/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-900">
      <head>
        <link rel="icon" href="/24hours_logo.png" />
        <meta
          name="description"
          content="2024년에는 프로젝트 24개! 24시간이 모자라에서 압도적인 사이드 프로젝트를 위해서 노력하는 여정을 살펴보세요"
        />
      </head>
      <body className={`${pretendard.variable} font-sans`}>{children}</body>
    </html>
  );
}
