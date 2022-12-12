import Post from "./Post/Post";

const PostsList = ({ filterPosts }) => {
  return (
    <div className="grid grid-cols-1 gap-y-20">
      {filterPosts
        .filter((post) => post.isAvailable)
        .map((post) => (
          <Post key={post._id} post={post} />
        ))}
    </div>
  );
};

export default PostsList;
