import "@/styles/globals.css";
import { pretendard } from "./common/font";
import classNames from "classnames";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "24시간이 모자라",
  description:
    "2024년에는 프로젝트 24개! 24시간이 모자라에서 압도적인 사이드 프로젝트를 위해서 노력하는 여정을 살펴보세요",
  icons: "/24hours_logo.png",
};

export default function RootLayout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="bg-gray-900">
      <body className={classNames(pretendard.variable, "font-sans")}>
        {modal}

        <div className="bg-gray-900 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
