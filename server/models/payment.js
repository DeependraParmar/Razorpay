import mongoose from "mongoose"

export const connectDB = async() => {
    await mongoose.connect("mongodb://0.0.0.0:27017/razorpay")
    console.log("Mongodb connected successfully")
}
const schema = new mongoose.Schema({
    razorpay_order_id: {
        type: String,
        required: true
    },
    razorpay_payment_id: {
        type: String,
        required: true
    },
    razorpay_signature: {
        type: String,
        required: true
    }
});

export const Payment = mongoose.model("Payments",schema);