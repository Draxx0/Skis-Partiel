import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white shadow-md rounded-md p-4 transition ease-in-out duration-700 cursor-pointer hover:-translate-y-1"
      onClick={() => navigate(`/post/${post._id}`)}
    >
      <div className="flex gap-8">
        <img src={post.imgUrl} alt="Skis" className="h-64 object-cover w-2/5" />

        <div className="flex flex-col gap-1 w-3/5">
          <h2 className="text-3xl font-bold uppercase">
            {post.title} {post.price}€ / j - {post.size}cm
          </h2>

          <p className="text-gray-500 text-xl">{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
