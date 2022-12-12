import { useEffect, useState } from "react";
import postService from "../../../setup/services/post.services";
import Filters from "../../components/Filters/Filters";
import PostsList from "../../components/Posts/PostsList";

const Home = ({ posts, setPosts }) => {
  const [filterPosts, setFilterPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const posts = await postService.findAll();
      setPosts(posts);
      setFilterPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div id="home" className="flex flex-col gap-10">
      <Filters posts={posts} setFilterPosts={setFilterPosts} />
      <PostsList filterPosts={filterPosts} />
    </div>
  );
};

export default Home;
