import { useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favoritesPost")) || []
  );

  return (
    <div>
      <h1 className="text-xl font-bold">Mes Annonces Favorites</h1>

      {favorites.length > 0 ? (
        favorites.map((favorite) => {
          return (
            <div key={favorite._id}>
              <h2 className="text-indigo-500">{favorite.title}</h2>
            </div>
          );
        })
      ) : (
        <h2>Vous n'avez pas encore d'annonces favorites</h2>
      )}
    </div>
  );
};

export default Favorites;
