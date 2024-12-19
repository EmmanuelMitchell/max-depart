import express from "express";
import pool from "../database-connection/DatabaseConnection.js";
const router = express.Router();

// Route for Android - GSRoamingIphone Department
router.post("/api/gsroamingiphone-department/Android", (req, res) => {
    const { downloadLocation, appDownloaded, createdAt } = req.body;
    const sql = "INSERT INTO dept (downloadlocation, appDownloaded, createdAt) VALUES ($1, $2, $3)";
    const values = [downloadLocation, appDownloaded, createdAt];
    pool.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.sendStatus(500); // Send 500 error in case of failure
        } else {
            console.log(results.rowCount); // Log the result
            res.sendStatus(200); // Send success response
        }
    });
});

export default router; 
