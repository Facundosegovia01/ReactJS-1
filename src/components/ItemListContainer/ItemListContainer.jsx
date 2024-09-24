import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  Button,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent="center"
      gap={6}
      py={8}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
        >
          <CardBody>
            <Image
              src={product.thumbnail}
              alt={product.name}
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="250px"
              mb={4}
              transition="0.3s"
              _hover={{ transform: "scale(1.1)" }}
            />
            <Stack spacing="3">
              <Heading size="md" color={useColorModeValue("gray.700", "white")}>
                {product.title}
              </Heading>
              <Text noOfLines={2} color={useColorModeValue("gray.600", "gray.300")}>
                {product.description}
              </Text>
              <Text fontWeight="bold" color="blue.600" fontSize="2xl">
                ${product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              as={Link}
              to={`/item/${product.id}`}
              colorScheme="blue"
              w="full"
              variant="solid"
              _hover={{
                bg: useColorModeValue("blue.500", "blue.300"),
                transform: "translateY(-2px)",
                boxShadow: "md",
              }}
            >
              Ver detalles
            </Button>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};
