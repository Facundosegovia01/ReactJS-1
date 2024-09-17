import {
  Box, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter,
  Button, Link, VStack, SimpleGrid
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <Box py={8} px={4}>
      <Heading as="h1" mb={8} textAlign="center" fontSize="3xl" color="blue.600">
        STORE
      </Heading>

      <SimpleGrid columns={[1, 2, 3, 4]} spacingY={20} spacingX={0} justifyItems="center">
        {products.map((product) => (
          <Card key={product.id} maxW="sm" boxShadow="md" borderRadius="lg" overflow="hidden">
            <CardBody>
              <Image
                src={product.thumbnail || "default-thumbnail.jpg"}
                alt={product.title || "Product Image"}
                borderRadius="md"
                objectFit="cover"
                boxSize="300px"
              />
              <Stack mt={4} spacing={3}>
                <Heading size="md" noOfLines={1}>
                  {product.title || "No title available"}
                </Heading>
                <Text color="blue.600" fontSize="xl" fontWeight="bold">
                  {product.price ? `$${product.price}` : "Price not available"}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <VStack width="100%">
                <Button
                  as={RouterLink}
                  to={`/Items/${product.id}`}
                  colorScheme="blue"
                  width="full"
                >
                  Ver Detalle
                </Button>
              </VStack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};
