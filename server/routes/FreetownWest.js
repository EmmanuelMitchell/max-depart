import express from "express"
import pool from "../database-connection/DatabaseConnection.js"
const router = express.Router()



router.post("/api/maxitapp-for-freetownwest/Android", (req, res) => {
    const { downloadLocation, appDownloaded, createdAt } = req.body;
    const sql = "INSERT INTO maxit (downloadlocation, appDownloaded, createdAt) VALUES ($1, $2, $3)"
    const values = [downloadLocation, appDownloaded, coordinate, createdAt];
    pool.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});

router.post("/api/maxitapp-for-freetownwest/Iphone", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate, createdAt } = req.body;
    const sql = "INSERT INTO maxit (downloadlocation, appDownloaded, createdAt) VALUES ($1, $2, $3)"
    const values = [downloadLocation, appDownloaded, createdAt];
    pool.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});




export default router