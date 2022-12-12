import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ShopConnect = ({ shops }) => {
  const [password, setPassword] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const currentShop = shops.find((shop) => shop._id === id);
  const handleAccessShop = (e) => {
    e.preventDefault();
    if (password === currentShop.name.split(" ").join("").toLowerCase()) {
      navigate(`/shops/${id}/dashboard`);
    } else {
      toast.error("Mot de passe incorrect");
    }
  };

  return (
    <div className="flex justify-center items-center shadow-lg rounded w-fit m-auto p-8 mt-36 border-2 border-grey-500 transition ease-in-out duration-700 hover:border-opacity-100 hover:border-indigo-500">
      <form
        className="flex flex-col gap-4 p-5"
        onSubmit={(e) => handleAccessShop(e)}
      >
        <img src={currentShop.logo} alt="logo shop" className="w-72" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          className="px-4 py-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Connexion"
          className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-500 rounded transition-all duration-700 w-full"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default ShopConnect;
