import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log("Connected to Database");
    } catch (error) {
        console.error("Failed to connect to Database", error);
    }
}
export default connect;