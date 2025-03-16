import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eslLogo from "../assets/esl-logo.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#09BB92] to-[#1E97BE] p-4 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-white flex items-center gap-2 hover:opacity-80"
      >
        <FaArrowLeft size={24} />
        <span className="text-lg font-medium">Home</span>
      </button>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
        {/* Logo */}
        <img src={eslLogo} alt="ESL Logo" className="h-12 mx-auto mb-4" />

        <h2 className="text-2xl font-bold text-gray-700 mb-6">Welcome Back</h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09BB92]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09BB92]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-[#09BB92] text-white p-3 rounded-lg font-medium hover:bg-[#1E97BE] transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Bottom Links */}
        <div className="mt-4 text-sm">
          <p className="text-gray-500 cursor-pointer hover:underline mt-2">
            Forgot password?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
