import { useEffect } from "react";
import supabase from "../service/supabase.js";

export default function Test() {
  useEffect(() => {
    const test = async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*");

      console.log("DATA:", data);
      console.log("ERROR:", error);
    };

    test();
  }, []);

  return <h1>Supabase Test</h1>;
}