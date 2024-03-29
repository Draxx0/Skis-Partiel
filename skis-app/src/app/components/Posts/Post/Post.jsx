import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white shadow-md border-gray-700 border-transparent border-2 rounded-md p-4 transition ease-in-out duration-700 cursor-pointer border-1 hover:-translate-y-1 hover:border-indigo-500"
      onClick={() => navigate(`/post/${post._id}`)}
    >
      <div className="flex gap-8">
        <img src={post.imgUrl} alt="Skis" className="h-96 object-cover w-2/5" />

        <div className="flex flex-col gap-1 w-3/5 justify-between">
          <h2 className="text-3xl font-bold uppercase">
            {post.title} {post.price}€ / j - {post.size}cm
          </h2>

          <p className="text-gray-500 text-xl">{post.description}</p>

          <p className="text-xl">{post.address}</p>

          <p className="text-lg">
            {" "}
            Style : <span className="font-medium">{post.style}</span>{" "}
          </p>

          <p className="text-lg">
            {" "}
            Poids : <span className="font-medium">{post.weight}kg</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
