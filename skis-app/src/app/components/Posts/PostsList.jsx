import Post from "./Post/Post";

const PostsList = ({ filterPosts }) => {
  return (
    <div className="grid grid-cols-1 gap-y-20">
      {filterPosts.length > 0 ? (
        filterPosts
          .filter((post) => post.isAvailable)
          .map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p className="text-xl font-bold">Aucun ski en location</p>
      )}
    </div>
  );
};

export default PostsList;
