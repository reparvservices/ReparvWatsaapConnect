import { useState, useRef, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import UserIcon from "../assets/user/UserIcon.svg";

function UserDropdown() {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <div
        onClick={() => setOpen(!open)}
        className="w-[95px] h-[45px] flex items-center justify-center gap-2 border border-[#5E23DC] rounded-full cursor-pointer active:scale-95"
      >
        <img
          src={UserIcon}
          alt="User Icon"
          className="w-7 h-7 pointer-events-none"
        />

        <IoMdMenu className="w-7 h-7 text-[#5E23DC]" />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 p-4 bg-white rounded-xl shadow-[1px_4px_12px_4px_#00000026] overflow-hidden min-w-[200px]">
          <button
            onClick={() => {
              navigate("/dashboard");
              setOpen(false);
            }}
            className="w-full flex items-center justify-start gap-2 text-left px-4 py-3 text-base font-bold rounded-lg text-[#7c17ff] hover:bg-[#F4EDFF]"
          >
            <MdDashboard className="w-6 h-6" />

            <span>Dashboard</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
