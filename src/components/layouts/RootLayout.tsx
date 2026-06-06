import { Outlet } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

const RootLayout = ({}: Props) => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default RootLayout;
