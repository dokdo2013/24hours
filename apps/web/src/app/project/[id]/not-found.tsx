"use client"; // Error components must be Client Components

import Header from "@/app/components/Header";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <Header fixed />

      <main className="relative isolate pt-20 grid mt-20 place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">Error 404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            앗, 프로젝트를 찾을 수 없어요...
          </h1>
          <p className="mt-6 text-base leading-7 text-white">
            존재하지 않는 프로젝트에요. 프로젝트가 삭제되었거나, URL이 잘못
            입력되었을 수 있어요.
            <br />
            문제가 지속된다면 GitHub 이슈를 통해 알려주세요.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              홈으로 돌아가기
            </Link>
            <a
              href="https://github.com/dokdo2013/24hours/issues"
              className="text-sm font-semibold text-white"
              target="_blank"
            >
              GitHub 이슈 등록하기 <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
