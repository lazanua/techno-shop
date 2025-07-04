import { FC, useState } from "react";
interface ReportUserProps {
  closeModal: () => void;
}
const ReportUser: FC<ReportUserProps> = ({ closeModal }) => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [isUserEmailEmpty, setIsUserEmailEmpty] = useState<boolean>(true);
  const sendEmail = () => {
    if (userEmail === "") {
      setIsUserEmailEmpty(false);
    } else {
      closeModal();
    }
  };

  return (
    <div className="flex p-[16px] h-[100vh] md:h-auto justify-center md:p-0 flex-col gap-[24px]">
      <div className="flex justify-between">
        <div className="subtitle-blue">Повідомити, коли з'явиться</div>
      </div>
      <div className="">
        <p
          className="text tet-[12px] leading-[1.33] mb-[16px]"
          style={{ color: "var(--dark-grey) rounded-[4px]" }}
        >
          Напишіть ваш email, та ми повідомимо вам, коли товар буде в наявності
        </p>
        <input
          className={`py-[13px] px-[8px] w-[100%] ${
            !isUserEmailEmpty ? "placeholder-red-400" : ""
          } `}
          type="text"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>

      <div className="flex justify-between">
        <button
          className="button button-light button-light-blue w-[180px]"
          onClick={closeModal}
        >
          Відмінити
        </button>
        <div
          className="button button-blue w-[180px] text-center"
          onClick={() => sendEmail()}
        >
          Відправити
        </div>
      </div>
    </div>
  );
};

export default ReportUser;
