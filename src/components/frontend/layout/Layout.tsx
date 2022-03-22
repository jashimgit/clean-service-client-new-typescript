import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
    {children}
      <Footer />
    </div>
  );
}
