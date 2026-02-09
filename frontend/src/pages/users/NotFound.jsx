import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.15)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>

      {/* Neon Orbit Rings */}
      <div className="absolute w-[500px] h-[500px] border border-indigo-500/30 rounded-full animate-spinSlow"></div>
      <div className="absolute w-[350px] h-[350px] border border-purple-500/30 rounded-full animate-spinSlow"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-14 py-16 text-center shadow-[0_0_80px_rgba(99,102,241,0.35)]"
      >
        {/* Glitch 404 */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 animate-glitch">
          404
        </h1>

        <p className="mt-4 text-xl text-gray-300 tracking-wide">
          Signal Lost · Page Not Found
        </p>

        <p className="mt-2 text-gray-400 max-w-md mx-auto">
          You’ve entered an uncharted zone of the system 🌌
        </p>

        <Link
          to="/"
          className="inline-block mt-8 px-10 py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r from-indigo-500 to-purple-600
          hover:shadow-[0_0_30px_rgba(139,92,246,0.9)]
          hover:scale-110 transition-all duration-300"
        >
          Return to Base
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
