import DonatePls from "@/components/Donations";
import Link from "next/link";
import "/Users/a86150/Desktop/ad-money/astrulient-blogs/src/app/(blog-pages)/styles.css";

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
              <div className="astrulient-blog-subsection">
                <h2 className="astrulient-subsection-text">Obtaining</h2>
              </div>
              <p>
                It
              </p>
            </div>

            <DonatePls />
            <div className="astrulient-blog-subsection">
              <h2 className="astrulient-subsection-text">Obtaining Files Without A Download Button</h2>
            </div>
            <div className="w-astrulient-custom-width">
              <p className="text-lg">
                I think all of us have experienced the scenario of wanting to download a file from a website, 
                but there is no download button provided. On these occasions it is always worth a try to see if
                you can find a <Link href="https://en.wikipedia.org/wiki/URL" className="astrulient-link-hover text-blue-600">URL</Link>
                &nbsp;that directly points to the file you want.
                <br></br><br></br>
                First, if you have not already done so, you should learn about the most commonly used file extensions
                for the file that you want to get. For example, if you wanted to download an audiobook, the downloaded file
                would most likely be in mp3 or m4b format. Then, you would search for the file extension(using the ctrl+f 
                keyboard shortcut) in the page source. If one of the results is at the end of a string(sequence of characters) 
                that has the format of a URL and is clickable, then you have successfully found what you are looking for. 
                That URL should take you to a page with only the file in browser default UI which contains a download button, 
                if not start the download directly.
                <br></br><br></br>
                Here is an explanatory screenshot to help you visualize the instructions in the previous paragraph.
              </p>
              <div className="astrulient-image">
                <img src="/images/example.png" alt="demonstration screenshot"></img>
              </div>
              <p className="text-lg">
                Obviously this method is not guaranteed to produce results. A lot of websites 
              </p>
            </div>
          </div>
        </div>
      );
}