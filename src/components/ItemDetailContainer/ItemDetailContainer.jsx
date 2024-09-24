import { useState, useContext } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { CartContext } from "../../context/CartContext";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export const ItemDetailContainer = ({ product }) => {
  const [showCount, setShowCount] = useState(false);
  const [count, setCount] = useState(0);

  const { addItem, removeItem } = useContext(CartContext);

  const handleShowCount = () => {
    setShowCount(!showCount);
  };

  const handleIncrement = () => {
    if (count < product.stock) {
      const newCount = count + 1;
      setCount(newCount);
      addItem(product, newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      removeItem(product);
    }
  };

  return (
    <Container maxW={"7xl"} py={{ base: 10, md: 20 }}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }}>
        <Flex justify={"center"}>
          <Image
            rounded={"lg"}
            alt={"product image"}
            src={product.thumbnail}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
            boxShadow={"lg"}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.2}
              fontWeight={700}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              color={useColorModeValue("blue.700", "blue.300")}
            >
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={500}
              fontSize={"2xl"}
              mt={2}
            >
              ${product.price} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }} align="start">
              <Text
                color={useColorModeValue("gray.700", "gray.300")}
                fontSize={"lg"}
                fontWeight={"400"}
              >
                {product.description}
              </Text>
            </VStack>
          </Stack>

          <Button
            rounded={"full"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("blue.600", "blue.200")}
            color={useColorModeValue("white", "blue.900")}
            textTransform={"uppercase"}
            _hover={{
              bg: useColorModeValue("blue.700", "blue.300"),
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            onClick={handleShowCount}
          >
            {showCount ? "Ocultar Contador" : "Agregar al carrito"}
          </Button>

          {showCount && (
            <HStack mt={4} spacing={6} justify="center">
              <IconButton
                icon={<MinusIcon />}
                onClick={handleDecrement}
                isDisabled={count === 0}
                colorScheme="red"
                aria-label="Decrement"
              />
              <Text fontSize="2xl" fontWeight="bold">
                {count}
              </Text>
              <IconButton
                icon={<AddIcon />}
                onClick={handleIncrement}
                isDisabled={count >= product.stock}
                colorScheme="green"
                aria-label="Increment"
              />
            </HStack>
          )}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
