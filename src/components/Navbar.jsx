// src/components/Navbar.js
import { Box, Flex, Button, useColorMode, useColorModeValue, Spacer, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SunIcon, MoonIcon, SearchIcon } from "@chakra-ui/icons";
import { IoMailOutline,IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'


function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="gray.700" w="100%" px={3}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} gap={12}>
        <Box>Logo</Box>
        <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.300' />
        </InputLeftElement>
        <Input type='tel' placeholder='Search' w={250}/>
      </InputGroup>
        <Spacer />
        <Flex alignItems={"center"} gap={5}>
        <IoMailOutline size={20}/>
        <IoSettingsOutline size={20}/>
        <IoMdNotificationsOutline size={20} />
        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
