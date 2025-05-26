import { FC } from "react";
import { ReviewType } from "../../data/reviews";
interface ReviewProps {
  review: ReviewType;
  onClickNextReview: () => void;
  onClickPreviousReview: () => void;
}
const Review: FC<ReviewProps> = ({
  review,
  onClickNextReview,
  onClickPreviousReview,
}) => {
  return (
    <div className="w-[452px] mr-[8px]">
      <div className="flex gap-[8px]">
        <img
          className="w-[70px] h-[70px] object-cover rounded-full"
          src={review.img}
          alt=""
        />
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-between">
            <div className="text-bold text-[18px] leading-[1.33] text-[var(--dark)]">
              {review.name}
            </div>
            <div className="flex gap-[12px] items-center text text-[10px] text-var(--dark-grey)">
              <button onClick={onClickPreviousReview}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 6H2.5"
                    stroke="#01579B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 9.5L2.5 6L6 2.5"
                    stroke="#01579B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <div className="">{review.id}/6</div>
              <button onClick={() => onClickNextReview()}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6H9.5"
                    stroke="#01579B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 2.5L9.5 6L6 9.5"
                    stroke="#01579B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="text-400 text-[14px] leading-[1.43] text-[var(--gray-scale---60)] max-w-[374px] overflow-hidden h-[80px]">
            {review.text}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-[5px] items-center">
              {Array.from({ length: review.rating }, (_, index) => (
                <div className="flex gap-[5px]" key={index}>
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
              {Array.from({ length: 5 - review.rating }, (_, index) => (
                <div key={index} className="flex gap-[8px]">
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
              ))}
            </div>
            <div className="text-400 text-[14px] leading-[1.43] text-[var(--gray-scale---60)]">
              {review.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
