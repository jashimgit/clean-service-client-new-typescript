import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <div className="container-fluid">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
