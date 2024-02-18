import { useEffect, useState } from "react";
import { Youtubedata } from "../Utills/Constants";

const useData = () => {
  const [data, setData] = useState();
  useEffect(() => {
    dataHandler();
  }, []);
  const dataHandler = async () => {
    try {
      const data = await fetch(Youtubedata);
      const json = await data.json();
      setData(json.items);
    } catch {
      console.log("Failed to fetch");
    }
  };
  return data;
};
export default useData;
