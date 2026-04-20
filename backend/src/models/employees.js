import { Schema, model } from "mongoose";

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName1: {
      type: String,
      required: true,
    },
    lastName2: {
      type: String,
      required: true,
    },
    departmentCode: {
      type: Number,
      required: true,
    },
    employeeCode: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default model("Employee", employeeSchema);
