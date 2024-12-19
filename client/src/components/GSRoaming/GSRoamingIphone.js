import React from 'react';

function GSRoamingIphone() {

  const downloadLocation = "GSRoaming Iphone"; // Updated to GSRoaming Iphone
  const appDownloaded = "Maxit Iphone"; // You can leave it as is or change if necessary
  const createdAt = new Date().toISOString();

  fetch(`https://maxit-app.vercel.app/api/maxitapp-for-gsroaming/iphone`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ downloadLocation, appDownloaded, createdAt }),
  })
    .then(() => {
      window.location.href = "https://apps.apple.com/sl/app/orange-max-it-sierra-leone/id6443607903"; // Link to GSRoaming Iphone on the App Store
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

export default GSRoamingIphone;
