import { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase";

export const useProducts = () => {
  const [ProductsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const productCollection = collection(db, "products");
    getDocs(productCollection)
      .then((snapshot) => {
        setProductsData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false); // Establecer `loading` en `false` cuando se cargan los datos
      })
      .catch((error) => {
        setError(true);
        setLoading(false); // Establecer `loading` en `false` si hay un error
      });
  }, []);

  return { ProductsData, loading, error }; // Devolver `error` también para manejarlo en la interfaz de usuario
};
