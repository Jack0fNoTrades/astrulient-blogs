import Link from "next/link";

export default function Header() {
    return (
      <header className="bg-sky-300 w-3/5 h-40 m-auto">
        <section>
          <div aria-label="logo linked to homepage">
            <Link href="/"><img alt="logo" src="/images/astrulient-blogs.png" className="h-16"></img></Link>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-64 justify-center">
            <p className="font-serif text-2xl sm:text-4xl">Interesting discussions not found anywhere else</p>
          </div>
        </section>
      </header>
    );
  }