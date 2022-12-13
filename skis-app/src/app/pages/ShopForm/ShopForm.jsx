import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import postService from "../../../setup/services/post.services";

const ShopForm = ({ shops, fetchPosts, fetchShops }) => {
  const location = useLocation();
  const { id, postId } = useParams();
  const [editMode] = useState(
    location.pathname.includes("create") ? false : true
  );
  const currentShop = shops.find((shop) => shop._id === id);
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (editMode) {
      fetchPostsByShop();
    }
  }, []);

  const fetchPostsByShop = async () => {
    try {
      const post = await postService.findOneById(postId);
      setCredentials(post);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editMode ? "update" : "create";
    credentials.shop = currentShop._id;
    try {
      await postService[method](credentials);
      fetchPosts();
      fetchShops();
      if (editMode) {
        toast.success("Post modifié avec succès, vous allez être redirigé");
      } else {
        toast.success("Post créé avec succès, vous allez être redirigé");
      }
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center font-bold text-2xl">
        Formulaire de Création / Modification de Poste
      </h1>

      <form className="shadow-md rounded p-10" onSubmit={handleSubmit}>
        <h3 className="mb-5 font-bold">
          {editMode
            ? `Modification de : ${credentials.title}`
            : "Création d'un nouveau post"}
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              name="title"
              id="title"
              className="px-4 py-2"
              placeholder="Titre du Poste"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="imgUrl">Image</label>
            <input
              type="url"
              name="imgUrl"
              id="imgUrl"
              className="px-4 py-2"
              placeholder="https://masuperbeimage.jpg"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="weight">Poids</label>
            <input
              type="number"
              name="weight"
              id="weight"
              className="px-4 py-2"
              placeholder="45kg"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="size">Taille</label>
            <select
              name="size"
              id="size"
              className="px-4 py-2"
              onChange={handleChange}
            >
              <option value="140">140</option>
              <option value="145">145</option>
              <option value="150">150</option>
              <option value="155">155</option>
              <option value="160">160</option>
              <option value="165">165</option>
              <option value="170">170</option>
              <option value="175">175</option>
              <option value="180">180</option>
              <option value="185">185</option>
              <option value="190">190</option>
            </select>
          </div>

          <div className="flex flex-col gapa-2">
            <label htmlFor="style">Style</label>
            <select
              name="style"
              id="style"
              className="px-4 py-2"
              onChange={handleChange}
            >
              <option value="Freeride">Freeride</option>
              <option value="Freestyle">Freestyle</option>
              <option value="Piste">Piste</option>
              <option value="Polyvalent">Polyvalent</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="price">Prix</label>
            <input
              type="number"
              name="price"
              id="price"
              className="px-4 py-2"
              placeholder="30"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address">Addresse</label>
            <input
              type="text"
              name="address"
              id="address"
              className="px-4 py-2"
              placeholder="5 Avenue de la République"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description du Poste</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              className="px-4 py-2 resize-none"
              onChange={handleChange}
            ></textarea>
          </div>

          <input
            type="submit"
            value={editMode ? "Modifier" : "Ajouter"}
            className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-500 rounded transition-all duration-700 w-full"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ShopForm;
