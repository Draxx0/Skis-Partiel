import Post from "./Post/Post";

const PostsList = ({filterPosts}) => {
 return ( 
  <div className="grid grid-cols-1 gap-y-20">
   {filterPosts.map((post) => (
     <Post post={post} key={post._id} />
   ))}
  </div>
  );
}
 
export default PostsList;