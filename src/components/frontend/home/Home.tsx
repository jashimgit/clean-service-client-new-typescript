import Layout from "../layout/Layout";
import Header from "../Header";
import Features from "../features/Features";
import Services from "../services/Services";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Features />
      <Services />
    </Layout>
  );
}
