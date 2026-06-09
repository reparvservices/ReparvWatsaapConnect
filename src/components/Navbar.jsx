import React, { useState } from "react";
import reparvLogo from "../assets/reparvLogo.svg";
import { NavLink, Link, useLocation } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiMapPinAreaBold } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import ButtonWrap from "../assets/home/ButtonBack.svg";
import UserDropdown from "./UserDropdown";

function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavLinkClass = (path) =>
    location.pathname === path
      ? "font-bold text-[#5B21F5]"
      : "font-medium text-gray-800 hover:text-[#5B21F5]";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/", label: "Properties" },
    { to: "/", label: "About Us" },
    { to: "/", label: "Contact Us" },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="navbar z-30 fixed w-full h-15 sm:h-22 flex items-center justify-center bg-white shadow-[0px_2px_10px_0px_#00000026] font-[Poppins]">
        <div className="w-full max-w-[1440px] h-15 sm:h-22 px-8 lg:px-20 flex gap-5 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-end">
            <Link to="/">
              <img
                src={reparvLogo}
                alt="reparv logo"
                className="w-[90px] md:w-[120px] lg:w-[135px]"
              />
            </Link>
          </div>

          {/* City Selector */}
          <div className="selectCity min-w-[50px] max-w-[210px] relative py-2 rounded-lg px-4 cursor-pointer">
            <div className="flex lg:gap-1 items-center justify-center text-xs sm:text-base font-bold text-[#5E23DC] lg:p-1">
              <PiMapPinAreaBold className="w-4 h-4 sm:w-6 sm:h-6 mr-1" />
              <span className="block whitespace-nowrap font-semibold text-[#5E23DC]">
                Select City
              </span>
              <RiArrowDropDownLine className="w-5 h-5 sm:w-6 sm:h-6 text-[#5E23DC]" />
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="menu flex items-center justify-between md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="cursor-pointer hover:text-[#5B21F5] active:scale-95 transition-all"
              aria-label="Open menu"
            >
              <IoMdMenu className="w-7 h-7 font-semibold" />
            </button>
          </div>

          {/* Desktop Navbar */}
          <div className="navlink hidden md:flex items-center justify-start gap-5 lg:gap-6 xl:gap-9 2xl:gap-12 text-[15px] font-medium xl:text-base leading-[30px] tracking-[0.5px] lg:tracking-[0.8px]">
            <NavLink to="/" className={getNavLinkClass("/")}>
              Home
            </NavLink>
            <NavLink
              to="/"
              className={`${getNavLinkClass("/properties")} flex gap-1`}
            >
              Properties
            </NavLink>
            <NavLink
              to="/"
              className={`${getNavLinkClass("/about-us")} hidden xl:flex gap-1`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/"
              className={`${getNavLinkClass("/contact-us")} hidden xl:flex gap-1`}
            >
              Contact Us
            </NavLink>

            {/* Download Button */}
            <div className="relative min-w-45 flex items-center justify-center p-4">
              <img src={ButtonWrap} alt="Button" className="absolute w-full" />
              <div
                onClick={() => window.open("", "_blank")}
                className="px-7 py-3.5 z-10 flex items-center justify-center cursor-pointer text-[15px] font-bold text-white bg-[#8A38F5] rounded-full hover:opacity-90 transition-all duration-150 active:scale-95 tracking-wide"
              >
                Download App
              </div>
            </div>
            <UserDropdown />
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU DRAWER ─────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img src={reparvLogo} alt="reparv logo" className="w-24" />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 transition-colors active:scale-95"
                  aria-label="Close menu"
                >
                  <IoMdClose className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* City Selector in drawer */}
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2 text-[#5E23DC] font-semibold text-sm cursor-pointer">
                  <PiMapPinAreaBold className="w-5 h-5" />
                  <span>Select City</span>
                  <RiArrowDropDownLine className="w-5 h-5 ml-auto" />
                </div>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col px-4 py-4 gap-1 flex-1">
                {navLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-150 ${
                        isActive
                          ? "bg-[#5B21F5]/8 text-[#5B21F5] font-bold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#5B21F5]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-3 transition-all ${
                            isActive ? "bg-[#5B21F5]" : "bg-gray-300"
                          }`}
                        />
                        {label}
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* Download App CTA */}
              <div className="px-6 py-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    window.open("", "_blank");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3.5 bg-[#8A38F5] text-white font-bold text-[15px] rounded-full hover:opacity-90 active:scale-95 transition-all duration-150 tracking-wide shadow-lg shadow-[#8A38F5]/30"
                >
                  Download App
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Available on Play Store & App Store
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
