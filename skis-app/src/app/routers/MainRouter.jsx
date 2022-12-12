import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import PostDetails from "../pages/PostDetails/PostDetails";
import ShopConnect from "../pages/ShopConnect/ShopConnect";
import ShopDashboard from "../pages/ShopDashboard/ShopDashboard";
import ShopsList from "../pages/ShopsList/ShopsList";

const MainRouter = ({posts, setPosts, shops, setShops}) => {
  return (
    <Routes>
      <Route path="/" element={<Home posts={posts} setPosts={setPosts}/>} />
      <Route path="/post/:id" element={<PostDetails posts={posts}/>} />
      <Route path="/shops" element={<ShopsList shops={shops} setShops={setShops} />} />
      <Route path="/shops/:id" element={<ShopConnect shops={shops} setShops={setShops} />} />
      <Route path="/shops/:id/dashboard" element={<ShopDashboard shops={shops} setShops={setShops} />} />
    </Routes>
  );
};

export default MainRouter;
