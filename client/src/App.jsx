import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import {
  Login,
  Signup,
  InstructorDashboard,
  Classes,
  Exams,
  Attendance,
  Batches,
  Assignments,
  Home,
  CreateAttendance,
  CreateAssignment,
} from "./Pages/index.ts";
import { Layout } from "./Components/Layout/index.ts";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/instructor/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/resulte" element={<Classes />} />
                  <Route path="/notice" element={<Exams />} />
                  <Route path="/attendance" element={<Attendance />} />
                  <Route path="/batches" element={<Batches />} />
                  <Route path="/assignments" element={<Assignments />} />
                  <Route path="/create-attendance" element={<CreateAttendance />} />
                  <Route path="/create-assignment" element={<CreateAssignment />} />
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
