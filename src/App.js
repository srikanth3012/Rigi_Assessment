import "./App.css";
import Body from "./Componants/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PlayList from "./Componants/PlayList";
import VideoPlayer from "./Componants/VideoPlayer";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <PlayList />,
      },
      {
        path: "/VideoPlayer/:id",
        element: <VideoPlayer />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={approuter} />
    </div>
  );
}

export default App;
