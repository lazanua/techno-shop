import { FC, useState } from "react";

type FormInputs = string[];

interface WriteReviewFormProps {
  closeModal: () => void;
}
const WriteReviewForm: FC<WriteReviewFormProps> = ({ closeModal }) => {
  const [formInputs, setFormsInputs] = useState<FormInputs>([
    "Ім'я",
    "Email",
    "Переваги",
    "Недоліки",
  ]);
  const [userReview, setUserReview] = useState({
    name: "",
    email: "",
    advantages: "",
    flaws: "",
    comment: "",
    checkbox: false,
    rating: 0,
  });
  const [rating, setRating] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const sendReview = () => {
    closeModal();
  };
  const onHoverRating = (index: number) => {
    if (rating[index] === false) {
      setRating((prevArray) =>
        prevArray.map((item, i) => (i <= index ? true : false))
      );
    } else {
      setRating((prevArray) =>
        prevArray.map((item, i) => (i >= index ? false : true))
      );
    }
    const countTrue = rating.filter((value) => value === true).length;
    setUserReview((prev) => ({ ...prev, rating: countTrue }));
  };
  return (
    <div className="flex flex-col gap-[24px] w-[500px] text text-[12px] leading-[1.33] ">
      <div className="flex justify-between">
        <h4 className="subtitle-blue">Написати відгук</h4>
      </div>
      <div className="flex gap-[7px]">
        {rating.map((rate, index) => (
          <button onMouseEnter={() => onHoverRating(index)}>
            <svg
              className=""
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9993 1.66602L19.1194 10.0127L28.3327 11.3594L21.666 17.8527L23.2393 27.026L14.9993 22.6927L6.75935 27.026L8.33268 17.8527L1.66602 11.3594L10.8793 10.0127L14.9993 1.66602Z"
                fill={`${rate ? "var(--accent---orange)" : "var(--some---1)"} `}
                stroke={`${
                  rate ? "var(--accent---orange)" : "var(--some---1)"
                } `}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>
      <form action="">
        <div className="flex flex-col gap-[16px] ">
          {formInputs.map((input, index) => (
            <input
              key={index}
              type="text"
              placeholder={input}
              className="px-[8px] py-[13px] rounded-[4px] border"
            />
          ))}
        </div>
        <textarea
          className="w-full resize-none rounded-[4px] px-[8px] py-[13px] h-[126px] mt-[16px] border"
          placeholder="Коментар"
          value={userReview.comment}
          onChange={(e) =>
            setUserReview((prevState) => ({
              ...prevState,
              comment: e.target.value,
            }))
          }
        />
        <div className="flex gap-[10px] mt-[16px] items-center">
          <input
            type="checkbox"
            id="myCheckbox"
            className="w-[20px] h-[20px] rounded-[3px] border-none border"
            checked={userReview.checkbox}
            onChange={(e) =>
              setUserReview((prevState) => ({
                ...prevState,
                checkbox: e.target.value === "on" ? true : false,
              }))
            }
          />
          <label htmlFor="myCheckbox" className="text-[var(--dark-grey)]">
            Повідомляти про відповіді на електронну пошту
          </label>
        </div>
      </form>
      <div className="flex justify-between">
        <button
          className="button button-light button-light-blue w-[180px]"
          onClick={() => closeModal()}
        >
          Відмінити
        </button>
        <button
          className="button button-blue w-[180px]"
          onClick={() => sendReview()}
        >
          додати відгук
        </button>
      </div>
    </div>
  );
};

export default WriteReviewForm;
