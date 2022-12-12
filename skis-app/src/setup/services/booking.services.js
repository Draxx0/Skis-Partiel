import instance from "./api.service";

const END_POINT = `/bookings`;

const findById = async (id) => {
  const reponse = await instance.get(`${END_POINT}/${id}`);
  return reponse.data;
};

const createByPostId = async (credentials) => {
  const response = await instance.post(END_POINT, credentials);
  return response.data;
};

const remove = async (id) => {
  return await instance.delete(`${END_POINT}/${id}`);
};

const bookingService = {
  findById,
  createByPostId,
  remove,
};

export default bookingService;
