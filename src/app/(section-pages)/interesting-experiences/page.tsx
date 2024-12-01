import Link from "next/link";

export default function InterestingExperiencesSection() {
  return (
    <div className="astrulient-main-content">
      <div>
        <h1 className="section-description">
          This section documents interesting personal experiences 
          <br></br>of the creator of the blog that are worth writing about.
        </h1>
        <div className="astrulient-blog-entry">
          <div className="flex flex-col sm:flex-row h-12 justify-between">
            <Link href="/interesting-experiences/cheapskates-cure-to-phone-addition" 
            className="astrulient-link font-semibold">
              The Cheapest Way to Cure Your Phone Addiction
            </Link>
            <p>November 21, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
