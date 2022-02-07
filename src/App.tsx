import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/frontend/home/Home";
import NotFound from "./components/frontend/notfound/NotFound";
import Dashboard from "./components/dashboard/dashboard/Dashboard";
import Orders from "./components/dashboard/dashboard/Orders";
import AddServiceForm from "./components/dashboard/dashboard/AddServiceForm";
import AddAdminForm from "./components/dashboard/dashboard/AddAdminForm";
import AddReviewForm from "./components/dashboard/dashboard/AddReviewForm";
import ManageService from "./components/dashboard/dashboard/ManageService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="orders" element={<Orders />} />
          <Route path="add-service" element={<AddServiceForm />} />
          <Route path="add-admin" element={<AddAdminForm />} />
          <Route path="add-review" element={<AddReviewForm />} />
          <Route path="manage-service" element={<ManageService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
