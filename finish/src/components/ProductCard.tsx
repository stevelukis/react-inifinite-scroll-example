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
import { Product } from "../hooks";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <CardBody>
        <AspectRatio ratio={1}>
          <Image
            src={product.images[0]}
            rounded="lg"
          />
        </AspectRatio>
        <Stack mt={5}>
          <Heading size="md">{product.title}</Heading>
          <Text>${product.price}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
