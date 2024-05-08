import { useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";
import ViewContext from "./ViewContext";
import { useParams } from "react-router-dom";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default function ViewProvider({ children }) {
  const [selectedFood, setSelectedFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) {
          throw new Error("No food id provided");
        }
        const { data, error } = await supabase
          .from("food")
          .select("*")
          .eq("id", id)
          .single();
        console.log(data);
        if (error) throw error;
        setSelectedFood(data);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  const values = useMemo(
    () => ({ selectedFood, loading, error }),
    [selectedFood, loading, error]
  );

  return <ViewContext.Provider value={values}>{children}</ViewContext.Provider>;
}
