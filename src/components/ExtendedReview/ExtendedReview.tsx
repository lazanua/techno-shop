import { FC, useState } from "react";
import { ReviewExample } from "../../data/reviewExample";
import buyIcon from "../../assets/img/product-page/buy-icon.svg";
import answerIcon from "../../assets/img/product-page/answer-icon.svg";
import arrowUp from "../../assets/img/product-page/arrow-up.svg";
import arrowDown from "../../assets/img/product-page/arrow-down.svg";
import likesIcon from "../../assets/img/product-page/likes-icon.svg";
import { ModalName } from "../../pages/ProductPage/ProductPage";
interface ReviewProps {
  review: ReviewExample;
  openModal: (str: ModalName) => void;
}
const ExtendedReview: FC<ReviewProps> = ({ review, openModal }) => {
  const [isOpenAnswers, setIsOpenAnswers] = useState<boolean>(false);
  return (
    <div className="shadow flex flex-col md:flex-row gap-[8px] p-[8px] text-p-grey md:w-auto w-[250px]">
      <div className="flex md:contents items-center gap-[16px]">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-[70px] h-[70px] rounded-full"
        />
        <p className="block md:hidden subtitle-blue">{review.name}</p>
      </div>

      <div className="">
        <div className="flex justify-between items-center mb-[8px]">
          <div className="flex md:flex-row flex-col  gap-[12px] items-center">
            <div className="subtitle-blue hidden md:block"> {review.name}</div>
            <div
              className="flex items-center gap-[10px]"
              style={{ color: "var(--action---primary)" }}
            >
              <img src={buyIcon} alt="" />
              <span>вже купив(ла)</span>
            </div>
            <div className="flex gap-[6px]">
              {review.rating &&
                Array.from({ length: review.rating }, (_, index) => (
                  <div className="flex gap-[5px] " key={index}>
                    <div key={index}>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"
                          fill="#FFCD1B"
                          stroke="#FFCD1B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              {review.rating &&
                Array.from({ length: 5 - review.rating }, (_, index) => (
                  <div className="flex gap-[5px]" key={index}>
                    <div>
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"
                          fill="#D9D9D9"
                          stroke="#D9D9D9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="date">{review.date}</div>
        </div>
        <div className="">
          <p>{review.text}</p>
          {review.advantages && (
            <div className="">
              <div className="my-[8px]" style={{ color: "var(--dark)" }}>
                Переваги
              </div>
              <div className="">{review.advantages}</div>
            </div>
          )}
          {review.flaws && (
            <div className="">
              <div className="my-[8px]" style={{ color: "var(--dark)" }}>
                Недоліки
              </div>
              <div className="">{review.flaws}</div>
            </div>
          )}
          <div className="flex items-center  gap-[24px] mt-[8px]">
            <button
              className="flex gap-[7px] items-center"
              onClick={() => openModal("write-review")}
            >
              <img src={answerIcon} alt="" />
              <span className="link">Відповісти</span>
            </button>

            {review.answers && (
              <div className="">
                <button
                  className="flex items-center gap-[12px]"
                  onClick={() => setIsOpenAnswers((prev) => !prev)}
                >
                  <div className="link w-[65px]">
                    {review.answers.length}
                    {review.answers.length === 1 ? " відповідь" : " відповіді"}
                  </div>
                  {isOpenAnswers ? (
                    <img src={arrowUp} alt="" className="hidden md:block" />
                  ) : (
                    <img src={arrowDown} alt="" className="hidden md:block" />
                  )}
                </button>
              </div>
            )}
            <div className="flex gap-[7px] items-center">
              <div className="" style={{ color: "var(--action---secondary)" }}>
                {review.likes}
              </div>
              <img src={likesIcon} alt="" />
            </div>
          </div>

          {isOpenAnswers && (
            <div className="flex flex-col gap-[8px] mt-[8px]">
              {review.answers?.map((answer, index) => (
                <div
                  key={index}
                  className="pl-[8px] max-w-[881px] ml-[32px]"
                  style={{
                    borderLeft: "1px solid var(--gray-scale---10)",
                  }}
                >
                  <div className="flex justify-between">
                    <div className="subsubtitle-blue">{answer.name}</div>
                    <div className="date">{answer.date}</div>
                  </div>
                  <p>{answer.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExtendedReview;
