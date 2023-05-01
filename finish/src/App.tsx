import React from "react";
import HomePage from "./components/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <QueryClientProvider client={client}>
          <HomePage />
        </QueryClientProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
