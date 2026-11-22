import mongoose from "mongoose";

async function getDatabaseConnection() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
}

export default getDatabaseConnection;