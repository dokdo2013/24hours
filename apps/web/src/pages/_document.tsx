import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-gray-900">
      <Head>
        <link rel="icon" href="/24hours_logo.png" />
        <meta
          name="description"
          content="2024년에는 프로젝트 24개! 24시간이 모자라에서 압도적인 사이드 프로젝트를 위해서 노력하는 여정을 살펴보세요"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
