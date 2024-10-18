import { useSwiper } from "swiper/react";

export default function AuthSwiperButtons() {
        const swiper = useSwiper()
  return (
    <div className="flex gap-[32px]">
      <button className="hover:opacity-65 active:opacity-55 transition-all duration-300" onClick={() => swiper.slidePrev()}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="54"
            height="54"
            rx="27"
            stroke="white"
            stroke-opacity="0.5"
            stroke-width="2"
          />
          <path
            d="M35 28H21M21 28L28 35M21 28L28 21"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <button className="hover:opacity-65 active:opacity-55 transition-all duration-300" onClick={() => swiper.slideNext()}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="54"
            height="54"
            rx="27"
            stroke="white"
            stroke-opacity="0.5"
            stroke-width="2"
          />
          <path
            d="M21 28H35M35 28L28 21M35 28L28 35"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
