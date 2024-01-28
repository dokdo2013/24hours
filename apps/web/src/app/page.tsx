import type { Metadata } from "next";
import StackedLists from "./components/StackedLists";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "24시간이 모자라",
};

export default function Index() {
  return (
    <>
      <Header fixed />

      <main className="relative isolate pt-20">
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

        <section className="py-20 sm:py-28 lg:pb-40">
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
                24시간이 부족한 내 마음을 알까, 밤낮 가리지 않고 24개 프로젝트를
                끝내보자
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-5xl pb-20">
          <StackedLists />
        </section>
      </main>
      <Footer />
    </>
  );
}
