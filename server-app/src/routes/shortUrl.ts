import express from "express";
import { creatUrl, getAllUrl, getUrl, deleteUrl } from "../controllers/shortUrl";
const router = express.Router();

router.post("/shortUrl", creatUrl);
router.get("/shortUrl", getAllUrl);
router.get("/shortUrl/:id", getUrl);
router.delete("/shortUrl/:id", deleteUrl);

export default router;
