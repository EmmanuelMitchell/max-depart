import React from 'react';

function NorthAndroid() {

  const downloadLocation = "North Android";
  const appDownloaded = "Maxit Android";
  const createdAt = new Date().toISOString();

  fetch(
    `https://maxit-app.vercel.app/api/maxitapp-for-north/Android`,
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
        "https://drive.google.com/file/d/1poiQWBIr3ZMPBLPdQ-kMj3jkHEiuVr9I/view?usp=drivesdk";
    })
    .catch((error) => {
      console.error("Error saving visitor location:", error);
    });

  return (
    <div className="App">

    </div>
  );
}

export default NorthAndroid;
