import React from 'react';

function SouthAndroid() {

  const downloadLocation = "South Android";
  const appDownloaded = "Maxit Android";
  const createdAt = new Date().toISOString();

  fetch(
    `https://qrcodes-app-runt.vercel.app/api/maxitapp-for-south/Android`,
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

export default SouthAndroid;
