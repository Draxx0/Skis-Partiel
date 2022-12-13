import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import postService from "../../../setup/services/post.services";

const ShopDashboard = ({ shops, fetchPosts, fetchShops }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentShop, setCurrentShop] = useState({});

  const handleDeletePost = async (postId) => {
    try {
      await postService.deleteOne(postId);
      toast.success("Post supprimé avec succès");
      fetchPosts();
      fetchShops();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const currentShop = shops.find((shop) => shop._id === id);
    setCurrentShop(currentShop);
    fetchPosts();
    fetchShops();
  }, [fetchPosts, fetchShops, id, shops]);

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-500 rounded transition-all duration-700 w-fit"
      >
        Déconnexion
      </button>
      <div className="flex justify-between items-center my-4">
        <div className="flex gap-2 items-center">
          <img src={currentShop?.logo} alt="logo shop" className="w-24" />
          <h1 className="text-3xl">
            <span className="text-indigo-500 font-bold">
              {currentShop?.name}
            </span>
            {" - "}
            Dashboard
          </h1>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/shops/${id}/dashboard/bookings`}
            className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-500 rounded transition-all duration-700 w-fit"
          >
            Réservation(s)
          </Link>
          <Link
            to={`/shops/${id}/dashboard/post-form/create`}
            className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-500 rounded transition-all duration-700 w-fit"
          >
            Ajouter un Post
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <p>Vous avez actuellement {currentShop.posts?.length} Poste(s).</p>

        <div className="grid grid-cols-2 gap-6">
          {currentShop.posts?.length > 0 ? (
            currentShop.posts?.map((post) => (
              <div
                key={post._id}
                className="flex flex-col gap-4 shadow-md border-gray-700 border-transparent border-2 rounded-md p-4 transition ease-in-out duration-700 border-1 hover:-translate-y-1 hover:border-indigo-500"
              >
                <img
                  src={post.imgUrl}
                  alt="post img"
                  className="h-60 object-cover"
                />

                <div className="flex justify-between items-center">
                  <p className="font-bold text-xl">{post.title}</p>
                  <div className="flex gap-1">
                    <button
                      onClick={() =>
                        navigate(`/shops/${id}/dashboard/post-form/${post._id}`)
                      }
                      className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-500 rounded transition-all duration-700 w-fit"
                    >
                      Modifier
                    </button>
                    <button
                      className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-500 rounded transition-all duration-700 w-fit"
                      onClick={() => handleDeletePost(post._id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Vous n'avez pas encore de postes sur le marché</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShopDashboard;
