import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./app/layouts/MainLayout";
import MainRouter from "./app/routers/MainRouter";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <BrowserRouter>
      <MainLayout>
        <MainRouter posts={posts} setPosts={setPosts} />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
