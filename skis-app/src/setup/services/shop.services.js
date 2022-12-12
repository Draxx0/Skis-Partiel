import instance from "./api.service";

const END_POINT = `/shops`;

const findAll = async () => {
  const reponse = await instance.get(END_POINT);
  return reponse.data;
};

const remove = async (id) => {
  return await instance.delete(`${END_POINT}/${id}`);
};

const shopService = {
  findAll,
  remove,
};

export default shopService;
