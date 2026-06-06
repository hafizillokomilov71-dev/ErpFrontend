import { useMutation } from "@tanstack/react-query";
import axios from "../../config/axios.ts";
import ENDPOINTS from "../../config/endpoints.ts";
import { toast } from "react-toastify";
import type { ILogin } from "../../types/login.type.ts";
const useLogin = () => {
  const onLogin = async (data: ILogin) => {
    return await axios.post(ENDPOINTS.auth.login, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const { data, isSuccess, isError, isPending, mutateAsync, error } =
    useMutation({
      mutationFn: async (data: ILogin) => await onLogin(data),
      mutationKey: ["login"],
      onError: (error) => {
        //@ts-ignore
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      },
    });
  return { data, error, isSuccess, isError, isPending, mutateAsync };
};
export default useLogin;
