import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaRegCopyright,
} from "react-icons/fa";
import footerLogo from "../assets/footerLogo.svg";

const professionalLinks = [
  { title: "Promoter", url: "https://partners.reparv.in" },
  { title: "Project Partner", url: "https://partners.reparv.in" },
  { title: "Sales Partner", url: "https://partners.reparv.in" },
  { title: "Territory Partner", url: "https://partners.reparv.in" },
];

const downloadLinks = [
  {
    title: "Customer",
    url: "https://play.google.com/store/apps/details?id=com.reparvcustomer",
  },
  {
    title: "Project Partner",
    url: "https://play.google.com/store/apps/details?id=com.reparvprojectpartner",
  },
  { title: "Sales Partner", url: "#" },
  { title: "Territory Partner", url: "#" },
];

const socials = [
  { icon: <FaFacebookF size={16} />, url: "https://www.facebook.com/reparv/" },
  {
    icon: <FaInstagram size={16} />,
    url: "https://www.instagram.com/reparv_/",
  },
  {
    icon: <FaLinkedin size={16} />,
    url: "https://www.linkedin.com/company/105339179",
  },
  { icon: <FaYoutube size={16} />, url: "https://www.youtube.com/@reparv" },
];

export default function Footer({ footerRef }) {
  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#6C2FD9] font-[Manrope,sans-serif]"
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-8">
        <div className="mb-8 sm:mb-10">
          <Link to="/">
            <img
              src={footerLogo}
              alt="Reparv"
              className="w-[130px] sm:w-[150px]"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 lg:gap-6 text-white mb-10 sm:mb-12">
          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">
              Company
            </h3>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              {[
                { t: "Home", u: "/" },
                { t: "Blog", u: "/blogs" },
                { t: "About Us", u: "/about-us" },
                { t: "Contact Us", u: "/contact-us" },
              ].map((l) => (
                <Link
                  key={l.t}
                  to={l.u}
                  className="text-xs sm:text-sm lg:text-base text-white/75 hover:text-white hover:underline transition"
                >
                  {l.t}
                </Link>
              ))}
            </div>
          </div>

          {/* Become a Professional */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">
              Become a Professional
            </h3>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              {professionalLinks.map((l) => (
                <a
                  key={l.title}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm lg:text-base text-white/75 hover:text-white hover:underline transition"
                >
                  {l.title}
                </a>
              ))}
            </div>
          </div>

          {/* Download Link */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">
              Download Link
            </h3>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              {downloadLinks.map((l) => (
                <a
                  key={l.title}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm lg:text-base text-white/75 hover:text-white hover:underline transition"
                >
                  {l.title}
                </a>
              ))}
            </div>
          </div>

          {/* Social Link */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">
              Social Link
            </h3>
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-white text-[#6C2FD9] flex items-center justify-center hover:scale-105 transition shrink-0"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-0 h-px bg-white/20 mb-5 sm:mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 lg:gap-8 text-white/70 text-[11px] sm:text-xs lg:text-sm flex-wrap text-center">
          <span>
            © {new Date().getFullYear()} Reparv.in All rights reserved.
          </span>
          <Link
            to="/cancellation-policy"
            className="hover:text-white hover:underline transition"
          >
            Cancellation Policy
          </Link>
          <Link
            to="/terms-and-conditions"
            className="hover:text-white hover:underline transition"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-white hover:underline transition"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
