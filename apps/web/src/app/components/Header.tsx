import classNames from "classnames";
import { seolleim } from "../common/font";
import Link from "next/link";

export type HeaderProps = {
  /**
   * Fix the header to the top of the screen
   * @default false
   */
  fixed?: boolean;
};

const Header = (
  { fixed }: HeaderProps = {
    fixed: false,
  }
) => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className={classNames("flex items-center justify-between p-6 lg:px-8", {
          "fixed inset-x-0 top-0 z-50 backdrop-blur-sm": fixed,
        })}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/#" className="-m-1.5 p-1.5">
            <span className="sr-only">24시간이 모자라</span>
            <span className="flex items-center gap-2">
              <img className="h-8 w-auto" src="/24hours_logo.png" alt="" />
              <h1 className={`text-white text-xl ${seolleim.className}`}>
                24시간이 모자라
              </h1>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
