import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import avatar_1 from "@/components/images/avatars/avatar_1.png";
import avatar_2 from "@/components/images/avatars/avatar_2.png";
import avatar_3 from "@/components/images/avatars/avatar_3.png";
import avatar_4 from "@/components/images/avatars/avatar_4.png";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Jordan K.",
    username: "Software Developer",
    body: "“The tailored feedback and step-by-step advice I got from InterviewPro helped me refine my skills and approach. I highly recommend it to anyone serious about acing their tech interviews.”",
    img: avatar_1.src,
  },
  {
    id: 2,
    name: "Alex J.",
    username: "Software Engineer",
    body: "“InterviewPro was a game-changer for me. The feedback from an actual senior engineer gave me invaluable insights into my interview skills. I went from feeling unsure to confident and landed my dream job at a top tech company!”",
    img: avatar_2.src,
  },
  {
    id: 3,
    name: "Days Brewing",
    username: "Rob Johns, Finance Director",
    body: "“The mock interviews were incredibly realistic and helped me identify areas where I needed improvement. The actionable feedback I received was clear and practical, making a huge difference in my preparation.”",
    img: avatar_3.src,
  },
  {
    id: 4,
    name: "Days Brewing",
    username: "Rob Johns, Finance Director",
    body: "“I was impressed by the professionalism of the interviewers and the quality of feedback. InterviewPro’s platform made it easy to book and reschedule sessions, and the anonymous format was a great touch.”",
    img: avatar_4.src,
  },

  {
    id: 5,
    name: "Jordan K.",
    username: "Software Developer",
    body: "“The tailored feedback and step-by-step advice I got from InterviewPro helped me refine my skills and approach. I highly recommend it to anyone serious about acing their tech interviews.”",
    img: avatar_1.src,
  },
  {
    id: 6,
    name: "Alex J.",
    username: "Software Engineer",
    body: "“InterviewPro was a game-changer for me. The feedback from an actual senior engineer gave me invaluable insights into my interview skills. I went from feeling unsure to confident and landed my dream job at a top tech company!”",
    img: avatar_2.src,
  },
  {
    id: 7,
    name: "Days Brewing",
    username: "Rob Johns, Finance Director",
    body: "“The mock interviews were incredibly realistic and helped me identify areas where I needed improvement. The actionable feedback I received was clear and practical, making a huge difference in my preparation.”",
    img: avatar_3.src,
  },
  {
    id: 8,
    name: "Days Brewing",
    username: "Rob Johns, Finance Director",
    body: "“I was impressed by the professionalism of the interviewers and the quality of feedback. InterviewPro’s platform made it easy to book and reschedule sessions, and the anonymous format was a great touch.”",
    img: avatar_4.src,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative sm:max-w-[421px] max-w-[207.37px] cursor-pointer overflow-hidden rounded-xl border sm:px-6 px-3 sm:py-7 py-3",
        // light styles
        "border-gray-950/[.1] bg-[#FFFFFF] hover:bg-gray-950/[.05] transition-all duration-300",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center sm:gap-4 gap-[8px] sm:mb-[34px] mb-[14px]">
        <Image
          className="rounded-full max-sm:w-[29.55px] max-sm:h-[29.55px]"
          width="60"
          height="60"
          alt="Avatar"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="sm:text-sm text-[7.39px] font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="sm:text-xs text-[7.39px] font-medium dark:text-white/40 text-[#828281]">
            {username}
          </p>
          <svg
            width="102"
            height="18"
            className="max-sm:w-[50px]"
            viewBox="0 0 102 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.88212 2.87343C8.19946 2.11055 9.28179 2.11055 9.59912 2.87343L11.0739 6.41934L14.9017 6.72676C15.7262 6.79263 16.0605 7.82113 15.4322 8.35947L12.516 10.8578L13.4064 14.5928C13.5984 15.3975 12.7236 16.0328 12.0181 15.6022L8.74062 13.6004L5.46316 15.6022C4.75766 16.0328 3.88287 15.3968 4.07483 14.5928L4.96521 10.8578L2.049 8.35947C1.42071 7.82113 1.75504 6.79263 2.57954 6.72676L6.40737 6.41934L7.88212 2.87343Z"
              fill="#05A105"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.8821 2.87343C29.1995 2.11055 30.2818 2.11055 30.5991 2.87343L32.0739 6.41934L35.9017 6.72676C36.7262 6.79263 37.0605 7.82113 36.4322 8.35947L33.516 10.8578L34.4064 14.5928C34.5984 15.3975 33.7236 16.0328 33.0181 15.6022L29.7406 13.6004L26.4632 15.6022C25.7577 16.0328 24.8829 15.3968 25.0748 14.5928L25.9652 10.8578L23.049 8.35947C22.4207 7.82113 22.755 6.79263 23.5795 6.72676L27.4074 6.41934L28.8821 2.87343Z"
              fill="#05A105"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.8821 2.87343C50.1995 2.11055 51.2818 2.11055 51.5991 2.87343L53.0739 6.41934L56.9017 6.72676C57.7262 6.79263 58.0605 7.82113 57.4322 8.35947L54.516 10.8578L55.4064 14.5928C55.5984 15.3975 54.7236 16.0328 54.0181 15.6022L50.7406 13.6004L47.4632 15.6022C46.7577 16.0328 45.8829 15.3968 46.0748 14.5928L46.9652 10.8578L44.049 8.35947C43.4207 7.82113 43.755 6.79263 44.5795 6.72676L48.4074 6.41934L49.8821 2.87343Z"
              fill="#05A105"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M70.8821 2.87343C71.1995 2.11055 72.2818 2.11055 72.5991 2.87343L74.0739 6.41934L77.9017 6.72676C78.7262 6.79263 79.0605 7.82113 78.4322 8.35947L75.516 10.8578L76.4064 14.5928C76.5984 15.3975 75.7236 16.0328 75.0181 15.6022L71.7406 13.6004L68.4632 15.6022C67.7577 16.0328 66.8829 15.3968 67.0748 14.5928L67.9652 10.8578L65.049 8.35947C64.4207 7.82113 64.755 6.79263 65.5795 6.72676L69.4074 6.41934L70.8821 2.87343Z"
              fill="#05A105"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M91.8821 2.87343C92.1995 2.11055 93.2818 2.11055 93.5991 2.87343L95.0739 6.41934L98.9017 6.72676C99.7262 6.79263 100.061 7.82113 99.4322 8.35947L96.516 10.8578L97.4064 14.5928C97.5984 15.3975 96.7236 16.0328 96.0181 15.6022L92.7406 13.6004L89.4632 15.6022C88.7577 16.0328 87.8829 15.3968 88.0748 14.5928L88.9652 10.8578L86.049 8.35947C85.4207 7.82113 85.755 6.79263 86.5795 6.72676L90.4074 6.41934L91.8821 2.87343Z"
              fill="#05A105"
            />
          </svg>
        </div>
      </div>
      <blockquote className="max-sm:text-[7.88px] text-[#131319]">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
