"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import NavabrMenu from "@/components/ui/navabr_menu";
import AuthSwiper from "@/components/ui/auth_swiper";
import images from "@/helpers/import_images_home";

// Define the types for form data and errors
type FormData = {
  email: string;
  password: string;
};

type FormErrors = {
  email?: string;
  password?: string;
};

export default function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    if (!formData.email) tempErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      tempErrors.email = "Invalid email format.";
    if (!formData.password || formData.password.length < 8)
      tempErrors.password = "Password must be at least 8 characters.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await axios.post("/api/login", formData); // Update to login API

      // Assuming your backend responds with a token, handle it here
      const { token } = response.data;

      // Store the token (you can use localStorage or context/state)
      localStorage.setItem("token", token);
      // Redirect or perform any other actions after login
      router.push("/");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        // Check if the error is an Axios error and has a response
        setSubmitError(error.response.data.message || "An error occurred.");
      } else {
        // Handle any other type of error
        setSubmitError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const SingUpWithGoogle = (e: FormEvent) => {
    e.preventDefault();
    signIn("google");
  };
  return (
    <div className="bg-[#F9F8F5] h-screen">
      <div className="max-w-[1440px] mx-auto flex justify-between">
        <div className="lg:w-[50%] mx-auto">
          {/* Navbar mobile */}
          <nav className="flex items-center justify-between py-4 font-['Inter'] lg:hidden">
            <div className="flex items-center gap-12">
              <Link href="/">
                <Image src={images.site_logo} alt="Interview Faang" />
              </Link>
            </div>

            <button
              className="lg:hidden hover:opacity-55 active:opacity-65 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image src={images.nav_menu_button} alt="Menu icon" />
            </button>

            <NavabrMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </nav>
          {/* Navbar mobile */}
          <div className="pt-8 pb-[28px] px-[32px] max-lg:hidden">
            <Link href="/">
              <Image src={images.site_logo} alt="Interview Faang" />
            </Link>
          </div>

          <form className="w-[480px] mx-auto mt-[140px] max-sm:px-2">
            <h2 className="text-[30px] font-semibold mb-3 leading-[38px] max-lg:text-center">
              Log in
            </h2>
            <p className="text-[#475467] leading-[24px] mb-[32px] max-lg:text-center">
              Welcome back! Please enter your details.
            </p>

            <div className="mb-[32px]">
              <div className="flex flex-col gap-y-[6px] mb-[6px]">
                <label htmlFor="email">Email*</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-[#D0D5DD] border-[1px] placeholder:text-[#667085] rounded-[9px] py-[10px] px-[14px]"
                  type="email"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col mb-[24px]">
                <label htmlFor="password">Password*</label>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border-[#D0D5DD] border-[1px] placeholder:text-[#667085] rounded-[9px] py-[10px] px-[14px]"
                  type="password"
                  placeholder="Create a password"
                />
                {errors.password && (
                  <span className="text-red-500">{errors.password}</span>
                )}
              </div>
              <div className="flex justify-between my-6">
                <label
                  htmlFor="hs-success-checkbox"
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    className="cursor-pointer shrink-0 mt-0.5 border-gray-200 rounded text-teal-600 focus:ring-teal-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-teal-500 dark:checked:border-teal-500 dark:focus:ring-offset-gray-800"
                    id="hs-success-checkbox"
                  />
                  <span className="text-sm text-[#344054] font-medium">
                    Remember me
                  </span>
                </label>

                <Link
                  href={"/forgot_password"}
                  className="text-sm text-[#05A105] font-semibold"
                >
                  Forgot password
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-[#05A105] text-[#fff] font-semibold font-['Inter'] text-center rounded-[32px] py-[10px] mb-[16px] hover:opacity-65 active:opacity-55 transition-all duration-300"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

              <button
                type="button"
                onClick={SingUpWithGoogle}
                className="w-full bg-[#fff] text-[#344054] border-[#D0D5DD] border-[1px] flex items-center justify-center gap-[12px] font-semibold font-['Inter'] text-center rounded-[32px] py-[10px] hover:opacity-65 active:opacity-55 transition-all duration-300"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2343_1619)">
                    <path
                      d="M24.2663 12.2763C24.2663 11.4605 24.2001 10.6404 24.059 9.83789H12.7402V14.4589H19.222C18.953 15.9492 18.0888 17.2676 16.8233 18.1054V21.1037H20.6903C22.9611 19.0137 24.2663 15.9272 24.2663 12.2763Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.7401 24.0008C15.9766 24.0008 18.7059 22.9382 20.6945 21.1039L16.8276 18.1055C15.7517 18.8375 14.3627 19.252 12.7445 19.252C9.61388 19.252 6.95946 17.1399 6.00705 14.3003H2.0166V17.3912C4.05371 21.4434 8.2029 24.0008 12.7401 24.0008Z"
                      fill="#34A853"
                    />
                    <path
                      d="M6.00277 14.3002C5.50011 12.8099 5.50011 11.196 6.00277 9.70569V6.61475H2.01674C0.314734 10.0055 0.314734 14.0004 2.01674 17.3912L6.00277 14.3002Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M12.7401 4.74966C14.4509 4.7232 16.1044 5.36697 17.3434 6.54867L20.7695 3.12262C18.6001 1.0855 15.7208 -0.034466 12.7401 0.000808666C8.2029 0.000808666 4.05371 2.55822 2.0166 6.61481L6.00264 9.70575C6.95064 6.86173 9.60947 4.74966 12.7401 4.74966Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2343_1619">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Sign up with Google
              </button>

              {submitError && <p className="text-red-500">{submitError}</p>}
            </div>
            <div className="w-full text-center">
              <span className="text-[#475467] text-[14px] ">
                Don’t have an account?{" "}
                <Link href={"/register"} className="text-[#05A105]">
                  Log in
                </Link>
              </span>
            </div>
          </form>

          <div className="flex justify-between px-[32px] mt-[164px]">
            <span>© Interviewpro 2024</span>
            <span className="flex items-center gap-[8px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6668 3.99984C14.6668 3.2665 14.0668 2.6665 13.3335 2.6665H2.66683C1.9335 2.6665 1.3335 3.2665 1.3335 3.99984M14.6668 3.99984V11.9998C14.6668 12.7332 14.0668 13.3332 13.3335 13.3332H2.66683C1.9335 13.3332 1.3335 12.7332 1.3335 11.9998V3.99984M14.6668 3.99984L8.00016 8.6665L1.3335 3.99984"
                  stroke="#667085"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link href={"email:help@interviewpro.com"}>
                help@interviewpro.com
              </Link>
            </span>
          </div>
        </div>

        <div
          className="h-[960px] w-[50%] rounded-tl-[60px] rounded-bl-[60px] flex items-end max-lg:hidden"
          style={{
            backgroundImage: `url(${images.auth_sitebar_image.src})`,
            backgroundSize: "cover",
            backgroundPositionY: "-50px",
          }}
        >
          <AuthSwiper />
        </div>
      </div>
    </div>
  );
}
