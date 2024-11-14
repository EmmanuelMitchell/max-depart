import React from 'react';


function FreetownEastIphone() {

  const downloadLocation = "Freetown East Iphone";
  const appDownloaded = "Maxit Iphone";
  const createdAt = new Date().toISOString();

  fetch(
    `https://maxit-app.vercel.app/api/maxitapp-for-freetowneast/Iphone`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        downloadLocation,
        appDownloaded,
        createdAt
      })
    }
  )
    .then(() => {
      window.location.href =
        "https://apps.apple.com/sl/app/orange-max-it-sierra-leone/id6443607903";
    })
    .catch((error) => {
      console.error("Error saving visitor location:", error);
    });

  return (
    <div className="App">

    </div>
  );
}

export default FreetownEastIphone;
