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
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { CartContext } from "../../context/CartContext";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

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
    <Container maxW={"7xl"} py={12}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"lg"}
            alt={"product image"}
            src={product.thumbnail}
            fit={"cover"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
            boxShadow="xl"
          />
        </Flex>
        <Stack spacing={6}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ${product.price} USD
            </Text>
          </Box>

          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />
            }
          >
            <VStack spacing={4}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"lg"}
                fontWeight={"300"}
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
            bg={useColorModeValue("blue.600", "blue.300")}
            color={useColorModeValue("white", "black")}
            textTransform={"uppercase"}
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
            onClick={handleShowCount}
          >
            Agregar al carrito
          </Button>

          {showCount && (
            <HStack spacing={4} align="center" mt={4}>
              <IconButton
                icon={<MinusIcon />}
                onClick={handleDecrement}
                aria-label="Decrement"
                size="sm"
                bg="red.400"
                color="white"
                _hover={{ bg: "red.500" }}
              />
              <Text fontSize="lg" fontWeight="bold">
                {count}
              </Text>
              <IconButton
                icon={<AddIcon />}
                onClick={handleIncrement}
                aria-label="Increment"
                size="sm"
                bg="green.400"
                color="white"
                _hover={{ bg: "green.500" }}
              />
            </HStack>
          )}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
