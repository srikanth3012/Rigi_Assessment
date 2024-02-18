import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const Card = ({ info, dragItemRef, dragItemOverRef, handleSort, i }) => {
  return (
    <>
      {" "}
      <Link to={"/VideoPlayer/" + info.id}>
        <div
          className="bg-[#FFD1DC] flex m-2 md:w-[73%] w-[95%] md:h-24 h-20 rounded-md md:hover:scale-105 md:hover:duration-200 md:ml-[14%] "
          draggable
          onDragStart={(e) => (dragItemRef.current = i)}
          onDragEnter={(e) => (dragItemOverRef.current = i)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
        >
          <h1 className="h-8 w-8 font-bold m-2  relative top-[28.5%] md:top-[32%]">
            <FaBars />
          </h1>

          <img
            className="m-2 md:w-36 w-24 md:h-20 h-16 rounded-lg"
            alt="logo "
            src={info.snippet.thumbnails.medium.url}
          />

          <div className="relative top-[20%]">
            <ul className="list-none">
              <li className="font-semibold md:text-base text-xs w-auto md:w-auto h-8 md:h-auto  md:pl-2 pr-2">
                {info.snippet.title}
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
