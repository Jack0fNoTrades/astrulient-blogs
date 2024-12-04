import DonatePls from "@/components/Donations";
import SubsectionTitle from "@/components/SubsectionTitle";
import Link from "next/link";

export default function UtilViewSource() {
    return (
        <div className="astrulient-main-content">
          <div className="flex flex-col">
            <div className="astrulient-blog-title">
              <h1 className="astrulient-title-text">
                <pre>The "View Page Source" Function is Useful for<br></br>More Than Just Software Development</pre>
              </h1>
            </div>
            <div className="w-astrulient-custom-width">
              <p className="text-lg">
                As a software developer, I have used the "View Page Source" function more times than I could count: 
                when I was doing web development at work or making progress on personal projects, and
                on the few occasions when I made web scrapers at someone else's request. 
                Most browsers these days have this feature, and even a lot of non-programmers would have 
                some idea of what it does. 
                <br></br><br></br>
                However, even when one is not trying to write code, it may be beneficial to look at the source code of 
                web pages, which I am going to explain in this blog.
              </p>
              <SubsectionTitle text = "Scraping, but Manual" />
              <p className="text-lg">
                Maybe you have never made a web scraper and you don't want to learn how to code, 
                but you can still use the page source find the information you are looking for manually. 
                Generally you would do this by searching for any keywords that are most 
                relevant to the section you are trying to find. Some of you may be thinking that using the 
                "Inspect" function would be faster in locating a specific section's HTML, which is technically 
                correct. However, opening the page in "view source" mode prevents the JavaScript from executing, 
                which in some cases are helpful to us:
              </p>
              <div className="flex justify-center">
                <ul className="astrulient-list">
                  <li className="my-4">
                    Preventing any advertisements placed on the page from loading, 
                    as ads are typically loaded from a dedicated domain using JavaScript.
                  </li>
                  <li className="my-4">
                    Bypassing page viewing restrictions(on some sites). Of course, most sites' checks nowadays 
                    originates from the backend, which is not so easy to bypass, 
                    but I still occasionally see sites where checks are done in JavaScript and either a redirect is 
                    performed or the HTML is modified based on the results of the checks. A rule of thumb is that in 
                    these cases the original page would display for a split second before changing.
                    The main weakness of this is it does not obfuscate the HTML of the original page. 
                    So if the JavaScript checks are not run, then we can still obtain data from the page as if the checks 
                    don't even exist. Opening the page and inspecting elements would not achieve the same effect.
                  </li>
                </ul>
              </div>
              <p className="text-lg">
                Here's an example where I obtained a "promo code" from the page source of a site.
              </p>
              <div className="astrulient-image">
                <img src="/images/view-source-example-1.png" alt="demonstration of obtaining plaintext promo code"></img>
              </div>
              <p className="text-lg">
              In addition to preventing JavaScript execution, if you want to get a file(which we will go into 
              in the next section), inspect element may not take you straight to the file URL in the HTML. 
              In this case inspect element and view page source is equivalent so you may use either, 
              but I feel that view page source is less scary for those who are not familiar with either.
              </p>
            </div>

            <DonatePls />

            <SubsectionTitle text = "Obtaining Files Without A Download Button"/>
            <div className="w-astrulient-custom-width">
              <p className="text-lg">
                I think all of us have experienced the scenario of wanting to download a file from a website, 
                but there is no download button provided. On these occasions it is always worth a try to see if
                you can find a URL that directly points to the file you want.
                <br></br><br></br>
                First, if you have not already done so, you should learn about the most commonly used file extensions
                for the file that you want to get. For example, if you wanted to download an audiobook, the downloaded file
                would most likely be in mp3 or m4b format. Then, you would search for the file extension(using the ctrl+f 
                keyboard shortcut) in the page source. If one of the results is at the end of a string(sequence of characters) 
                that has the format of a URL and is clickable, then you have successfully found what you are looking for. 
                That URL should take you to a page with only the file in browser default UI which contains a download button, 
                if not start the download directly.
                <br></br><br></br>
                Here's an explanatory screenshot to help you visualize the instructions in the previous paragraph.
              </p>
              <div className="astrulient-image">
                <img src="/images/view-source-example-2.png" alt="demonstration of obtaining an audio file"></img>
              </div>
              <p className="text-lg mb-24">
                Obviously this method is not guaranteed to produce results. Most major websites like YouTube stream the data 
                read from the file directly from the backend, thereby hiding the URL of the actual file. 
                In addition, they can simply deny any direct access to the file URL. However, as previously said, it is usually 
                worth a try, especially on smaller sites where they may not have such counter-measures implemented.
              </p>
            </div>
          </div>
        </div>
      );
}