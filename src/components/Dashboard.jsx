import {
  Box,
  Flex,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BarChart from "./BarChart";
import { BiTargetLock } from "react-icons/bi";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiDish } from "react-icons/bi";
import CustomerTable from "./CustomerTable";
import RatingCard from "./Rating";

export default function Dashboard() {
  const percentage = 66;
  return (
    <>
      <Box pb={5}>Dashboard</Box>

      <SimpleGrid columns={12} spacing={4}>
        <Box
          borderRadius={8}
          bg={"gray.700"}
          height="170px"
          gridColumn="span 2"
          p={5}
        >
          <HiOutlineShoppingBag size={50} />

          <Stat>
            <StatLabel mt={2}>Total Orders</StatLabel>
            <Stack spacing={2} mt={25}>
              <Flex align="center">
                <StatNumber>70</StatNumber>
                <Spacer />
                <StatHelpText mt={3}>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Flex>
            </Stack>
          </Stat>
        </Box>

        <Box
          borderRadius={8}
          bg={"gray.700"}
          height="170px"
          gridColumn="span 2"
          p={5}
        >
          <HiOutlineShoppingBag size={50} />

          <Stat>
            <StatLabel mt={2}>Total Delivered</StatLabel>
            <Stack spacing={2} mt={25}>
              <Flex align="center">
                <StatNumber>3</StatNumber>
                <Spacer />
                <StatHelpText mt={3}>
                  <StatArrow type="decrease" />
                  3.36%
                </StatHelpText>
              </Flex>
            </Stack>
          </Stat>
        </Box>
        <Box
          borderRadius={8}
          bg={"gray.700"}
          height="170px"
          gridColumn="span 2"
          p={5}
        >
          <HiOutlineShoppingBag size={50} />

          <Stat>
            <StatLabel mt={2}>Total Cancelled</StatLabel>
            <Stack spacing={2} mt={25}>
              <Flex align="center">
                <StatNumber>34</StatNumber>
                <Spacer />
                <StatHelpText mt={3}>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Flex>
            </Stack>
          </Stat>
        </Box>
        <Box
          borderRadius={8}
          bg={"gray.700"}
          height="170px"
          gridColumn="span 2"
          p={5}
        >
          <HiOutlineShoppingBag size={50} />

          <Stat>
            <StatLabel mt={2}>Total Revenue</StatLabel>
            <Stack spacing={2} mt={25}>
              <Flex align="center">
                <StatNumber>$345,670</StatNumber>
                <Spacer />
                <StatHelpText mt={3}>
                  <StatArrow type="decrease" />
                  6%
                </StatHelpText>
              </Flex>
            </Stack>
          </Stat>
        </Box>
        <Box
          borderRadius={8}
          bg={"gray.700"}
          height="170px"
          gridColumn="span 4"
          p={5}
          // mr={10}
        >
          <Flex justifyContent="space-around">
            <Box>
              <Stat mt={2}>
                <StatLabel>New Profit</StatLabel>
                <Stack spacing={2}>
                  <StatNumber fontSize="5xl">$645,670</StatNumber>
                  <Spacer />
                  <StatHelpText>
                    <StatArrow type="increase" />
                    26%
                  </StatHelpText>
                </Stack>
              </Stat>
            </Box>

            <Box alignItems="center" width="100px" height="100px">
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
              <p style={{ fontSize: "10px" }}>
                *The values have been rounded off
              </p>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={12} spacing={4}>
        <Box
          borderRadius={8}
          bg={"gray.700"}
          p={5}
          mt={5}
          flex={2}
          gridColumn="span 8"
        >
          <BarChart />
        </Box>
        <Box
          borderRadius={8}
          bg={"gray.700"}
          p={5}
          mt={5}
          flex={1}
          gridColumn="span 4"
        >
          <Flex justifyContent="space-between" alignItems="center" mb={5}>
            <Box>
              <Flex alignItems="center" gap={4}>
                <BiTargetLock size={35} />
                <span>Goals</span>
              </Flex>
            </Box>
            <FaChevronCircleRight size={20} />
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" mb={5}>
            <Box>
              <Flex alignItems="center" gap={4}>
                <IoFastFoodOutline size={35} />
                <span>Popular Dishes</span>
              </Flex>
            </Box>
            <FaChevronCircleRight size={20} />
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" mb={5}>
            <Box>
              <Flex alignItems="center" gap={4}>
                <BiDish size={35} />
                <span>Menus</span>
              </Flex>
            </Box>
            <FaChevronCircleRight size={20} />
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" mb={5}>
            <Box>
              <Flex alignItems="center" gap={4}>
                <BiTargetLock size={40} />
                <span>Goals</span>
              </Flex>
            </Box>
            <FaChevronCircleRight size={20} />
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" mb={5}>
            <Box>
              <Flex alignItems="center" gap={4}>
                <BiTargetLock size={40} />
                <span>Goals</span>
              </Flex>
            </Box>
            <FaChevronCircleRight size={20} />
          </Flex>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={12} spacing={4}>
        <Box
          borderRadius={8}
          bg={"gray.700"}
          p={5}
          mt={5}
          flex={2}
          gridColumn="span 8"
        >
        <CustomerTable/>
        </Box>
        <Box
          borderRadius={8}
          bg={"gray.700"}
          p={5}
          mt={5}
          flex={1}
          gridColumn="span 4"
        >
        <b style={{ fontSize: '20px'}}>Customer's Feedback</b>
        <RatingCard  />
        </Box>
      </SimpleGrid>
    </>
  );
}
