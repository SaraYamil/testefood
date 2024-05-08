import { useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";
import FoodContext from "./FoodContext";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default function FoodProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("food").select("*");
        if (error) throw error;
        setFoods(data || []);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const values = useMemo(
    () => ({ foods, setFoods, loading, error }),
    [foods, setFoods, loading, error]
  );
  return <FoodContext.Provider value={values}>{children}</FoodContext.Provider>;
}
