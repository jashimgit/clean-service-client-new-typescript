import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Sidebar />

      {children}
    </>
  );
};

export default Layout;
