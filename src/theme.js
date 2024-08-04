// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.800", // You can choose any gray shade that you prefer
        color: "white", // Ensure the text color is readable
      },
    },
  },
});

export default theme;
