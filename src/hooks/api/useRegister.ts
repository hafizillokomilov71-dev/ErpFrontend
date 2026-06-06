import { useMutation } from "@tanstack/react-query";
import axios from "../../config/axios.ts";
import ENDPOINTS from "../../config/endpoints.ts";
import type { IRegister } from "../../types/register.type.ts";
import { toast } from "react-toastify";
const useRegister = () => {
  const onRegister = async (data: IRegister) => {
    return await axios.post(ENDPOINTS.auth.register, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const { data, isSuccess, isError, isPending, mutateAsync, error } =
    useMutation({
      mutationFn: async (data: IRegister) => await onRegister(data),
      mutationKey: ["register"],
      onError: (error) => {
        //@ts-ignore
        const errorMessage = error.response.data.message;
        errorMessage.forEach((message: string) => {
          toast.error(message);
        });
      },
    });
  return { data, error, isSuccess, isError, isPending, mutateAsync };
};
export default useRegister;
