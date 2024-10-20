import images from "@/helpers/import_images_home";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface NavabrMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function NavabrMenu({ isOpen, setIsOpen }: NavabrMenuProps) {
  return (
    <div
      className={`md:hidden fixed top-0 w-full h-[100vh] px-4 bg-[#fff] transition-all duration-300 z-50 ${isOpen ? "left-0" : "-left-full"}`}
    >
      <nav className="flex items-center justify-between py-4 font-['Inter'] border-b-[1px] border-[#F2F4F7]">
        <Link href="/">
          <Image src={images.site_logo} alt="Interview Faang" />
        </Link>
        <button
          className="md:hidden hover:opacity-55 active:opacity-65 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 14L14 26M14 14L26 26"
              stroke="#667085"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
      <div className="flex items-center gap-12 mt-6 px-2">
        <ul className="flex flex-col gap-6 font-['Inter']">
          <li>
            <Link
              href="#"
              className="font-semibold text-[#131319] hover:opacity-65 active:opacity-55 transition-all duration-300"
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-semibold text-[#131319] hover:opacity-65 active:opacity-55 transition-all duration-300"
            >
              Membership
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-semibold text-[#131319] hover:opacity-65 active:opacity-55 transition-all duration-300"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-semibold text-[#131319] hover:opacity-65 active:opacity-55 transition-all duration-300"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col  items-center gap-6 px-2">
        <Link
          href="/login"
          className="text-[#131319] w-full text-center font-medium hover:opacity-55 active:hover:opacity-65 transition-all duration-300"
        >
          Log in
        </Link>
        <Link
          href="#"
          className="bg-[#05A105] w-full text-center text-[#fff] font-medium rounded-[9999px] py-[10px] px-[18px] hover:opacity-55 active:hover:opacity-65 transition-all duration-300"
        >
          Apply now
        </Link>
      </div>
    </div>
  );
}
