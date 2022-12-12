import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import PostDetails from "../pages/PostDetails/PostDetails";

const MainRouter = ({posts, setPosts}) => {
  return (
    <Routes>
      <Route path="/" element={<Home posts={posts} setPosts={setPosts}/>} />
      <Route path="/post/:id" element={<PostDetails posts={posts}/>} />
    </Routes>
  );
};

export default MainRouter;
