'use client';

// context
import { ChakraProvider } from '@chakra-ui/react';

export default function ChakraContextProvider({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
