import { FC } from "react";

const ReviewsStars: FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-[2px] sm:gap-[6px]">
      {Array.from({ length: rating }, (_, index) => (
        <div className="flex " key={index}>
          <div>
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
      {Array.from({ length: 5 - rating }, (_, index) => (
        <div className="flex" key={index}>
          <div key={index}>
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
  );
};

export default ReviewsStars;
