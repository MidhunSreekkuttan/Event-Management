import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';
import { BackendContex } from "../../context/ConnectBackendContex";

const ResetPassword = () => {
    const navigate = useNavigate();
    const { backendUrl } = useContext(BackendContex);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1); // 1 = Email, 2 = OTP & Password

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            axios.defaults.withCredentials = true;
            const { data } = await axios.post(backendUrl + '/api/workers/resentOtp', { email });
            if (data.success) {
                toast.success(data.message);
                setStep(2);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            axios.defaults.withCredentials = true;
            const { data } = await axios.put(backendUrl + '/api/workers/verifyResentOtp', { email, otp, newPassword });
            if (data.success) {
                toast.success(data.message);
                navigate('/workers/login');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#0f1b3d] to-[#070b1f]">
                <div className="w-full max-w-md rounded-2xl bg-[#0b1437]/90 p-8 shadow-2xl border border-[#1c2b6a]">
                    <h1 className="text-2xl font-semibold text-center text-white">
                        Reset Password
                    </h1>

                    {step === 1 ? (
                        <>
                            <p className="text-center text-sm text-indigo-300 mt-2 mb-6">
                                Enter your email to receive a password reset link
                            </p>
                            <form onSubmit={handleSendOtp} className="space-y-4">
                                <div>
                                    <label className="text-sm text-white">Email</label>
                                    <input
                                        type="email"
                                        placeholder="worker@example.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                        className="mt-1 w-full rounded-lg border border-[#1c2b6a] bg-[#0b1437] px-4 py-2.5 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <button
                                    disabled={loading}
                                    type="submit"
                                    className={`w-full flex items-center justify-center gap-2 rounded-lg py-2.5 text-white font-medium transition ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                                        }`}
                                >
                                    {loading ? "Sending..." : "→ Send Reset OTP"}
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            <p className="text-center text-sm text-indigo-300 mt-2 mb-6">
                                Enter the OTP sent to your email and your new password
                            </p>
                            <form onSubmit={handleResetPassword} className="space-y-4">
                                <input type="email" value={email} autoComplete="username" hidden readOnly />
                                <div>
                                    <label className="text-sm text-white">OTP Code</label>
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        onChange={(e) => setOtp(e.target.value)}
                                        value={otp}
                                        required
                                        autoComplete="one-time-code"
                                        className="mt-1 w-full rounded-lg border border-[#1c2b6a] bg-[#0b1437] px-4 py-2.5 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-white">New Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter new password"
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        value={newPassword}
                                        required
                                        autoComplete="new-password"
                                        className="mt-1 w-full rounded-lg border border-[#1c2b6a] bg-[#0b1437] px-4 py-2.5 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <button
                                    disabled={loading}
                                    type="submit"
                                    className={`w-full flex items-center justify-center gap-2 rounded-lg py-2.5 text-white font-medium transition ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                                        }`}
                                >
                                    {loading ? "Resetting..." : "→ Reset Password"}
                                </button>
                            </form>
                        </>
                    )}

                    <p className="mt-5 text-center text-sm text-indigo-300">
                        Remembered your password?{" "}
                        <a href="/workers/login" className="text-blue-400 hover:underline">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;