import { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/frontend/home/Home";
import NotFound from "./components/frontend/notfound/NotFound";
import Dashboard from "./components/dashboard/dashboard/Dashboard";
import Orders from "./components/dashboard/dashboard/Orders";
import AddServiceForm from "./components/dashboard/dashboard/AddServiceForm";
import AddAdminForm from "./components/dashboard/dashboard/AddAdminForm";
import AddReviewForm from "./components/dashboard/dashboard/AddReviewForm";
import ManageService from "./components/dashboard/dashboard/ManageService";
import Index from "./components/dashboard/dashboard/Index";
import Reviews from "./components/dashboard/dashboard/Reviews";
import PageLoader from "./components/Loader/PageLoader";
import Login from "./components/frontend/login/Login";

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Index />} />
            <Route path="orders" element={<Orders />} />
            <Route path="add-service" element={<AddServiceForm />} />
            <Route path="add-admin" element={<AddAdminForm />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="services" element={<ManageService />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
