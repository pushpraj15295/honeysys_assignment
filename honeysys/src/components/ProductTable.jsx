import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from "@chakra-ui/react";

const ProductTable = ({ product }) => {
  // console.log("product",product);
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Product Name</Th>
              <Th>Image</Th>
              <Th>Description</Th>
              <Th>Brand</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {product?.map((el) => (
              <Tr key={el.id}>
                <Td>{el.id}</Td>
                <Td>{el.name}</Td>
                <Td>
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={el.image_url}
                    alt={el.name}
                  />
                </Td>
                <Td>
                   {el.description}
                </Td>
                <Td>
                    {el.brand}
                </Td>
                <Td>
                    {el.price}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <br />
    </>
  );
};

export default ProductTable;
