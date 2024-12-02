import DonatePls from "@/components/Donations";
import Link from "next/link";

export default function PhoneCheapskate() {
  return (
    <div className="astrulient-main-content">
      <div className="flex flex-col">
        <div className="astrulient-blog-title">
          <h1 className="astrulient-title-text">
            <pre>The Cheapest Way to Cure Your Phone Addiction</pre>
          </h1>
        </div>
        <div className="w-astrulient-custom-width astrulient-disclaimer">
        <p>
            Disclaimer: this blog is written for entertainment purposes only. It is not advice 
            in any way, shape, or form(With <em>maybe</em> the exception of "don't shop at Best Buy"). 
            You're encouraged to do your own research, and we're not liable for any losses incurred.
        </p>
        </div>
        <div className="w-astrulient-custom-width">
          <p className="text-lg">
            Correct me if I'm wrong, but I think many people these days have a phone addiction, and&nbsp;
            <Link href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5680647/" 
            className="astrulient-link">statistics</Link> 
            &nbsp;seem to corroborate this point. There are already a lot of online discussion regarding this topic, 
            so I won't go into any of the basics you probably already know about. However, I do want to share an 
            accidental discovery of one very unorthodox way to separate you from your phone.
          </p>
          <div className="astrulient-blog-subsection">
            <h2 className="astrulient-subsection-text">The Beginning</h2>
          </div>
          <p className="text-lg">
            It all started when I bought a screen protector for my phone at a local Best Buy. The performance of the first 
            one is pretty much what I expected: it lasted pretty well and inevitably accumulated scratches with the passing 
            of time, but usually doesn't crack from falls. The problem came when I went to get a replacement screen protector 
            using the lifetime warranty the original came with when I made the purchase.
          </p>
        </div>

        <DonatePls />

        <div className="w-astrulient-custom-width">
          <p className="text-lg mb-24">
            So I was without screen protection for my phone unless I buy new screen protectors(I did not have a phone case 
            for my current phone, and in my experience at least, those by themselves are typically not as effective as 
            screen protectors when it comes to preventing scratches on phone screens). Being the frugal person that I am, my 
            first thought is if I can avoid this expenditure somehow, as my experience with Best Buy screen protectors is 
            pretty negative.   
          </p>
        </div>
      </div>
    </div>
  );
}
