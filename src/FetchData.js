import { useState } from "react";
import { useEffect } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    const timeout = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => clearTimeout(timeout);
  });

  return { data };
}
