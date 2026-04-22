import express from "express";
import employeeDepartmentController from "../controllers/employeesDepartment.js";

// import departments from '../models/departments.js';
// import employeesModel from '../models/employees.js';

const employeesDepartmentrouter = express.Router();

// 🔥 AQUÍ agregas el endpoint
employeesDepartmentrouter.get(
    "/employees/departments/:departmentCode",
    employeeDepartmentController.getByDepartment,
);

employeesDepartmentrouter.get(
    "/employees/departments/:departmentCode",
    async (req, res) => {
        try {
            const departmentCode = Number(req.params.departmentCode);

            const employees = await employeesModel.find({ departmentCode });

            res.status(200).json({ data: employees });
        } catch (error) {
            res.status(500).json({ message: "Error al obtener empleados", error });
        }
    },
);

export default employeesDepartmentrouter;
