import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

const Footer = ({ whiteBg = false }) => {

  const location = useLocation()
  const isHome = location.pathname === '/'

  const navigate = useNavigate();

  return (
    <footer id="info" className={`${whiteBg ? 'bg-[#F6F0FD] text-black' : ''}`}>

      {isHome && (
        <>
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
            <button onClick={() => navigate('/eventList')} className="bg-pink-500 hover:bg-pink-600 transition px-10 py-3 rounded-full text-lg font-medium shadow-lg text-white">
              Get Started
            </button>
          </motion.div>
        </>
      )}

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
      >
        {/* Divider */}
        <div className={`border-t p-2 ${whiteBg ? 'border-black/10' : 'border-white/20'}`} />
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
          <div className={`${whiteBg ? 'border-r border-black/20' : 'border-r border-white/20'}`}>
            <h3 className="text-2xl font-bold mb-4">Event Management</h3>
            <p className={`leading-relaxed mb-6 ${whiteBg ? 'text-black' : 'text-white/80'}`}>
              Your all-in-one solution for planning and booking unforgettable
              weddings, parties, concerts, and corporate events.
            </p>

          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
        >
          <div className={`${whiteBg ? 'border-r border-black/20' : 'border-r border-white/20'}`}>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className={`space-y-3 ${whiteBg ? "text-black" : 'text-white/80'}`}>
              <li className="hover:active:scale-110"><a href="#">Scroll UP</a></li>
              <li className="hover:active:scale-110"><Link to="/eventList">Event List</Link></li>
              <li className="hover:active:scale-110"><Link to="/about">About Us</Link></li>
              <li className="hover:active:scale-110"><Link to="/contactUs">Contact Us</Link></li>
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
          <div className={`${whiteBg ? 'border-r border-black/20' : 'border-r border-white/20'}`}>
            <h4 className="text-xl font-semibold mb-4">Explore Events</h4>
            <ul className={`space-y-3 ${whiteBg ? "text-black" : 'text-white/80'}`}>
              <li className="hover:active:scale-110"><Link to="/eventList#wedding">Weddings</Link></li>
              <li className="hover:active:scale-110"><Link to="/eventList#birthday">Birthday Parties</Link></li>
              <li className="hover:active:scale-110"><Link to="/eventList#corporate">Corporate Events</Link></li>
              <li className="hover:active:scale-110"><Link to="/eventList#concerts">Concerts</Link></li>
              <li className="hover:active:scale-110"><Link to="/eventList#cultural">Cultural Programs</Link></li>
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
            <div className={`space-y-3 ${whiteBg ? "text-black" : 'text-white/80'}`}>
              <p className="flex items-center gap-3">
                <FaEnvelope /> eventmanagement@example.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt /> 0471-226937
              </p>
            </div>

            <div className="flex">
              <div className="mt-6">
                <p className="font-semibold mb-3">Create Workers Account</p>
                <button onClick={() => navigate('/workers/login')} className={`bg-purple-600 hover:bg-purple-700 
                transition px-6 py-2 rounded-full shadow-md ${whiteBg ? 'text-white' : ''}`}>
                  Create Account
                </button>
              </div>
              <div className="mt-15">
                <button onClick={() => navigate('/event-management/login')} className={`bg-purple-600 hover:bg-purple-700 
                transition px-6 py-2 rounded-full shadow-md ${whiteBg ? ' hidden' : ''}`}>
                  Join us
                </button>
              </div>
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
        <div className={`border-t py-6 px-6 flex flex-col md:flex-row items-center justify-between text-sm
            ${whiteBg ? 'border-black/10 text-black' : 'border-white/20 text-white/70'}`}>
          <p className="relative left-160">© 2026 Event Management. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="/policyAndPrivacy" className="hover:text-white">Privacy Policy</a>
            <span>•</span>
            <a href="/TermsandConditions" className="hover:text-white">Terms and Conditions</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition">
    {icon}
  </div>
);

export default React.memo(Footer);
