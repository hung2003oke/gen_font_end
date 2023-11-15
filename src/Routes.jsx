import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Tinmoi = React.lazy(() => import("pages/Tinmoi"));
const Dichvu = React.lazy(() => import("pages/Dichvu"));
const Doitackhachhang = React.lazy(() => import("pages/Doitackhachhang"));
const Vechungtoi = React.lazy(() => import("pages/Vechungtoi"));
const Cohoinghenghiep = React.lazy(() => import("pages/Cohoinghenghiep"));
const TinmoiOne = React.lazy(() => import("pages/TinmoiOne"));
const DichvuOne = React.lazy(() => import("pages/DichvuOne"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dichvuone" element={<DichvuOne />} />
          <Route path="/tinmoione" element={<TinmoiOne />} />
          <Route path="/cohoinghenghiep" element={<Cohoinghenghiep />} />
          <Route path="/vechungtoi" element={<Vechungtoi />} />
          <Route path="/doitackhachhang" element={<Doitackhachhang />} />
          <Route path="/dichvu" element={<Dichvu />} />
          <Route path="/tinmoi" element={<Tinmoi />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
