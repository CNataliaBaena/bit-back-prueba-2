import employeesModel from '../models/employees.js';
import departmentsModel from '../models/department.js';

const employeesController = {
    create: async (req, res) => {
        try {
            const { name, lastName1, lastName2, departmentCode, employeeCode } = req.body;
            //Validar que el código de empleado sea único
            const existingEmployee = await employeesModel.findOne({ employeeCode });
            if (existingEmployee) {
                return res.status(400).json({ message: 'El código de empleado ya existe' });
            }
            let departmentCodes = departmentCode;

            const codeDepartmentSearch = await departmentsModel.findOne({ departmentCode });
            if(!codeDepartmentSearch){
                return res.status(400).json({message:'El codigo de departamento no se encuentra. ', codeDepartmentSearch})
            }
            const newEmployee = new employeesModel({
                name,
                lastName1,
                lastName2,
                departmentCode,
                employeeCode,
            });
            const savedEmployee = await newEmployee.save();
            res.status(201).json(savedEmployee);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el empleado', error: error.message });
        }
    },

    readAll: async (req, res) => {
        try {
            const employees = await employeesModel.find();
            res.status(200).json(employees);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los empleados', error: error.message });
        }
    },

    read: async (req, res) => {
        try {
            const employeeCode = Number(req.params.employeeCode);
            const employee = await employeesModel.findOne({ employeeCode });
            if (!employee) {
                return res.status(404).json({ message: 'Empleado no encontrado' });
            }
            res.status(200).json(employee);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el empleado', error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const employeeCode = Number(req.params.employeeCode);
            const { name, lastName1, lastName2, departmentCode } = req.body;
            const employee = await employeesModel.findOne({ employeeCode });
            if (!employee) {
                return res.status(404).json({ message: 'Empleado no encontrado' });
            }
            const updateEmployee = await employeesModel.findOneAndUpdate(
                { employeeCode },
                { name, lastName1, lastName2, departmentCode },
                { new: true }
            );
            res.status(200).json(updateEmployee);
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el empleado', error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const employeeCode = Number(req.params.employeeCode);
            const employee = await employeesModel.findOne({ employeeCode });
            if (!employee) {
                return res.status(404).json({ message: 'Empleado no encontrado' });
            } 
            await employeesModel.findOneAndDelete({ employeeCode });
            res.status(200).json({ message: 'Empleado eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el empleado', error: error.message });
        }
    },
};

export default employeesController;

