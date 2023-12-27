import express from "express";
const router = express.Router();
import {getJob, saveJob} from "../controller/job-controller.js"

router.post('/save',saveJob)
router.get('/list',getJob)

export default router;