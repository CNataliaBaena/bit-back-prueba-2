import { Router } from "express";
import employeesController from "../controllers/employees.js";

const employeesRouter = Router();

employeesRouter.post('/', employeesController.create);
employeesRouter.get('/', employeesController.readAll);
employeesRouter.get('/:employeeCode', employeesController.read);
employeesRouter.put('/:employeeCode', employeesController.update);
employeesRouter.delete('/:employeeCode', employeesController.delete);

export default employeesRouter;