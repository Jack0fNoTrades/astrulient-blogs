"use client";

import "./component-styles.css";

function openPopUp() {
    var left = screen.availWidth / 2 - 150;
    var top = screen.availHeight / 2 - 200;
    window.open("/donations.html", "popUpWindow",`height=400,width=300,left=${left},top=${top},resizable=no,scrollbars=yes,toolbar=yes,status=yes`);
}

export default function DonatePls() {
    return (
      <div className="flex flex-col justify-center h-60 mt-4">
        <p className="flex justify-center font-semibold">Enjoy the content? Please consider donating.</p> 
        <p className="flex justify-center font-semibold">It helps us greatly in producing more content and maintaining the site.</p>
        <p className="flex justify-center text-xs">Please make sure popups are allowed before you click "Donate".</p>
        <div className="h-20 content-center">
          <button onClick={openPopUp}>Donate</button>
        </div>
      </div>
    );
}