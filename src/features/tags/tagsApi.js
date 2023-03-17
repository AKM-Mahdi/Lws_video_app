import axios from "../../Utils/axios";

export const getTags = async () => {
  const response = await axios.get("/tags");
  return response.data;
};
