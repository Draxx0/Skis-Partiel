import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shopService from "../../../setup/services/shop.services";

const ShopsList = ({shops, setShops}) => {
 
  const navigate = useNavigate();
  const fetchShops = async () => {
    try {
      const shops = await shopService.findAll();
      setShops(shops);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShops();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      {shops.map((shop) => (
        <div
          className="flex flex-col gap-10 justify-center items-center shadow-md w-1/4 m-auto rounded transition ease-in-out duration-700  p-4 cursor-pointer border-2 border-indigo-500 hover:-translate-y-1"
          onClick={() => navigate(`${shop._id}`)}
          key={shop._id}
        >
          <div className="flex flex-col gap-5">
            <div className="flex justify-center items-center gap-6">
              <img src={shop.logo} alt="logo shop" className="h-10" />
              <span className="font-bold text-lg">{shop.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopsList;
