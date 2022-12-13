import instance from "./api.service";

const END_POINT = `/posts`;

const findAll = async () => {
  const reponse = await instance.get(END_POINT);
  return reponse.data;
};

const findOneById = async (id) => {
  const reponse = await instance.get(`${END_POINT}/${id}`);
  return reponse.data;
};

const create = async (credentials) => {
  const response = await instance.post(END_POINT, credentials);
  return response.data;
};

const update = async (credentials) => {
  const response = await instance.put(
    `${END_POINT}/${credentials._id}`,
    credentials
  );
  return response.data;
};

const deleteOne = async (id) => {
  return await instance.delete(`${END_POINT}/${id}`);
};

const postService = {
  findAll,
  findOneById,
  create,
  update,
  deleteOne,
};

export default postService;
