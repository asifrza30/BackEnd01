import mongoose from "mongoose";

const adressSchema = new mongoose.Schema({})


const Adress = mongoose.model('Adress', adressSchema);

export default Adress;