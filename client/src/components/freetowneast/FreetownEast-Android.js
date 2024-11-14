import React from 'react';

function FreetownEastAndroid() {

  const downloadLocation = "Freetown East Android";
  const appDownloaded = "Maxit Android";
  const createdAt = new Date().toISOString();

  fetch(
    `https://maxit-app.vercel.app/api/maxitapp-for-freetowneast/Android`,
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
        " https://play.google.com/store/apps/details?id=com.orange.myorange.osl";
    })
    .catch((error) => {
      console.error("Error saving visitor location:", error);
    });

  return (
    <div className="App">

    </div>
  );
}

export default FreetownEastAndroid;
