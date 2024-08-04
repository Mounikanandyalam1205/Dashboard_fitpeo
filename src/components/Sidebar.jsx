// src/components/Sidebar.js
import { Box, Flex, VStack, Spacer, Icon } from "@chakra-ui/react";
import { TbReportAnalytics } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { BsFileBarGraph } from "react-icons/bs";
import { RiWallet3Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdLogOut } from "react-icons/io";

function Sidebar() {
  return (
    <Box
      bg={"gray.700"}
      w={20}
      pos={"fixed"}
      h={"full"}
      boxShadow={"md"}
      color="white"
    >
      <Flex direction="column" align="center" h="100vh" py={4}>
        <VStack spacing={10} alignItems={"center"}>
          <Icon as={GoHome} w={8} h={8} />
          <Icon as={BsFileBarGraph} w={8} h={8} />
          <Icon as={TbReportAnalytics} w={8} h={8} />
          <Icon as={RiWallet3Line} w={8} h={8} />
          <Icon as={HiOutlineShoppingBag} w={8} h={8} />
          <Spacer />
        <Icon as={IoMdLogOut} w={8} h={8} mb={4} />
        </VStack>
        
      </Flex>
    </Box>
  );
}

export default Sidebar;
