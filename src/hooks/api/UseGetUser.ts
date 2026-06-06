import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";
import { getItem } from "../../utils/localstorage";
const useGetUser = () => {
  const getUser = async () => {
    return await axios.get("auth/me", {
      headers: {
        Authorization: `Bearer ${getItem("token")}`,
      },
    });
  };
  const { data, isSuccess } = useQuery({
    queryKey: ["user/me"],
    queryFn: async () => getUser(),
  });
  return { data, isSuccess };
};
export default useGetUser;
