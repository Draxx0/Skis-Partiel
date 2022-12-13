import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ShopBookings = ({ shops }) => {
 const { id } = useParams();
 const navigate = useNavigate();
  const currentShop = shops.find((shop) => shop._id === id);

  return (
    <div className="flex flex-col gap-4">
      <Link to={() => navigate(-1)}>Retour</Link>
      <h1 className="text-2xl font-bold">Réservation(s)</h1>

      {currentShop.bookings.length > 0 ? (
        currentShop.bookings.map((booking) => (
          <div key={booking._id} className="flex flex-col gap-4 shadow-md border-gray-700 border-transparent border-2 rounded-md p-4 transition ease-in-out duration-700 border-1 hover:-translate-y-1 hover:border-indigo-500">
            <div className="flex justify-between items-center">
              <p className="font-bold text-xl">
                Numéro de téléphone de la réservation :{" "}
                {booking.telephoneNumber}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>Vous n'avez pas de réservations.</p>
      )}
    </div>
  );
};

export default ShopBookings;
