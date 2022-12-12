import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import commentService from "../../../setup/services/comment.services.js";

const PostDetails = ({ posts }) => {
  const [currentPost, setCurrentPost] = useState({});
  const [comments, setComments] = useState([]);
  const [commentData, setCommentData] = useState({});
  const { id } = useParams();

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
    console.log(commentData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      commentData.stars = parseInt(commentData.stars);
      commentData.post = currentPost._id;
      await commentService.createByPostId(commentData);
      fetchCommentsByPost();
    } catch (error) {
      console.log(error);
    }
  };

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

        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
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

        <div className="flex flex-col gap-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment._id} className="">
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
            className="h-96 object-cover"
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
          </div>

          <form className="flex items-center gap-6 w-full">
            <input
              type="tel"
              name="telephoneNumber"
              id="telephoneNumber"
              className="px-4 py-2 w-2/4"
              placeholder="Entrez votre numéro de téléphone"
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
  );
};

export default PostDetails;
