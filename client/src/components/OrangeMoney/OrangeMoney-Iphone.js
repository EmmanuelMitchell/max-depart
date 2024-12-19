// import React from 'react';


// function EastIphone() {

//   const downloadLocation = "East Iphone";
//   const appDownloaded = "Maxit Iphone";
//   const createdAt = new Date().toISOString();

//   fetch(`https://maxit-app.vercel.app/api/maxitapp-for-east/Iphone`,
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         downloadLocation,
//         appDownloaded,
//         createdAt
//       })
//     }
//   )
//     .then(() => {
//       window.location.href =
//         "https://apps.apple.com/sl/app/orange-max-it-sierra-leone/id6443607903";
//     })
//     .catch((error) => {
//       console.error("Error saving visitor location:", error);
//     });

//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default EastIphone;


import React from 'react';

function OrangeMoneyIphone() {

  const downloadLocation = "OrangeMoney Iphone"; // Updated to OrangeMoney Iphone
  const appDownloaded = "Maxit Iphone"; // Keep this as is or update if necessary
  const createdAt = new Date().toISOString();

  fetch(`https://maxit-app.vercel.app/api/maxitapp-for-orange-money-iphone`, // Updated API endpoint
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
        "https://apps.apple.com/sl/app/orange-max-it-sierra-leone/id6443607903"; // Link to Orange Money on the App Store
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

export default OrangeMoneyIphone;
