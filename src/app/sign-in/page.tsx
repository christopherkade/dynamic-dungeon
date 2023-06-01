import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <section className="py-24">
      <div className="container m-auto">
        <div className="flex justify-center">
          <SignIn redirectUrl="/select-adventure" />
        </div>
      </div>
    </section>
  );
}
