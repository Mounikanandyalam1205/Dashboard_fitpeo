import React from "react";
import { Flex, Box, Avatar, Text, Divider } from "@chakra-ui/react";
import Rating from "react-rating";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingCard = ({ customer, avatarUrl, rating, description }) => {
  const customerData = [
    {
        customer: 'John Doe',
        avatarUrl: 'https://bit.ly/dan-abramov',
        rating: 4.5,
        description: 'Great service! The team was very attentive and the delivery was on time. Highly recommend this service for its efficiency and customer care.'
      },
      {
        customer: 'Jane Smith',
        avatarUrl: 'https://bit.ly/kent-c-dodds',
        rating: 3.0,
        description: 'Good experience. The product was as described, but the customer service could have been better. Overall, a decent experience.'
      },
      {
        customer: 'Sam Johnson',
        avatarUrl: 'https://bit.ly/ryan-florence',
        rating: 5.0,
        description: 'Excellent! The entire process was seamless from start to finish. The product exceeded my expectations and the support team was top-notch.'
      },
      
    
  ];
  return (
    
    <>
      {customerData.map((item) => (
        <>
          <Flex align="center" mb={4} mt={5}>
            <Avatar src={item.avatarUrl} size="sm" name={item.customer} mr={3} />
            <Text fontSize="lg" fontWeight="bold">
              {item.customer}
            </Text>
          </Flex>
          <Box mb={2}>
            <Rating
              initialRating={item.rating}
              readonly
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
              fractions={5}
            />
          </Box>
          <Text fontSize="sm" color="gray.400" mb={2}>
            {item.description}
          </Text>
          <Divider/>
        </>
      ))}
    </>

    // </Box>
  );
};

export default RatingCard;
