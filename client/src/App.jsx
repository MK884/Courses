import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import {
  Login,
  Signup,
  AdminDashboard,
  Classes,
  Exams,
  Attandance,
  Batches,
  Assignments,
  Home,
} from "./Pages/index.ts";
import { Layout } from "./Components/Layout/index.ts";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/admin/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/dashboard" element={<AdminDashboard />} />
                  <Route path="/classes" element={<Classes />} />
                  <Route path="/exams" element={<Exams />} />
                  <Route path="/attandance" element={<Attandance />} />
                  <Route path="/batches" element={<Batches />} />
                  <Route path="/assignments" element={<Assignments />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
