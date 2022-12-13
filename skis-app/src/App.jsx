import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./app/layouts/MainLayout";
import MainRouter from "./app/routers/MainRouter";
import "react-toastify/dist/ReactToastify.css";
import postService from "./setup/services/post.services";
import shopService from "./setup/services/shop.services";

function App() {
  const [posts, setPosts] = useState([]);
  const [shops, setShops] = useState([]);
  const fetchPosts = async () => {
    try {
      const response = await postService.findAll();
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchShops = async () => {
    try {
      const response = await shopService.findAll();
      setShops(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BrowserRouter>
      <MainLayout>
        <MainRouter
          posts={posts}
          setPosts={setPosts}
          shops={shops}
          setShops={setShops}
          fetchPosts={fetchPosts}
          fetchShops={fetchShops}
        />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
