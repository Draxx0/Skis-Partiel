import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import PostDetails from "../pages/PostDetails/PostDetails";
import ShopBookings from "../pages/ShopBookings/ShopBookings";
import ShopConnect from "../pages/ShopConnect/ShopConnect";
import ShopDashboard from "../pages/ShopDashboard/ShopDashboard";
import ShopForm from "../pages/ShopForm/ShopForm";
import ShopsList from "../pages/ShopsList/ShopsList";

const MainRouter = ({posts, setPosts, shops, setShops, fetchPosts, fetchShops}) => {
  return (
    <Routes>
      <Route path="/" element={<Home posts={posts} setPosts={setPosts}/>} />
      <Route path="/post/:id" element={<PostDetails posts={posts}/>} />
      <Route path="/shops" element={<ShopsList shops={shops} setShops={setShops} />} />
      <Route path="/shops/:id" element={<ShopConnect shops={shops} setShops={setShops} />} />
      <Route path="/shops/:id/dashboard" element={<ShopDashboard shops={shops} setShops={setShops} fetchPosts={fetchPosts} fetchShops={fetchShops} posts={posts} />} />
      <Route path="/shops/:id/dashboard/post-form/create" element={<ShopForm shops={shops} fetchPosts={fetchPosts} fetchShops={fetchShops} />} />
      <Route path="/shops/:id/dashboard/post-form/:postId" element={<ShopForm shops={shops} fetchPosts={fetchPosts} fetchShops={fetchShops}/>} />
      <Route path="/shops/:id/dashboard/bookings" element={<ShopBookings shops={shops} />} />
    </Routes>
  );
};

export default MainRouter;
