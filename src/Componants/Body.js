import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="bg-sky-100 w-screen h-screen">
      <Outlet />
    </div>
  );
};
export default Body;
