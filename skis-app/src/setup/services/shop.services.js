import instance from "./api.service";

const END_POINT = `/shops`;

const findAll = async () => {
  const reponse = await instance.get(END_POINT);
  return reponse.data;
};

const remove = async (id) => {
  return await instance.delete(`${END_POINT}/${id}`);
};

const update = async (id, credentials) => {
  return await instance.put(`${END_POINT}/${id}`, credentials);
};

const shopService = {
  findAll,
  remove,
  update,
};

export default shopService;
