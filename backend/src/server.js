import "dotenv/config";
import express from 'express';
import connectDB from './config/db.js';
import dns from "node:dns";
import departmentRouter from './routes/department.js';
import employeesRouter from './routes/employees.js';
import cors from 'cors';
import employeesDepartmentrouter from './routes/employeesDepartment.js';


//Se fuerza DNS de google para evitar error ECONNREFUSED en localhost. Se usa solo para localhost, en producción no es necesario.
if (process.env.NODE_ENV !== "production") {
    dns.setServers(["8.8.8.8", "8.8.4.4"]);
}

await connectDB();

const server = express();
server.use(express.json());
server.use(cors());
server.use(employeesDepartmentrouter);
server.use('/departments', departmentRouter);
server.use('/employees', employeesRouter);

server.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});