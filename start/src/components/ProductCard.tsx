import React from "react";
import {
  AspectRatio,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const ProductCard = () => {
  return (
    <Card>
      <CardBody>
        <AspectRatio ratio={1}>
          <Image
            src="https://i.dummyjson.com/data/products/1/2.jpg"
            rounded="lg"
          />
        </AspectRatio>
        <Stack mt={5}>
          <Heading size="md">iPhone 9</Heading>
          <Text>$549</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
