import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import AuthSwiperButtons from "./auth_swiper_buttons";

export default function AuthSwiper() {
  return (
    <Swiper
      className="w-full flex justify-center"
      slidesPerView={1}
    >
      <SwiperSlide className="xl:px-[56px] pr-[170px] pl-[30px] text-[#FFFFFF] font-['Inter'] mb-[56px]">
        <h2 className="xl:text-[36px] text-[26px] font-medium xl:leading-[44px] leading-[34px] tracking-[-2%] mb-[24px]">
        &quot;InterviewPro&aposs tailored feedback refined my skills. Highly recommend
          for acing tech interviews.&quot;
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="xl:text-[30px] text-[20px] leading-[38px] font-semibold">
              Amélie Laurent
            </h3>
            <span className="xl:text-[18px] leading-[38px] font-semibold">
              Lead Engineer, Facebook
            </span>
          </div>
          <AuthSwiperButtons />
        </div>
      </SwiperSlide>

      <SwiperSlide className="xl:px-[56px] pr-[170px] pl-[30px] text-[#FFFFFF] font-['Inter'] mb-[56px]">
        <h2 className="xl:text-[36px] text-[26px] font-medium xl:leading-[44px] leading-[34px] tracking-[-2%] mb-[24px]">
        &quot;InterviewPro&aposs tailored feedback refined my skills. Highly recommend
          for acing tech interviews.&quot;
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="xl:text-[30px] text-[20px] leading-[38px] font-semibold">
              Amélie Laurent
            </h3>
            <span className="xl:text-[18px] leading-[38px] font-semibold">
              Lead Engineer, Facebook
            </span>
          </div>
          <AuthSwiperButtons />
        </div>
      </SwiperSlide>

    </Swiper>
  );
}
