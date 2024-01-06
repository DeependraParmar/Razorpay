import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card';
import axios from 'axios'


const Home = () => {
    const checkOutHandler = async(amount) => {
        const { data:{key} } = await axios.get("http://localhost:3000/api/getkey")
        const {data:{order}} = await axios.post("http://localhost:3000/api/checkout",{
            amount
        });
        
        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Deependra Parmar",
            description: "Test Transaction",
            image: "https://coursify-frontend.vercel.app/assets/logo-52101de9.png",
            order_id: order.id,
            callback_url: "http://localhost:3000/api/payment-verification",
            prefill: {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "7000246377"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#7637FF"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
  return (
    <>
        <Box>
            <Stack direction={'row'}>
                  <Card amount={1000} img={"https://wallpapercave.com/wp/wp8903890.jpg"} checkOutHandler={checkOutHandler}  />
            </Stack>
        </Box>
    </>
  )
}

export default Home;