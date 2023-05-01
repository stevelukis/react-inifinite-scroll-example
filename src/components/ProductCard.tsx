import React from "react";
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

const ProductCard = () => {
  return (
    <Card maxW={250}>
      <CardBody>
        <Image
          src="https://i.dummyjson.com/data/products/1/1.jpg"
          rounded="lg"
          boxSize={225}
        />
        <Stack mt={5}>
          <Heading size="md">
            iPhone 9
          </Heading>
          <Text>$549</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
