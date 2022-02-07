import Layout from "../layout/Layout";
import Header from "../Header";
import Features from "../features/Features";
import Services from "../services/Services";
import PricePlans from "../priceplans/PricePlans";
import Review from "../review/Review";
import TopFooter from "../shared/TopFooter";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Features />
      <Services />
      <PricePlans />
      <Review />
      <TopFooter />
    </Layout>
  );
}
