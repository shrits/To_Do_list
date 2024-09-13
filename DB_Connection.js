import mongoose from 'mongoose';

const connectionUrl = "mongodb://localhost:27017/ToDoDB";

const connect = async () => {
    try {
        await mongoose.connect(connectionUrl);
        console.log("Connected to Database");
    } catch (error) {
        console.error("Failed to connect to Database", error);
    }
}
export default connect;