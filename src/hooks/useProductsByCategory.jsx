import { useState, useEffect } from "react";
import { getProductByCategory } from "../services/products"; 

export const useProductsByCategory = (id) => {
  const [productData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductByCategory(id)
      .then((res) => {
        if (res.status === 200 && res.data.products) {
          setProductsData(res.data.products);
        } else {
          console.log("Error");
          setProductsData([]); // Asegurarse de que siempre devuelva un array
        }
      })
      .catch((err) => {
        console.log(err);
        setProductsData([]); // Manejar el error devolviendo un array vacío
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { productData, loading };
};
