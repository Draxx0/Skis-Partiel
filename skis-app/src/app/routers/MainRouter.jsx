import { Route, Routes } from "react-router-dom";
import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import PostDetails from "../pages/PostDetails/PostDetails";
import ShopBookings from "../pages/ShopBookings/ShopBookings";
import ShopConnect from "../pages/ShopConnect/ShopConnect";
import ShopDashboard from "../pages/ShopDashboard/ShopDashboard";
import ShopEdit from "../pages/ShopEdit/ShopEdit";
import ShopForm from "../pages/ShopForm/ShopForm";
import ShopsList from "../pages/ShopsList/ShopsList";

const MainRouter = ({posts, shops, setShops, fetchPosts, fetchShops, storageItem, setStorageItem}) => {
  return (
    <Routes>
      <Route path="/" element={<Home posts={posts}/>} />
      <Route path="/post/:id" element={<PostDetails posts={posts} shops={shops} fetchPosts={fetchPosts} storageItem={storageItem} setStorageItem={setStorageItem} />} />
      <Route path="/shops" element={<ShopsList shops={shops} setShops={setShops} />} />
      <Route path="/shops/:id" element={<ShopConnect shops={shops} />} />
      <Route path="/shops/:id/dashboard" element={<ShopDashboard shops={shops} setShops={setShops} posts={posts} fetchPosts={fetchPosts} fetchShops={fetchShops} storageItem={storageItem} setStorageItem={setStorageItem} />} />
      <Route path="/shops/:id/dashboard/post-form/create" element={<ShopForm shops={shops} fetchPosts={fetchPosts} fetchShops={fetchShops} />} />
      <Route path="/shops/:id/dashboard/post-form/:postId" element={<ShopForm shops={shops} fetchPosts={fetchPosts} fetchShops={fetchShops}/>} />
      <Route path="/shops/:id/dashboard/bookings" element={<ShopBookings shops={shops} posts={posts} />} />
      <Route path="/shops/:id/dashboard/edit-shop" element={<ShopEdit shops={shops} fetchShops={fetchShops} />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default MainRouter;
