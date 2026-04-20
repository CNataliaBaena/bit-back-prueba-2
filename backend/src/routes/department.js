import { Router } from 'express';
import departmentController from '../controllers/department.js';

const departmentRouter = Router();

departmentRouter.post('/', departmentController.create);
departmentRouter.get('/', departmentController.readAll);
departmentRouter.get('/:departmentCode', departmentController.read);
departmentRouter.put('/:departmentCode', departmentController.update);
departmentRouter.delete('/:departmentCode', departmentController.delete);   
departmentRouter.get('/:departmentCode/employees', departmentController.readDepartmentsWithEmployees);

export default departmentRouter;