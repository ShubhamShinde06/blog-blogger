import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Routes, Route, useLocation } from "react-router-dom";
import AddBlog from "./pages/AddBlog";
import ShowAllBlog from "./pages/ShowAllBlog";
import DashBorad from "./pages/DashBorad";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";

export const srever = "https://blog-cms-rbqp.onrender.com";

function App() {
  const location = useLocation();
  const hideComponent = ["/login"].includes(location.pathname);


  return (
    <>
      <div className="bg-black min-h-screen text-white">
        <ToastContainer />
        {!hideComponent && <NavBar />}
        <hr />
        <div className="flex w-full">
          {!hideComponent && <SideBar />}
          <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-white text-base">
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <DashBorad />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add"
                element={
                  <ProtectedRoute>
                    <AddBlog />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/list"
                element={
                  <ProtectedRoute>
                    <ShowAllBlog />
                  </ProtectedRoute>
                }
              />

              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
