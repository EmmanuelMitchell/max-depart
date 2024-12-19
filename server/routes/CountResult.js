import express from "express"
import pool from "../database-connection/DatabaseConnection.js"
const router = express.Router()


// router.get('/', (req, res) => {
//     const sql = `
// SELECT 'Maxit Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'Freetown West Iphone' AND appDownloaded = 'Maxit Iphone'
// UNION ALL
// SELECT 'Maxit Android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'Freetown West Android' AND appDownloaded = 'Maxit Android'
// UNION ALL

// SELECT 'Maxit Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'Freetown East Iphone' AND appDownloaded = 'Maxit Iphone'
// UNION ALL
// SELECT 'Maxit Android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'Freetown East Android' AND appDownloaded = 'Maxit Android'
// UNION ALL


// SELECT 'Maxit Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'East Iphone' AND appDownloaded = 'Maxit Iphone'
// UNION ALL
// SELECT 'Maxit Android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'East Android' AND appDownloaded = 'Maxit Android'
// UNION ALL


// SELECT 'Maxit Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'North Iphone' AND appDownloaded = 'Maxit Iphone'
// UNION ALL
// SELECT 'Maxit Android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'North Android' AND appDownloaded = 'Maxit Android'
// UNION ALL

// SELECT 'Maxit Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'North West Iphone' AND appDownloaded = 'Maxit Iphone'
// UNION ALL
// SELECT 'Maxit Android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'North West Android' AND appDownloaded = 'Maxit Android'
// UNION ALL


// SELECT 'Maxit Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'South Iphone' AND appDownloaded = 'Maxit Iphone'
// UNION ALL
// SELECT 'Maxit Android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'South Android' AND appDownloaded = 'Maxit Android'

//  `;
//     pool.query(sql, (error, queryResult) => {
//       if (error) {
//         console.error("SQL Error:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//       }

       
//         const getTotal = (result) =>
//           result && result.total !== undefined ? result.total : 0;



//         const freetown_west_iphone = getTotal(queryResult.rows[0])
//         const freetown_west_android = getTotal(queryResult.rows[1])
//         const freetown_east_iphone = getTotal(queryResult.rows[2])
//         const freetown_east_android = getTotal(queryResult.rows[3])

//         const east_iphone = getTotal(queryResult.rows[4])
//         const east_android = getTotal(queryResult.rows[5])
//         const north_iphone = getTotal(queryResult.rows[6])
//         const north_android = getTotal(queryResult.rows[7])

//         const north_west_iphone= getTotal(queryResult.rows[8])
//         const north_west_android = getTotal(queryResult.rows[9])
//         const south_iphone = getTotal(queryResult.rows[10])
//         const south_android = getTotal(queryResult.rows[11])

//         res.json({

//             freetown_west_iphone_sum: freetown_west_iphone,
//             freetown_west_android_sum: freetown_west_android,
//             freetown_east_iphone_sum: freetown_east_iphone,
//             freetown_east_android_sum: freetown_east_android,

//             east_iphone_sum: east_iphone,
//             east_android_sum: east_android,
//             north_iphone_sum: north_iphone,
//             north_android_sum: north_android,


//             north_west_iphone_sum: north_west_iphone,
//             north_west_android_sum: north_west_android,
//             south_iphone_sum: south_iphone,
//             south_android_sum: south_android,
//         });

//     });
// });


// router.get('/oneWeek', (req, res) => {
//     const sql = `
// SELECT 'freetown_west_iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'Freetown West Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
// UNION ALL
// SELECT 'freetown_west_android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'Freetown West Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
// UNION ALL


// SELECT 'freetown_east_iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'Freetown East Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
// UNION ALL
// SELECT 'freetown_east_android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'Freetown East Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
// UNION ALL


// SELECT 'east_iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'East Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
// UNION ALL
// SELECT 'east_android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'East Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
// UNION ALL


// SELECT 'north_iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'North Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
// UNION ALL
// SELECT 'north_android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'North Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
// UNION ALL


// SELECT 'north_west_iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'North West Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
// UNION ALL
// SELECT 'north_west_android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'North West Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
// UNION ALL


// SELECT 'south_iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'South Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
// UNION ALL
// SELECT 'south_android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'South Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

//     `;
//     pool.query(sql, (error, queryResult) => {
//         if (error) {
//             console.error("Error executing the query:", error);
//             throw error;
//         }
        
//         const getTotal = (result) => (result && result.total !== undefined) ? result.total : 0;

//         console.log(queryResult.rows);

