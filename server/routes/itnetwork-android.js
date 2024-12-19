import express from "express";
import pool from "../database-connection/DatabaseConnection.js";
const router = express.Router();

router.post("/api/maxitapp-for-it-and-network/Android", (req, res) => {
    const { downloadLocation, appDownloaded, createdAt } = req.body;
    const sql = "INSERT INTO dept (downloadlocation, appDownloaded, createdAt) VALUES ($1, $2, $3)";
    const values = [downloadLocation, appDownloaded, createdAt];
    pool.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.sendStatus(500);
        } else {
            console.log(results.rowCount);
            res.sendStatus(200);
        }
    });
});

router.post("/api/maxitapp-for-it-and-network/Iphone", (req, res) => {
    const { downloadLocation, appDownloaded, createdAt } = req.body;
    const sql = "INSERT INTO maxit (downloadlocation, appDownloaded, createdAt) VALUES ($1, $2, $3)";
    const values = [downloadLocation, appDownloaded, createdAt];
    pool.query(sql, values, (error, results) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.rowCount);
            res.sendStatus(200);
        }
    });
});

export default router;
