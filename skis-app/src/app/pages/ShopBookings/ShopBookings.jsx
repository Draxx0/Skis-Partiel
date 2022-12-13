import { useNavigate, useParams } from "react-router-dom";

const ShopBookings = ({ shops, posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentShop = shops.find((shop) => shop._id === id);
  const bookingPosts = currentShop.bookings.map((booking) => {
    return posts.find((post) => post._id === booking.post);
  });
  console.log("Bookings Post", bookingPosts);
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white font-bold py-2 px-4 border-indigo-500 rounded transition-all duration-700 w-fit"
      >
        Retour
      </button>
      <h1 className="text-2xl font-bold">Réservation(s)</h1>

      {currentShop.bookings.length > 0 ? (
        currentShop.bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex flex-col gap-4 shadow-md border-gray-700 border-transparent border-2 rounded-md p-4 transition ease-in-out duration-700 border-1 hover:-translate-y-1 hover:border-indigo-500"
          >
            <div className="flex flex-col justify-between items-center relative">
              {bookingPosts.map((post, index) => {
                if (post._id === booking.post) {
                  return (
                    <div key={post._id}>
                      <p className="font-bold text-xl">
                        Nom du poste : {post.title}
                      </p>

                      <span className="absolute left-1 top-0 font-bold">{index + 1}</span>
                    </div>
                  );
                }
              })}

              <p className="text-lg">
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
