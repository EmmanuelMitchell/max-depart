import React from 'react';

function GIProgramAndroid() {

  const downloadLocation = "GIA Program Android"; // Updated to GIA Program Android
  const appDownloaded = "Maxit Android"; // You can leave it as is or change if necessary
  const createdAt = new Date().toISOString();

  fetch(`https://maxit-app.vercel.app/api/maxitapp-for-gi-program/android`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ downloadLocation, appDownloaded, createdAt }),
  })
    .then(() => {
      window.location.href = "https://play.google.com/store/apps/details?id=com.orange.myorange.osl"; // Link to GIA Program Android on Google Play
    })
    .catch((error) => {
      console.error("Error saving visitor location:", error);
    });

  return (
    <div className="App">
      {/* You can add additional UI components or styling here if needed */}
    </div>
  );
}

export default GIProgramAndroid;