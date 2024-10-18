"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is InterviewPro?",
    answer:
      "Pour louer une voiture chez Carialog, vous devez être âgé d'au moins 21 ans, posséder un permis de conduire valide depuis au moins un an et fournir une pièce d'identité officielle.",
  },
  {
    question: "How do I book a mock interview?",
    answer:
      "You can book a mock interview by visiting our booking page and selecting your preferred date and time.",
  },
  {
    question: "Who will be my interviewer?",
    answer:
      "Your interviewer will be a trained professional with experience in the field you are applying for.",
  },
  {
    question: "What kind of feedback will I receive?",
    answer:
      "You will receive constructive feedback on your performance, including areas for improvement.",
  },
  {
    question: "Can I choose the topics or areas to focus on?",
    answer:
      "Yes, you can select specific topics or areas you wish to focus on during your mock interview.",
  },
];

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[1070px] sm:p-6 p-3 sm:mr-6 font-['Inter']">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-[19px] border-[1px] boder-[#CFCFCF] sm:rounded-[12px] rounded-[6.24px]">
          <div
            className={`flex justify-between items-center bg-[#FFFFFF] sm:p-[10px] px-[8px] py-[6px] cursor-pointer transition duration-200 hover:bg-gray-200 sm:rounded-[12px] rounded-[6.24px] ${openIndex === index ? "rounded-b-none" : "rounded-[12px]"}`}
            onClick={() => toggleOpen(index)}
          >
            <h3 className="sm:text-[15px] text-[10.8px] leading-[26.25px] tracking-[0.24px] font-medium ml-2">{faq.question}</h3>
            <span className="text-xl sm:mr-[31px]">
              {openIndex === index ? (
                // Close icon
                <svg
                  width="24"
                  height="24"
                  className="max-sm:w-[12.09px] max-sm:h-[12.09px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.7803 11.6947V10.9586H1.46729V12.4307H22.7803V11.6947Z"
                    fill="black"
                  />
                </svg>
              ) : (
                // Open icon
                <svg
                  width="24"
                  height="24"
                  className="max-sm:w-[12.09px] max-sm:h-[12.09px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3902 6.37333V11.3336H1.46973V12.8056H11.3902V22.7261H12.8622V12.8056H22.7827V11.3336H12.8622V1.41309H11.3902V6.37333Z"
                    fill="#05A105"
                  />
                </svg>
              )}
            </span>
          </div>
          {openIndex === index && (
            <div className="sm:p-4 px-[6px] pt-[6px] pb-[8px] bg-white border-t-[1px] border-[#CFCFCF] sm:rounded-b-[12px] rounded-b-[6.24px]">
              <p className="sm:text-[16px] text-[#4D4D4D] text-[10.32px] font-medium sm:leading-[21px] leading-[10.92px]">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqPage;
