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
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const menuOptions = [
    { id: 1, label: "Tablets", link: "/products/category/tablets" },
    { id: 2, label: "Perfumes", link: "/products/category/fragrances" },
    { id: 3, label: "Laptops", link: "/products/category/laptops" },
    { id: 4, label: "Tablets", link: "/products/category/tablets" },
  ];

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link to="/">STORE</Link>
        </Box>

        <Flex alignItems={"center"} flex={1} justifyContent={"center"}>
          <Menu>
            <MenuButton as={Button} cursor="pointer">
              Menu
            </MenuButton>
            <MenuList>
              {menuOptions.map((option) => (
                <MenuItem key={option.id} as={Link} to={option.link}>
                  {option.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <CartWidget />

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu>
              <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                <Avatar size={"sm"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar size={"2xl"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
