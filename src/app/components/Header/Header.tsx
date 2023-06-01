import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedOut, SignedIn } from "@clerk/nextjs/app-beta/client";

const Header = () => {
  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4 px-4 py-2">
        <Link href="/" className="flex items-center">
          {/* LOGO HERE */}
          <span className="self-center text-l md:text-xl font-light whitespace-nowrap text-white">
            Dynamic Dungeon
          </span>
        </Link>
        <div className="block w-auto" id="navbar-default">
          <SignedOut>
            <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <SignInButton afterSignInUrl="/" mode="modal">
                <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border hover:bg-violet-600 focus:ring-4 focus:ring-gray-100 text-white border-gray-700">
                  Login
                </button>
              </SignInButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
