// src/App.js
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Box minH="100vh" bg="gray.800" color="white">
      <Navbar />
      <Flex>
        <Sidebar />
        <Box ml={20} p={4} flex={1}>
          {/* Your main content goes here */}
          <Dashboard />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
