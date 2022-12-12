import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import commentService from "../../../setup/services/comment.services.js";
import bookingService from "../../../setup/services/booking.services.js";

const PostDetails = ({ posts }) => {
  const [currentPost, setCurrentPost] = useState({});
  const [comments, setComments] = useState([]);
  const [commentData, setCommentData] = useState({});
  const [telData, setTelData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchCommentsByPost = async () => {
    try {
      const comments = await commentService.findAllByPostId(id);
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };

  const averageStarsCalcul = (comments) => {
    let totalStars = 0;
    comments.forEach((comment) => {
      totalStars += comment.stars;
    });
    return totalStars / comments.length;
  };

  const handleGetComData = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const handleSendComment = async (e) => {
    e.preventDefault();
    try {
      commentData.stars = parseInt(commentData.stars);
      commentData.post = currentPost._id;
      await commentService.createByPostId(commentData);
      toast.success("Votre commentaire a été créé");
      fetchCommentsByPost();
    } catch (error) {
      toast.error("Une erreur est survenue");
      console.log(error);
    }
  };

  const handleGetTelData = (e) => {
    const { name, value } = e.target;
    setTelData({ [name]: value });
  };

  const handleSendBooking = async (e) => {
    e.preventDefault();
    if (currentPost.isAvailable === true) {
      try {
        telData.post = currentPost._id;
        await bookingService.createByPostId(telData);
        toast.success(
          "Votre réservation a bien été prise en compte vous allez être redirigé vers la page d'accueil"
        );
        setTimeout(() => {
          navigate(-1);
        }, 3000);
      } catch (error) {
        toast.error("Une erreur est survenue");
        console.log(error);
      }
    } else {
      toast.error("Ce bien n'est plus disponible");
    }
  };

  console.log(currentPost);

  useEffect(() => {
    setCurrentPost(posts.find((post) => post._id === id));
    fetchCommentsByPost();
  }, [id, posts]);
  return (
    <div className="flex justify-between gap-14">
      <div className="flex flex-col justify-between gap-4 w-1/3">
        <Link
          to="/"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-700 rounded transition-all duration-700 w-fit"
        >
          Retour
        </Link>

        <form
          onSubmit={(e) => handleSendComment(e)}
          className="flex flex-col gap-2"
        >
          <input
            type="text"
            maxLength="1"
            required
            pattern="[0-5]"
            name="stars"
            id="stars"
            className="px-4 py-2"
            placeholder="Votre Note entre 0 et 5"
            onChange={(e) => handleGetComData(e)}
          />
          <input
            type="text"
            name="username"
            id="username"
            className="px-4 py-2"
            placeholder="Votre nom"
            required
            onChange={(e) => handleGetComData(e)}
          />
          <textarea
            name="description"
            id="description"
            rows="10"
            className="resize-none px-4 py-2"
            placeholder="Commentaire"
            required
            onChange={(e) => handleGetComData(e)}
          ></textarea>
          <input
            type="submit"
            value="Ajouter un commentaire"
            className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-500 rounded transition-all duration-700 w-fit"
          />
        </form>

        <div className="flex flex-col gap-4 border-2 border-gray-300 rounded p-4">
          <h2 className="text-2xl font-bold">Commentaires</h2>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment._id} className="relative before:absolute before:content-[''] before:left-0 before:-bottom-2 before:bg-indigo-500 before:block before:h-0.5 before:w-full before:rounded">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">{comment.username}</h2>
                    <span className="text-lg font-bold">
                      {comment.stars} 🌟
                    </span>
                  </div>
                  <p className="text-gray-500 text-lg">{comment.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg">
              Il n'y a encore aucun commentaire pour ce post soyez le premier à
              donner votre avis !
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 w-2/3">
        <div className="flex flex-col justify-between gap-6">
          <img
            src={currentPost.imgUrl}
            alt="skis"
            className="h-96 object-cover border-2 border-indigo-500 rounded hover:brightness-90 transition-all duration-500"
          />
          <span className="text-xl font-bold">
            {comments.length > 0
              ? averageStarsCalcul(comments).toFixed(1) + "🌟"
              : "Non notée"}
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold uppercase">
              {currentPost.title} {currentPost.price}€ / j - {currentPost.size}
              cm
            </h2>

            <p className="text-lg">{currentPost.description}</p>

            <p className="text-lg">{currentPost.address}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Réservation</h2>
            <form
              className="flex items-center gap-6 w-full"
              onSubmit={(e) => handleSendBooking(e)}
            >
              <input
                type="tel"
                name="telephoneNumber"
                id="telephoneNumber"
                className="px-4 py-2 w-2/4"
                placeholder="Entrez votre numéro de téléphone"
                pattern="[0-9]{10}"
                maxLength="10"
                onChange={(e) => handleGetTelData(e)}
              />
              <input
                type="submit"
                value="Réserver"
                className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-500 rounded transition-all duration-700 w-fit"
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PostDetails;
