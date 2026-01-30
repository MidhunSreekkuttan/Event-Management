import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <footer id="info" className="text-white">

      {/* CTA Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
      >
        <div className="text-center py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to plan your next event?
          </h2>

        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
        className="text-center relative bottom-15"
      >
        <button onClick={() => navigate('/eventList')} className="bg-pink-500 hover:bg-pink-600 transition px-10 py-3 rounded-full text-lg font-medium shadow-lg">
          Get Started
        </button>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
      >
        {/* Divider */}
        <div className="border-t p-2 border-white/20" />
      </motion.div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
        >
          <div className="border-r border-white/20">
            <h3 className="text-2xl font-bold mb-4">Eventify</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Your all-in-one solution for planning and booking unforgettable
              weddings, parties, concerts, and corporate events.
            </p>

            <div className="flex gap-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaYoutube />} />
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
        >
          <div className="border-r border-white/20">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#">Home</a></li>
              <li><a href="/eventList">Event List</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contactUs">Contact Us</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Explore Events */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
        >
          <div className="border-r border-white/20">
            <h4 className="text-xl font-semibold mb-4">Explore Events</h4>
            <ul className="space-y-3 text-white/80">
              <FooterLink text="Weddings" />
              <FooterLink text="Birthday Parties" />
              <FooterLink text="Corporate Events" />
              <FooterLink text="Concerts" />
            </ul>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
        >
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4 text-white/80">
              <p className="flex items-center gap-3">
                <FaEnvelope /> info@example.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt /> +1 123 456 7890
              </p>
            </div>

            <div className="mt-6">
              <p className="font-semibold mb-3">Create Workers Account</p>
              <button onClick={() => navigate('/workers/registration')} className="bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded-full shadow-md">
                Create Account
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
      >
        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6 px-6 flex flex-col md:flex-row items-center justify-between text-white/70 text-sm">
          <p className="relative left-160">© 2024 Eventify. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

/* Reusable Components */
const FooterLink = ({ text }) => (
  <li className="hover:text-white cursor-pointer transition">{text}</li>
);

const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition">
    {icon}
  </div>
);

export default Footer;
