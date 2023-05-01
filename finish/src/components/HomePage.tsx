import React from "react";
import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks";
import InfiniteScroll from "react-infinite-scroll-component";

const HomePage = () => {
  const { data, fetchNextPage, hasNextPage } = useProducts();

  return (
    <Container maxW="6xl" padding={5}>
      <InfiniteScroll
        next={fetchNextPage}
        hasMore={hasNextPage || false}
        loader={<Text>Loading...</Text>}
        dataLength={
          data?.pages.reduce((total, page) => total + page.length, 0) || 0
        }
      >
        <SimpleGrid columns={{ sm: 2, md: 5 }} gap={2}>
          {data?.pages.map((page) =>
            page.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </SimpleGrid>
      </InfiniteScroll>
    </Container>
  );
};

export default HomePage;
