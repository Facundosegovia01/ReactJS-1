import {
    Text,
    Flex,
  } from "@chakra-ui/react";
  import { FaCartPlus } from "react-icons/fa";
  
  
  
export const CartWidget = () => {
      return (
       <Flex alignItems={"center"} height={"100%"} justifyContent={"center"} width={10}>
       <FaCartPlus size={30}/>
        <Text fontSize={"1.5rem"}>
           1   
        </Text>
       </Flex>
      );
    };
    
