import Link from "next/link";

export default function InterestingExperiencesSection() {
  return (
    <div className="astrulient-main-content">
      <div>
        <div className="h-24 content-center">
          <h1 className="section-description">This section documents interesting personal experiences 
          <br></br>of the creator of the blog that are worth writing about.</h1>
        </div>
        <div className="astrulient-blog-entry">
          <div className="flex flex-col sm:flex-row h-12 justify-between">
            <Link href="/interesting-experiences/utilities-of-view-source" className="astrulient-link-hover font-semibold">
              The "View Source" Function is Useful for<br></br> More Than Just Web Development
            </Link>
            <p>November 1, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
