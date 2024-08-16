import {
  Box
} from "@chakra-ui/react";

const ItemListContainer = ({greeting}) => {
    return (
     <Box textAlign={"center"} marginTop={10}>{greeting}</Box>
   
     );
  };
  
  export default ItemListContainer;