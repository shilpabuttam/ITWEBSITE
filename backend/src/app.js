import express from "express";
import cors from "cors"
import employeeRouter from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js";
import "./database/dbconfig.js";
import dotenv from "dotenv";
import companyRouter from "./routes/comp.route.js";
import taskRouter from "./routes/task.route.js";
import contentRouter from "./routes/content.route.js";
dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1",employeeRouter);
app.use("/api/v1",authRoutes);
app.use("/api/v1",userRouter);
app.use("/api/v1",companyRouter);
app.use("/api/v1",taskRouter);
app.use("/api/v1",contentRouter);
app.listen(process.env.PORT,()=>{
    console.log("server is running on port ",process.env.PORT);
});
