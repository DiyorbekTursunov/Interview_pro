"use client";

import Image from "next/image";
import Link from "next/link";
import images from "@/helpers/import_images_home";
import Marquee from "react-fast-marquee";
import { MarqueeDemo } from "@/components/ui/marquee_card";
import FaqPage from "@/components/ui/faq_page";
import NavabrMenu from "@/components/ui/navabr_menu";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading) {
    console.log("Session is loading...");
  } else if (!session) {
    console.log("No active session found. User is not logged in.");
  } else {
    console.log("Session:", session);
  }

  return (
    <>
      <main className="sm:bg-[#F9F8F5]">
        {/* Header Section */}
        <header className="max-w-[1320px] mx-auto xl:px-0 px-4 sm:pb-[45px] pb-[32px]">
          <nav className="flex items-center justify-between py-4 font-['Inter']">
            <div className="flex items-center gap-12">
              <Link href="/">
                <Image src={images.site_logo} alt="Interview Faang" />
              </Link>
              <ul className="md:flex hidden gap-6 font-['Inter']">
                <li>
                  <Link
                    href="#"
                    className="font-medium text-[#131319] hover:opacity-65 active:opacity-55 transition-all duration-300"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-medium text-[#131319] hover:opacity-65 active:opacity-55 transition-all duration-300"
                  >
                    Membership
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-medium text-[#131319] hover:opacity-65 active:opacity-55 transition-all duration-300"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-medium text-[#131319] hover:opacity-65 active:opacity-55 transition-all duration-300"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:flex hidden items-center gap-6">
              {loading ? (
                <p>Loading...</p>
              ) : session ? (
                // Display username if logged in
                <p className="font-medium text-[#131319]">
                  {session.user.name}
                </p>
              ) : (
                // Display login link if not logged in
                <Link
                  href="/login"
                  className="font-medium text-[#131319] hover:opacity-65 active:opacity-55 transition-all duration-300"
                >
                  Login
                </Link>
              )}
              <Link
                href="#"
                className="bg-[#05A105] text-[#fff] font-medium rounded-[9999px] py-[10px] px-[18px] hover:opacity-55 active:hover:opacity-65 transition-all duration-300"
              >
                Apply now
              </Link>
            </div>
            <button
              className="md:hidden hover:opacity-55 active:opacity-65 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image src={images.nav_menu_button} alt="Menu icon" />
            </button>

            <NavabrMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </nav>

          {/* Hero Section */}
          <div className="sm:pt-[59px] pt-[48px] max-w-[806px] flex flex-col items-center mx-auto">
            <h1 className="md:text-[64px] sm:text-5xl text-[28px] tracking-[-2px] font-medium sm:leading-[62px] leading-[32.81px] text-center sm:mb-6 mb-3">
              Where software engineering{" "}
              <span className="text-[#05A105]">careers</span> are built
            </h1>
            <div className="sm:max-w-[712px] max-w-[308px]">
              <p className="text-center text-[#4F4F4F] sm:text-lg text-xs sm:leading-[25px] leading-[14.06px] sm:mb-6 mb-3">
                Prepare for technical interviews with industry professionals
                from top FAANG companies. Gain the confidence and skills you
                need to land your dream job.
              </p>
            </div>
            <div className="flex sm:flex-row flex-col max-sm:items-center font-['Inter'] gap-[10px]">
              <Link
                href="#"
                className="bg-[#05A105] text-[#fff] max-w-[145px] font-medium rounded-[9999px] sm:py-[10px] sm:px-8 py-[7.5px] px-6 max-sm:text-xs hover:opacity-55 active:hover:opacity-65 transition-all duration-300"
              >
                Apply now
              </Link>
              <Link
                href="#"
                className="border-[1px] border-[#000000] text-[#000] font-medium rounded-[9999px] sm:py-[10px] sm:px-8 py-[7.5px] px-6 max-sm:text-xs hover:opacity-55 active:hover:opacity-65 transition-all duration-300"
              >
                Watch demo
              </Link>
            </div>
          </div>
        </header>

        {/* Section with Images */}
        <section className="section-with-images sm:pb-[85px] max-sm:mb-[48px] relative">
          <div className="max-w-[1320px] mx-auto sm:px-4 px-7 z-10 relative">
            {/* First Image (Mobile) */}
            <div
              className="w-full sm:h-[287px] h-[187px] md:hidden flex items-end sm:p-[19px] px-[15px] py-[7px] rounded-[24px] mb-3"
              style={{
                backgroundImage: `url(${images.hero_card_img.src})`,
                backgroundSize: "cover",
              }}
            >
              <div className="sm:max-w-[376px] max-w-[237px] bg-[#FFFFFFE5] rounded-[12px] sm:px-6 sm:py-3 px-[15px] py-[8px]">
                <p className="text-[#525252] sm:text-sm text-[8.83px] font-medium sm:leading-[21px] leading-[13.25px]">
                  World-class mentorship from senior FAANG engineers for
                  students to land their next dream role
                </p>
              </div>
            </div>

            {/* Grid Section */}
            <div className="md:flex grid grid-cols-2 justify-between sm:gap-4 gap-2">
              {/* Hero Image */}
              <Image
                src={images.hero_grid_card_img}
                alt="Hero image"
                className="md:max-w-[349px] w-full max-sm:h-[188px] max-md:order-2"
              />

              {/* Info Card */}
              <div
                className="md:max-w-[328px] w-full max-sm:h-[188px] bg-[#073630] flex flex-col justify-between sm:rounded-[24px] rounded-[12.29px] sm:p-6 p-3 col-span-1 lg:flex-shrink-0 max-md:order-1"
                style={{
                  backgroundImage: `url(${images.hero_card_vector.src})`,
                  backgroundSize: "cover",
                }}
              >
                <span className="sm:text-[48px] text-[24.59px] text-[#FFFFFF] font-medium sm:leading-[52.8px] leading-[27.04px] tracking-[-1.44px]">
                  500+
                </span>
                <span className="sm:text-[15px] text-[10px] text-[#FFFFFF] font-medium">
                  Helped 500+ students to land their dream job in 2024.
                </span>
              </div>

              {/* Second Image */}
              <div
                className="w-[583px] md:flex hidden items-end p-[19px] rounded-[24px]"
                style={{
                  backgroundImage: `url(${images.hero_card_img.src})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="max-w-[376px] bg-[#FFFFFFE5] rounded-[12px] px-6 py-3">
                  <p className="text-[#525252] text-sm font-medium leading-[21px]">
                    World-class mentorship from senior FAANG engineers for
                    students to land their next dream role
                  </p>
                </div>
              </div>

              {/* Vectors */}
            </div>
          </div>
          <Image
            src={images.hero_left_vector}
            alt="hero_left_vector"
            className="absolute left-0 bottom-[20px] hidden_vector max-md:hidden"
          />

          <Image
            src={images.hero_right_vector}
            alt="hero_left_vector"
            className="absolute right-0 bottom-[180px] hidden_vector max-md:hidden"
          />
        </section>

        <section className="max-w-[1320px] sm:pl-6 pl-3 mx-auto flex sm:flex-row flex-col items-center justify-between sm:py-6 py-2 relative border-t-[1px] border-b-[1px] border-[#CCCCCC] overflow-hidden sm:mb-[80px] mb-[45px]">
          <h3 className="text-[#131319] sm:text-[18px] text-[13.33px] font-medium mb-4 sm:mb-0">
            Experts from the top tech companies
          </h3>

          {/* Desktop version */}
          <div className="sm:inline-block hidden">
            <Marquee
              style={{ width: "937px" }}
              className="flex items-center gap-[35px]"
              gradient={true}
              gradientColor="#F9F8F5"
            >
              <>
                <Link
                  href="https://www.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-[42.5px]"
                >
                  <Image
                    src={images.spotify_logo}
                    alt="Spotify logo"
                    className="inline-block"
                  />
                </Link>
                <Link
                  href="https://www.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-[42.5px]"
                >
                  <Image
                    src={images.apple_logo}
                    alt="Apple logo"
                    className="inline-block"
                  />
                </Link>
                <Link
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-[42.5px]"
                >
                  <Image
                    src={images.amazon_logo}
                    alt="Amazon logo"
                    className="inline-block"
                  />
                </Link>
                <Link
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-[42.5px]"
                >
                  <Image
                    src={images.google_logo}
                    alt="Google logo"
                    className="inline-block"
                  />
                </Link>
                <Link
                  href="https://www.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-[42.5px]"
                >
                  <Image
                    src={images.microsoft_logo}
                    alt="Microsoft logo"
                    className="inline-block"
                  />
                </Link>

                {/* Duplicated links for seamless effect */}
                <Link
                  href="https://www.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-[42.5px]"
                >
                  <Image
                    src={images.spotify_logo}
                    alt="Spotify logo"
                    className="inline-block"
                  />
                </Link>
                <Link
                  href="https://www.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-[42.5px]"
                >
                  <Image
                    src={images.apple_logo}
                    alt="Apple logo"
                    className="inline-block"
                  />
                </Link>
              </>
            </Marquee>
          </div>

          {/* Mobile version */}
          <div className="sm:hidden flex overflow-auto gap-4 py-2">
            <Link
              href="https://www.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={images.spotify_logo}
                alt="Spotify logo"
                className="inline-block"
              />
            </Link>
            <Link
              href="https://www.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={images.apple_logo}
                alt="Apple logo"
                className="inline-block"
              />
            </Link>
            <Link
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={images.amazon_logo}
                alt="Amazon logo"
                className="inline-block"
              />
            </Link>
            <Link
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={images.google_logo}
                alt="Google logo"
                className="inline-block"
              />
            </Link>
            <Link
              href="https://www.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={images.microsoft_logo}
                alt="Microsoft logo"
                className="inline-block"
              />
            </Link>
          </div>
        </section>

        <section className="max-w-[1320px] mx-auto sm:px-16 px-7 sm:pb-[176px] pb-[90px]">
          <div className="max-w-[548.28px] mx-auto sm:mb-8 mb-[20px]">
            <h2 className="sm:text-[52px] text-[28.67px] text-[#1A1A1A] text-center font-medium sm:tracking-[-1px] tracking-[-0.55px] sm:leading-[60.94px] leading-[33.6px]">
              How it works here at{" "}
              <span className="text-[#05A105]">interviewPro</span>
            </h2>
          </div>

          <main className="flex flex-col sm:gap-8 gap-[17px]">
            <div className="bg-[#FFFFFF] flex md:flex-row flex-col justify-between sm:py-8 sm:px-7 p-[17px] sm:rounded-[32px] rounded-[17.64px] border-[1px] border-[#D0D5DD]">
              <div className="lg:max-w-[520px] md:max-w-[420px] flex flex-col font-['Inter'] sm:mt-[75px] max-md:mb-[51px]">
                <h3 className="text-[#03390F] sm:text-[35px] text-[20px] sm:leading-[43px] leading-[24.2px] tracking-[-2]  font-medium sm:mb-8 mb-[17px]">
                  Choose Your Interview Focus
                </h3>
                <p className="text-[#4F4F4F] sm:text-[25px] text-[14px] sm:leading-[25px] leading-[16.94px] sm:mb-8 mb-[17px]">
                  Tailor your mock interview to your needs, focusing on coding,
                  system design, or behavioral questions.
                </p>
                <Link
                  href="#"
                  className="bg-[#05A105] text-[#fff] sm:max-w-[145px] max-sm:max-w-[109px] font-medium rounded-[9999px] sm:py-[10px] sm:px-8 py-[7.5px] px-6 max-sm:text-xs hover:opacity-55 active:hover:opacity-65 transition-all duration-300"
                >
                  Apply now
                </Link>
              </div>

              <Image
                src={images.how_it_works_img_1}
                className="xl:max-w-[500px] md:max-w-[400px]"
                alt="How it works"
              />
            </div>

            <div className="bg-[#FFFFFF] flex md:flex-row flex-col justify-between sm:py-8 sm:px-7 p-[17px] sm:rounded-[32px] rounded-[17.64px] border-[1px] border-[#D0D5DD]">
              <div className="lg:max-w-[550px] md:max-w-[420px] flex flex-col font-['Inter'] sm:mt-[55px] max-md:mb-[51px]">
                <h3 className="text-[#03390F] sm:text-[35px] text-[20px] sm:leading-[43px] leading-[24.2px] tracking-[-2]  font-medium sm:mb-8 mb-[17px]">
                  Select Your Interviewer’s Background
                </h3>
                <p className="text-[#4F4F4F] sm:text-[25px] text-[14px] sm:leading-[25px] leading-[16.94px] sm:mb-8 mb-[17px]">
                  Pick an interviewer with experience at top tech companies,
                  aligned with your career goals.{" "}
                </p>
                <Link
                  href="#"
                  className="bg-[#05A105]  text-[#fff] sm:max-w-[145px] max-sm:max-w-[109px] font-medium rounded-[9999px] sm:py-[10px] sm:px-8 py-[7.5px] px-6 max-sm:text-xs hover:opacity-55 active:hover:opacity-65 transition-all duration-300"
                >
                  Apply now
                </Link>
              </div>

              <Image
                src={images.how_it_works_img_2}
                className="xl:max-w-[500px] md:max-w-[400px]"
                alt="How it works"
              />
            </div>

            <div className="bg-[#FFFFFF] flex md:flex-row flex-col justify-between sm:py-8 sm:px-7 p-[17px] sm:rounded-[32px] rounded-[17.64px] border-[1px] border-[#D0D5DD]">
              <div className="lg:max-w-[520px] md:max-w-[420px] w-full flex flex-col font-['Inter'] sm:mt-[75px] max-md:mb-[51px]">
                <h3 className="text-[#03390F] sm:text-[35px] text-[19px] sm:leading-[43px] leading-[24.2px] tracking-[-2]  font-medium sm:mb-8 mb-[17px]">
                  Schedule at Your Convenience
                </h3>
                <p className="text-[#4F4F4F] sm:text-[25px] text-[14px] sm:leading-[25px] leading-[16.94px] sm:mb-8 mb-[17px]">
                  Book your interview at a time that suits you, with flexible
                  scheduling to fit your routine.
                </p>
                <Link
                  href="#"
                  className="bg-[#05A105] text-[#fff] sm:max-w-[145px] max-sm:max-w-[109px] font-medium rounded-[9999px] sm:py-[10px] sm:px-8 py-[7.5px] px-6 max-sm:text-xs hover:opacity-55 active:hover:opacity-65 transition-all duration-300"
                >
                  Apply now
                </Link>
              </div>

              <Image
                src={images.how_it_works_img_3}
                className="xl:max-w-[500px] md:max-w-[400px]"
                alt="How it works"
              />
            </div>

            <div className="bg-[#FFFFFF] flex md:flex-row flex-col justify-between sm:py-8 sm:px-7 p-[17px] sm:rounded-[32px] rounded-[17.64px] border-[1px] border-[#D0D5DD]">
              <div className="lg:max-w-[520px] md:max-w-[450px] flex flex-col font-['Inter'] sm:mt-[65px] max-md:mb-[51px]">
                <h3 className="text-[#03390F] sm:text-[35px] text-[20px] sm:leading-[43px] leading-[24.2px] tracking-[-2]  font-medium sm:mb-8 mb-[17px]">
                  Get Detailed Feedback
                </h3>
                <p className="text-[#4F4F4F] sm:text-[25px] text-[14px] sm:leading-[25px] leading-[16.94px] sm:mb-8 mb-[17px]">
                  You&apos;ll receive personalized feedback highlighting
                  strengths, areas for improvement, and steps to enhance your
                  skills.
                </p>
                <Link
                  href="#"
                  className="bg-[#05A105] text-[#fff] sm:max-w-[145px] max-sm:max-w-[109px] font-medium rounded-[9999px] sm:py-[10px] sm:px-8 py-[7.5px] px-6 max-sm:text-xs hover:opacity-55 active:hover:opacity-65 transition-all duration-300"
                >
                  Apply now
                </Link>
              </div>

              <Image
                src={images.how_it_works_img_4}
                className="xl:max-w-[500px] md:max-w-[400px]"
                alt="How it works"
              />
            </div>
          </main>
        </section>

        <section className="max-w-[1363px] lg:flex-row flex-col max-lg:gap-y-[54px] mx-auto gap-5 sm:px-[30px] px-4 flex items-center justify-between sm:pb-[176px] pb-[94px]">
          <div className="sm:w-[550px] max-sm:max-w-[257.45px] max-sm:mx-auto">
            <div className="max-w-[513px] xl:mb-[109px] sm:mb-[80px] mb-[31.8px]">
              <h2 className="sm:text-[48px] text-[23.14px] text-[#03390F] font-medium sm:leading-[52.8px] leading-[25.45px] sm:tracking-[-1.44px] tracking-[-0.69px] sm:mb-[31px] mb-[14.94px]">
                Unlock a <span className="text-[#05A105]">Higher</span> Salarie
              </h2>
              <p className="sm:text-[15px] text-[7.23px] sm:leading-[21px] leading-[10.12px] text-[#15130ECC] font-medium">
                Students who prepare with InterviewPro succeed in landing their
                dream tech jobs. Our targeted mock interviews and expert
                feedback equip candidates with the confidence and skills they
                need to secure top offers and elevate their career prospects.
              </p>
            </div>

            <div className="flex flex-wrap gap-y-5 justify-between">
              <div className="sm:max-w-[215.79px] max-sm:w-[104.01px]">
                <h3 className="sm:text-[38px] text-[18.32px] sm:leading-[45.6px] leading-[21.98px] sm:tracking-[-0.37px] text-[#03390F] font-medium sm:mb-[13px] mb-[5px]">
                  $200k
                </h3>
                <p className="sm:text-[15px] text-[7.23px] sm:leading-[21px] leading-[10.12px] text-[#373531] font-medium">
                  Average annual salary achieved by a student using
                  InterviewPro.
                </p>
              </div>

              <div className="sm:max-w-[252px] max-sm:max-w-[116.54px]">
                <h3 className="sm:text-[38px] text-[18.32px] sm:leading-[45.6px] leading-[21.98px] sm:tracking-[-0.37px] text-[#03390F] font-medium sm:mb-[13px] mb-[6px]">
                  84%
                </h3>
                <p className="sm:text-[15px] text-[7.23px] sm:leading-[21px] leading-[10.12px] text-[#373531] font-medium">
                  Success rate in landing a job after completing multiple mock
                  interviews.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-[662px] bg-[#F4F2F0] py-6 sm:px-[60px] px-[10px] rounded-[24px] border-[#CCCCCC] border-[1px]">
            {/* Title */}
            <h1 className="text-[24px] font-semibold tracking-[-2px] leading-[29.05px] text-[#03390F] mb-6 font-['Inter']">
              Technical interview success rate
            </h1>

            <div className="sm:w-[542px]">
              {/* Interview Pro */}
              <div className="flex items-center gap-[19px] mb-[12px]">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[17px] text-[#05A105]">
                    Interview Pro
                  </span>
                </div>
                <div className="bg-[#05A105] rounded-lg sm:w-[355px] w-[255px] py-[19.5px] flex justify-end pr-[23px]">
                  <span className="text-[#FFFFFF] font-bold">32.5%</span>
                </div>
              </div>

              <div className="flex items-center gap-[19px] mb-[12px]">
                <div className="flex justify-between items-center max-w-[102px]">
                  <span className="font-medium text-[15px] text-[#525252]">
                    Interview Prep Programs
                  </span>
                </div>
                <div className="bg-[#525252] rounded-lg w-[164px] py-[19.5px] flex justify-end pr-[23px]">
                  <span className="text-[#FFFFFF] font-bold">20%</span>
                </div>
              </div>

              <div className="flex items-center gap-[19px] mb-[12px]">
                <div className="flex justify-between items-center mb-4 w-[102px]">
                  <span className="font-medium text-[15px] text-[#525252]">
                    LeetCode
                  </span>
                </div>
                <div className="bg-[#525252] rounded-lg w-[90px] py-[19.5px] flex justify-end pr-[23px]">
                  <span className="text-[#FFFFFF] font-bold">12%</span>
                </div>
              </div>

              <div className="flex items-center gap-[19px] mb-[12px]">
                <div className="flex justify-between items-center mb-4 w-[102px]">
                  <span className="font-medium text-[15px] text-[#525252]">
                    Bootcamps
                  </span>
                </div>
                <div className="bg-[#525252] rounded-lg w-[60px] py-[19.5px] flex justify-center">
                  <span className="text-[#FFFFFF] font-bold">5.4%</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className=" text-xs mt-6">
              Comparison metrics are averages and may not reflect all users
              experiences.
            </p>
          </div>
        </section>

        <section className="bg-[#073630] max-w-[1330.73px] mx-auto text-[#FFFFFF] sm:rounded-[32px] rounded-[15.33px] sm:py-[96px] py-[45px] sm:mb-[80px] mb-[48px]">
          <div className="sm:max-w-[514.92px] max-w-[246.61px] mx-auto text-center sm:mb-[86px] mb-[45px]">
            <h2 className="sm:text-[48px] text-[24px] sm:leading-[52.8px] leading-[25.29px] sm:tracking-[-1.44px] tracking-[-0.69px] font-medium mb-[31px]">
              Why choose us
            </h2>
            <p className="sm:text-[15px] text-[12px] sm:leading-[21px] leading-[14.06px] font-medium mb-[27px]">
              Get expert feedback, achieve higher salaries, and succeed faster
              with InterviewPro.
            </p>

            <div className="bg-[#1D4B45] rounded-[200px] sm:py-[9px] py-[4.31px] sm:px-[17.8px] px-[8.51px] inline-flex">
              <div className="flex items-center gap-px sm:mr-6 mr-[5.75px]">
                <svg
                  width="17"
                  height="16"
                  className="max-sm:w-[6.75px] max-sm:h-[6.75px]"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_129_604)">
                    <g clipPath="url(#clip1_129_604)">
                      <g clipPath="url(#clip2_129_604)">
                        <path
                          d="M7.95938 2.19157C8.24975 1.2519 9.57985 1.2519 9.87022 2.19157L10.8216 5.27039C10.9511 5.6894 11.3385 5.97515 11.7771 5.97515H14.9585C15.915 5.97515 16.3257 7.18913 15.5656 7.7698L12.9068 9.80092C12.5738 10.0553 12.4347 10.4904 12.5584 10.8909L13.5534 14.1106C13.8409 15.0408 12.7646 15.7916 11.9909 15.2005L9.52186 13.3143C9.16346 13.0405 8.66614 13.0405 8.30774 13.3143L5.83869 15.2005C5.065 15.7916 3.98875 15.0408 4.2762 14.1106L5.27116 10.8909C5.39489 10.4904 5.25583 10.0553 4.9228 9.80092L2.26403 7.7698C1.50392 7.18913 1.91456 5.97515 2.87109 5.97515H6.05255C6.4911 5.97515 6.87849 5.6894 7.00797 5.27039L7.95938 2.19157Z"
                          fill="#E0BC00"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                    <clipPath id="clip1_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                    <clipPath id="clip2_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="17"
                  height="16"
                  className="max-sm:w-[6.75px] max-sm:h-[6.75px]"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_129_604)">
                    <g clipPath="url(#clip1_129_604)">
                      <g clipPath="url(#clip2_129_604)">
                        <path
                          d="M7.95938 2.19157C8.24975 1.2519 9.57985 1.2519 9.87022 2.19157L10.8216 5.27039C10.9511 5.6894 11.3385 5.97515 11.7771 5.97515H14.9585C15.915 5.97515 16.3257 7.18913 15.5656 7.7698L12.9068 9.80092C12.5738 10.0553 12.4347 10.4904 12.5584 10.8909L13.5534 14.1106C13.8409 15.0408 12.7646 15.7916 11.9909 15.2005L9.52186 13.3143C9.16346 13.0405 8.66614 13.0405 8.30774 13.3143L5.83869 15.2005C5.065 15.7916 3.98875 15.0408 4.2762 14.1106L5.27116 10.8909C5.39489 10.4904 5.25583 10.0553 4.9228 9.80092L2.26403 7.7698C1.50392 7.18913 1.91456 5.97515 2.87109 5.97515H6.05255C6.4911 5.97515 6.87849 5.6894 7.00797 5.27039L7.95938 2.19157Z"
                          fill="#E0BC00"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                    <clipPath id="clip1_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                    <clipPath id="clip2_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className="max-sm:w-[6.75px] max-sm:h-[6.75px]"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_129_604)">
                    <g clipPath="url(#clip1_129_604)">
                      <g clipPath="url(#clip2_129_604)">
                        <path
                          d="M7.95938 2.19157C8.24975 1.2519 9.57985 1.2519 9.87022 2.19157L10.8216 5.27039C10.9511 5.6894 11.3385 5.97515 11.7771 5.97515H14.9585C15.915 5.97515 16.3257 7.18913 15.5656 7.7698L12.9068 9.80092C12.5738 10.0553 12.4347 10.4904 12.5584 10.8909L13.5534 14.1106C13.8409 15.0408 12.7646 15.7916 11.9909 15.2005L9.52186 13.3143C9.16346 13.0405 8.66614 13.0405 8.30774 13.3143L5.83869 15.2005C5.065 15.7916 3.98875 15.0408 4.2762 14.1106L5.27116 10.8909C5.39489 10.4904 5.25583 10.0553 4.9228 9.80092L2.26403 7.7698C1.50392 7.18913 1.91456 5.97515 2.87109 5.97515H6.05255C6.4911 5.97515 6.87849 5.6894 7.00797 5.27039L7.95938 2.19157Z"
                          fill="#E0BC00"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                    <clipPath id="clip1_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                    <clipPath id="clip2_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className="max-sm:w-[6.75px] max-sm:h-[6.75px]"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_129_604)">
                    <g clipPath="url(#clip1_129_604)">
                      <g clipPath="url(#clip2_129_604)">
                        <path
                          d="M7.95938 2.19157C8.24975 1.2519 9.57985 1.2519 9.87022 2.19157L10.8216 5.27039C10.9511 5.6894 11.3385 5.97515 11.7771 5.97515H14.9585C15.915 5.97515 16.3257 7.18913 15.5656 7.7698L12.9068 9.80092C12.5738 10.0553 12.4347 10.4904 12.5584 10.8909L13.5534 14.1106C13.8409 15.0408 12.7646 15.7916 11.9909 15.2005L9.52186 13.3143C9.16346 13.0405 8.66614 13.0405 8.30774 13.3143L5.83869 15.2005C5.065 15.7916 3.98875 15.0408 4.2762 14.1106L5.27116 10.8909C5.39489 10.4904 5.25583 10.0553 4.9228 9.80092L2.26403 7.7698C1.50392 7.18913 1.91456 5.97515 2.87109 5.97515H6.05255C6.4911 5.97515 6.87849 5.6894 7.00797 5.27039L7.95938 2.19157Z"
                          fill="#E0BC00"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                    <clipPath id="clip1_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                    <clipPath id="clip2_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className="max-sm:w-[6.75px] max-sm:h-[6.75px]"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_129_604)">
                    <g clipPath="url(#clip1_129_604)">
                      <g clipPath="url(#clip2_129_604)">
                        <path
                          d="M7.95938 2.19157C8.24975 1.2519 9.57985 1.2519 9.87022 2.19157L10.8216 5.27039C10.9511 5.6894 11.3385 5.97515 11.7771 5.97515H14.9585C15.915 5.97515 16.3257 7.18913 15.5656 7.7698L12.9068 9.80092C12.5738 10.0553 12.4347 10.4904 12.5584 10.8909L13.5534 14.1106C13.8409 15.0408 12.7646 15.7916 11.9909 15.2005L9.52186 13.3143C9.16346 13.0405 8.66614 13.0405 8.30774 13.3143L5.83869 15.2005C5.065 15.7916 3.98875 15.0408 4.2762 14.1106L5.27116 10.8909C5.39489 10.4904 5.25583 10.0553 4.9228 9.80092L2.26403 7.7698C1.50392 7.18913 1.91456 5.97515 2.87109 5.97515H6.05255C6.4911 5.97515 6.87849 5.6894 7.00797 5.27039L7.95938 2.19157Z"
                          fill="#E0BC00"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                    <clipPath id="clip1_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                    <clipPath id="clip2_129_604">
                      <rect
                        width="16"
                        height="15"
                        fill="white"
                        transform="translate(0.915039 0.599609)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="sm:text-[15px] text-[7.18px] sm:leading-[21px] leading-[10.06px] font-semibold">
                4.97/5 from over 800 reviews
              </span>
            </div>
          </div>

          <div className="max-w-[1156.73px] px-4 mx-auto flex max-sm:gap-y-[34px] flex-wrap items-center justify-between">
            <div className="sm:max-w-[215.79px] max-sm:w-[104.01px]">
              <h3 className="sm:text-[38px] text-[18.32px] sm:leading-[45.6px] leading-[21.98px] sm:tracking-[-0.37px] font-medium sm:mb-[13px] mb-[5px]">
                $500K
              </h3>
              <p className="sm:text-[15px] text-[7.23px] sm:leading-[21px] leading-[10.12px] font-medium">
                Highest annual salary achieved by a student using InterviewPro.
              </p>
            </div>

            <div className="sm:max-w-[229.58px] max-sm:w-[104.01px]">
              <h3 className="sm:text-[38px] text-[18.32px] sm:leading-[45.6px] leading-[21.98px] sm:tracking-[-0.37px] font-medium sm:mb-[13px] mb-[5px]">
                84%
              </h3>
              <p className="sm:text-[15px] text-[7.23px] sm:leading-[21px] leading-[10.12px] font-medium">
                Success rate in landing a job after completing multiple mock
                interviews.
              </p>
            </div>

            <div className="sm:max-w-[244.11px] max-sm:w-[104.01px] sm:pt-2 sm:pl-2">
              <h3 className="sm:text-[38px] text-[18.32px] sm:leading-[45.6px] leading-[21.98px] sm:tracking-[-0.37px] font-medium sm:mb-[13px] mb-[5px]">
                41.2%
              </h3>
              <p className="sm:text-[15px] text-[7.23px] sm:leading-[21px] leading-[10.12px] font-medium">
                Average increase in promotion rate within the first year for
                candidates who used InterviewPro.
              </p>
            </div>

            <div className="sm:max-w-[235px] max-sm:w-[104.01px]">
              <h3 className="sm:text-[38px] text-[18.32px] sm:leading-[45.6px] leading-[21.98px] sm:tracking-[-0.37px] font-medium sm:mb-[13px] mb-[5px]">
                $15,000+
              </h3>
              <p className="sm:text-[15px] text-[7.23px] sm:leading-[21px] leading-[10.12px] font-medium">
                Average increase in starting salary after preparing with
                InterviewPro.
              </p>
            </div>
          </div>
        </section>

        <section className="sm:pb-[85px] pb-[54px]">
          <div className="max-w-[1330.73px] mx-auto max-md:px-4 sm:mb-[45px] mb-[23.64px]">
            <div className="sm:max-w-[527px] max-w-[259.58px] pl-1">
              <h2 className="sm:text-[36px] text-[17.73px] sm:leading-[42.19px]  sm:tracking-[-1px]  tracking-[-0.49px] leading-[20.78px] font-medium">
                Here’s what our customers have been saying
              </h2>
            </div>
          </div>
          <MarqueeDemo />
        </section>

        <section className="max-w-[1320px] mx-auto xl:px-0 px-4 pb-[90px]">
          <div className="sm:max-w-[538.08px] max-w-[333px] mx-auto text-center sm:mb-8 mb-3">
            <h2 className="sm:text-[52px] text-[20.48px]  text-[#252525] sm:leading-[60px] leading-[23.63px] font-medium tracking-[-1.8px] sm:mb-4 mb-2">
              Simple plans for all
            </h2>
            <p className="sm:text-[19px] text-[12px] sm:leading-[26.6px] leading-[14.06px] text-[#15130ECC] tracking-[-0.19px]">
              Interview pro features plans to accommodate everyone from fresh
              graduates and junior engineers to seasoned experts.
            </p>
          </div>

          <main>
            <div className="max-w-[899px] mx-auto bg-[#F4F2F0] border-[1px] flex justify-between gap-3 border-[#CCCCCC] sm:rounded-[24px] rounded-[9.45px] sm:p-6 p-[9.45px] sm:mb-8 mb-[12.61px]">
              <div>
                <div className="sm:mb-[94px] mb-[35px]">
                  <h3 className="sm:text-[48px] text-[18.91px] font-medium sm:leading-[52.8px] leading-[20.8px] text-[#252525] sm:tracking-[-1.44px] tracking-[-0.57px] mb-4">
                    Pro
                  </h3>
                  <p className="text-[15px] max-sm:hidden font-medium leading-[21px] text-[#15130ECC]">
                    Pay monthly, cancel anytime
                  </p>
                </div>

                <div className="inline-flex flex-col justify-start">
                  <span className="sm:text-[12px] text-[8px] font-semibold sm:leading-[16.8px] leading-[6.62px] sm:mb-2 mb-[3.5px]">
                    From
                  </span>
                  <h3 className="sm:text-[48px] text-[18.91px] font-medium sm:leading-[52.8px] leading-[20.8px] text-[#252525] sm:tracking-[-1.44px] tracking-[-0.57px] sm:mb-[9px] mb-[3px]">
                    $2500
                  </h3>
                  <span className="sm:text-[12px]  text-[6px] font-medium leading-[16.8px] sm:mb-6 mb-[9.45px]">
                    Price in USD per month
                  </span>
                  <Link
                    href="#"
                    className="bg-[#05A105] text-[#fff] sm:text-[16px] text-[5.82px] sm:leading-[24px] leading-[8.73px] text-center font-medium rounded-[9999px] sm:max-w-[117px] max-w-[53.27px] sm:py-[10px] py-[4px] hover:opacity-55 active:hover:opacity-65 transition-all duration-300 font-['Inter']"
                  >
                    Apply now
                  </Link>
                </div>
              </div>

              <div className="max-w-[410.5px] sm:rounded-[12px] rounded-[4.73px] bg-[#FFFFFF] sm:px-6 sm:pt-[22px] p-[9.45px]">
                <span className="sm:text-[15px] text-[5.91px] font-semibold sm:leading-[21px] leading-[8.27px]">
                  Features:
                </span>
                <ul className="lg:w-[362.5px] flex flex-col sm:gap-3 gap-[4.73px] sm:mt-[21px] mt-[9.45px]">
                  <li className="flex items-center sm:gap-[14px] gap-[5px] border-b-[1px] border-[#F9F8F5] sm:pb-3 pb-[4.73px]">
                    <svg
                      width="24"
                      height="25"
                      className="max-sm:w-[9.45px] max-sm:h-[9.45px]"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.189453"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#05A105"
                      />
                      <g clipPath="url(#clip0_109_1131)">
                        <g clipPath="url(#clip1_109_1131)">
                          <path
                            d="M16 9.18945L10.5 14.6895L8 12.1895"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_109_1131">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(6 6.18945)"
                          />
                        </clipPath>
                        <clipPath id="clip1_109_1131">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(6 6.18945)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="sm:text-[15px] text-[8px] text-[#15130ECC] font-medium sm:leading-[21px] leading-[8.27px]">
                      Ideal if you&apos;re cramming for booked interviews
                    </span>
                  </li>

                  <li className="flex items-center sm:gap-[14px] gap-[5px] border-b-[1px] border-[#F9F8F5] sm:pb-3 pb-[4.73px]">
                    <svg
                      width="24"
                      height="25"
                      className="max-sm:w-[9.45px] max-sm:h-[9.45px]"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.189453"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#05A105"
                      />
                      <g clipPath="url(#clip0_109_1131)">
                        <g clipPath="url(#clip1_109_1131)">
                          <path
                            d="M16 9.18945L10.5 14.6895L8 12.1895"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_109_1131">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(6 6.18945)"
                          />
                        </clipPath>
                        <clipPath id="clip1_109_1131">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(6 6.18945)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="sm:text-[15px] text-[8px] text-[#15130ECC] font-medium sm:leading-[21px] leading-[8.27px]">
                      No work eligibility / experience requirements
                    </span>
                  </li>

                  <li className="flex items-center sm:gap-[14px] gap-[5px]">
                    <svg
                      width="24"
                      height="25"
                      className="max-sm:w-[9.45px] max-sm:h-[9.45px]"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.189453"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#05A105"
                      />
                      <g clipPath="url(#clip0_109_1131)">
                        <g clipPath="url(#clip1_109_1131)">
                          <path
                            d="M16 9.18945L10.5 14.6895L8 12.1895"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_109_1131">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(6 6.18945)"
                          />
                        </clipPath>
                        <clipPath id="clip1_109_1131">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(6 6.18945)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="sm:text-[15px] text-[8px] text-[#15130ECC] font-medium sm:leading-[21px] leading-[8.27px]">
                      Flat monthly fee
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-[899px] mx-auto bg-[#073630] border-[1px] flex justify-between gap-3 border-[#CCCCCC] sm:rounded-[24px] rounded-[9.45px] sm:px-6 sm:py-7 p-[9.45px]">
              <div>
                <div className="max-w-[326.37px] sm:mb-[75.79px] mb-[35px] text-[#FFFFFF]">
                  <h3 className="sm:text-[48px] text-[18.91px] font-medium sm:leading-[52.8px] leading-[20.8px] sm:tracking-[-1.44px] tracking-[-0.57px] mb-4">
                    Unlimited
                  </h3>
                  <p className="text-[15px] max-sm:hidden font-medium leading-[21px]">
                    Get unlimited support until you land a role, then pay based
                    on the gain we help you achieve.
                  </p>
                </div>

                <div className="inline-flex flex-col justify-start text-[#FFFFFF]">
                  <span className="sm:text-[12px] text-[8px] font-semibold sm:leading-[16.8px] leading-[6.62px] sm:mb-2 mb-[3.5px]">
                    Starts at
                  </span>
                  <h3 className="sm:text-[48px] text-[18.91px] font-medium sm:leading-[52.8px] leading-[20.8px] sm:tracking-[-1.44px] tracking-[-0.57px] sm:mb-[9px] mb-[3px]">
                    $5000
                  </h3>
                  <span className="sm:text-[12px] text-[#FFFFFFD9] text-[6px] font-medium leading-[16.8px] sm:mb-6 mb-[5.45px]">
                    down, then portion of salary gain
                  </span>
                  <Link
                    href="#"
                    className="bg-[#05A105] text-[#fff] sm:text-[16px] text-[5.82px] sm:leading-[24px] leading-[8.73px] text-center font-medium rounded-[9999px] sm:max-w-[117px] max-w-[53.27px] sm:py-[10px] py-[4px] hover:opacity-55 active:hover:opacity-65 transition-all duration-300 font-['Inter']"
                  >
                    Apply now
                  </Link>
                </div>
              </div>

              <div className="max-w-[410.5px] sm:rounded-[12px] rounded-[4.73px] bg-[#FFFFFF] sm:px-6 sm:pt-[22px] p-[9.45px]">
                <span className="sm:text-[15px] text-[5.91px] font-semibold sm:leading-[21px] leading-[8.27px]">
                  Features:
                </span>
                <ul className="lg:w-[362.5px] flex flex-col sm:gap-3 gap-[4.73px] sm:mt-[21px] mt-[9.45px]">
                  <li className="flex items-center sm:gap-[14px] gap-[5px] border-b-[1px] border-[#F9F8F5] sm:pb-3 pb-[4.73px]">
                    <svg
                      width="24"
                      height="25"
                      className="max-sm:w-[9.45px] max-sm:h-[9.45px]"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.189453"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#05A105"
                      />
                      <g clipPath="url(#clip0_109_1131)">
                        <g clipPath="url(#clip1_109_1131)">
                          <path
                            d="M16 9.18945L10.5 14.6895L8 12.1895"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_109_1131">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(6 6.18945)"
                          />
                        </clipPath>
                        <clipPath id="clip1_109_1131">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(6 6.18945)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="sm:text-[15px] text-[8px] text-[#15130ECC] font-medium sm:leading-[21px] leading-[8.27px]">
                      Ideal if you&apos;re earlier in your job hunt
                    </span>
                  </li>

                  <li className="flex items-center sm:gap-[14px] gap-[5px] border-b-[1px] border-[#F9F8F5] sm:pb-3 pb-[4.73px]">
                    <svg
                      width="24"
                      height="25"
                      className="max-sm:w-[9.45px] max-sm:h-[9.45px]"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.189453"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#05A105"
                      />
                      <g clipPath="url(#clip0_109_1131)">
                        <g clipPath="url(#clip1_109_1131)">
                          <path
                            d="M16 9.18945L10.5 14.6895L8 12.1895"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_109_1131">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(6 6.18945)"
                          />
                        </clipPath>
                        <clipPath id="clip1_109_1131">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(6 6.18945)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="sm:text-[15px] text-[8px] text-[#15130ECC] font-medium sm:leading-[21px] leading-[8.27px]">
                      Must be eligible to work in U.S. or Canada
                    </span>
                  </li>

                  <li className="flex items-center sm:gap-[14px] gap-[5px]">
                    <svg
                      width="24"
                      height="25"
                      className="max-sm:w-[9.45px] max-sm:h-[9.45px]"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.189453"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#05A105"
                      />
                      <g clipPath="url(#clip0_109_1131)">
                        <g clipPath="url(#clip1_109_1131)">
                          <path
                            d="M16 9.18945L10.5 14.6895L8 12.1895"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_109_1131">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(6 6.18945)"
                          />
                        </clipPath>
                        <clipPath id="clip1_109_1131">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(6 6.18945)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="sm:text-[15px] text-[8px] text-[#15130ECC] font-medium sm:leading-[21px] leading-[8.27px]">
                      Incentive aligned, pay based on your salary gain
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </section>

        <section className="max-w-[1320px] mx-auto xl:px-0 px-4 sm:pb-[109px] pb-12">
          <div className="max-w-[770px] mx-auto mb-[67px]">
            <h2 className="sm:text-[48px] sm:leading-[56.25px] sm:tracking-[-1px] text-center font-medium">
              Our clients Have landed jobs from top companies in the world
            </h2>
          </div>

          <div className="flex flex-col gap-y-10 items-center">
            <div className="flex items-center sm:gap-12 gap-[22px]">
              <Link
                href="https://www.paypal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.paypal}
                  alt="PayPal logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
              <Link
                href="https://www.airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.airbnb}
                  alt="Airbnb logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
              <Link
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.amazon}
                  alt="Amazon logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
              <Link
                href="https://www.shopify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.shopify}
                  alt="Shopify logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
              <Link
                href="https://www.stripe.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.stripe}
                  alt="Stripe logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
            </div>

            <div className="flex items-center sm:gap-12 gap-[22px]">
              <Link
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.google} // Image for Google
                  alt="Google logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
              <Link
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.coinbase} // Image for Coinbase
                  alt="Coinbase logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
              <Link
                href="https://www.uber.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.uber} // Image for Uber
                  alt="Uber logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
              <Link
                href="https://www.discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.discord} // Image for Discord
                  alt="Discord logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
              <Link
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.whatsapp} // Image for WhatsApp
                  alt="WhatsApp logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
            </div>

            <div className="flex items-center sm:gap-12 gap-[22px]">
              <Link
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.youtube}
                  alt="YouTube logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
              <Link
                href="https://www.netflix.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.netflix}
                  alt="Netflix logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
              <Link
                href="https://www.dropbox.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.dropbox}
                  alt="Dropbox logo"
                  className="max-sm:w-[66.36px] transition duration-300 ease-in-out transform hover:scale-110 hover:filter-none"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-[1320px] mx-auto xl:px-0 px-4 sm:pb-[210px] pb-[38px]">
          <h2 className="sm:text-[32px] sm:leading-[35.91px] leading-[18.67px] font-medium text-center lg:pr-4 mb-[10px]">
            Frequently Asked Questions
          </h2>

          <div className="w-full flex justify-center">
            <FaqPage />
          </div>
        </section>

        <section
          className="bg-[#073630] max-w-[1191px] xl:mx-auto mx-4 sm:px-[57px] px-[26.65px] rounded-[32px] sm:pt-[115px] pt-[46px] sm:pb-[115px] pb-[45px] sm:mb-[144px] mb-12"
          style={{
            backgroundImage: `url(${images.ready_to_ace_vector.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="sm:max-w-[658px] inline-flex flex-col">
            <h2 className="sm:text-[58px] text-[29.16px] sm:leading-[67.97px] leading-[34.18px] sm:tracking-[-1px] tracking-[-0.5px] font-medium text-[#FFFFFF]">
              Ready to Ace Your Next
            </h2>
            <h2 className="sm:text-[58px] text-[29.16px] sm:leading-[67.97px] leading-[34.18px] sm:tracking-[-1px] tracking-[-0.5px] font-medium text-[#05A105] mb-2">
              Tech Interview?
            </h2>

            <p className="sm:text-[20px] text-[10.06px] text-[#D0D5DD] sm:leading-[25px] leading-[10.06px] font-['Inter']  sm:mb-6 mb-3">
              Join InterviewPro today and start your journey <br /> toward
              landing your dream job.
            </p>

            <Link
              href="#"
              className="bg-[#05A105] text-[#fff] sm:text-[20px] text-[10.06px] sm:leading-[30px] leading-[15.08px] text-center font-medium rounded-[9999px] sm:max-w-[146px] max-w-[73.63px] sm:py-[10px] py-[6.29px] hover:opacity-55 active:hover:opacity-65 transition-all duration-300 font-['Inter']"
            >
              Apply now
            </Link>
          </div>
        </section>

        <footer className="max-w-[1216px] mx-auto xl:px-0 px-4 pb-12 font-['Inter'] max-sm:flex max-sm:flex-col items-center">
          <div className="flex sm:flex-row flex-col max-sm:gap-y-8 sm:justify-between mb-16">
            <div className="max-w-[320px]">
              <Link href="/">
                <Image src={images.site_logo} alt="Interview Faang" />
              </Link>
              <p className="text-[#475467] leading-[24px] mt-8">
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>

            <div className="flex gap-12 xl:mr-[70px]">
              <ul className="flex flex-col gap-3">
                <li className="mb-[4px]">
                  <span className="font-semibold text-[14px] leading-[20px] text-[#101828]">
                    Product
                  </span>
                </li>
                <li>
                  <Link href={"#"} className="font-semibold text-[#575757]">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-semibold text-[#575757] hover:opacity-65 active:opacity-55 transition-all duration-300"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-semibold text-[#575757] hover:opacity-65 active:opacity-55 transition-all duration-300"
                  >
                    Courses{" "}
                    <span className="ml-2 bg-[#ECFDF3] text-[#027A48] text-[12px] leading-[18px] font-medium px-2 py-[2px]">
                      New
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-semibold text-[#575757] hover:opacity-65 active:opacity-55 transition-all duration-300"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li className="mb-[4px]">
                  <span className="font-semibold text-[14px] leading-[20px] text-[#101828]">
                    Resources
                  </span>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-semibold text-[#575757] hover:opacity-65 active:opacity-55 transition-all duration-300"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-semibold text-[#575757] hover:opacity-65 active:opacity-55 transition-all duration-300"
                  >
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-semibold text-[#575757] hover:opacity-65 active:opacity-55 transition-all duration-300"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t-[#E4E7EC] border-t-[1px] flex justify-between sm:flex-row max-sm:gap-y-[32px] flex-col pt-8">
            <span className="text-[16px] text-[#667085]">
              © 2024 InterviewPro. All rights reserved.
            </span>

            <ul className="flex gap-4">
              <li>
                <Link
                  href={"#"}
                  className="text-[#667085] hover:opacity-65 active:opacity-55 transition-all duration-300"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#667085] hover:opacity-65 active:opacity-55 transition-all duration-300"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#667085] hover:opacity-65 active:opacity-55 transition-all duration-300"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
}
