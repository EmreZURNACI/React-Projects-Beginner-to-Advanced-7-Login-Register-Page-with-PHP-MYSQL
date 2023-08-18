import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import Application from './Application'
function App() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      {
        (window.location.pathname === "/" ||
          window.location.pathname === "/login" ||
          window.location.pathname === "/register") &&
        (<div className="checkbox-wrapper-41 z-20 absolute top-20 flex items-center justify-center gap-4 bg-gray-300 py-4 px-2 rounded-md">
          <span className="text-2xl font-bold font-mono">Login</span>
          <input type="checkbox"
            id="auth"
            name="auth"
            checked={window.location.pathname === "/register" ? "checked" : ""}
            onChange={() => {
              if (window.location.pathname === "/" || window.location.pathname === "/login") {
                (navigate("/register"))
              }
              else {
                (navigate("/"))
              }
            }} />
          <label htmlFor="auth" className="toggle"><span></span></label><span className="text-2xl font-bold font-mono">Register</span>
        </div>)
      }
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="Application" element={<Application />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
export default App;
