import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  HStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom";
import { useItemsCollection } from "../../hooks";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { items } = useItemsCollection("categories");

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} boxShadow="md">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Logo */}
        <Box>
          <Link to="/">
            <Text
              fontSize="xl"
              fontWeight="bold"
              color={useColorModeValue("blue.600", "white")}
            >
              Store react
            </Text>
          </Link>
        </Box>

        {/* Categorías */}
        <HStack spacing={8}>
          <Menu>
            <MenuButton
              as={Button}
              fontWeight="bold"
              bg={useColorModeValue("gray.100", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
            >
              Categorías
            </MenuButton>
            <MenuList
              maxH="200px"
              overflowY="auto"
              bg={useColorModeValue("white", "gray.800")}
            >
              {items.map((category) => (
                <MenuItem key={category.slug}>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>

        {/* Carrito y usuario */}
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {/* Icono del carrito */}
            <CartWidget />

            <Button
              onClick={toggleColorMode}
              bg={useColorModeValue("gray.100", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
