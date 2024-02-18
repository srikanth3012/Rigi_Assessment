import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import searchFilter from "../Utills/searchfilter";
import useData from "../Hooks/useData";

const PlayList = () => {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const dragItem = useRef();
  const dragItemOver = useRef();
  const input = useRef();
  const videos = useData();
  useEffect(() => {
    setData(videos);
    setAllData(videos);
  }, [videos]);

  const handleSort = () => {
    let items = [...data];
    const dragedItem = items.splice(dragItem.current, 1)[0];
    items.splice(dragItemOver.current, 0, dragedItem);
    dragItemOver.current = null;
    dragItem.current = null;
    setData(items);
  };
  const searchHandler = (searchText) => {
    if (searchText === "All") return setData(allData);
    const filterData = searchFilter(searchText, allData);
    input.current.value = "";
    setData(filterData);
  };
  if (!data) return;
  return (
    <div>
      <div className="md:pt-[3%]">
        <h1 className="text-lg md:text-2xl font-bold md:m-2 m-1">Play List</h1>

        <input
          ref={input}
          type="text"
          placeholder="Search"
          className="border border-black w-1/2 p-2 rounded-lg"
        />
        <button
          className="bg-green-500 md:px-5 px-2 py-2 ml-2 rounded-lg hover:bg-green-300"
          onClick={() => searchHandler(input.current.value)}
        >
          Search
        </button>
      </div>
      <div
        onClick={(e) => searchHandler(e.target.id)}
        className="flex justify-center gap-4 mt-[2%]"
      >
        <button
          id="All"
          className="text-sm md:text-base px-2 py-2 bg-gray-200 rounded-lg hover:bg-gray-400"
        >
          All Videos
        </button>
        <button
          id="Trailer"
          className="text-sm md:text-base px-2 py-2 bg-gray-200 rounded-lg hover:bg-gray-400"
        >
          Trailer
        </button>
        <button
          id="Teaser"
          className="text-sm md:text-base px-2 py-2 bg-gray-200 rounded-lg hover:bg-gray-400"
        >
          Teaser
        </button>
        <button
          id="Comedy"
          className="text-sm md:text-base px-2 py-2 bg-gray-200 rounded-lg hover:bg-gray-400"
        >
          Comedy
        </button>
      </div>

      <div className="flex flex-col mt-[0.5%] h-[500px]  overflow-y-scroll scroll-smooth">
        {" "}
        {data?.map((item, i) => (
          <Card
            info={item}
            dragItemRef={dragItem}
            dragItemOverRef={dragItemOver}
            handleSort={handleSort}
            i={i}
            key={i}
          />
        ))}
        {data.length === 0 && (
          <h1 className="text-5xl text-red-900 mt-[5%]">No Results found</h1>
        )}
      </div>
    </div>
  );
};
export default PlayList;
