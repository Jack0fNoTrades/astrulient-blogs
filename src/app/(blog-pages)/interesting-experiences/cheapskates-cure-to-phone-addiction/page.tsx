import DonatePls from "@/components/Donations";
import SubsectionTitle from "@/components/SubsectionTitle";
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
            Additionally, any previous are merely coincidental.
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
          <SubsectionTitle text = "The Problem I Ran into" />
          <p className="text-lg">
            It all started when I bought a screen protector for my phone at a local Best Buy. The performance of the first 
            one is pretty much what I expected: it lasted pretty well and inevitably accumulated scratches with the passing 
            of time, but usually doesn't crack from falls. 
            <br></br><br></br>
            The problem came when I went to get a replacement screen protector using the lifetime warranty the original came 
            with when I made the purchase. However, the staff at the store I went to claimed they don't have the exact same 
            screen protector, only a similar one also used on the same model of phones. I don't want to waste time on coming 
            back on another day, so I agreed to getting a replacement using the slightly different one. At the time, I cannot 
            tell the difference between the two products anyway, aside from that the original doesn't cover the camera but the 
            replacement does. 
            <br></br><br></br>
            The difference became more apparent later though that the replacement broke much more easily than the original. 
            While I know from my research that some sources claim all screen protectors break easily and they are 
            applied similar design choices as car windshields, there should still be some consistency among different makes of 
            screen protectors. But the reality is the replacement suffered damage from far smaller impacts: the original only 
            suffered scratches when the phone is dropped from a meter's height, whereas the replacement had chips and cracks 
            when the distance of the drop is only about a foot or less. Not only this, but Best Buy customer support told me 
            that - like most large-corporation products - the warranty only covers a limited number of replacements, in this 
            case only one.
          </p>
        </div>

        <DonatePls />

        <div className="w-astrulient-custom-width">
          <SubsectionTitle text = "Getting Creative" />
          <p className="text-lg">
            I don't like the look of damaged screen protectors, so I just removed it, but I still needed to protect my phone 
            somehow. The obvious solution is to buy new screen protectors(I did not have a phone case for my current phone, and 
            in my experience at least, those by themselves are typically not as effective as screen protectors when it comes to 
            preventing scratches on phone screens), but being the frugal person that I am, my first thought is whether there's 
            a way I can avoid this expenditure, as my experience with Best Buy screen protectors is pretty negative, and 
            something did in fact came to mind: I had not yet thrown away the original packaging that came with my phone. 
            It can protect my phone just as well because it is - quite literally - also a phone case.
          </p>
          <SubsectionTitle text = "But What Does This Have to do With Phone Addiction?" />
          <p className="text-lg mb-24">
          A trick people commonly talk about for reducing how frequently you do a certain activity is to eliminate related 
          objects from your surroundings, and do the opposite for things you want to do more of. The rationale is making a easy 
          thing more difficult and a difficult thing easier can help you change your habits. And making using your phone harder 
          is exactly what happened in my case: though it is not my original intent, now it takes me much longer to take out my 
          phone. I have effortlessly stopped looking at my phone when I'm walking, and have even reduced the amount of time I 
          spend on my phone when I'm sitting down as well.
          </p>
        </div>
      </div>
    </div>
  );
}
