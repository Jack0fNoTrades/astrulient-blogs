import Link from "next/link";

function getYear() {
    var numyear = Date.now() / 31536000000 + 1970;
    var year = Date.toString();
    return numyear.toString().trim().substring(0, 4);
}

export default function Footer() {
    return (
      <footer className="bg-sky-300 w-3/5 h-20 m-auto content-center">
        <section className="flex flex-col gap-8 sm:flex-row sm:gap-64 justify-center">
          <div id="copyright">
            &copy; {getYear()} Astrulient Blogs
          </div>
          <div id="contact">
            <Link href="mailto:astrulient@outlook.com">contact us</Link>
          </div>
        </section>
      </footer>
    );
  }