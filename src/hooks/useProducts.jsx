import { useState, useEffect } from "react";
import { getAllProducts } from "../services/products"; 

export const useProducts = () => {
  const [ProductsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        if (res.status === 200) {
          setProductsData(res.data.products);
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { ProductsData, loading };
};
