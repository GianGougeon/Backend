import mongoose from "mongoose";

const estudianteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true, default: 0 },
  dni: { type: String, required: true, unique: true },
  curso: { type: String, required: true },
  nota: { type: Number, required: true },
});

export const Estudiante = mongoose.model("estudiantes", estudianteSchema);
