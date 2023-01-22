import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import styles from "../Styles/Home.module.css";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";



const ProductList = ({ product }) => {
  return (
    <>
      <SimpleGrid
        columns={4}
        gap="15px"
        lineHeight={5}
        className="styles.container_products"
      >
        {product.map((item) => (
          <Card maxW="sm">
            <CardBody>
              <Image
                src={item.image_url}
                alt={item.name}
                borderRadius="lg"
                width="100%"
                height={200}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.name}</Heading>
                <Text>{item.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${item.price}
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button className={styles.addtocart_btn}>Add to cart</Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductList;
