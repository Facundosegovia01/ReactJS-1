import * as React from "react"
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar"
import { Button, ChakraProvider, Text, Flex, } from "@chakra-ui/react"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {

  const [count, setCount] = useState (1);

  // count: es el valor de mi estado 
  // set count es la funcion que me permite actaulizarel valor de ese estado
const sacarItem = () =>{ 
  if (count === 0) return;
  setCount(count - 1);
};

const agregarItem = () =>{ 
  setCount(count + 1);
};
  return (
    <ChakraProvider>

<Navbar/>




<ItemListContainer greeting={"Ecommerce"}/> 

<Flex justify={"center"} alignItems={"center"} gap={"4"} marginTop={"10"}>
<Button onClick={sacarItem}>-</Button>
<Text>{count}</Text>
<Button onClick={agregarItem}>+</Button>
</Flex>
    </ChakraProvider>
 
  )
}

export default App;