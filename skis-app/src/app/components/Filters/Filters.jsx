const Filters = ({ posts, setFilterPosts }) => {
  const searchByTitle = (title) => {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilterPosts(filteredPosts);
  };

  const searchBySize = (size) => {
    if (size === "default") {
      setFilterPosts(posts);
    } else {
      const filteredPosts = posts.filter((post) =>
        post.size
          .toString()
          .toLowerCase()
          .includes(size.toString().toLowerCase())
      );
      setFilterPosts(filteredPosts);
    }
  };

  const searchByWeight = (weight) => {
    if (weight === "-45") {
      const filteredPosts = posts.filter((post) => post.weight < 45);
      setFilterPosts(filteredPosts);
    } else if (weight === "45-65") {
      const filteredPosts = posts.filter(
        (post) => post.weight >= 45 && post.weight <= 65
      );
      setFilterPosts(filteredPosts);
    } else {
      const filteredPosts = posts.filter((post) => post.weight > 65);
      setFilterPosts(filteredPosts);
    }
  };

  const searchByStyle = (style) => {
    if (style === "default") {
      setFilterPosts(posts);
    } else {
      const filteredPosts = posts.filter((post) =>
        post.style.toLowerCase().includes(style.toLowerCase())
      );
      setFilterPosts(filteredPosts);
    }
  };
  return (
    <div className="flex justify-between items-center w-full gap-3">
      <div className="flex flex-col gap-2 w-1/4">
        <label htmlFor="search">Rechercher</label>
        <input
          type="text"
          id="search"
          className="px-4 py-2"
          placeholder="Rechercher par nom"
          onChange={(e) => searchByTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 w-1/4">
        <label htmlFor="search">Poids</label>
        <select
          name="weight"
          id="weight"
          className="px-4 py-2"
          defaultValue="default"
          onChange={(e) => searchByWeight(e.target.value)}
        >
          <option value="default">Tout Poids</option>
          <option value="-45">Moins de 45kg</option>
          <option value="45-65">45kg - 65kg</option>
          <option value="+65">Plus de 65kg</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 w-1/4">
        <label htmlFor="search">Style</label>
        <select
          name="style"
          id="style"
          className="px-4 py-2"
          defaultValue="default"
          onChange={(e) => searchByStyle(e.target.value)}
        >
          <option value="default">Tout Style</option>
          <option value="Freeride">Freeride</option>
          <option value="Freestyle">Freestyle</option>
          <option value="Piste">Piste</option>
          <option value="Polyvalent">Polyvalent</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 w-1/4">
        <label htmlFor="size">Taille</label>
        <select
          name="size"
          id="size"
          className="px-4 py-2"
          defaultValue="default"
          onChange={(e) => searchBySize(e.target.value)}
        >
          <option value="default">Toutes Tailles</option>
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
    </div>
  );
};

export default Filters;
