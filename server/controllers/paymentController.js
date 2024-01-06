import { instance } from "../server.js"


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
    console.log(req.body);
    

    res.status(200).json({
        success: true,
        message: "Order created successfully....",
        order
    })
}