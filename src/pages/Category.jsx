import { useParams , } from "react-router-dom"
import { useProductsByCategory } from "../hooks";
import { ItemListContainer } from "../components";
import { Flex , Spinner} from "@chakra-ui/react";


export const Category = () => { 
    const {id} = useParams();
    const {productData , loading} = useProductsByCategory(id);
    return loading ? (
      <Flex
      width={"100%"}
      height={"90vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner size="xl" />
    </Flex>
  ) : (
  <ItemListContainer products={productData}/> 
    ); } 