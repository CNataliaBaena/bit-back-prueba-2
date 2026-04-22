import departmentModel from '../models/department.js';
import employeesModel from '../models/employees.js';

const departmentController = {
    create: async (req, res) => {
        try {
            const { name, departmentCode } = req.body;
            //Validar que el código de departamento sea único
            const existingDepartment = await departmentModel.findOne({ departmentCode });
            if (existingDepartment) {
                return res.status(400).json({ message: 'El código de departamento ya existe' });
            }
            const newDepartment = new departmentModel({
                name,
                departmentCode,
            });
            await newDepartment.save();
            res.status(201).json(newDepartment);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el departamento', error: error.message });
        }  
    },

    readAll: async (req, res) => {
        try {
            const departments = await departmentModel.find();
            res.status(200).json(departments);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los departamentos', error: error.message });
        }
    },

    read: async (req, res) => {
        try {
            const departmentCode = Number(req.params.departmentCode);
            const department = await departmentModel.findOne({ departmentCode });
            if (!department) {
                return res.status(404).json({ message: 'Departamento no encontrado' });
            }
            res.status(200).json(department);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el departamento', error: error.message });
        }
    },

    update: async (req, res) => {
        try {            const departmentCode = Number(req.params.departmentCode);
            const { name } = req.body;
            const department = await departmentModel.findOneAndUpdate({ departmentCode });
            if (!department) {
                return res.status(404).json({ message: 'Departamento no encontrado' });
            }
            department.name = name;
            await department.save();
            res.status(200).json(department);
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el departamento', error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const departmentCode = Number(req.params.departmentCode);
            const departmentDelete = await departmentModel.findOneAndDelete({ departmentCode });
            if (!departmentDelete) {
                return res.status(404).json({ message: 'Departamento no encontrado' });
            }
            res.status(200).json({ message: 'Departamento eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el departamento', error: error.message });
        }
    },

    readDepartmentsWithEmployees: async (req, res) => {
        try {
            const departmentCode = Number(req.params.departmentCode);
            const department = await departmentModel.findOne({ departmentCode });
            if (!department) {
                return res.status(404).json({ message: 'Departamento no encontrado' });
            }
            const employees = await employeesModel.find({ departmentCode });
            res.status(200).json({ department, employees });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el departamento con empleados', error: error.message });
        }
    }
};

export default departmentController;