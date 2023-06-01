"use client";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { SignedOut, SignedIn } from "@clerk/nextjs/app-beta/client";

const Hero = () => {
  const { isSignedIn } = useUser();

  return (
    <section className="bg-cover bg-no-repeat bg-center bg-[url('/hero.jpeg')] bg-blend-multiply bg-gray-500">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-3xl lg:text-6xl dark:text-white font-extralight">
          New adventures at every corner
        </h1>
        <p className="mb-8 text-lg font-extralight text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Dynamic Dungeon is a new way to play Dungeons and Dragons.
          <br />
          Practice, play and explore using our GPT powered dungeon master.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <SignedIn>
            <Link
              href="/select-adventure"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-violet-800 hover:bg-violet-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Adventure awaits ✨
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton afterSignInUrl="/select-adventure" mode="modal">
              <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-violet-800 hover:bg-violet-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Adventure awaits ✨
              </button>
            </SignInButton>
          </SignedOut>
          <Link
            href="/about"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-violet-800 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
