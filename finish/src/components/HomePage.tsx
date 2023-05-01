import React from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const HomePage = () => {
  const items = [...Array(20)];

  return (
    <Container maxW="6xl" padding={5}>
      <SimpleGrid columns={{ sm: 2, md: 5 }} gap={2}>
        {items.map((_, i) => (
          <ProductCard key={i} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default HomePage;
