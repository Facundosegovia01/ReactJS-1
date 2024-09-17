import { useState, useEffect } from "react";
import { getProductById } from "../services/products";
import {doc , getDoc, setDoc} from "firebase/firestore";
import { db } from "../firebase";
export const useProductsById = (id) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productItem = doc(db, "products", id);
    getDoc(productItem)
      .then((snapshot) => {
        setProductData({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { productData, loading };
};