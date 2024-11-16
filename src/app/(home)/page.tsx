import Link from "next/link";

export default function Home() {
  return (
      <div id="topics" className="astrulient-main-content">
        <div>
          <div className="flex flex-col">
            <h1 className="h-16 text-2xl content-center"><pre>Pick a topic & start reading</pre></h1>
            <div className="h-56 content-center">
              <div className="flex justify-center">
                <Link href="/business-finance" className="astrulient-link-hover font-semibold">Business & Finance</Link>
              </div>
            </div>
          <div className="h-56 content-center">
            <div className="flex justify-center">
              <Link href="/science-technology" className="astrulient-link-hover font-semibold">Science & Technology</Link>
            </div>
          </div>        
          <div className="h-56 content-center">
            <div className="flex justify-center">
              <Link href="/interesting-experiences" className="astrulient-link-hover font-semibold">Other interesting experiences</Link>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}
