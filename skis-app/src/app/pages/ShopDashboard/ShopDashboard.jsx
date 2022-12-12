import { useParams } from "react-router-dom";

const ShopDashboard = ({ shops }) => {
  const { id } = useParams();
  const currentShop = shops.find((shop) => shop._id === id);

  return (
    <div>
      <h1>
        <span className="text-indigo-500 text-bold text-lg">
          {currentShop.name}
        </span>{" "}
        ShopDashboard
      </h1>
    </div>
  );
};

export default ShopDashboard;
