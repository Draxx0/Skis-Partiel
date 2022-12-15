import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import shopService from "../../../setup/services/shop.services";

const ShopEdit = ({ shops, fetchShops }) => {
  const { id } = useParams();
  const currentShop = shops.find((shop) => shop._id === id);
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await shopService.update(currentShop._id, credentials);
      fetchShops();
      toast.success("Boutique modifiée avec succès");
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-500 rounded transition-all duration-700 w-fit"
      >
        Retour
      </button>
      <h1 className="font-bold text-xl my-6">Modification de la boutique</h1>

      <form className="flex flex-col gap-11 shadow-md rounded p-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Logo de la boutique</label>
          <input
            type="url"
            name="logo"
            id="logo"
            className="px-4 py-2"
            onChange={handleChange}
            defaultValue={currentShop.logo}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Nom de la boutique</label>
          <input
            type="text"
            name="name"
            id="name"
            className="px-4 py-2"
            defaultValue={currentShop.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="name">Addresse de la boutique</label>
          <input
            type="text"
            name="address"
            id="address"
            className="px-4 py-2"
            defaultValue={currentShop.address}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          value="Modifier"
          className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-500 rounded transition-all duration-700 w-full"
        />
      </form>

      <ToastContainer />
    </div>
  );
};

export default ShopEdit;
