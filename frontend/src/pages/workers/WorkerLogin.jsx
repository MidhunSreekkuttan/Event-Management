import { useContext, useEffect, useState } from "react";
import { BackendContex } from "../../context/ConnectBackendContex";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../components/Loading";
import { workersContext } from "../../context/WorkersContext";

const Login = () => {

  const { backendUrl } = useContext(BackendContex);
  const { getUserData, authLoading, setIsLoggedIn } = useContext(workersContext)

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  // eslint-disable-next-line react-hooks/immutability
  axios.defaults.withCredentials = true;

  const setVerifyOtp = async () => {

    try {

      const { data } = await axios.post(backendUrl + "/api/workers/sendVerifyOtp")

      if (data.success) {
        navigate("/workers/otp")
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)

      const { data } = await axios.post(backendUrl + "/api/workers/login", { email, password })

      if (data.success) {
        if (!data.isAccountVerified) {
          await setVerifyOtp();
        } else {
          setIsLoggedIn(true)
          await getUserData()
          toast.success(data.message);
          navigate("/workers/index");
        }
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    finally {
      setLoading(false)
    }
  }

  return (

    <>

      {(loading || authLoading) && <Loader />}

      <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#0f1b3d] to-[#070b1f]">
        <div className="w-full max-w-md rounded-2xl bg-[#0b1437]/90 p-8 shadow-2xl border border-[#1c2b6a]">

          <h1 className="text-2xl font-semibold text-center text-white">
            Welcome Back
          </h1>
          <p className="text-center text-sm text-indigo-300 mt-1">
            Enter your credentials to access your dashboard
          </p>

          {/* Google Button */}
          <button className="mt-6 w-full flex items-center justify-center gap-3 rounded-lg border border-[#1c2b6a] bg-[#0b1437] py-2.5 text-white hover:bg-[#101d4f] transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-[#2a3b8f]" />
            <span className="px-3 text-xs text-indigo-300">
              OR CONTINUE WITH
            </span>
            <div className="flex-1 h-px bg-[#2a3b8f]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-white">Email</label>
              <input
                type="email"
                placeholder="worker@example.com"
                onChange={e => setEmail(e.target.value)}
                value={email}
                required
                className="mt-1 w-full rounded-lg border border-[#1c2b6a] bg-[#0b1437] px-4 py-2.5 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-white">Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                required
                className="mt-1 w-full rounded-lg border border-[#1c2b6a] bg-[#0b1437] px-4 py-2.5 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-500 py-2.5 text-white font-medium hover:bg-blue-600 transition"
            >
              → Sign In
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-indigo-300">
            Don&apos;t have an account?{" "}
            <a href="/workers/signup" className="text-blue-400 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

    </>

  );
};

export default Login;