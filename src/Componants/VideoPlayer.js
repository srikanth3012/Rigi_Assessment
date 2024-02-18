import ReactPlayer from "react-player";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import { IoPlayBackSharp, IoPlayForwardSharp } from "react-icons/io5";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../Hooks/useData";
const VideoPlayer = () => {
  const [playing, setPlaying] = useState(true);
  const playerRef = useRef(null);
  const { id } = useParams();
  const data = useData();
  const selectedVideo = data?.filter((item) => item.id === id);

  const backwardHandler = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };
  const forwardHandler = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };
  if (!data) return;
  return (
    <>
      <div className="md:pl-[19%] pl-[1%] pt-1 bg-sky-100 w-screen h-screen ">
        <h1 className="md:text-xl text-xs font-bold m-[3%]  md:-ml-[20%]">
          {" "}
          Title <tr />
          {selectedVideo[0]?.snippet.title}
        </h1>
        <div className="md:ml-[17%] ">
          <ReactPlayer
            ref={playerRef}
            width={"430px"}
            url={"https://www.youtube.com/watch?v=" + id}
            playing={playing}
            controls={true}
            loop={true}
          />
        </div>
        <div className="relative md:left-[27.5%] left-[27%]  -top-[27%] w-[480px]z-10">
          <controls className="  flex  hover:text-gray-300 text-transparent">
            <button className=" text-2xl m-5" onClick={backwardHandler}>
              <IoPlayBackSharp />
            </button>
            <button
              className=" text-2xl m-5"
              onClick={() => setPlaying(!playing)}
            >
              {playing ? <IoIosPause /> : <IoIosPlay />}
            </button>
            <button className=" text-2xl m-5" onClick={forwardHandler}>
              <IoPlayForwardSharp />
            </button>
          </controls>
        </div>
      </div>
    </>
  );
};
export default VideoPlayer;
