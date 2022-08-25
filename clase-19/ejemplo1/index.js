import mongoose from "mongoose";
import { Usuario } from "./models/User.js";

CRUD();

async function CRUD() {
  try {
    mongoose.connect("mongodb://localhost:27017/mibase");
    console.log("Conectado a mongoDB");

    // console.log("CREATE");
    // const userData = {
    //   nombre: "Diego",
    //   apellido: "Jerez",
    //   email: "diego@mail",
    //   password: "12345678",
    // };

    // const newUser = new Usuario(userData);

    // await newUser.save();
    // console.log(newUser);
    // console.log("Usuario creado");

    // console.log("UPDATE");
    // const userUpdate = await Usuario.findOneAndUpdate(
    //   {
    //     email: "diego@mail",
    //   },
    //   { nombre: "Pablo" }
    // );

    // console.log(userUpdate);

    // console.log("DELETE");
    // const usuarioDelete = await Usuario.deleteOne({ email: "jp@mail" });
    // console.log(usuarioDelete);

    console.log("READ");
    const users = await Usuario.find().limit(1);
    console.log(users);

    mongoose.disconnect();
  } catch (err) {
    console.log(error);
  }
}
