import {
  Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
      <h1>STORE</h1>
      <Box display={"flex"} flexWrap={"wrap"} gap={10} justifyContent={"center"}>
        {products.map((product) => (
          <Card key={product.id} maxW='sm'>
            <CardBody>
              <Image
                src={product.thumbnail || "default-thumbnail.jpg"} 
                alt={product.title || "Product Image"}
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{product.title || "No title available"}</Heading>
                <Text>{product.desc || "No description available"}</Text> 
                <Text color='blue.600' fontSize='2xl'>
                  {product.price ? `$${product.price}` : "Price not available"}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                
                <Link to={`/Items/${product.id}`}>Ir a Detalle</Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
