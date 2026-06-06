import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useGetUser from "../../hooks/api/UseGetUser";
import useUserStore from "../../store/user.store";
import { Footer, Header } from "../home";

interface Props {
  children?: React.ReactNode;
}

const RootLayout = ({}: Props) => {
  const { data, isSuccess } = useGetUser();
  const { setUser, setIsAuthenticated } = useUserStore();
  useEffect(() => {
    if (isSuccess) {
      const user = data?.data.data;
      setUser(user);
      setIsAuthenticated(true);
    }
  }, [isSuccess]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default RootLayout;
