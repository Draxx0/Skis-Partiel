import { useEffect, useState } from "react";
import postService from "../../../setup/services/post.services";
import Filters from "../../components/Filters/Filters";
import PostsList from "../../components/Posts/PostsList";

const Home = ({ posts }) => {
  const [filterPosts, setFilterPosts] = useState([]);

  // const fetchPosts = async () => {
  //   try {
  //     const posts = await postService.findAll();
  //     setPosts(posts);
  //     setFilterPosts(posts);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    setFilterPosts(posts);
  }, [posts]);

  return (
    <div id="home" className="flex flex-col gap-10">
      <Filters posts={posts} setFilterPosts={setFilterPosts} />
      <h1 className="text-4xl w-fit font-bold relative before:absolute before:content-[''] before:left-0 before:-bottom-3 before:bg-indigo-500 before:block before:h-1 before:w-2/3 before:rounded">Skis en location</h1>
      <PostsList filterPosts={filterPosts} />
    </div>
  );
};

export default Home;
