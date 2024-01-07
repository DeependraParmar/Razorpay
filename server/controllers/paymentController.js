import { Payment } from "../models/payment.js";
import { instance } from "../server.js"
import crypto from "crypto";

export const checkOut = async(req,res,next) => {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: 'INR',
    }

    const order = await instance.orders.create(options);
    res.status(200).json({
        success: true,
        message: "Order created successfully....",
        order
    })
}

export const paymentVerification = async (req, res, next) => {
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
    
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET).update(body.toString()).digest('hex')

    console.log("Created signature: " + expectedSignature);
    console.log("Original Signature: " + razorpay_signature);

    const isAuthenticSignature = expectedSignature === razorpay_signature;

    if(isAuthenticSignature){
        // save all the things to the database 
        await Payment.create({
            razorpay_order_id,razorpay_payment_id,razorpay_signature
        })
        res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`)
    }
    else{
        res.status(400).json({
            success: false,
            message: "Payment Verification Failed."
        })
    }
}