import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Text, VStack } from '@chakra-ui/layout'
import React from 'react'

const Card = ({ amount, img, checkOutHandler }) => {
  return (
    <VStack margin={'8'} marginX={'auto'} padding={'2'} justifyContent={'flex-start'} alignItems={'flex-start'} width={'96'} boxShadow={'md'} borderRadius={'xl'}>
        <Image src={img} />
        <Text>Just for ₹{amount}</Text>
        <Button onClick={() => checkOutHandler(amount)}>Buy Now</Button>
    </VStack>
  )
}

export default Card