//         const freetown_west_iphone = getTotal(queryResult.rows[0])
//         const freetown_west_android = getTotal(queryResult.rows[1])
//         const freetown_east_iphone = getTotal(queryResult.rows[2])
//         const freetown_east_android = getTotal(queryResult.rows[3])

//         const east_iphone = getTotal(queryResult.rows[4])
//         const east_android = getTotal(queryResult.rows[5])
//         const north_iphone = getTotal(queryResult.rows[6])
//         const north_android = getTotal(queryResult.rows[7])

//         const north_west_iphone= getTotal(queryResult.rows[8])
//         const north_west_android = getTotal(queryResult.rows[9])
//         const south_iphone = getTotal(queryResult.rows[10])
//         const south_android = getTotal(queryResult.rows[11])

//         res.json({
//             freetown_west_iphone_sum: freetown_west_iphone,
//             freetown_west_android_sum: freetown_west_android,
//             freetown_east_iphone_sum: freetown_east_iphone,
//             freetown_east_android_sum: freetown_east_android,

//             east_iphone_sum: east_iphone,
//             east_android_sum: east_android,
//             north_iphone_sum: north_iphone,
//             north_android_sum: north_android,


//             north_west_iphone_sum: north_west_iphone,
//             north_west_android_sum: north_west_android,
//             south_iphone_sum: south_iphone,
//             south_android_sum: south_android,
//         });
//     });
// })
   


// router.get('/oneMonth', (req, res) => {
//     const sql = `
// SELECT 'freetown_west_iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'Freetown West Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
// UNION ALL
// SELECT 'freetown_west_android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'Freetown West Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
// UNION ALL


// SELECT 'freetown_east_iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'Freetown East Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
// UNION ALL
// SELECT 'freetown_east_android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'Freetown East Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
// UNION ALL


// SELECT 'east_iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'East Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
// UNION ALL
// SELECT 'east_android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'East Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
// UNION ALL


// SELECT 'north_iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'North Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
// UNION ALL
// SELECT 'north_android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'North Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
// UNION ALL


// SELECT 'north_west_iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'North West Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
// UNION ALL
// SELECT 'north_west_android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'North West Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
// UNION ALL


// SELECT 'south_iphone' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'South Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
// UNION ALL
// SELECT 'south_android' as total_downloads,  COUNT(downloadLocation) as total FROM maxit WHERE downloadLocation = 'South Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'

//     `;
//     pool.query(sql, (error, queryResult) => {
//         if (error) {
//             throw error;
//         }
       

//         const getTotal = (result) => (result && result.total !== undefined) ? result.total : 0;
//         console.log(getTotal)

//         const freetown_west_iphone = getTotal(queryResult.rows[0])
//         const freetown_west_android = getTotal(queryResult.rows[1])
//         const freetown_east_iphone = getTotal(queryResult.rows[2])
//         const freetown_east_android = getTotal(queryResult.rows[3])

//         const east_iphone = getTotal(queryResult.rows[4])
//         const east_android = getTotal(queryResult.rows[5])
//         const north_iphone = getTotal(queryResult.rows[6])
//         const north_android = getTotal(queryResult.rows[7])

//         const north_west_iphone= getTotal(queryResult.rows[8])
//         const north_west_android = getTotal(queryResult.rows[9])
//         const south_iphone = getTotal(queryResult.rows[10])
//         const south_android = getTotal(queryResult.rows[11])
//         res.json({

//             freetown_west_iphone_sum: freetown_west_iphone,
//             freetown_west_android_sum: freetown_west_android,
//             freetown_east_iphone_sum: freetown_east_iphone,
//             freetown_east_android_sum: freetown_east_android,

//             east_iphone_sum: east_iphone,
//             east_android_sum: east_android,
//             north_iphone_sum: north_iphone,
//             north_android_sum: north_android,


//             north_west_iphone_sum: north_west_iphone,
//             north_west_android_sum: north_west_android,
//             south_iphone_sum: south_iphone,
//             south_android_sum: south_android,

//         });

//     });
// });

// export default router


