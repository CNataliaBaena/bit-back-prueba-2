# 📦 Backend - API REST (Node.js + Express + MongoDB)

## 👩‍💻 Autora
**Natalia Baena Cabas**

---

## 📌 Descripción
Este backend implementa una API RESTful que permite realizar operaciones CRUD sobre las colecciones **empleado** y **departamento**, utilizando MongoDB como base de datos.

---

## 🛠️ Tecnologías utilizadas
- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- dotenv

---

## 📁 Estructura del proyecto
backend/
│── models/
│── routes/
│── controllers/
│── config/
│── app.js
│── server.js
│── .env
│── package.json

---

## ⚙️ Instalación

1. Clonar repositorio:
git clone <URL_DEL_REPOSITORIO>
cd backend

2. Instalar dependencias:
npm install

3. Crear archivo .env:
PORT=3000
MONGO_URI=mongodb://localhost:27017/empresa

4. Ejecutar servidor:
npm run dev

---

## 🗄️ Modelo de Datos

### Empleado
{
  "codigo": Number,
  "nombre": String,
  "apellido1": String,
  "apellido2": String,
  "codigo_departamento": Number
}

### Departamento
{
  "codigo": Number,
  "nombre": String
}

---

## 🔗 Endpoints API

### Empleados
GET /api/empleados  
GET /api/empleados/:codigo  
POST /api/empleados  
PUT /api/empleados/:codigo  
DELETE /api/empleados/:codigo  

### Departamentos
GET /api/departamentos  
GET /api/departamentos/:codigo  
POST /api/departamentos  
PUT /api/departamentos/:codigo  
DELETE /api/departamentos/:codigo  

---

## 🔄 Relación
Cada empleado está vinculado a un departamento mediante el campo:
codigo_departamento

---

## 🚀 Notas
- Usar Postman para pruebas
- MongoDB debe estar activo
- Recomendado usar nodemon