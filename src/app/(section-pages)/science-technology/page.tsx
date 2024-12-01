import Link from "next/link";

export default function ScienceTechSection() {
  return (
    <div className="astrulient-main-content">
      <div>
        <h1 className="section-description">Discussions on scientific and technical stuff</h1>
        <div className="astrulient-blog-entry">
          <div className="flex flex-col sm:flex-row h-12 justify-between">
            <Link href="/science-technology/utilities-of-view-source" className="astrulient-link font-semibold">
              The "View Page Source" Function is Useful for<br></br> More Than Just Software Development
            </Link>
            <p>November 1, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
