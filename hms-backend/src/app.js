import 'dotenv/config';
import express from "express";
import cors from "cors";
import { connect } from "./utils/database.connection";
import { logger } from './utils/logger';

const app = express();
const PORT = process.env.PORT || "8070";

app.use(cors());
app.use(express.json({limit: "20mb" }));


app.listen(PORT, () => {
    logger('info',`🚀 Server is up and running on PORT ${PORT}`);
    connect();
});

app.get("/", (req, res, next) => {
    res.send("<h2>🩺 Hospital Management System API</h2>");
    next();
});

const appointmentRouter = require("./api/routes/appointment");
app.use("/appointments", appointmentRouter);




