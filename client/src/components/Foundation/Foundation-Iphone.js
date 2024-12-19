import React from 'react';

function FoundationIphone() {

  const downloadLocation = "Foundation Iphone"; // Updated to Foundation Iphone
  const appDownloaded = "Maxit Iphone"; // You can leave it as is or change if necessary
  const createdAt = new Date().toISOString();

  fetch(`https://maxit-app.vercel.app/api/maxitapp-for-foundation-iphone`, // Updated API endpoint
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
        "https://apps.apple.com/sl/app/orange-max-it-sierra-leone/id6443607903"; // Link to Foundation iPhone on the App Store
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

export default FoundationIphone;
