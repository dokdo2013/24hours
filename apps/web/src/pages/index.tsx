import { useState } from "react";
import StackedLists from "../components/StackedLists";
import Head from "next/head";
import Footer from "../components/Footer";

import localFont from "next/font/local";
const seolleim = localFont({
  src: "../../public/fonts/seolleimcool-SemiBold.woff2",
});

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>24시간이 모자라</title>
      </Head>
      <div className="bg-gray-900 min-h-screen">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">24시간이 모자라</span>
                <span className="flex items-center gap-2">
                  <img className="h-8 w-auto" src="/24hours_logo.png" alt="" />
                  <h1 className={`text-white text-xl ${seolleim.className}`}>
                    24시간이 모자라
                  </h1>
                </span>
              </a>
            </div>
          </nav>
        </header>

        <main className="relative isolate pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <section className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-3xl !leading-tight font-bold tracking-tight text-white sm:text-6xl">
                  20<span className="text-blue-300">24</span>년에는{" "}
                  <span className="break-keep">
                    프로젝트 <span className="text-blue-300">24</span>개,
                  </span>
                  <br />
                  <span className="text-blue-300">24</span>시간이 모자라
                  <span className="text-sm font-light ml-4 tracking-wide block sm:inline">
                    by{" "}
                    <a
                      href="https://github.com/dokdo2013"
                      target="_blank"
                      className="hover:underline"
                    >
                      현우(@dokdo2013)
                    </a>
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  24시간이 부족한 내 마음을 알까, 밤낮 가리지 않고 24개
                  프로젝트를 끝내보자
                </p>
              </div>
            </div>
          </section>

          <section className="container mx-auto max-w-5xl pb-20">
            <StackedLists />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