router.get('/oneMonth', (req, res) => {
    const sql = `
SELECT 'CommercialAndriod' as total_downloads, COUNT(downloadLocation) as total FROM dept WHERE downloadLocation = 'Freetown West Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'CommercialIphone' as total_downloads, COUNT(downloadLocation) as total FROM dept WHERE downloadLocation = 'Freetown West Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'GIAProgramsAndriod' as total_downloads, COUNT(downloadLocation) as total FROM dept WHERE downloadLocation = 'Freetown East Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'GIAProgramsIphone' as total_downloads, COUNT(downloadLocation) as total FROM dept WHERE downloadLocation = 'Freetown East Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'MarketingAndriod' as total_downloads, COUNT(downloadLocation) as total FROM dept WHERE downloadLocation = 'East Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'MarketingIphone' as total_downloads, COUNT(downloadLocation) as total FROM dept WHERE downloadLocation = 'East Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'GSRoamingAndriod' as total_downloads, COUNT(downloadLocation) as total FROM dept WHERE downloadLocation = 'North Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'GSRoamingIphone' as total_downloads, COUNT(downloadLocation) as total FROM dept WHERE downloadLocation = 'North Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'CustomerExperienceIphone' as total_downloads, COUNT(downloadLocation) as total FROM dept WHERE downloadLocation = 'North West Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'CustomerExperienceAndriod' as total_downloads, COUNT(downloadLocation) as total FROM dept WHERE downloadLocation = 'North West Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'FinanceIphone' as total_downloads, COUNT(downloadLocation) as total FROM dept WHERE downloadLocation = 'South Iphone' AND appDownloaded = 'Maxit Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'FinanceAndriod' as total_downloads, COUNT(downloadLocation) as total FROM dept WHERE downloadLocation = 'South Android' AND appDownloaded = 'Maxit Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH';

    `;
    pool.query(sql, (error, queryResult) => {
        if (error) {
            console.error("Error executing the query:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        const getTotal = (result) => (result && result.total !== undefined) ? result.total : 0;

const CommercialAndriod = getTotal(queryResult.rows[0]);
const CommercialIphone = getTotal(queryResult.rows[1]);
const GIAProgramsAndriod = getTotal(queryResult.rows[2]);
const GIAProgramsIphone = getTotal(queryResult.rows[3]);

const MarketingAndriod = getTotal(queryResult.rows[4]);
const MarketingIphone = getTotal(queryResult.rows[5]);
const GSRoamingAndriod = getTotal(queryResult.rows[6]);
const GSRoamingIphone = getTotal(queryResult.rows[7]);

const CustomerExperienceAndriod = getTotal(queryResult.rows[8]);
const CustomerExperienceIphone = getTotal(queryResult.rows[9]);

const FinanceAndriod = getTotal(queryResult.rows[10]);
const FinanceIphone = getTotal(queryResult.rows[11]);

const FoundationAndriod = getTotal(queryResult.rows[12]);
const FoundationIphone = getTotal(queryResult.rows[13]);

const ITDepartmentAndriod = getTotal(queryResult.rows[14]);
const ITDepartmentIphone = getTotal(queryResult.rows[15]);


// Add any other departments as needed


        // res.json({
        //     freetown_west_iphone_sum: freetown_west_iphone,
        //     freetown_west_android_sum: freetown_west_android,
        //     freetown_east_iphone_sum: freetown_east_iphone,
        //     freetown_east_android_sum: freetown_east_android,

        //     east_iphone_sum: east_iphone,
        //     east_android_sum: east_android,
        //     north_iphone_sum: north_iphone,
        //     north_android_sum: north_android,

        //     north_west_iphone_sum: north_west_iphone,
        //     north_west_android_sum: north_west_android,
        //     south_iphone_sum: south_iphone,
        //     south_android_sum: south_android,
        // });
        res.json({
            commercial_andriod_sum: CommercialAndriod,
            commercial_iphone_sum: CommercialIphone,
            gia_programs_andriod_sum: GIAProgramsAndriod,
            gia_programs_iphone_sum: GIAProgramsIphone,
        
            marketing_andriod_sum: MarketingAndriod,
            marketing_iphone_sum: MarketingIphone,
            gs_roaming_andriod_sum: GSRoamingAndriod,
            gs_roaming_iphone_sum: GSRoamingIphone,
        
            customer_experience_andriod_sum: CustomerExperienceAndriod,
            customer_experience_iphone_sum: CustomerExperienceIphone,
        
            finance_andriod_sum: FinanceAndriod,
            finance_iphone_sum: FinanceIphone,
        
            foundation_andriod_sum: FoundationAndriod,
            foundation_iphone_sum: FoundationIphone,
        
            it_department_andriod_sum: ITDepartmentAndriod,
            it_department_iphone_sum: ITDepartmentIphone,
        
            north_west_iphone_sum: north_west_iphone,
            north_west_android_sum: north_west_android,
            south_iphone_sum: south_iphone,
            south_android_sum: south_android
        });
        
    });
});

export default router