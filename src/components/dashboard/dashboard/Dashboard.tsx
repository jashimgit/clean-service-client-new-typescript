import { Outlet } from "react-router-dom";
import Layout from "../shared/Layout";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <Layout>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <Outlet />
      </main>
    </Layout>
  );
}
